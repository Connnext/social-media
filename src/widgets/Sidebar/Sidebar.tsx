import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { LinkItemProps, SidebarProps } from "./Sidebar.types";
import { CloseButton } from "components/ui/close-button";
import NavItem from "./NavItem/NavItem";
import { ROUTES } from "utils/constants/routes";
import { GrHomeRounded } from "react-icons/gr"; // Для Home
import { GrUserSettings } from "react-icons/gr"; // Для Account
import { GrChat } from "react-icons/gr"; // Для Messages
import { GrLike } from "react-icons/gr"; // Для Likes
import { GrGroup } from "react-icons/gr"; // Для Friends
import { useThemeColors } from "hooks/useThemeColor";

const Sidebar = ({ onClose }: SidebarProps) => {
  const LinkItems: Array<LinkItemProps> = [
    { name: "Home", icon: <GrHomeRounded />, route: ROUTES.HOME },
    { name: "Friends", icon: <GrGroup />, route: ROUTES.FRIENDS },
    { name: "Messages", icon: <GrChat />, route: ROUTES.MESSAGES },
    { name: "Likes", icon: <GrLike />, route: ROUTES.LIKES },
    { name: "Account", icon: <GrUserSettings />, route: ROUTES.ACCOUNT },
  ];

  const { primary, background, text } = useThemeColors();

  return (
    <Box
      minH="100vh"
      color={text} // Используем значение цвета
      bg={background} // Используем значение фона
      borderRight="1px"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Strict Social
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

export default Sidebar;
