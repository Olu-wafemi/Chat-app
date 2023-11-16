import { Module} from "@nestjs/common";
import { TypeOrmModule} from "@nestjs/typeorm";

@Module({

    imports:[
        TypeOrmModule.forRoot({
            type: 'mariadb',
            host:'localhost',
            port:3306,
            username:'root',
            password:'Oluw@fem4',
            database: 'test_database',
            entities: [__dirname+ '/../**/*.entity{.ts,.js}'],
            synchronize: true
        })
    ]
})


export class DatabaseModule {}