import "./css/GlobalOne.css";
import Home from "./Home";
import SignedOut from "./SignedOut";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const GlobalOne = () => {
    return (
        <div className="global_one">
            <Router>
                <Switch>
                    <Route path="/" exact>
                        <Home/>
                    </Route>
                    <Route path="/sign" >
                        <SignedOut/>
                    </Route>
                </Switch>
            </Router>
        </div>
     );
}
export default GlobalOne;