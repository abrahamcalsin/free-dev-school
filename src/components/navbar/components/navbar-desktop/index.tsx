import * as React from "react";
import { Box, Link } from "@chakra-ui/react";
import RouterLink from "next/link";

import { DarkThemeButton } from "~/components/dark-theme-button";
import { LogoFreeDevSchool } from "~/svg/logo-free-dev-school";

interface NavigationDeskLinkProps {
  href: string;
  labelLink: string;
}

const NavigationDeskLink = (props: NavigationDeskLinkProps) => {
  const { href, labelLink } = props;

  return (
    <RouterLink href={href}>
      <Link>{labelLink}</Link>
    </RouterLink>
  );
};

export function NavbarDesktop() {
  return (
    <Box
      display={{ base: "none", sm: "flex" }}
      justifyContent="space-between"
      alignItems="center"
    >
      <RouterLink href="/">
        <Link>
          <LogoFreeDevSchool />
        </Link>
      </RouterLink>
      <Box display="flex" alignItems="center" gap="6" fontWeight="semibold">
        <NavigationDeskLink href="/free-courses" labelLink="Cursos gratis" />
        <NavigationDeskLink
          href="/free-tutorials"
          labelLink="Tutoriales gratis"
        />
        <DarkThemeButton />
      </Box>
    </Box>
  );
}
