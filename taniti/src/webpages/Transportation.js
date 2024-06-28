import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main"
import vid3 from "../media/vid3.mp4"

import hmcb from "../media/transportation/hmcb.jpg"
import p1 from "../media/transportation/p1.jpg"
import p2 from "../media/transportation/p2.jpg"
import p3 from "../media/transportation/p3.jpg"

export default function Transportation() {

    return(
        <div>
            <Header title=" Easeir then ever" videoSource={vid3}></Header>
            <Navbar></Navbar>
            <main>
                <Main 
                hmcb={hmcb}
                hmcTitle={"So many way to get around "}
                img1 = {p1}
                img2 = {p2}
                img3 = {p3}
                alt1 = {""}
                alt2 = {""}
                alt3 = {""}
                optiontitle1 = {"Yellow Leaf Bay Docks"}
                optiontitle2 = {"Taniti's International Airport"}
                optiontitle3 = {" Rent bikes"}
                ></Main>
            </main>
            <Footer></Footer>
        </div>
    )
}