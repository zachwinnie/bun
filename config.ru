# https://github.com/rack/rack

run do |env|
  [200, {}, ["Hello World"]]
end

# # https://practicingruby.com/articles/implementing-an-http-file-server
# # https://ruby-doc.org/3.2.2/exts/socket/TCPServer.html

# require 'socket'

# server = TCPServer.new('localhost', 3003)

# loop do
#   Thread.start(server.accept) do |socket|
#     response = "Hello World!\n"
#     socket.print "HTTP/1.1 200 OK\r\n" +
#                 "Content-Type: text/plain\r\n" +
#                 "Content-Length: #{response.bytesize}\r\n" +
#                 "Connection: close\r\n"
#     socket.print "\r\n"
#     socket.print response
#     socket.close
#   end
# end
