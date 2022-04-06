import { useContext, useEffect, useState } from "react"
import ContextProvider from "../../DataContext"
import { singleProduct } from "../api"
import {IoIosStarHalf,IoIosStar,IoIosStarOutline} from "react-icons/io"
const DetailedModal = () => {
    const providedId=useContext(ContextProvider)
    const starize = (x)=>{
        const qtyStar=Math.floor(x)
        const halfStar=(x-qtyStar)>0.5?1:0
        const blankStar=5-qtyStar-halfStar
        const fullArr=Array(qtyStar).fill(<IoIosStar/>)
        const halfArr=Array(halfStar).fill(<IoIosStarHalf/>)
        const blankArr=Array(blankStar).fill(<IoIosStarOutline/>)
        const finishedArr=fullArr.concat(halfArr,blankArr)
    
        return(
    finishedArr.map((item,idx)=><div key={idx} style={{color:"orange"}}>{item}</div>)
         )
    }


    


    const returnData=async (x)=>{
        setData(()=><div style={{height:"100vh"}}>loading images...</div>)
        // window.scrollTo({
        //     top:600,
        //     behavior:"smooth"
        // })
       const data= await singleProduct(x.idVal)

       const addToChart=(x)=>{
        providedId.setCart(x)
        providedId.setModal(false)
       }

       const openBasket=(x)=>{

             window.scrollTo({
            top:0,
            behavior:"smooth"
        })
        providedId.setCart(x)
        providedId.setCartModal(true)
       }
      if( providedId.screenWidth<750){
        setData(()=>{
            return(
        
                    <div id="refIdIntoView">
<div style={{textTransform:"capitalize",marginLeft:"3rem"}}><h3>{data.category}</h3></div>
       <div style={{textTransform:"capitalize",marginLeft:"3rem"}}>{data.title}</div>
         <div><img style={{width:"100%",height:"100%"}} src={data.image}></img></div>
         <div>{data.description}</div>
         <div style={{display:"flex",flexWrap:"wrap"}}>{starize(data.rating.rate)}<div>{data.rating.count}</div></div>
         <div style={{fontSize:"1.2rem",display:"flex"}}>Price : <div style={{color:"red",fontWeight:"600",marginLeft:"0.5rem"}}>${data.price}</div></div>
         <div><select>
             <option value="1">1</option>
             <option value="3">3</option>
             <option value="5">5</option>
             </select></div>
         <div onClick={()=>addToChart(data.id)}><button>Add To Chart</button></div>
         <div onClick={()=>openBasket(data.id)}><button>Go To Basket</button></div>
         </div>         
            )
        })
    }else{
        setData(()=>{
            return(
        
                    <div id="refIdIntoView">
<div style={{textTransform:"capitalize",marginLeft:"3rem"}}><h3>{data.category}</h3></div>
<div style={{textTransform:"capitalize",marginLeft:"3rem"}}>{data.title}</div>
<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
<div><img style={{width:"300px"}} src={data.image}></img></div>
<div style={{marginLeft:"3rem",width:"400px"}}>
<div>{data.description}</div>
         <div style={{display:"flex",flexWrap:"wrap"}}>{starize(data.rating.rate)}<div>{data.rating.count}</div></div>
         <div style={{fontSize:"1.2rem",display:"flex"}}>Price : <div style={{color:"red",fontWeight:"600",marginLeft:"0.5rem"}}>${data.price}</div></div>
         <div><select>
             <option value="1">1</option>
             <option value="3">3</option>
             <option value="5">5</option>
             </select></div>
         <div onClick={()=>addToChart(data.id)}><button>Add To Chart</button></div>
         <div onClick={()=>openBasket(data.id)}><button>Go To Basket</button></div>
         </div>
</div>
</div>
)
        })
        
    }
        providedId.setLoad(false)
    }

 const [getData,setData]=useState()


useEffect(()=>{
    providedId&&
  returnData(providedId)
},[providedId.idVal])

    return(
<>
<div style={{width:"100vw",marginBottom:"1rem"}}>
    {providedId.isLoading?<div style={{fontSize:"3rem"}}>loading...</div>:
getData
    }
</div>
</>
    )
}

export default DetailedModal