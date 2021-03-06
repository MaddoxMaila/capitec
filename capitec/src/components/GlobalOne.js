import "./css/GlobalOne.css";
import menu from "./assets/menu.svg";
import Plans from "./Plans";
import Favourites from "./Favourites";
import transactWhite from "./assets/transact_white.svg";
import Widgets from "./Widgets";
import BottomNav from "./BottomNav";
import more_blue from "./assets/more_blue.svg";

const GlobalOne = () => {
    return (
        <div className="global_one">
            <div className="navbar-fixed">
                <nav className="blue darken-4">
                    <div className="nav-wrapper">
                        <div className="sign_out left">
                            <span className="white-text">Sign Out</span>
                        </div>
                        <div className="brand-logo center">
                            <span className="white-text">Global One</span>
                        </div>
                        <div className="menu_icon_box right">
                            <img src={menu} alt="menu_icon" className="responsive-img"/>
                        </div>
                    </div>
                </nav>
            </div>
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
            <Plans/>
            <Widgets/>
            <div className="titles">
                <div className="favourites_title">
                    <span className=" gey-text text-darken-2">Favourites</span>
                </div>
                <div className="edit_title right">
                    <span className="blue-text">Edit</span>
                    <img src={more_blue} alt="more" width="5"/>
                </div>
            </div>
            <Favourites/>
            <BottomNav/>
        </div>
     );
}
export default GlobalOne;