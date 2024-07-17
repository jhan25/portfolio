"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import data from "../constants/navbar";
import { lightTheme as theme } from "../theme/themes";

const styles = {
  logoStyle: {
    width: 50,
    height: 40,
  },
};

const ExternalNavLink = styled.a`
  color: ${() => theme.navbarTheme.linkColor};
  &:hover {
    color: ${() => theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${() => theme.accentColor};
  }
`;

const InternalNavLink = styled(Link)`
  color: ${() => theme.navbarTheme.linkColor};
  &:hover {
    color: ${() => theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${() => theme.accentColor};
  }
  &.navbar__link--active {
    color: ${() => theme.navbarTheme.linkActiveColor};
  }
`;

const NavBar = () => {
  return (
    <Navbar
      fixed="top"
      expand="md"
      bg="dark"
      variant="dark"
      className="navbar-custom"
      expanded={true}
    >
      <Container>
        {data?.logo && (
          <Navbar.Brand href="/">
            <img
              src={data?.logo?.source}
              className="d-inline-block align-top"
              alt="main logo"
              style={
                data?.logo?.height && data?.logo?.width
                  ? { height: data?.logo?.height, width: data?.logo?.width }
                  : styles.logoStyle
              }
            />
          </Navbar.Brand>
        )}
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            {data &&
              data.sections?.map((section, index) =>
                section?.type === "link" ? (
                  <ExternalNavLink
                    key={section.title}
                    href={section.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="navbar__link"
                  >
                    {section.title}
                  </ExternalNavLink>
                ) : (
                  <InternalNavLink
                    key={section.title}
                    href={section.href as Url}
                    className="navbar__link"
                  >
                    {section.title}
                  </InternalNavLink>
                )
              )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
