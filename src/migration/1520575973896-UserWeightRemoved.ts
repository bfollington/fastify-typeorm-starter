import {MigrationInterface, QueryRunner} from "typeorm";

export class UserWeightRemoved1520575973896 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `typeorm_test`.`user` DROP `weight`");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `typeorm_test`.`user` ADD `weight` int(11) NOT NULL");
    }

}
