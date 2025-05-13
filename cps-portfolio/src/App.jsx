import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import userImg from './assets/user.png';
import heroImg from './assets/hero.png';
import  cpsImg  from './assets/cps.png';
import edImg from './assets/ed.png';
import pmImg from './assets/pm.png';
import bdImg from './assets/bd.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css'



function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full font-sans'>
      <title>www.CPS-Portfolio.ph</title>

      <nav className="bg-[#fafafa] px-10 py-4 flex justify-center items-center w-full gap-[40%] sticky top-0 shadow-bottom z-1 ">
      <a href="#" className="text-2xl font-bold flex flex-wrap align-center justify-center items-center gap-1 text-black"> <img className='w-15 h-15 object-cover' src={cpsImg} alt="" />CPS</a>
               <ul className="hidden md:flex justify-center items-center text-center gap-10 text-[18px] ">
                     <li><a href="#home" className="text-black"> <i class="bi bi-house"></i> Home</a></li>
                     <li><a href="#about" className="text-black"><i class="bi bi-person-vcard"></i> About</a></li>
                     <li><a href="#services" className="text-black"> <i class="bi bi-terminal"></i> Services</a></li>
                     <li><a href="#contact" className="text-black"><i class="bi bi-send"></i> Contact</a></li>
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

    <div id='home' className='w-full h-auto flex justify-center items-center align-center pt-10 bg-[#fafafa]'>
      <div className=' w-full h-auto justify-center items-center align-center flex flex-wrap md:gap-20 px-[5px] py-[4%] pb-0'>
       
        <div className='w-[400px] h-auto  text-[#000000] flex flex-col justify-center align-center text-center p-5 gap-5'>
          <p className='text-[40px] font-bold w-full'>Giving our Best <br />
           for Your Success </p>
          <div className='w-full h-auto flex flex-wrap gap-5 text-3xl p-1'><span className='w-15 h-1 mt-5 rounded-full bg-[#1b0324]'> </span>
          <i class="bi bi-github"></i> <i class="bi bi-facebook"></i> <i class="bi bi-instagram"></i> <i class="bi bi-linkedin"></i>
          </div>
          <p className='text-[20px] w-full'>"Meet our team that will help you in creating best and innovative systems. We offer many services from developing, designing, prototyping and more."</p>
          <button className='w-33 h-12 p-2 mt-2 flex justify-center align-center items-center bg-black text-white  rounded-[12px] gap-1.5'><i class="bi bi-check-circle-fill"></i> Get Started</button>
        </div>
  
        <div className='w-[450px] h-auto text-[#fafafa] flex justify-center align-center p-2 py-2'>
          <img src={edImg} alt="logo" className='w-[100%] h-auto object-contain border-black border-b-1  pt-5 px-3 bg-[#fafafa]'/>
        </div>

      </div>
    </div>

     <div id='about' className='w-full h-auto flex justify-center items-center text-black bg-[#fafafa]'>
      <div className=' w-full h-auto justify-center items-center align-center flex flex-wrap md:gap-20 px-[5px] py-[4%] pb-10'>

        <div className='w-full h-auto text-2xl flex flex-wrap justify-center items-center align-center text-center gap-10 p-2'>
          <div className='scroll-fade-in bg-white p-4 rounded-[12px] text-[22px] shadow-bottom'>
            <span><i class="bi bi-hdd-rack"></i> Backend Developer</span>
          </div>
          <div className='scroll-fade-in bg-white p-4 rounded-[12px] text-[22px] shadow-bottom'>
            <span><i class="bi bi-person-arms-up"></i> Project Manager</span>
          </div>
          <div className='scroll-fade-in bg-white p-4 rounded-[12px] text-[22px] shadow-bottom'>
            <span><i class="bi bi-window-stack"></i> Frontend Developer</span>
          </div>
        </div>

      </div>
     </div>

     <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center bg-[#fafafa] max-md:pt-30'>
      <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center px-[12px] py-[4%] p-2 gap-20 max-md:gap-5'>

        <div className='w-[400px] h-auto flex flex-col justify-center items-center text-center p-2 pb-0 gap-2'>
          <span className='scroll-fade-in text-8xl'><i class="bi bi-terminal-fill"></i></span>
          <span className='scroll-fade-in text-4xl font-bold'>John Loyd Cabiling</span>
          <span className='scroll-fade-in text-3xl'>"Backend Developer"</span>
          <span className='scroll-fade-in text-[18px]'>Age: 20 years old <br /> Address: Bi-ak Bato, Lacastellana,<br /> Negros Occidental</span>
          <span className='scroll-fade-in text-2xl'>Skills: Python, Linux, MySql, C++ </span>
          <span className='scroll-fade-in text-5xl pt-3'><i class="bi bi-tux"></i> <i class="bi bi-database"></i> <i class="bi bi-filetype-py"></i></span>
        </div>

        <div className='w-[400px] h-auto flex justify-center items-center text-center  p-2'>
        <img src={bdImg} alt="hero" className='scroll-fade-in w-full h-auto object-contain border-b-1'/>
        </div>

      </div>
     </div>

      <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center bg-[#fafafa] max-md:pt-30 pb-5'>
      <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center px-[12px] py-[4%] p-2 gap-20 max-md:gap-5'>


        <div className='w-[400px] h-auto flex justify-center items-center text-center  p-2'>
        <img src={pmImg} alt="hero" className='scroll-fade-in w-full h-auto object-contain border-b-1'/>
        </div>

        <div className='w-[400px] h-auto flex flex-col justify-center items-center text-center p-2 pt-12 pb-5 gap-2'>
          <span className='scroll-fade-in text-8xl'><i class="bi bi-wordpress"></i></span>
          <span className='scroll-fade-in text-4xl font-bold'>Paul Joseph Paulmitan</span>
          <span className='scroll-fade-in text-3xl'>"Project Manager"</span>
          <span className='scroll-fade-in text-[18px]'>Age: 25 years old <br /> Address: Moises Padilla,<br /> Negros Occidental</span>
          <span className='scroll-fade-in text-2xl'>Skills: Documentation, 3D Prototyping, Critical Thinking </span>
          <span className='scroll-fade-in text-5xl pt-3'><i class="bi bi-filetype-pptx"></i> <i class="bi bi-badge-3d"></i> <i class="bi bi-windows"></i></span>
        </div>

      </div>
     </div>

     <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center bg-[#fafafa] max-md:pt-30'>
      <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center px-[12px] py-[4%] p-2 gap-20 max-md:gap-5'>

        <div className='w-[400px] h-auto flex flex-col justify-center items-center text-center p-2 pb-0 gap-2'>
          <span className='scroll-fade-in text-8xl'><i class="bi bi-amd"></i></span>
          <span className='scroll-fade-in text-4xl font-bold'>Eric John Solinap</span>
          <span className='scroll-fade-in text-3xl'>"Frontend Developer"</span>
          <span className='scroll-fade-in text-[18px]'>Age: 20 years old <br /> Address: Moises Padilla,<br /> Negros Occidental</span>
          <span className='scroll-fade-in text-2xl'>Skills: HTML5, CCS3, JS, React, Tailwind, Vite, Next.js, React Native </span>
          <span className='scroll-fade-in text-5xl pt-3'><i class="bi bi-filetype-html"></i> <i class="bi bi-css"></i> <i class="bi bi-javascript"></i> <i class="bi bi-filetype-jsx"></i> </span>
        </div>

        <div className='w-[400px] h-auto flex justify-center items-center text-center  p-2'>
        <img src={heroImg} alt="hero" className='scroll-fade-in w-full h-auto object-contain border-b-1'/>
        </div>

      </div>
     </div>

     <div className='w-full h-auto flex flex-col justify-center align-center items-center text-center max-md:pt-20 pt-10 bg-[#fafafa]'>
      <span className='scroll-fade-right font-bold text-4xl flex flex-wrap text-center justify-center p-1'>Our Projects <i class="bi bi-bezier2 text-4xl"></i></span>
      <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center mt-20 mb-10 p-2 max-md:px-2 px-10 gap-20 min-md:gap-10 min-lg:gap-20'>
        
       <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-white bg-black'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-right font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-blue-700  p-3 bg-white rounded-2xl '>Visit here <i class="bi bi-box-arrow-in-up-right"></i></a>
          </div>
        </div>
        
        <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-white bg-black'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-right font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-blue-700  p-3 bg-white rounded-2xl '>Visit here <i class="bi bi-box-arrow-in-up-right"></i></a>
          </div>
        </div>

        <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-white bg-black'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-right font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-blue-700  p-3 bg-white rounded-2xl '>Visit here <i class="bi bi-box-arrow-in-up-right"></i></a>
          </div>
        </div>

        <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-white bg-black'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-right font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-blue-700  p-3 bg-white rounded-2xl '>Visit here <i class="bi bi-box-arrow-in-up-right"></i></a>
          </div>
        </div>

        <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-white bg-black'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-right font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-blue-700  p-3 bg-white rounded-2xl '>Visit here <i class="bi bi-box-arrow-in-up-right"></i></a>
          </div>
        </div>
        
      </div>
     </div>

     <div id='services' className='w-full h-auto flex flex-col justify-center align-center items-center text-center max-md:pt-30 pt-40 pb-20 bg-[#fafafa]'>
      <span className='scroll-fade-right font-bold text-4xl flex flex-wrap justify-center text-center p-1'>What we offer <i class="bi bi-question-lg font-extrabold text-4xl"></i></span>
      <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center mt-20 mb-10 p-2 max-md:px-2 px-10 gap-20 min-md:gap-10 min-lg:gap-20'>
        
        <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-[#353535] bg-[#ffffff] shadow-bottom'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-in font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-[#353535]  p-3 bg-[#dadada] shadow-bottom rounded-[12px]'>Inquire now <i class="bi bi-send-fill ml-1"></i></a>
          </div>
        </div>
        
        <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-[#353535] bg-[#ffffff] shadow-bottom'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-in font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-[#353535]  p-3 bg-[#dadada] shadow-bottom rounded-[12px]'>Inquire now <i class="bi bi-send-fill ml-1"></i></a>
          </div>
        </div>

        <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-[#353535] bg-[#ffffff] shadow-bottom'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-in font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-[#353535]  p-3 bg-[#dadada] shadow-bottom rounded-[12px]'>Inquire now <i class="bi bi-send-fill ml-1"></i></a>
          </div>
        </div>

        <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-[#353535] bg-[#ffffff] shadow-bottom'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-in font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-[#353535]  p-3 bg-[#dadada] shadow-bottom rounded-[12px]'>Inquire now <i class="bi bi-send-fill ml-1"></i></a>
          </div>
        </div>

        <div className='w-[400px] h-auto p-3 rounded-2xl justify-center align-center items-center text-[#353535] bg-[#ffffff] shadow-bottom'>
          <div className='w-full h-[250px] p-2'>
            <img src={heroImg} alt="heroimg" className='scroll-fade-in w-full h-[100%] object-contain' />
          </div>
          <div className='w-full h-[250px] flex flex-col justify-center align-center items-center p-2 gap-1'>
            <span className='scroll-fade-in font-bold text-3xl'>GSIM</span>
            <span className='scroll-fade-left text-center px-7 py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eius dicta perferendis </span>
            <a href="#" className='scroll-fade-right w-40 h-auto text-[18px] text-[#353535]  p-3 bg-[#dadada] shadow-bottom rounded-[12px]'>Inquire now <i class="bi bi-send-fill ml-1"></i></a>
          </div>
        </div>
        
      </div>
     </div>

      <div className='w-full h-auto flex flex-col justify-center align-center items-center text-center bg-[#e4e4e4] pt-10 pb-20'>
        <span className='scroll-fade-right text-[#353535] font-bold p-10 pb-20 text-4xl'>Testemonials "</span>
        <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center p-2 gap-20'>
          
          <div className='w-[400px] h-[310px] bg-white flex flex-col align-center text-center p-3 shadow-bottom '>
           <div className='w-full h-auto flex flex-row justify-items-start items-center p-2 pt-5'>
            <img src={userImg} alt="" className='scroll-fade-in w-[50px] h-[50px] object-cover rounded-full border-2 border-[#fafafa]' />
            <span className='scroll-fade-in text-2xl pl-4 font-bold text-[#353535]'>Sarah h.</span>
           </div>

           <div className='w-full h-auto flex justify-center aligcn-center items-center text-center p-3 pt-4'>
            <span className='scroll-fade-in text-[20px] text-[#353535]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit." </span>
           </div>
           <div className='w-full h-auto flex flex-row justify-items-end items-center p-2 pt-7'>
            <span className='scroll-fade-in text-[18px] pl-30 font-bold max-sm:pl-15 text-[#353535]'>- Our first client.</span>
           </div>
           <span className='scroll-fade-in font-bold'><i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-black"></i> 4.5/5</span>
          </div>

          <div className='w-[400px] h-[310px] bg-white flex flex-col align-center text-center p-3 shadow-bottom '>
           <div className='w-full h-auto flex flex-row justify-items-start items-center p-2 pt-5'>
            <img src={userImg} alt="" className='scroll-fade-in w-[50px] h-[50px] object-cover rounded-full border-2 border-[#fafafa]' />
            <span className='scroll-fade-in text-2xl pl-4 font-bold text-[#353535]'>Sarah h.</span>
           </div>

           <div className='w-full h-auto flex justify-center aligcn-center items-center text-center p-3 pt-4'>
            <span className='scroll-fade-in text-[20px] text-[#353535]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit." </span>
           </div>
           <div className='w-full h-auto flex flex-row justify-items-end items-center p-2 pt-7'>
            <span className='scroll-fade-in text-[18px] pl-30 font-bold max-sm:pl-15 text-[#353535]'>- Our first client.</span>
           </div>
           <span className='scroll-fade-in font-bold'><i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-black"></i> 4.5/5</span>
          </div>

          <div className='w-[400px] h-[310px] bg-white flex flex-col align-center text-center p-3 shadow-bottom '>
           <div className='w-full h-auto flex flex-row justify-items-start items-center p-2 pt-5'>
            <img src={userImg} alt="" className='scroll-fade-in w-[50px] h-[50px] object-cover rounded-full border-2 border-[#fafafa]' />
            <span className='scroll-fade-in text-2xl pl-4 font-bold text-[#353535]'>Sarah h.</span>
           </div>

           <div className='w-full h-auto flex justify-center aligcn-center items-center text-center p-3 pt-4'>
            <span className='scroll-fade-in text-[20px] text-[#353535]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit." </span>
           </div>
           <div className='w-full h-auto flex flex-row justify-items-end items-center p-2 pt-7'>
            <span className='scroll-fade-in text-[18px] pl-30 font-bold max-sm:pl-15 text-[#353535]'>- Our first client.</span>
           </div>
           <span className='scroll-fade-in font-bold'><i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-black"></i> 4.5/5</span>
          </div>

          <div className='w-[400px] h-[310px] bg-white flex flex-col align-center text-center p-3 shadow-bottom '>
           <div className='w-full h-auto flex flex-row justify-items-start items-center p-2 pt-5'>
            <img src={userImg} alt="" className='scroll-fade-in w-[50px] h-[50px] object-cover rounded-full border-2 border-[#ffffff]' />
            <span className='scroll-fade-in text-2xl pl-4 font-bold text-[#353535]'>Sarah h.</span>
           </div>

           <div className='scroll-fade-in w-full h-auto flex justify-center aligcn-center items-center text-center p-3 pt-4'>
            <span className='text-[20px] text-[#353535]'>"Lorem ipsum dolor sit amet consectetur adipisicing elit." </span>
           </div>
           <div className='scroll-fade-in w-full h-auto flex flex-row justify-items-end items-center p-2 pt-7'>
            <span className='scroll-fade-in text-[18px] pl-30 font-bold max-sm:pl-15 text-[#353535]'>- Our first client.</span>
           </div>
           <span className='scroll-fade-in font-bold'><i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-orange-400"></i> <i class="bi bi-star-fill text-black"></i> 4.5/5</span>
          </div>

        </div>
      </div>

      <div className='w-full h-auto flex flex-col justify-center align-center items-center text-center bg-[#fafafa] pt-5 pb-20'>
        <span className=' scroll-fade-right text-[#353535] font-bold pt-20 p-5 pb-10 text-4xl'>Message us <i class="bi bi-chat-left-quote-fill pl-2"></i></span>
        <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center p-2'>
          
          <div className=' scroll-fade-in w-[500px] h-[400px] flex flex-col justify-center items-center align-center text-center bg-[#fafafa] p-5 gap-5'>
            <input type="email" placeholder='Email' className=' bg-[#e4e4e4] outline-none w-full h-[60px] rounded-[12px] pl-5 font-bold text-[18px]' />
            <input type="phone" placeholder='Phone ' className='bg-[#e4e4e4] outline-none w-full h-[60px] rounded-[12px] pl-5 font-bold text-[18px]' />
            <textarea name="message" id="messagehere" cols="1" rows="2" placeholder='Message' className='bg-[#e4e4e4] outline-none overflow-hidden w-full h-[200px] rounded-[12px] p-5 font-bold text-[18px]'></textarea>
          </div>
        </div>
        <a href="#" className=' scroll-fade-in w-auto h-auto bg-green-400 text-white p-5 mt-5 flex justify-center items-center rounded-[12px] shadow-bottom text-[20px] font-bold'>Send now <i class="bi bi-send pl-3"></i></a>
      </div>

      <div className='w-full h-auto flex flex-col justify-center align-center items-center text-center bg-[#353535] '>
        <div className='w-full h-auto flex flex-wrap justify-center align-center items-center text-center p-2 pt-10 pb-5 gap-10'> 

          <div className='w-[400px] h-auto p-3  flex flex-row justify-center align-center items-center text-[#fafafa] bg-[#353535] shadow-bottom gap-2'>
          <img src={cpsImg} alt="" className='w-[50px] h-[50px] object-cover bg-[#fafafa] rounded-full' />
          <span className='text-2xl font-bold'>CPS</span>
          </div>

          <div className='w-[400px] h-auto p-3  flex flex-col justify-center align-center items-center text-center text-[#fafafa] bg-[#353535] shadow-bottom gap-2'>
          <span className='text-[18px] font-bold flex justify-center items-center'>Follow us <i class="bi bi-facebook text-blue-500  pl-2"></i> <i class="bi bi-envelope-at-fill pl-2"></i></span>
          <span className='text-[16px] flex justify-center items-center'>FB: CPS.DevOfficial</span>
          <span className='text-[16px] flex justify-center items-center'>Gmail: CPS-Dev@gmail.com</span>
          </div>

          <div className='w-[400px] h-auto p-3  flex flex-col justify-center align-center items-center text-center text-[#fafafa] bg-[#353535] shadow-bottom '>
          <span className='text-[18px] font-bold flex justify-center items-center'>Help Center <i class="bi bi-gear-fill pl-2"></i></span>
          <span className='text-[16px] flex justify-center items-center'>FAQ's</span>
          <span className='text-[16px] flex justify-center items-center'>Prvacy & Terms</span>
          <span className='text-[16px] flex justify-center items-center'>Recommendations</span>
          </div>

          <div className='w-[400px] h-auto p-3  flex flex-col justify-center align-center items-center text-center text-[#fafafa] bg-[#353535] shadow-bottom gap-2 '>
          <span className='text-[18px] font-bold flex justify-center items-center'>@Allrights Reserved 2025</span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
