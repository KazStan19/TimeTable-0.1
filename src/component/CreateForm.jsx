import React, { useState, useEffect } from "react";
import { Form, FormControl, FloatingLabel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const CreateForm = () => {
  //api stuff---------------------------------
  let navigate = useNavigate();
  const [login, setLogin] = useState(false)
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("yes")
        const uid = user.uid;
        setLogin(true)
        // navigate('/table')
      }else{
        navigate('/login')
      }
    });
  }, [])
  //---------------------------------------------------
  return (
    <>
      {login ? <><Form className="createForm border">

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
        <button onClick={() => { navigate('/table') }} type="button" className="btn btn-primary mx-3 mb-3">
          Saugoti
        </button>
      </Form></> : <></>}

    </>
  );
};

export default CreateForm;
