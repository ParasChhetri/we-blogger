import { useContext } from 'react';
import './App.css';
import { DarkModeSwitch } from './components/DarkModeSwitch';
import { GlobalContext } from './context';
import { Navbar } from './components/Navbar/NAvbar';
import { Home } from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { Blogs } from './pages/blogs/Blogs';
import { About } from './pages/about/About';
import { Contact } from './pages/contact/Contact';

function App() {
  const { theme } = useContext(GlobalContext)
  return (
    <div className="App" style={theme === "dark" ? {background : "linear-gradient(45deg, #000080, #000000, #0000FF)", color : "white" } : {background : "white", color : "black"}} >
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Blogs' element={<Blogs />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Contact' element={<Contact />}/>
      </Routes>
      <DarkModeSwitch />
      <Footer />
      
    </div>
  );
}

export default App;
