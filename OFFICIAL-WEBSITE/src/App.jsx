import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
function App() {

  return (
    <div className="relative h-[4000px]">
    <Navbar />
    <main className=" flex flex-col w-full min-h-screen">
      <Outlet/>
    </main>
      <Footer/>
    </div>
  )
}

export default App
