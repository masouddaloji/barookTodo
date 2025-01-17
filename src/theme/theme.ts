"use client";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          width: "100%",
          "& .MuiInputBase-input.Mui-disabled": {
            WebkitTextFillColor: "var(--color)",
          },
          "& .MuiOutlinedInput-root": {
            borderColor: "var(--color)",
            color: "var(--color)",
            "&.Mui-disabled": {
              backgroundColor: "#15101C",
              "& fieldset": {
                borderColor: "transparent",
                color: "var(--color)",
              },
              "&:hover fieldset": {
                borderColor: "#15101C",
              },
            },
            "& fieldset": {
              borderColor: "var(--color)",
            },
            "&:hover fieldset": {
              borderColor: "var(--color)",
            },
            "&.Mui-focused fieldset": {
              borderColor: "var(--color)",
            },
          },
          "& .MuiInputLabel-outlined": {
            color: "var(--color)",
          },
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          padding: "0 8px 0 0",
          marginTop: "0",
          maxHeight: "30dvh",
          overflowY: "auto",
        },
      },
    },
  },
});

export default theme;
