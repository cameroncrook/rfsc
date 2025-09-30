/*
  Warnings:

  - You are about to drop the column `time` on the `game` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."game" DROP CONSTRAINT "game_away_fkey";

-- DropForeignKey
ALTER TABLE "public"."game" DROP CONSTRAINT "game_home_fkey";

-- AlterTable
ALTER TABLE "public"."game" DROP COLUMN "time",
ALTER COLUMN "home" DROP NOT NULL,
ALTER COLUMN "away" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."game" ADD CONSTRAINT "game_home_fkey" FOREIGN KEY ("home") REFERENCES "public"."team"("team_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."game" ADD CONSTRAINT "game_away_fkey" FOREIGN KEY ("away") REFERENCES "public"."team"("team_id") ON DELETE SET NULL ON UPDATE CASCADE;
