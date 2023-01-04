import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Articles from './pages/Articles'
import Cours from './pages/Cours'
import Quizz from './pages/Quizz';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <Navbar/>
      <Router>
      <Routes>
      <Route path="/cours" element={<Cours />} />
      <Route path="/articles" element={<Articles/>} />
      <Route path="/quizz" element={<Quizz/>} />
      <Route path="/home" element={<Home/>} />
      </Routes>
      </Router>
    </div>
  );
  
}


export default App;
