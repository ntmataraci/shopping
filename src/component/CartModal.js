import React,{ useContext, useEffect, useReducer, useState} from "react";
import ContextProvider from "../DataContext";
import CartCounter from "./CartCounter";
const CartModal = () => {
  const providedId = useContext(ContextProvider);


 const [mySum,setMySum]=useState(0)
 const [valHand,setValHand]=useState()
 const [isChanged,setIsChanged]=useState(0)
  const counterValHandler =(e)=>{
setValHand(e)
      }
 

  // useEffect(() => {
  //   console.log(providedId.cartArray)
  // }, [providedId.cartArray]);


  const totalSum= ()=> {
      let prices=0
      providedId.cartArray.map(item=>prices+=item.price*item.qty)
      console.log(prices)
   setMySum(Math.floor(prices*100)/100)
}
  
const refreshMe = () => {
setIsChanged(prev=>prev+Math.random())
}

useEffect(()=>{
    if(providedId.cartArray){
    totalSum()
    }
},[valHand,providedId.cartArray,isChanged])


const deleteId =(id)=> {
const findDeleteArr=providedId.cartArray.findIndex(item=>item.id==id)
providedId.cartArray.splice(findDeleteArr,1)
setIsChanged(prev=>prev+Math.random())
providedId.setIsChanged(prev=>prev+Math.random())
}



  return (
    <div
      style={{
        width: "calc(100vw - 2rem)",
        // height: "60vh",
        color: "black",
        position: "absolute",
        top: "30",
        left: "0",
        backgroundColor: "white",
        zIndex: "2",
        padding:"1rem"
      }}
    >
    <div style={{display:"flex",justifyContent:"space-between"}}>  <div style={{fontSize:"1.2rem",display:"flex",gap:"0.5rem"}}>Subtotal <div style={{display:"flex"}}><div style={{fontSize:"0.8rem"}}>$</div> <div style={{fontWeight:"bold"}}>{mySum}</div></div></div><div onClick={()=>providedId.setCartModal(false)}>Exit</div></div>
      <div style={{display:"flex",justifyContent:"center",margin:"1rem",width:"100%"}}>
        <button style={{backgroundColor:"#FFD814",color:"black",fontSize:"1.2rem",width:"80%",borderRadius:"0.5rem",border:"none",padding:"0.5rem"}}>Proceed To Checkout ({providedId.cartArray.length})</button>
      </div>
      {providedId.cartArray &&
        providedId.cartArray.map((item) => {
          return (
            <React.Fragment key={item.id}>
              <div 
                style={{ display: "flex", gap: "1rem", margin: "1rem" }}
              >
                <div>
                  <img
                    style={{ width: "60px", height: "60px" }}
                    src={item.image}
                  ></img>{" "}
                </div>{" "}
                <div>
                  <div>{item.title}</div>{" "}
                  <div style={{ fontSize: "0.8rem", display: "flex" }}>
                    ${" "}
                    <div style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                      {item.price}
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  marginBottom: "1.2rem",
                }}
              >
      <CartCounter counterVal={counterValHandler} sendId={()=>item.id} refreshMe={refreshMe}/>
                <div>
                  <button onClick={()=>deleteId(item.id)}>Delete</button>
                </div>
        
              </div>
            </React.Fragment>
          );
        })}
    </div>
  );
};

export default CartModal;
