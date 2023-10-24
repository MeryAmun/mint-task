import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { logo } from './assets';

function App() {
  return (
    <div className="app">
      <div className="header__logo">
        <img src={logo} alt="" />
      </div>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
     </Routes>
    </div>
  );
}

export default App;
