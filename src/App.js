import About from "./components/About/about";
import Contact from "./components/Contact us/contact";
import Home from "./components/Home/home";
import Navbar from "./components/NavBar/navbar";
import Whyus from "./components/WhyUs/whyus";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Whyus/>
      <Contact/>
    </div>
  );
}

export default App;
