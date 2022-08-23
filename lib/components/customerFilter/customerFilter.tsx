import Text from "@components/common/typography";
import { ReactElement, Dispatch, SetStateAction } from "react";
import Radio from "./radio";
import { ActiveBG, bgAnm, FilterGroup, FilterItem } from "./styles";

interface filterProps {
  roles: string[];
  active: string;
  setActive: Dispatch<SetStateAction<string>>;
}

const CustomerFilter = ({
  roles,
  active,
  setActive,
}: filterProps): ReactElement | null => {
  const strings: { title: string } = {
    title: "User Types",
  };

  const isActive = (role: string): boolean => role === active;

  if (!roles) return null;
  return (
    <>
      <Text css={{ mb: 32 }} variant="title" as="h3">
        {strings.title}
      </Text>
      <FilterGroup>
        {roles.map((role: string) => {
          return (
            <FilterItem
              aria-label={`filter by ${role}`}
              role="button"
              onKeyPress={() => setActive(role)}
              tabIndex={0}
              key={role}
            >
              <input
                type="radio"
                value={role}
                checked={isActive(role)}
                onChange={() => setActive(role)}
              />
              <Radio active={isActive(role)} />
              <Text>{role.toLowerCase()}</Text>
              {isActive(role) && (
                <ActiveBG
                  initial="initial"
                  animate="active"
                  variants={bgAnm}
                  layoutId="activeBG"
                  transition={{
                    duration: 0.3,
                    type: "spring",
                  }}
                />
              )}
            </FilterItem>
          );
        })}
      </FilterGroup>
    </>
  );
};

export default CustomerFilter;
