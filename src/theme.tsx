import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          "pre&": {
            whiteSpace: "pre-wrap",
          },
        },
      },
    },
  },
});

export default theme;
