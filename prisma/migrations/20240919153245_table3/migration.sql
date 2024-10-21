/*
  Warnings:

  - The values [CONCLUDED] on the enum `Answer` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Answer_new" AS ENUM ('PENDENT', 'CONCLUDE', 'QUIT');
ALTER TABLE "UserTasks" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "UserTasks" ALTER COLUMN "status" TYPE "Answer_new" USING ("status"::text::"Answer_new");
ALTER TYPE "Answer" RENAME TO "Answer_old";
ALTER TYPE "Answer_new" RENAME TO "Answer";
DROP TYPE "Answer_old";
ALTER TABLE "UserTasks" ALTER COLUMN "status" SET DEFAULT 'PENDENT';
COMMIT;
