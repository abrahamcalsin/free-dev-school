import { Box, Heading, Link, Text } from "@chakra-ui/react";
import RouterLink from "next/link";

import Meta from "~/components/meta";
import { MainLayout } from "~/layouts";

import { Content } from "./components/content";

export function HomeScreen() {
  return (
    <MainLayout>
      <Meta />
      <Box textAlign="center" maxW="full" w="4xl" mx="auto">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", sm: "4xl" }}
          mb={{ base: "3", sm: "4" }}
          fontWeight="extrabold"
          lineHeight={{ base: "auto", sm: "xl" }}
        >
          Descubre los mejores{" "}
          <Text
            as="span"
            bgGradient="linear(to-l, #4299E1, #39BBE4)"
            bgClip="text"
          >
            cursos y tutoriales de programación
          </Text>{" "}
          totalmente gratuitos.
        </Heading>
        <Text
          px="6"
          textColor="gray.500"
          fontWeight="medium"
          fontSize={{ base: "md", sm: "xl" }}
          lineHeight={{ base: "auto", sm: "9" }}
          _dark={{
            textColor: "gray.400",
          }}
        >
          Los cursos y tutoriales que se publican en esta web fueron recopilados
          inicialmente de plataformas como <strong>YouTube</strong> y{" "}
          <strong>Twitch</strong>, donde hay más contenido gratuito sobre
          desarrollo de software.{" "}
          <RouterLink href="/about-us">
            <Link
              textColor="blue.400"
              fontStyle="italic"
              textDecoration="underline"
              fontWeight="bold"
            >
              Mas información aquí.
            </Link>
          </RouterLink>
        </Text>
      </Box>
      <Content />
    </MainLayout>
  );
}
