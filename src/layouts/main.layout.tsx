import * as React from "react";
import { Container } from "@chakra-ui/react";
import { Footer } from "~/components/footer";
import BackgroundLines from "~/svg/background-lines";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props;

  return (
    <Container
      maxW="6xl"
      pt={{ base: "0", sm: "24" }}
      pb={{ base: "24", sm: "12" }}
    >
      <BackgroundLines />
      {children}
      <Footer />
    </Container>
  );
};
