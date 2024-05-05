import './Login.css'
import React from 'react'

const Login = () => {
    return (
        <div className="container login-main">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card login-card">
                        <div className="card-body">
                            <ul className="nav nav-pills nav-fill mb-3" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="login-tab" data-bs-toggle="pill" data-bs-target="#login" type="button" role="tab" aria-controls="login" aria-selected="true">Login</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="signup-tab" data-bs-toggle="pill" data-bs-target="#signup" type="button" role="tab" aria-controls="signup" aria-selected="false">Signup</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="login" role="tabpanel" aria-labelledby="login-tab">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="loginEmail" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="loginEmail" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="loginPassword" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="loginPassword" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </form>
                                </div>
                                <div className="tab-pane fade" id="signup" role="tabpanel" aria-labelledby="signup-tab">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="signupName" className="form-label">Full Name</label>
                                            <input type="text" className="form-control" id="signupName" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signupEmail" className="form-label">Email address</label>
                                            <input type="email" className="form-control" id="signupEmail" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="signupPassword" className="form-label">Password</label>
                                            <input type="password" className="form-control" id="signupPassword" />
                                        </div>
                                        <button type="submit" className="btn btn-primary">Signup</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login