import React, { Component } from 'react';
import './App.css';
import Main from './components/main'
import { Layout, Header, Navigation, Content, Drawer } from 'react-mdl'
import {Link} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className='header-color' title={<Link style={{textDecoration: 'none', color:'white', fontWeight:'bold'}}to='/'>My PortFolio</Link>} scroll>
            <Navigation>
              <Link style={{fontWeight:'bold'}} to='/resume'>Resume</Link>
              <Link style={{fontWeight:'bold'}} to='/projects'>Projects</Link>
              <Link style={{fontWeight:'bold'}} to='/aboutme'>About Me</Link>
              <Link style={{fontWeight:'bold'}} to='/contact'>Contact</Link>
            </Navigation>
        </Header>
        <Drawer title="My Profile">
            <Navigation>
              <Link style={{fontWeight:'bold'}} to='/resume'>Resume</Link>
              <Link style={{fontWeight:'bold'}} to='/projects'>Projects</Link>
              <Link style={{fontWeight:'bold'}} to='/aboutme'>About Me</Link>
              <Link style={{fontWeight:'bold'}} to='/contact'>Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
