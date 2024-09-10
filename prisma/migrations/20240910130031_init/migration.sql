/*
  Warnings:

  - You are about to drop the `MedicalCertificateModel` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PacitentModel` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `MedicalCertificateModel` DROP FOREIGN KEY `MedicalCertificateModel_id_pacitent_fkey`;

-- DropTable
DROP TABLE `MedicalCertificateModel`;

-- DropTable
DROP TABLE `PacitentModel`;

-- CreateTable
CREATE TABLE `tb_pacitents_register` (
    `id` VARCHAR(191) NOT NULL,
    `emailList` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `height` DOUBLE NOT NULL,
    `weight` DOUBLE NOT NULL,
    `historical` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `tb_pacitents_register_emailList_key`(`emailList`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tb_certificates_medical` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pacitent` VARCHAR(191) NOT NULL,
    `describe` VARCHAR(191) NULL,
    `end_date` DATETIME(3) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `tb_certificates_medical` ADD CONSTRAINT `tb_certificates_medical_id_pacitent_fkey` FOREIGN KEY (`id_pacitent`) REFERENCES `tb_pacitents_register`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
