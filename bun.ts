Bun.serve({
  // development: true,
  fetch(req) {
    return new Response("Hello world");
  },
  port: 3000
});

console.log('Bun server running at http://localhost:3000');