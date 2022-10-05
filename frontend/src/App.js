import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
// import Login from './components/Login';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
// import NotFound from './components/NotFound';
 import Header from './components/Header';
// import Eventhandling from './components/Eventhandling';
import Login from './components/Login';
import Register from './components/Register';
import Plugin from './components/Plugin';
import Dashboard from './components/Dashboard';


// import UserManager from './components/UserManager';
//  import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Header />
        {/* <Link to="/home">Home</Link>
        <Link to="/login">Login</Link> */}
        <Routes>

          <Route element={<Home></Home>} path="/" />
          <Route element={<Home></Home>} path="home" />
          <Route element={<Login></Login>} path="Login" />
          <Route element={<Register></Register>} path="Register" />
          <Route element={<Plugin></Plugin>} path="Plugin" />
          <Route element={<Dashboard></Dashboard >} path="Dashboard" />



        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;