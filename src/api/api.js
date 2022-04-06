

export const getAllproducts=async() => {
   const data= await fetch('https://fakestoreapi.com/products')
const result= await data.json()
return result
}

export const singleProduct= async (id)=> {
  const data=await fetch(`https://fakestoreapi.com/products/${id}`)
  const result=await data.json()
  return result    
}

