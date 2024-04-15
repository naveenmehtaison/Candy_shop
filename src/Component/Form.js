import { useContext,useState } from "react"
import DataContext from "./Store/auth-context"
import Modal from "./Modal.js/Modal"
import Modal2 from "./Modal.js/Modal2"
const Form=()=>{
    const [showmodal,setshowmodal]=useState(false)
    const Ctx= useContext(DataContext)
    const HandleFormSubmit=(event)=>{
        event.preventDefault()
        console.log(Ctx)
        console.log(event.target[0].value)
        Ctx.NameFunc(event.target[0].value)
        Ctx.desFunc(event.target[1].value)
        Ctx.priceFunc(event.target[2].value)
        const obj = {Name:Ctx.Name,Des:Ctx.Des,Price:Ctx.Price}
        Ctx.addItem(obj)
        console.log(Ctx.Arr)
        // console.log(Ctx.Name)


    }
    const hanldeCart=()=>{
        setshowmodal(true)

    }
    return(
        <>
        <h1 align='center' >Candy Shop</h1>

            <form onSubmit={HandleFormSubmit}>
                <label htmlFor="candyname">Candy Name</label>
                <input id = 'candyname' type="text"></input>
                <label htmlFor="des">Des</label>
                <input id='des' type="text"></input>
                <label htmlFor="Price">Price</label>
                <input id='price'></input>
                
                <button type="submit">Add</button>
            </form>
            <button  onClick={hanldeCart}>Cart</button>
            { showmodal && <Modal2/>}

        </>
        
    )

}
export default Form