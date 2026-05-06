from fastapi import FastAPI, BackgroundTasks
import uuid
import time
import os

app = FastAPI(title="Mock AI Bridge", version="1.0.0")

# Dictionnaire pour stocker l'état des jobs
jobs = {}

@app.get("/health")
async def health():
    return {"status": "ok", "mock": True}

@app.post("/generate")
async def generate(background_tasks: BackgroundTasks):
    job_id = str(uuid.uuid4())
    jobs[job_id] = "processing"
    
    # Simuler le travail en arrière-plan
    background_tasks.add_task(simulate_work, job_id)
    
    return {"job_id": job_id, "status": "processing"}

@app.get("/status/{job_id}")
async def get_status(job_id: str):
    status = jobs.get(job_id, "not_found")
    if status == "completed":
        # Retourne une URL de chat astronaute par défaut pour SD, ou une vidéo mock pour SVD
        return {
            "status": "completed", 
            "image_url": "https://picsum.photos/1024",
            "video_url": "/mock-video.mp4" 
        }
    return {"status": status}

@app.get("/download/{job_id}")
async def download(job_id: str):
    return {"message": "Mock download link"}

def simulate_work(job_id: str):
    # Simuler un délai de génération de 5 secondes
    time.sleep(5)
    jobs[job_id] = "completed"

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
