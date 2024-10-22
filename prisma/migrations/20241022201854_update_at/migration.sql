/*
  Warnings:

  - Added the required column `updatedAt` to the `UserTasks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserTasks" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "finishedAt" DROP NOT NULL;
