import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { COLORS } from "../TeamplateOne"; 
import HomeStyling from "./css/home.module.css";
import Moment from "moment";

export const Education = ({ data }) => {
  return (
    <Flex
      id="education"
      w="100%"
      padding={{ base: "30px", md: "70px", lg: "100px" }}
      flexDirection="column"
      gap="20px"
      zIndex="1"
      position="relative"
    >
      <Box
        borderRadius="10px"
        w={{ base: "150px", md: "280px", lg: "470px" }}
        h={{ base: "160px", md: "290px", lg: "500px" }}
        top={{ base: "-10%", md: "20%", lg: "40%" }}
        position="absolute"
        left="0"
        transform="translateX(-50%)"
        pointerEvents="none"
        border="10px solid #EEBE00 "
      ></Box>

      <Box
        textAlign="end"
        w="100%"
        fontWeight="semibold"
        fontSize={{ base: "40px", md: "90px", lg: "120px" }}
      >
        Education
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
        {data.data.educations !== null &&
          data.data.educations.map((datas, index) => (
            <CardEducation key={index} datas={datas} index={index} />
          ))}
        {/* {data.data.educations !== null &&
          data.data.educations.map((index, edu) => (
            <CardEducation index={index} edu={edu} />
          ))} */}
      </Flex>
    </Flex>
  );
};

export const CardEducation = ({ datas, index }) => {
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
          {datas.whereEdu}
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
              cursor="pointer"
              bg="transparent"
              fontSize={{ base: "12px", md: "16px", lg: "20px" }}
              padding="0 5px"
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
