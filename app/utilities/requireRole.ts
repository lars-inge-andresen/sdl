/* Created by Lars-Inge Andresen */

/* Local resources */
import { getUserByAuthID } from "~/models/user";
import requireAuthSession from "./requireAuthSession";
import { canAccess, type Role } from "./roles";

export default async function requireRole(request: any, targetRole: any) {
  const auth_id = await requireAuthSession(request);
  const user = await getUserByAuthID(auth_id);
  if (!canAccess(user?.role as Role , targetRole)) {
    throw new Response("forbidden", { status: 404 });
  }
}
