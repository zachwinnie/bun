import React from 'react';
import * as ReactDOM from 'react-dom/client';

function HelloWorld() {
  return <p>Hello world</p>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HelloWorld />)