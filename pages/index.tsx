import type { NextPage } from "next";
import RouterLink from "next/link";
import { Box, Grid, Heading, Link, Text } from "@chakra-ui/react";
import { MainLayout } from "~/layouts";
import { VideoCard } from "~/components/video-card";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Box textAlign="center" maxW="full" w="4xl" mx="auto">
        <Heading
          as="h1"
          mb={{ base: "3", sm: "4" }}
          fontWeight="extrabold"
          fontSize={{ base: "2xl", sm: "4xl" }}
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
          inicialmente de plataformas como YouTube y Twitch, donde hay más
          contenido gratuito sobre desarrollo de software.{" "}
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
      <Box position="relative" mt={{ base: "14", sm: "20" }} py="2px">
        <Box
          position="absolute"
          left="0"
          top="0"
          h="full"
          w="full"
          zIndex="-1"
          bgGradient="linear(90deg, transparent, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, #E2E8F0, transparent)"
          _dark={{
            bgGradient:
              "linear(90deg, transparent, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, #4A5568, transparent)",
          }}
        ></Box>
        <Box
          bgGradient="linear(90deg, transparent, white, white, white, white, white, white, white, white, white, transparent)"
          mx={{ base: "-5", sm: "-24" }}
          py="10"
          px={{ base: "5", sm: "24" }}
          _dark={{
            bgGradient:
              "linear(90deg, transparent, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, #2D3748, transparent)",
          }}
        >
          <Heading as="h3" fontSize="2xl" fontWeight="bold">
            Cursos recientes:
          </Heading>
          <Text
            my="4"
            textColor="gray.500"
            fontWeight="medium"
            fontSize={{ base: "md", sm: "lg" }}
            lineHeight={{ base: "auto", sm: "9" }}
            _dark={{
              textColor: "gray.400",
            }}
          >
            Estos son los mejor cursos que fueron lanzados recientemente.
          </Text>
          <Grid
            templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
            alignItems="start"
            gap={{ base: "3", sm: "4" }}
          >
            <VideoCard
              channelName="Gentleman Programming"
              videoName="Creamos una app en React ! buenas prácticas, clean architecture, redux, context y Typescript !"
              videoId="p9PAmqpCWgA"
              src="https://i.ytimg.com/vi/p9PAmqpCWgA/sddefault.jpg"
              videoHost="youtube"
              channelId="UCbx_d228PdYwgB4Jz202SIQ"
              dateOfPublication="Sep 4, 2022"
              publicationStatus="recent"
            />
            <VideoCard
              channelName="midulive"
              videoName="CURSO de NEXT.JS 12 desde CERO y con dos proyectos prácticos"
              videoId="pFT8wD2uRSE"
              src="https://i.ytimg.com/vi/pFT8wD2uRSE/sddefault.jpg"
              videoHost="youtube"
              channelId="UC8LeXCWOalN8SxlrPcG-PaQ"
              dateOfPublication="Aug 15, 2022"
              publicationStatus="recent"
            />
            <VideoCard
              channelName="Fazt"
              videoName="Curso de Reactjs desde Cero para principiantes 2022"
              videoId="rLoWMU4L_qE"
              src="https://i.ytimg.com/vi/rLoWMU4L_qE/sddefault.jpg"
              videoHost="youtube"
              channelId="UCX9NJ471o7Wie1DQe94RVIg"
              dateOfPublication="Aug 11, 2022"
              publicationStatus="recent"
            />
            <VideoCard
              channelName="Vida MRR - Diseño y desarrollo web"
              videoName="GUÍA COMPLETA DE GRID ANIMADA | CURSO CSS"
              videoId="Fj6BGtNvXIc"
              src="https://i.ytimg.com/vi/Fj6BGtNvXIc/sddefault.jpg"
              videoHost="youtube"
              channelId="UCOD6LXgeBoeiUZTsPLdG-0g"
              dateOfPublication="Jul 11, 2022"
              publicationStatus="recent"
            />
          </Grid>
        </Box>
      </Box>
      <Box mt={{ base: "10", sm: "16" }}>
        <Heading
          as="h3"
          fontSize={{ base: "22px", sm: "2xl" }}
          fontWeight="bold"
        >
          Novedades:
        </Heading>
        <Text
          my="4"
          textColor="gray.500"
          fontWeight="medium"
          fontSize={{ base: "md", sm: "lg" }}
          lineHeight={{ base: "auto", sm: "9" }}
          _dark={{
            textColor: "inherit",
          }}
        >
          Se esta trabajando arduamente para añadir más funciones y nuevas
          características a la web, pronto se anunciarán más novedades en esta
          misma sección.
        </Text>
        <Text
          textColor="gray.500"
          fontWeight="medium"
          fontSize={{ base: "md", sm: "lg" }}
          lineHeight={{ base: "auto", sm: "9" }}
          _dark={{
            textColor: "inherit",
          }}
        >
          Hasta entonces no dejes pasar el tiempo y aprovecha los mejores cursos
          y tutoriales de programación gratuitos; la tecnología avanza y no se
          detiene. Feliz Viaje!!!
        </Text>
      </Box>
    </MainLayout>
  );
};

export default Home;
