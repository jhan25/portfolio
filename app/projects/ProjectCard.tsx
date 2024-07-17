"use client";
import { Badge, Button, Card, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { lightTheme as theme } from "../theme/themes";

interface Link {
  text?: string;
  href?: string;
}

interface Project {
  image?: string;
  title?: string;
  bodyText?: string;
  links?: Link[];
  tags?: string[];
}

interface Props {
  project: Project;
}

const styles = {
  badgeStyle: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    margin: 5,
  },
  cardStyle: {
    borderRadius: 10,
  },
  cardTitleStyle: {
    fontSize: 24,
    fontWeight: 700,
  },
  cardTextStyle: {
    textAlign: "left" as "left",
  },
  linkStyle: {
    textDecoration: "none",
    padding: 10,
  },
  buttonStyle: {
    margin: 5,
  },
};

const ProjectCard = ({ project }: Props) => {
  const parseBodyText = (text: string | undefined) => (
    <ReactMarkdown>{text}</ReactMarkdown>
  );

  return (
    <Col>
      <Card
        style={{
          ...styles.cardStyle,
          backgroundColor: theme?.cardBackground,
          borderColor: theme?.cardBorderColor,
        }}
        text={theme?.bsSecondaryVariant}
      >
        <Card.Img variant="top" src={project?.image} />
        <Card.Body>
          <Card.Title style={styles.cardTitleStyle}>{project.title}</Card.Title>
          <Card.Text style={styles.cardTextStyle}>
            {parseBodyText(project?.bodyText)}
          </Card.Text>
        </Card.Body>

        <Card.Body>
          {project?.links?.map((link) => (
            <Button
              key={link.href}
              style={styles.buttonStyle}
              variant={"outline-" + theme?.bsSecondaryVariant}
              onClick={() => window.open(link.href, "_blank")}
            >
              {link.text}
            </Button>
          ))}
        </Card.Body>
        {project.tags && (
          <Card.Footer style={{ backgroundColor: theme?.cardFooterBackground }}>
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                pill
                bg={theme?.bsSecondaryVariant}
                text={theme?.bsPrimaryVariant}
                style={styles.badgeStyle}
              >
                {tag}
              </Badge>
            ))}
          </Card.Footer>
        )}
      </Card>
    </Col>
  );
};

export default ProjectCard;
