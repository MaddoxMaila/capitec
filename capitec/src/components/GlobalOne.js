import "./css/GlobalOne.css";
import Home from "./Home";
import BottomNav from "./BottomNav";

import { Link, Switch, Route } from "react-router-dom";
import Cards from "./Cards";
import Transact from "./Transact";
import Messages from "./Message";
import Explore from "./Explore";

const GlobalOne = () => {
    return (
        <div className="global_one">
            <Switch>
                <Route path="/" exact>
                    <Home/>
                    <BottomNav/>
                </Route>
                <Route path="/cards" >
                    <Cards/>
                    <BottomNav/>
                </Route>
                <Route path="/transact">
                    <Transact/>
                    <BottomNav/>
                </Route>
                <Route path="/message" exact>
                    <Messages/>
                    <BottomNav/>
                </Route>
                <Route path="/Explore" exact>
                    <Explore/>
                    <BottomNav/>
                </Route>
            </Switch>
        </div>
     );
}
export default GlobalOne;