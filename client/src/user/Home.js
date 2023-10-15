import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'

export default function Home() {
    return (
        <>
            <Header title={"BGMS"} />
            <div className='container mt-5'>
                <Link to='/login' className='btn btn-primary m-3'>Login</Link>
                <Link to='/bg-list' className='btn btn-primary m-3'>DEO</Link>
                <Link to='/bg-approver-list' className='btn btn-primary m-3'>Approver</Link>
                <Link to='/bg-approved-list' className='btn btn-primary m-3'>Custodian</Link>
                <Link to='/bg-admin' className='btn btn-primary m-3'>Admin</Link>

            </div>
        </>

    )
}
