import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Footer from './Components/Footer.tsx'
import Header from './Components/Header.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <header className='flex-init'>
      <Header />
    </header>
    <main className='flex-1'>
      <App />
    </main>
    <footer className='flex-init'>
      <Footer />
    </footer>
  </React.StrictMode>,
)
