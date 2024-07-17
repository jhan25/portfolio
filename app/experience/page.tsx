"use client";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
// import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import FallbackSpinner from "../components/FallbackSpinner";
import Header from "../components/Header";
import data from "../constants/experiences";
import "./styles.css";
import { lightTheme as theme } from "../theme/themes";

const styles = {
  ulStyle: {
    listStylePosition: "outside",
    paddingLeft: 20,
  },
  subtitleContainerStyle: {
    marginTop: 10,
    marginBottom: 10,
  },
  subtitleStyle: {
    display: "inline-block",
  },
  inlineChild: {
    display: "inline-block",
  },
  itemStyle: {
    marginBottom: 10,
  },
};

const Experience = () => {
  return (
    <>
      <Header title={"Experience"} />

      {data ? (
        <div className="section-content-container">
          <Container>
            {/* <Timeline lineColor={theme?.timelineLineColor}>
              {data?.experiences?.map((item) => (
                <TimelineItem
                  key={item?.title + item?.dateText}
                  dateText={item.dateText}
                  dateInnerStyle={{ background: theme?.accentColor }}
                  style={styles.itemStyle}
                  bodyContainerStyle={{ color: theme?.color }}
                >
                  <h2 className="item-title">{item.title}</h2>
                  <div style={styles.subtitleContainerStyle}>
                    <h4
                      style={{
                        ...styles.subtitleStyle,
                        color: theme?.accentColor,
                      }}
                    >
                      {item.subtitle}
                    </h4>
                    {item.workType && (
                      <h5 style={styles.inlineChild}>
                        &nbsp;· {item.workType}
                      </h5>
                    )}
                  </div>
                  <ul style={styles.ulStyle}>
                    {item?.workDescription?.map((point) => (
                      <div key={point}>
                        <li>
                          <ReactMarkdown
                            children={point}
                            components={{
                              p: "span",
                            }}
                          />
                        </li>
                        <br />
                      </div>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </Timeline> */}
          </Container>
        </div>
      ) : (
        <FallbackSpinner />
      )}
    </>
  );
};

export default Experience;
