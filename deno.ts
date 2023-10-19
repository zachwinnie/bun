Deno.serve({ port: 3002 }, (request) => {
  return new Response("Hello world");
});