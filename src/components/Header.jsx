import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs';

function Header({openSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className="icon" onClick={openSidebar} />
        </div>
        <div className='header-left'>
            <BsSearch className="icon"/>
        </div>
        <div className='header-mid'>
            <p><b>Admin: Tanish Raj Singh</b></p>
        </div>
        <div className='header-right'>
            <BsFillBellFill className="icon"/>
            <BsFillEnvelopeFill className="icon"/>
            <BsPersonCircle className="icon"/>
        </div>
    </header>
  )
}

export default Header