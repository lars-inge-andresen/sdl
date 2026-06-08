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
  menu__links: () => [
    {
      to: "/about/manual",
      icon: faBookOpen,
      label: "User manual",
    },
  ],
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
        <p>
          This section contains a brief user manual as well as a change log for
          the application.
        </p>
        <p>
          Seismic Daily Log, heareafter called SDL, is a web application
          developed and designed especially for the seismic industry. It is
          designed with the end user in focus, and the main goal has been to
          make logging and reporting as intuitive and easy as possible.
          <br />
          Traditionally, the industry has used various text editors and
          spreadsheets for logging activities. This makes it difficult and some
          times very complicated when data needs to be shared or updated with
          other users and/or departments.
        </p>
        <p>
          SDL stores all data in a database which makes it very easy to share
          information. It also allows other users to update information where
          needed. One example is the line log, or production log, where all
          relevant departments have access to add and update information during
          production.
          <br />
          Once the sequence is complete, the log is easily shared with other
          departments and/or users for instant access.
        </p>
        <Outlet />
      </div>
    </>
  );
}
