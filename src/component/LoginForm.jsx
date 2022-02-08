import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { Alert } from "bootstrap";

const LoginForm = ({ setEmail, setPassword }) => {

  const goTo = useNavigate()
  //login api-------------------------------------
  const [login, setLogin] = useState(false)
  const [isValid, setIsValid] = useState(false);
  const authentication = getAuth();
  let navigate = useNavigate();
  //login check-----------------------------------
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("yes")
        const uid = user.uid;
        setLogin(true)
        navigate('/table')
      }
    });
  }, [])
  //---------------------------------------------------

  const initialFormData = Object.freeze({
    email: "",
    password: ""
  });
  const [formData, updateFormData] = React.useState(initialFormData);
  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // white space removal
      [e.target.name]: e.target.value.trim()
    });
  }
  const handlesubmit = (e) => {
    e.preventDefault()
    // console.log(formData.email, formData.password);
    // console.log(!sessionStorage.getItem('Auth Token'))
    setEmail(formData.email);
    setPassword(formData.password);


    signInWithEmailAndPassword(authentication, formData.email, formData.password)

      .then((response) => {
        navigate('/table')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        // console.log(response)
        // console.log(!sessionStorage.getItem('Auth Token'))
      })
      .catch((error) => {
        // console.log(error)
        if (error.code === 'auth/internal-error') console.log("server error");
        if (error.code === 'auth/invalid-email') console.log("wrong email");
        if (error.code === 'auth/wrong-password') console.log("wrong password");
      })
  }
  //google login--------------------------------------------------------------------
  const provider = new GoogleAuthProvider();
  const googlelogin = (e) => {
    e.preventDefault()
    // console.log("goggle login")
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        // console.log(result);
        navigate('/table')
        sessionStorage.setItem('Auth Token', result._tokenResponse.refreshToken)
        // console.log(result._tokenResponse.refreshToken)
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });

  }

  //loged in check----------------------------------------------


  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      {login ? <>
      </> : <><Form className="rounded p-4 p-sm-6">
        <h3>Prisijungti</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Control type="email" placeholder="El. pašto adresas" name="email" onChange={handleChange} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Control type="password" placeholder="Slaptažodis" name="password" onChange={handleChange} />
        </Form.Group>
        <button variant="primary" type="submit" onClick={handlesubmit} className="btn btn-primary">
          Prisijungti
        </button>
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
          Nepavyksta prisijungti? <button className="btn btn-success" onClick={googlelogin}>Prisijunkite Su Email</button>
        </p>
      </Form></>}
    </div>

  );

}

export default LoginForm
