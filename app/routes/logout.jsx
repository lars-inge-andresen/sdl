/* Created by Lars-Inge Andresen */

/* External resources */
import { redirect } from "react-router";

/* Local resources */
import { getSession, destroySession } from "~/session";

export const action = async ({ request }) => {
  const session = await getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(session),
    },
  });
};
