import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { selectUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";


// props -> {
//   handleCallBack: handleCallBack,
//   breeduniqueId: breeduniqueId
// }
const Addreviews = ({handleCallBack,breeduniqueId}) => {
  const userData = useSelector(selectUser);
  const [postContent, setPostContent] = useState("");


  const addInputReview = async () => {
  
    try{
      if(userData.token){
        const reviews = await axios.post(
          "http://localhost:4000/review/add_new_reviews",
          { breedId: breeduniqueId, reviews: postContent },
          {
            headers: {
              access_token: userData.token,
            },
          }
        );
        handleCallBack();
      }
      
  }catch(error){
    handleCallBack(error.response?.data?.error || "something went wrong");
    }
    
  };

  return (
    <Container className="mt-3" style={{fontFamily:'Crimson Text'}} >
      <Row>
        <Col>
          <FloatingLabel controlId="floatingTextarea2" label="Review:">
            <Form.Control
              as="textarea"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <Button
            className="mt-3"
            variant="outline-danger"
            size="sm"
            onClick={addInputReview}
          >
            Post
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Addreviews;
