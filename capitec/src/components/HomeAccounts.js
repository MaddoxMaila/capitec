import "./css/HomeAccounts.css";
import transactWhite from "./assets/transact_white.svg";
import more_blue from "./assets/more_blue.svg";
const HomeAccounts = () => {
    return ( 
        <div className="savings_account">
            <div className="card savings_card">
                <div className="card-content savings_card_content">
                    <div className="savings_icon_box blue">
                        <img src={transactWhite} alt="transact icon" className="responsive-img"/>
                    </div>
                    <div className="name_box">
                        <span className="savings_name blue-text">Savings Account</span>
                        <img src={more_blue} alt="more" width="5" height="5" className="right responsive-img"/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default HomeAccounts;