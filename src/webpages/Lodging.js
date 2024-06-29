import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Main from "../components/Main"
import vid2 from '../media/vid2.mp4'

import hmcb from "../media/lodging/hmcb.jpg"
import p1 from "../media/lodging/p1.jpg"
import p2 from "../media/lodging/p2.jpg"
import p3 from "../media/lodging/p3.jpg"


export default function Lodging() {

    return(
        <div>
            <Header title="From histroic to exotic" videoSource={vid2}></Header>
            <Navbar></Navbar>
            <main>
            <Main
            hmcb={hmcb}
            hmcTitle={"Taniti has a many options when it comes to lodging"}
            img1 = {p1}
            img2 = {p2}
            img3 = {p3}
            alt1 = {"historic 4-star hotel"}
            alt2 = {"Bed and Breakfast Bungalows"}
            alt3 = {"Historic Inns"}
            optiontitle1 = {"Grand Pluma Hotel"}
            optiontitle2 = {'Bed and Breakfast Bungalows'}
            optiontitle3 = {"Historic Inns"}
            ></Main>
            </main>
            <Footer></Footer>
        </div>
    )
}
