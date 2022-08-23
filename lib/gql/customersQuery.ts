import { gql } from "@apollo/client";

export const ListZellerCustomers = gql`
  query ListZellerCustomers {
    listZellerCustomers {
      items {
        id
        name
        role
      }
    }
  }
`;

export interface customerDetails {
  id: string;
  name: string;
  role: string;
}
export interface customerProps {
  customers: customerDetails[];
}
