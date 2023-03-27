import '../Assets/Styles/Login.css'
import { Link } from 'react-router-dom'

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
                                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                                            </div>
                                            <form>
                                                <div class="mb-3">
                                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                                </div>
                                                <div class="mb-3">
                                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                                </div>
                                                <div class="mb-3 form-check">
                                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                                    <label class="form-check-label" for="exampleCheck1">Remember Me</label>
                                                </div>
                                                <button type="submit" class="btn btn-primary d-flex align-items-center justify-contents-center">Login</button>
                                            </form>
                                            <hr />
                                            {/* <div class="text-center">
                                                <Link class="small" to="/forgot-password">Forgot Password?</Link>
                                            </div>
                                            <div class="text-center">
                                                <Link class="small" to="/register">Create an Account!</Link>
                                            </div> */}
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