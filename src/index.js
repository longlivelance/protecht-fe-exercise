import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './styles/styles.css'

const container = document.getElementById('app-container');
const root = createRoot(container);

root.render(<h1>Protecht</h1>);