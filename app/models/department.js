/* Created by Lars-Inge Andresen */

/* Local resources */
import { prisma } from "../../prisma/prisma";

/* Used in navigation */
export async function getActiveDepartments() {
  const activeDepartments = await prisma.department.findMany({
    where: { status_id: 1, NOT: { shortname: "sdl" } },
    select: { shortname: true, fullname: true },
    orderBy: { shortname: "asc" },
  });
  /*   console.log("Departments:", activeDepartments); */
  return activeDepartments;
}

/* Used on department pages */
export async function getDepartmentByShortname(shortname) {
  const departmentByShortname = await prisma.department.findFirst({
    where: { shortname },
  });
  /*   console.log("Department:", departmentByShortname); */
  return departmentByShortname;
}
