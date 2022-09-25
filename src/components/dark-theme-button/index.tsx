import * as React from "react";
import { HiOutlineSun } from "react-icons/hi";
import { RiMoonClearFill } from "react-icons/ri";
import { Button, useColorMode } from "@chakra-ui/react";

export function DarkThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button
      size={{ base: "sm", sm: "md" }}
      onClick={toggleColorMode}
      colorScheme={colorMode === "light" ? "blue" : "gray"}
    >
      {colorMode === "light" ? <RiMoonClearFill /> : <HiOutlineSun />}
    </Button>
  );
}
