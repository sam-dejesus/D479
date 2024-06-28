import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import vid3 from "../media/vid3.mp4"

export default function Transportation() {

    return(
        <div>
            <Header title=" Easeir then ever" videoSource={vid3}></Header>
            <Navbar></Navbar>
            <main>

            </main>
            <Footer></Footer>
        </div>
    )
}