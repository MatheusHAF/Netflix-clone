import './App.css';
import Navbar from "./components/Navbar.js"
import Footer from "./components/Footer.js"
import Home from "./components/Home.js"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
