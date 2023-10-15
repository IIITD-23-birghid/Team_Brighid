import React from 'react'
import './nav.css';
import { RiHome3Fill } from 'react-icons/ri';
import { RiFileList3Fill } from 'react-icons/ri';
import { AiFillCreditCard } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <Link to="/"  onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><RiHome3Fill style={{ width: '24px', height: '24px' }} /></Link>
      <Link to="/history" onClick={() => setActiveNav('#history')} className={activeNav === '#history' ? 'active' : ''}><RiFileList3Fill style={{ width: '24px', height: '24px' }} /></Link>
      <Link to="/category" onClick={() => setActiveNav('#activity')} className={activeNav === '#activity' ? 'active' : ''}><AiFillCreditCard style={{ width: '24px', height: '24px' }}/></Link>
      <Link to="/for-her" onClick={() => setActiveNav('#community')} className={activeNav === '#community' ? 'active' : ''}><BsFillPeopleFill style={{ width: '24px', height: '24px' }}/></Link>
      <Link to="/input"  style={{position:"absolute",width:"60px",height:"60px",borderRadius:"50%",
    background:"linear-gradient(90deg, #129976 -31.97%, #23FFC6 118.85%)",fontSize:"50px",display:"flex",alignItems:"center",
    justifyContent:"center",color:"white",top:"-30%",left:"45%"}}><div>+</div></Link>
    </nav>
   
  )
}

export default Footer