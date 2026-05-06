# Guide d'intégration des APIs Vidéo

## Runway Gen-2 / Pika Labs
- Installation : `npm install @runwayml/api`
- Authentification : Clé API via headers `Authorization: Bearer <key>`
- Endpoint : POST `/generate` avec payload `{ prompt: "description", duration: 30 }`

## ElevenLabs / Google TTS
- Installation : `npm install elevenlabs`
- Endpoint : POST `/synthesize` avec `{ text: "voix off", voice: "fr-FR-Neural2-D" }`

## Whisper (OpenAI)
- Installation : `npm install openai`
- Endpoint : POST `/audio/transcriptions` avec fichier audio

## FFmpeg
- Commande : `ffmpeg -i video.mp4 -i audio.mp3 -c:v copy -c:a aac output.mp4`
