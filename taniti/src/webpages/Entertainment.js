import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main"
import vid4 from "../media/vid4.mp4"

import hmcb from "../media/entertainment/hmcb.jpg"
import p1 from "../media/entertainment/p1.jpg"
import p2 from "../media/entertainment/p2.jpg"
import p3 from "../media/entertainment/p3.jpg"


export default function Entertainment() {

    return(
        <div>
            <Header title="experience our culture" videoSource={vid4}></Header>
            <Navbar></Navbar>
            <main>
            <Main
            hmcb={hmcb}
            hmcTitle={"Merriton Landing for entertainment that never stops"}
            img1 = {p1}
            img2 = {p2}
            img3 = {p3}
            alt1 = {"National Taniti History museum"}
            alt2 = {"ziplining"}
            alt3 = {"scuba diving"}
            optiontitle1 = {"National Taniti History museum"}
            optiontitle2 = {'ziplining'}
            optiontitle3 = {"scuba diving"}
            ></Main>
            </main>
            <Footer></Footer>
        </div>
    )
}