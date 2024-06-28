import React, { useState } from 'react';
import '../style/navbar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNavicon, faVolcano } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Navbar({ currentPage, handlePageChange }) {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu((prev) => !prev);
    };

    return (
        <nav className='nav nav-tabs sticky-top '>
            <div className='col-12  d-md-none'>
                <button className='nav-link sandwichBox' onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faNavicon} />
                </button>
            </div>
            <div className={`col-12 mt-1 ${showMenu ? 'd-flex flex-column ' : 'd-none'} d-md-flex justify-content-end pe-5`}>
                <Link to="/" id='nav-link' className=''>
                    <FontAwesomeIcon icon={faVolcano} />
                </Link>
                <Link to="/Lodging" id='nav-link'>
                    Lodging
                </Link>
                <Link to="/Entertainment" id='nav-link'>
                    Entertainment
                </Link>
                <Link to="/Transportation" id='nav-link'>
                    Transportation
                </Link>
                
                <Link to="/Sightseeing" id='nav-link'>
                    Sightseeing
                </Link>
            </div>
        </nav>
    );
}
