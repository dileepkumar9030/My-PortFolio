import React , {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

export default class Landing extends Component{
    render(){
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1bhYhzFHoBGKZQfRzvBuH4_NU7-Eo_MMWvdO778mAtCrRSlv' alt="avatar" className="avatar-img"/>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML | CSS |  JavaScript | ReactJs | NodeJs | Express | MongoDB </p>
                            <div className="social-links">
                            {/*LinkedIn*/}
                                <a href='http://linkedin.com' target='blank' rel='noopener noreferrer'>
                                    <i className='fa fa-linkedin-square' aria-hidden='true'/>
                                </a>
                            {/*Github*/}
                                <a href='http://github.com' target='blank' rel='noopener noreferrer'>
                                    <i className='fa fa-github-square' aria-hidden='true'/>
                                </a>
                            {/*Medium*/}
                                <a href='http://medium.com' target='blank' rel='noopener noreferrer'>
                                    <i className='fa fa-medium' aria-hidden='true'/>
                                </a>
                            {/*Quora*/}
                                <a href='http://quora.com' target='blank' rel='noopener noreferrer'>
                                    <i className='fa fa-quora' aria-hidden='true'/>
                                </a>
                            

                            </div>
                        </div>
                        

                    </Cell>
                </Grid>
            </div>
        );
    }
}