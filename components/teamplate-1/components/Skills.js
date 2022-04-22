import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { COLORS } from "../TeamplateOne"; 
import HomeStyling from "./css/home.module.css";
import { SkillsSq } from "../../../public/templat-1/Rectangle 42";

export const Skills = ({ data }) => {
  return (
    <Flex
      id="skill"
      w="100%"
      padding={{ base: "30px", md: "70px", lg: "100px" }}
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
      gap="20px"
      zIndex="1"
      position="relative"
    >
      <Box
        zIndex="0"
        w={{ base: "180px", md: "350px" }}
        h={{ base: "180px", md: "350px" }}
        position="absolute"
        top="-100px"
        left="0"
        transform="translateX(-50%)"
      >
        <SkillsSq />
      </Box>
      <Box
        textAlign="end"
        w="100%"
        fontWeight="semibold"
        fontSize={{ base: "40px", md: "90px", lg: "120px" }}
      >
        Skills
      </Box>
      {data.data.skills !== null &&
        data.data.skills.map((datas, index) => (
          <SkillCard key={index} datas={datas} index={index} />
        ))}
    </Flex>
  );
};

export const SkillCard = ({ datas, index }) => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Pie percentage={datas.percentage} colour={COLORS.gold} />
      <Box fontWeight="600" fontSize="18px" textTransform="uppercase">
        {" "}
        <h3>{datas.name}</h3>
      </Box>
    </Flex>
  );
};

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  return tooLow ? 0 : tooHigh ? 100 : +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"6px"}
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    ></circle>
  );
};

const Text = ({ percentage }) => {
  return (
    <text
      x="50%"
      y="50%"
      dominantBaseline="central"
      textAnchor="middle"
      className={HomeStyling.colorCircle}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};

const Pie = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={200}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour="transparent" />
        <Circle colour={colour} pct={pct} />
      </g>

      <Text percentage={pct} />
    </svg>
  );
};

export default Pie;
