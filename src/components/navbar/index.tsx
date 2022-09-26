import * as React from "react";
import { Container } from "@chakra-ui/react";

import { NavbarDesktop } from "./components/navbar-desktop";
import { NavbarMobile } from "./components/navbar-mobile";

export function Navbar() {
  return (
    <Container
      maxW="6xl"
      mt={{ base: "0", sm: "12" }}
      pt={{ base: "24", sm: "0" }}
      zIndex="3"
      position="relative"
    >
      <NavbarDesktop />
      <NavbarMobile />
    </Container>
  );
}
