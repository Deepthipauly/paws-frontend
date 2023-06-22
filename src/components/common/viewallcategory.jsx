import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { Link } from "react-router-dom";
import { Row,Col,Container } from "react-bootstrap";

import "./common.css";

// import { useSelector } from "react-redux";
// import {selectBreed} from '../../features/breed/breedSlice'

function Viewallcategory() {
  const [categories, setCategory] = useState([]);
  // const allbreedData= useSelector(selectBreed);
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
  // console.log("allbreedData in category",allbreedData);
  return (
   <Container style={{fontFamily:'Crimson Text'}} >
   <Row>
   
      {categories.map((category) => (
       <Col key={category._id} sm={12} md={6} lg={2}>
          <Container className="d-flex justify-content-center">
            <Card id="image-hover" style={{ width: '10rem' }} className="mt-3 shadow bg-white rounded">
             <Link to={`view_all_breedby_category/${category._id}`}> 
             <Card.Img  variant="top" className="img-thumbnail img-fluid" src={category.image} />
             </Link>
              <Card.Body>
                <Card.Title >{category.name}</Card.Title>
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
