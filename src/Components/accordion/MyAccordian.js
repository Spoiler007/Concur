import React, { useState } from 'react'
import './accordion.css'

const MyAccordian = ({ question, answer }) => {

    const [show, setShow] = useState(false);
    return (
        <>
            <div className='main-heading' onClick={() => setShow(!show)}>
                <h3>{question}</h3>
                <h2>{show ? "-" : "+"}</h2>
            {show && <p className='answers'>{answer}</p>}
            </div>
        </>
    )
}

export default MyAccordian;