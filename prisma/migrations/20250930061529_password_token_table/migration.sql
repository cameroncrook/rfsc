-- CreateTable
CREATE TABLE "public"."PasswordToken" (
    "id" TEXT NOT NULL,
    "coach_id" INTEGER NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PasswordToken_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."PasswordToken" ADD CONSTRAINT "PasswordToken_coach_id_fkey" FOREIGN KEY ("coach_id") REFERENCES "public"."coach"("coach_id") ON DELETE RESTRICT ON UPDATE CASCADE;
