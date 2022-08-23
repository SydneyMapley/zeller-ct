import { styled } from "@stitches";

const Text = styled("span", {
  textTransform: "capitalize",
  fontFamily: "$default",
  color: "$black",
  margin: "unset",
  variants: {
    variant: {
      label: {
        fontSize: "$med",
      },
      underline: {
        fontSize: "$sm",
        color: "$grey",
      },
      title: {
        display: "block",
        textTransform: "capitalize",
        fontSize: "$lrg",
        fontWeight: "$medium",
      },
    },
  },
});

export default Text;
