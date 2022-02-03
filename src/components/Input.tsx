import { indigoDark } from "@radix-ui/colors";
import { styled } from "@stitches/react";

export const Input = styled("input", {
  all: "unset",
  height: "35px",
  borderRadius: "8px",
  padding: "0 16px",
  backgroundColor: "#fff",
  border: "1px solid #a8a8b3",
  marginBottom: "10px",

  "&:focus": {
    boxShadow: `0 0 0 2px ${indigoDark.indigo9}`,
  },
});
