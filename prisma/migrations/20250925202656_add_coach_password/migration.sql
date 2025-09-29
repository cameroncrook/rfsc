/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `coaches` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `coaches` table without a default value. This is not possible if the table is not empty.
  - Made the column `submitted_at` on table `waiver` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."coaches" ADD COLUMN     "password" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "public"."waiver" ALTER COLUMN "submitted_at" SET NOT NULL,
ALTER COLUMN "submitted_at" SET DEFAULT CURRENT_TIMESTAMP;

-- CreateIndex
CREATE UNIQUE INDEX "coaches_email_key" ON "public"."coaches"("email");
