import { useState } from 'react'
import { Link } from 'react-router-dom'
import mpcsImg from '../assets/mpcs.png'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
       <div className="w-full h-auto text-white flex flex-col justify-center align-center text-center bg-[#f3f3f3] shadow-bottom">
        <header className="w-full h-auto flex bg-[#2c2c2c]  justify-center align-center text-center items-center ">
           <div className="w-full h-auto flex flex-wrap justify-around align-center text-center gap-3 p-2 max-sm:hidden text-[14px] px-10">
            <a href="#"><i class="bi bi-facebook"></i> Facebook</a>
            <a href="#"><i class="bi bi-telephone"></i> +09473285722</a>
            <a href="#"><i class="bi bi-envelope"></i> cpsu.moisespadilla@cpsu.edu.ph</a>
            <a href="#"><i class="bi bi-geo-alt-fill"></i> Brgy. 7, Moises Padilla, Negros Occidental 6103</a>
            </div> 
        </header>

        <div className="w-full h-auto text-black flex flex-row justify-center items-center align-center px-10 gap-[9%] ">
        <div className="w-[600px] h-[100px] justify-center items-center p-1">
    <img src={mpcsImg} alt="logo" className="w-[100%] h-[100%] object-cover items-center justify-center min-lg:w-[350px]" />
        </div>

        <nav className='w-[500px] h-auto bg-white p-2 font-bold'>
           <ul className="hidden md:flex justify-center items-center text-center px-5 gap-8 text-[18px] ">
                     <li><a href="#home" className="text-[#5f5f5f] text-[16px]">Home</a></li>
                     <li><a href="#about" className="text-[#5f5f5f] text-[16px]">About</a></li>
                     <li><a href="#services" className="text-[#5f5f5f] text-[16px]">Academics</a></li>
                     <li><a href="#contact" className="text-[#5f5f5f] text-[16px]">Admininstration</a></li>
               </ul>

               <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-black text-4xl">
         <i className={`bi ${isOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button>

        {isOpen && (
        <ul className="fixed top-23 left-0 w-full justify-center align-center items-center bg-black opacity-80 flex flex-col gap-4 px-6 py-10 md:hidden">
          <li><a href="#home" className="text-white"><i class="bi bi-house"></i> Home</a></li>
          <li><a href="#about" className="text-white"><i class="bi bi-person-vcard"></i> About</a></li>
          <li><a href="#services" className="text-white"><i class="bi bi-terminal"></i> Services</a></li>
          <li><a href="#contact" className="text-white"><i class="bi bi-send"></i> Contact</a></li>
        </ul>
      )}
        </nav>
        </div>

       </div> 
    ) 
}
export default Navbar;