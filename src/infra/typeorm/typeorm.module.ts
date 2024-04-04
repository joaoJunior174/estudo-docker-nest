import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmService } from './typeorm.service';
import { CustomerEntity } from '../../customer/entities/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgre',
      port: 5432,
      username: 'customer',
      password: 'customer',
      database: 'customer',
      entities: [CustomerEntity],
      synchronize: true,
    }),
  ],
  providers: [TypeOrmService],
  exports: [TypeOrmService],
})
export class TypeORMModule {}
