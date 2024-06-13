import { createSystem } from "frog/ui";

export const { Box, Columns, Column, Image, Heading, Text, VStack, Spacer, vars } = createSystem({
  colors: {
    white: "white",
    black: "rgb(32,49,71)",
    fcPurple: "rgb(71,42,145)",
    red: "rgb(253,39,74)",
    tosca: "rgb(167,210,210)",
    yellow: 'rgb(247,169,72)',
    purple: 'rgb(117,89,236)',
    blue: 'rgb(17,54,93)',
    grey: 'rgba(128, 128, 128, 0.75)',
    metalPink : 'rgb(195,141,147)',
    bg : 'rgb(23,24,26)'
  },
  fonts: {
    default: [
      {
        name: "Space Mono",
        source: "google",
      },
    ],
  },
});