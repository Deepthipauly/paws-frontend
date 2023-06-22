import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectUser, userLogout } from "../../features/auth/authSlice";
import axios from "axios";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector(selectUser);

  const logout = async (token) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/auth/logout",
        {},
        {
          headers: {
            access_token: token,
          },
        }
      );
      console.log("response", response);
      dispatch(userLogout());
      navigate("/");
    } catch (error) {
      console.error("error", error);
      alert(error.response.data.error || "something went wrong");
    }
  };
  return (
    <Navbar bg="dark" expand="lg">
      <Container style={{fontFamily:'Crimson Text'}} >
        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
          <Navbar.Brand style={{ color: "white", textDecoration: "none" }}>
            PAWS
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {loginData?.token ? (
              <>
                <Navbar.Brand
                  style={{ color: "white", textDecoration: "none" }}
                >
                  {loginData.username}
                </Navbar.Brand>
                <Navbar.Brand
                  onClick={() => {
                    logout(loginData.token);
                  }}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Logout
                </Navbar.Brand>
              </>
            ) : (
              <Link
                to={"/auth/login"}
                style={{ color: "white", textDecoration: "none" }}
              >
                <Navbar.Brand
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Login
                </Navbar.Brand>
              </Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
