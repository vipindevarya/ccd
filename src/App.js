import './App.css';
import Header from './components/Header';

import Galleries from './components/Galleries';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/Footer';

import Services from './components/Services';
import Menu from './components/Menu';

import Contact from './components/Contact';
import About from './components/About';



function App() {
  return (
   <div className="App">
  
  <Router>
   <main>
    <section>
    <Header />
        <Switch>
        <Route path="/" exact component={Home}/>
      
      
        <Route path="/galleries" exact component={Galleries}/>
     
       
        <Route path="/services" exact component={Services}/>
        <Route path="/menu" exact component={Menu}/>
      
        <Route path="/contact" exact component={Contact}/>
        <Route path="/about" exact component={About}/>
      
     
</Switch>
        
    </section>
    </main>
    </Router>
  <Footer /> 
</div>
  );
}

export default App;
