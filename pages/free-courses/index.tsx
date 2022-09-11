import * as React from "react";
import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import { MainLayout } from "~/layouts";
import { SearchBox } from "~/components/search-box";
import { VideoCard } from "~/components/video-card";

const FreeCourses = () => {
  return (
    <MainLayout>
      <Box textAlign="center" maxW="full" w="3xl" mx="auto">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", sm: "4xl" }}
          mb={{ base: "3", sm: "4" }}
          fontWeight="extrabold"
        >
          Cursos de programación gratuitos
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
          En esta sección encontrarás una selección de un gran número de los
          mejores cursos de programación gratuitos.
        </Text>
      </Box>
      <SearchBox label="Buscar curso..." />
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", sm: "repeat(4, 1fr)" }}
        alignItems="start"
        gap={{ base: "3", sm: "4" }}
      >
        <VideoCard
          channelName="midulive"
          videoName="CURSO de NEXT.JS 12 desde CERO y con dos proyectos prácticos"
          videoId="pFT8wD2uRSE"
          src="https://i.ytimg.com/vi/pFT8wD2uRSE/sddefault.jpg"
          videoHost="youtube"
          channelId="UC8LeXCWOalN8SxlrPcG-PaQ"
          dateOfPublication="Aug 15, 2022"
        />
        <VideoCard
          channelName="Fazt"
          videoName="Curso de Reactjs desde Cero para principiantes 2022"
          videoId="rLoWMU4L_qE"
          src="https://i.ytimg.com/vi/rLoWMU4L_qE/sddefault.jpg"
          videoHost="youtube"
          channelId="UCX9NJ471o7Wie1DQe94RVIg"
          dateOfPublication="Aug 11, 2022"
        />
        <VideoCard
          channelName="Vida MRR - Diseño y desarrollo web"
          videoName="GUÍA COMPLETA DE GRID ANIMADA | CURSO CSS"
          videoId="Fj6BGtNvXIc"
          src="https://i.ytimg.com/vi/Fj6BGtNvXIc/sddefault.jpg"
          videoHost="youtube"
          channelId="UCOD6LXgeBoeiUZTsPLdG-0g"
          dateOfPublication="Jul 11, 2022"
        />
        <VideoCard
          channelName="Vida MRR - Diseño y desarrollo web"
          videoName="🔥 Curso PRACTICO de CSS AVANZADO 🧪"
          videoId="O5rejMtUJz8"
          src="https://i.ytimg.com/vi/O5rejMtUJz8/sddefault.jpg"
          videoHost="youtube"
          channelId="UCOD6LXgeBoeiUZTsPLdG-0g"
          dateOfPublication="Jun 20, 2022"
        />
        <VideoCard
          channelName="Vida MRR - Diseño y desarrollo web"
          videoName="CURSO COMPLETO PARA APRENDER NEXTJS"
          videoId="avGmwUzGJKA"
          src="https://i.ytimg.com/vi/avGmwUzGJKA/sddefault.jpg"
          videoHost="youtube"
          channelId="UCOD6LXgeBoeiUZTsPLdG-0g"
          dateOfPublication="May 2, 2022"
        />
        <VideoCard
          channelName="midudev"
          videoName="GitHub Actions TUTORIAL Desde Cero - Integración continua (CI/CD)"
          videoId="sIhm4YOMK6Q"
          src="https://i.ytimg.com/vi/sIhm4YOMK6Q/sddefault.jpg"
          videoHost="youtube"
          channelId="UC8LeXCWOalN8SxlrPcG-PaQ"
          dateOfPublication="Apr 25, 2022"
        />
        <VideoCard
          channelName="midudev"
          videoName="CURSO REACT NATIVE desde CERO"
          videoId="qi87b6VcIHY"
          src="https://i.ytimg.com/vi/qi87b6VcIHY/sddefault.jpg"
          videoHost="youtube"
          channelId="UC8LeXCWOalN8SxlrPcG-PaQ"
          dateOfPublication="Aug 20, 2022"
        />
        <VideoCard
          channelName="Gentleman Programming"
          videoName="Master class Custom hooks en React, ciclo de vida del componente, aumenta la performance 100%"
          videoId="HmudQUYnQQg"
          src="https://i.ytimg.com/vi/HmudQUYnQQg/sddefault.jpg"
          videoHost="youtube"
          channelId="UCbx_d228PdYwgB4Jz202SIQ"
          dateOfPublication="Mar 18, 2022"
        />
      </Grid>
    </MainLayout>
  );
};

export default FreeCourses;
