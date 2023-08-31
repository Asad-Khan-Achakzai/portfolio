import React from "react";
import { MdDesignServices } from "react-icons/md";
import { FiCodesandbox } from "react-icons/fi";
import { CgWebsite } from "react-icons/cg";
import styled from "styled-components";
import Card from "./Card";
import { Slide } from "react-awesome-reveal";

const Services = () => {
  return (
    <Container id="service">
      <Slide direction="down">
        <h4>
          My <span className="green">services</span>
        </h4>
        <h1>What I Do</h1>
      </Slide>
      <Cards>
        <Slide direction="left">
          <Card
            Icon={MdDesignServices}
            title={"Diverse Technology Proficiency"}
            disc={`With my range of front-end and back-end skills, I adeptly unify client-side and server-side development. My capacity to navigate various languages and frameworks empowers me to design comprehensive solutions, embracing both user interface and logic, and enabling optimal project-specific tool selection.`}
          />
        </Slide>
        <Slide direction="up">
          <Card
            Icon={FiCodesandbox}
            title={"Responsive User-Centric Design"}
            disc={`My proficiency in Angular, React.js and Next.js enables me to craft responsive, user-centric web apps. Applying expertise in front-end tech, I create adaptable interfaces across devices, optimizing user interactions, navigation, and experience. This underscores my commitment to building engaging, accessible applications.`}
          />
        </Slide>
        <Slide direction="right">
          <Card
            Icon={CgWebsite}
            title={"End-to-End Development Ownership"}
            disc={`As a full stack developer, I lead projects end to end – from requirements to deployment. I guide everything from concept to polished product, leveraging both front-end and back-end skills to enrich user interactions, streamline data management, and elevate overall application performance. My attention to detail and comprehensive skill set prove invaluable for holistic project success.`}
          />
        </Slide>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 3rem 0;
  @media (max-width: 840px) {
    width: 90%;
  }

  h1 {
    padding-top: 1rem;
  }
`;
const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin-top: 4rem;
  gap: 1rem;
`;
