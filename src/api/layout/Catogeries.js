import {GoLocation} from "react-icons/go"
const Catogeries = () => {
    return(
        <>
        <div style={{display:"flex",flexWrap:"wrap",width:"100%",backgroundColor:"#232f3e",color:"white",gap:"2rem",padding:"0.5rem 1rem"}}>
            <div>Deals</div>
            <div>Basics</div>
            <div>...</div>
        </div>
        <div style={{backgroundColor:"#37475A",height:"1.8rem",display:"flex",alignItems:"center",color:"white",padding:"0.5rem 1rem"}}>
<GoLocation/>
            Deliver to Mars
        </div>
        
        </>
    )
}

export default Catogeries