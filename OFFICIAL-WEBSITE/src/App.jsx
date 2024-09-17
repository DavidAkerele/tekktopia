import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
function App() {

  return (
    <div className="">
    <Navbar />
    <main className="relative flex flex-col z-0 w-full">
      <Outlet/>
      <Footer/>
    </main>
    </div>
  )
}

export default App
