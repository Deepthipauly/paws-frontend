import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams,useNavigate } from "react-router";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchBreed, selectBreed } from "../../features/breed/breedSlice";

function Viewallbreeds() {
  const allbreedData = useSelector(selectBreed);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const fetchAllBreed = async (categoryId) => {
    const breeds = await axios.get(
      `http://localhost:4000/breed/view_all_breedby_category/${categoryId}`
    );
    dispatch(fetchBreed(breeds.data.data));
  };

  const redirectToBreed = (breedId)=>{
    console.log("clicked");
    navigate(`/view_breed/${breedId}`);
  }

  console.log("allbreedData", allbreedData);
  useEffect(() => {
    fetchAllBreed(params.id);
  }, []);
  let template = <Container>Loading...</Container>;
  if (allbreedData.length)
    template = (
      <Container fluid>
        <Row className="mt-5 ms-3">
          <Col lg={2} md={4} sm={12}>
            <div className="d-flex justify-content-center">
              <img
                className="img-fluid"
                src={allbreedData[0]?.categoryId?.image}
                alt="pets-coverImage"
              />
            </div>
          </Col>
          <Col>
            <p>{allbreedData[0]?.categoryId?.description}</p>
          </Col>
        </Row>
        <Row className="mt-5 ms-3">
          {allbreedData.map((breed) => (
            <Col key={breed._id} sm={12} md={6} lg={2}>
              <Card style={{ width: "10rem" }}>
                  <Card.Img
                    variant="top"
                    className="img-thumbnail img-fluid"
                    src={breed.image}
                    onClick={()=> { redirectToBreed(breed._id)}}
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
