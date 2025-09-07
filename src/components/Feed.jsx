"use client";
import React, { useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Box,
  Heading,
  SimpleGrid,
  Link as ChakraLink,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Card from "./Card";
import { sampleComputersProducts } from "./sampleComputersProducts";

export default function Feed({ title, limit }) {
  const [products] = React.useState(sampleComputersProducts);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotate: -3, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.5,
      },
    },
    exit: { opacity: 0, y: -20, rotate: 3, transition: { duration: 0.3 } },
  };

  const hoverEffect = {
    scale: 1.03,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  };

  // Responsive heading font size
  const headingFontSize = useBreakpointValue({
    base: "2xl",
    sm: "3xl",
    md: "4xl",
    lg: "5xl",
  });

  const linkFontSize = useBreakpointValue({
    base: "md",
    sm: "lg",
    md: "xl",
  });

  return (
    <motion.div
      style={{ width: "100%" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-background-secondary"
    >
      <Box
        px={{ base: 4, sm: 6, md: 8 }}
        py={{ base: 10, sm: 12, md: 16 }}
        maxW="7xl"
        mx="auto"
        w="full"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <VStack
            spacing={4}
            align={{ base: "center", md: "stretch" }}
            mb={{ base: 8, md: 12 }}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading
              fontFamily="Montserrat, sans-serif"
              fontSize={headingFontSize}
              fontWeight="bold"
              className="text-accent"
            >
              {title}
            </Heading>
            <ChakraLink
              as={Link}
              to="/collection"
              fontSize={linkFontSize}
              fontWeight="semibold"
              _hover={{ textDecoration: "underline" }}
              className="!text-white"
              fontFamily="Inter, sans-serif"
            >
              Voir la collection PC →
            </ChakraLink>
          </VStack>
        </motion.div>

        {/* Product Grid */}
        <Box ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <SimpleGrid
              columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
              spacing={{ base: 4, sm: 6, lg: 8 }}
            >
              <AnimatePresence>
                {products.slice(0, limit).map((product) => (
                  <motion.div
                    key={product.id}
                    variants={cardVariants}
                    whileHover={hoverEffect}
                    layout
                    style={{
                      borderRadius: "12px",
                      overflow: "hidden",

                      padding: "1rem",
                    }}
                  >
                    <Card product={product} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </SimpleGrid>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}
