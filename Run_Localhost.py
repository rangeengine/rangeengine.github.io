import http.server, socketserver, subprocess

IP = "localhost"
PORT = 80
sections = ["/404", "/apireleases", "/changelog", "/changelog10", "/downloadpage", "/learnmore", "/store", "/whatsnew"]

class HTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
  def do_GET(self):
    if self.path == "" or self.path == "/":
      self.path = "index.html"
    elif self.path in sections:
      self.path += ".html"
    return http.server.SimpleHTTPRequestHandler.do_GET(self)
  def send_error(self, code, message=False):
    if code == 404:
      self.path = "404.html"
      return http.server.SimpleHTTPRequestHandler.do_GET(self)
      
if __name__ == "__main__":
  web_server = socketserver.TCPServer((IP, PORT), HTTPRequestHandler)
  try:
    web_server.serve_forever()
  except KeyboardInterrupt:
    pass
  web_server.server_close()