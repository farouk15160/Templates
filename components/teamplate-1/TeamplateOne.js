import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDomain } from "../../pages/_app";
import { About } from "./components/About";
import { ContacMe } from "./components/ContacMe";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { PageDivieder } from "./components/PageDivieder";
import { Projects } from "./components/Projects";
import ScreenShape from "./components/ScreenShape";
import { Seervices } from "./components/Seervices";
import { Skills } from "./components/Skills";

const TeamplateOne = () => {
  const [navBar, setNavBar] = useState(false);
  const { domainDataProvider, domainNameProvider } = useDomain();

  console.log(domainDataProvider, domainNameProvider);

  return (
    <Box w="100%" position="relative" overflow="hidden">
      <Box
        display={navBar ? "block" : "none"}
        zIndex="3"
        top="0"
        bottom="0"
        w="100%"
        h="1500px"
        bg="rgba(0,0,0,0.30)"
        position="fixed"
        pointerEvents="none"
      ></Box>

      <ScreenShape />
      {/* <ScreenShapeTWO/> */}

      <Home data={domainDataProvider} setNavBar={setNavBar} navBar={navBar} />
      <PageDivieder />
      <NavBar data={domainDataProvider} navBar={navBar} setNavBar={setNavBar} />
      <About data={domainDataProvider} />
      <PageDivieder />
      <Education data={domainDataProvider} />
      <PageDivieder />
      <Experience data={domainDataProvider} />
      <PageDivieder />
      <Skills data={domainDataProvider} />
      <PageDivieder />
      <Seervices data={domainDataProvider} />
      <PageDivieder />
      <Projects data={domainDataProvider} />
      <PageDivieder />
      <ContacMe />
    </Box>
  );
};

export default TeamplateOne;

export const COLORS = {
  gold: "#EEBE00",
  black: "#1b1b1b",
};
