import Favourites from "./Favourites";
import Footer from "./Footer";
import "./css/SignedOut.css";
import menu from "./assets/menu.svg";
import lock from "./assets/remote_pin_lock.svg";



const SignedOut = () => {
    
    return ( 
        <div className="signed_out">
            <div className="row">
                <div className="greeting col s12 blue darken-4">
                    <div className="menu_icon_box right">
                       <a href="//"><img src={menu} alt="menu_icon" className="menu_icon responsive-img"/></a>
                    </div>
                    <h1 className="center white-text">
                        <b>hello</b>
                    </h1>
                    <p className="center white-text"><b>Lebogang</b></p>
                </div>
                <div className="remote-pin white z-depth-1 col s12">
                    <div className="lock_box col s2">
                        <img src={lock} alt="remote_pin_lock" className="responsive-img"/>
                    </div>
                    <div className="input-field col s10">
                        <input type="password" name="remote_pin" id="remote_pin"/>
                        <label htmlFor="remote_pin">Remote PIN</label>
                    </div>
                </div>
            </div>
            <div className="row button_wrapper">
                <div className="sign_in_button btn btn-large blue darken-1 col s12">Sign In</div>
            </div>
            <Favourites />
            <Footer/>
        </div>

     );
}
export default SignedOut;