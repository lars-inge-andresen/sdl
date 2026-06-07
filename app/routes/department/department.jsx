/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, useLoaderData, data } from "react-router";

/* Local resources */
import requireAuthSession from "~/utilities/requireAuthSession";
import { getDepartmentByShortname } from "~/models/department.js";
import DEP_META from "~/constants/department-meta";
import DEP_ICON from "~/constants/department-icon";
import DEP_STRING from "~/constants/department-string";
import DEP_MENU from "~/constants/department-menu";

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
  if (DEP_META[department.shortname.toUpperCase()]?.protected !== false) {
    await requireAuthSession(request);
  }
  /*   console.log(department); */
  return data({ department });
};

export const handle = {
  menu__links: (params) => DEP_MENU[params.dep.toUpperCase()],
};

export default function Department() {
  const { department } = useLoaderData();

  const pageTitle =
    DEP_STRING[department.shortname.toUpperCase()]?.title ??
    department.fullname;
  const pageIcon = DEP_ICON;
  const pageDescription =
    DEP_STRING[department.shortname.toUpperCase()]?.description ??
    department.fullname;

  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">{pageTitle}</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon
              icon={pageIcon[department.shortname.toUpperCase()]}
            />
          </div>
        </div>
        <p>{pageDescription}</p>

        <Outlet />
      </div>
    </>
  );
}
