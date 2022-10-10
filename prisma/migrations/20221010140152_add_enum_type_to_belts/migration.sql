/*
  Warnings:

  - The `belt` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Belt" AS ENUM ('branca', 'cinza', 'amarela', 'laranja', 'verde', 'azul', 'roxa', 'marrom', 'preta');

-- AlterTable
ALTER TABLE "users" DROP COLUMN "belt",
ADD COLUMN     "belt" "Belt" NOT NULL DEFAULT 'branca';
