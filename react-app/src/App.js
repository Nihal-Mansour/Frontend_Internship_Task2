import './App.scss';
import Nav from "./components/Nav";
import InnerNav from './components/InnerNav';
import ShoppingCart from './components/ShoppingCart';
import Payment from './components/Payment';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <InnerNav />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <ShoppingCart />
            </Route>
            <Route path="/shipping">
              <Payment />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
