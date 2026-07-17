import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Offers from "./components/Offers/Offers";
import Testimonials from "./components/Testimonials/Testimonials";
import Newsletter from "./components/Newsletter/Newsletter";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Offers />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;