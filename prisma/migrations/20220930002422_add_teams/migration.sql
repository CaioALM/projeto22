-- CreateTable
CREATE TABLE "teams" (
    "id" SERIAL NOT NULL,
    "team" TEXT NOT NULL,

    CONSTRAINT "teams_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teams_team_key" ON "teams"("team");
