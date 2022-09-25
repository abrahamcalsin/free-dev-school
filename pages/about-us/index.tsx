import * as React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

import { MainLayout } from "~/layouts";

const AvourUs = () => {
  return (
    <MainLayout>
      <Box textAlign="center" maxW="full" w="4xl" mx="auto">
        <Heading
          as="h1"
          fontSize={{ base: "2xl", sm: "4xl" }}
          mb={{ base: "3", sm: "4" }}
          fontWeight="extrabold"
        >
          Bienvenido a Free Dev School
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
          Aquí encontrarás una gran cantidad de los mejores cursos y tutoriales
          de programación gratuitos, los cuales son recopilados y seleccionados
          de varias plataformas donde se imparten mayor contenido gratuito.
        </Text>
      </Box>
    </MainLayout>
  );
};

export default AvourUs;
