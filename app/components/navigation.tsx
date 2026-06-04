/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faLock,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

/* Local resources */
import departmentString from "~/constants/department-string";
import departmentIcon from "~/constants/department-icon";
import type { Key } from "react";
import DEP_ICON from "~/constants/department-icon";

interface NavigationProps {
  activeDepartments: {
    [key: string]: any;
    shortname: string;
    fullname: string;
  };
}

export default function Navigation({ activeDepartments }: NavigationProps) {
  for (const key of Object.keys(activeDepartments)) {
  }
  const dep = activeDepartments.map((departments: { shortname: string }) =>
    departments.shortname.toUpperCase(),
  );

  /*   const icon: [string, IconDefinition] = DEP_ICON[dep.shortname.toUpperCase()]; */

  return (
    <>
      <div className="navigation__container">
        <div className="navigation">
          <div className="navigation__link">
            <NavLink to="/">
              <FontAwesomeIcon icon={faHome} />
              <div>Home</div>
            </NavLink>
          </div>

          {activeDepartments.map(
            (
              department: {
                department_id: Key;
                shortname: string;
                fullname: string;
              },
              index: Key,
            ) => (
              <div key={index} className="navigation__link">
                <NavLink to={department.shortname}>
                  {dep.shortname}
                  {/* <FontAwesomeIcon icon={icon} /> */}
                  <div>{department.fullname}</div>
                </NavLink>
              </div>
            ),
          )}

          <div className="navigation__link">
            <NavLink to="/about">
              <FontAwesomeIcon icon={faInfoCircle} />
              <div>About SDL</div>
            </NavLink>
          </div>

          <div className="navigation__link">
            <NavLink to="/administration">
              <FontAwesomeIcon icon={faLock} />
              <div>Administration</div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
