import { createContext } from "react"
import React, { useContext } from "react"
const DataContext= React.createContext({
    Name:'',
    Price:'',
    des:''

})
export default DataContext