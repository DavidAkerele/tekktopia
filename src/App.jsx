import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'leaflet/dist/leaflet.css';
import SignupTrigger from './components/SignupTrigger';

function App() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen flex flex-col items-center w-full ">
        <Outlet />
      </main>
      <SignupTrigger />
      <Footer />
    </div>
  );
}

export default App;
