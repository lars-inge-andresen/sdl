/* Created by Lars-Inge Andresen */

/* Local resources */
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});
const prisma = new PrismaClient({
  adapter,
});

/* Developer data */
import developerData from "./developer";
import statusData from "./status";
import departmentData from "./department";
import userData from "./user";

/* Customer data */
import customerData from "./customer";
import vesselData from "./vessel";

async function seed() {
  /* Developer */
  for (const u of developerData) {
    await prisma.developer.create({ data: u });
  }

  for (const u of statusData) {
    await prisma.status.create({ data: u });
  }

  for (const u of departmentData) {
    await prisma.department.create({ data: u });
  }

  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  /* Customer */
  for (const u of customerData) {
    await prisma.customer.create({ data: u });
  }

  for (const u of vesselData) {
    await prisma.vessel.create({ data: u });
  }
}

seed()
  .catch((e) => {
    console.error("❌ Error seeding data:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
