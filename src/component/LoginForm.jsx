import React,{useState} from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CreateForm from "./CreateForm";
import Priminimas from './priminimas/Priminimas';
import Register from "./Register";


const LoginForm = () => {
  
  const [showLogin,setShowLogin] = useState(true)
  const [showCreateForm,setShowCreateForm] = useState(false)
  const [showForgotPassword,setShowForgotPassword] = useState(false)
  const [showRegister,setShowRegister] = useState(false)
    

  function loginHandler(e){

    e.preventDefault()
    setShowLogin(false)
    setShowCreateForm(true)

  }

  function rememberHandler(e){

    e.preventDefault()
    setShowLogin(false)
    setShowForgotPassword(true)

  }

  function registerHandler(e){

    e.preventDefault()
    setShowLogin(false)
    setShowRegister(true)

  }

  
  if(showLogin == true){return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form className="rounded p-4 p-sm-6" onSubmit={loginHandler}>
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
          <a href="#" onClick={rememberHandler}>Pamiršote slaptažodį</a>
        </p>
        <p>
          {/* TRŪKSTA REGISTRACIJOS NUORODOS "#" VIETOJE*/}
          Neturite paskyros? <a href="#" onClick={registerHandler} >Registruokitės</a>
        </p>
        <p>
          {/* TRŪKSTA SLAPTAŽODŽIO ATSTATYMO NUORODOS "#" VIETOJE*/}
          Nepavyksta prisijungti? <a href="#">Atstatykite savo slaptažodį</a>
        </p>
      </Form>
    </div>
  );}
  else if(showCreateForm){

    return(

      <CreateForm/>

    )

  }else if(showForgotPassword){

    return(

      <Priminimas/>

    )

  }else if(showRegister){

    return(

      <Register/>

    )

  }
};

export default LoginForm;
