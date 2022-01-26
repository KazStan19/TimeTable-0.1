import React from "react";
import { Form, FormControl, FloatingLabel } from "react-bootstrap";


const CreateForm = () => {
  return (
     
    <Form className="createForm border">
     
      <label className="mx-3 mt-3" htmlFor="">
        Pasirinkte datą:
      </label>
      <FormControl className="m-3 w-75" type="date" />
      <FloatingLabel className="mb-3 mx-3" label="Pasirinkite įmone">
        <Form.Select aria-label="Floating label select example">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel className="mb-3 mx-3" label="Pasirinkite suteiktą paslaugą">
        <Form.Select aria-label="Floating label select example">
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
        </Form.Select>
      </FloatingLabel>

      <FloatingLabel
        className="mb-3 mx-3"
        controlId="floatingTextarea2"
        label="Comments"
      >
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <label className="mx-3" htmlFor="">
        Nuo:
      </label>
      <FormControl className="m-3 w-75" type="time" />
      <label className="mx-3" htmlFor="">
        Iki:
      </label>
      <FormControl className="m-3 w-75" type="time" />
      <button type="button" className="btn btn-primary mx-3 mb-3">
        Saugoti
      </button>
    </Form>
  );
};

export default CreateForm;
