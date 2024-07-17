"use client";
import { Col, Container, Row } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import FallbackSpinner from "../components/FallbackSpinner";
import Header from "../components/Header";
import data from "../constants/about";

const styles = {
  introTextContainer: {
    margin: 10,
    flexDirection: "column" as "column",
    whiteSpace: "pre-wrap",
    textAlign: "left" as "left",
    fontSize: "1.2em",
    fontWeight: 500,
  },
  introImageContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
};

const About = () => {
  const parseIntro = (text: string | undefined) => (
    <ReactMarkdown>{text}</ReactMarkdown>
  );

  return (
    <>
      <Header title={"About"} />
      <div className="section-content-container">
        <Container>
          {data ? (
            <Row>
              <Col style={styles.introTextContainer}>
                {parseIntro(data.about)}
              </Col>
              <Col style={styles.introImageContainer}>
                <img src={data?.imageSource} alt="profile" />
              </Col>
            </Row>
          ) : (
            <FallbackSpinner />
          )}
        </Container>
      </div>
    </>
  );
};

export default About;
