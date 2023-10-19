// @deno-types="./node_modules/@types/react/index.d.ts"

import React from 'react';
import * as ReactDOM from 'react-dom/client';

import "./globals.ts";

function HelloWorld() {
  return <p>Hello world</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorld />)