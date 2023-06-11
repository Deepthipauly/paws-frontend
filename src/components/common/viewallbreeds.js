import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


function Viewallbreeds() {
  const params = useParams();
  console.log("params", params);

  const [allbreeds, setBreed] = useState([]);

  const fetchAllBreed = async (categoryId) => {
    const breeds = await axios.get(
      `http://localhost:4000/breed/view_all_breedby_category/${categoryId}`
    );
    console.log("ALLBREEDS", breeds.data.data);
    setBreed(breeds.data.data);
  };

  useEffect(() => {
    fetchAllBreed(params.id);
  }, []);

  return (
    <Container fluid>
      <Row>
        {/* <Col md={4}>
          <img
            className="img-fluid"
            src=allbreeds.categories.image
            alt="pets-coverImage"
          />
        </Col>
        <Col md={8}>
          <p>
           
          </p>
        </Col> */}
      </Row>

<Row>
{/* {categories.map((category) => (
       <Col key={category._id} sm={1} md={4} lg={8}>
          <Container className="d-flex justify-content-center">
            <Card style={{ width: '10rem' }}>
             <Link to={`view_all_breedby_category/${category._id}`}> 
             <Card.Img variant="top" className="img-thumbnail img-fluid" src={category.image} />
             </Link>
              <Card.Body>
                <Card.Title>{category.name}</Card.Title>
              </Card.Body>
            </Card>
          </Container>
          </Col>
      ))} */}
</Row>




    </Container>
  )
};
export default Viewallbreeds;
