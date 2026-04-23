import { Routes, Route } from "react-router-dom";
import AppBar from './components/Appbar.jsx';
import Footer from "./components/Footer.jsx";

import Part1 from './components/Part1.jsx';
import Part2 from './components/Part2.jsx';
import Part3 from './components/Part3.jsx';
import Part4 from './components/Part4.jsx';
import Part5 from './components/Part5.jsx';
import Part6 from './components/Part6.jsx';
import Part7 from './components/Part7.jsx';

import Contact from './components/Contact.jsx';
import Media from './components/Media.jsx';
import News from './components/News.jsx';
import StoreLocator from './components/StoreLocator.jsx';
import Firstportion from "./Firstportion.jsx";

function Home() {
  return (
    <>
    <Part1/>
    <Part2/>
      <Part3 />
      <Part4 />
      <Part5 />
      <Part6 />
      <Part7 />
    </>
  );
}

function App() {
  return (
    <>
      <AppBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Part4/>} />
            <Route path="/category" element={<Part5/>} />
              <Route path="/aboutus" element={<Part3 />} />
        <Route path="/media" element={<Media />} />
        <Route path="/news" element={<News />} />
        <Route path="/store" element={<StoreLocator />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
