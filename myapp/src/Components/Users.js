import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate, Link } from 'react-router-dom'
// import { useState } from "react";
import '../Assets/Styles/Users.css'

const Users = (props) => {
    const pageHeading = "Users";
    const navigate = useNavigate();

    var tbldata = require("../Assets/Data/UserData.json")

    const handleEditUser = (data) => {
        props.setEditUser(data);
        // console.log(data);
        navigate("/edituser")
    }



    return (
        <div className='sb-nav-fixed'>
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* <!-- Navbar Brand--> */}
                <Link class="navbar-brand ps-3" to="/">Start Bootstrap</Link>
                {/* <!-- Sidebar Toggle--> */}
                <button class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0 navbar-toggler-icon" id="sidebarToggle" href="#!"></button>
                {/* <!-- Navbar Search--> */}
                <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div class="input-group">
                        <input class="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="bi bi-search"></i></button>
                    </div>
                </form>
                {/* <!-- Navbar--> */}
                <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i class="bi bi-person-fill"></i></a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><Link class="dropdown-item" to="/profile">My Profile</Link></li>
                            <li><Link class="dropdown-item" to="/editprofile">Edit Profile</Link></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><Link class="dropdown-item" to="/dashboard">Logout</Link></li>
                        </ul>
                    </li>
                </ul>
            </nav>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div class="sb-sidenav-menu">
                            <div class="nav">
                                <div class="sb-sidenav-menu-heading">Core</div>
                                <Link class="nav-link" to="/">
                                    <div class="sb-nav-link-icon"><i class="bi bi-speedometer"></i></div>
                                    Dashboard
                                </Link>
                                <div class="sb-sidenav-menu-heading">Interface</div>
                                <a class="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                    <div class="sb-nav-link-icon"><i class="bi bi-layout-split"></i></div>
                                    Users
                                    <div class="sb-sidenav-collapse-arrow"><i class="bi bi-caret-down-fill"></i></div>
                                </a>
                                <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav">
                                        <Link class="nav-link" to="/user">Users</Link>
                                        <Link class="nav-link" to="/createuser">Create-users</Link>
                                        <Link class="nav-link" to="/edituser">Edit-users</Link>
                                    </nav>
                                </div>
                                <a class="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                    <div class="sb-nav-link-icon"><i class="bi bi-book-half"></i></div>
                                    Pages
                                    <div class="sb-sidenav-collapse-arrow"><i class="bi bi-caret-down-fill"></i></div>
                                </a>
                                <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                                    <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                        <a class="nav-link collapsed" href="#!" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                                            Authentication
                                            <div class="sb-sidenav-collapse-arrow"><i class="bi bi-caret-down-fill"></i></div>
                                        </a>
                                        <div class="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                            <nav class="sb-sidenav-menu-nested nav">
                                                <Link class="nav-link" to="/login">Login</Link>
                                                <Link class="nav-link" to="/register">Register</Link>
                                                <Link class="nav-link" to="/password">Forgot Password</Link>
                                            </nav>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* Page Content */}
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid">
                            <div class="d-sm-flex align-items-center justify-content-between mb-3">
                                <h1 class="h3 mb-0 text-gray-400">{pageHeading}</h1>
                            </div>
                            {/* Create user */}
                            <div className="d-flex justify-content-end align-items-center createuser">
                                <Link to='/createuser' >
                                    <button type="button" className="btn btn-primary"><i class="bi bi-plus"></i> Create User</button>
                                </Link>
                            </div>
                            {/* user table */}
                            <div className="container">
                                <table className="table table-dark table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">Region</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Modify</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tbldata.map((data, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td>{data.id}</td>
                                                    <td>{data.name}</td>
                                                    <td>{data.phone}</td>
                                                    <td>{data.region}</td>
                                                    <td>{data.country}</td>
                                                    <td><button type="button" className="btn btn-light"
                                                        onClick={() => {
                                                            handleEditUser(data);
                                                        }}>
                                                        <i class="bi bi-pencil-square"></i></button></td>
                                                    <td><button type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                                                </tr>)
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                    {/* Enf of page content */}
                    <footer class="py-3 bg-light mt-auto">
                        <div class="container-fluid px-3">
                            <div class="d-flex align-items-center justify-content-between small">
                                <div class="text-muted">Copyright &copy; Your Website 2023</div>
                                <div class="text-muted">Privacy Policy. Your Website 2023</div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export default Users;