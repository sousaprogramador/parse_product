import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SchedulesModule } from './modules/schedules/schedules.module';
import { ScheduleModule } from '@nestjs/schedule';
import { SchedulesService } from './modules/schedules/schedules.service';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { ormConfig } from '@database/config/ormconfig';
import { ProductModule } from './modules/product/product.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { CustomElasticsearchModule } from './modules/elastic-search/elastic-search.module';

@Module({
  imports: [
    ProductModule,
    CustomElasticsearchModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(ormConfig() as TypeOrmModuleOptions),
    ScheduleModule.forRoot(),

    ProductModule,
    SchedulesModule
  ],
  controllers: [AppController],
  providers: [AppService, SchedulesService],
})
export class AppModule { }
