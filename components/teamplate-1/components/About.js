import { Box, Flex } from "@chakra-ui/react";
import React from "react";

export const About = ({ data }) => {
  return (
    <Flex
      id="about"
      w="100%"
      padding={{ base: "30px", md: "70px", lg: "100px" }}
      flexDirection="column"
      gap="20px"
      zIndex="1"
      position="relative"
    >
      <Box
        textAlign="start"
        w="100%"
        fontWeight="semibold"
        fontSize={{ base: "40px", md: "90px", lg: "120px" }}
      >
        About
      </Box>
      <Box
        lineHeight="1.3"
        textAlign="start"
        paddingBottom="30px"
        w={{ base: "100%", md: "70%", lg: "80%" }}
        maxW="800px"
        fontSize="16px"
      >
        <h2>{data.data.about}</h2>
      </Box>
    </Flex>
  );
};
