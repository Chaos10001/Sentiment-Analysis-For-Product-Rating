import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Container, Row, Col, FormControl, Form } from "react-bootstrap";
import { NavLink, useHistory, Link } from "react-router-dom";
import { auth } from "../../../firebase/base";
// import {ToastContainer, toast} from 'react-toastify'
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        console.log(user);
        history.push("/product-list");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      {/* <ToastContainer/> */}
      <div className="login">
        <Container>
          <Row className=" align-items-center justify-content-center">
            <Col className="text-center">
              <h1 className="fw-bolder">
                {" "}
                <u>Login</u>{" "}
              </h1>
              <Form onSubmit={handleLogin}>
                <div className="text-center">
                  <FormControl
                    value={email}
                    className="mt-4"
                    type="email"
                    placeholder="email or Phone number"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <FormControl
                    value={password}
                    className="mt-4"
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-danger mt-3">Login</button> <br />
                <br />
                <span>
                  New to Mirage?{" "}
                  <b>
                    {" "}
                    <Link to="/signup">Sign up now.</Link>{" "}
                  </b>
                </span>
                <small>
                  This page is proctected by Google reCAPTCHA to ensure you're
                  not a bot. <b>learn more</b>{" "}
                  
                </small>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default Login;
