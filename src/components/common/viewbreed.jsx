import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import Addreviews from "../user/addreviews";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { selectUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Viewbreed() {
  const [showAddReview, setshowAddReview] = useState(false);
  const [breed, setBreed] = useState([]);
  const [reviews, setReviews] = useState([]);
  const params = useParams();
  const userData = useSelector(selectUser);
  const fetchAllBreed = async (breedId) => {
    const breedResponse = await axios.get(
      `http://localhost:4000/breed/view_breed/${breedId}`
    );
    console.log("breed", breedResponse);
    if (breedResponse?.data) {
      setBreed(breedResponse.data.data);
    }
  };

  const fetchAllReviews = async (breedId) => {
    const reviewsResponse = await axios.get(
      `http://localhost:4000/review/view_all_reviews/${breedId}`
    );
    console.log("reviewesponse", reviewsResponse);
    if (reviewsResponse?.data) {
      setReviews(reviewsResponse.data.data);
    }
  };

  const updateShowReview = () => {
    if (!userData.token) {
      alert("Please Login to Add Reviews");
      setshowAddReview(false);
      return;
    }

    setshowAddReview((prev) => !prev);
  };

  useEffect(() => {
    const fetchAllData = async () => {
      await fetchAllBreed(params.breedId);
      await fetchAllReviews(params.breedId);
    };
    fetchAllData();
  }, []);

  const callBacktochild = (error = undefined) => {
    if (error) alert(error);
    setshowAddReview(false);
    const fetchAllData = async () => {
      await fetchAllReviews(params.breedId);
    };
    fetchAllData();
  };

  return (
    <div className="mt-5">
      <Container fluid style={{ fontFamily: "Crimson Text" }}>
        <Row>
          <Col>
            <h2 className="d-flex justify-content-center">{breed.name}</h2>
          </Col>
        </Row>
        <Row>
          <Col lg={2} md={4} sm={12}>
            <div className="d-flex justify-content-center">
              <img
                className="img-fluid shadow bg-white rounded"
                src={breed.image}
                alt="pets-coverImage"
              />
            </div>
          </Col>
          <Col>
            <p>{breed.description}</p>
            {!showAddReview ? (
              <Button
                variant="outline-dark"
                size="md"
                onClick={updateShowReview}
              >
                Add Reviews
              </Button>
            ) : null}
            {showAddReview ? (
              <Addreviews
                breeduniqueId={params.breedId} // parent to child
                handleCallBack={callBacktochild} // child to parent
              />
            ) : null}

            {userData.accountType === "ADMIN" ? (
              <Link to={`/admin/edit_breed/${params.breedId}`}>
                <Button variant="outline-dark" className="m-3 ">
                  Edit Breed
                </Button>
                <Button variant="outline-dark" className="m-1">
                  Delete Breed
                </Button>
              </Link>
            ) : null}
          </Col>
        </Row>

        <Row>
          <Col>
            {reviews.length != 0 ? (
              <h3 className="d-flex justify-content-center m-4">Reviews</h3>
            ) : null}
            {reviews.map((viewReview) => (
              <div key={viewReview._id} className="mt-2">
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    {viewReview.user.username}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder={viewReview.reviews}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Viewbreed;
