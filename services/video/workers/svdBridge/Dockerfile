FROM pytorch/pytorch:2.1.0-cuda12.1-cudnn8-runtime

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Pré-télécharger le modèle au build
RUN python -c "from diffusers import StableVideoDiffusionPipeline; import torch; StableVideoDiffusionPipeline.from_pretrained('stabilityai/stable-video-diffusion-img2vid', torch_dtype=torch.float16)"

EXPOSE 7860

CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "7860"]
