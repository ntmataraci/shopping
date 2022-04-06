
import BottomMenu from "./BottomMenu"
import Catogeries from "./Catogeries"
import DetailedModal from "./DetailedModal"
import Discounts from "./Discounts"
import Nav from "./Nav"
import Products from "./Products"
import { useContext, useEffect } from "react"
import ContextProvider from "../../DataContext"
import CartModal from "../../component/CartModal"
import Search from "../../component/Search"

const Layout = () => {
    const providedId=useContext(ContextProvider)



return(
    <>

    <Nav/>

    {providedId.cartModal&&
    <CartModal/>
}
{!providedId.modalSit&&
<>
    <Catogeries/>
    <Discounts/>
    </>
}
    {providedId.modalSit&&
    <DetailedModal/>
}
{providedId.allProducts?
    <Products/>:"loading datas..."
}
    <BottomMenu/>
  
    </>
)


}

export default Layout