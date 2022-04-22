import { Box, Flex } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { ProjectsSq } from "../../../public/templat-1/Rectangle 42";

export const Projects = ({ data }) => {
  return (
    <Flex
      id="project"
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
        w={{ base: "250px", md: "650px" }}
        h={{ base: "250px", md: "650px" }}
        position="absolute"
        top="200px"
        transform="translateX(-50%)"
        left="0"
      >
        <ProjectsSq />
      </Box>
      <Box
        textAlign="end"
        w="100%"
        fontWeight="semibold"
        fontSize={{ base: "40px", md: "90px", lg: "120px" }}
      >
        Projetcs
      </Box>
      <Flex
        zIndex="1"
        w="100%"
        padding="40px 20px "
        gap="50px"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        flexDirection="row"
      >
        {data.data.projects !== null &&
          data.data.projects.map((datas, index) => (
            <ProjectCard key={index} datas={datas} index={index} />
          ))}
      </Flex>
    </Flex>
  );
};

export const ProjectCard = ({ datas }) => {
  return (
    <Link href={`/${datas.projectUuid} `} passHref >
      <Flex
        borderRadius="20px"
        w={{ base: "280px", md: "350px", lg: "450px" }}
        minW="260px"
        justifyContent="center"
        alignItems="center"
        boxShadow="0 3px 6px 0px rgba(0,0,0,0.16)"
        bg="#fff"
        fontSize="20px"
        fontWeight="700"
        h={{ base: "280px", md: "350px", lg: "450px" }}
      >
        {datas.name}{" "}
      </Flex>
    </Link>
  );
};
