import http.server
import socketserver
import os

# Change to the directory where this script is located
os.chdir(os.path.dirname(os.path.abspath(__file__)))

PORT = 8080

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Server running at http://localhost:{PORT}/")
    print(f"Serving directory: {os.getcwd()}")
    print("Press Ctrl+C to stop the server")
    httpd.serve_forever()

