import React from "react";
import Navbar from "./components/common/Navbar";
import Heropage from "./components/heropage/Heropage";
import Products from "./components/products/Products";
import Testimonial from "./components/Testimonial/Testimonial";
import About from "./components/About/About";
import ContactsForm from "./components/ContactsForm/ContactsForm";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col overflow-x-hidden">
      
      {/* HERO (owns yellow background completely) */}
      <div className="bg-linear-to-b from-[#F0BB1D] to-[#EC4225]">
        <Navbar />
        <Heropage />
      </div>

      {/* WHITE CONTENT (starts AFTER hero) */}
      <div className="bg-white rounded-t-2xl -mt-6 overflow-hidden">
        <section id="products" className="scroll-mt-20">
          <Products />
        </section>

        <Testimonial />

        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        <section id="contact" className="scroll-mt-20">
          <ContactsForm />
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default App;
