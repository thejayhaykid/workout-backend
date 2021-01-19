-- CreateEnum
CREATE TYPE "Focus" AS ENUM ('CARDIO', 'BICEPS', 'TRICEPS', 'SHOULDERS', 'ARMS', 'CHEST', 'CORE', 'ABS', 'TORSO', 'NECK', 'LEGS', 'QUADS', 'GLUTES', 'CALVES', 'HAMSTRINGS', 'HANDS', 'FEET', 'FULLBODY');

-- CreateTable
CREATE TABLE "User" (
"id" SERIAL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Workout" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "focus" "Focus"[],
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Excercises" (
"id" SERIAL,
    "title" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "focus" "Focus"[],
    "dateAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "workoutId" INTEGER,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Workout" ADD FOREIGN KEY("userId")REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Excercises" ADD FOREIGN KEY("workoutId")REFERENCES "Workout"("id") ON DELETE SET NULL ON UPDATE CASCADE;
