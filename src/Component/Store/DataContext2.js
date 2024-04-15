import DataContext from '../Store/auth-context'
import { useState } from "react";
const DataContext2=(props)=>{


    const [name,setname]=useState('')
    const [des,setdes]=useState('')
    const [price,setprice]=useState('')
    const [arr,setarr]=useState([])
    const handlename =(value)=>{
        setname(value)

    }
    const handledes =(value)=>{
        setdes(value)

    }
    const handleprice =(value)=>{
        setprice(value)

    }
    const arefunc=(arr)=>{
        setarr(arr)

    }
    const AddItem =(value)=>{
        setarr([...arr,value])

    }
    const edititem = (value,add)=>{
        

    }
    const  DataContext2={
        NameFunc:handlename,
        desFunc:handledes,
        priceFunc:handleprice,
        Name:name,
        Des:des,
        Price:price,
        addItem:AddItem,
        Arr:arr,
        changeprice:arefunc


    }
    return(
        <DataContext.Provider value={DataContext2}>
            {props.children}

        </DataContext.Provider>
    )
}
export default DataContext2