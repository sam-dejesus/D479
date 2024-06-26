import React from 'react';
import Header from '../components/Header'
import Navbar from '../components/Navbar';
import veliganduIslandImage from '../media/veligandu-island-1044366_1280.jpg'; 
import '../style/homepage.css'

export default function Homepage(){
    return(
        <div>
        <Header></Header>
        <Navbar></Navbar>
        <main className='d-flex flex-column '>
            <div className='sec1 d-flex justify-content-around align-items-center flex-row col-12 mt-5 mb-5'>
                <img src={veliganduIslandImage} alt='Veligandu Island' id='aboutUsImg' className='col-4'/>
                <div className='col-4'>
                    <h2>About us</h2>
                    <p>Taniti is a small, tropical island in the Pacific. While the island has an area of less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, a small but safe harbor, lush tropical rainforests, and a mountainous interior that includes a small, active volcano. Taniti has an indigenous population of about 20,000. Until a recent increase in tourism, most the Tanitian economy was dominated by fishing or agriculture.</p>
                </div>
            </div>
            <div class="parallax"></div>
                <div >
                    
                </div>
        </main>
        </div>

    )
}