import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

import FirstCircle from "../../../public/templat-1/Group 48.png";
import SecondCircle from "../../../public/templat-1/Group 51.png";
import HomeStyling from "./css/home.module.css";
import { COLORS } from "../TeamplateOne";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Home = ({ setNavBar, navBar, data }) => {
  // console.log(data.data.lastName)
  // console.log(data.data.logo.photo)
  return (
    <Flex
      id="home"
      w="100%"
      h={{ base: "50vh", md: "100vh" }}
      minH={{ base: "450px", md: "600px" }}
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      color={COLORS.black}
      padding="20px"
      zIndex="2"
      position="relative"
      bg="#F6F6F6"
    >
      <Box
        onClick={() => setNavBar(!navBar)}
        fontSize="20px"
        padding="5px"
        position="fixed"
        zIndex="2"
        top="20px"
        right="20px"
        display={{ base: "block", md: "none" }}
      >
        <FontAwesomeIcon icon={faBars} />
      </Box>
      <Box
        w={{ base: "57px", md: "100px", lg: "208px" }}
        h={{ base: "57px", md: "100px", lg: "208px" }}
        position="absolute"
        top="0"
        left="0"
      >
        <Image
          priority
          src={FirstCircle}
          width={208}
          height={208}
          alt="image"
        />
      </Box>
      <Box
        w={{ base: "130px", md: "320px", lg: "390px" }}
        position="absolute"
        top="100px"
        right="0"
        transform="translateX(50%)"
      >
        <Image
          priority
          src={SecondCircle}
          alt="iamge -2"
          width={390}
          height={798}
        />
      </Box>
      <Flex
        paddingRight={{ base: "50px", md: "100px" }}
        gap="40px"
        paddingLeft={{ base: "0", md: "50px", lg: "150px" }}
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          maxW="500px"
          w="90%"
          flexDirection="column"
          position="relative"
          alignItems={{ base: "center", md: "flex-start" }}
        >
          <Flex
            flexDirection="column"
            fontSize={{ base: "57px", md: "150px", xl: "199px" }}
            wordBreak="break-word"
            opacity="0.05"
            position="absolute"
            fontWeight="semibold"
            letterSpacing="10px"
            left={{ base: "-20%", md: "-10%", lg: "-30%" }}
            lineHeight="0.9"
            w="max-content"
            textAlign="start"
          >
            <span>{data.data.firstName} </span>{" "}
            <span>{data.data.lastName}</span>
          </Flex>
          <Flex flexDirection="column" w="100%" gap="10px">
            <Box
              fontSize={{ base: "18px", md: "25px", lg: "30px" }}
              fontWeight="semibold"
            >
              Hello There
            </Box>
            <Box
              fontSize={{ base: "30px", md: "50px", xl: "75px" }}
              fontWeight="semibold"
            >
              <h1> It is {data.data.firstName}</h1>
            </Box>
            <Box
              w="70%"
              maxW="370px"
              h={{ base: "17px", md: "33px" }}
              bg={COLORS.gold}
              borderRadius="5px"
              minW="170px"
            ></Box>
            <Box
              display={{ base: "none", md: "block" }}
              fontSize={{ base: "22px", md: "35px" }}
              color={COLORS.gold}
              paddingTop="20px"
            >
              {data.data.position}
            </Box>
          </Flex>
        </Flex>
        <Box
          w={{ base: "200px", md: "300px", lg: "365px" }}
          h={{ base: "200px", md: "300px", lg: "365px" }}
        >
          {/* {data.data.logo.lenght!==0? <Image
            alt="Picture of the author"
            className={HomeStyling.firstImageHome}
            priority
            width={366}
            height={366}
            src={data.data.logo}
          /> : <Image 
          alt="Picture of the author"
          className={HomeStyling.firstImageHome}
          priority
          width={366}
          height={366}
          src={Img}
        /> } */}
          {data.data.logo.photo !== undefined && (
            <Image
              alt="Picture of the author"
              className={HomeStyling.firstImageHome}
              style={{ height: "100%", minWidth: "200px", maxWidth: "365px" }}
              src={data.data.logo.photo}
            />
          )}
        </Box>
      </Flex>
    </Flex>
  );
};
