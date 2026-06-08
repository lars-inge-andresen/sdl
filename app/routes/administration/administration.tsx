/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faIdCard,
  faShip,
  faBuilding,
  faUserGroup,
  faDiagramProject,
  faSnowboarding,
  faFolderTree,
  faLocationDot,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router";

/* Local resources */
import type { Route } from "./+types/administration";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SDL Administration" },
    { name: "description", content: "Application administration" },
  ];
}

export const handle = {
  menu__links: () => {
    {
      to: "/administration/customer";
      icon: faIdCard;
      label: "User manual";
    }
  },
};

export default function Administration() {
  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">SDL Administration</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
        </div>
        <p>
          This section contains all the tools you need for administer the local
          installation of the application.
        </p>
        <p>
          You will not be able to administer global setup, i.e., departments,
          activities and categoris since these are global settings. Please
          contact your administrator if you cannot find what you are looking
          for.
        </p>
        <Outlet />
      </div>
    </>
  );
}
