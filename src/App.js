import React, { Component } from 'react';
import './App.css';
import FoodManager from './FoodManager';
import Ingradients from './FoodManager/ingradients';

import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends Component {
  render() {
    console.log("Host URL"+process.env.PUBLIC_URL);
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/FoodManager"/>
                )}/>
                 <Route exact path='/FoodManager' component={FoodManager} />
                 <Route exact path='/Ingradients' component={Ingradients} />

          </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
