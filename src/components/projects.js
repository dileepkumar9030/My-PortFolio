import React, {Component} from 'react'
import {Card, CardActions, CardText, CardTitle, Button, CardMenu, IconButton, Tab, Tabs, Grid, Cell} from 'react-mdl'


export default class Project extends Component{
    state={
        activeTab: 0
    };

    toggleCategories(){
        if(this.state.activeTab===0){
            return(
                <div className='projects-grid'>
                    <Card shadow={5} style={{minwidth: '450px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', height:'176px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>React Project</CardTitle>
                        <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Code</Button>
                            <Button colored>Live</Button>
                        </CardActions>
                        <CardMenu style={{color:'#ffff'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                    <Card shadow={5} style={{minwidth: '350px', margin: 'auto'}}>
                        <CardTitle expand style={{color: '#fff', height:'130px', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Weather Project</CardTitle>
                        <CardText>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aenan convallis.
                        </CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>Code</Button>
                            <Button colored>Live</Button>
                        </CardActions>
                        <CardMenu style={{color:'#ffff'}}>
                            <IconButton name='share'></IconButton>
                        </CardMenu>
                    </Card>
                
                </div>
            );
        }else if(this.state.activeTab===1){
            return(
                <div>
                    This is React Native Project
                </div>
            );
        }else if(this.state.activeTab===2){
            return(
                <div>
                    This is DJango Project
                </div>
            );
        }else if(this.state.activeTab===3){
            return(
                <div>
                    This is Machine Learning Project
                </div>
            );
        }
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{fontWeight:'bold'}}>React</Tab>
                    <Tab style={{fontWeight:'bold'}}>React Native</Tab>
                    <Tab style={{fontWeight:'bold'}}>DJango</Tab>
                    <Tab style={{fontWeight:'bold'}}>Machine Learning</Tab>
                </Tabs>
                <section className='projects-grid'>
                    <Grid>
                        <Cell col={12}>
                            <div className='content'>
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>    
        );
    }
}