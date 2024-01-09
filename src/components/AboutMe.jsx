import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import { Element } from "react-scroll";
import { Icon } from "@iconify/react";
// Data
import { moreInfo } from "../data";
// Components
import { Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }
  .img {
    width: 18rem;
    height: 18rem;
  }
`;

const handleClick = (e) => {
    window.open('https://www.linkedin.com/in/eduardo-malhao/', '_blank');
}

export default function AboutMe() {
  const { avatar_url, bio } = useSelector(selectData);

  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>About Me</h2>
              {/* <div className="underline"></div> */}
            </Title>
          </Container>
          <Row className="align-items-center mt-5">
            <Col className="d-flex flex-column text-center">
              <Container>
                <p>{bio}</p>
                {moreInfo && <p>{moreInfo}</p>}
              </Container>
            </Col>
            <Col className="d-none d-md-block text-center">
              <img
                src={avatar_url}
                alt="GitHub Avatar"
                loading="lazy"
                className="mx-auto rounded-circle"
                style={{ width: "15rem", height: "15rem" }}
              />
            </Col>
          </Row>
        </Container>
        <Container>
          <a
            href={'https://www.linkedin.com/in/eduardo-malhao/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon 
              icon="skill-icons:linkedin"
              className="display-4" 
              onclick={handleClick}
              style={
                {cursor: 'pointer'}
              }
            />
          </a>
        </Container>
      </StyledAboutMe>
    </Element>
  );
}
