FROM pytorch/pytorch:2.1.0-cuda12.1-cudnn8-runtime

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Pré-télécharger le modèle au build (SDXL base)
RUN python -c "from diffusers import StableDiffusionXLPipeline; import torch; StableDiffusionXLPipeline.from_pretrained('stabilityai/stable-diffusion-xl-base-1.0', torch_dtype=torch.float16, variant='fp16', use_safetensors=True)"

EXPOSE 7861

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7861"]
