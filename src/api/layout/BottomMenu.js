const BottomMenu = () => {

const scrollTop= () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


    return(
        <>
        <div onClick={scrollTop} style={{backgroundColor:"#37475A",color:"white",textAlign:"center",padding:"1rem",fontWeight:"bold"}}>
 <div>^</div>
 <div>Top Of Page</div>
        </div>
        <div style={{backgroundColor:"#232F3E",color:"white",fontWeight:"bold",display:"flex",flexWrap:"wrap",gap:"0.5rem",justifyContent:"center"}}>   
                <ul style={{listStyle:"none",display:"flex",gap:"1rem",flexDirection:"column"}}>
                    <li> shoppingurl.com</li>
                    <li> Your List</li>
                    <li> Find Gifts</li>
                    <li> Browsing History</li>
        </ul>
        <ul style={{listStyle:"none",display:"flex",gap:"1rem",flexDirection:"column"}}>
                    <li> Your Orders</li>
                    <li> Gift Cards</li>
                    <li> Your Account</li>
                    <li> Sell Product</li>
        </ul>
        </div>
        </>
    )
}

export default BottomMenu