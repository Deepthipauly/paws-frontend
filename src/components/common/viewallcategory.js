import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row,Col,Container } from "react-bootstrap";

function Viewallcategory() {
  const [categories, setCategory] = useState([]);
  const fetchAllCategory = async () => {
    const category = await axios.get(
      "http://localhost:4000/category/view_all_category"
    );
    // console.log("categories", category.data.data);
    setCategory(category.data.data);
  };

  useEffect(() => {
    fetchAllCategory();
  }, []);

  return (
   <Container fluid>
   <Row>
      {categories.map((category) => (
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
      ))}
    </Row>
    </Container>
  );
}

export default Viewallcategory;
