import React from "react";
import "../Styles/Event.css";
import Event7 from '../Assests/Event7.jpg'
import Event8 from '../Assests/Event8.jpg'

function Event() {
  return (
    <>
      <h1 className="Event-Heading">
        Events
      </h1>
      <br />
      <br />
      
      {/*<div className="container">
        <h1 className="head-tag">Events of Centre for River Studies</h1>
        <hr />
        <h2 className="head-tag">Event Details</h2>
        <p>
        National Science Day was celebrated on 22nd December 2023 remembering the greatest Mathematician of all times Srinivasa Ramanujan on his 136th Birth Anniversary.
        </p>
        {/* FIXED: Changed class to className and updated alt text */}
        {/*<img className="img-active" src={Event1} alt="National Science Day celebration banner" />
        <br />
        <img className="img-active" src={Event2} alt="National Science Day event presentation" />
        <br />
        <img className="img-active" src={Event3} alt="National Science Day group photo" />
      </div>
      <br />
      <br />
      <div className="container">
        <h1 className="head-tag">National Service Scheme(NSS) </h1>
        <hr />
        <h2 className="head-tag">Event Details</h2>
        <p>
        National Service Scheme(NSS) program has been organised in this students have participated-:
        </p>
        <img className="img-active" src={Event4} alt="NSS program inauguration" />
        <br />
        <img className="img-active" src={Event5} alt="NSS student activities snapshot" />
        <br />
        <img className="img-active" src={Event6} alt="NSS volunteers group session" />
      </div>*/}
      <br />
      <br />
      <div className="container">
        <h1 className="head-tag">1st Academic Advisory Committee</h1>
        <hr />
        <h2 className="head-tag">Event Details</h2>
        <p>
        1st Academic Advisory Committee of Centre for River Studies was organised on 30th March 2024 in which members of the committee has participated for the discussion on academic affairs of the centre.
        </p>
        <img className="img-active" src={Event7} alt="Academic Advisory Committee meeting discussion" />
        <br />
        <img className="img-active" src={Event8} alt="Academic Advisory Committee members group photo" />
      </div>
    </>
  );
}

export default Event;