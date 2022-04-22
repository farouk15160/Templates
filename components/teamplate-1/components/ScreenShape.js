import { Box, Image } from "@chakra-ui/react";
import React from "react";
import ImageBg from "../../../public/templat-1/Rectangle 46.png";
import HomeStyling from "./css/home.module.css";

const ScreenShape = () => {
  return (
    <Box
      className={HomeStyling.example}
      bg="#F2F2F2"
      transform={{ base: "rotate(20deg)", md: "rotate(30deg)" }}
      position="absolute"
      top="0"
      w={{ base: "300px", md: "500px", lg: "809px" }}
      left={{ base: "-300px", md: "0px" }}
      zIndex="1"
      h={{ base: "3300px", md: "3800px", lg: "4500px" }}
    >
      <Image w="100%" h="100%" scr={ImageBg} alt="image" />
    </Box>
  );
};

export default ScreenShape;

export const ScreenShapeTWO = () => {
  return (
    <Box
      className={HomeStyling.example}
      bg="#F2F2F2"
      transform={{ base: "rotate(20deg)", md: "rotate(30deg)" }}
      position="absolute"
      w={{ base: "300px", md: "500px", lg: "809px" }}
      top={{ base: "111vh", md: "70vh", lg: "-80vh" }}
      right={{ base: "0px", md: "0px", lg: "-400px" }}
      zIndex="1"
      h={{ base: "3000px", md: "4800px", lg: "7000px" }}
    >
      <Image w="100%" h="100%" scr={ImageBg} alt="img" />
    </Box>
  );
};
