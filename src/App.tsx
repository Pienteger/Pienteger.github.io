import Footer from "./Components/Footer"
import Header from "./Components/Header"
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className='flex-init'>
        <Header />
      </header>
      <main className='flex-1'>
        <Outlet />
      </main>
      <footer className='flex-init'>
        <Footer />
      </footer>
    </>
  )
}

export default App
