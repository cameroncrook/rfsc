/*
  Warnings:

  - You are about to drop the `PasswordToken` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."PasswordToken" DROP CONSTRAINT "PasswordToken_coach_id_fkey";

-- DropTable
DROP TABLE "public"."PasswordToken";

-- CreateTable
CREATE TABLE "password_token" (
    "id" TEXT NOT NULL,
    "coach_id" INTEGER NOT NULL,
    "tokenHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "password_token_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "password_token" ADD CONSTRAINT "password_token_coach_id_fkey" FOREIGN KEY ("coach_id") REFERENCES "coach"("coach_id") ON DELETE RESTRICT ON UPDATE CASCADE;
