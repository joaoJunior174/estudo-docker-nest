import { Injectable } from '@nestjs/common';
import { CustomerService } from '../../customer/customer.service';
import { CustomerModel } from './models/customer.model';

export abstract class CustomerCreateUseCaseInterface {
  abstract createCustomer(customer: CustomerModel): Promise<CustomerModel>;
}

@Injectable()
export class CustomerCreateUseCase extends CustomerCreateUseCaseInterface {
  constructor(private readonly customerService: CustomerService) {
    super();
  }

  async createCustomer(customer: CustomerModel): Promise<CustomerModel> {
    return this.customerService.create(customer);
  }
}
