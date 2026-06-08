/* Created by Lars-Inge Andresen */

/* Local resources */
import { getSession } from "~/session";
import { getUserByAuthID } from "~/models/user";

export default async function getAuthUser(request: {
  headers: { get: (arg0: string) => string | null | undefined };
}) {
  const session = await getSession(request.headers.get("Cookie"));
  const auth_id = session.get("auth_id");

  if (!auth_id) {
    return null;
  }

  const user = await getUserByAuthID(auth_id);

  return user;
}
