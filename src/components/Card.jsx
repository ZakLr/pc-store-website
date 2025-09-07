import React from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Image,
  Text,
  Button,
  VStack,
  Badge,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";

const Card = ({ product }) => {
  const imageHeight = useBreakpointValue({
    base: "180px",
    sm: "220px",
    md: "260px",
    lg: "280px",
  });

  const imageFit = useBreakpointValue({
    base: "cover",
    sm: "cover",
  });

  const cardPadding = useBreakpointValue({
    base: 2,
    sm: 3,
    md: 4,
  });

  const cardMaxW = useBreakpointValue({
    base: "100%",
    sm: "90%",
    md: "100%",
  });

  return (
    <Box
      className="bg-white"
      borderRadius="xl"
      shadow="md"
      borderWidth="1px"
      borderColor="gray.200"
      overflow="hidden"
      p={cardPadding}
      w="100%"
      maxW={cardMaxW}
      mx="auto"
      transition="transform 0.2s"
      _hover={{ transform: "scale(1.01)", boxShadow: "lg" }}
    >
      <Stack
        direction="column"
        spacing={4}
        align="start"
        justify="flex-start"
        w="full"
      >
        <Image
          src={product.imageUrl}
          alt={product.name}
          w="100%"
          h={imageHeight}
          minH={80}
          objectFit={imageFit}
          borderRadius="md"
          className="bg-background"
        />

        <VStack align="start" spacing={2} w="full">
          <Text
            fontSize={{ base: "md", sm: "lg", md: "xl" }}
            fontWeight="semibold"
            color="gray.800"
            fontFamily="Poppins, sans-serif"
          >
            {product.name}
          </Text>

          <Text
            fontSize={{ base: "sm", sm: "md" }}
            color="gray.700"
            fontFamily="Roboto, sans-serif"
            fontWeight="500"
          >
            {(product.price / 100).toFixed(2)} DZD
          </Text>

          <Badge
            colorScheme={product.stockStatus === "in-stock" ? "green" : "red"}
            borderRadius="full"
            px={2}
            py={1}
            fontSize="xs"
          >
            {product.stockStatus === "in-stock" ? "In Stock" : "Out of Stock"}
          </Badge>

          <Button
            as={Link}
            to={`/product/${product.id}`}
            className="bg-accent !text-primary"
            size="sm"
            w="full"
            fontSize={{ base: "sm", md: "md" }}
            _hover={{ bg: "#63b3ed", color: "#0f1419" }}
          >
            View Details
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Card;
