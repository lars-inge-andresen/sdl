/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import type { Key } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";

/* Local resources */
import departmentIcon from "~/constants/department-icon";

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
                <NavLink to={department.shortname.toLowerCase()}>
                  {/*                   <FontAwesomeIcon
                    icon={departmentIcon[department.shortname] as IconProp}
                  /> */}
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
