import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Box, Container, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "react-router";
import { useThemeColors } from "hooks/useThemeColor";

const Layout: React.FC = () => {
  const { open, onOpen, onClose } = useDisclosure(); // кастомный хук из Chakra UI, который помогает управлять состоянием открытости
  const { text } = useThemeColors();
  return (
    <Container>
      <Box minH={"100vh"} color={text} bg={"gray.400"}>
        <Sidebar
          onClose={() => onClose}
          display={{ base: "none", md: "block" }}
        />
        <Header onOpen={onOpen} />
        <Box ml={{ base: 0, md: 60 }} p="4">
          {/* Outlet отображает дочерние маршруты */}
          <Outlet />
        </Box>
      </Box>
    </Container>
  );
};

export default Layout;
