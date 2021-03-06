import "./css/HomeTopNav.css";
import menu from "./assets/menu.svg";
const HomeTopNav = () => {
    return ( 
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
     );
}
export default HomeTopNav;