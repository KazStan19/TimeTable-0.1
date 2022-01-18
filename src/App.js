
import React from "react";
import LoginForm from "./component/LoginForm";
import Priminimas from './priminimas/Priminimas';
import { Container } from "react-bootstrap";

export default function App() {
  return (
    <Container>
      <LoginForm />
      <Priminimas />
    </Container>
  );
