import axios from "axios";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams,useNavigate } from "react-router";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreed, selectBreed } from "../../features/breed/breedSlice";
import { selectUser } from "../../features/auth/authSlice";
import "./common.css";


function Viewallbreeds() {
  const allbreedData = useSelector(selectBreed);
  const userData = useSelector(selectUser);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const fetchAllBreed = async (categoryId) => {
    const breeds = await axios.get(
      `http://localhost:4000/breed/view_all_breedby_category/${categoryId}`
    );
    dispatch(fetchBreed(breeds.data.data));
  };

  const redirectToBreed = (breedId) => {
    console.log("clicked");
    navigate(`/view_breed/${breedId}`);
  };

  console.log("allbreedData", allbreedData);
  useEffect(() => {
    fetchAllBreed(params.id);
  }, []);

  let template = (
    <Container>
      {userData.accountType === "ADMIN" || allbreedData.length != 0 ? (
        <Row className="mt-5 me-5 d-flex justify-content-center">
          <img
            className="img-fluid img-thumbnail shadow bg-white rounded"
            src="https://i.postimg.cc/6Qwgqc05/coverAdd.jpg"
            alt=""
          />
          <div className="mt-5 me-5 d-flex justify-content-center">
            <Link style={{ textDecoration: "none" }} to={"/admin/add_breed"}>
              <Button
                variant="outline-danger"
                style={{ textDecoration: "none" }}
                size="sm"
              >
                Add New Breed
              </Button>
            </Link>
          </div>
        </Row>
      ) : (
        <p>
          <Row className="mt-5 me-5 d-flex justify-content-center">
            <img
              className="img-fluid img-thumbnail shadow bg-white rounded"
              src="https://i.postimg.cc/6Qwgqc05/coverAdd.jpg"
              alt=""
            />
            <div style={{color:'red'}} className="mt-5 me-5 d-flex justify-content-center">
              <h1 style={{ fontFamily: "Crimson Text"}}>
                NO Data to Display......
              </h1>
            </div>
          </Row>
        </p>
      )}
    </Container>
  );

  if (allbreedData.length)
    template = (
      <Container fluid style={{ fontFamily: "Crimson Text" }}>
        <Row>
          <Col className="mt-3 ms-4 d-flex justify-content-center">
            <h1>{allbreedData[0]?.categoryId?.name}</h1>
          </Col>
        </Row>
        <Row className="mt-2 ms-3">
          <Col lg={2} md={4} sm={12}>
            <div className="d-flex justify-content-center">
              <img
                className="img-fluid img-thumbnail shadow bg-white rounded "
                style={{ cursor: "pointer" }}
                src={allbreedData[0]?.categoryId?.image}
                alt="pets-coverImage"
              />
            </div>
          </Col>
          <Col>
            <p>{allbreedData[0]?.categoryId?.description}</p>
            {userData.accountType === "ADMIN" ? (
              <Link to={"/admin/add_breed"}>
                <Button variant="outline-danger" size="sm">
                  Add New Breed
                </Button>
              </Link>
            ) : null}
          </Col>
        </Row>
        <Row className="mt-5 ms-3">
          {allbreedData.map((breed) => (
            <Col key={breed._id} sm={12} md={6} lg={2}>
              <Card
                id="image-hover"
                style={{ width: "10rem" }}
                className="shadow bg-white rounded"
              >
                <Card.Img
                  variant="top"
                  className="img-thumbnail img-fluid"
                  src={breed.image}
                  onClick={() => {
                    redirectToBreed(breed._id);
                  }}
                />
                <Card.Body>
                  <Card.Title>{breed.name}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  return template;
}

export default Viewallbreeds;
