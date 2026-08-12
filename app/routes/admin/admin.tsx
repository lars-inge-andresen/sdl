/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faIdCard,
  faShip,
  faBuilding,
  faDiagramProject,
  faSnowboarding,
  faFolderTree,
  faLocationDot,
  faUserFriends,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router";

/* Local resources */
import type { Route } from "./+types/admin";
import requireRole from "~/utilities/requireRole";
import { ROLE_VALUES } from "~/utilities/roles";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "SDL Administration" },
    { name: "description", content: "Application administration" },
  ];
}

export const handle = {
  menu__links: () => [
    {
      to: "/admin/customer",
      icon: faIdCard,
      label: "Customer",
      role: ROLE_VALUES.GLOBALADMIN,
    },
    {
      to: "/admin/vessel",
      icon: faShip,
      label: "Vessel",
      role: ROLE_VALUES.LOCALADMIN,
    },
    {
      to: "/admin/department",
      icon: faBuilding,
      label: "Department",
      role: ROLE_VALUES.LOCALADMIN,
    },
    {
      to: "/admin/user",
      icon: faUserFriends,
      label: "User",
      role: ROLE_VALUES.LOCALADMIN,
    },
    {
      to: "/admin/project",
      icon: faDiagramProject,
      label: "Project",
      role: ROLE_VALUES.LOCALADMIN,
    },
    {
      to: "/admin/activity",
      icon: faSnowboarding,
      label: "Activity",
      role: ROLE_VALUES.LOCALADMIN,
    },
    {
      to: "/admin/category",
      icon: faFolderTree,
      label: "Category",
      role: ROLE_VALUES.LOCALADMIN,
    },
    {
      to: "/admin/position",
      icon: faLocationDot,
      label: "Position",
      role: ROLE_VALUES.LOCALADMIN,
    },
    {
      to: "/admin/failure",
      icon: faTriangleExclamation,
      label: "Failure",
      role: ROLE_VALUES.LOCALADMIN,
    },
  ],
};

/* Require logged in user */
export const loader = async ({ request }: Route.LoaderArgs) => {
  await requireRole(request, ROLE_VALUES.LOCALADMIN);
  return null;
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

        <Outlet />
      </div>
    </>
  );
}
