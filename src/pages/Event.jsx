import React from "react";
import "../Styles/Event.css";

import Event1 from "../Assests/Event1.jpg";
import Event2 from "../Assests/Event2.jpg";
import Event3 from "../Assests/Event3.jpg";
import Event4 from "../Assests/Event4.jpg";
import Event5 from "../Assests/Event5.jpg";
import Event6 from "../Assests/Event6.jpg";
import Event7 from "../Assests/Event7.jpg";
import Event8 from "../Assests/Event8.jpg";
import Event9 from "../Assests/Event9.jpg";
import Event10 from "../Assests/Event10.jpg";
import Event11 from "../Assests/Event11.jpg";
import Event12 from "../Assests/Event12.jpg";
import Event13 from "../Assests/Event13.jpg";
import Event14 from "../Assests/Event14.jpg";

function Event() {
  return (
    <>
      <h1 className="Event-Heading">Events</h1>

      {/* Event 1 */}


{/* Event 2 */}
<div className="container">
  <h1 className="head-tag">
    International Seminar on River Flooding – Warning & Dissemination
  </h1>
  <hr />
  <h2 className="head-tag">Event Details</h2>

  <p>
    Conducted One Day International Seminar on "River Flooding – Warning &
    Dissemination" on 17 June 2025.
  </p>

  <img className="img-active" src={Event2} alt="River Flooding Seminar" />
  <br />
  <img className="img-active" src={Event4} alt="River Flooding Seminar Session" />
  <br />
  <img className="img-active" src={Event5} alt="River Flooding Seminar Participants" />
  <img className="img-active" src={Event3} alt="River Flooding Seminar" />
  <br />
  <img className="img-active" src={Event14} alt="River Flooding Seminar Session" />
  <br />
  <img className="img-active" src={Event6} alt="River Flooding Seminar Participants" />
</div>

{/* Event 3 */}
<div className="container">
  <h1 className="head-tag">
    MoU between NIH Patna and School of River Studies
  </h1>
  <hr />
  <h2 className="head-tag">Event Details</h2>

  <p>
    MoU signed between National Institute of Hydrology (NIH), Patna and
    School of River Studies, Aryabhatta Knowledge University, Patna.
  </p>

  <img className="img-active" src={Event1} alt="MoU Signing Ceremony" />
  
</div>

{/* Event 4 */}
<div className="container">
  <h1 className="head-tag">
    AIU East Zone Vice Chancellors' Meet
  </h1>
  <hr />
  <h2 className="head-tag">Event Details</h2>

  <p>
    AIU East Zone Vice Chancellors' Meet was held at Aryabhatta Knowledge
    University, Patna on 22 December 2025.
  </p>

  <img className="img-active" src={Event9} alt="Vice Chancellors Meet" />
  <br />
  <img className="img-active" src={Event10} alt="Vice Chancellors Discussion" />
</div>

{/* Event 5 */}
<div className="container">
  <h1 className="head-tag">
    River Crisis: Science, Society and Sustainability
  </h1>
  <hr />
  <h2 className="head-tag">Event Details</h2>

  <p>
    A Special Deliberation Talk on "River Crisis: Science, Society and
    Sustainability" was conducted on 06 April 2026.
  </p>

  <img className="img-active" src={Event11} alt="River Crisis Talk" />
  <br />
  <img className="img-active" src={Event12} alt="River Crisis Session" />
  <br />
  <img className="img-active" src={Event13} alt="River Crisis Participants" />
</div>
<div className="container">
  <h1 className="head-tag">1st Academic Advisory Committee</h1>
  <hr />
  <h2 className="head-tag">Event Details</h2>

  <p>
    1st Academic Advisory Committee of Centre for River Studies was
    organised on 30th March 2024 in which members of the committee
    participated in discussions related to the academic affairs of the Centre.
  </p>

  <img className="img-active" src={Event7} alt="Academic Advisory Committee Meeting" />
  <br />
  <img className="img-active" src={Event8} alt="Academic Advisory Committee Members" />
</div>
    </>
  );
}

export default Event;