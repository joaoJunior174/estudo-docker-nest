import { Body, Controller, Get, Post } from '@nestjs/common';
import { CustomerCreateUseCaseInterface } from '../customer-composition/use-cases/customer-create-use-case';
import { CustomerDto } from './dto/customer-dto';

@Controller('customer')
export class CustomerController {
  constructor(
    private readonly customerCreateUseCase: CustomerCreateUseCaseInterface,
  ) {}

  @Post('/create')
  create(@Body() customerDto: CustomerDto): Promise<CustomerDto> {
    return this.customerCreateUseCase.createCustomer(customerDto);
  }
  @Get()
  hello(): string {
    return 'teste';
  }
}
