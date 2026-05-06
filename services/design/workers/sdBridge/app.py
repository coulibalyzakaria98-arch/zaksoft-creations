from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional
import torch
from diffusers import StableDiffusionXLPipeline
import uuid
import os

app = FastAPI(title="Stable Diffusion XL Local Bridge", version="1.0.0")

# Chargement global du modèle
pipe = None

class GenerateRequest(BaseModel):
    prompt: str
    negative_prompt: Optional[str] = "ugly, deformed, noisy, blurry, low quality"
    width: Optional[int] = 1024
    height: Optional[int] = 1024
    num_inference_steps: Optional[int] = 30
    guidance_scale: Optional[float] = 7.5
    seed: Optional[int] = None

class GenerateResponse(BaseModel):
    job_id: str
    status: str
    image_url: Optional[str] = None

@app.on_event("startup")
async def load_model():
    global pipe
    print("Loading Stable Diffusion XL model...")
    
    pipe = StableDiffusionXLPipeline.from_pretrained(
        "stabilityai/stable-diffusion-xl-base-1.0",
        torch_dtype=torch.float16,
        variant="fp16",
        use_safetensors=True
    )
    pipe.enable_model_cpu_offload()
    print("Model loaded successfully")

@app.post("/generate", response_model=GenerateResponse)
async def generate_image(request: GenerateRequest, background_tasks: BackgroundTasks):
    job_id = str(uuid.uuid4())
    
    background_tasks.add_task(
        process_image,
        job_id,
        request.prompt,
        request.negative_prompt,
        request.width,
        request.height,
        request.num_inference_steps,
        request.guidance_scale,
        request.seed
    )
    
    return GenerateResponse(job_id=job_id, status="processing")

@app.get("/status/{job_id}")
async def get_status(job_id: str):
    image_path = f"/tmp/{job_id}.png"
    if os.path.exists(image_path):
        return {"status": "completed", "image_url": f"/download/{job_id}"}
    return {"status": "processing"}

@app.get("/download/{job_id}")
async def download_image(job_id: str):
    image_path = f"/tmp/{job_id}.png"
    if os.path.exists(image_path):
        return FileResponse(image_path, media_type="image/png", filename=f"{job_id}.png")
    raise HTTPException(status_code=404, detail="Image not found")

def process_image(job_id: str, prompt: str, negative_prompt: str, width: int, height: int, steps: int, cfg: float, seed: Optional[int]):
    global pipe
    
    try:
        if seed:
            generator = torch.manual_seed(seed)
        else:
            generator = None
        
        image = pipe(
            prompt=prompt,
            negative_prompt=negative_prompt,
            width=width,
            height=height,
            num_inference_steps=steps,
            guidance_scale=cfg,
            generator=generator
        ).images[0]
        
        output_path = f"/tmp/{job_id}.png"
        image.save(output_path)
        
        print(f"Image generated: {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")
