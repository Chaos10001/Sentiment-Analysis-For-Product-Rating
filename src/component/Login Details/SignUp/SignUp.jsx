import { useState } from "react";
import { Container, Row, Col, FormControl, Form } from "react-bootstrap";
import { NavLink, useHistory, Link } from "react-router-dom";
import { auth } from "../../../firebase/base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import "./signup.scss";

const SignUp = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //signed in
        const user = userCredential.user;
        console.log(user);
        history.push("/login");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <>
      <div className="signup">
        <Container>
          <Row className=" align-items-center justify-content-center">
            <Col className="text-center">
              <h1 className="fw-bolder">
                {" "}
                <u>Sign Up</u>{" "}
              </h1>
              <Form>
                <div className="text-center">
                  <FormControl
                    value={name}
                    className="mt-4"
                    type="text"
                    placeholder="UserName"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <FormControl
                    value={email}
                    className="mt-4"
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <FormControl
                    value={password}
                    className="mt-4"
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <button
                  onClick={handleSignUp}
                  type="submit"
                  className="btn btn-danger mt-3">
                  Sign Up
                </button>{" "}
                <br />
                <br />
                <span>
                  Already have an account?{" "}
                  <b>
                    {" "}
                    <Link to="/login">LogIn.</Link>{" "}
                  </b>
                </span>
                <small>
                  This page is proctected by Google reCAPTCHA to ensure you're
                  not a bot. <b>learn more</b>.
                </small>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default SignUp;
