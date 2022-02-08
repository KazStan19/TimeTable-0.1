import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForm from "./CreateForm";
import LoginForm from "./LoginForm";
import Priminimas from "./priminimas/Priminimas";
import Register from "./Register";
import ErrorPage from "./ErrorPage";
import Table from "./Table";
import React, { useEffect, useState } from "react";
import { app } from '../firebase-config';
export default function Screen() {

  
  //for testing----------------------------------------------
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  useEffect(() => {
    // console.log(email);
    // console.log(password);
    // console.log(username);
  }, [email],[password],[username]);
//-----------------------------------------------------------
 

  return(

    <BrowserRouter>

    <Container>

    <Routes>

      <Route path='/' element={<LoginForm setEmail={setEmail} setPassword={setPassword}/>}/>
      <Route path='/register' element={<Register setEmail={setEmail} setPassword={setPassword} setUsername={setUsername}/>}/>
      <Route path='/login' element={<LoginForm setEmail={setEmail} setPassword={setPassword}/>}/>
      <Route path='/login/forgot' element={<Priminimas/>}/>
      <Route path='/table/add' element={<CreateForm/>}/>
      <Route path='/table' element={<Table/>}/>
      <Route path='*' element={<ErrorPage/>}/>

    </Routes>

    </Container>

    </BrowserRouter>

  );
}
