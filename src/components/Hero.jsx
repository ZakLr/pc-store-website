import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";

const Hero = () => {
  const navigate = useNavigate();

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 0.95,
      scale: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <motion.div
      variants={bgVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen  bg-slate-800 px-4 sm:px-6 lg:px-8 w-full"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box position="absolute" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        as={Flex}
        bg="whiteAlpha.900"
        borderRadius="3xl"
        boxShadow="2xl"
        borderWidth="1px"
        borderColor="gray.200"
        maxW="4xl"
        mx="auto"
        py={{ base: 12, sm: 16, lg: 20 }}
        px={{ base: 6, sm: 8, lg: 12 }}
        position="relative"
        zIndex={10}
        align="center"
        justify="center"
      >
        <Box textAlign="center">
          <motion.div variants={textVariants}>
            <Heading
              as="h1"
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              fontWeight="bold"
              lineHeight="1"
              fontFamily="Playfair Display, serif"
              textAlign={{ base: "center", sm: "center" }}
              className="text-white"
            >
              Bienvenue chez <br /> L&apos;Élégance Intemporelle
            </Heading>
          </motion.div>
          <motion.div variants={textVariants}>
            <Text
              mt={{ base: 4, sm: 6 }}
              fontSize={{ base: "base", sm: "base", lg: "lg" }}
              lineHeight="2"
              maxW="2xl"
              mx="auto"
              className="text-secondary"
            >
              Découvrez une collection raffinée de vêtements classiques, conçus
              avec une sophistication héritée et un artisanat d’exception.
            </Text>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            mt={{ base: 6, sm: 8 }}
            mx="auto"
            maxW="96"
            display="grid"
            placeItems="center"
          >
            <button
              as="button"
              onClick={() => navigate("/products")}
              style={{ fontSize: "1.2rem", padding: "0.75rem 1.5rem", fontWeight: "600", color: "white", backgroundColor: "#A68A64", borderRadius: "0.5rem", border: "none", cursor: "pointer" }}
              
            >
              Explorer l’Héritage
            </button>
          </motion.div>
        </Box>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
