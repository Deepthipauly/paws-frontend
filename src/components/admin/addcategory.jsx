import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/auth/authSlice";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Button, InputGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router";

function Addcategory() {
  const userData = useSelector(selectUser);
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      categoryType: "",
      image: "",
      categoryImageOne: "",
      categoryImageTwo: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Category Name is Required"),
      description: Yup.string().required("Category Description is Required"),
      categoryType: Yup.string().required("Category Type is Required"),
      image: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter valid image url"),

      categoryImageOne: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter valid image url"),

      categoryImageTwo: Yup.string()
        .matches(
          /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
          "Enter correct url!"
        )
        .required("Please enter valid image url"),
    }),

    onSubmit: async (values) => {
      try {
        const respose = await axios.post(
          "http://localhost:4000/admin/add_category",
          {
            name: values.name,
            description: values.description,
            categoryType: values.categoryType,
            image: values.image,
            categoryImages: [values.categoryImageOne, values.categoryImageTwo],
          },

          {
            headers: {
              access_token: userData.token,
            },
          }
        );
        if (respose.status === 201) {
          alert(respose.data?.message || "category added");
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
        <h3 className="text-center mt-4">New Category</h3>

        <Form
          onSubmit={formik.handleSubmit}
          className="container w-50 p-5 mb-5 text-center"
        >
          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="Category Name"
              name="name"
              id="ename"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
          </InputGroup>

          <div style={{ color: "red" }}>
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="description"
              name="description"
              id="Description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.description && formik.errors.description ? (
              <div>{formik.errors.description}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="categoryType"
              name="categoryType"
              id="categoryType"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryType}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.categoryType && formik.errors.categoryType ? (
              <div>{formik.errors.categoryType}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="image"
              name="image"
              id="image"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.image}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.image && formik.errors.image ? (
              <div>{formik.errors.image}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="categoryImageOne"
              name="categoryImageOne"
              id="categoryImageOne"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryImageOne}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.categoryImageOne &&
            formik.errors.categoryImageOne ? (
              <div>{formik.errors.categoryImageOne}</div>
            ) : (
              ""
            )}
          </div>

          <InputGroup>
            <Form.Control
              type="text"
              className="form-control mt-3"
              placeholder="categoryImageTwo"
              name="categoryImageTwo"
              id="categoryImageTwo"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.categoryImageTwo}
            />
          </InputGroup>
          <div style={{ color: "red" }}>
            {formik.touched.categoryImageTwo &&
            formik.errors.categoryImageTwo ? (
              <div>{formik.errors.categoryImageTwo}</div>
            ) : (
              ""
            )}
          </div>

          <Button type="submit" className="btn btn-dark p-2 w-25 mt-4">
            Add Category
          </Button>
        </Form>
      </div>
    );
  }

  return template;
}

export default Addcategory;
