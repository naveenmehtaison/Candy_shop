import React, { useContext ,useEffect,useState} from "react";
import DataContext from "../Store/auth-context";
import classes from './Modal.module.css'
import ReactDom from 'react-dom'
const Modal=()=>{
    const Ctx= useContext(DataContext)
    // console.log(Ctx.Name)

        

        const handleone=(ele,item)=>{
            console.log('buyone',ele,item)

            const newArr = [...Ctx.Arr];
            newArr[item].Price = parseInt(Ctx.Arr[item].Price)+1
            Ctx.changeprice(newArr)
        }
        // handleone(ele,item)



        const handletwo=(ele,item)=>{
            const newArr = [...Ctx.Arr];
            newArr[item].Price = parseInt(Ctx.Arr[item].Price)+2
            Ctx.changeprice(newArr)

            
        }
        const handlethree=(ele,item)=>{
            const newArr = [...Ctx.Arr];
            newArr[item].Price = parseInt(Ctx.Arr[item].Price)+3
            Ctx.changeprice(newArr)
        }
    
    return(
        <div className={classes.modal}>
            {Ctx.Arr.map((ele,item)=>(
                <div>
                    <p>{ele.Name}</p>
                    <p>{ele.Des}</p>
                    <p>{ele.Price}</p>
                    <button onClick={()=>handleone(ele,item)}>Buy one</button>
                    <button onClick={()=>handletwo(ele,item)}>Buy two</button>
                    <button onClick={()=>handlethree(ele,item)}>Buy three</button>
                </div>


            ))}


        </div>
    )
}
export default Modal