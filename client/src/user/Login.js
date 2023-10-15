import React from 'react'

import logo from '../images/logo.png'
import login from '../images/Untitled design (1).png'
import Header from './Header'

export default function Login() {

    const buttonStyle = {
        backgroundColor: "#292075",
    }



    return (
        <>

            <Header title={"Login"} />

            <section className='' style={{ backgroundColor: "#E2ECF0", fontFamily: "revert" }}>
                <div className="login-form d-flex justify-content-center">
                    <div className="card mb-3 border-0 mt-4" style={{ maxWidth: "700px", backgroundColor: "#98C0D9", borderRadius: "0", }}>
                        <div className="row g-0">
                            <div className="col-md-6">
                                <img src={login} className="img-fluid  " alt="..." />
                            </div>
                            <div className="col-md-6">
                                <div className="card-body">
                                    <h5 className="card-title fs-1 text-uppercase text-center text-white fw-bold">Sign in </h5>
                                    <form className="row g-3 mt-3" style={{ boxShadow: "none" }}>
                                        <div className="col-12">
                                            <label for="validationDefault04" className="form-label">Select user type <span className='text-danger'>*</span></label>
                                            <select className="form-select border-0 " id="validationDefault04" required style={{ borderRadius: "0", }}>
                                                <option selected disabled value="">Choose...</option>
                                                <option>DEO</option>
                                                <option>Approver</option>
                                                <option>Custodian</option>
                                                <option>Controller</option>
                                                <option>Admin</option>
                                            </select>
                                        </div>
                                        <div className="col-12">
                                            <label for="validationDefaultUsername" className="form-label">Username <span className='text-danger'>*</span></label>
                                            <div className="input-group">
                                                <input type="text" className="form-control border-0 " id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required style={{ borderRadius: "0" }} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label htmlFor="validationDefaultPassword" className="form-label" >Password <span className='text-danger'>*</span></label>
                                            <div className="input-group">
                                                <input type="password" className="form-control border-0" id="validationDefaultPassword" aria-describedby="inputGroupPrepend2" required style={{ borderRadius: "0" }} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <label for="validationDefault05" className="form-label">Enter the text as shown below <span className='text-danger'>*</span></label>
                                            <div className="box" >
                                                <div className="box-CAPTCHA" id="box-CAPTCHA" >
                                                    <span className='d-flex w-100 mt-2 mb-4'>
                                                        <div className="CAPTCHA text-center border border-2 w-100 p-2" id="CAPTCHA" >cPtCHa</div>
                                                        <button className="reload text-white border-0 " style={buttonStyle} ><i className="bi bi-arrow-clockwise"></i></button>
                                                    </span>
                                                    <input type="text" className="form-control border-0" id="validationDefault05" placeholder="Type CAPTCHA Here" maxlength="6" required style={{ borderRadius: "0" }} />
                                                </div>

                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <button className="text-white w-25 p-1 border-0" type="submit" style={buttonStyle}>Login </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
