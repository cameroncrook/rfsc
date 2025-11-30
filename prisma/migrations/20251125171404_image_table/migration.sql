-- CreateTable
CREATE TABLE "image" (
    "id" SERIAL NOT NULL,
    "filename" TEXT,
    "url" TEXT NOT NULL,
    "uploaded_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "image_pkey" PRIMARY KEY ("id")
);
