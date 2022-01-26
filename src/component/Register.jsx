import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import Popup from './priminimas/Popup'
export default function Register() {

    const [buttonPopup, setButtonPopup] = useState(false)

    return (

        <>

        <Form className='mt-5' onSubmit={(e) => {setButtonPopup(true); e.preventDefault()}}>
            <Form.Group className="mb-3 col-md-5 mx-auto" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3 col-md-5 mx-auto" controlId="Password1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3 col-md-5 mx-auto" controlId="Password2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Repeat Password" />
            </Form.Group>
            <Form.Group className='col-md-5 mx-auto'>

            <Button variant="primary" type="submit" className='col-md-12'>
                Submit
            </Button>
            </Form.Group>
            
        </Form>
        
        {

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
            <h3>You successfully registreted</h3>
            <p>You can now login into you account</p>
            </Popup>

        }

        </>

    )
}
