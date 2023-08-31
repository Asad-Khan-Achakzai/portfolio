import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { MdAlternateEmail } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { HiOutlineMailOpen } from "react-icons/hi";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";
import { BsFacebook, BsSlack } from "react-icons/bs";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { Slide, Zoom, Fade } from "react-awesome-reveal";
import { AiOutlineInstagram } from "react-icons/ai";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const form = useRef();
  const [fullName, setFullName] = useState("");
  const [businessEmail, setBusinessEmail] = useState("");
  const [description, setDescription] = useState("");
  const [businessEmailError, setBusinessEmailError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [fullNameError, setFullNameError] = useState(false);
  const [isFormInvalid, setIsFormInvalid] = useState(true);
  useEffect(() => {
    validatInputs() ? setIsFormInvalid(true) : setIsFormInvalid(false);
  }, [businessEmail, fullName, description]);

  /**
   * Function to validate inputs
   */
  const validatInputs = () => {
    return !businessEmail ||
      !verifyEmail(businessEmail) ||
      !fullName ||
      !ifOnlyAlphabets(fullName) ||
      !description
      ? true
      : false;
  };

  /**
   * Function to verify business email
   * @param {String} businessEmail
   */
  const verifyEmail = (businessEmail) => {
    return businessEmail
      ?.toLowerCase()
      .match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  };
  /**
   * Function to update field on change
   * @param {Function} setFieldError
   * @param {Function} setFieldValue
   * @param {Event} event
   */
  const onChangeField = (event, setFieldError, setFieldValue) => {
    console.log("isFormInvalid", isFormInvalid);
    if (event.target.name === "businessEmail") {
      setFieldError(false);
      if (!verifyEmail(event.target.value)) {
        setFieldError(true);
      }
    } else if (event.target.name === "fullName") {
      setFieldError(false);
      if (!ifOnlyAlphabets(event.target.value)) {
        setFieldError(true);
      }
    }
    setFieldValue(event.target.value);
  };
  /**
   * Function to verify string that has only letters
   * @param {String} value
   * @returns boolean value
   */
  const ifOnlyAlphabets = (value) => {
    return value?.toLowerCase().match(/^[a-zA-Z\s]*$/);
  };

  /**
   * Mails the information entered, to the recipents and downloads the case study
   * @param {Event} event
   */
  const sendEmail = (event) => {
    event.preventDefault();
    if (!isFormInvalid) {
      emailjs
        .sendForm(
          "service_vuabkbv",
          "template_v980jyy",
          form.current,
          "biyIPIwpg4G44kMAL"
        )
        .then(
          () => {
            setFullName("");
            setDescription("");
            setBusinessEmail("");
            alert("Your Email is forwarded");
          },
          (error) => {
            // TODO: will update later
            console.log(error.text);
          }
        );
    }
  };
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Container id="footer">
      <Profile>
        <Slide direction="left" delay={1}>
          <h1>Portfolio</h1>
        </Slide>
        <div className="address">
          <Slide direction="left">
            <h1>Address:</h1>
          </Slide>
          <Slide direction="left">
            <p>house# 25, PWD, Islamabad, Pakistan</p>
          </Slide>
        </div>
        <div className="links">
          <Slide direction="left">
            <h1>Contact me directly:</h1>
          </Slide>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+923118491079">(+92) 3118491079</a>
            </Slide>
          </div>
          <div>
            <span>
              <FiPhoneCall />
            </span>
            <Slide direction="left">
              <a href="tel:+923315711441">(+92) 3315711441</a>
            </Slide>
          </div>
          <div>
            <Slide direction="left">
              <span>
                <HiOutlineMailOpen />
              </span>
            </Slide>
            <Slide>
              <a href="mailto:asad.khan.achakzie@gmail.com">
                asad.khan.achakzie@gmail.com
              </a>
            </Slide>
          </div>
        </div>
        <div className="profiles">
          <Slide direction="left">
            <h1>Check my profiles</h1>
          </Slide>
          <div className="icons">
            <Zoom>
              <span>
                <a href="https://github.com/Asad-Khan-Achakzai" target="_blank">
                  <AiFillGithub />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a
                  href="https://www.linkedin.com/in/asad-khan-9b4482164/"
                  target="_blank"
                >
                  <AiFillLinkedin />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a
                  href="https://www.facebook.com/asadkhan.alm/"
                  target="_blank"
                >
                  <BsFacebook />
                </a>
              </span>
            </Zoom>
            <Zoom>
              <span>
                <a
                  href="https://www.instagram.com/asadkhan8822/"
                  target="_blank"
                >
                  <AiOutlineInstagram />
                </a>
              </span>
            </Zoom>
          </div>
        </div>
        <Fade>
          <ArrowUp onClick={scrollUp}>
            <AiOutlineArrowUp />
          </ArrowUp>
        </Fade>
      </Profile>
      <Form>
        <Slide direction="right">
          <div onSubmit={sendEmail}>
            <form ref={form}>
              <div className="name">
                <span>
                  <CgProfile />
                </span>
                <input
                  type="text"
                  id="name"
                  name="fullName"
                  placeholder="Fullname..."
                  value={fullName}
                  onChange={(event) => {
                    onChangeField(event, setFullNameError, setFullName);
                  }}
                />
                {fullNameError ? (
                  <label class="text-danger">Error</label>
                ) : null}
              </div>
              <div className="email">
                <span>
                  <MdAlternateEmail />
                </span>
                <input
                  type="email"
                  id="email"
                  name="businessEmail"
                  placeholder="Email..."
                  value={businessEmail}
                  onChange={(event) => {
                    onChangeField(
                      event,
                      setBusinessEmailError,
                      setBusinessEmail
                    );
                  }}
                />
                {businessEmailError ? (
                  <label className="text-danger">Error</label>
                ) : null}
              </div>
              <div className="message">
                <span className="messageIcon">
                  <FiMail />
                </span>
                <textarea
                  id="description"
                  name="description"
                  cols="30"
                  rows="10"
                  placeholder="Message..."
                  value={description}
                  onChange={(event) => {
                    onChangeField(event, setDescriptionError, setDescription);
                  }}
                ></textarea>
                {descriptionError ? (
                  <label className="text-danger">Error</label>
                ) : null}
              </div>
              <button type="submit" disabled={isFormInvalid}>
                Submit
              </button>
            </form>
          </div>
        </Slide>
      </Form>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  padding: 2rem 0;
  width: 80%;
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 840px) {
    width: 90%;
  }

  @media (max-width: 650px) {
    flex-direction: column;
    gap: 3rem;
  }
