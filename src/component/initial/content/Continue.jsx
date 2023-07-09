import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../index.scss";

const Continue = ({ page, setPage }) => {
  const [text, setText] = useState("");
  const toRotate = [
    "This is a sentiment analyis website, where by you rate our product wheather good, bad or probably neutral, and there will be a sentiment response on how ever way you rate the products",
  ];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() *600);

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
          <Row className=" p-3 align-items-center justify-content-center">
            <Col className="col col-md-7 shadow text-center bg-light hero ">
              <div className="pt-4">
                <img src="./people.png" className="w-50" alt="" srcset="" />
              </div>
              <h1 className="pt-4">{text}</h1>
              <div className="float-end">
                <Link
                  to="/login"
                  class="btn btn-primary btn-lg">
                  Get Started
                </Link>
              </div>
              <div className="float-start">
                <button
                  className="btn btn-primary"
                  onClick={() => setPage(page - 1)}>
                  Previous
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Continue;
