import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

function Addbreed() {
  const navigate = useNavigate();
  const userData = useSelector(selectUser);

  const formik = useFormik({
    initialValues: {
      breedname: "",
      breedDescription: "",
      categoryId: "",
      breedImageOne: "",
      breedImageTwo: "",
      breedImageThree: "",
      breedImageFour: "",
    },
    validationSchema: Yup.object({
      breedname: Yup.string().required("BreedName is Required"),
      breedDescription: Yup.string().required("BreedDescription is Required"),
      categoryId: Yup.string().required("CategoryId is Required"),
      breedImageOne: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter valid image url"),

      breedImageTwo: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter valid image url"),

      breedImageThree: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter valid image url"),

      breedImageFour: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter valid image url"),
    }),

    onSubmit: async (values) => {
      try {
        const breedResponse = await axios.post(
          "http://localhost:4000/admin/add_breed",
          {
            name: values.breedname,
            description: values.breedDescription,
            categoryId: values.categoryId,
            image: values.breedImageOne,
            breedImages: [
              values.breedImageTwo,
              values.breedImageThree,
              values.breedImageFour,
            ],
          },
          {
            headers: {
              access_token: userData.token,
            },
          }
        );

        if (breedResponse.status === 201) {
          alert(breedResponse.data?.message || "category added");
        }
        navigate(`/`);
      } catch (error) {
        alert(error.response.data.error || "something went wrong");
      }
    },
  });

  let template = (
    <div className="d-flex justify-content-center m-4">
      <h1 style={{ alignItems: "center", fontWeight: "bold" }}>
        {" "}
        You Are Not Authorised To This Page !!!!!!...
      </h1>
    </div>
  );
  if (userData.accountType === "ADMIN") {
    template = (
      <div style={{ fontFamily: "Crimson Text" }}>
        <h3 className="text-center mt-4">New Breed</h3>
        <Form
          onSubmit={formik.handleSubmit}
          className="container w-50 p-5 mb-5 text-center"
        >
          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="Breed Name"
              name="breedname"
              id="ename"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.breedname}
            />
          </InputGroup>

          <div style={{ color: "red" }}>
            {formik.touched.breedname && formik.errors.breedname ? (
              <div>{formik.errors.breedname}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="description"
              name="breedDescription"
              id="breedDescription"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.breedDescription}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.breedDescription &&
            formik.errors.breedDescription ? (
              <div>{formik.errors.breedDescription}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="categoryId"
              name="categoryId"
              id="breedcategoryId"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryId}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.categoryId && formik.errors.categoryId ? (
              <div>{formik.errors.categoryId}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="Breed Image"
              name="breedImageOne"
              id="breedimage"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.breedImageOne}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.breedImageOne && formik.errors.breedImageOne ? (
              <div>{formik.errors.breedImageOne}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="Breed Image"
              name="breedImageTwo"
              id="breedimages"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.breedImageTwo}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.breedImageTwo && formik.errors.breedImageTwo ? (
              <div>{formik.errors.breedImageTwo}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="Breed Image"
              name="breedImageThree"
              id="breedimages"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.breedImageThree}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.breedImageThree && formik.errors.breedImageThree ? (
              <div>{formik.errors.breedImageThree}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="Breed Image"
              name="breedImageFour"
              id="breedimages"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.breedImageFour}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.breedImageFour && formik.errors.breedImageFour ? (
              <div>{formik.errors.breedImageFour}</div>
            ) : (
              ""
            )}
          </div>

          <Button type="submit" className="btn btn-dark p-2 w-25 mt-4">
            Add Breed
          </Button>
        </Form>
      </div>
    );
  }

  return template;
}

export default Addbreed;
