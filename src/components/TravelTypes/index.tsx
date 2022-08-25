import { Box, Flex, Image, Img, HStack } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex display="flex" justify="center">
      <HStack spacing="16">
        <Box>
          <Image src="/assets/1.svg" alt="Life Night" pb="4" />
          Life Night
        </Box>
        <Box>
          <Image src="/assets/2.svg" alt="Life Night" pb="4" />
          Beach
        </Box>
        <Box>
          <Image src="/assets/3.svg" alt="Life Night" pb="4" />
          Modern
        </Box>
        <Box>
          <Image src="/assets/4.svg" alt="Life Night" pb="4" />
          Classic
        </Box>
        <Box>
          <Image src="/assets/5.svg" alt="Life Night" pb="4" />
          And more...
        </Box>
      </HStack>
    </Flex>
  );
}
