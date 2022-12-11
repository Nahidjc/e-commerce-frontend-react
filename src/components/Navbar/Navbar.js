import React from "react";
import { FaShoppingCart, FaSignInAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        TAYBA COLLECTION
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">
                                    About
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <FaSignInAlt className="me-1" /> Login
                            </NavLink>
                            {/* <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                <FaUserPlus className="me-1" /> Register
                            </NavLink> */}
                            <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                                <FaShoppingCart className="me-1" /> Cart
                            </NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
