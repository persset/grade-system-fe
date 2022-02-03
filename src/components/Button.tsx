import { indigoDark, blackA, redA, mauve } from "@radix-ui/colors";
import { styled } from "@stitches/react";

export const Button = styled("button", {
  all: "unset",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  padding: "0 16px",
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
  height: 35,

  variants: {
    variant: {
      indigo: {
        backgroundColor: indigoDark.indigo9,
        color: "white",
        boxShadow: `0 2px 10px ${blackA.blackA7}`,
        "&:hover": { backgroundColor: indigoDark.indigo8 },
        "&:focus": { boxShadow: `0 0 0 2px black` },
      },
      red: {
        backgroundColor: redA.redA11,
        color: mauve.mauve1,
        "&:hover": { backgroundColor: redA.redA12 },
        "&:focus": { boxShadow: `0 0 0 2px ${redA.redA3}` },
      },
    },
  },
  defaultVariants: {
    variant: "indigo",
  },
});
