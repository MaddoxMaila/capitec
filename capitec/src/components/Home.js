import Plans from "./Plans";
import Favourites from "./Favourites";
import Widgets from "./Widgets";
import BottomNav from "./BottomNav";
import more_blue from "./assets/more_blue.svg";
import HomeTopNav from "./HomeTopNav";
import HomeAccounts from "./HomeAccounts";
import "./css/Home.css";
const Home = () => {
    return (
        <div className="home">
            <HomeTopNav/>
            <HomeAccounts/>
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
export default Home;