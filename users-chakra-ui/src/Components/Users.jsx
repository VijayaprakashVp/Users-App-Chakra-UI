import React from "react";
import { Heading } from "@chakra-ui/react";

export const Users = () => {
  return (
    <div>
      <Heading
        m="auto"
        border="1px"
        w="25%"
        textAlign="center"
        bgGradient="linear(to-r , #7928CA, #FF0080)"
        bgClip="text"
        _hover={{
          bgGradient: "linear(to-r  , red.500, yellow.500)",
        }}
      >
        Chakra UI
      </Heading>
    </div>
  );
};
