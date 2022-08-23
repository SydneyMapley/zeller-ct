import { styled } from "@stitches";
import { motion, Variants } from "framer-motion";

export const FilterGroup = styled(motion.div, {
  display: "flex",
  flexFlow: "column",
  rowGap: 12,
  borderBottom: "1px solid #c2ccd5",
  pb: 42,
});
export const ActiveBG = styled(motion.div, {
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  borderRadius: 6,
  background: "$lightBlue",
  zIndex: 0,
});

export const FilterItem = styled(motion.label, {
  position: "relative",
  display: "flex",
  columnGap: 12,
  py: 12,
  px: 12,
  borderRadius: 6,
  cursor: "pointer",
  input: { display: "none" },
  span: {
    zIndex: "1",
    textTransform: "capitalize",
  },
});

export const bgAnm: Variants = {
  initial: { opacity: 0 },
  active: { opacity: 1 },
};
