import { styled } from "@stitches";

const Content = styled("div", {
  display: "flex",
  flex: 1,
  margin: "0 auto",
  width: "100%",
  justifyContent: "flex-start",
  alignItems: "flex-start",
});

const Layout = ({ children }: layoutTypes) => {
  return <Content>{children}</Content>;
};

type layoutTypes = {
  children: React.ReactNode;
};

export default Layout;
