import React from "react";
import Viewallcategory from "./viewallcategory";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { selectUser } from "../../features/auth/authSlice";
import { useSelector } from "react-redux";




function Homepage() {
  const userData = useSelector(selectUser);
  return (
    <Container fluid style={{fontFamily:'Crimson Text'}} >
      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            <img
              className="img-fluid"
              src="https://i.postimg.cc/bN3ZgzFp/home-Page-img1.jpg"
              alt="pets-coverImage"
            />
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="d-flex justify-content-center">
            {" "}
            <h1 className="mt-5">Pets Galore</h1>
          </div>
          <p>
            A pet, or companion animal, is an animal kept primarily for a
            person's company or entertainment rather than as a working animal,
            livestock, or a laboratory animal. Popular pets are often considered
            to have attractive/cute appearances, intelligence, and relatable
            personalities, but some pets may be taken in on an altruistic basis
            (such as a stray animal) and accepted by the owner regardless of
            these characteristics.
          </p>
        </Col>

        <Row>
          <Col>
            <p>
              Pets provide their owners, or guardians, both physical and
              emotional benefits. Walking a dog can provide both the human and
              the dog with exercise, fresh air, and social interaction. Pets can
              give companionship to people who are living alone or elderly
              adults who do not have adequate social interaction with other
              people. There is a medically approved class of therapy animals
              that are brought to visit confined humans, such as children in
              hospitals or elders in nursing homes. Pet therapy utilizes trained
              animals and handlers to achieve specific physical, social,
              cognitive, or emotional goals with patients.
            </p>
            {userData.accountType === "ADMIN" ? (
               <Link to={'/admin/add_category'} style={{textDecoration: "none"}}>
                 <div className="d-flex justify-content-center" style={{textDecoration: "none"}} >
                 <Button variant="outline-danger" style={{textDecoration: "none"}}>
                  Add New Category
                </Button>
                 </div>
               </Link>
              ) : null}
          </Col>
        </Row>
      </Row>
      <Row>
        <Col>
        <div className="d-flex justify-content-center">
            <h1 className="mt-5 mb-3">Explore More.......</h1>
          </div>
           </Col>
      </Row>
      <Viewallcategory />
    </Container>
  );
}

export default Homepage;
