import React from "react";
import {Switch, Route} from 'react-router-dom';
import Principal from './Principal';
import Login from './Login';

const Main = () => (
    <div>

        <Switch>

            <Route exact path="/" component={Principal}/>
            <Route exact path="/Login" component={Login}/>
            
      
        </Switch>

    </div>
);

export default Main;