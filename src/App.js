import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import Join from "./components/Join/Join";
import PLans from "./components/Plans/PLans";
import Programs from "./components/Programs/Programs";
import Reasons from "./components/Reasons/Reasons";
import Testimonial from "./components/Testimonials/Testimonial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <PLans />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
