import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from "./Category"
import History from "./History"
import ForHer from "./ForHer"
import Home from "./Home"
import Footer from './Footer';
import Login from './Login';
import Signup from './Signup';
import InputOption from './InputOption';
import ChooseTrack from './ChooseTransport';
import ChooseTransport from './ChooseTransport';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/history' element={<History />}/>
        <Route  path='/category' element={<Category />}/>
        <Route  path='/for-her' element={<ForHer/>}/>
        <Route  path='/login' element={<Login/>}/>
        <Route  path='/signup' element={<Signup/>}/>
        <Route  path='/input' element={<InputOption/>}/>
        <Route  path='/chooseTransport' element={<ChooseTransport/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
