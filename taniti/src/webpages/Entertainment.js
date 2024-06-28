import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import vid4 from "../media/vid4.mp4"


export default function Entertainment() {

    return(
        <div>
            <Header title="experience our culture" videoSource={vid4}></Header>
            <Navbar></Navbar>
            <main>

            </main>
            <Footer></Footer>
        </div>
    )
}