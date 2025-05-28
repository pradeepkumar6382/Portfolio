import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import randomquotegenerator from "../../Assets/Projects/randomquotegenerator.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Ecommercesite from "../../Assets/Projects/Ecommercesite.png";
import Todolist from "../../Assets/Projects/Todolist.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomquotegenerator}
              isBlog={false}
              title="Random Quote Generator"
              description="I developed a QR code-based attendance system using MERN where employees scan a QR code placed at windmill sites. The system securely logs attendance data in real-time using a backend API, with all records stored in a centralized database"
              ghLink="https://github.com/pradeepkumar6382/Randomquote"
              demoLink="https://randomquote-eosin.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommercesite}
              isBlog={false}
              title="E-Commerce platform"
              description="Developed a full-stack MERN-based E-commerce website with secure authentication, product management, and seamless user experience. The platform allows users to browse, search, and purchase products while ensuring smooth backend operations."
              ghLink="https://github.com/pradeepkumar6382/Ecommerce-Project"
              demoLink="https://ecommerce-project-u172.vercel.app/"
            />
          </Col>
         <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="TodoList"
              description="This is a simple yet powerful To-Do List App built entirely using Redux for state management. Unlike traditional React apps that use local state (useState), this application leverages Redux for global state management, making it highly scalable and efficient."
              ghLink="https://github.com/pradeepkumar6382/Todolist"
              demoLink="https://todolist-ecru-xi.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
