/* Created by Lars-Inge Andresen */

/* External resources */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Outlet, useLoaderData, data } from "react-router";

/* Local resources */
import type { RouteHandle } from "~/types";
import type { Route } from "./+types/department";
import { getDepartmentByShortname } from "~/models/department.js";
import DEP_META from "~/constants/department-meta";
import DEP_ICONS from "~/constants/department-icon";
import DEP_STRINGS from "~/constants/department-string";
import DEP_MENU from "~/constants/department-menu";
import requireAuthSession from "~/utilities/requireAuthSession";

export function meta() {
  return [
    { title: "Department" },
    { name: "description", content: "Department pages" },
  ];
}

export const loader = async ({ request, params }: Route.LoaderArgs) => {
  const department = await getDepartmentByShortname(params.dep);
  if (!department) {
    throw new Response("Page not found", { status: 404 });
  }
  if (
    DEP_META[department.shortname.toUpperCase() as keyof typeof DEP_META]
      ?.protected !== false
  ) {
    await requireAuthSession(request);
  }
  /*   console.log(department); */
  return data({ department });
};

export const handle = {
  menu__links: (department) =>
    DEP_MENU[department.toUpperCase() as keyof typeof DEP_MENU] ?? [],
} satisfies RouteHandle;

export default function Department() {
  const { department } = useLoaderData();

  const depStrings =
    DEP_STRINGS[department.shortname.toUpperCase() as keyof typeof DEP_STRINGS];
  const pageTitle = depStrings?.title ?? department.fullname;
  const pageDescription = depStrings?.description ?? department.fullname;

  return (
    <>
      <div className="content">
        <div className="content__header">
          <div className="content__title">
            <h2 className="text-2xl font-bold">{pageTitle}</h2>
          </div>
          <div className="content__icon">
            <FontAwesomeIcon
              icon={
                DEP_ICONS[
                  department.shortname.toUpperCase() as keyof typeof DEP_ICONS
                ]
              }
            />
          </div>
        </div>
        <p>{pageDescription}</p>

        <Outlet />
      </div>
    </>
  );
}
