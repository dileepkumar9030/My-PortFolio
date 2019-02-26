import React, {Component} from 'react'
import {Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'

export default class Contact extends Component{
    render(){
        return(
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h3>Dileep Kumar</h3>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1bhYhzFHoBGKZQfRzvBuH4_NU7-Eo_MMWvdO778mAtCrRSlv' alt='avatar'
                        style={{height: '250px'}}/>
                        <p style={{width:'82%', margin:'auto', paddingTop:'1em'}}> loremipsumsfjknfknsklhnsklhnsasg.segtooldsz...fseg</p>   
                    </Cell>
                    <Cell col={6}>
                        <h3>Contact Me</h3>
                        <hr/>
                        <div className='contact-list'>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton', fontWeight:'bold'}}>
                                    <i className='fa fa-phone-square' aria-hidden='true'/>
                                    (+91)7245-653-536
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton', fontWeight:'bold'}}>
                                    <i className='fa fa-fax' aria-hidden='true'/>
                                    (+91)1234-567-89
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton', fontWeight:'bold'}}>
                                    <i className='fa fa-envelope' aria-hidden='true'/>
                                    dileep123@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{fontSize:'25px', fontFamily:'Anton', fontWeight:'bold'}}>
                                    <i className='fa fa-skype' aria-hidden='true'/>
                                    dileepkumar9030
                                    </ListItemContent>
                                </ListItem>
                                
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}