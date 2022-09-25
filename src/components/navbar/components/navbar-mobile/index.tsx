import * as React from "react";
import { FaShapes } from "react-icons/fa";
import { MdVideoLibrary } from "react-icons/md";
import { Box, Link, Text } from "@chakra-ui/react";
import RouterLink from "next/link";

import { DarkThemeButton } from "~/components/dark-theme-button";
import { LogoFreeDevSchool } from "~/svg/logo-free-dev-school";

const NavTop = () => {
  return (
    <Box
      bg="main"
      w="full"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      left="0"
      top="0"
      px="4"
      py="2"
      borderBottom="1px"
      borderColor="gray.300"
      _dark={{
        bg: "gray.800",
        borderColor: "gray.700",
      }}
    >
      <RouterLink href="/">
        <Link>
          <LogoFreeDevSchool />
        </Link>
      </RouterLink>
      <DarkThemeButton />
    </Box>
  );
};

interface NavigationMobLinkProps {
  href: string;
  labelLink: string;
  svgIcon: React.ReactElement;
}

const NavigationMobLink = (props: NavigationMobLinkProps) => {
  const { href, labelLink, svgIcon } = props;

  return (
    <RouterLink href={href}>
      <Link display="flex" flexDirection="column" alignItems="center" gap="1">
        {svgIcon}
        <Text fontSize="xs" fontWeight="semibold">
          {labelLink}
        </Text>
      </Link>
    </RouterLink>
  );
};

const NavBottom = () => {
  return (
    <Box
      bg="main"
      w="full"
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      position="fixed"
      left="0"
      bottom="0"
      py="3"
      borderTop="1px"
      borderColor="gray.300"
      _dark={{
        bg: "gray.800",
        borderColor: "gray.700",
      }}
    >
      <NavigationMobLink
        href="/free-courses"
        labelLink="Cursos gratis"
        svgIcon={<FaShapes size={20} />}
      />
      <NavigationMobLink
        href="/free-tutorials"
        labelLink="Tutoriales gratis"
        svgIcon={<MdVideoLibrary size={20} />}
      />
    </Box>
  );
};

export function NavbarMobile() {
  return (
    <Box display={{ base: "inline", sm: "none" }}>
      <NavTop />
      <NavBottom />
    </Box>
  );
}
