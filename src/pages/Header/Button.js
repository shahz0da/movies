import React from 'react'
import './button.css'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import { BsSearch } from 'react-icons/bs'

export function Button() {
 
    return (
        <div className='button'>
            <h2 className='plus'>+</h2>
            <Link to='sign-up'>
                <button className='btn'>EN</button>
            </Link>
            <Link className='login'>Login</Link>
            <Link className='login'>Join TMDB</Link>
            <p className='psearch'><BsSearch/></p>
        </div>
    );
}