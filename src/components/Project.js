import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project1.png";
import projImg2 from "../assets/img/Project2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  // Array containing the projects that will be displayed in the first tab
  const projects = [
    {
      title: "Device booking system",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  return (
    // Main section for the Projects component
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* TrackVisibility triggers animations when the section becomes visible on screen */}
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                {/* Section Title */}
                <h2>Projects</h2>

                {/* Small description under the title */}
                <p>Here are some of the projects I’ve built to practice and improve my web development skills. Each one helped me learn new tools, solve problems, and grow as a developer.</p>

                {/* Tabs container for switching between project sections */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  {/* Navigation tabs */}
                  <Nav
                    variant="pills"
                    className="nav-pills mb-5 justify-content-center align-items-center"
                    id="pills-tab"
                  >
                    <Nav.Item>
                      {/* First tab */}
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      {/* Second tab */}
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      {/* Third tab */}
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  {/* Content shown inside each tab */}
                  <Tab.Content
                    id="slideInUp"
                    className={isVisible ? "animate__animated animate__slideInUp" : ""}
                  >
                    
                    {/* First tab displays the project cards */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {/* Loop through all projects and render each ProjectCard */}
                        {projects.map((project, index) => {
                          return (
                            <ProjectCard
                              key={index}
                              {...project} // Spread props into ProjectCard (title, description, imgUrl)
                            />
                          );
                        })}
                      </Row>
                    </Tab.Pane>

                    {/* Placeholder for second tab */}
                    <Tab.Pane eventKey="second">
                      <p>Coming Soon!</p>
                    </Tab.Pane>

                    {/* Placeholder for third tab */}
                    <Tab.Pane eventKey="third">
                      <p>Coming Soon!</p>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Right-side background image */}
      <img className="background-image-right" src={colorSharp2} />
    </section>
  );
};
