"use client";
import { Container, Row } from "react-bootstrap";
import FallbackSpinner from "../components/FallbackSpinner";
import Header from "../components/Header";
import data from "../constants/projects";
import ProjectCard from "./ProjectCard";

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const Projects = () => {
  const numberOfItems = data?.projects?.length;

  return (
    <>
      <Header title={"Projects"} />
      {data ? (
        <div className="section-content-container">
          <Container style={styles.containerStyle}>
            <Row xs={1} sm={1} md={2} lg={3} className="g-4">
              {data.projects?.slice(0, numberOfItems).map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </Row>
          </Container>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
};

export default Projects;
