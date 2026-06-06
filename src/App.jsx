import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Menus from "./components/Menus/Menus";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Banner3 from "./components/Banner/Banner3";
import Footer from "./components/Footer/Footer";
import { Routes, Route, useLocation } from 'react-router-dom'
const App = () => {
  return (
    <>
      <main className=" overflow-x-hidden">
        <NavBar />
        <Hero />
        <Menus />
        <Banner />
        <Banner2 />
        <Banner3 />
        <Footer />
      </main>
    </>
  );
};

export default App;
