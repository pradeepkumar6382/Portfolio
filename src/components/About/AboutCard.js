import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Pradeep Kumar </span>
            from <span className="purple"> Chennai,India</span>
            <br />
           I am currently working as a Web Developer at Intech Systems Chennai Pvt Ltd. 
            <br />
            I graduated with a Bachelor's in Electrical and Electronics Engineering from Bannari Amman Institute of Technology.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />Video editing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Strive to create efficient, innovative solutions that drive technological progress!"
{" "}
          </p>
          <footer className="blockquote-footer">Pradeep Kumar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
