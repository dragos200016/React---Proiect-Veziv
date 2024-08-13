import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { WorkService } from './work.service';
import { Work } from './work.entity';

@Controller('works')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post()
  create(@Body() createWorkDto: Work): Promise<Work> {
    return this.workService.create(createWorkDto);
  }

  @Get()
  findAll(): Promise<Work[]> {
    return this.workService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Work> {
    return this.workService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: Work): Promise<any> {
    return this.workService.update(+id, updateWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.workService.remove(+id);
  }
}