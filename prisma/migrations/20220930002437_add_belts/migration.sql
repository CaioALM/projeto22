-- CreateTable
CREATE TABLE "belts" (
    "id" SERIAL NOT NULL,
    "belt" TEXT NOT NULL,

    CONSTRAINT "belts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "belts_belt_key" ON "belts"("belt");
