/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { Outlet, useLoaderData, data } from "react-router";

/* Local resources */
/* import type { Route } from "./+types/department"; */
import { getDepartmentByShortname } from "~/models/department.js";
import departmentString from "~/constants/department-string";
import departmentIcon from "~/constants/department-icon";
import departmentMeta from "~/constants/department-meta";
import requireAuthSession from "~/utilities/requireAuthSession";

/* interface DepartmentProps {
  department: {
    [key: string]: any;
    shortname: string;
    fullname: string;
  };
} */

export function meta() {
  return [
    { title: "Department" },
    { name: "description", content: "Department pages" },
  ];
}

export const loader = async ({ request, params }) => {
  const department = await getDepartmentByShortname(params.dep);
  if (!department) {
    throw new Response("Page not found", { status: 404 });
  }
  if (departmentMeta[department.shortname.toUpperCase()]?.protected !== false) {
    await requireAuthSession(request);
  }
  console.log(department);
  return data({ department });
};

export const handle = {
  /*   menu__links: () => {
    {
      to: "/about/manual";
      icon: faBookOpen;
      label: "User manual";
    }
  }, */
};

export default function Department() {
  const { department } = useLoaderData();
  const pageTitle =
    departmentString[department.shortname]?.departmentTitle ??
    department.fullname;
  const pageIcon = departmentIcon[department.shortname];

  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">{pageTitle} Department</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon icon={pageIcon} />
          </div>
        </div>

        <Outlet />
      </div>
    </>
  );
}
