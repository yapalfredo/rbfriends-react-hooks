import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card.js';
import 'tachyons';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* with props */}
    <Card />
    <Card />
    <Card />
  </React.StrictMode>
);
