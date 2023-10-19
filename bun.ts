Bun.serve({
  // development: true,
  fetch(req) {
    return new Response("Hello world");
  },
  port: 3000
});