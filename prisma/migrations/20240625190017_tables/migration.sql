-- CreateTable
CREATE TABLE "UserTable" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "firstName" TEXT,
    "lastName" TEXT,
    "password" TEXT NOT NULL,

    CONSTRAINT "UserTable_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TodoTable" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "done" BOOLEAN NOT NULL DEFAULT false,
    "description" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "TodoTable_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserTable_email_key" ON "UserTable"("email");

-- AddForeignKey
ALTER TABLE "TodoTable" ADD CONSTRAINT "TodoTable_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserTable"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
