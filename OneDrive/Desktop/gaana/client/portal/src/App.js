
import './App.css';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Mymusic from './pages/MyMusic';
import Browse from './pages/Browse';
import Signin from './pages/SignIn';
function App() {
 return(
 <div>
  <BrowserRouter>

  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <h1 className="navbar-brand, text-danger">Gaana &nbsp;</h1>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
    <Link className="nav-link" to="/myhome">Home</Link>
      <Link className="nav-link" to="/browse">Browse</Link>
      <Link className="nav-link" to="/discover">Discover</Link>
      <Link className="nav-link" to="/mymusic">My Music</Link>
      <Link className="nav-link" to="/signin">Sign In</Link>
    </ul>
  </div>
</nav>
<div className="container">
  <Routes>
    <Route path="/myhome" element={<Home/>}/>
    <Route path="/discover" element={<Discover/>}/>
    <Route path="/mymusic" element={<Mymusic/>}/>
    <Route path="/browse" element={<Browse/>}/>
    <Route path="/signin" element={<Signin/>}/>
  </Routes>
  </div>
  </BrowserRouter>
 </div>
 );
};


export default App;
