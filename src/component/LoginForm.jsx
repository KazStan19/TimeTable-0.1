import React,{useState} from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



const LoginForm = () => {
  
  const goTo = useNavigate()

 return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-6" onSubmit={()=> goTo('/table')}>
        <h3>Prisijungti</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="El. pašto adresas" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Slaptažodis" />
        </Form.Group>
        <Button variant="primary" type="submit" >
          Prisijungti
        </Button>
        <p className="forgot-password mt-3">
          {/* TRŪKSTA NUORODOS "#" VIETOJE JEI PAMIRŠTAS SLAPTAŽODIS*/}
          <a href="/login/forgot">Pamiršote slaptažodį</a>
        </p>
        <p>
          {/* TRŪKSTA REGISTRACIJOS NUORODOS "#" VIETOJE*/}
          Neturite paskyros? <a href="/register"  >Registruokitės</a>
        </p>
        <p>
          {/* TRŪKSTA SLAPTAŽODŽIO ATSTATYMO NUORODOS "#" VIETOJE*/}
          Nepavyksta prisijungti? <a href="#">Atstatykite savo slaptažodį</a>
        </p>
      </Form>
    </div>

  );

}

export default LoginForm
