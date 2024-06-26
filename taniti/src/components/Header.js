import React from 'react';
import vid from '../media/vid.mp4';
import '../style/header.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolcano } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    return (
        <div className="col-12 header-container d-flex justify-content-end align-items-center">
            <video autoPlay loop muted>
                <source src={vid} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='test p-5 me-5'>
                <h1 className='pt-5 pe-5'>Welcome to Taniti 
                <FontAwesomeIcon 
                    icon={faVolcano} 
                    className="footer-icon-size ps-3" 
                    style={{ color: "white" }} 
                /></h1>
            </div>
        </div>
    );
}
