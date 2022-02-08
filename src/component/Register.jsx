import React,{useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import Popup from './priminimas/Popup'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
export default function Register({ setEmail, setPassword, setUsername }) {

    const [buttonPopup, setButtonPopup] = useState(false)
    //Database stuff-------------------------------------------------------
    const initialFormData = Object.freeze({
        email: "",
        username: "",
        password: "",
        passwordconfirm: ""
        
      });
      const [formData, updateFormData] = React.useState(initialFormData);
      const handleChange = (e) => {
        updateFormData({
          ...formData,
    
          // white space removal
          [e.target.name]: e.target.value.trim()
        });
      }
      const handlesubmit = (e) => {
        // e.preventDefault()
        // console.log(formData, formData.email, formData.username, formData.password, formData.passwordconfirm);
        if(formData.password !== formData.passwordconfirm){
            console.log("Passwords doesnt match");
            window.prompt("Passwords doesnt match");
        }else{
        console.log("registered succsesfuly!");
        setEmail(formData.email);
        setUsername(formData.username);
        setPassword(formData.password);

        


        const authentication = getAuth();
        createUserWithEmailAndPassword(authentication, formData.email, formData.password)
        .then((response) => {
            // console.log(response)
            sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
        })
        }
      }
//---------------------------------------------------------------------------------------------------------

    return (

        <>

        <Form className='mt-5' onSubmit={(e) => {setButtonPopup(true); e.preventDefault()}}>
            <Form.Group className="mb-3 col-md-5 mx-auto" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3 col-md-5 mx-auto" controlId="formBasicname">
                <Form.Label>User Name</Form.Label>
                <Form.Control type="name" placeholder="Enter User Name" name="username" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3 col-md-5 mx-auto" controlId="Password1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className="mb-3 col-md-5 mx-auto" controlId="Password2">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Repeat Password" name="passwordconfirm" onChange={handleChange}/>
            </Form.Group>
            <Form.Group className='col-md-5 mx-auto'>

            <Button variant="primary" type="submit" className='col-md-12' onClick={() => handlesubmit()}>
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
