import React from "react";
import {
  FaShippingFast,
  FaDollarSign,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import {
  Box,
  Grid,
  Heading,
  Text,
  useBreakpointValue,
  VStack,
  chakra,
} from "@chakra-ui/react";

// Chakra-wrapped motion div
const MotionBox = chakra(motion.div);

export default function AddedValues() {
  const values = [
    {
      title: "Fast Delivery",
      description: "Express shipping on PCs, laptops, and accessories.",
      icon: <FaShippingFast size={40} />,
    },
    {
      title: "Best Prices",
      description: "Competitive tech deals with transparent pricing.",
      icon: <FaDollarSign size={40} />,
    },
    {
      title: "Expert Support",
      description: "Guidance for builds, upgrades, and troubleshooting.",
      icon: <FaHeadset size={40} />,
    },
    {
      title: "Secure Warranty",
      description: "Safe checkout and manufacturer-backed warranty.",
      icon: <FaShieldAlt size={40} />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  const gridCols = useBreakpointValue({
    base: 1,
    sm: 2,
    md: 2,
    lg: 4,
  });

  const headingSize = useBreakpointValue({
    base: "xl",
    sm: "2xl",
    md: "3xl",
  });

  return (
    <MotionBox
      bg="gray.50"
      py={{ base: 8, sm: 10, md: 16 }}
      px={{ base: 4, sm: 6, md: 10 }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      w="full"
      display="flex"
      justifyContent="center"
    >
      <Box maxW="6xl" w="full">
        <MotionBox
          variants={cardVariants}
          mb={{ base: 8, sm: 12 }}
          px={{ base: 2, sm: 4 }}
        >
          <Heading
            textAlign="center"
            className="text-primary"
            fontFamily="Montserrat, sans-serif"
            fontSize={headingSize}
            mb={4}
          >
            Nos Avantages Tech
          </Heading>
        </MotionBox>

        <Grid
          templateColumns={`repeat(${gridCols}, 1fr)`}
          gap={{ base: 6, sm: 8 }}
        >
          {values.map((value) => (
            <MotionBox
              key={value.title}
              bg="white"
              p={{ base: 5, sm: 6 }}
              borderRadius="2xl"
              shadow="md"
              whileHover="hover"
              variants={cardVariants}
              textAlign="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
              transition="all 0.3s"
            >
              <MotionBox
                className="text-primary"
                mb={4}
                variants={iconVariants}
                whileHover="hover"
              >
                {value.icon}
              </MotionBox>
              <Text
                fontSize={{ base: "lg", sm: "xl" }}
                fontWeight="semibold"
                className="text-primary"
                mb={2}
                fontFamily="Poppins, sans-serif"
              >
                {value.title}
              </Text>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                color="gray.600"
                fontFamily="Inter, sans-serif"
              >
                {value.description}
              </Text>
            </MotionBox>
          ))}
        </Grid>
      </Box>
    </MotionBox>
  );
}
