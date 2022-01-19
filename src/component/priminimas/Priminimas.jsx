import React from 'react'
import {Form} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import './Priminimas.css'
import Popup from './Popup'
import { useState } from 'react'

function Priminimas() {

    const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <div className="plotis">
        <div className='forma'>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <p>If you have forgotten your password, you can use this form to reset your password. You will receive an email with instructions.</p>
                <Form.Label>Email address:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                The email address you are registered with is required to reset your password.
                </Form.Text>
            </Form.Group>
        </Form>
        <div>
        <Button onClick={()=>setButtonPopup(true)} variant="primary" type="submit">
            Submit
        </Button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}> 
            <h3>Password reset succsessful</h3>
            <p>Please check yout email to reset your password</p>
        </Popup>
        </div>
        </div>
        </div>
    )
}

export default Priminimas
