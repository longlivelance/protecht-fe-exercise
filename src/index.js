import React from 'react';
import { createRoot } from 'react-dom/client';
import ProtechtICW from   './components/ProtechtICW';
import './styles/styles.css'

const container = document.getElementById('app-container');
const root = createRoot(container);

// {"country":"US","locale":"en_US","region":"CA","currency":"USD","items":[{"cost":"5.00"}]}

let items = [
	{cost: 1.00},
	{cost: 3.75},
]
root.render(<ProtechtICW apiKey={process.env.API_KEY} items={items} />);