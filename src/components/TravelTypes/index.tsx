import { Box, Flex, Image, Img, VStack, HStack, Text } from "@chakra-ui/react";

export function TravelTypes() {
  return (
    <Flex display="flex" justify="center" align="center" direction="column">
      <HStack spacing="16">
        <Image src="/assets/1.svg" alt="Life Night" pb="4" />
        <Image src="/assets/2.svg" alt="Life Night" pb="4" />
        <Image src="/assets/3.svg" alt="Life Night" pb="4" />
        <Image src="/assets/4.svg" alt="Life Night" pb="4" />
        <Image src="/assets/5.svg" alt="Life Night" pb="4" />
      </HStack>
      <HStack spacing="16">
        <Text fontWeight="bold">Life Night</Text>
        <Text fontWeight="bold">Beach</Text>
        <Text fontWeight="bold">Modern</Text>
        <Text fontWeight="bold">Classic</Text>
        <Text fontWeight="bold">And more...</Text>
      </HStack>
    </Flex>
  );
}
