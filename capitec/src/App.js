import './App.css';
import SignedOut from './components/SignedOut';
import GlobalOne from './components/GlobalOne';
import { BrowserRouter as Router } from  "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
       <GlobalOne/>
      </div>
    </Router>
    
  );
}

export default App;
