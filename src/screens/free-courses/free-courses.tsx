import { useQuery } from "@apollo/client";
import { Alert, AlertIcon, AlertTitle, Spinner } from "@chakra-ui/react";

import { Introduction } from "~/components/introduction";
import Meta from "~/components/meta";
import { freeCoursesQuery } from "~/gql/queries";
import { MainLayout } from "~/layouts";
import { FreeCoursesQueryResponsePayload } from "~/typings/free-courses";

import { Content } from "./components/content";
import { FreeCoursesSearchBox } from "./components/free-courses-search-box";

export function FreeCoursesScreen() {
  const { data, loading, error } =
    useQuery<FreeCoursesQueryResponsePayload>(freeCoursesQuery);

  const freeCourses = data?.freeCourses ?? [];

  if (loading) {
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
        formText="Envía tu sugerencia de un curso aquí."
      />
      <FreeCoursesSearchBox />
      <Content />
    </MainLayout>
  );
}
