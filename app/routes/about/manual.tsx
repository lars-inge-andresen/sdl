/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router";

/* Local resources */
import type { Route } from "./+types/department";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "User manual" },
    {
      name: "description",
      content: "Everything you need to know about the application.",
    },
  ];
}

export default function Manual() {
  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">User manual</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
        </div>
        <p>
          This section contains a brief user manual as well as a change log for
          the application.
        </p>
        <Outlet />
      </div>
    </>
  );
}
