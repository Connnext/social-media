// components/Header/Header.tsx
import React from "react";
import { Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useColorMode } from "components/ui/color-mode";
import { useThemeColors } from "hooks/useThemeColor";

interface HeaderProps {
  onOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpen }) => {
  const { colorMode, toggleColorMode } = useColorMode(); // Управление темой
  const { background, text, gray, primary, title, switchColor } =
    useThemeColors();

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={"4"}
      position={"sticky"}
      top={"0"}
      height={"20"}
      zIndex={"1"}
      alignItems={"center"}
      color={text}
      bg={background}
      borderBottomRightRadius={"2xl"}
      justifyContent={{ base: "space-between", md: "flex-end" }}
    >
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={onOpen}
        variant={"outline"}
        aria-label="open menu"
      />
      <Text
        display={{ base: "flex", md: "none" }}
        fontSize={"2xl"}
        fontFamily={"monospace"}
        fontWeight={"bold"}
      >
        Logo
      </Text>
      {/* Кнопка для переключения темы */}
      <Button
        onClick={toggleColorMode}
        aria-label="Toggle Theme"
        variant="subtle"
        size="lg"
        bg={background}
        transition={"0.6s"}
        _hover={{
          bg: switchColor,
        }}
      >
        {colorMode === "light" ? <MdDarkMode /> : <MdLightMode />}
      </Button>
    </Flex>
  );
};

export default Header;
