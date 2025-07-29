import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { div } from "framer-motion/client";
import Navbar from "@/components/Navbar";
import ProductsList from "@/components/ProductsList";
import Footer from "@/components/Footer";

const Products = () => {


  return (
    <div>
      <Navbar />
      <ProductsList />
      <Footer />
    </div>
  );
};

export default Products;
