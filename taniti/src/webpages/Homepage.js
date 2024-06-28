import React, { useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import secpic2 from "../media/sec-pic-2.jpg";
import secpic1 from "../media/sec-pic-1.jpg";
import secpic3 from "../media/sec-pic-3.jpg";
import secpic4 from "../media/sec-pic-4.jpg";
import secpic5 from "../media/sec-pic-5.jpg";
import "../style/homepage.css";
import vid1 from '../media/vid.mp4';
import { Link } from "react-router-dom";

export default function Homepage() {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");

    const handleScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        if (sectionTop <= window.innerHeight - sectionHeight / 4) {
          section.classList.add("fade-in-visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header title="Welcome to Taniti" videoSource={vid1}></Header>
      <Navbar></Navbar>
      <main className="d-flex flex-column ">
        <div className="sec1 d-flex justify-content-around align-items-center flex-row col-12 pt-5 pb-5">
          <img src={secpic1} alt="" className="col-4 shadow-lg" />
          <div className="col-4">
            <h2 className="homepage-h2">About us</h2>
            <p className="homepage-p">
              Taniti is a small, tropical island in the Pacific. While the
              island has an area of less than 500 square miles, the terrain is
              varied and includes both sandy and rocky beaches, a small but safe
              harbor, lush tropical rainforests, and a mountainous interior that
              includes a small, active volcano. Taniti has an indigenous
              population of about 20,000. Until a recent increase in tourism,
              most the Tanitian economy was dominated by fishing or agriculture.
            </p>
          </div>
        </div>
        <div className="parallax"></div>
        <div className="sec2 d-flex justify-content-around align-items-center flex-row col-12 pt-5 pb-5 fade-in">
          <div className="col-4">
            <h2 className="homepage-h2">Lodging</h2>
            <p className="homepage-p">
              Taniti has a wide variety of lodging that ranges from an
              inexpensive hostel to one large, four-star resort. There are many
              small, family-owned hotels and a growing number of bed and
              breakfasts. All types of lodging are strictly regulated and
              regularly inspected by the Tanitian government.
            </p>
            <Link className="btn btn-outline-info" to="/Lodging" >Learn more</Link>
          </div>
          <img src={secpic2} alt="" className="col-4 shadow-lg" />
        </div>
        <div className="parallax2"></div>
        <div className="col-12 d-flex flex-row  fade-in">
          <div className="d-flex flex-column col-6 justify-content-center align-items-center ">
            <h2 className="homepage-h2">Entertainment</h2>
            <img src={secpic3} alt="" id="" className=" shadow-lg  card" />

            <p className="homepage-p p-5">
              Most people visit Taniti to enjoy the beaches, visiting a local
              history museum, going on chartered fishing tours, snorkeling,
              zip-lining in the rainforest, visiting several pubs, including a
              microbrewery, dancing at a new dance club, taking helicopter
              rides, visiting art galleries, and bowling. Also, a nine-hole golf
              course should be operational by next year. Many of these
              activities are located in Merriton Landing, which is a rapidly
              developing area on the north side of Yellow Leaf Bay.{" "}
            </p>
            <div className="btnDiv pb-5">
              <button className="btn btn-outline-info">Learn more</button>
            </div>
          </div>

          <div className="d-flex flex-column col-6  align-items-center ">
            <h2 className="homepage-h2">Sightseeing</h2>
            <img src={secpic4} alt="" id="" className=" shadow-lg  card" />
            <div className="col-8">
              <p className="homepage-p p-5">
                Most tourists spend most of their time in Taniti City, which
                boasts native architecture and nearby white, sandy beaches that
                encircle Yellow Leaf Bay. Other popular activities include boat
                or bus tours of the island, hikes in the rainforest, or visits
                to Taniti’s active volcano.
              </p>
              <div className="btnDiv">
                <button className="btn btn-outline-info">Learn more</button>
              </div>
            </div>
          </div>
        </div>
        <div className="parallax3"></div>
        <div className="sec1 d-flex justify-content-around align-items-center flex-row col-12 pt-5 pb-5 fade-in">
          <img
            src={secpic5}
            alt=""
            className="col-4 shadow-lg"
            height={"500px"}
          />
          <div className="col-6">
            <h2 className="homepage-h2 ">Transportation</h2>
            <ul>
              Transportation
              <li>
                Almost all visitors arrive to Taniti by air, though some arrive
                on a small cruise ship that docks in Yellow Leaf Bay for one
                night per week. Taniti is served by a small airport that can
                accommodate small jets and propeller planes. Taniti is in the
                process of expanding the airport so larger jets will be able to
                land on the island within the next few years.{" "}
              </li>
            </ul>
            <ul>
              Ground Transportation
              <li>
                Public buses serve Taniti City and run from 5 a.m. to 11 p.m.
                every day. Private buses serve the rest of the island. Taxis are
                available in Taniti City, and rental cars can be rented from a
                local rental agency near the airport. Bikes and helmets are
                available to rent from several vendors (helmets are required by
                law). Taniti City is fairly flat and very walkable. Many
                tourists stay in the area surrounding Merriton Landing: this
                area is easy to explore on foot.
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer>
        
      </Footer>
    </div>
  );
}
