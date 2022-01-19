
import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter ,Route, Routes } from "react-router-dom";
import CreateForm from "./component/CreateForm";
import ErrorPage from "./component/ErrorPage";
import LoginForm from "./component/LoginForm";
import Priminimas from "./component/priminimas/Priminimas";
import Register from "./component/Register";

export default function App() {
  return (

    <BrowserRouter>

    <Container>

    <Routes>

      <Route path='/' element={<LoginForm/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/login/forgot' element={<Priminimas/>}/>
      <Route path='/createform' element={<CreateForm/>}/>
      <Route path='*' element={<ErrorPage/>}/>

    </Routes>

    </Container>

    </BrowserRouter>
  )}
