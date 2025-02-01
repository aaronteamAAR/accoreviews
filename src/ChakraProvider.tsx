import { ChakraProvider } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = { children: ReactNode };

const ChakraWrapper = ({ children }: Props) => {
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default ChakraWrapper;
