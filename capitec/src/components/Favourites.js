import "./css/Favourites.css";
import prepaid from "./assets/buy_prepaid_mobile_icon.svg";
import send from "./assets/send_cash.svg";
import track from "./assets/track_money.svg";
import beneficiary from "./assets/pay_beneficiary.svg";
import scan from "./assets/scan_to_pay.svg";
import electricity from "./assets/buy_electricity.svg";
import transfer from "./assets/transfer_money.svg"
const Favourites = () => {
    const favourites = [
        {id:1, name: "Buy prepaid mobile"},
        {id:2, name: "Pay beneficiary"},
        {id:3, name: "Transfer money"},
        {id:4, name: "Send Cash"},
        {id:5, name: "Scan to pay"},
        {id:6, name: "Track money"}
    ];
    const chooseIcon = (name)=>{
        if(name.includes("prepaid")){
            return(
                <img src={prepaid} alt="prepaid" className="responsive-img"/>
            )
        }
        if(name.includes("beneficiary")){
            return(
                <img src={beneficiary} alt="prepaid" className="responsive-img beneficiary_icon"/>
            )
        }
        if(name.includes("Transfer")){
            return(
                <img src={transfer} alt="prepaid" className="responsive-img"/>
            )
        }
        if(name.includes("Send")){
            return(
                <img src={send} alt="prepaid" className="responsive-img"/>
            )
        }
        if(name.includes("Scan")){
            return(
                <img src={scan} alt="prepaid" className="responsive-img"/>
            )
        }
        if(name.includes("Track")){
            return(
                <img src={track} alt="prepaid" className="responsive-img"/>
            )
        }
        if(name.includes("electricity")){
            return(
                <img src={electricity} alt="prepaid" className="responsive-img"/>
            )
        }
    }
    return (
        <div className="favourites_wrapper">
            {
                favourites.map(favourite => (
                    <div className="favourite_item card center" key={favourite.id}>
                        <div className="card-content">
                            <div className="icon_box center">
                                { 
                                   chooseIcon(favourite.name)
                               }
                            </div>
                            <p>{favourite.name}</p>
                        </div>
                    </div>
                ))
            }
        </div>
     );
}
export default Favourites;