import React, { useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  Grid,
  useBreakpointValue,
} from "@chakra-ui/react";
import Card from "./Card";
import Loader from "./Loader";
import Pagination from "./Pagination";
import Filters from "./Filters";

import { sampleComputersProducts } from "./sampleComputersProducts";

const ProductsList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [category, setCategory] = useState("");
  const [priceSort, setPriceSort] = useState("");
  const [availability, setAvailability] = useState("");
  const [year, setYear] = useState("");
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const topRef = useRef(null);

  // Move useBreakpointValue calls here to ensure consistent hook execution
  const popupPadding = useBreakpointValue({ base: "1.5rem", sm: "2rem" });
  const popupMaxWidth = useBreakpointValue({ base: "md", sm: "lg" });

  const currentPage = parseInt(searchParams.get("page") || "1");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  const fetchStaticProducts = () => {
    setIsLoading(true);
    let filteredProducts = [...sampleComputersProducts];
    if (category)
      filteredProducts = filteredProducts.filter(
        (p) => p.category === category.toLowerCase()
      );
    if (availability)
      filteredProducts = filteredProducts.filter(
        (p) => p.stockStatus === availability
      );
    if (year)
      filteredProducts = filteredProducts.filter(
        (p) => p.year === parseInt(year)
      );
    if (priceSort === "asc") filteredProducts.sort((a, b) => a.price - b.price);
    else if (priceSort === "desc")
      filteredProducts.sort((a, b) => b.price - a.price);
    const itemsPerPage = 8;
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedProducts = filteredProducts.slice(
      startIndex,
      startIndex + itemsPerPage
    );
    setProducts(paginatedProducts);
    setTotalProducts(filteredProducts.length);
    setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
    setIsLoading(false);
  };

  useEffect(() => {
    fetchStaticProducts();
  }, [currentPage, category, priceSort, availability, year]);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({
      page: "1",
      category,
      priceSort,
      availability,
      year,
    });
    setIsPopupOpen(false);
  };

  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } },
  };
  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.15)",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  return (
    <Box minH="100vh" bg="var(--color-background)">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Box textAlign="center" fontSize="lg" color="red.600" py={16}>
          Erreur, réessayez plus tard
        </Box>
      ) : (
        <>
          <motion.header
            variants={bgVariants}
            initial="hidden"
            animate="visible"
          >
            <Box
              px={{ base: 4, sm: 6, lg: 12 }}
              py={{ base: 20, sm: 24 }}
              position="relative"
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1600')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundBlendMode: "overlay",
                minHeight: "70vh",
                display: "flex",
                alignItems: "center",
              }}
              className="bg-black/40"
            >
              <Box
                position="absolute"
                inset={0}
                bg="blackAlpha.600"
                zIndex={0}
              />
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-6xl mx-auto text-center"
              >
                <Box
                  position="relative"
                  zIndex={1}
                  w={"full"}
                  mx="auto"
                  textAlign={{ base: "center", sm: "left" }}
                >
                  <motion.div variants={itemVariants}>
                    <Heading
                      fontSize={{ base: "4xl", sm: "5xl", lg: "6xl" }}
                      fontWeight="bold"
                      className="text-yellow-500/80"
                      fontFamily="var(--font-playfair)"
                    >
                      Ordinateurs & Portables
                    </Heading>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Text
                      mt={4}
                      fontSize={{ base: "lg", sm: "xl" }}
                      color="gray.200"
                    >
                      Découvrez nos PC, laptops, écrans, composants et
                      accessoires.
                    </Text>
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <Flex
                      mt={8}
                      direction={{ base: "column", sm: "row" }}
                      justify="space-between"
                      align="center"
                      w={"full"}
                      gap={{ base: 4, sm: 6 }}
                    >
                      <motion.button
                        variants={buttonVariants}
                        whileHover="hover"
                      >
                        <Button
                          w={{ base: "full", sm: "auto" }}
                          px={6}
                          py={3}
                          className="bg-accent text-primary"
                          rounded="lg"
                          fontWeight="medium"
                          fontSize={{ base: "sm", sm: "md" }}
                          boxShadow="md"
                          onClick={togglePopup}
                        >
                          Filtres{" "}
                          <Box as="span" ml={2}>
                            ▼
                          </Box>
                        </Button>
                      </motion.button>
                      <Text
                        fontSize={{ base: "sm", sm: "md" }}
                        color="white"
                        fontWeight="medium"
                      >
                        Articles: {Math.min(currentPage * 8, totalProducts)} /{" "}
                        {totalProducts}
                      </Text>
                    </Flex>
                  </motion.div>
                </Box>
              </motion.div>
            </Box>
          </motion.header>

          {isPopupOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                position: "fixed",
                inset: 0,
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "1rem",
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                style={{
                  backgroundColor: "var(--color-background)",
                  padding: popupPadding,
                  borderRadius: "1rem",
                  boxShadow: "var(--color-shadow)",
                  width: "100%",
                  maxWidth: popupMaxWidth,
                  position: "relative",
                  maxHeight: "90vh",
                  overflowY: "auto",
                }}
              >
                <Button
                  onClick={togglePopup}
                  position="absolute"
                  top={4}
                  right={4}
                  variant="ghost"
                  fontSize="2xl"
                  color="var(--color-text)"
                  _hover={{ color: "var(--color-accent)" }}
                >
                  ×
                </Button>
                <Heading
                  fontSize={{ base: "2xl", sm: "3xl" }}
                  mb={6}
                  fontWeight="semibold"
                  color="var(--color-text)"
                  fontFamily="var(--font-playfair)"
                >
                  Affiner Votre Sélection
                </Heading>
                <form onSubmit={handleSubmit}>
                  <Filters
                    year={year}
                    setYear={setYear}
                    category={category}
                    setCategory={setCategory}
                    priceSort={priceSort}
                    setPriceSort={setPriceSort}
                    availability={availability}
                    setAvailability={setAvailability}
                  />
                  <Button
                    type="submit"
                    w="full"
                    mt={6}
                    px={6}
                    py={3}
                    bg="var(--color-accent)"
                    color="var(--color-primary)"
                    rounded="lg"
                    fontWeight="medium"
                    fontSize={{ base: "sm", sm: "md" }}
                    _hover={{ bg: "var(--color-accent)", opacity: 0.9 }}
                  >
                    Appliquer les Filtres
                  </Button>
                </form>
              </motion.div>
            </motion.div>
          )}

          <Box
            mx="auto"
            px={{ base: 4, sm: 6 }}
            py={{ base: 12, sm: 16 }}
            className="bg-primary"
          >
            {products.length === 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Text
                  textAlign="center"
                  fontSize={{ base: "lg", sm: "xl" }}
                  color="var(--color-text)"
                  py={16}
                >
                  Aucun article trouvé
                </Text>
              </motion.div>
            ) : (
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.15 },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                <Grid
                  templateColumns={{
                    base: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                  }}
                  gap={{ base: 4, sm: 8 }}
                >
                  {products.map((product) => (
                    <Card key={product.id} product={product} />
                  ))}
                </Grid>
              </motion.div>
            )}
          </Box>

          <Box mx="auto" px={{ base: 4, sm: 6 }} className="bg-primary">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={(page) =>
                setSearchParams({
                  page: page.toString(),
                  category,
                  priceSort,
                  availability,
                  year,
                })
              }
              totalPages={totalPages}
              topRef={topRef}
            />
          </Box>
        </>
      )}
    </Box>
  );
};

export default ProductsList;
