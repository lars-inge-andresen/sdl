/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
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

/* Require logged in user */
export const loader = async ({ request }: Route.LoaderArgs) => {
  await requireRole(request, ROLE_VALUES.OFFICE);
  return null;
};

export default function Administration() {
  return (
    <>
      {/* <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">SDL Administration</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon icon={faLock} />
          </div>
        </div>

        <Outlet />
      </div> */}
    </>
  );
}
