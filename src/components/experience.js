import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

export default class Experience extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <p style={{fontSize: '20px'}}>{this.props.startYear}-{this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{marginTop:'0px'}}>{this.props.name}</h4>
                        <p>{this.props.description}</p>
                    </Cell>
                </Grid>

            </div>
        );
    }
}