/*
  Warnings:

  - Made the column `finishedAt` on table `UserTasks` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserTasks" ALTER COLUMN "finishedAt" SET NOT NULL,
ALTER COLUMN "finishedAt" SET DEFAULT CURRENT_TIMESTAMP;
