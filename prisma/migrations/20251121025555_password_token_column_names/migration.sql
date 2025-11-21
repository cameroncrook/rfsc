/*
  Warnings:

  - You are about to drop the column `createdAt` on the `password_token` table. All the data in the column will be lost.
  - You are about to drop the column `expiresAt` on the `password_token` table. All the data in the column will be lost.
  - You are about to drop the column `tokenHash` on the `password_token` table. All the data in the column will be lost.
  - Added the required column `expires_at` to the `password_token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `token_hash` to the `password_token` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "password_token" DROP COLUMN "createdAt",
DROP COLUMN "expiresAt",
DROP COLUMN "tokenHash",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "expires_at" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "token_hash" TEXT NOT NULL;
