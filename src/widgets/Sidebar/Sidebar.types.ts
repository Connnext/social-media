import { IconType } from "react-icons";
import { BoxProps, FlexProps } from "@chakra-ui/react";

export interface LinkItemProps {
  name: string /** Название пункта меню */;
  icon: IconType /** Иконка из react-icons */;
}

export interface NavItemProps extends FlexProps {
  icon: IconType /** Иконка для элемента навигации */;
  children: React.ReactNode /** Вложенный текст или элементы */;
}

export interface MobileProps extends FlexProps {
  onOpen: () => void /** Колбэк для открытия мобильного меню */;
}

export interface SidebarProps extends BoxProps {
  onClose: () => void /** Колбэк для закрытия сайдбара */;
}
