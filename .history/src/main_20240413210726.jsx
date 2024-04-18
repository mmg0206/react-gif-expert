import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GifExpertApp.jsx'
import './styles.css';

// if (import.meta.hot) {
//   import.meta.hot.on(
//     "vite:beforeUpdate",
//     /* eslint-disable-next-line no-console */
//     () => console.clear()
//   );
// }
d
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>
)
