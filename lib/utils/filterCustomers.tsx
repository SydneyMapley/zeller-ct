import { customerDetails } from "lib/gql/customersQuery";

interface FilteredCustomerTypes {
  [key: string]: customerDetails[];
}

// takes array of roles and filters customer data by role
// returns array that aligns with the active role.
// if active role cannot be found in roles, returns null.

const filterCustomers = (
  roles: string[],
  customers: customerDetails[],
  active: string
): customerDetails[] | null => {
  const FilterByRole: FilteredCustomerTypes = Object.fromEntries(
    roles.map((role: string) => [
      role,
      customers.filter((customer: customerDetails) => customer.role === role),
    ])
  );

  if (!Object.keys(FilterByRole).includes(active)) return null;
  return FilterByRole[active];
};

export default filterCustomers;
