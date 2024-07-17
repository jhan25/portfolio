"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Typewriter from "typewriter-effect";
import Social from "./components/Social";
import "./globals.css";

const styles = {
  nameStyle: {
    fontSize: "5em",
  },
  inlineChild: {
    display: "inline-block",
  },
  mainContainer: {
    height: "100%",
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Home = () => {
  return (
    <div style={styles.mainContainer}>
      <h1 style={styles.nameStyle}>- 한동훈 -</h1>
      <div style={{ flexDirection: "row" }}>
        <h2 style={styles.inlineChild}>I&apos;m&nbsp;</h2>
        <Typewriter
          options={{
            loop: true,
            autoStart: true,
            strings: ["a Developer", "a Freelancer"],
          }}
        />
      </div>
      <Social />
    </div>
  );
};

export default Home;
