import { Module } from '@nestjs/common';
import { TypeORMModule } from '../infra/typeorm/typeorm.module';
import { CustomerService } from './customer.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './entities/customer.entity';

@Module({
  imports: [TypeORMModule, TypeOrmModule.forFeature([CustomerEntity])],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
