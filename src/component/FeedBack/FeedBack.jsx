import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CheckCircleFill } from "react-bootstrap-icons";
import Footer from "../Footer/Footer";
import NewsLetter from "../Products/Newsletter/NewsLetter";
import "./index.scss";

const FeedBack = () => {
  const [text, setText] = useState("");
  const toRotate = ["Your Response has been saved"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 800);

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
      <div class="container-lg">
        <div class="row my-5 align-item-center justify-content-center g-4">
          <div class="col-8 col-lg-4">
            <div class="card border-0">
              <div class="card-body text-center py-4">
                <CheckCircleFill className="icon mb-3" />
                <h3>{text}</h3>
              </div>
              <div className="text-center mb-4 ms-2">
                <Link to="/product-list" class="btn btn-danger btn-lg">
                  Done
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <NewsLetter />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default FeedBack;
