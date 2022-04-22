import { Box, Flex, Input, Textarea } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../TeamplateOne"; 

export const ContacMe = () => {

  return (
    <Flex
      w="100%"
      padding={{ base: "30px", md: "70px", lg: "100px" }}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap="50px"
      zIndex="1"
      overflow="hidden"
      position="relative"
    >
      <Box
        borderRadius="50%"
        w={{ base: "150px", md: "220px" }}
        h={{ base: "150px", md: "220px" }}
        position="absolute"
        bottom="0px"
        transform="translate(50% , 50%)"
        right="0"
        bg={COLORS.gold}
      ></Box>
      <Box
        textAlign="start"
        w="100%"
        fontWeight="semibold"
        fontSize={{ base: "40px", md: "90px", lg: "120px" }}
      >
        Contact
      </Box>
      <Flex
        w={{ base: "100%", lg: "70%" }}
        gap="30px"
        flexDirection={{ base: "column", md: "row" }}
      >
        <Flex
          gap="40px"
          w={{ base: "100%", md: "50%" }}
          padding="0px"
          flexDirection="column"
        >
          <Box fontWeight="600" w="100%" textAlign="start">
            Full Name
            <Input
              className="input-active"
              borderRadius="0"
              borderBottom="1px solid rgba(0,0,0,0.6) "
              borderTop="none"
              borderRight="none"
              borderLeft="none"
            />
          </Box>
          <Box fontWeight="600" w="100%" textAlign="start">
            E-Mail
            <Input
              className="input-active"
              borderRadius="0"
              borderBottom="1px solid rgba(0,0,0,0.6) "
              borderTop="none"
              borderRight="none"
              borderLeft="none"
            />
          </Box>
        </Flex>
        <Box
          fontWeight="600"
          borderLeft={{ base: "none", md: "1px solid rgba(0,0,0,0.6) " }}
          padding={{ base: "0", md: "30px 30px 0 30px " }}
          w={{ base: "100%", md: "50%" }}
          position="relative"
        >
          <Box w="100%" textAlign="start">
            Message
          </Box>
          <Textarea
            className="input-active"
            placeholder="Write your message here"
            rows="4"
            cols="80"
            w="100%"
            padding="20px 20px 20px 0"
            borderRadius="0"
            borderBottom={{ base: "1px solid rgba(0,0,0,0.6)  ", md: "none" }}
            borderTop="none"
            borderRight="none"
            borderLeft="none"
          />
          <Box
            fontSize={{ base: "14px", lg: "20px" }}
            margin={{ base: "20px auto 0 auto", md: "0 0 0 -30px" }}
            cursor="pointer"
            w={{ base: "50%", md: "calc(100% + 60px)" }}
            bg={COLORS.gold}
            textAlign="center"
            color="#000"
            borderRadius={{ base: "10px", md: "0" }}
            // position="absolute"
            // transform={{ base: "translateX(-50%)", lg: "translateX(0)" }}
            // bottom="0"
            // left={{ base: "50%", lg: "0" }}
            minW="180px"
            padding="15px"
          >
            Send Message
          </Box>
        </Box>
      </Flex>
      <Box
        fontWeight="100"
        w="100%"
        padding="40px 10px"
        fontSize={{ base: "30px", md: "45px", lg: "60px" }}
        textAlign="center"
      >
        THANK YOU
      </Box>
      <Box
        padding="5px"
        w="100%"
        textAlign="center"
        marginTop="auto"
        position="absolute"
        bottom="10px"
        // left="50%"
        // transform='translateX(-50%)'
        fontSize={{ base: "10px", md: "12px" }}
      >
        <a href="https://orkabit.com" target="_new">
          <h1>
            Copyright © {new Date().getFullYear()}. All rights reserved |
            Powered by <span style={{ fontWeight: "700" }}>ORKAbit</span>
          </h1>
        </a>
      </Box>
     
    </Flex>
  );
};
