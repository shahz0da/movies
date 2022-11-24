import React, { useEffect, useState } from "react";
import './dropdown.css'
// import { MenuItems2 } from './MenuItems'
import { Link } from 'react-router-dom'
import { MenuItems } from "./MenuItems";
import { Movies } from "./MenuItems/Movies";


function Dropdown(props) {
    const [click, setClick] = useState(false)

    const [data, setData] = useState(Movies)

    console.log(data[0], "bu data");
    //     useEffect(() => {
    //       setData(props)

    //     }, [])


    //    console.log(data);






    const handleClick = () => setClick(!click)
    return <>

        <ul onClick={handleClick} className={click ? "dropdown-menu clicked" : "dropdown-menu"}>
            {/* <li>
                <Link className="dropdown-link" to='/movies' onClick={() => setClick(false)}>Popular</Link>
                <Link className="dropdown-link" to='/movies' onClick={() => setClick(false)}>Now Playing</Link>
                <Link className="dropdown-link" to='/movies' onClick={() => setClick(false)}>Upcoming</Link>
                <Link className="dropdown-link" to='/movies' onClick={() => setClick(false)}>Top Rated</Link>
            </li> */}
            {
                (data).map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>{item.title}</Link>
                        </li>
                    )
                })
            }
        </ul>
    </>
}

export default Dropdown;