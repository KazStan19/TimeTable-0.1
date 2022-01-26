import React from "react";
import CreateForm from "./CreateForm";
import { Row, Col } from "react-bootstrap";

const Table = () => {
  return (
    <div className="mt-3 mb-3">
      <Row className="border gx-0 bg-light">
        <Col className="mx-3 my-2">
          <button type="button" class="btn btn-primary">
            Pridėti
          </button>
        </Col>
      </Row>
      <Row className="border gx-0 bg-light">
        <Col className="m-3 bg-light">Duomenų filtravimas: </Col>
        <Col className="m-3">
          <select class="form-select-sm" aria-label="Default select example">
            <option selected>--Pasirinkitę įmonę--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Col>
        <Col className="m-3">
          <select class="form-select-sm" aria-label="Default select example">
            <option selected>--Pasirinkite paslaugą--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Col>
        <Col className="m-3"></Col>
        <Col className="m-3"></Col>
        <Col className="m-3"></Col>
      </Row>
      <Row className="border gx-0 bg-light">
        <Col className="m-2"></Col>
      </Row>
      <Row className="border gx-0 bg-light">
        <Col className="m-2">
          <h2>Darbų sąrašas:</h2>
        </Col>
      </Row>
      <Row className="border gx-0 bg-light">
        <table className="table mt-3 table-bordered bg-white">
          <thead>
            <tr>
              <th scope="col">Data</th>
              <th scope="col">Klientas</th>
              <th scope="col">Suteikta paslauga</th>
              <th scope="col">Trukmė</th>
              <th scope="col">Keisti</th>
              <th scope="col">Šalinti</th>
              <th scope="col">Plačiau</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </Row>

      <Row className="border gx-0 bg-light">
        <Col className="mx-3 my-2">Pridėkitę atliktą darbą</Col>
      </Row>
      <CreateForm />
    </div>
  );
};

export default Table;
