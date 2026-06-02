/* Created by Lars-Inge Andresen */

/* Local resources */
import { prisma } from "../../prisma/prisma";

export async function getVessel() {
  const vessel = await prisma.vessel.findFirst();
  /*   console.log("Vessel:", vessel?.fullname); */
  return vessel;
}
