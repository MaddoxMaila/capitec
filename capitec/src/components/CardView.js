import "./css/CardView.css";
import more_blue from "./assets/more_blue.svg";
const CardView = () => {
    return ( 
        <div className="card_view">
            <div className="card_view_black">
                <div className="black card_black">
                    <h4 className="yellow-text center"> Global One</h4>
                    <h1  className="yellow-text center">Capitec</h1>
                    <p>MR L MAWAYA</p>
                    <p>123456789</p>
                    <br/>
                    <span>Debit</span> <span>Mastercard</span>
                    <br/>
                    <br/>
                </div>
            </div>
            <div className="limits_heading">
                <span>Debit daily limits</span>
            </div>
            <div className="card_functions">
                <div className="limits_functions white z-depth-1">
                    <div className="update_limits">
                        <span>Update daily limits</span>
                        <img src={more_blue} alt="more" width="5" className="responsive-img right" />
                    </div>
                    <hr className="devider" />
                    <div className="temporary_limits">
                        <span>Set temporary limits</span>
                        <img src={more_blue} alt="more" width="5" className="responsive-img right" />
                    </div>
                </div>

                <div className="limits_functions white z-depth-1">
                    <div className="tap_to_pay">
                        <span>Tap to pay</span>
                        <img src={more_blue} alt="more" width="5" className="responsive-img right" />
                    </div>
                    <hr className="devider" />
                    <div className="stop_card">
                        <span>Stop card</span>
                        <img src={more_blue} alt="more" width="5" className="responsive-img right" />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CardView;