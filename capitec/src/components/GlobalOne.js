import "./css/GlobalOne.css";
import Home from "./Home";
import SignedOut from "./SignedOut";
import { Link, Switch, Route } from "react-router-dom";

const GlobalOne = () => {
    return (
        <div className="global_one">
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/sign" >
                    <SignedOut/>
                </Route>
            </Switch>
        </div>
     );
}
export default GlobalOne;