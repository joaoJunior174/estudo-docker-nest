import { Module } from '@nestjs/common';
import { CustomerModule } from '../customer/customer.module';
import {
  CustomerCreateUseCase,
  CustomerCreateUseCaseInterface,
} from './use-cases/customer-create-use-case';

@Module({
  imports: [CustomerModule],
  providers: [
    {
      provide: CustomerCreateUseCaseInterface,
      useClass: CustomerCreateUseCase,
    },
  ],
  exports: [CustomerCreateUseCaseInterface],
})
export class CustomerCompositionModule {}
