import { createContext, useContext, useEffect } from "react";
import React, { useState } from "react";
import { getAllproducts } from "./api/api";
const ContextProvider = React.createContext();

export const DataProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState();
  const [getId, setGetId] = useState();
  const [modalSit, setModalSit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cartArray, setCartArray] = useState([]);
  const [cartModal,setCartModal]=useState(false)
  const [isChanged,setIsChanged]=useState(0)
const[screenWidth,setScreenWidth]=useState()
const[searchedText,setSearchedText]=useState()
useEffect(()=>setScreenWidth(window.innerWidth),[])

  useEffect(() => {
    const asyEf = async () => {
      const data = await getAllproducts();
      setAllProducts(data);
    };
    asyEf();
  }, []);


  return (
    <ContextProvider.Provider
      value={{
        searchedText:searchedText,
        setSearchedText:(x)=>setSearchedText(x),
screenWidth:screenWidth,
isChanged:isChanged,
setIsChanged:(x)=>setIsChanged(x),
        cartModal:cartModal,
        setCartModal:(x)=>setCartModal(x),
        allProducts: allProducts,
        idVal: getId,
        setterId: (x) => setGetId(x),
        modalSit: modalSit,
        setModal: (x) => setModalSit(x),
        isLoading: isLoading,
        setLoad: (x) => setIsLoading(x),
        cartArray:cartArray,
        setCart:(x)=>  {
        const selectId=allProducts.find(item=>item.id==x)
        if(cartArray==false){
            selectId["qty"]=1
            setCartArray([selectId])
          }else{
const filtered=cartArray.find(item=>item.id==x)
if (filtered){
               filtered["qty"]+=1
                const filteredId=cartArray.findIndex(val=>val==filtered.id)
                cartArray[filteredId]=filtered
                setCartArray([...cartArray])            
}else{
              selectId["qty"]=1
                 setCartArray((prev)=>{return [...prev,selectId]})             
}     
    }
        },
        setCartArray:(x)=>setCartArray(x)
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default ContextProvider;
