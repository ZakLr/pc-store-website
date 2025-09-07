import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Amine Boudiaf",
    role: "Amateur de Mode Classique",
    imgSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    link: "https://twitter.com/amineboudiaf/status/1234567890",
    icon: "fab fa-twitter",
    feedback:
      "La qualité des vêtements est exceptionnelle. Mon pardessus en tweed ajoute une touche d’élégance intemporelle à ma garde-robe. Je recommande vivement !",
  },
  {
    name: "Lamia Cherifi",
    role: "Consultante en Style",
    imgSrc: "https://randomuser.me/api/portraits/women/45.jpg",
    link: "https://www.instagram.com/p/1234567890",
    icon: "fab fa-instagram",
    feedback:
      "J’adore les options de personnalisation ! J’ai choisi un blazer bleu ardoise qui s’accorde parfaitement à mon style. Les finitions sont irréprochables.",
  },
  {
    name: "Karim Hadjadj",
    role: "Entrepreneur",
    imgSrc: "https://randomuser.me/api/portraits/men/67.jpg",
    link: "https://www.facebook.com/karimhadjadj/posts/1234567890",
    icon: "fab fa-facebook",
    feedback:
      "Ces vêtements sont parfaits pour une allure distinguée. La veste en velours offre un confort et une sophistication sans égal. Un vrai bijou !",
  },
  {
    name: "Sofia Belkacem",
    role: "Artisane de Mode",
    imgSrc: "https://randomuser.me/api/portraits/women/89.jpg",
    link: "https://twitter.com/sofiabelkacem/status/1234567890",
    icon: "fab fa-twitter",
    feedback:
      "L’élégance des matières comme le cachemire et la soie est impressionnante. Ma robe d’été en lin rehausse instantanément mon allure.",
  },
];

export default function Reviews() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 180, damping: 20 },
    },
    hover: {
      scale: 1.05,
      boxShadow: "lg",
      transition: { type: "spring", stiffness: 300, damping: 20 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0, rotate: -90 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 250, damping: 15 },
    },
    hover: { scale: 1.15, transition: { duration: 0.3 } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardBg = "rgba(255, 255, 255, 0.85)";

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3861962/pexels-photo-3861962.jpeg?auto=compress&cs=tinysrgb&w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
      className="bg-slate-900"
    >
      <Box
        bgGradient="linear(to-b, rgba(0,0,0,0.7), rgba(0,0,0,0.9))"
        py={{ base: 16, md: 20 }}
        px={{ base: 6, md: 12 }}
      >
        <Box maxW="7xl" mx="auto">
          <motion.div
            variants={textVariants}
            as={VStack}
            textAlign="center"
            mb={12}
          >
            <Heading
              as="h2"
              fontSize={{ base: "3xl", sm: "4xl", lg: "5xl" }}
              fontWeight="bold"
              className="text-accent"
              fontFamily="Montserrat, sans-serif"
            >
              Avis de Nos Clients
            </Heading>
            <Text
              mt={3}
              fontSize="lg"
              className="text-white"
              fontFamily="Inter, sans-serif"
            >
              La puissance et la fiabilité, validées par nos clients.
            </Text>
          </motion.div>

          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={16}>
            <AnimatePresence>
              {reviews.map((review) => (
                <motion.div
                  key={review.name}
                  variants={cardVariants}
                  whileHover="hover"
                  style={{ padding: "1rem" }}
                >
                  <Box
                    bg={cardBg}
                    backdropFilter="blur(10px)"
                    p={6}
                    borderRadius="xl"
                    border="1px solid"
                    borderColor="gray.300"
                    minH="100%"
                    display="flex"
                    flexDirection="column"
                    transition="all 0.3s"
                  >
                    <Flex align="center" gap={4} mb={4}>
                      <motion.div variants={imageVariants} whileHover="hover">
                        <Image
                          src={review.imgSrc}
                          alt={`${review.name} avatar`}
                          boxSize="16"
                          borderRadius="full"
                          border="2px solid"
                          borderColor="#A68A64"
                        />
                      </motion.div>
                      <VStack align="start" spacing={0}>
                        <Heading
                          as="h6"
                          fontSize="lg"
                          color="gray.800"
                          fontFamily="Poppins, sans-serif"
                        >
                          {review.name}
                        </Heading>
                        <Text
                          fontSize="sm"
                          color="gray.500"
                          fontFamily="Inter, sans-serif"
                        >
                          {review.role}
                        </Text>
                      </VStack>
                      <Box
                        as={Link}
                        to={review.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        ml="auto"
                        color="#A68A64"
                        fontSize="xl"
                        _hover={{ color: "#8B6F47" }}
                      >
                        <i className={review.icon}></i>
                      </Box>
                    </Flex>

                    <Text
                      fontSize="sm"
                      color="gray.700"
                      fontStyle="italic"
                      mt={2}
                      fontFamily="Lato, sans-serif"
                    >
                      "{review.feedback}"
                    </Text>
                  </Box>
                </motion.div>
              ))}
            </AnimatePresence>
          </SimpleGrid>
        </Box>
      </Box>
    </motion.section>
  );
}
