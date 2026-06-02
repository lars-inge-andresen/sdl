/* Created by Lars-Inge Andresen */

/* Local resources */
import { prisma } from "../../prisma/prisma";

export async function getDeveloper() {
  const developer = await prisma.developer.findFirst();
  /*   console.log("Developer:", developer?.fullname); */
  return developer;
}
