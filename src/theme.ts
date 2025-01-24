import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const COLORS = {
  light: {
    primary: "#F76C6C", // Основной цвет для светлой темы
    secondary: "#A8D0E6", // Вторичный цвет для светлой темы
    background: "#F8E9A1", // Фоновый цвет для светлой темы
    text: "#24305E", // Цвет текста для светлой темы
    title: "#374785",
    gray: "#f4f4f5",
    switchColor: "#ecd97d",
  },
  dark: {
    primary: "#374785", // Основной цвет для темной темы
    secondary: "#A8D0E6", // Вторичный цвет для темной темы
    background: "#24305E", // Фоновый цвет для темной темы
    text: "#F8E9A1", // Цвет текста для темной темы
    title: "#F76C6C",
    gray: "#18181b",
    switchColor: "#374785",
  },
};

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: {
          light: { value: COLORS.light.primary },
          dark: { value: COLORS.dark.primary },
        },
        secondary: {
          light: { value: COLORS.light.secondary },
          dark: { value: COLORS.dark.secondary },
        },
        background: {
          light: { value: COLORS.light.background },
          dark: { value: COLORS.dark.background },
        },
        text: {
          light: { value: COLORS.light.text },
          dark: { value: COLORS.dark.text },
        },
        title: {
          light: { value: COLORS.light.title },
          dark: { value: COLORS.dark.title },
        },
        gray: {
          light: { value: COLORS.light.gray },
          dark: { value: COLORS.dark.gray },
        },
        switchColor: {
          light: { value: COLORS.light.switchColor },
          dark: { value: COLORS.dark.switchColor },
        },
      },
      fonts: {
        heading: { value: `'Figtree', sans-serif` }, // Шрифт для заголовков
        body: { value: `'Figtree', sans-serif` }, // Шрифт для основного текста
      },
      cursor: {
        button: { value: "pointer" },
        option: { value: "pointer" },
      },
    },
  },
});

const theme = createSystem(defaultConfig, config);

export default theme;
