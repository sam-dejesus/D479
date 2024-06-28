import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import vid2 from '../media/vid2.mp4'

export default function Lodging() {

    return(
        <div>
            <Header title="From histroic to exotic" videoSource={vid2}></Header>
            <Navbar></Navbar>
            <main>

            </main>
            <Footer></Footer>
        </div>
    )
}
