import React from 'react'
import './Popup.css'
import {Button} from 'react-bootstrap'

function Popup(props) {
    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
            <Button onClick={()=>props.setTrigger(false)} variant="danger" className='close-btn'>close</Button>
            {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup
