/*
  Warnings:

  - You are about to drop the column `points` on the `tasks` table. All the data in the column will be lost.
  - Added the required column `finishedAt` to the `UserTasks` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Priority" AS ENUM ('URGENT', 'IMPORTANT', 'NONURGENT');

-- CreateEnum
CREATE TYPE "Answer" AS ENUM ('PENDENT', 'CONCLUDED', 'QUIT');

-- AlterTable
ALTER TABLE "UserTasks" ADD COLUMN     "finishedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "points" DOUBLE PRECISION NOT NULL DEFAULT 10,
ADD COLUMN     "status" "Answer" NOT NULL DEFAULT 'PENDENT';

-- AlterTable
ALTER TABLE "tasks" DROP COLUMN "points",
ADD COLUMN     "priority" "Priority" NOT NULL DEFAULT 'IMPORTANT';
