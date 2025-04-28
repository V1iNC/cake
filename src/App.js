import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Payment from './pages/Payment';
import Blog from './pages/Blog';
import Sales from './pages/Sales';
import Reviews from './pages/Reviews';
import ScrollToTop from './components/ScrollToTop';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

useEffect(() => {
  AOS.init({ duration: 1000, once: true });
}, []);

function App() {
  return (
    <Router>
    <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/cakes" element={<Catalog category="cakes" />} />
          <Route path="/catalog/pastries" element={<Catalog category="pastries" />} />
          <Route path="/catalog/baking" element={<Catalog category="baking" />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
