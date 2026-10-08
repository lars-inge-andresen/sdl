/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router";

/* Local resources */
import type { Route } from "./+types/department";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Daily Log" },
    {
      name: "description",
      content: "Change Log.",
    },
  ];
}

export default function ChangeLog() {
  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">Change Log</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon icon={faNoteSticky} />
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
