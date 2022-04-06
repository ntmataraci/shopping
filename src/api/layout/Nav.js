import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import {MdPersonOutline} from "react-icons/md"
import {AiOutlineShoppingCart,AiOutlineHome} from "react-icons/ai"
import ContextProvider from "../../DataContext";
import Search from "../../component/Search";

import { useState,useContext, useEffect,useRef } from "react";
const Nav = () => {
const [openMenu,setOpenMenu]=useState(false)
const [arrQty,setArrQty]=useState()
const [searchBackground,setSearchBackground]=useState(false)
const [removeBar,setRemoveBar]=useState(false)
const openMenuHandler=()=>setOpenMenu(true)
const closeMenuHandler=()=>{
  setOpenMenu(false)
}
const searchBar=useRef()
const searchNav =(x)=>{
providedId.setSearchedText(x.target.value)
}
const providedId=useContext(ContextProvider)
const diffArray= ()=> {
  const lengthArr=new Set(providedId.cartArray)
  setArrQty(lengthArr.size)
}

useEffect(()=>{
diffArray()
},[providedId.cartArray,providedId.isChanged])

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#232f3e",
          color: "white",
          flexWrap: "wrap",
        }}
      >
          <div style={{margin:"0 1rem",display:"flex",justifyContent:"space-between",width:"100%"}}>
            <div style={{display:"flex",flexWrap:"wrap"}}>
        <div onClick={openMenuHandler} style={{ fontSize:"1.5rem",cursor:"pointer"}}>
          <GiHamburgerMenu />
        </div>
        <div onClick={()=>providedId.setModal(false)}>Logo</div>  
        </div>
     
          <div style={{display:"flex",flexWrap:"wrap",position:"fixed",top:"0",left:"0",height:"100vh",width:openMenu?(providedId.screenWidth<750?"100vw":"400px"):"0vw",transition:"all 0.2s linear",zIndex:"5"}}>
          <div style={{width:"80vw",backgroundColor:"#232f3e",zIndex:"99"}}>            
{openMenu&&
<div >
  <div style={{textAlign:"right",display:"flex",justifyContent:"flex-end",margin:"0.5rem 1rem",alignItems:"center"}}><div style={{fontSiz:"1.5rem"}}>Sign In</div> <div style={{fontSize:"2rem"}}><MdPersonOutline/></div></div>
   <div style={{fontSize:"1.5rem",marginLeft:"2rem"}}>Browse</div>
   <div style={{fontSize:"2rem",marginLeft:"2rem",paddingBottom:"2rem"}}>My Shopping</div>
   <div style={{backgroundColor:"white",height:"100vh",color:"#111111",paddingLeft:"1rem",fontWeight:"bold",display:"flex",flexDirection:"column",gap:"2rem"}}>
<div style={{display:"flex",justifyContent:"space-between",width:"100%",alignItems:"center",paddingTop:"1rem"}}><div style={{fontSize:"1.3rem"}}>Shopping Home</div><div style={{marginRight:"1rem",fontSize:"1.5rem"}}><AiOutlineHome/></div></div>
<div style={{fontWeight:"bold",fontSize:"1.3rem"}}>Trending</div>
<div style={{fontWeight:"lighter"}}>Movers {"&"} Shakers</div>
<div style={{fontWeight:"bold",fontSize:"1.3rem"}}>Top Departments</div>
<div style={{fontWeight:"lighter"}}>Home</div>
<div style={{fontWeight:"lighter"}}>Health {"&"} HouseHold</div>
<div style={{fontWeight:"lighter"}}>Books</div>
<div style={{fontWeight:"lighter"}}>See All </div>
   </div>
   </div>
}
          </div>
          <div onClick={closeMenuHandler} style={{width:"100vw",height:"100vh",zIndex:"98",backgroundColor:"rgba(0, 0, 0, 0.8)",color:"white",fontSize:"2rem",display:openMenu?"block":"none",transition:"all 0.2s linear",position:"absolute",top:"0",left:"0",fontWeight:"bold",textAlign:"right",paddingRight:"2rem"}}><div style={{marginRight:"2rem"}}>X</div></div>
          </div>
   

        <div style={{display:"flex",flexWrap:"wrap"}}><div>Sign In {">"} </div>
        <div style={{fontSize:"1.5rem"}}><MdPersonOutline/></div>
        <div style={{fontSize:"1.5rem",cursor:"pointer"}} onClick={()=>providedId.setCartModal(true)}><AiOutlineShoppingCart/></div>
        <div style={{color:"orange"}}>{arrQty}</div>
        </div>
        </div>
        <div
          style={{
            width: "100%",
            padding: "0.1rem 0.5rem",
            display: "flex",
            flexWrap: "wrap",
            textAlign:"center",
            alignItems:"center"
          }}
        >
          <input
onFocus={()=>{setSearchBackground(true)
  setRemoveBar(false)
}}
onBlur={()=>{
  setSearchBackground(false)
  setRemoveBar(true)
}
}

          onChange={searchNav}
          ref={searchBar}
            style={{
              height: "3rem",
              width: "100%",
              borderRadius: "1rem",
              padding: "0.5rem",
            }}
            type="search"
            placeholder="Search Me"
          />
       
          <div
            style={{
              height: "2.6rem",
              backgroundColor: "orange",
              fontSize: "1.5rem",
              color: "#232f3e",
              borderRadius: "0.5rem",
              display: "flex",
              alignItems: "center",
              marginLeft: "-2.5rem",
              padding:"0.125rem 0.5rem",
          
            }}
          >
            <BiSearchAlt2 />
          </div>
     
        </div>
      </div>
     
<div style={{minWidth:"300px",position:"absolute",left:"10px",backgroundColor:"white",zIndex:"2",opacity:!removeBar?"1":"0"}}><Search/></div>

{searchBackground&&
<div style={{width:"100vw",height:"100vh",opacity:"0.6",backgroundColor:"black",position:"absolute",top:"80px"}}></div>
}
    </>
  );
};

export default Nav;
