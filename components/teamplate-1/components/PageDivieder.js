import { Box } from "@chakra-ui/react";
import React from "react";

export const PageDivieder = () => {
  return (
    <Box
      position="relative"
      zIndex="2"
      w="100%"
      h={{ base: "14px", md: "30px" }}
      boxShadow="inset 0 3px 6px 0px rgba(0,0,0,0.16)"
    ></Box>
  );
};
