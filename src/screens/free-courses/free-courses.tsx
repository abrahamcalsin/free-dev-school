import { Alert, AlertIcon, AlertTitle, Spinner } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";

import { Introduction } from "~/components/introduction";
import Meta from "~/components/meta";
import { MainLayout } from "~/layouts";
import { getFreeCourses } from "~/services/free-courses";

import { Content } from "./components/content";
import { FreeCoursesSearchBox } from "./components/free-courses-search-box";

export function FreeCoursesScreen() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["freeCourses"],
    queryFn: getFreeCourses,
  });

  const freeCourses = data ?? [];

  if (isLoading) {
    return (
      <MainLayout>
        <Spinner size="lg" />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>{error.message}</AlertTitle>
        </Alert>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Meta title="Cursos gratis" />
      <Introduction
        title="Cursos de programación gratuitos"
        description="En esta sección encontrarás una selección de un gran número de los
      mejores cursos de programación gratuitos."
        titleCount={freeCourses.length}
        formId="mJqxB4"
        formLabel="Envía tu sugerencia de un curso aquí."
      />
      <FreeCoursesSearchBox data={freeCourses} />
      <Content data={freeCourses} />
    </MainLayout>
  );
}
