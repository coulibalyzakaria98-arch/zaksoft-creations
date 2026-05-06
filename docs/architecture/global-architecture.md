# Architecture Générale

```mermaid
graph TB
    A[Utilisateur] --> B[Frontend (Next.js)]
    B --> C[Service Auth]
    B --> D[Service Design IA]
    B --> E[Service Web Gen]
    B --> F[Service Communication]
    B --> G[Service Video IA]
    
    C --> H[PostgreSQL]
    D --> H
    E --> H
    F --> H
    G --> H
    
    D --> I[Stable Diffusion API]
    G --> J[Runway Gen-2 API]
    G --> K[ElevenLabs TTS]
    G --> L[Whisper API]
    
    H --> M[Redis Cache]
    G --> N[Queue (BullMQ)]
    
    N --> O[Worker Video Gen]
    O --> P[AWS S3]
```
