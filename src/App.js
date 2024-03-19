
import {Route,Routes} from 'react-router-dom';

import Login from './components/Login';
import Navbar from './components/Navbar';
import Admin from './components/Admin';
import User from './components/User';
import Home from './components/Home';
import {Auth } from './components/Auth';
import Signup from './components/Signup';
import Profile from './components/Profile';



function App() {
  return (
    <div className="App">
      <Auth> 
       <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/user" element={<User/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>

      </Auth>
    </div>
  );
}

export default App;
