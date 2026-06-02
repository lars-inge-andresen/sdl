/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";

/* Local resources */

interface NavigationProps {
  department: { shortname: string; fullname: string };
}

export default function Navigation({ department }: NavigationProps) {
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
