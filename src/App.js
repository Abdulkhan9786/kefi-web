import About from "./components/About/about";

import Home from "./components/Home/home";
import Navbar from "./components/NavBar/navbar";
import Whyus from "./components/WhyUs/whyus";
import OurStory from "./components/OurStory/ourStory"
import Order from "./components/Order now/order";
import BottomNavBar from "./components/BottomNavBar/bottom";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <OurStory/>
      <About/>
      <Whyus/>
      <Order/>
      <BottomNavBar/>
    </div>
  );
}

export default App;
