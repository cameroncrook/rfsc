/*
  Warnings:

  - You are about to drop the `coaches` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."coaches";

-- CreateTable
CREATE TABLE "public"."coach" (
    "coach_id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT,
    "messages_access" BOOLEAN,
    "games_access" BOOLEAN,
    "player_access" BOOLEAN,
    "coaches_access" BOOLEAN,

    CONSTRAINT "coach_pkey" PRIMARY KEY ("coach_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "coach_email_key" ON "public"."coach"("email");
