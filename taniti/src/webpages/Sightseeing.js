import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main"
import vid5 from "../media/vid5.mp4"

import hmcb from "../media/sightseeing/hmcb.jpg"
import p1 from "../media/sightseeing/p1.jpg"
import p2 from "../media/sightseeing/p2.jpg"
import p3 from "../media/sightseeing/p3.jpg"

export default function Sightseeing() {

    return(
        <div>
            <Header title="views like no other" videoSource={vid5}></Header>
            <Navbar></Navbar>
            <main>
            <Main 
            hmcb={hmcb}
            hmcTitle={"come for new experiences stay for the nature"}
            img1 = {p1}
            img2 = {p2}
            img3 = {p3}
            alt1 = {"volcano"}
            alt2 = {"beach"}
            alt3 = {"hiking"}
            optiontitle1 = {"volcano tours"}
            optiontitle2 = {'white sand beaches'}
            optiontitle3 = {"rainforest hiking trips"}
            ></Main>
            </main>
            <Footer></Footer>
        </div>
    )
}