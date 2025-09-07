import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react";
import {
  MdChevronLeft,
  MdChevronRight,
  MdPlayArrow,
  MdPause,
} from "react-icons/md";
import { sampleComputersProducts } from "./sampleComputersProducts";

const Hero = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const featuredProducts = sampleComputersProducts.slice(0, 5); // Get first 5 products for carousel
  const carouselRef = useRef(null);

  // Auto-slide functionality with pause on hover
  useEffect(() => {
    if (isPaused || isHovered) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featuredProducts.length, isPaused, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length
    );
  };

  // Touch/swipe handlers for mobile
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 1.5, ease: "easeInOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
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
      className="relative min-h-[80vh] md:min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden !pt-[200px] !pb-20 !px-10"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <Box className="relative z-10 pt-16 md:pt-20 pb-8 md:pb-12 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center max-w-7xl mx-auto">
            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left order-1"
            >
              <motion.div variants={textVariants}>
                <Badge
                  colorScheme="blue"
                  variant="subtle"
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize={{ base: "xs", md: "sm" }}
                  mb={4}
                  className="inline-block"
                >
                  🚀 New Arrivals Available
                </Badge>
              </motion.div>

              <motion.div variants={textVariants}>
                <Heading
                  as="h1"
                  fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
                  fontWeight="bold"
                  lineHeight="1.1"
                  fontFamily="Playfair Display, serif"
                  className="text-white mb-4 md:mb-6"
                >
                  Premium PCs &
                  <span className="text-blue-400 block">Gaming Gear</span>
                </Heading>
              </motion.div>

              <motion.div variants={textVariants}>
                <Text
                  fontSize={{ base: "md", sm: "lg", md: "xl" }}
                  lineHeight="1.6"
                  className="text-gray-300 mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0"
                  fontFamily="Inter, sans-serif"
                >
                  Discover cutting-edge technology with our curated collection
                  of laptops, desktops, and gaming accessories. Built for
                  performance, designed for you.
                </Text>
              </motion.div>

              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start !pt-4"
              >
                <Button
                  size={{ base: "sm", md: "md", lg: "lg" }}
                  bg="blue.500"
                  color="white"
                  _hover={{ bg: "blue.600" }}
                  px={{ base: 6, md: 8, lg: 10 }}
                  py={{ base: 4, md: 5, lg: 6 }}
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  fontWeight="semibold"
                  borderRadius="full"
                  onClick={() => navigate("/products")}
                  className="shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Shop Now
                </Button>
                <Button
                  size={{ base: "sm", md: "md", lg: "lg" }}
                  variant="outline"
                  borderColor="blue.400"
                  color="blue.400"
                  _hover={{ bg: "blue.400", color: "white" }}
                  px={{ base: 6, md: 8, lg: 10 }}
                  py={{ base: 4, md: 5, lg: 6 }}
                  fontSize={{ base: "md", md: "lg", lg: "xl" }}
                  fontWeight="semibold"
                  borderRadius="full"
                  onClick={() => navigate("/about")}
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Product Carousel */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="relative order-2"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                ref={carouselRef}
                className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl md:rounded-2xl lg:rounded-3xl shadow-xl md:shadow-2xl mx-auto max-w-sm md:max-w-md lg:max-w-none"
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={featuredProducts[currentSlide].imageUrl}
                      alt={featuredProducts[currentSlide].name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Product Info Overlay */}
                    <div className="absolute bottom-3 left-3 right-3 md:bottom-6 md:left-6 md:right-6 text-white">
                      <VStack align="start" spacing={1} md:spacing={2}>
                        <Badge
                          colorScheme="green"
                          variant="solid"
                          fontSize={{ base: "xs", md: "sm" }}
                          px={2}
                          py={1}
                          borderRadius="full"
                        >
                          {featuredProducts[currentSlide].stockStatus ===
                          "in-stock"
                            ? "In Stock"
                            : "Out of Stock"}
                        </Badge>
                        <Heading
                          size={{ base: "sm", md: "md", lg: "lg" }}
                          fontWeight="bold"
                          className="text-white leading-tight"
                          fontFamily="Poppins, sans-serif"
                        >
                          {featuredProducts[currentSlide].name}
                        </Heading>
                        <Text
                          fontSize={{ base: "xs", md: "sm" }}
                          className="text-gray-200 line-clamp-2 leading-relaxed"
                          fontFamily="Inter, sans-serif"
                        >
                          {featuredProducts[currentSlide].description}
                        </Text>
                        <Text
                          fontSize={{ base: "lg", md: "xl" }}
                          fontWeight="bold"
                          className="text-blue-400"
                          fontFamily="Orbitron, monospace"
                        >
                          {(
                            (featuredProducts[currentSlide].price || 0) / 100
                          ).toFixed(2)}{" "}
                          DZD
                        </Text>
                      </VStack>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={prevSlide}
                  className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-2 md:p-3 transition-all duration-300 border border-white/20"
                >
                  <MdChevronLeft size={16} md:size={20} color="white" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={nextSlide}
                  className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-2 md:p-3 transition-all duration-300 border border-white/20"
                >
                  <MdChevronRight size={16} md:size={20} color="white" />
                </motion.button>

                {/* Pause/Play Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPaused(!isPaused)}
                  className="absolute top-3 right-3 bg-white/10 backdrop-blur-md hover:bg-white/20 rounded-full p-2 transition-all duration-300 border border-white/20"
                >
                  {isPaused ? (
                    <MdPlayArrow size={14} color="white" />
                  ) : (
                    <MdPause size={14} color="white" />
                  )}
                </motion.button>

                {/* Progress Bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                  <motion.div
                    className="h-full bg-blue-400"
                    initial={{ width: "0%" }}
                    animate={{
                      width: `${
                        ((currentSlide + 1) / featuredProducts.length) * 100
                      }%`,
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {featuredProducts.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide
                          ? "bg-blue-400 shadow-lg"
                          : "bg-white/40 hover:bg-white/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Box>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-1.5 animate-pulse"></div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
