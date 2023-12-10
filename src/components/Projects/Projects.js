import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import chatify from "../../Assets/Projects/chatify.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import hackingera from "../../Assets/Projects/hackingera2.png";
import teachrobot from "../../Assets/Projects/teachrobot.png";
import catbox from "../../Assets/Projects/catbox2.png";
import handsonbeats from "../../Assets/Projects/handsonbeats.PNG";
import shadowpirate from "../../Assets/Projects/shadowpirate.jpg";
import plms from "../../Assets/Projects/plms.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hackingera}
              isBlog={false}
              title="HackingEra"
              description="A thrilling game where you fight against scary machines. This game is special because you can switch between two different characters, making the adventure more exciting. We made it using Unity and Shader, so it looks really cool and the action feels real."
              ghLink="https://github.com/COMP30019/project-2-cheesego"
              demoLink="https://comp30019.github.io/project-2-cheesego/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teachrobot}
              isBlog={false}
              title="Teach Robot to move"
              description="A web application combining Flask, MongoDB, and Three.js to create a user-friendly interface for real-time robot interaction. This project exemplifies my dedication to integrating web technologies with robotics, showcasing an engaging environment for users."
              ghLink="https://github.com/kexincchen/Teach-Robot-to-move"
              demoLink="https://drive.google.com/file/d/1me6QFhKTnFgd5tDm5nPJpA5DsHw2-Vmw/view?usp=drive_link"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={catbox}
              isBlog={false}
              title="CATBox"
              // description="An innovative web tool, crafted with ChatGPT API, Flask, and Vue.js, designed for bloggers and social media enthusiasts. This platform streamlines content creation by generating contextually relevant captions for images, specifically targeting WeChat users. It also ventures into digital art, creating unique NFT images through DALL-E 3. Bridging AI technology with creative expression, this tool makes content generation effortless and more engaging."
              description="An innovative web tool, crafted with ChatGPT API, Flask, and Vue.js, designed for bloggers and social media enthusiasts. Focused on WeChat, it effortlessly generates relevant captions for images and creates unique NFTs using DALL-E 3, blending AI with creativity to simplify and enhance content creation."
              ghLink="https://github.com/am-yang/Caption-Writer-Software"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plms}
              isBlog={false}
              title="InstructAgent" 
              description="augmented reality (AR) environments. The core of the project involves the integration of the GPT model to enhance user experience in AR.  The GPT model's sophisticated natural language processing abilities are utilized to create more intuitive and user-friendly experiences, ultimately aiming to make these environments more accessible and effective for users with varying attentional needs. "
              ghLink="https://github.com/kexincchen"
              demoLink="https://drive.google.com/file/d/1TCk6SzGurKI_ZCwuS1Qr0z5KbGjUejdj/view?resourcekey"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={handsonbeats}
              isBlog={false}
              title="HandsOnBeats"
              description="Discover our interactive website, crafted for fun and educational hand gesture learning. Utilizing Vue.js, D3.js, and FastAPI, we offer a user-friendly experience with dynamic visuals. At the heart of our site is advanced hand recognition technology, powered by MediaPipe and our unique database. This project aims to raise awareness and support for people with disabilities."
              ghLink="https://github.com/kexincchen/HandsOnBeats"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shadowpirate}
              isBlog={false}
              title="ShadowPirate"
              description="A adventurous game, developed using Java and Maven, where you embark on an exciting quest to find hidden treasure. In this game, you'll face off against cunning pirates and gather various tools to aid your journey. Your ultimate goal? To outsmart your foes and uncover the coveted treasure. "
              ghLink="https://github.com/kexincchen"
              demoLink="https://b23.tv/tj5kNPt"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
