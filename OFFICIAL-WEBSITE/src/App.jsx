import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'


function App() {

  return (
    <div className="relative">
    <Navbar />
    
    <main className="min-h-screen flex flex-col items-center w-full ">
      <Outlet/>
    </main>
      <Footer/>
    </div>
  )
}

export default App
