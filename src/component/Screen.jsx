import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateForm from "./CreateForm";
import LoginForm from "./LoginForm";
import Priminimas from "./priminimas/Priminimas";
import Register from "./Register";
import ErrorPage from "./ErrorPage";
import Table from "./Table";

export default function Screen() {
  return(

    <BrowserRouter>

    <Container>

    <Routes>

      <Route path='/' element={<LoginForm/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<LoginForm/>}/>
      <Route path='/login/forgot' element={<Priminimas/>}/>
      <Route path='/table/add' element={<CreateForm/>}/>
      <Route path='/table' element={<Table/>}/>
      <Route path='*' element={<ErrorPage/>}/>

    </Routes>

    </Container>

    </BrowserRouter>

  );
}
