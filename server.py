#!/usr/bin/env python3
"""Simple HTTP server for Railway deployment with custom routing."""

import http.server
import socketserver
import os

PORT = int(os.environ.get('PORT', 8080))

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        # Route /plan to plan.html
        if self.path == '/plan' or self.path == '/plan/':
            self.path = '/plan.html'
        # Route root to index.html (default behavior, but explicit)
        elif self.path == '/':
            self.path = '/index.html'

        return super().do_GET()

with socketserver.TCPServer(("", PORT), CustomHandler) as httpd:
    print(f"Serving on port {PORT}")
    httpd.serve_forever()
