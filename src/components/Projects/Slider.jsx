import React, { useRef } from "react";
import Slider from "react-slick";
import Project from "./Project";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styled from "styled-components";
import image1 from "../../image1.webp";
import image2 from "../../image2.webp";
import image3 from "../../image3.webp";

let data = [
  {
    title: "Employee Portal",
    img:  image1 ,
    disc: "A web application providing insights and visualizations for employee metrics. Utilizes React.js for the front-end, Node.js for the back-end",
    github: "https://github.com/Asad-Khan-Achakzai/",
    url: "",
  },
  {
    title: "Xgrid Website",
    img: image2,
    disc: "A static website showcasing Xgrid, featuring YouTube videos, case studies, and WordPress blogs.",
    github: "",
    url: "https://www.xgrid.co/",
  },
  {
    title: "Zaxiss Website",
    img: image3,
    disc: "A static website representing Zaxiss",
    github: "",
    url: "https://www.zaxiss.com/",
  },
  {
    title: "X96",
    img: image2,
    disc: "A static website representing X96 which is part of Xgrid.co",
    github: "",
    url: "https://xninetysix.com/?_ga=2.9927603.741892517.1692524595-682477443.1692524595",
  },
  {
    title: "Education Portal",
    img: image1,
    disc: "An education management application encompassing modules for Inventory, Transport, User, Activity, and Learning Management",
    github: "",
    url: "",
  },
  {
    title: "EnergyBizz",
    img: image2,
    disc: "A live meeting app using OpenVidu APIs, Tech stack: Angular (Material), Node.js (Express), MySQL",
    github: "",
    url: "",
  },
  {
    title: "NPME",
    img: image3,
    disc: "An app designed for farm inventory management",
    github: "",
    url: "",
  },
  {
    title: "Pronto",
    img: image1,
    disc: "An AI-powered video creation application",
    github: "",
    url: "https://getpronto.ai/",
  },
  {
    title: "Curve Beam ",
    img: image2,
    disc: "An application for storing DICOM and local files.",
    github: "",
    url: "https://getpronto.ai/",
  },
  {
    title: "HCG",
    img: image3,
    disc: "An application that generates basic CRUDs for Java and Angular applications",
    github: "",
    url: "https://getpronto.ai/",
  },
];

var settings = {
  className: "center",
  centerMode: true,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        centerMode: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        centerMode: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const SliderComp = () => {
  const arrowRef = useRef(null);
  let sliderProject = "";
  sliderProject = data.map((item, i) => <Project item={item} key={i} />);
  return (
    <Container>
      <Slider ref={arrowRef} {...settings}>
        {sliderProject}
      </Slider>
      <Buttons>
        <button onClick={() => arrowRef.current.slickPrev()} className="back">
          <IoIosArrowBack />
        </button>
        <button onClick={() => arrowRef.current.slickNext()} className="next">
          <IoIosArrowForward />
        </button>
      </Buttons>
    </Container>
  );
};

export default SliderComp;

const Container = styled.div`
  position: relative;
`;

const Buttons = styled.div`
  button {
    width: 2rem;
    height: 2rem;
    background-color: rgba(255, 255, 255, 0.1);
    cursor: pointer;
    color: #01be96;
    border: none;
    position: absolute;
    top: 45%;
    right: -1rem;
  }

  .back {
    left: -1rem;
  }
`;
