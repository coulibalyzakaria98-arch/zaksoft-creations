from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.responses import FileResponse
from pydantic import BaseModel
from typing import Optional
import torch
from diffusers import StableVideoDiffusionPipeline
from diffusers.utils import export_to_video
import uuid
import os
from PIL import Image
import requests
from io import BytesIO

app = FastAPI(title="SVD Local Bridge", version="1.0.0")

# Chargement global du modèle
pipe = None

class GenerateRequest(BaseModel):
    image_url: str
    fps: Optional[int] = 6
    frames: Optional[int] = 25
    decode_chunk_size: Optional[int] = 8
    seed: Optional[int] = None

class GenerateResponse(BaseModel):
    job_id: str
    status: str
    video_url: Optional[str] = None

@app.on_event("startup")
async def load_model():
    global pipe
    print("Loading Stable Video Diffusion model...")
    
    pipe = StableVideoDiffusionPipeline.from_pretrained(
        "stabilityai/stable-video-diffusion-img2vid",
        torch_dtype=torch.float16,
        variant="fp16"
    )
    pipe.enable_model_cpu_offload()
    print("Model loaded successfully")

@app.post("/generate", response_model=GenerateResponse)
async def generate_video(request: GenerateRequest, background_tasks: BackgroundTasks):
    job_id = str(uuid.uuid4())
    
    background_tasks.add_task(
        process_video,
        job_id,
        request.image_url,
        request.fps,
        request.frames,
        request.decode_chunk_size,
        request.seed
    )
    
    return GenerateResponse(job_id=job_id, status="processing")

@app.get("/status/{job_id}")
async def get_status(job_id: str):
    video_path = f"/tmp/{job_id}.mp4"
    if os.path.exists(video_path):
        return {"status": "completed", "video_url": f"/download/{job_id}"}
    return {"status": "processing"}

@app.get("/download/{job_id}")
async def download_video(job_id: str):
    video_path = f"/tmp/{job_id}.mp4"
    if os.path.exists(video_path):
        return FileResponse(video_path, media_type="video/mp4", filename=f"{job_id}.mp4")
    raise HTTPException(status_code=404, detail="Video not found")

def process_video(job_id: str, image_url: str, fps: int, frames: int, decode_chunk_size: int, seed: Optional[int]):
    global pipe
    
    try:
        # Télécharger l'image
        response = requests.get(image_url)
        image = Image.open(BytesIO(response.content)).convert("RGB")
        
        # Redimensionner pour SVD (optimal: 576x1024)
        image = image.resize((1024, 576)) # Redimensionnement horizontal standard ou vertical selon besoin
        
        # Génération
        if seed:
            generator = torch.manual_seed(seed)
        else:
            generator = None
        
        frames_tensor = pipe(
            image,
            decode_chunk_size=decode_chunk_size,
            generator=generator
        ).frames[0]
        
        # Exporter
        output_path = f"/tmp/{job_id}.mp4"
        export_to_video(frames_tensor, output_path, fps=fps)
        
        print(f"Video generated: {output_path}")
    except Exception as e:
        print(f"Error processing video: {e}")
