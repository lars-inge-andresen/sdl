/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router";

/* Local resources */
import { canAccess } from "../utilities/roles.js";

export default function Menu({ items, hideLogout, userRole }) {
  return (
    <>
      <div className="menu__container">
        <div className="menu">
          <div className="left">
            {items
              .filter((item) => !item.role || canAccess(userRole, item.role))
              .map((item) => {
                if (item.external) {
                  return (
                    <div key={item.id} className="menu__link">
                      <a href={item.to} target="_blank" rel="noreferrer">
                        <div>
                          <FontAwesomeIcon icon={item.icon} />
                        </div>
                        <div>{item.label}</div>
                      </a>
                    </div>
                  );
                }

                return (
                  <div key={item.to} className="menu__link">
                    <NavLink to={item.to}>
                      <div>
                        <FontAwesomeIcon icon={item.icon} />
                      </div>
                      <div>{item.label}</div>
                    </NavLink>
                  </div>
                );
              })}
          </div>

          <div className="right">
            {!hideLogout && (
              <div className="login">
                <form method="post" action="/logout">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Log out
                  </button>
                </form>
              </div>
            )}

            {hideLogout && (
              <div className="login">
                <a className="btn btn-primary btn-sm button" href="/login">
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
