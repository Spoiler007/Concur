import React, { useState } from 'react'
import './header.css'
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Header = () => {

    const [mobile, setMobile] = useState(false)
    const [dpdnChecked, setDpdnChecked] = useState(false)
    return (
        <div className='header'
        >

            <div className='logo'>
                <img src={`/logof-fotor.png`} alt="" />
                <h1>Concur</h1>
            </div>
            <div className='left_nav'>
                <div className='title'>
                    <a href='#'>stake</a>
                    <a href='#'>bond</a>
                    <a href='#'>flexloans</a>
                    <a href='#'>olympus pro</a>
                    <a href='#'>transparency</a>
                    <a href='#'>goverence</a>
        
                </div>
                <div class="hamburger" id="menuToggle">
                    <input type="checkbox" onClick={() => setDpdnChecked(!dpdnChecked)} />
                    <span />
                    <span />
                    <span />
                    <ul id="menu">
                        <a href='#'>stake</a>
                        <a href='#'>bond</a>
                        <a href='#'>flexloans</a>
                        <a href='#'>olympus pro</a>
                        <a href='#'>transparency</a>
                        <a href='#'>goverence</a>
                    </ul>
                </div>
                <button id='entry-btn'>
                <span className='btn-text-one'>Enter App</span>
                <span className='btn-text-two'>Enter App</span>
                
                </button>

            </div>
        </div>
    )
}

export default Header;