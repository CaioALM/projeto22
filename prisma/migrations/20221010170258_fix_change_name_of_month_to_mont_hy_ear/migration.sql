/*
  Warnings:

  - You are about to drop the column `month` on the `payments` table. All the data in the column will be lost.
  - Added the required column `monthYear` to the `payments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "payments" DROP COLUMN "month",
ADD COLUMN     "monthYear" TIMESTAMP(3) NOT NULL;
