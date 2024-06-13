import { createSystem } from "frog/ui";

export const { Box, Columns, Column, Image, Heading, Text, VStack, Spacer, vars } = createSystem({
  colors: {
    white: "white",
    black: "rgb(32,49,71)",
    red: "rgb(253,39,74)",
    tosca: "rgb(157,204,237)",
    blue: 'rgb(18,169,255)',
    grey: 'rgba(128, 128, 128, 0.75)',
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