import { useState } from "react";
import CustomerFilter from "@components/customerFilter/customerFilter";
import { customerDetails, customerProps } from "lib/gql/customersQuery";
import Text from "@components/common/typography";
import CustomerIcon from "@components/customerIcon/customerIcon";
import filterCustomers from "@utils/filterCustomers";
import {
  CustomerDetails,
  CustomerItem,
  CustomerList,
  CustomerListWrapper,
  list,
  item,
  ErrorWrapper,
} from "./styles";

const Customers = ({ customers }: customerProps) => {
  const [activeRole, setActiveRole] = useState<string>("ADMIN");

  // get roles from customer array, remove duplicates.
  const getRoles: string[] = Array.from(
    new Set(customers.map(({ role }: customerDetails) => role))
  ).sort();

  const filteredCustomers = filterCustomers(getRoles, customers, activeRole);

  return (
    <CustomerListWrapper>
      <CustomerFilter
        roles={getRoles}
        active={activeRole}
        setActive={setActiveRole}
      />
      <Text css={{ my: 32 }} as="h3" variant="title">
        {`${activeRole.toLowerCase()} Users`}
      </Text>
      <CustomerList initial="hidden" animate="visible" variants={list}>
        {!!filteredCustomers ? (
          filteredCustomers.map(
            ({ id, name, role }: customerDetails, idx: number) => {
              // lift first character for customer icon
              const initial: string = name.charAt(0).toUpperCase();
              return (
                <CustomerItem custom={idx} variants={item} key={id}>
                  <CustomerIcon letter={initial} />
                  <CustomerDetails>
                    <Text variant="label">{name}</Text>
                    <Text variant="underline">{role.toLowerCase()}</Text>
                  </CustomerDetails>
                </CustomerItem>
              );
            }
          )
        ) : (
          <ErrorWrapper>
            <Text>no results found for role: {activeRole}</Text>
          </ErrorWrapper>
        )}
      </CustomerList>
    </CustomerListWrapper>
  );
};
export default Customers;
