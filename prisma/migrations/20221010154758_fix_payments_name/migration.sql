-- CreateTable
CREATE TABLE "payments" (
    "id" SERIAL NOT NULL,
    "userId" TEXT NOT NULL,
    "payd" BOOLEAN NOT NULL DEFAULT false,
    "month" TIMESTAMP(3) NOT NULL,
    "payedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "payments_userId_key" ON "payments"("userId");
