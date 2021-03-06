import React, { useEffect, useState} from "react";
import CreateForm from "./CreateForm";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
const Table = () => {

  const goTo = useNavigate()
  //-------------------------------------------------------------------
  const [login, setLogin] = useState(false)
  let navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut()
    sessionStorage.removeItem('Auth Token');
    navigate('/login')
    console.log("logged out");
  }
  const auth = getAuth();
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("yes")
        const uid = user.uid;
        setLogin(true) //<<< memory leaker
      } else {
        navigate('/login')
        // console.log("no")
        //setLogin(false)<<< memory leaker
      }
    });
  }, [])
  //-------------------------------------------------------------------
  return (
  
    <div className="mt-3 mb-3">
      {login ? <><Row className="border gx-0 bg-light">
        <Col className="mx-3 my-2">
          <button type="button" className="btn btn-primary" onClick={() => { goTo('/table/add') }}>
            Pridėti
          </button>
        </Col>
        <Col className="mx-3 my-2">
          <button type="button" className="btn btn-danger" onClick={handleLogout}>
            Log Out
          </button>
        </Col>
      </Row>
      <Row className="border gx-0 bg-light">
        <Col className="m-3 bg-light">Duomenų filtravimas: </Col>
        <Col className="m-3">
          <select className="form-select-sm" aria-label="Default select example">
            <option defaultValue>--Pasirinkitę įmonę--</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </Col>
        <Col className="m-3">
          <select className="form-select-sm" aria-label="Default select example">
            <option defaultValue>--Pasirinkite paslaugą--</option>
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
      </Row></> : <></>}
      
      
    </div>

    
  );
};

export default Table;
