import {MigrationInterface, QueryRunner} from "typeorm";

export class UserWeight1520575849242 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `typeorm_test`.`user` ADD `weight` int(11) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `typeorm_test`.`user` DROP `weight`");
    }

}
