import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Header from './components/header';
import About from './components/about';
import Electrical from './components/electrical-domain';
import Mechanical from './components/mechanical-domain';
import Science from './components/science-domain';
import Software from './components/software';
import Mangement from './components/management';
import Footer from './components/footer';
import Contact from './components/contact';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <>
      <About/>
      <div className='title1'>THE TEAM</div>
      <Electrical/>
      <Mechanical/>
      <Science/>
      <Software/>
      <Mangement/>
      <Footer/>
     
      </>
        }/>
    
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    
    </div>

      </Router>
     
      
    
     
   


   
  );
}

export default App;