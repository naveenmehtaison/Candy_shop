import React from "react"
import ReactDOM from "react-dom"
import Modal from "./Modal"
import classes from './Modal.module.css'
const Modal2=()=>{
    const j = document.getElementById('root2')
    return(
        <>
        {ReactDOM.createPortal(<Modal className={classes.Modal}/>,j)}
        </>
    )
}
export default Modal2