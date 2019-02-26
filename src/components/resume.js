import React, {Component} from 'react'
import {Grid, Cell} from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'


export default class Resume extends Component{
    render(){
        return(
            <div>
                <Grid className='grid-resume'>
                    <Cell col={4}>
                        <div style={{textAlign:'center'}}>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY1bhYhzFHoBGKZQfRzvBuH4_NU7-Eo_MMWvdO778mAtCrRSlv' alt='avatar' style={{height:'200px'}}/>
                        </div>
                        <h3 style={{paddingTop:'0.1em', textAlign:'center'}}>Dileep Kumar</h3>
                        <h5 style={{paddingTop:'0.1em', color:'grey', textAlign:'center'}}>Web Developer</h5>
                        <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>
                        <p style={{textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the lea</p>
                        <h5>Address</h5>
                        <p>ABC Road, XYZ</p>
                        <h5>Phone</h5>
                        <p>(+91)5454-345-345</p>
                        <h5>Email</h5>
                        <p>ABC@gmail.com</p>
                        <h5>Website</h5>
                        <p>ABC.com</p>
                        <hr style={{borderTop:'3px solid #833fb2',width:'100%'}}/>
                    </Cell>
                    <Cell className='resume-right-col' col={8} >
                    
                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear='present'
                            name='Cognizant'
                            description='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Education</h2>
                        <Education 
                            startYear={2012} 
                            endYear={2016}
                            schoolName="Kakatiya University"
                            schoolDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                        />
                        <Education 
                            startYear={2010} 
                            endYear={2012}
                            schoolName="XYZ school"
                            schoolDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                        />
                        <Education 
                            startYear={2000} 
                            endYear={2010}
                            schoolName="XYZ school"
                            schoolDescription='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'
                        />
                        <hr style={{borderTop: '3px solid #e22947'}}/>
                        <h2>Skills</h2>
                        <Skills />
                    </Cell>
                </Grid>
            </div>
        );
    }
}