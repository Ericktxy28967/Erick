import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; in app.jsx
import Footer from './Footer';
 import { Link } from 'react-router-dom';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="relative bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Site</h1>
        <button onClick={toggleMenu} className="md:hidden">
          ☰
        </button>
      </div>
      <ul className={`menu mt-4 space-y-2 ${menuActive ? 'block' : 'hidden'} md:flex md:space-y-0 md:space-x-6`}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#footer">Footer</a></li>
      </ul>
      {/* <Router> this must be in app.jsx
      <Routes>
          <Route path="/" element={<Home />} />
        <Route path="/footer" element={<FooterPage />} />
        </Routes>
      </Router> */}

      <li><Link to="/footer">Footer</Link></li>

    </nav>
  );
}

export default Navbar;
