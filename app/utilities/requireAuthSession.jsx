/* Created by Lars-Inge Andresen */

/* External resources */
import { redirect } from "react-router";

/* Local resources */
import { getSession } from "../session";

export default async function requireAuthSession(request) {
  const session = await getSession(request.headers.get("Cookie"));
  if (!session) {
    throw redirect("/login");
  }

  const auth_id = session.get("auth_id");
  if (!auth_id) {
    throw redirect("/login");
  }

  return auth_id;
}
