import Text from "@components/common/typography";
import { styled } from "@stitches";

const Container = styled("div", {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  borderRadius: 6,
  bg: "$lightBlue",
});

const Initial = styled(Text, {
  position: "relative",
  fontSize: "$icon",
  fontWeight: "$semiBold",
  top: "-0.1em",
  color: "$blue",
});

const CustomerIcon = ({ letter }: { letter: string }) => {
  return (
    <Container>
      <Initial>{letter}</Initial>
    </Container>
  );
};
export default CustomerIcon;
