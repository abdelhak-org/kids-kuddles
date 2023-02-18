import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import LoginPage from "./pages/loginPage/LoginPage";
import Articles from "./pages/articles/Articles"
import Contact from "./pages/contact/Contact";
import Footer from "./components/Footer";
import Gallery from "./pages/gallery/Gallery";

function App() {
  return (
    <>

      <Navbar />
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="*" element={<Home />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="loginpage" element={<LoginPage />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="articles" element={<Articles />} />
        <Route exact path="gallery" element={<Gallery />} />
      </Routes>
      <Footer/>
      
    </>
  );
}

export default App;
