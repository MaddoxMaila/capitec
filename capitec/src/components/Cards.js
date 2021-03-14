import "./css/Cards.css";
import { useState } from "react";
import CardView from "./CardView";
const Cards = () => {
    const [ headingBold , setHeadingBold] = useState("nav_heading_bold");
    const [ heading , setHeading ] = useState("nav_heading");
    const handleCardsClick = ()=>{
        setHeadingBold("nav_heading_bold");
        setHeading("nav_heading");
    }
    const handleVirtualClick = ()=>{
        setHeadingBold("nav_heading");
        setHeading("nav_heading_bold");
    }
    
    return (
        <div className="cards">
            <div className="navbar-fixed">
                <nav className="z-depth-0">
                    <div className="nav-wrapper cards_nav_wrapper center ">
                        <div className={headingBold} onClick={handleCardsClick} >
                            <div>
                                <span className="white-text">Cards</span>
                            </div>
                        </div>
                        <div className={heading} onClick={handleVirtualClick}>
                            <div>
                                <span className="white-text">Virtual</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <CardView/>
        </div>
     );
}
 
export default Cards;