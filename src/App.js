import React, { Component } from 'react';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import { connect,Provider } from "react-redux";
import store from './store';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { history } from './helper/history';
import { clearMessage } from './actions/message';
import ManagePage from './pages/ManagePage';
import Detail from './Detail/Detail'
class App extends Component{
        constructor(props) {
          super(props);
         
        }
        render(){
          return (
            <Provider store={store}>
            <Router history={history}>
                <div className="App">
                   <Switch>
                     <Route exact path = "/"> <HomePage/> </Route>
                     <Route exact path="/login" component={LoginPage} />
                     <Route exact path="/register" component={RegisterPage} />
                     <Route exact path="/managedoc" component={ManagePage}/>
                     <Route exact path="/detail/:name" render={(props) =>(
                       <Detail name={props.match.params.name}></Detail>
                     )}></Route>
                   </Switch>
             </div>
            </Router>
            </Provider>
          ); 
        }
}

export default App;
