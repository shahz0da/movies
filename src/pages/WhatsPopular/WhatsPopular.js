import React, { useState } from 'react'
import './whatsPopular.css'

function WhatsPopular() {

    const [click, setclick] = useState(false)

    function Changing() {
        setclick(!click)

    }

    return (
        <div className='container '>
            <div className='whatsPopular'>
                <h1>What's Popular</h1>
                <div className='divClick'>
                    <button onClick={() => Changing()} className={click ? 'click' : 'noclick'}>Streaming</button>
                    <button onClick={() => Changing()} className={click ? 'noclick' : 'click'}>On TV</button>
                    <button onClick={() => Changing()} className={click ? 'noclick' : 'click'}>For Rent</button>
                    <button onClick={() => Changing()} className={click ? 'noclick' : 'click'}>In Theatres</button>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default WhatsPopular