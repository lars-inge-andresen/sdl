/* Created by Lars-Inge Andresen */

/* Local resources */
import { prisma } from "../../prisma/prisma";

/* Used in navigation */
export async function getActiveDepartments() {
  const activeDepartments = await prisma.department.findMany({
    where: { status_id: 1 },
    select: { shortname: true, fullname: true },
  });
  console.log("Departments:", activeDepartments);
  return activeDepartments;
}
