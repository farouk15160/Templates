import { Box, Flex } from "@chakra-ui/react";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { COLORS } from "../TeamplateOne";

// import "../../../styles/globals.css";
import { SvgSq } from "../../../public/templat-1/Rectangle 42";

export const Seervices = ({ data }) => {
  return (
    <Flex
      id="service"
      w="100%"
      padding={{ base: "30px", md: "70px", lg: "100px" }}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap="50px"
      zIndex="1"
      position="relative"
    >
      <Box
        w={{ base: "150px", md: "450px" }}
        h={{ base: "180px", md: "500px" }}
        position="absolute"
        top={{ base: "-5%", md: "30%" }}
        right="0"
      >
        <SvgSq />
      </Box>
      <Box
        textAlign="start"
        w="100%"
        fontWeight="semibold"
        fontSize={{ base: "40px", md: "90px", lg: "120px" }}
      >
        Services
      </Box>
      {data.data.services !== null &&
        data.data.services.map((datas, index) => (
          <ServiceCard key={index} datas={datas} index={index} />
        ))}
    </Flex>
  );
};

export const ServiceCard = ({ datas }) => {
  return (
    <>
      {" "}
      <Flex
        paddingTop="20px"
        flexDirection="column"
        gap="20px"
        alignItems="center"
      >
        <Flex
          // className="flip-card box"
          // className={HomeStyling.flipCardBox} 
          borderRadius="25px"
          h={{ base: "230px", md: "260px" }}
          justifyContent="flex-start"
          alignItems="center"
          transition="all 0.7s"
          // bg="transparent"
          bg={COLORS.gold}
          w={{ base: "240px", md: "280px" }}
          minW="240px"
          color="#fff"
          perspective="1000px"
          boxShadow="0 3px 6px 0 rgb(0 0 0 / 16%)"
        >
          <Box
            bg="rgba(255, 255, 255, 0.1)"
            borderRadius="30px"
            className="flip-card-inner"
            position="relative"
            width="100%"
            height="100%"
            textAlign="center"
            transition="transform 0.8s"
          >
            <Flex
              alignItems="center"
              flexDirection="column"
              justifyContent="center"
              gap="30px"
              bg="rgba(255, 255, 255, 0.1)"
              borderRadius="30px"
              className="flip-card-front"
              position=" absolute"
              width="100%"
              height="100%"
              padding="5px"
              fontSize="120px"
            >
              <FontAwesomeIcon icon={faWaveSquare} />
            </Flex>
            <Flex
              position=" absolute"
              width="100%"
              height="100%"
              transform="rotateY(180deg)"
              bg="rgba(255, 255, 255, 0.1)"
              borderRadius="30px"
              className="flip-card-back example"
              justifyContent="center"
              alignItems="flex-start"
              overflowY="scroll"
              fontSize="16px"
              wordBreak="break-word"
              padding="20px"
              textAlign="center"
            >
              {datas.description}
            </Flex>
          </Box>
        </Flex>
        <Box
          fontSize="24px"
          fontWeight="semibold"
          //   className="ser-head"
        >
          <h3> {datas.name}</h3>
        </Box>
      </Flex>
    </>
  );
};
