import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CustomerModel } from '../customer-composition/use-cases/models/customer.model';
import { CustomerEntity } from './entities/customer.entity';
import { TypeOrmService } from '../infra/typeorm/typeorm.service';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity) private readonly customerRepository,
    private readonly typeormService: TypeOrmService,
  ) {}

  async create(customer: CustomerModel): Promise<CustomerModel> {
    return this.typeormService.create(customer, this.customerRepository);
  }
}
