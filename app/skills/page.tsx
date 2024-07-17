"use client";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import FallbackSpinner from "../components/FallbackSpinner";
import Header from "../components/Header";
import data from "../constants/skills";

const styles = {
  iconStyle: {
    height: 75,
    width: 75,
    margin: 10,
    marginBottom: 0,
  },
  introTextContainer: {
    whiteSpace: "pre-wrap",
  },
};

const Skills = () => {
  const renderSkillsIntro = (intro: string | undefined) => (
    <h4 style={styles.introTextContainer}>
      <ReactMarkdown>{intro}</ReactMarkdown>
    </h4>
  );

  return (
    <>
      <Header title={"Skills"} />
      {data ? (
        <div className="section-content-container">
          <Container>
            {renderSkillsIntro(data.intro)}
            {data.skills?.map((rows) => (
              <div key={rows.title}>
                <br />
                <h3>{rows.title}</h3>
                {rows?.items?.map((item) => (
                  <div key={item.title} style={{ display: "inline-block" }}>
                    <img
                      style={styles.iconStyle}
                      src={item.icon}
                      alt={item.title}
                    />
                    <p>{item.title}</p>
                  </div>
                ))}
              </div>
            ))}
          </Container>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
};

export default Skills;
