-- CreateTable
CREATE TABLE `PacitentModel` (
    `id` VARCHAR(191) NOT NULL,
    `emailList` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `height` DOUBLE NOT NULL,
    `weight` DOUBLE NOT NULL,
    `historical` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PacitentModel_emailList_key`(`emailList`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicalCertificateModel` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_pacitent` VARCHAR(191) NOT NULL,
    `describe` VARCHAR(191) NULL,
    `end_date` DATETIME(3) NOT NULL,
    `start_date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `MedicalCertificateModel` ADD CONSTRAINT `MedicalCertificateModel_id_pacitent_fkey` FOREIGN KEY (`id_pacitent`) REFERENCES `PacitentModel`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
