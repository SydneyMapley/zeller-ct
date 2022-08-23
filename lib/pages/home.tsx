import { customerProps } from "lib/gql/customersQuery";
import Customers from "@components/customers/customers";

const Home = ({ customers }: customerProps) => {
  return <Customers customers={customers} />;
};

export default Home;
