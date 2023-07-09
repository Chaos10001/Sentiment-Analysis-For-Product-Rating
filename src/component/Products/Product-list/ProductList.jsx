import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../index.scss";
import NewsLetter from "../Newsletter/NewsLetter";
import Footer from "../../Footer/Footer";

const ProductList = () => {
  const [text, setText] = useState("");
  const toRotate = ["Rate our products"];
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 400);

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
        <div class="text-center">
          <h2 className="text-danger fw-bolder">{text}</h2>
        </div>
        <div class="row my-5 align-item-center justify-content-center g-4">
          <div class="col-8 col-lg-4">
            <div class="card border-0">
              <img src="./Luios-V.png" className="rounded hero-img" alt="" />
              <div class="card-body text-center py-4">
                <h4 class="card-title fw-bolder">Luios Vutton</h4>
                <Link
                  to="/first-item"
                  class="btn btn-outline-primary btn-lg mt-3">
                  Rate Product
                </Link>
              </div>
            </div>
          </div>
          <div class="col-8 col-lg-4">
            <div class="card border-0">
              <img src="./ebook2.jpg" className="rounded hero-img" alt="" />
              <div class="card-body text-center py-4">
                <h4 class="card-title fw-bolder">Affliate E-Book</h4>
                <Link
                  to="/second-item"
                  class="btn btn-outline-primary btn-lg mt-3">
                  Rate Product
                </Link>
              </div>
            </div>
          </div>
          <div class="col-8 col-lg-4">
            <div class="card border-0">
              <img src="./harmburger.jpg" className="rounded hero-img" alt="" />
              <div class="card-body text-center py-4">
                <h4 class="card-title fw-bolder">HamBurger</h4>
                <Link
                  to="/third-item"
                  class="btn btn-outline-primary btn-lg mt-3">
                  Rate Product
                </Link>
              </div>
            </div>
          </div>
          <div class="col-8 col-lg-4">
            <div class="card border-0">
              <img
                src="./HighTechDesk.jpg"
                className="rounded hero-img"
                alt=""
              />
              <div class="card-body text-center py-4">
                <h4 class="card-title fw-bolder">Tech Desk Setup</h4>
                <Link
                  to="/forth-item"
                  class="btn btn-outline-primary btn-lg mt-3">
                  Rate Product
                </Link>
              </div>
            </div>
          </div>
          <div class="col-8 col-lg-4">
            <div class="card border-0">
              <img src="./images.jpg" className="rounded hero-img" alt="" />
              <div class="card-body text-center py-4">
                <h4 class="card-title fw-bolder">SamsungTV</h4>
                <Link
                  to="/fifth-item"
                  class="btn btn-outline-primary btn-lg mt-3">
                  Rate Product
                </Link>
              </div>
            </div>
          </div>
          <div class="col-8 col-lg-4">
            <div class="card border-0">
              <img src="./download.jpg" className="rounded hero-img" alt="" />
              <div class="card-body text-center py-4">
                <h4 class="card-title fw-bolder">Iphone 14</h4>
                <Link
                  to="/sixth-item"
                  class="btn btn-outline-primary btn-lg mt-3">
                  Rate Product
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

export default ProductList;
