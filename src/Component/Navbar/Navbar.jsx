import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {

    return (
        <div className='nav-container'>
            <div className='brandlogo'>
                <img alt="" className='nav-logo' src="https://im.indiatimes.in/content/2020/Jul/indian-currency-389006_1920_5f1547587ee6e.jpg?w=725&h=543&cc=1" />
            </div>
            <div className='nav-links'>
                <ul className='nav-ul'>
                    <Link className='link-tag' to='/'>HOME</Link>
                    <Link className='link-tag' to='store'>STORE</Link>
                    <Link className='link-tag' to='contact'>CONTACT</Link>
                </ul>
            </div>
            <div  className='brandlogo'>
                <img alt="" className='user-logo' src="https://www.dehradun.live/uploads/images/2021/12/image_750x500_61c0281398d99.jpg" />
            </div>
        </div>

    )
}

export default Navbar