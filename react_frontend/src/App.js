import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import NavbarMenu from './components/Navbar'
import Item from './home/item';
import Nse from './nse/banknifty';
import Banknifty from './nse/bankniftydata';

import Nses from './nse/nifty';

import Bank from './nse/bank';



function App() {
    return (
        <div className="App">

            <div>
                <Router>
                <NavbarMenu />
                    <Switch>
                        <Route exact path="/Item" component={Item} />
                        <Route exact path="/Nse" component={Nse} />
                        <Route exact path="/Nifty" component={Nses} />
                        <Route exact path="/Banknifty" component={Banknifty} />

                        <Route exact path="/Bank" component={Bank} />

                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;
