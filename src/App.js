import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';

function App(){
  
  return(
    <div className='content'>
      <Header />
      <Main/>
      <About/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App;
