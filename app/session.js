/* Created by Lars-Inge Andresen */

/* External resources  */
import { createCookieSessionStorage } from "react-router";

const { getSession, commitSession, destroySession } =
  createCookieSessionStorage({
    // A cookie from "createCookie" or create one
    cookie: {
      name: "__session",

      // All the following settings are optional
      // Expires can be used, but will be overwritten by maxAge if both are used
      // Expires is not recommended
      httpOnly: true,
      maxAge: 60 * 60 * 24, // 86 400 seconds = 24 hours
      path: "/",
      sameSite: "Strict",
      secrets: [import.meta.env.COOKIE_SECRET],
      secure: import.meta.env.NODE_ENV !== "development",
    },
  });

export { getSession, commitSession, destroySession };
