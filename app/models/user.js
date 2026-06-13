/* Created by Lars-Inge Andresen */

/* External resources */
import Login from "~/routes/login";
import { prisma } from "../../prisma/prisma";
import * as argon2 from "argon2";
import { Prisma } from "../../generated/prisma/client";

/* Get authorized user */
export async function getUserByAuthID(auth_id) {
  return await prisma.user.findFirst({
    where: {
      auth_id,
    },
    include: {
      department: true,
    },
  });
}

/* Used in login form */
export async function userLogin(login, password) {
  const user = await prisma.user.findFirst({
    where: {
      login,
    },
  });
  if (!user) return null;

  if (await argon2.verify(user.password, password)) return user.auth_id;
  return null;
}

/* try {
  async function userLogin(login, password) {
    const user = await prisma.user.findFirst({
      where: {
        login,
      },
    });
    if (!user) return null;

    if (await argon2.verify(user.password, password)) return user.auth_id;
    return null;
  }
} catch (e) {
  if (e instanceof Prisma.PrismaClientKnownRequestError) {
    // The .code property can be accessed in a type-safe manner
    if (e.code === "P2002") {
      console.log(
        "There is a unique constraint violation, a new user cannot be created with this email",
      );
    }
  }
  throw e;
} */
