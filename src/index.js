import React from 'react';
import * as ReactDOMClient from 'react-dom/client';

const element = (
    <div className='remboooo'>
        <h1>Yaaaaaaaa</h1>
    </div>
)

const app = ReactDOMClient.createRoot(document.getElementById("root"));

app.render(element);