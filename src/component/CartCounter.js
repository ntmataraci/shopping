import { useReducer,useContext, useState, useEffect } from "react"
import ContextProvider from "../DataContext"

const CartCounter = (props) => {
    const providedId=useContext(ContextProvider)
const [valueHandler,setValueHandler]=useState(1)

useEffect(()=>{
  if(providedId.cartArray.findIndex(item=>item.id==props.sendId())>-1){
  const getIdIndex=providedId.cartArray.findIndex(item=>item.id==props.sendId())
setValueHandler(()=> providedId.cartArray[getIdIndex].qty)
}
},[providedId.cartArray])


  const increasing = () => {
    const getIdIndex=providedId.cartArray.findIndex(item=>item.id==props.sendId())
    providedId.cartArray[getIdIndex].qty+=1
    setValueHandler( providedId.cartArray[getIdIndex].qty)
    console.log(providedId.cartArray)
    props.refreshMe()
  }

const decrasing = () => {
  const getIdIndex=providedId.cartArray.findIndex(item=>item.id==props.sendId())
  if(providedId.cartArray[getIdIndex].qty!=0){
  providedId.cartArray[getIdIndex].qty-=1
  setValueHandler( providedId.cartArray[getIdIndex].qty)
  console.log(providedId.cartArray)
  props.refreshMe()
  }
}

const changeHandler = (e) =>{ 
const getIdIndex=providedId.cartArray.findIndex(item=>item.id==props.sendId())
providedId.cartArray[getIdIndex].qty=+e.target.value
setValueHandler(+e.target.value)
props.refreshMe()
}

props.counterVal(valueHandler)



    return(
        <div style={{display:"flex",alignItems:"center"}}>
        <button style={{height:"2rem",width:"2rem",fontSize:"1.5rem"}} onClick={decrasing}>-</button>
        <input
          style={{ height:"1.6rem",width:"2rem",fontSize:"1.5rem", textAlign: "center" }}
          type="number"
          value={valueHandler}
          onClick={()=>setValueHandler("")}
          onChange={changeHandler}
        ></input>
        <button style={{height:"2rem",width:"2rem",fontSize:"1.5rem"}} onClick={increasing}>+</button>
      </div>
    )
}

export default CartCounter