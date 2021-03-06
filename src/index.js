import React from 'react';   // Importamos React desde react
import ReactDOM from 'react-dom'; // Importamos ReactDOM desde react-dom

import { PseudoAleatorio } from './PseudoAleatorio';

import './index.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(
    <PseudoAleatorio />,
    divRoot
);
