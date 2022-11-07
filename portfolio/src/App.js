import logo from './logo.svg';
import './App.css';
import {Container, ContentsWrapper, Menu} from './style/Home.Style';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import { Route, Link, useLocation } from 'react-router-dom';
import React from 'react';

function App() {
  
  return (
    <>
      <Container>
      <Menu>
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/project"><li>Project</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
        </ul>
      </Menu >
        <ContentsWrapper>
          <Route exact={true} path="/" component={Home} />
          <Route path="/about" component={About}/>
          <Route path="/project" component={Project}/>
          {/* <Route path="/contact" component={Contact}/> */}
        </ContentsWrapper>
      </Container>
    </>
  );
}

export default App;
