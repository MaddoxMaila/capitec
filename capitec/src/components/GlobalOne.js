import "./css/GlobalOne.css";
import menu from "./assets/menu.svg";
import Plans from "./Plans";
import Favourites from "./Favourites";
import transactWhite from "./assets/transact_white.svg";
import transactGrey from "./assets/transact_grey.svg";
import home from "./assets/home.svg";
import cards from "./assets/cards.svg";
import message from "./assets/message.svg";
import explore from "./assets/explore.svg";
import home_grey from "./assets/home_grey.svg";
import cards_blue from "./assets/cards_blue.svg";
import message_blue from "./assets/message_blue.svg";
import explore_blue from "./assets/explore_blue.svg";
import more_blue from "./assets/more_blue.svg";
import under_thing from "./assets/thing_under.svg";

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
            <div className="titles">
                <span className="grey-text text-darken-2 favourites_title">Favourites</span>
                <div className="edit valign-wrapper">
                    <a href="/"className="blue-text text-darken-2 edit_title">{"Edit"}</a>
                    <img src={more_blue} alt="more" width="5" height="5" className="responsive-img"/>
                </div>
            </div>
            <Favourites/>
            <div className="bottom_navigation z-depth-1 white">
                <div className="home_button center-align">
                    <div className="navigation_icon_box">
                        <img src={home_grey} alt="" className="responsive-img"/>
                    </div>
                    <span ClassName="blue-text">Home</span>
                </div>
                <div className="cards_button center-align">
                    <div className="navigation_icon_box">
                        <img src={cards} alt="" className="responsive-img"/>
                    </div>
                    <span ClassName="grey-text text-darken-2">Cards</span>
                </div>
                <div className="transact_button center-align">
                    <img src={under_thing} alt="" className="responsive-img under_thing"/>
                    <div className="navigation_icon_box transact_grey">
                        <img src={transactGrey} alt="" className="responsive-img"/>
                    </div>
                    <span ClassName="grey-text text-darken-2 ">Transact</span>
                </div>
                <div className="Messages_button center-align">
                    <div className="navigation_icon_box">
                        <img src={message} alt="" className="responsive-img blue-text"/>
                    </div>
                    <span ClassName="grey-text text-darken-2">Messages</span>
                </div>
                <div className="Explore_button center-align">
                    <div className="navigation_icon_box">
                        <img src={explore} alt="" className="responsive-img"/>
                    </div>
                    <span ClassName="grey-text text-darken-2">Explore</span>
                </div>
            </div>
        </div>
     );
}
export default GlobalOne;