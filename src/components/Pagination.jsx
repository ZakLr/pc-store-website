import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Button, Flex } from "@chakra-ui/react";

const Pagination = ({ currentPage, totalPages, setCurrentPage, topRef }) => {
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);

    if (topRef?.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Button
          key={i}
          onClick={() => handlePageChange(i)}
          size={{ base: "sm", md: "md" }}
          px={4}
          py={2}
          mx={1}
          bg={i === currentPage ? "yellow.700" : "transparent"}
          color={i === currentPage ? "white" : ""}
          variant={i === currentPage ? "solid" : "outline"}
          borderColor={i === currentPage ? "yellow.700" : "gray.200"}
          _hover={{ bg: "yellow.600", color: "white" }}
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  return (
    <Flex
      justify="center"
      align="center"
      wrap="wrap"
      gap={2}
      
      pb={5}
      ref={topRef}
    >
      <Button
        onClick={() => handlePageChange(currentPage - 1)}
        isDisabled={currentPage === 1}
        size={{ base: "sm", md: "md" }}
        px={3}
        py={2}
        bg={currentPage === 1 ? "gray.300" : "yellow.700"}
        color="white"
        variant="solid"
        _hover={currentPage !== 1 ? { bg: "yellow.600" } : {}}
      >
        <FaArrowLeft />
      </Button>

      {renderPageNumbers()}

      <Button
        onClick={() => handlePageChange(currentPage + 1)}
        isDisabled={currentPage === totalPages}
        size={{ base: "sm", md: "md" }}
        px={3}
        py={2}
        bg={currentPage === totalPages ? "gray.300" : "yellow.700"}
        color="white"
        variant="solid"
        _hover={currentPage !== totalPages ? { bg: "yellow.600" } : {}}
      >
        <FaArrowRight />
      </Button>
    </Flex>
  );
};

export default Pagination;
