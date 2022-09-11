import * as React from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { MainLayout } from "~/layouts";
import { VideoCard } from "~/components/video-card";

const FreeTutorials = () => {
  return (
    <MainLayout>
      <Box
        textAlign="center"
        maxW="full"
        w="3xl"
        mx="auto"
        mb={{ base: "9", sm: "16" }}
      >
        <Heading
          as="h1"
          fontSize={{ base: "2xl", sm: "4xl" }}
          mb={{ base: "3", sm: "4" }}
          fontWeight="extrabold"
        >
          Tutoriales de programación gratuitos
        </Heading>
        <Text
          textColor="gray.500"
          fontWeight="medium"
          fontSize={{ base: "md", sm: "xl" }}
          lineHeight={{ base: "auto", sm: "10" }}
          _dark={{
            textColor: "gray.400",
          }}
        >
          En esta sección encontrarás una selección de un gran número de
          tutoriales de programación gratuitos.
        </Text>
      </Box>
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
        alignItems="start"
        gap={{ base: "3", sm: "4" }}
      >
        <VideoCard
          channelName="midudev"
          videoName="🙀 ¡Con sólo CSS! IMPRESIONANTE efecto de OLAS en letras 🌊"
          videoId="Bfvfi6Cr7JY"
          src="https://i.ytimg.com/vi/Bfvfi6Cr7JY/sddefault.jpg"
          videoHost="youtube"
          channelId="UC8LeXCWOalN8SxlrPcG-PaQ"
        />
        <VideoCard
          channelName="GoncyPozzo"
          videoName="Haciendo landing pages gratis para ONGs (Adopcanem) con React + Next.js + ChakraUI"
          videoId="1487188659"
          videoHost="twitch"
          channelId="goncypozzo"
        />
        <VideoCard
          channelName="GoncyPozzo"
          videoName="Agregá una API a tus proyectos hosteados en Vercel"
          videoId="1516539987"
          videoHost="twitch"
          channelId="goncypozzo"
        />
        <VideoCard
          channelName="midudev"
          videoName="¡PROGRAMANDO TICKET de la MIDUCONF con JAVASCRIPT"
          videoId="1545457631"
          videoHost="twitch"
          channelId="midudev"
        />
        <VideoCard
          channelName="Gentleman Programming"
          videoName="Cómo estructurar tu project de ReactJs? Aplicamos Clean Architecture en Front End - #part1"
          videoId="5LqhlCd2_nE"
          src="https://i.ytimg.com/vi/5LqhlCd2_nE/sddefault.jpg"
          videoHost="youtube"
          channelId="UCbx_d228PdYwgB4Jz202SIQ"
        />
        <VideoCard
          channelName="Gentleman Programming"
          videoName="Estructuramos en vivo un project de React usando conceptos de Clean Architecture - #part2"
          videoId="XEcZaKK38fg"
          src="https://i.ytimg.com/vi/XEcZaKK38fg/sddefault.jpg"
          videoHost="youtube"
          channelId="UCbx_d228PdYwgB4Jz202SIQ"
        />
        <VideoCard
          channelName="Fazt"
          videoName="JSDoc, Documentación en Javascript | Curso Práctico"
          videoId="r0H-acWQS6c"
          src="https://i.ytimg.com/vi/r0H-acWQS6c/sddefault.jpg"
          videoHost="youtube"
          channelId="UCX9NJ471o7Wie1DQe94RVIg"
        />
        <VideoCard
          channelName="Fazt"
          videoName="Editores de Código & IDEs en la nube"
          videoId="JUtHx3VYBqc"
          src="https://i.ytimg.com/vi/JUtHx3VYBqc/sddefault.jpg"
          videoHost="youtube"
          channelId="UCX9NJ471o7Wie1DQe94RVIg"
        />
        {/* <VideoCard
          channelName=""
          videoName=""
          videoId=""
          src=""
          videoHost=""
          channelId=""
        /> */}
      </Grid>
    </MainLayout>
  );
};

export default FreeTutorials;
