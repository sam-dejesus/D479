import React from "react";
import { Link } from "react-router-dom";
import "../style/homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="col-12 d-flex flex-row">
        <div className="col-6 d-flex flex-column">
          <h3 className="mt-2 p-2"> POPULAR TOPICS</h3>
          <div id="footer-topic-div" className="d-flex flex-row ">
            <ul>
              Lodging
              <li>
                <Link to="/lodging">Lorem</Link>
              </li>
              <li>
                <Link to="/lodging">Lorem</Link>
              </li>
              <li>
                <Link to="/lodging">Lorem</Link>
              </li>
              <li>
                <Link to="/lodging">Lorem</Link>
              </li>
            </ul>
            <ul>
              Entertainment
              <li>
                <Link to="/entertainment">Lorem</Link>
              </li>
              <li>
                <Link to="/entertainment">Lorem</Link>
              </li>
              <li>
                <Link to="/entertainment">Lorem</Link>
              </li>
              <li>
                <Link to="/entertainment">Lorem</Link>
              </li>
            </ul>
            <ul>
              Sightseeing
              <li>
                <Link to="/sightseeing">Lorem</Link>
              </li>
              <li>
                <Link to="/sightseeing">Lorem</Link>
              </li>
              <li>
                <Link to="/sightseeing">Lorem</Link>
              </li>
              <li>
                <Link to="/sightseeing">Lorem</Link>
              </li>
            </ul>
            <ul>
              Transportation
              <li>
                <Link to="/transportation">Lorem</Link>
              </li>
              <li>
                <Link to="/transportation">Lorem</Link>
              </li>
              <li>
                <Link to="/transportation">Lorem</Link>
              </li>
              <li>
                <Link to="/transportation">Lorem</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-6 d-flex flex-column">
          <h3 className="mt-2 p-2">ABOUT US</h3>
          <div id="footer-about-div" className="d-flex flex-row ">
            <ul>
              <li>
                <a href="test.com">About Us</a>
              </li>
              <li>
                <a href="test.com">FAQ</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="test.com">Privacy Policy</a>
              </li>
              <li>
                <a href="test.com">Terms And Conditions</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="test.com">Terms Of Services</a>
              </li>
              <li>
                <a href="test.com">Contact</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="test.com">Media</a>
              </li>
              <li>
                <a href="test.com">Meeting Planners</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="test.com">Travel Professionals</a>
              </li>
              <li>
                <a href="test.com">VISIT TANITI Partners</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 d-flex flex-row p-5">
        <h4 className="">FOLLOW US</h4>
        <div
          id="social-media-div"
          className="d-flex flex-row justify-content-around col-8"
        >
          <a href="facebook.com">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="instagram.com">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a href="Pinterest.com">
            <FontAwesomeIcon icon={faPinterest} size="2x" />
          </a>
          <a href="x.com">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="youtube.com">
            <FontAwesomeIcon icon={faYoutube} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}
