import './App.css';
import SignedOut from './components/SignedOut';
import GlobalOne from './components/GlobalOne';
import { BrowserRouter as Router, Switch, Route } from  "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
       <GlobalOne/>
      <Switch>
        <Route path="/sign" >
          <SignedOut/>
        </Route>
      </Switch>
      </div>
    </Router>
    
  );
}

export default App;
