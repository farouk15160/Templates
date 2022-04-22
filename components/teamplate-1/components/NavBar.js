import { Box, Flex } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import HomeStyling from "./css/home.module.css";

export const NavBar = ({ navBar, setNavBar, data }) => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <Flex
        boxShadow={{
          base: "none",
          md: clientWindowHeight > 300 ? "0 0 63px 64px #f6f6f6" : "none",
        }}
        bg={{
          base: "#F6F6F6",
          md: clientWindowHeight > 300 ? "#f6f6f6" : "transparent",
        }}
        className={HomeStyling.example}
        w={{ base: "220px", md: "100%" }}
        h={{ base: "100vh", md: "auto" }}
        minH={{ base: "600px", md: "auto" }}
        transition="all 0.5s"
        left={{ base: navBar ? "0" : "-300px", md: "0" }}
        justifyContent="space-between"
        alignItems="center"
        overflow="scroll"
        position="fixed"
        flexDirection="column"
        zIndex="3"
        // padding="40px 0 20px 0"
        top="0"
        borderTopRightRadius="25px"
        borderBottomRightRadius="25px"
      >
        <Box
          display={{ base: "block", md: "none" }}
          padding="40px 0 20px 0"
          w="100px"
          h="160px"
        >
          <img
            src={data.data.logo.photo}
            alt="an image"
            style={{ width: "100%", height: "100%" }}
            className={HomeStyling.firstImageHome}
          />
        </Box>
        <Flex
          className={HomeStyling.navBar}
          fontSize={{ base: "14px", md: "16px", lg: "18px", "2xl": "22px" }}
          fontWeight="bold"
          w="90%"
          h={{ base: "450px", md: "auto" }}
          minH={{ base: "450px", md: "auto" }}
          margin={{ base: "50px auto 0 auto ", md: "0" }}
          padding="40px 20px 20px 20px"
          maxW="1050px"
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Box onClick={() => setNavBar(false)}>
            {" "}
            <a href="#home">HOME</a>{" "}
          </Box>
          <Box onClick={() => setNavBar(false)}>
            <a href="#about"> ABOUT</a>
          </Box>
          <Box onClick={() => setNavBar(false)}>
            <a href="#experience">EXPERIENCES</a>
          </Box>
          <Box onClick={() => setNavBar(false)}>
            <a href="#education">EDUCATION</a>
          </Box>
          <Box onClick={() => setNavBar(false)}>
            <a href="#skill">SKILLS</a>
          </Box>
          <Box onClick={() => setNavBar(false)}>
            <a href="#service">SERVICES</a>
          </Box>
          <Box onClick={() => setNavBar(false)}>
            <a href="#project">PROJECTS</a>
          </Box>
        </Flex>
        <Box
          textAlign="center"
          w="100%"
          padding="40px 10px"
          fontSize="12px"
          fontWeight="300"
          display={{ base: "block", md: "none" }}
        >
          Powered by <span style={{ fontWeight: "700" }}>ORKA</span> Bit
        </Box>
      </Flex>
    </>
  );
};
