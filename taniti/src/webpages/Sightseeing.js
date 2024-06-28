import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import vid5 from "../media/vid5.mp4"

export default function Sightseeing() {

    return(
        <div>
            <Header title="views like no other" videoSource={vid5}></Header>
            <Navbar></Navbar>
            <main>

            </main>
            <Footer></Footer>
        </div>
    )
}