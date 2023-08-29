import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ValueGetterGrid from '/Users/nishant/Desktop/Tagic/vms/grid component/muigrid/my-app/src/mui.js';
import App1 from './handsOnTable';
import FullFeaturedCrudGrid from '/Users/nishant/Desktop/Tagic/vms/grid component/muigrid/my-app/src/demo.tsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ValueGetterGrid />
    <App1 />
    <FullFeaturedCrudGrid />
  </React.StrictMode>
);