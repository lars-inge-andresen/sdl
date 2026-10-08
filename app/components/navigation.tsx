/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faLock,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import type { Key } from "react";

/* Local resources */
import { canAccess, ROLE_VALUES } from "~/utilities/roles";
import DEP_ICONS from "~/constants/department-icon";

interface NavigationProps {
  activeDepartments: {
    [key: string]: any;
    Index: Key;
    department_id: Key;
    shortname: string;
    fullname: string;
  };
  userRole: string;
}

interface NavIcon {
  [key: string]: any;
}

export default function Navigation({
  activeDepartments,
  userRole,
}: NavigationProps) {
  for (const key of Object.keys(activeDepartments)) {
  }

  const navIcon: NavIcon = DEP_ICONS;

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
                  <FontAwesomeIcon
                    icon={navIcon[department.shortname.toUpperCase()]}
                  />
                  <div>{department.fullname}</div>
                </NavLink>
              </div>
            ),
          )}

          {/* <div className="navigation__link">
            <NavLink to="/tools">
              <FontAwesomeIcon icon={faToolbox} />
              <div>Tools</div>
            </NavLink>
          </div>

          <div className="navigation__link">
            <NavLink to="/about">
              <FontAwesomeIcon icon={faInfoCircle} />
              <div>About SDL</div>
            </NavLink>
          </div>

          {canAccess(userRole, Role.LOCALADMIN) && (
          <div className="navigation__link">
            <NavLink to="/admin">
              <FontAwesomeIcon icon={faLock} />
              <div>Administration</div>
            </NavLink>
          </div>
          )} */}
        </div>
      </div>
    </>
  );
}
