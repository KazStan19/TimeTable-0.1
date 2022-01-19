import React from 'react'
import { Form, Button } from 'react-bootstrap'
export default function Register() {
    return (
        <Form className='mt-5'>
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
    )
}
