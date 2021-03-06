import "./css/BottomNav.css";
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
const BottomNav = () => {
    return ( 
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
     );
}
 
export default BottomNav;