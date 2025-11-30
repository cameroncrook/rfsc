/*
  Warnings:

  - You are about to drop the column `url` on the `image` table. All the data in the column will be lost.
  - Added the required column `name` to the `image` table without a default value. This is not possible if the table is not empty.
  - Made the column `filename` on table `image` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "image" DROP COLUMN "url",
ADD COLUMN     "name" TEXT NOT NULL,
ALTER COLUMN "filename" SET NOT NULL;
