import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  // Tracks which phrase in the rotation array is currently active
  const [loopNum, setLoopNum] = useState(0);

  // Determines whether text is currently being deleted
  const [isDeleting, setIsDeleting] = useState(false);

  // Stores the currently displayed portion of the rotating text
  const [text, setText] = useState("");

  // Speed of the typing effect, adjusted dynamically
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // List of titles that will rotate one after another
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];

  // Pause duration before deleting starts
  const period = 2000;

  // Typing/deleting interval logic
  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    // Clean up the interval when dependencies change
    return () => clearInterval(ticker);
  }, [text, delta]);

  // Controls typing and deleting characters
  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    // Determines next text update depending on typing or deleting
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Deleting happens faster
    if (isDeleting) setDelta((prev) => prev / 2);

    // When full word is typed, start deleting
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);

    // When deletion finishes, move to next phrase
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">

          {/* Left side: text content and typing animation */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  {/* Small introductory label */}
                  <span className="tagline">Welcome to my website</span>

                  {/* Main heading with name and typing animation */}
                  <h1>
                    Hello, my name is <span className="name">Aziz Alkiyumi</span>
                    <br />
                    <span className="wrap">{text}</span>
                  </h1>

                  {/* Short description about yourself */}
                  <p>
                    I'm a computer science graduate learning web development and growing my skills through hands-on projects. I enjoy building responsive interfaces, experimenting with React, and exploring modern web technologies as I work toward becoming a full-stack developer.
                  </p>

                  {/* Button for connecting or triggering future interaction */}
                  <button onClick={() => console.log("connect")}>
                    Let&apos;s connect <ArrowRightCircle size={25} />
                  </button>

                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* Right side: animated header image */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header" />
                </div>
              )}
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
