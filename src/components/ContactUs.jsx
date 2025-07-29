import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Link,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import { motion } from "framer-motion";

// Motion wrapper
const MotionBox = motion(Box);

export default function ContactUs() {
  return (
    <MotionBox
      py={{ base: 12, md: 16 }}
      px={{ base: 4, md: 8 }}
      mx="auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-background"
    >
      <Heading
        textAlign="center"
        mb={12}
        fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
        fontFamily="Playfair Display"
        color="gray.700"
      >
        Contactez-Nous
      </Heading>

      <Flex
        direction={{ base: "column", md: "row" }}
        gap={10}
        align="stretch"
        justify="center"
        w="full"
      >
        {/* Contact Info */}
        <VStack
          align="start"
          spacing={6}
          flex="1"
          bg="white"
          p={{ base: 6, md: 8 }}
          rounded="xl"
          shadow="md"
          border="1px solid"
          borderColor="gray.100"
        >
          <HStack align="start" spacing={4}>
            <Icon as={FaMapMarkerAlt} boxSize={5} color="gray.600" />
            <Text color="gray.700">123 Avenue, Algiers, Algeria</Text>
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaPhone} boxSize={5} color="gray.600" />
            <Link href="tel:+213123456789" color="blue.500">
              +213 123 456 789
            </Link>
          </HStack>

          <HStack spacing={4}>
            <Icon as={FaEnvelope} boxSize={5} color="gray.600" />
            <Link href="mailto:info@yourbrand.com" color="blue.500">
              info@yourbrand.com
            </Link>
          </HStack>

          {/* Social Icons */}
          <HStack spacing={6} pt={4}>
            <Link href="https://facebook.com" isExternal>
              <Icon
                as={FaFacebook}
                boxSize={6}
                color="gray.600"
                _hover={{ color: "blue.500" }}
              />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <Icon
                as={FaInstagram}
                boxSize={6}
                color="gray.600"
                _hover={{ color: "pink.400" }}
              />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <Icon
                as={FaTwitter}
                boxSize={6}
                color="gray.600"
                _hover={{ color: "twitter.500" }}
              />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon
                as={FaLinkedin}
                boxSize={6}
                color="gray.600"
                _hover={{ color: "linkedin.500" }}
              />
            </Link>
          </HStack>
        </VStack>

        {/* Google Map */}
        <Box
          flex="1"
          overflow="hidden"
          minH={{ base: "300px", sm: "600px", md: "100%" }}
          w="100%"
        >
          <Box
            as="iframe"
            borderRadius="xl"
            boxShadow={"md"}
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.804232055664!2d3.0596750149529944!3d36.75377887996419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad888f06255d%3A0x712385a85e1637b5!2sAlgiers!5e0!3m2!1sen!2sdz!4v1690000000000"
            width="100%"
            height="100%"
            border={0}
            loading="lazy"
            allowFullScreen
            style={{ display: "block" }}
          />
        </Box>
      </Flex>
    </MotionBox>
  );
}
