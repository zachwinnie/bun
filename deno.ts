/// <reference lib="deno.ns" />

Deno.serve({ hostname: "localhost", port: 3002}, (request) => {
  return new Response("Hello world");
});
