import { MigrationInterface, QueryRunner } from "typeorm"

export class insertTestUser1658604077711 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO users VALUES 
            (default, 'teste','teste@teste.com','123'),
            (default, 'outro_teste','outroteste@teste.com','123')`
            );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE from users WHERE name in ('teste','outro_teste')`);

    }

}
