import { Flex, Image } from "@chakra-ui/react";

export function Header() {
  return (
    <Flex display="flex" align="center" justify="center" p="6">
      <Image src="/assets/logo.png" alt="World trip logo" />
    </Flex>
  );
}
