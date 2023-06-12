import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useParams } from "react-router";

function Viewbreed() {
  const [ breed, setBreed ] = useState([]);
  const [ reviews, setReviews ] = useState([]);
  const params = useParams();
  const fetchAllBreed = async (breedId) => {
    const breedResponse = await axios.get(
      `http://localhost:4000/breed/view_breed/${breedId}`
    );
    console.log("breed",breedResponse)
    if (breedResponse?.data) {
      setBreed(breedResponse.data.data);
    }
  };

  const fetchAllReviews = async (breedId) => {
    const reviewsResponse = await axios.get(
      `http://localhost:4000/review/view_all_reviews/${breedId}`
    );
    if (reviewsResponse?.data) {
      setReviews(reviewsResponse.data.data);
    }
  };

  useEffect(() => {
      const fetchAllData = async()=>{
        await fetchAllBreed(params.breedId);
        await fetchAllReviews(params.breedId);
      }
      fetchAllData();
  }, []);

  return (
    <Container>
      <Row>
        <Col lg={2} md={4} sm={12}>
          <div className="d-flex justify-content-center">
            <img className="img-fluid" src={breed.image} alt="pets-coverImage" />
          </div>
        </Col>
        <Col>
          <p>{breed.description}</p>
          <Button variant="primary">Add Reviews</Button>

        </Col>
      </Row>

      <Row>
        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          <Modal.Dialog>
            <Modal.Body>
              <h4>Name:</h4>
              <p>Review: </p>
            </Modal.Body>
            {/* <Modal.Footer>
              <Button variant="primary">Add Reviews</Button>
            </Modal.Footer> */}
          </Modal.Dialog>
        </div>
      </Row>
    </Container>
  );
}

export default Viewbreed;
