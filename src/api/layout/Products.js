import { useContext,useState,useEffect } from "react";
import ContextProvider from "../../DataContext";
import {IoIosStarHalf,IoIosStar,IoIosStarOutline} from "react-icons/io"

const Products = () => {
    const getAllproducts=useContext(ContextProvider)

    const openModal= (x)=>{
        getAllproducts.setLoad(false)
       getAllproducts.setterId(x)
       getAllproducts.setModal(true)
            window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }

    
const starize = (x)=>{
    const qtyStar=Math.floor(x)
    const halfStar=(x-qtyStar)>0.5?1:0
    const blankStar=5-qtyStar-halfStar
    const fullArr=Array(qtyStar).fill(<IoIosStar/>)
    const halfArr=Array(halfStar).fill(<IoIosStarHalf/>)
    const blankArr=Array(blankStar).fill(<IoIosStarOutline/>)
    const finishedArr=fullArr.concat(halfArr,blankArr)
    return(
finishedArr.map((item,idx)=><div key={idx}>{item}</div>)
     )
}

const addCart = (id)=>{
getAllproducts.setCart(id)
getAllproducts.setModal(false)
getAllproducts.setCartModal(false)
}

    return(
        <>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",margin:"auto 5rem"}}>
        {
        getAllproducts.allProducts&&getAllproducts.allProducts.slice(0,getAllproducts.screenWidth>=750?20:4).map((item,idx)=>
        <div key={idx} style={{width:"180px",height:"200px",border:"1px solid transparent",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <img onClick={()=>openModal(item.id)} style={{width:"120px",height:"120px"}} src={item.image}></img>
            <div>${item.price}</div>
            <div style={{display:"flex",flexWrap:"wrap"}}>{starize(item.rating.rate)}</div>
            <div><button onClick={()=>addCart(item.id)}>Add To Cart</button></div>
        
        </div>
        )}
        </div>
        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
            <h2>Best Sellers</h2>
         
         {getAllproducts.screenWidth<750&&
            getAllproducts.allProducts&&getAllproducts.allProducts.slice(5,15).map((item,idx)=>
               <div key={idx} style={{display:"flex",flexWrap:"wrap",marginTop:"0.5rem",width:"100%"}}>
            <div ><img onClick={()=>openModal(item.id)} style={{width:"60px",heigh:"60px",margin:"0.2rem 1rem"}} src={item.image}></img></div>
            <div style={{display:"flex",flexDirection:"column"}}>
            <div>{item.title.length>30?item.title.slice(0,30)+"...":item.title}</div>
            <div style={{display:"flex",gap:"1rem",alignItems:"center"}}><div style={{fontSize:"1.5rem"}}>${item.price}</div><div style={{textDecoration:"line-through"}}>${(Math.floor(item.price*1.2*100))/100}</div></div>
            </div>
            </div>
         
            )}
         
        </div>
        </>
    )
}

export default Products