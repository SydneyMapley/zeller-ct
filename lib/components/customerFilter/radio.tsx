import { AnimatePresence, motion, Variants } from "framer-motion";
import { styled, theme } from "@stitches";

const RadioWrapper = styled(motion.svg, {
  zIndex: 1,
  position: "relative",
  top: "0.05em",
});
const RadioBorder = styled(motion.circle);
const RadioFill = styled(motion.circle);

interface RadioProps {
  size?: number;
  active: boolean;
}

const fillAnm: Variants = {
  active: {
    scale: 1,
    opacity: 1,
  },
  inactive: {
    scale: 0,
    opacity: 0,
  },
};

const Radio = ({ size = 16, active }: RadioProps) => {
  const blue: string = theme.colors.blue.value;

  return (
    <RadioWrapper
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      css={{ width: size, height: size }}
    >
      <RadioBorder cx="8" cy="8" r="7" stroke={blue} strokeWidth="2" />
      <AnimatePresence exitBeforeEnter>
        {active && (
          <RadioFill
            variants={fillAnm}
            initial="inactive"
            animate="active"
            exit="inactive"
            cx={8}
            cy={8}
            r={4}
            fill={blue}
          />
        )}
      </AnimatePresence>
    </RadioWrapper>
  );
};

export default Radio;
