/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalculator, faToolbox } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router";

/* Local resources */
import type { Route } from "./+types/tools";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Tools" },
    {
      name: "description",
      content: "Various tools used by the departments onboard.",
    },
  ];
}

export const handle = {
  menu__links: () => [
    {
      to: "/tools/winch-calculator",
      icon: faCalculator,
      label: "Winch calculator",
    },
  ],
};

export default function Tools() {
  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">Tools</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon icon={faToolbox} />
          </div>
        </div>
        Seismic Daily Log, from now on called SDL, is an application designed
        especially for vessels operating in the seismic industry.
        <Outlet />
      </div>
    </>
  );
}
