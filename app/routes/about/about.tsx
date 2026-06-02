/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle, faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { Outlet } from "react-router";

/* Local resources */
import type { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About SDL" },
    { name: "description", content: "About the application" },
  ];
}

export const handle = {
  menu__links: () => {
    {
      to: "/about/manual";
      icon: faBookOpen;
      label: "User manual";
    }
  },
};

export default function About() {
  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">About</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon icon={faInfoCircle} />
          </div>
        </div>
        Seismic Daily Log, from now on called SDL, is an application designed
        especially for vessels operating in the seismic industry.
        <Outlet />
      </div>
    </>
  );
}