`;
const Profile = styled.div`
  flex: 1;
  .address {
    padding: 1rem 0;
    h1 {
      font-size: 1.2rem;
    }

    p {
      width: 60%;
      padding-top: 0.5rem;
      @media (max-width: 650px) {
        width: 100%;
      }
    }
  }

  .links {
    h1 {
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      a {
        text-decoration: none;
        color: lightgray;
        :hover {
          color: orange;
        }
      }
    }
  }

  .profiles {
    h1 {
      font-size: 1.2rem;
      padding: 1rem 0;
    }

    .icons {
      display: flex;
      align-items: center;

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #000;
        width: 2rem;
        height: 2rem;
        margin-right: 0.5rem;
        border-radius: 50px;

        :hover {
          background-color: orange;
        }

        a {
          margin-top: 0.2rem;
          color: #fff;
        }
      }
    }
  }
`;
const ArrowUp = styled.div`
  width: 2rem;
  height: 2rem;
  background-color: #01be96;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  margin-top: 2rem;
  @media (max-width: 650px) {
    position: absolute;
    right: 3rem;
    top: 16rem;
  }
`;
const Form = styled.div`
  flex: 1;
  h1 {
    font-size: 1.3rem;
    padding-bottom: 0.7rem;
  }

  form {
    background-color: #191923;
    padding: 0.8rem;
    border-radius: 5px;
    .name,
    .email,
    .message {
      display: flex;
      border: 1px solid gray;
      margin-bottom: 0.5rem;
      input,
      textarea {
        width: 100%;
        border: none;
        outline: none;
        color: #fff;
        background-color: transparent;
        padding: 1rem 0.5rem;
      }
      span {
        background-color: #3e3e3e;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .messageIcon {
        align-items: flex-start;
        padding-top: 0.5rem;
      }
    }

    button {
      width: 5rem;
      height: 1.8rem;
      background-color: #01be96;
      border: none;
      border-radius: 5px;
      filter: drop-shadow(0px 4px 5px #01be9551);
      cursor: pointer;
      :hover {
        filter: drop-shadow(0px 6px 9px #01be9551);
      }
    }
  }
`;
