"use client";
import { Container } from "react-bootstrap";
import { Chrono } from "react-chrono";
import FallbackSpinner from "../components/FallbackSpinner";
import Header from "../components/Header";
import data from "../constants/education";
import { lightTheme as theme } from "../theme/themes";
import "./styles.css";

const Education = () => {
  return (
    <>
      <Header title={"Education"} />
      {data ? (
        <div className="section-content-container">
          <Container>
            <Chrono
              hideControls
              allowDynamicUpdate
              items={data.education}
              cardHeight={250}
              mode={"VERTICAL_ALTERNATING"}
              theme={{
                primary: theme?.accentColor,
                secondary: theme?.accentColor,
                cardBgColor: theme?.chronoTheme.cardBgColor,
                cardForeColor: theme?.chronoTheme.cardForeColor,
                titleColor: theme?.chronoTheme.titleColor,
              }}
            >
              <div className="chrono-icons">
                {data?.education?.map((education) =>
                  education.icon ? (
                    <img key={education.icon.src} src={education.icon.src} />
                  ) : null
                )}
              </div>
            </Chrono>
          </Container>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
};

export default Education;
