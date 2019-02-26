import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Landing from './landing'
import Resume from "./resume"
import Project from './projects'
import Aboutme from './aboutme'
import Contact from './contact'


const Main=()=>(
    <Switch>
        <Route exact path="/" component={Landing}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/projects" component={Project}></Route>
        <Route path="/aboutme" component={Aboutme}></Route>
        <Route path="/contact" component={Contact}></Route>
    </Switch>
);

export default Main