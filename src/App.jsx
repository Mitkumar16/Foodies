
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HotDessert from "./components/HotDessert/HotDessert";
import Banner from "./components/Banner/Banner";
import PopularRecipe from "./components/PopularRecipe/PopularRecipe";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return (
    <div className="overflow-x-hidden bg-white2 text-dark">
      <div className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <HotDessert />
      <Banner />
      <PopularRecipe />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;