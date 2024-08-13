import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Work } from './work.entity';

@Injectable()
export class WorkService {
  constructor(
    @InjectRepository(Work)
    private workRepository: Repository<Work>,
  ) {}

  create(work: Work): Promise<Work> {
    return this.workRepository.save(work);
  }

  findAll(): Promise<Work[]> {
    return this.workRepository.find();
  }

  findOne(id: number): Promise<Work> {
    return this.workRepository.findOneBy({ id });
  }

  update(id: number, work: Work): Promise<any> {
    return this.workRepository.update(id, work);
  }

  remove(id: number): Promise<void> {
    return this.workRepository.delete(id).then(() => undefined);
  }
}