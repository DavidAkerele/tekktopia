import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

function App() {

  return (
    <main className="relative flex flex-col w-full">
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default App
