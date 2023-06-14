import React from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/auth/authSlice";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },

    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .required("Please Enter your password")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
        ),
    }),

    onSubmit: async (values) => {
      try {
        const loginForm = await axios.post("http://localhost:4000/auth/login", {
          username: values.userName,
          password: values.password,
        });
        // data dispatch to aut slice
        const loginData = {
          token: loginForm.data.data.token,
          username: loginForm.data.data.username,
          userId: loginForm.data.data.userId,
          accountType: loginForm.data.data.accountType,
        };
        dispatch(userLogin(loginData));
        alert("Login Successfully");
        // navigate to home
        navigate("/");
      } catch (error) {
        console.error("error", error);
        alert(error.response.data.error || "something went wrong");
      }
    },
  });
  return (
    <div
      style={{
        backgroundImage:
          " linear-gradient(rgba(16, 20, 24, 0.2), rgba(24, 84, 89, 0.2)), url(https://i.postimg.cc/3RZ7zPXZ/background.jpg)",
      }}
    >
      <Container>
        <Row className="align-items-center" style={{ height: "100vh" }}>
          <Col className="mx-auto" sm={10} md={8} lg={6}>
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "30px",
                boxShadow: "1px 2px 9px #F4AAB9",
              }}
              className="p-5"
            >
              <h3 className="text-center">Welcome Back</h3>
              <Form onSubmit={formik.handleSubmit}>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Username</InputGroup.Text>
                  <Form.Control
                    id="userName"
                    placeholder="username"
                    aria-label="userName"
                    name="userName"
                    type="userName"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.userName}
                  />
                </InputGroup>
                <div style={{ color: "red" }}>
                  {formik.touched.userName && formik.errors.userName ? (
                    <div>{formik.errors.userName}</div>
                  ) : (
                    ""
                  )}
                </div>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">Password</InputGroup.Text>
                  <Form.Control
                    id="password"
                    placeholder="password"
                    aria-label="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                  />
                </InputGroup>
                <div style={{ color: "red" }}>
                  {formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : (
                    ""
                  )}
                </div>
                <Button className="me-3 mt-2" variant="dark" type="submit">
                  Login
                </Button>
                <Link to={"/auth/register"} style={{ textDecoration: "none" }}>
                  <p className="mt-2">
                    Don't have an Account?{" "}
                    <span
                      style={{ color: "red", textDecoration: "none" }}
                      href=""
                    >
                      Register here
                    </span>
                  </p>
                </Link>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
