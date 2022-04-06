import matchers from "@testing-library/jest-dom/matchers";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import CategoryCard from "../../component/CategoryCard";
import ContextProvider from "../../DataContext";
const Discounts = () => {
const [touchDif,setTouchDiff]=useState({start:0,move:0})
const [slidePos,setSlidePos]=useState(0)
const providedId=useContext(ContextProvider)
  const touchStart = (e) => {
   setTouchDiff(prev=>{
       return({
        start:e.touches[0].screenX,move:prev.move
       })
    }
   )
};

  const touchMove = (e) => {
    setTouchDiff(prev=>{  
        return({
         move:e.touches[0].screenX,start:prev.start
        })
     }
    )
    }
 

useEffect(()=>{
  const translatePos=+transformRef.current.style.transform.substr(11,transformRef.current.style.transform.length-14)
if (translatePos<250 && translatePos>-850){
  setSlidePos(prev=>{
    return(
  prev+(touchDif.move-touchDif.start))
}
)
}
if(translatePos>250){setSlidePos(200*20)}
if(translatePos<-850){setSlidePos(-800*20)}
},[touchDif.move])

  // const touchEnd = () =>{
  //   setSlidePos(prev=>{
  //     return(
  //       prev+touchDif.move-touchDif.start
  //     )
  //   })
  // }

  const transformRef=useRef()
  
  const touchStyle = {
    transform: `translateX(${slidePos/20}px)`,
    transition:"all 0.1s ease",
    position: "absolute",
    top: "-250px",
    margin: "2rem",
    display: "flex",
    gap: "1rem",
    backgroundColor: "white",
    border: "1px solid black",
    zIndex: "1",
  };

  return (
    <>
      <div>
        <img
          style={{ width: "100%", height: "400px", objectFit: "cover" }}
          src="/shoppingMain.webp"
        ></img>
      </div>
      <div
        style={{ position: "relative",width:"100%",display:"flex",justifyContent:providedId.screenWidth>750?"center":"flex-start" }}
        onTouchStart={(e)=>touchStart(e)}
        onTouchMove={(e)=>touchMove(e)}
        // onTouchEnd={()=>touchEnd()}
      >
        <div
          style={touchStyle}
          ref={transformRef}
        >
          <CategoryCard data={1}/>
          <CategoryCard data={2}/>
          <CategoryCard data={3}/>
          <CategoryCard data={4}/>
          <CategoryCard data={5}/>
          <CategoryCard data={6}/>
        </div>
      </div>
    </>
  );
};

export default Discounts;

/* slide photo */
