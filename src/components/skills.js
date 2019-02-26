import React, {Component} from 'react'
import {ProgressBar} from 'react-mdl'

export default class Skills extends Component {
    render(){
        return(
            <div>   
                <label>HTML</label>
                <ProgressBar progress={95}/>
                <label>CSS</label>
                <ProgressBar progress={80}/>
                <label>JavaScript</label>
                <ProgressBar progress={95}/>
                <label>React.Js</label>
                <ProgressBar progress={95}/>
                <label>Node.Js</label>
                <ProgressBar progress={85}/>
            </div>
        );
    }
}