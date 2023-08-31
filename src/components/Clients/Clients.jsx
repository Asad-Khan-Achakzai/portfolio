import React from "react";
import styled from "styled-components";
import { Slide } from "react-awesome-reveal";
import ProgressBar from "./ProgressBar"; // Import your ProgressBar component here
import { Zoom } from "react-awesome-reveal";
import myCV from './CV_Asad_khan.pdf';

const Skills = () => {
  return (
    <Container id="skills">
      <Slide direction="left">
        <h1>
          My <span className="green">Skills</span>
        </h1>{" "}
      </Slide>
      <SkillsList>
        <Slide direction="left">
          <ProgressBar skill="Angular" progress={90} />
        </Slide>
        <Slide direction="right">
          <ProgressBar skill="React.js" progress={90} />
        </Slide>
        <Slide direction="left">
          <ProgressBar skill="Next.js" progress={90} />
        </Slide>
        <Slide direction="right">
          <ProgressBar skill="Node.js" progress={90} />
        </Slide>
        <Slide direction="left">
          <ProgressBar skill="Java" progress={50} />
        </Slide>
        <Slide direction="right">
          <ProgressBar skill="Hubspot" progress={80} />
        </Slide>

        <Slide direction="left">
          <ProgressBar skill="Wordpress" progress={50} />
        </Slide>
        {/* Add more ProgressBar components for other skills */}
      </SkillsList>

      <Zoom>
        <DownloadCV>
          <a href={myCV} download>
            Download CV
          </a>
        </DownloadCV>
      </Zoom>
    </Container>
  );
};

export default Skills;

const Container = styled.div`
  width: 50%;
  max-width: 800px; /* Set a maximum width for larger screens */
  margin: 0 auto;
  padding: 4rem 0;
  text-align: center; /* Center the content */

  @media (max-width: 840px) {
    width: 80%; /* Adjust the width for smaller screens */
  }

  /* Your existing styles here */
`;

const SkillsList = styled.div`
  /* Your existing styles here */
`;

const DownloadCV = styled.div`
  text-align: center;
  margin-top: 2rem;

  a {
    text-decoration: none;
    background-color: #01be96;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    font-weight: 600;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #018a70;
    }
  }
`;
