import React from 'react'
import './Popup.css'
import {Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Popup(props) {

    const goBack = useNavigate()

    function closePopUpHandler(){
    
        props.setTrigger(false)
        goBack('/login')

    }

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <Button onClick={closePopUpHandler} variant="danger" className='close-btn'>close</Button>
            {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
