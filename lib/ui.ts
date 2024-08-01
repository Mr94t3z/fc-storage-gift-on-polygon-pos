import { createSystem } from "frog/ui";

export const { Box, Columns, Column, Image, Heading, Text, VStack, Spacer, vars } = createSystem({
  colors: {
    white: "white",
    black: "rgb(10,9,13)",
    purple: "rgb(98,18,236)",
    red: "rgb(253,39,74)",
    grey: 'rgb(135,134,139)',
  },
  fonts: {
    default: [
      {
        name: "Rubik",
        source: "google",
        weight: 400,
      },
      {
        name: "Rubik",
        source: "google",
        weight: 600,
      },
    ],
  },
});