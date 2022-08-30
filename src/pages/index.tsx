import { Box, Flex, Image, Spacer } from "@chakra-ui/react";
import { Banner } from "../components/Banner";

import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  return (
    <Box>
      <title>WorldTrip</title>
      <Header />
      <Banner />
      <TravelTypes />
      <Slider />
    </Box>
  );
}
