import { div } from "framer-motion/client";
import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Reviews from "@/components/Reviews";
import Feed from "@/components/Feed";
import Footer from "@/components/Footer";
import AddedValues from "@/components/AddedValues";
import ContactUs from "@/components/ContactUs";

const Home = () => {
  return (
    <div className=" w-[100vw]  min-h-[100vh]" style={{paddingRight: "20px"}}>
        <Navbar />
        <Hero /> 
        <Feed title="Meilleures Ventes" limit={4} />
        <AddedValues />
        <Feed title="Derniers Produits" limit={4} />
        <Reviews />
        <ContactUs />
        <Footer />
    </div>
  );
};

export default Home;
