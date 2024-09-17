import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
function App() {

  return (
    <div className="relative h-[3000px]">
    <Navbar />
    <main className=" flex flex-col w-full mt-48">
      <Outlet/>
    </main>
      <Footer/>
    </div>
  )
}

export default App
