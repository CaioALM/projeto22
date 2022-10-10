/*
  Warnings:

  - You are about to drop the `belts` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `age` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `belt` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "belt" TEXT NOT NULL;

-- DropTable
DROP TABLE "belts";
