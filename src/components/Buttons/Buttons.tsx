// components/ui/Buttons.tsx
import React from "react";
import { Button } from "@chakra-ui/react";

// Кнопка с обычным стилем
export const PrimaryButton = ({ children, ...props }: any) => (
  <Button colorPalette="teal" size="md" {...props}>
    {children}
  </Button>
);

// Кнопка с вариантами
export const SecondaryButton = ({ children, ...props }: any) => (
  <Button variant="outline" colorPalette="blue" size="md" {...props}>
    {children}
  </Button>
);

// Кнопка с красным фоном
export const DangerButton = ({ children, ...props }: any) => (
  <Button colorPalette="red" size="md" {...props}>
    {children}
  </Button>
);

// Кнопка с большим размером
export const LargeButton = ({ children, ...props }: any) => (
  <Button size="lg" colorPalette="purple" {...props}>
    {children}
  </Button>
);
