import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../index.scss";

const Welcome = ({ page, setPage }) => {
  const [text, setText] = useState("");
  const toRotate = [
    "Welcome user, This is a Mirage company, and we would like to know your view about our product in this sentiment analysis product rating",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 600);

  useEffect(() => {
    const tinker = setInterval(() => {
      tink();
    }, delta);
    return () => clearInterval(tinker);
  }, [text]);
  const tink = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
  };
  return (
    <>
      <div>
        <Container className="welcome">
          <Row className=" p-3 align-items-center  justify-content-center">
            <Col className="col col-md-7  text-center bg-light hero ">
              <div>
                <img src="./computer.png" className="w-50" alt="" srcset="" />
              </div>
              <h1>{text}</h1>
              <div className="float-end">
                <button
                  className="btn btn-primary"
                  onClick={() => setPage(page + 1)}>
                  Next
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Welcome;
