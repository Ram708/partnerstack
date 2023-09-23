
import { AllRouter } from './AllRouter/AllRouter';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Component/Header/Header';
import { Topbar } from './Component/Topbar/Topbar';
import { Footer } from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar/>
        < Header/>
        
        <AllRouter/>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
