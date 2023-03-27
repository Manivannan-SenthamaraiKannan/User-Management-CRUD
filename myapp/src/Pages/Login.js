import '../Assets/Styles/Login.css'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='page-bg'>
            <div className='container'>
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    {/* Left-side-card */}
                                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                                    {/* Right-side-card */}
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <div class="text-center">
                                                <h1 class="h4 text-gray-900 mb-4">Login</h1>
                                            </div>
                                            <form>
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                    <input type="email" class="form-control" placeholder='Type your Username' id="exampleInputEmail1" />
                                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                                    <input type="password" placeholder='Type your Password' class="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div class="mb-3 form-check d-flex justify-content-end align-items-center">
                                                    <Link class="small" to="/forgot-password">Forgot Password?</Link>
                                                </div>
                                                <div>
                                                    <Link class="small nav-link login-button" to="/dashboard">Login</Link>
                                                </div>
                                            </form>

                                            {/* Social Login */}
                                            <div className='py-3'>
                                                <h6><span>or signin using</span></h6>
                                                <div className='d-flex justify-content-center align-items-center gap-3'>
                                                    <div>
                                                        <button type='button' className='btn btn-danger signin'><i class="bi bi-google"></i></button>
                                                    </div>
                                                    <div>
                                                        <button type='button' className='btn btn-primary signin'><i class="bi bi-facebook"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Signup */}
                                            <div className='py-3'>
                                                <h6><span>or signup</span></h6>
                                                <div className='d-flex justify-content-center align-items-center gap-3'>
                                                    <div>
                                                        <button type='button' className='btn btn-danger signin'><i class="bi bi-google"></i></button>
                                                    </div>
                                                    <div>
                                                        <button type='button' className='btn btn-primary signin'><i class="bi bi-facebook"></i></button>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;