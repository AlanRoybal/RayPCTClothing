import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import Backdrop from "./components/Backdrop.jsx";
import Drops from "./components/Drops.jsx";
import Copywrite from "./components/Copywrite.jsx";
import Links from "./components/Links.jsx";
import ItemGallery from "./components/ItemGallery.jsx";
import ImageCarousel from "./components/ImageCarousel.jsx";
import InfoCard from "./components/InfoCard.jsx";

function PageOne() {
  return (
    <>
      <Header />
      <Backdrop />
      <Drops jsonDataUrl="./src/assets/data.json" />
      <Links />
      <Copywrite />
    </>
  );
}

function PageTwo() {
  return (
    <>
      <Header />
      <ItemGallery jsonDataUrl="./src/assets/gallery.json" />
      <Copywrite />
    </>
  );
}

function PageThree() {
  const location = useLocation();
  const {
    images = [],
    productName = "Item",
    price = 0,
    inStock = false,
  } = location.state || {};

  return (
    <>
      <Header />
      <div className="relative p-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <ImageCarousel images={images} />
          </div>
          <InfoCard title={productName} price={price} inStock={inStock} />
        </div>
      </div>
      <Copywrite />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/page2" element={<PageTwo />} />
        <Route path="/page3" element={<PageThree />} />
      </Routes>
    </Router>
  );
}

export default App;
