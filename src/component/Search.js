import ContextProvider from "../DataContext";
import { useState,useContext, useEffect } from "react";
const Search = (props) =>{
const selectedItem= (id)=>{
console.log(id)
providedId.setLoad(false)
providedId.setterId(id)
providedId.setModal(true)
providedId.setSearchedText("")
setFilteredVal("")
}
    const providedId=useContext(ContextProvider)
const [filteredVal,setFilteredVal]=useState([])
    useEffect(()=>{
    if(providedId.allProducts&&providedId.searchedText){
        if(providedId.searchedText.length>1){
    console.log(providedId.allProducts.filter(item=>item.title.toLowerCase().indexOf(providedId.searchedText.toLowerCase())>-1))
     setFilteredVal(providedId.allProducts.filter(item=>item.title.toLowerCase().indexOf(providedId.searchedText.toLowerCase())>-1))
    }else{
        setFilteredVal("")
    }
}

},[providedId.searchedText])


// 
    return(
<>
{filteredVal&&
filteredVal.map(item=>{
    return(
        <div key={item.id} style={{width:"100%",display:"flex",justifyContent:"center",borderBottom:"1px solid gray",cursor:"pointer"}} className="searchHovered">
    <p  onClick={()=>selectedItem(item.id)}>{item.title}</p></div>
    )
    })
}
</>
    )
}

export default Search