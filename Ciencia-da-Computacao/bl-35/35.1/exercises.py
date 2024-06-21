import socketserver


class MyTCPHandler(socketserver.BaseRequestHandler):
    """
    The request handler class for our server.

    It is instantiated once per connection to the server, and must
    override the handle() method to implement communication to the
    client.
    """

    def handle(self):
        # Usar b'' é um jeito literal de escrever bytes em ascii
        self.wfile.write(b"Hello, World!\n")
        # self.wfile e self.rfile são canais de entrada e saída
        # programados para ter a mesma interface de arquivos!
        for line in self.rfile:
            # esta linha responde o cliente
            self.wfile.write(line)
            # esta linha imprime no console
            print(line.decode("ascii").strip())


if __name__ == "__main__":
    HOST, PORT = "", 8085

    # Create the server, binding on port 8085
    with socketserver.TCPServer((HOST, PORT), MyTCPHandler) as server:
        # Activate the server; this will keep running until you
        # interrupt the program with Ctrl-C
        server.serve_forever()
