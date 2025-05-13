import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Link } from "react-router-dom";
import Navbar from './components/Navbar';
import mpcsImg from './assets/mpcs.png';
import mpcbgImg from './assets/mpcbg.jpg';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'academics' or 'administration'

  return (
    <div className='w-full h-auto text-black flex flex-col justify-center items-center text-center'>

      <div className="w-full h-auto text-white flex flex-col justify-center align-center text-center bg-[#f3f3f3] shadow-bottom">
      <header className="w-full h-auto flex bg-[#2c2c2c] justify-center items-center text-center">
        <div className="w-full h-auto flex flex-wrap justify-around items-center text-center gap-3 p-2 max-lg:hidden text-[14px] px-10">
          <a href="#"><i className="bi bi-facebook"></i> Facebook</a>
          <a href="#"><i className="bi bi-telephone"></i> +09473285722</a>
          <a href="#"><i className="bi bi-envelope"></i> cpsu.moisespadilla@cpsu.edu.ph</a>
          <a href="#"><i className="bi bi-geo-alt-fill"></i> Brgy. 7, Moises Padilla, Negros Occidental 6103</a>
        </div>
      </header>

      
      <div className="w-full h-auto text-black flex flex-row justify-center items-center max-sm:px-5 px-20 gap-[9%]">   
        <div className="w-[620px] h-[100px] p-1">
          <img src={mpcsImg} alt="logo" className="w-full h-full object-contain" />
        </div>
      
        <nav className='w-[500px] h-auto bg-white p-2 font-semibold'>
          <ul className="flex max-lg:hidden justify-center items-center text-center px-5 gap-5 text-[18px]">
            <li><a href="#home" className="text-[#5f5f5f] text-[16px]">Home</a></li>
            <li><a href="#about" className="text-[#5f5f5f] text-[16px]">About</a></li>
            <li className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'academics' ? null : 'academics')
                }
                className="text-[#5f5f5f] text-[16px] md:flex gap-1 pt-1"
              >
                Academics
                <i className={`bi ${activeDropdown === 'academics' ? 'bi-caret-down-fill' : 'bi-caret-down-fill'}`}></i>
              </button>
              {activeDropdown === 'academics' && (
                <ul className="absolute top-full mt-1 bg-white w-[180px] flex flex-col gap-1 py-2 rounded-[12px] border z-10 text-[16px] text-left font-medium">
                  <a href="#" className="hover:bg-[#d1d1d1] p-1 px-3 text-[#5f5f5f]">Admission</a>
                  <a href="#" className="hover:bg-[#d1d1d1] p-1 px-3 text-[#5f5f5f]">Program Offers</a>
                </ul>
              )}
            </li>
           
            <li className="relative">
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === 'administration' ? null : 'administration')
                }
                className="text-[#5f5f5f] text-[16px] md:flex gap-1 pt-1"
              >
                Administration
                <i className={`bi ${activeDropdown === 'administration' ? 'bi-caret-down-fill' : 'bi-caret-down-fill'}`}></i>
              </button>
              {activeDropdown === 'administration' && (
                <ul className="absolute top-full mt-1 bg-white w-[200px] flex flex-col gap-1 py-2 rounded-[12px] border z-10 text-[16px] text-left font-medium">
                  <a href="#" className="hover:bg-[#d1d1d1] p-1 px-3 text-[#5f5f5f]">Key Officials</a>
                  <a href="#" className="hover:bg-[#d1d1d1] p-1 px-3 text-[#5f5f5f]">Program Heads</a>
                  <a href="#" className="hover:bg-[#d1d1d1] p-1 px-3 text-[#5f5f5f]">Faculty</a>
                  <a href="#" className="hover:bg-[#d1d1d1] p-1 px-3 text-[#5f5f5f]">Administrative Functions</a>
                </ul>
              )}
            </li>
            <a href="#"><i class="bi bi-list"></i></a>
          </ul>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-black text-4xl">
            <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
          </button>
     
          {isOpen && (
            <ul className="fixed top-23 left-0 w-full justify-center items-center bg-black opacity-80 flex flex-col gap-4 px-6 py-10 lg:hidden z-20">
              <li><a href="#home" className="text-white"><i className="bi bi-house"></i> Home</a></li>
              <li><a href="#about" className="text-white"><i className="bi bi-person-vcard"></i> About</a></li>
              <li><a href="#services" className="text-white"><i className="bi bi-terminal"></i> Services</a></li>
              <li><a href="#contact" className="text-white"><i className="bi bi-send"></i> Contact</a></li>
            </ul>
          )}
        </nav>
      </div>            
    </div>

          <div className='w-full h-auto flex flex-col p-5 bg-[url(./assets/mpcbg.jpg)] opacity-80 bg-cover bg-center bg-no-repeat justify-center items-center text-center'>
            <div className='W-full h-auto flex flex-col justify-center items-center align-center'>
              <h3>hello world</h3>
            </div>
           </div> 

    </div>
  );
}

export default App;
