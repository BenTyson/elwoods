#!/bin/bash

# El Woods Business Plan Webapp
# Starts local server on port 2277

PORT=2277
DIR="$(cd "$(dirname "$0")" && pwd)"

echo ""
echo "  ╔═══════════════════════════════════════╗"
echo "  ║         El Woods Business Plan        ║"
echo "  ║    \"Fuck normal, I want magic.\"       ║"
echo "  ╚═══════════════════════════════════════╝"
echo ""
echo "  Starting server on http://localhost:$PORT"
echo "  Press Ctrl+C to stop"
echo ""

cd "$DIR"

# Try Python 3 first, then Python 2
if command -v python3 &> /dev/null; then
    python3 -m http.server $PORT
elif command -v python &> /dev/null; then
    python -m SimpleHTTPServer $PORT
else
    echo "Error: Python not found. Please install Python."
    exit 1
fi
