import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

async function deferRender() {
  const { worker } = await import("./mocks/browser.js")
  return worker.start();
}

  // import('./mocks/browser.js').then(({ worker }) => {
  //   worker.start()
  //   console.log('MSW activo en desarrollo')
  // })

deferRender().then(() => {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})
