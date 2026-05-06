#!/bin/bash
# tests/load/run-tests.sh

set -e

echo "🔧 Préparation des tests de charge..."
# k6 version check can be added here if needed

# Variables
TEST_TYPE=${1:-"mixed"} # mixed, video, spike

# Lancement des tests
case $TEST_TYPE in
  "video")
    echo "🎬 Lancement test génération vidéo..."
    k6 run scenarios/video-generation-test.js
    ;;
  "spike")
    echo "⚡ Lancement test pic soudain..."
    k6 run scenarios/spike-test.js
    ;;
  "mixed")
    echo "🔄 Lancement test charge mixte..."
    k6 run scenarios/mixed-workload-test.js
    ;;
  *)
    echo "Test type non reconnu: $TEST_TYPE"
    echo "Utilisation: $0 [video|spike|mixed]"
    exit 1
    ;;
esac

echo "✅ Tests terminés"
