/* Created by Lars-Inge Andresen */

/* External resources */
import { verify } from "crypto";
import { prisma } from "../../prisma/prisma";
import * as argon2 from "argon2";

export async function getUserByAuthID(auth_id: number) {
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
export async function userLogin(login: string, password: string) {
  const user = await prisma.user.findFirst({
    where: {
      login,
    },
  });
  if (!user) return null;

  if (await argon2.verify(user.password, password)) return user.auth_id;
  return null;
}
