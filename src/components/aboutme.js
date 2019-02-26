import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'

export default class Aboutme extends Component{
    render(){
        return(
            <div>
                <Grid className='gridabout'>
                    <Cell col={4}>
                        <div style={{width:"80%", height:'100%', margin:'auto'}}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1bhYhzFHoBGKZQfRzvBuH4_NU7-Eo_MMWvdO778mAtCrRSlv' alt='avatar' className='avatar-img'/>
                            <h3 style={{paddingLeft: '25px'}}>Dileep Kumar</h3>
                        </div>
                    </Cell>
                    <Cell col={8}>
                        <div className='bantext'>
                            <h3>My Hobbies</h3>
                            <hr/>
                            <p>orem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
           It has survived not only five centuries, but also the leap into electronic t </p>
        
        <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', 
          making it look like readable English. Many desktop publishing packages and   </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}