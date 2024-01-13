import { useEffect, useRef, useState } from 'react'
import { Routes, Route, NavLink } from 'react-router-dom';
import './App.css'

// --- Assets & Icons ---

import LogoApp from './Assets/logo.jpg';
import UserImg from './Assets/profile.png';
import { PiListThin } from "react-icons/pi";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";
import { TfiHelpAlt } from "react-icons/tfi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";

// --- Pages ---

import DashBoard from './Pages/DashBoard';
import BillsPayments from './Pages/BillsPayments';

function NavBar(props) {
  const navLinksRef = useRef(null)

  function toggleNavLinks() {
    navLinksRef.current.classList.toggle('active')
  }

  function toggleMenuLinks() {
    props.menuRef.current.classList.toggle('active')
  }

  return(
    <>
      <div className="nav-bar">
        <div className="brand-section">
          <div className="nav-links" onClick={toggleMenuLinks}>
            <PiListThin className='icon'/>
          </div>
          <img src={LogoApp} className='logo-app'/>
          <h1 className="name-app">Name Business</h1>
        </div>
        <div className="link-help-section">
          <div className='Help-bt'>Need Help?</div>
          <div className='blog-bt'>Read Our Blog</div>
          <p className="user-name">User Nameddddd</p>
          <div className="user-img" onClick={toggleNavLinks}>
            <img src={UserImg}/>
          </div>
          <div className="nav-links-container" ref={navLinksRef}>
              <div className="profile-section">
                <div className="user-img">
                  <img src={UserImg}/>
                </div>
                <p className="user-name">User Namedddddddddsdsdsdsd</p>
              </div>
              <div className="links-section">
                <div className='link' onClick={toggleNavLinks}><MdOutlineDashboard className='icon' />Dashboard</div>
                <div className='link' onClick={toggleNavLinks}><AiOutlineCreditCard className='icon'/>Bills & Payments</div>
                <div className='link' onClick={toggleNavLinks}><BsGraphUpArrow className='icon'/>Expenses</div>
                <div className='link' onClick={toggleNavLinks}><IoSettingsOutline className='icon'/>Setting</div>
                <div className='link phone' onClick={toggleNavLinks}><TfiHelpAlt className='icon'/>Get Help</div>
                <div className='link phone' onClick={toggleNavLinks}><FaRegBookmark className='icon'/>Read Our Blog</div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

function App() {
  const menubarRef = useRef(null)

  function toggleWarningLinkElement(e) {
    e.target.classList.contains('warning') ? e.target.classList.remove('warning') : e.target.parentNode.classList.contains('warning') ? e.target.parentNode.classList.remove('warning') : null
  }
  
  return (
    <>
      <div className="app-container">
        {/* --- Navbar --- */}
        <NavBar menuRef={menubarRef}/>

        {/* --- Content --- */}
        <div className="content-section" onClick={toggleWarningLinkElement}>

          {/* --- menu section --- */}
          <div className="menu-section" ref={menubarRef}>
            <div className='tital'>Menu</div>
              <NavLink to={'/'} exact='true' className="link warning" activeclassname='active'><MdOutlineDashboard className='icon'/><p className='text'>Dashboard</p><div className='warning-icon'>NEW</div></NavLink>
              <NavLink to={'/billpayment'} className="link warning" activeclassname='active'><AiOutlineCreditCard className='icon'/><p className='text'>Bills & Payments</p><div className='warning-icon'>NEW</div></NavLink>
              <NavLink to={'/ss'} className="link warning" activeclassname='active'><BsGraphUpArrow className='icon'/><p className='text'>Expenses</p><div className='warning-icon'>NEW</div></NavLink>
              <NavLink to={'/aa'} className="link" activeclassname='active'><IoSettingsOutline className='icon'/><p className='text'>Setting</p><div className='warning-icon'>NEW</div></NavLink>
              <NavLink to={'/dd'} className="link" activeclassname='active'><TfiHelpAlt className='icon'/><p className='text'>Get Help</p><div className='warning-icon'>NEW</div></NavLink>
          </div>

          {/* --- Content --- */}
          <Routes>
            <Route path='/' element={<DashBoard/>}/>
            <Route path='/billpayment' element={<BillsPayments/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
