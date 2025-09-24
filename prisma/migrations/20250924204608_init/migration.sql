-- CreateTable
CREATE TABLE "public"."coaches" (
    "coaches_id" SERIAL NOT NULL,
    "first_name" TEXT,
    "last_name" TEXT,
    "email" TEXT NOT NULL,
    "messages_access" BOOLEAN,
    "games_access" BOOLEAN,
    "player_access" BOOLEAN,
    "coaches_access" BOOLEAN,

    CONSTRAINT "coaches_pkey" PRIMARY KEY ("coaches_id")
);

-- CreateTable
CREATE TABLE "public"."message" (
    "message_id" SERIAL NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "subject" TEXT,
    "message" TEXT,

    CONSTRAINT "message_pkey" PRIMARY KEY ("message_id")
);

-- CreateTable
CREATE TABLE "public"."team" (
    "team_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "team_pkey" PRIMARY KEY ("team_id")
);

-- CreateTable
CREATE TABLE "public"."game" (
    "game_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,
    "location" TEXT,
    "home" INTEGER NOT NULL,
    "away" INTEGER NOT NULL,

    CONSTRAINT "game_pkey" PRIMARY KEY ("game_id")
);

-- CreateTable
CREATE TABLE "public"."player" (
    "player_id" SERIAL NOT NULL,
    "team_id" INTEGER,
    "first_name" TEXT,
    "last_name" TEXT,
    "date_of_birth" TIMESTAMP(3),
    "address" TEXT,
    "school" TEXT,
    "grade_level" TEXT,
    "teacher" TEXT,
    "shirt_size" TEXT,

    CONSTRAINT "player_pkey" PRIMARY KEY ("player_id")
);

-- CreateTable
CREATE TABLE "public"."waiver" (
    "player_id" INTEGER NOT NULL,
    "p1_first_name" TEXT,
    "p1_last_name" TEXT,
    "p1_email" TEXT,
    "p1_phone" TEXT,
    "p2_first_name" TEXT,
    "p2_last_name" TEXT,
    "p2_email" TEXT,
    "p2_phone" TEXT,
    "emergency_name" TEXT,
    "emergency_phone" TEXT,
    "emergency_relation" TEXT,
    "medical_conditions" TEXT,
    "emergency_care_consent" BOOLEAN,
    "liability_waiver" BOOLEAN,
    "photo_permission" BOOLEAN,
    "volunteer_interest" BOOLEAN,
    "walk_home_permission" BOOLEAN,
    "travel_permission" BOOLEAN,
    "general_waiver_signed" BOOLEAN,
    "signature" TEXT,
    "submitted_at" TIMESTAMP(3),

    CONSTRAINT "waiver_pkey" PRIMARY KEY ("player_id")
);

-- AddForeignKey
ALTER TABLE "public"."game" ADD CONSTRAINT "game_home_fkey" FOREIGN KEY ("home") REFERENCES "public"."team"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."game" ADD CONSTRAINT "game_away_fkey" FOREIGN KEY ("away") REFERENCES "public"."team"("team_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."player" ADD CONSTRAINT "player_team_id_fkey" FOREIGN KEY ("team_id") REFERENCES "public"."team"("team_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."waiver" ADD CONSTRAINT "waiver_player_id_fkey" FOREIGN KEY ("player_id") REFERENCES "public"."player"("player_id") ON DELETE RESTRICT ON UPDATE CASCADE;
