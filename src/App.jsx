import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/home/Home';
import Content from './pages/content/Content';
import About from './pages/about/About';
import SignUp from './pages/signUp/SignUp';
import SignIn from './pages/signIn/SignIn';
function App() {
  return (
    <Router>
      <Routes className="App">
          <Route path="/" element={<Home/>} />
          <Route path="/content" element={<Content/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn/>} />
  
      </Routes>
      
    </Router>
    
  );
}

export default App;
