import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

@Injectable()
export class TypeOrmService {
  async create(object: any, repository: Repository<any>): Promise<any> {
    const data = repository.create(object);
    return repository.save(data);
  }
}
