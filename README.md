# Bun

## Install

```bash
curl -fsSL https://bun.sh/install | bash
```

More at https://bun.sh/docs

## Commands

First, install dependencies with `bun install`, then:

```bash
bun --watch run bun.ts
```

OR

```bash
bun run bun.ts
```

To build the React component, run:

```bash
bun build react.tsx --outdir ./build
```

# Deno

## Install

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Then install and enable the [VSCode extension](https://docs.deno.com/runtime/manual/references/vscode_deno) and add settings at `.vscode/settings.json`:

```json
{
  "deno.config": "./tsconfig.json",
  "deno.enable": true,
  "deno.lint": true,
  "deno.unstable": true
}
```

More at https://docs.deno.com/runtime/manual

## Commands

```bash
deno run --allow-net --watch deno.ts
```

OR

```bash
deno run --allow-net deno.ts
```

To build the React component, run:

```bash
deno run react.tsx
```

# Node

## Install

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
nvm install 21
```

More at https://github.com/nvm-sh/nvm and https://nodejs.org/en

## Commands

First, install dependencies with `npm install`, then:

```bash
node --watch node.js
```

OR

```bash
node node.js
```

First, install TypeScript with `npm install typescript --global`, then to build the React component, run:

```bash
tsc react.tsx --esModuleInterop --jsx react --outDir ./build
```

# Ruby

For comparison, we can also run a Ruby (Rack) server.

## Install

```bash
curl -sSL https://get.rvm.io | bash -s stable
rvm install 3.2.2
```

More at https://rvm.io

## Commands

First, install [Rack](https://github.com/rack/rack):

```bash
gem install rack
gem install rackup
```

Then run the server:

```bash
rackup
```

# Benchmarking

While servers above are running, you can run [autocannon](https://github.com/mcollina/autocannon) benchmarking:

```bash
npm run autocannon:bun
npm run autocannon:deno
npm run autocannon:node
npm run autocannon:ruby
```

Alternatively, you can run [loadtest](https://github.com/alexfernandez/loadtest):

```bash
npm run loadtest:bun
npm run loadtest:deno
npm run loadtest:node
npm run loadtest:ruby
```