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
import { canAccess } from "../utilities/roles.js";

/* interface MenuProps {
  items: any;
  item: any;
  hideLogout: any;
  userRole: any;
} */

export default function Menu({ items, hideLogout, userRole }) {
  return (
    <>
      <div className="menu__container">
        <div className="menu">
          <div className="left">
            TEST
            {items
              .filter((item) => !item.role || canAccess(userRole, item.role))
              .map((item) => {
                if (item.external) {
                  return (
                    <div key={item.to} className="menu_link">
                      <a href={item.to} target="_blank" rel="noreferrer">
                        <div className="menu_icon">
                          <FontAwesomeIcon icon={item.icon} />
                        </div>
                        <div className="menu_label">{item.label}</div>
                      </a>
                    </div>
                  );
                }

                return (
                  <div key={item.to} className="menu_link">
                    <NavLink to={item.to}>
                      <div className="menu_icon">
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      <div className="menu_label">{item.label}</div>
                    </NavLink>
                  </div>
                );
              })}
          </div>

          <div className="right">
            {!hideLogout && (
              <div className="login">
                {/* <Form method="post" action="/logout"> */}
                <button type="submit" className="btn btn-primary btn-sm">
                  Log out
                </button>
                {/*     </Form> */}
              </div>
            )}

            {hideLogout && (
              <div className="login">
                <a className="btn btn-primary btn-sm" href="/login">
                  Log in
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
