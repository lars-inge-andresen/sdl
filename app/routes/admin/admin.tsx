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
    },
    {
      to: "/admin/vessel",
      icon: faShip,
      label: "Vessel",
    },
    {
      to: "/admin/department",
      icon: faBuilding,
      label: "Department",
    },
    {
      to: "/admin/user",
      icon: faUserFriends,
      label: "User",
    },
    {
      to: "/admin/project",
      icon: faDiagramProject,
      label: "Project",
    },
    {
      to: "/admin/activity",
      icon: faSnowboarding,
      label: "Activity",
    },
    {
      to: "/admin/category",
      icon: faFolderTree,
      label: "Category",
    },
    {
      to: "/admin/position",
      icon: faLocationDot,
      label: "Position",
    },
    {
      to: "/admin/failure",
      icon: faTriangleExclamation,
      label: "Failure",
    },
  ],
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
