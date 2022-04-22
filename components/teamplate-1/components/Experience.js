import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { COLORS } from "../TeamplateOne";
import HomeStyling from "./css/home.module.css";
import Moment from "moment";

export const Experience = ({ data }) => {
  return (
    <Flex
      id="experience"
      w="100%"
      padding={{ base: "30px", md: "70px", lg: "100px" }}
      flexDirection="column"
      gap="20px"
      zIndex="1"
      position="relative"
    >
      <Circle />
      <Box
        textAlign="start"
        w="100%"
        fontWeight="semibold"
        fontSize={{ base: "40px", md: "90px", lg: "120px" }}
      >
        Experience
      </Box>
      <Flex
        paddingTop="50px"
        w="100%"
        overflowX="scroll"
        className={HomeStyling.example}
        flexDirection={{ base: "column", md: "row" }}
        gap="50px"
        justifyContent="flex-start"
      >
        {data.data.experiences !== null &&
          data.data.experiences.map((datas, index) => (
            <CardExperience key={index} datas={datas} index={index} />
          ))}
      </Flex>
    </Flex>
  );
};

export const CardExperience = ({ datas, index }) => {
  const [showMore, setShowMore] = useState(false);
  const [Even, setEven] = useState((index + 2) % 2 == 0 ? true : false);

  return (
    <>
      <Flex
        marginRight={{ base: !Even && "auto", md: "0" }}
        marginLeft={{ base: !Even && "auto", md: "0" }}
        fontSize={{ base: "14px", md: "18px", lg: "22px" }}
        w={{ base: "230px", md: "330px", lg: "380px" }}
        minW={{ base: "240px", md: "330px", lg: "380px" }}
        maxW="380px"
        flexDirection="column"
        alignItems="start"
        gap="10px"
      >
        <Box
          borderRadius="10px"
          color="#fff"
          textAlign="center"
          padding="10px"
          bg={COLORS.gold}
        >
          {Moment(datas.from).format("YYYY")}-{Moment(datas.to).format("YYYY")}{" "}
        </Box>
        <Box fontWeight="bold" letterSpacing="3px">
          {datas.whereExp}
        </Box>
        <Box
          fontSize={{ base: "12px", md: "16px", lg: "20px" }}
          lineHeight="1.2"
          paddingTop="10px"
          wordBreak="break-word"
        >
          {showMore ? datas.description : datas.description.substring(0, 150)}

          {datas.description.length > 150 && (
            <Box
              zIndex="1"
              cursor="pointer"
              bg="transparent"
              padding="0 5px"
              fontSize={{ base: "12px", md: "16px", lg: "20px" }}
              onClick={() => setShowMore(!showMore)}
            >
              {" "}
              {showMore ? "read less" : "...read more"}{" "}
            </Box>
          )}
        </Box>
      </Flex>
    </>
  );
};

export const Circle = () => {
  return (
    <Box
      pointerEvents="none"
      top="10%"
      right="-50px"
      transform="translateX(50%)"
      position="absolute"
      w={{ base: "300px", md: "350px", lg: "410px" }}
      borderRadius="50%"
      h={{ base: "300px", md: "350px", lg: "410px" }}
      border="2px solid #EEBE00"
    >
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50% , -50%)"
        borderRadius="50%"
        border="2px solid #EEBE00"
        w="calc(100% - 50px)"
        h="calc(100% - 50px)"
      >
        <Box
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50% , -50%)"
          borderRadius="50%"
          border="2px solid #EEBE00"
          w="calc(100% - 50px)"
          h="calc(100% - 50px)"
        >
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50% , -50%)"
            borderRadius="50%"
            border="2px solid #EEBE00"
            w="calc(100% - 50px)"
            h="calc(100% - 50px)"
          >
            <Box
              position="absolute"
              top="50%"
              left="50%"
              transform="translate(-50% , -50%)"
              borderRadius="50%"
              border="2px solid #EEBE00"
              w="calc(100% - 50px)"
              h="calc(100% - 50px)"
            >
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50% , -50%)"
                borderRadius="50%"
                border="2px solid #EEBE00"
                w="calc(100% - 50px)"
                h="calc(100% - 50px)"
              >
                <Box
                  position="absolute"
                  top="50%"
                  left="50%"
                  transform="translate(-50% , -50%)"
                  borderRadius="50%"
                  border="2px solid #EEBE00"
                  w="calc(100% - 50px)"
                  h="calc(100% - 50px)"
                ></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
