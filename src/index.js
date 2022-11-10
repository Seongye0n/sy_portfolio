import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <App/>
    </BrowserRouter>
  </React.StrictMode>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  // document.getElementById('root')
);