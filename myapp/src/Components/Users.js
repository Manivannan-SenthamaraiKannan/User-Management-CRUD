import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useNavigate, Link } from 'react-router-dom';
import '../Assets/Styles/Users.css';
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";

const Users = (props) => {
    const API = "https://6452fa51e9ac46cedf1afd61.mockapi.io"
    const pageHeading = "Users";
    const navigate = useNavigate();
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUsers();
    });

    const getUsers = async () => {
        await axios.get(`${API}/user`).then((res) => {
            if (res.status === 401) {
                console.log("Data Not Found");
            }
            setUser(res.data);
        });
    };

    const handleEditUser = (id) => {
        props.setEditUser(id);
        navigate("/edituser")
    }

    const handleDelete = (id) => {
        axios.delete(`${API}/user/` + id).then((res) => {
            if (res.status === 200) {
                getUsers();
            }
        });
    };



    return (
        <div className='sb-nav-fixed'>
            <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
                {/* <!-- Navbar Brand--> */}
                <Link class="navbar-brand ps-3" to="/">User Management</Link>
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
                                        <Link class="nav-link" to="/createuser/">Create-users</Link>
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
                                <Link to='/createuser/' >
                                    <button type="button" className="btn btn-primary"><i class="bi bi-plus"></i> Create User</button>
                                </Link>
                            </div>
                            {/* user table */}
                            <div className="container">
                                <table className="table table-dark table-striped">
                                    <thead className="thead-dark">
                                        <tr>
                                            <th scope="col">ID</th>
                                            <th scope="col">Image</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Age</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Modify</th>
                                            <th scope="col">Delete</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            user.map((data) => {
                                                return (<tr>
                                                    <td>{data.id}</td>
                                                    <td><img src={data.image} alt="avatar" style={{ height: "64px", width: "64px" }} /></td>
                                                    <td>{data.name}</td>
                                                    <td>{data.age}</td>
                                                    <td>{data.email}</td>
                                                    <td><button type="button" className="btn btn-light"
                                                        onClick={() => {
                                                            handleEditUser(data.id);
                                                        }}>
                                                        <i class="bi bi-pencil-square"></i></button></td>
                                                    <td><button type="button" className="btn btn-danger" onClick={() => { handleDelete(data.id) }}><i class="bi bi-trash"></i></button></td>
                                                </tr>)
                                            })
                                        }
                                        {/* <tr>
                                            <td>{user.id}</td>
                                            <td>{user.image}</td>
                                            <td>{user.name}</td>
                                            <td>{user.age}</td>
                                            <td>{user.email}</td>
                                            <td><button type="button" className="btn btn-light"
                                                onClick={() => {
                                                    handleEditUser(user.id);
                                                }}>
                                                <i class="bi bi-pencil-square"></i></button></td>
                                            <td><button type="button" className="btn btn-danger"><i class="bi bi-trash"></i></button></td>
                                        </tr> */}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </main>
                    {/* Enf of page content */}
                </div>
            </div>
        </div>
    )
}

export default Users;