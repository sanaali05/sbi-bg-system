import React from 'react'
import logo from '../images/logo.png'

export default function Header(props) {
    return (
        <>
            <div className=' bg-body-tertiary py-4' >
                <div className='container'>
                <img src={logo} alt="sbi logo" width={100} />
                <h1 className='d-inline ms-5' style={{ color: "#280071" }}>{props.title}</h1>
                </div>
            </div>
        </>
    )
}
