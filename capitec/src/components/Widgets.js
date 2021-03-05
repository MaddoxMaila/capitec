import "./css/Widgets.css";
import more_blue from "./assets/more_blue.svg";
import { BrowserRouter, Link } from "react-router-dom";
const Widgets = () => {
    const widgets = [{id:1, name:"EasyEquities", description:"investing made easy", link:"https://www.easyequities.co.za/", theme:"red", icon_link:"https://pbs.twimg.com/profile_images/1091315817537511424/6zKo2HJA_400x400.jpg"}];
    return ( 
        <div className="widgets">
            <div className="widget_heading">
                <span className="grey-text text-darken-2 widget_title">Widgets</span>
            </div>
            {
                widgets.map(widget =>(
                    <div className="card widget_card"  key={widget.id}>
                        <a href={widget.link} target="_blank">
                            <div className="card-content widget_card_content">
                                <div className="widget_icon_box ">
                                    <img src={widget.icon_link} alt="widget_icon"  className=""/>
                                </div>
                                <div className="title_description ">
                                    <p className={widget.theme+"-text widget_name "}>{widget.name}</p>
                                    <p className="">{widget.description}</p>
                                </div>
                                <div className="widget_more_icon right">
                                    <img src={more_blue} alt="more icon" className="responsive-img right" width="5" height="5"/>
                                </div>
                            </div>
                        </a>
                    </div>
                ))
            }
        </div>
     );
}
export default Widgets;