import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Experience from "./pages/Experience"
import Projects from "./pages/Projects"
import Navebar from './components/Navebar';
import Footer from './components/Footer';

function App() {
  return (
  <div className="App">
    <Router>
      <Navebar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/experiece" element={<Experience/>} />
      </Routes>
      <Footer/>
    </Router>
  </div>
  );

}

export default App;
