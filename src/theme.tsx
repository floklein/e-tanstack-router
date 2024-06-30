import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import type {} from "@mui/lab/themeAugmentation";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          wordBreak: "break-word",
          "a&": {
            textDecoration: "none",
          },
          "pre&": {
            whiteSpace: "pre-wrap",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          backgroundColor: grey[100],
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          marginBottom: theme.spacing(1),
        }),
        gutters: {
          marginBottom: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          paddingTop: theme.spacing(2),
          paddingBottom: theme.spacing(2),
        }),
      },
    },
  },
});

export default theme;
