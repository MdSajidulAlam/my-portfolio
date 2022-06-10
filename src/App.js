import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './components/Home/About';
import Navbar from './components/Home/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
