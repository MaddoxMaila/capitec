import Favourites from "./Favourites";
import Footer from "./Footer";
import "./SignedOut.css";
import menu from "./menu.svg";


const SignedOut = () => {
    const favourites = [
        {id:1, name: "Buy prepaid mobile"},
        {id:2, name: "Pay beneficiary"},
        {id:3, name: "Transfer money"},
        {id:4, name: "Send Cash"},
        {id:5, name: "Scan to pay"},
        {id:6, name: "Track money"}
    ];
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
                <div className="remote-pin white z-depth-2 col s12">
                    <div className="input-field">
                        <input type="password" name="remote_pin" id="remote_pin"/>
                        <label htmlFor="remote_pin">Remote PIN</label>
                    </div>
                </div>
            </div>
            <div className="row button_wrapper">
                <div className="sign_in_button btn btn-large blue darken-1 col s12">Sign In</div>
            </div>
            <Favourites favourites={favourites}/>
            <Footer/>
        </div>

     );
}
export default SignedOut;