import { styled } from "@stitches";
import Text from "@components/common/typography";
import { motion, Variants } from "framer-motion";

export const CustomerListWrapper = styled(motion.div, {
  position: "relative",
  borderRadius: 32,
  bg: "$white",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  flex: 1,
  maxWidth: 425,
  m: 16,
  px: 24,
  py: 32,
});

export const CustomerList = styled(motion.div, {
  display: "flex",
  flexFlow: "column",
  rowGap: 42,
});

export const CustomerItem = styled(motion.div, {
  display: "flex",
  columnGap: 16,
  alignItems: "center",
});

export const CustomerDetails = styled(motion.div, {
  display: "flex",
  flexFlow: "column",
  rowGap: 8,
});

export const ErrorWrapper = styled("div", {
  display: "flex",
  flexBasis: 1,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 16,
  border: "1px solid #ff8a8a",
  bg: "#fe9b9c",
  p: "2em",
  [`${Text}`]: {
    textTransform: "none",
    color: "$white",
  },
});

export const list: Variants = {
  visible: { opacity: 1 },
  hidden: {
    opacity: 0,
    transition: { when: "beforeChildren", duration: 0.75 },
  },
};

export const item: Variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.15,
    },
  }),
  hidden: { opacity: 0 },
};
