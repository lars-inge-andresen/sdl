-- CreateEnum
CREATE TYPE "Role" AS ENUM ('GLOBALADMIN', 'LOCALADMIN', 'OFFICE', 'PM', 'CHIEF', 'OPERATOR', 'CLIENT', 'GUEST');

-- CreateTable
CREATE TABLE "Developer" (
    "developer_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shortname" VARCHAR(10) NOT NULL,
    "fullname" VARCHAR(25) NOT NULL,
    "primary_street" VARCHAR(100) NOT NULL,
    "primary_postal_code" VARCHAR(20) NOT NULL,
    "primary_city" VARCHAR(50) NOT NULL,
    "primary_country" VARCHAR(50) NOT NULL,
    "secondary_street" VARCHAR(100),
    "secondary_postal_code" VARCHAR(20),
    "secondary_city" VARCHAR(50),
    "secondary_country" VARCHAR(50),
    "primary_email" VARCHAR(50) NOT NULL,
    "primary_phone" VARCHAR(20) NOT NULL,
    "primary_fax" VARCHAR(20),
    "secondary_email" VARCHAR(50),
    "secondary_phone" VARCHAR(20),
    "secondary_fax" VARCHAR(20),
    "primary_contact" VARCHAR(50) NOT NULL,
    "primary_contact_position" VARCHAR(50) NOT NULL,
    "primary_contact_email" VARCHAR(50),
    "primary_contact_phone" VARCHAR(20),
    "secondary_contact" VARCHAR(50),
    "secondary_contact_position" VARCHAR(50),
    "secondary_contact_email" VARCHAR(50),
    "secondary_contact_phone" VARCHAR(20),

    CONSTRAINT "Developer_pkey" PRIMARY KEY ("developer_id")
);

-- CreateTable
CREATE TABLE "Status" (
    "status_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shortname" VARCHAR(10) NOT NULL,
    "fullname" VARCHAR(25) NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("status_id")
);

-- CreateTable
CREATE TABLE "Department" (
    "department_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shortname" VARCHAR(10) NOT NULL,
    "fullname" VARCHAR(25) NOT NULL,
    "description" VARCHAR(255),
    "status_id" INTEGER NOT NULL,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("department_id")
);

-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "auth_id" SERIAL NOT NULL,
    "login" VARCHAR(10) NOT NULL,
    "firstname" VARCHAR(25) NOT NULL,
    "surname" VARCHAR(25),
    "position" VARCHAR(50) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "confirm_password" VARCHAR(255) NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'GUEST',
    "status_id" INTEGER NOT NULL,
    "department_id" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Customer" (
    "customer_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shortname" VARCHAR(10) NOT NULL,
    "fullname" VARCHAR(25) NOT NULL,
    "primary_street" VARCHAR(100) NOT NULL,
    "primary_postal_code" VARCHAR(20) NOT NULL,
    "primary_city" VARCHAR(50) NOT NULL,
    "primary_country" VARCHAR(50) NOT NULL,
    "secondary_street" VARCHAR(100),
    "secondary_postal_code" VARCHAR(20),
    "secondary_city" VARCHAR(50),
    "secondary_country" VARCHAR(50),
    "primary_email" VARCHAR(50) NOT NULL,
    "primary_phone" VARCHAR(20) NOT NULL,
    "primary_fax" VARCHAR(20),
    "secondary_email" VARCHAR(50),
    "secondary_phone" VARCHAR(20),
    "secondary_fax" VARCHAR(20),
    "primary_contact" VARCHAR(50) NOT NULL,
    "primary_contact_position" VARCHAR(50) NOT NULL,
    "primary_contact_email" VARCHAR(50),
    "primary_contact_phone" VARCHAR(20),
    "secondary_contact" VARCHAR(50),
    "secondary_contact_position" VARCHAR(50),
    "secondary_contact_email" VARCHAR(50),
    "secondary_contact_phone" VARCHAR(20),

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("customer_id")
);

-- CreateTable
CREATE TABLE "Vessel" (
    "vessel_id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ(4) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "shortname" VARCHAR(10) NOT NULL,
    "fullname" VARCHAR(25) NOT NULL,

    CONSTRAINT "Vessel_pkey" PRIMARY KEY ("vessel_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_auth_id_key" ON "User"("auth_id");

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status"("status_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_department_id_fkey" FOREIGN KEY ("department_id") REFERENCES "Department"("department_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "Status"("status_id") ON DELETE RESTRICT ON UPDATE CASCADE;
