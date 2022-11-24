import React, { useState } from "react";
import './Navbar.css'
import { Button } from './Button'
import Dropdown from './Dropdown'
import { Link } from 'react-router-dom'
import { MenuItems } from "./MenuItems";
import { Movies } from "./MenuItems/Movies";

function Navbar() {
    const [click, setClick] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if (window.innerWidth < 960) {
            setDropdown(true)
        } else if (window.innerWidth > 960) {
            setDropdown(true)
        } else {
            setDropdown(false)
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 960) {
            setDropdown(false);
        }else if (window.innerWidth > 960) {
            setDropdown(false)
        } else {
            setDropdown(false);
        }
    };

    return (
        <>
            <nav className="navbar">
                <div className="for-logo">
                    <Link to='/'><img className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="" />
                    </Link>
                </div>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item nav-links"  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            Movies <i className="fas fa-caret-down"/>  {dropdown && <Dropdown data={Movies}/>}
                    </li>
                    <li className="nav-item nav-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            TV Shows <i className="fas fa-caret-down" />
                        {dropdown && <Dropdown data={MenuItems[1]}/>}
                    </li>
                    <li className="nav-item nav-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            People <i className="fas fa-caret-down" />
                        {dropdown && <Dropdown data={MenuItems[2]}/>}
                    </li>
                    <li className="nav-item nav-links" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            More <i className="fas fa-caret-down" />
                        {dropdown && <Dropdown data={MenuItems[3]}/>}
                    </li>
                </ul>
                <Button />
            </nav>
        </>
    )
}


export default Navbar;