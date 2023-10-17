-- CreateTable
CREATE TABLE "scheduling" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "messageuser" TEXT NOT NULL,
    "dateService" TEXT NOT NULL,
    "createAdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "userId" TEXT,
    CONSTRAINT "scheduling_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_jobs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "createAdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "userId" TEXT,
    "adminId" TEXT,
    CONSTRAINT "jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "jobs_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "admin" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_jobs" ("createAdt", "description", "id", "name", "price", "updatedAt") SELECT "createAdt", "description", "id", "name", "price", "updatedAt" FROM "jobs";
DROP TABLE "jobs";
ALTER TABLE "new_jobs" RENAME TO "jobs";
CREATE UNIQUE INDEX "jobs_description_key" ON "jobs"("description");
CREATE TABLE "new_admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "cnpj" TEXT NOT NULL,
    "createAdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_admin" ("cnpj", "contact", "email", "id", "name", "password") SELECT "cnpj", "contact", "email", "id", "name", "password" FROM "admin";
DROP TABLE "admin";
ALTER TABLE "new_admin" RENAME TO "admin";
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");
CREATE UNIQUE INDEX "admin_cnpj_key" ON "admin"("cnpj");
CREATE TABLE "new_users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "password" TEXT,
    "address" TEXT NOT NULL,
    "createAdt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_users" ("address", "contact", "email", "id", "name", "password") SELECT "address", "contact", "email", "id", "name", "password" FROM "users";
DROP TABLE "users";
ALTER TABLE "new_users" RENAME TO "users";
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
