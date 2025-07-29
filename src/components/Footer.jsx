import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Link as ChakraLink,
  Image,
  SimpleGrid,
  useBreakpointValue,
} from "@chakra-ui/react";

const Footer = () => {
  const bgVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -45 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 200, damping: 15 },
    },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      variants={bgVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full bg-slate-900 text-white"
    >
      <Box
        maxW="7xl"
        mx="auto"
        px={{ base: 6, md: 10 }}
        py={{ base: 16, md: 20 }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={12}>
            {/* Branding */}
            <motion.div variants={itemVariants}>
              <Box textAlign={{ base: "center", lg: "left" }}>
                <Heading
                  as="h3"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="bold"
                  color="#A68A64"
                  fontFamily="Playfair Display, serif"
                >
                  L&apos;Élégance Intemporelle
                </Heading>
                <Text
                  mt={4}
                  fontSize={{ base: "sm", md: "md" }}
                  color="gray.400"
                >
                  Un héritage de raffinement, tissé dans chaque fil de nos
                  créations.
                </Text>
              </Box>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants}>
              <Box textAlign={{ base: "center", lg: "left" }}>
                <Heading
                  as="h4"
                  fontSize="xl"
                  fontWeight="semibold"
                  color="#A68A64"
                  fontFamily="Playfair Display, serif"
                  mb={4}
                >
                  Explorer
                </Heading>
                <VStack
                  as="nav"
                  spacing={2}
                  align={{ base: "center", lg: "start" }}
                  color="gray.400"
                >
                  {[
                    { to: "/collection", text: "Collection" },
                    { to: "/about", text: "Notre Héritage" },
                    { to: "/services", text: "Services sur Mesure" },
                    { to: "/gallery", text: "Galerie d’Artisanat" },
                    { to: "/contact", text: "Nous Contacter" },
                  ].map((link) => (
                    <ChakraLink
                      key={link.text}
                      as={Link}
                      to={link.to}
                      fontSize="sm"
                      _hover={{ color: "#A68A64", textDecoration: "none" }}
                    >
                      {link.text}
                    </ChakraLink>
                  ))}
                </VStack>
              </Box>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <Box textAlign={{ base: "center", lg: "left" }}>
                <Heading
                  as="h4"
                  fontSize="xl"
                  fontWeight="semibold"
                  color="#A68A64"
                  fontFamily="Playfair Display, serif"
                  mb={4}
                >
                  Nous Trouver
                </Heading>
                <VStack
                  spacing={2}
                  color="gray.400"
                  fontSize="sm"
                  align={{ base: "center", lg: "start" }}
                >
                  <Text>123 Rue du Luxe, Alger, Algérie</Text>
                  <Text>Tél: +213 123 456 789</Text>
                  <Text>Email: contact@elegance-intemporelle.dz</Text>
                  <ChakraLink
                    as={Link}
                    to="/stores"
                    color="#A68A64"
                    mt={2}
                    _hover={{ color: "#8B6F47", textDecoration: "none" }}
                  >
                    Localiser Nos Boutiques
                  </ChakraLink>
                </VStack>
              </Box>
            </motion.div>

            {/* Social Media */}
            <motion.div variants={itemVariants}>
              <Flex
                direction="column"
                align="center"
                justify="center"
                textAlign="center"
              >
                <Flex justify="center" gap={6} mb={4} wrap="wrap">
                  {[
                    {
                      to: "https://facebook.com",
                      src: "https://img.icons8.com/fluent/30/ffffff/facebook-new.png",
                    },
                    {
                      to: "https://linkedin.com",
                      src: "https://img.icons8.com/fluent/30/ffffff/linkedin-2.png",
                    },
                    {
                      to: "https://instagram.com",
                      src: "https://img.icons8.com/fluent/30/ffffff/instagram-new.png",
                    },
                    {
                      to: "https://twitter.com",
                      src: "https://img.icons8.com/fluent/30/ffffff/twitter.png",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.to}
                      href={social.to}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={iconVariants}
                      whileHover="hover"
                    >
                      <Image
                        src={social.src}
                        alt="Social Icon"
                        boxSize={{ base: "8", sm: "9" }}
                      />
                    </motion.a>
                  ))}
                </Flex>
                <Text
                  fontSize="xs"
                  color="gray.400"
                  fontWeight="medium"
                  maxW="full"
                >
                  © {new Date().getFullYear()} L’Élégance Intemporelle. Tous
                  droits réservés.
                </Text>
              </Flex>
            </motion.div>
          </SimpleGrid>
        </motion.div>
      </Box>
    </motion.footer>
  );
};

export default Footer;
