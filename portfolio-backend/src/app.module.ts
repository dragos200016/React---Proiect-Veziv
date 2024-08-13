import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Work } from './works/work.entity';
import { WorkService } from './works/work.service';
import { WorkController } from './works/work.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'dragos',
      database: 'portfolio',
      entities: [Work],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Work]),
  ],
  controllers: [WorkController],
  providers: [WorkService],
})
export class AppModule {}
