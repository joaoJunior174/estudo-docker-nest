import { Module } from '@nestjs/common';
import { CustomerCompositionModule } from '../customer-composition/customer-composition.module';
import { CustomerController } from './customer.controller';

@Module({
  imports: [CustomerCompositionModule],
  controllers: [CustomerController],
})
export class PresentationModule {}
