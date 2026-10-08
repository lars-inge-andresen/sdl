/* Created by Lars-Inge Andresen */

/* Local resources */
import { prisma } from "../../prisma/prisma";

export async function getCustomer() {
  const customer = await prisma.customer.findFirst({
    where: { customer_id: 1 },
  });
  // console.log("Customer:", customer?.fullname);
  return customer;
}
