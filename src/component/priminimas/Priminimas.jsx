import React from 'react'
import { Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import './Priminimas.css'
import Popup from './Popup'
import { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
function Priminimas() {

    const [buttonPopup, setButtonPopup] = useState(false)

    //database stuff---------------------------------------------

    const initialFormData = Object.freeze({
        email: ""
    });
    const [formData, updateFormData] = React.useState(initialFormData);
    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
    }
    const handlesubmit = (e) => {
        e.preventDefault()

        const auth = getAuth();
        sendPasswordResetEmail(auth, formData.email)
            .then(() => {
                console.log("Password reset email sent!")
                setButtonPopup(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    //------------------------------------------------------------
    return (
        <div className="plotis">
            <div className='forma'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <p>If you have forgotten your password, you can use this form to reset your password. You will receive an email with instructions.</p>
                        <Form.Label>Email address:</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                        <Form.Text className="text-muted">
                            The email address you are registered with is required to reset your password.
                        </Form.Text>
                    </Form.Group>
                </Form>
                <div>
                    <Button onClick={handlesubmit} variant="primary" type="submit">
                        Submit
                    </Button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h3>Password reset email send!</h3>
                        <p>Please check yout email for further instructions!</p>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default Priminimas
