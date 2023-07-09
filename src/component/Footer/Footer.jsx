import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./index.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="bg-dark text-white hero">
        <Container>
          <Row>
            <Col class="column">
              <h4>Contact</h4>
              <p>
                {" "}
                <strong>Address:</strong>789 Migina Road,Area 69, Louis
              </p>
              <p>
                {" "}
                <strong>Hours:</strong>8.00 - 20.00, Mon - fri
              </p>
            </Col>
            <Col class="col">
              <h4>About</h4>
              <div className="lin">
                <Link to="/">About us</Link>
                <Link to="/">Delivery Information</Link>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms & Conditions</Link>
                <Link to="/">Contact Us</Link>
              </div>
            </Col>
            <Col class="col">
              <h4>My Account</h4>
              <div className="lin">
                <a href="#">Sign In</a>
                <a href="#">View Cart</a>
                <a href="#">My Wishlist</a>
                <a href="#">Track My Order</a>
                <a href="#">Help</a>
              </div>
            </Col>
          </Row>
          <hr />
          <Col class="copyright">
            <p>@ 2020 Tech1 workshop, Ecomerce Templete</p>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default Footer;
