import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import ValueGetterGrid from '/Users/nishant/Desktop/Tagic/vms/grid component/muigrid/my-app/src/mui.js';
// import App1 from './handsOnTable';
import {RHFMultiSelect} from '/Users/nishant/Desktop/Tagic/vms/grid component/muigrid/my-app/src/demo.tsx';
  
const root = ReactDOM.createRoot(document.getElementById('root'));

const OPTIONS = [
  { value: "All", label: "All" },
  { value: "adas1", label: "asd3as" },
  { value: "adas2", label: "as23das" },
  { value: "adas3", label: "asd362as" },
  { value: "adas4", label: "asda6s" },
  { value: "adas5", label: "as5das" },
  { value: "adas6", label: "as34das" },
  { value: "adas7", label: "asd6as" }
];
root.render(
  <React.StrictMode>
    {/* <App />
    <ValueGetterGrid />
    <App1 /> */}
    <h1>wefwf</h1>
    <RHFMultiSelect
    chip
    checkbox
    name="channel"
    label="Channel"
    options={OPTIONS}
  />
  </React.StrictMode>
);