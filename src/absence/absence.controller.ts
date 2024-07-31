import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AbsenceService } from './absence.service';
import { Absence } from '../entities/absence.entity';

@Controller('absences')
export class AbsenceController {
  constructor(private readonly absenceService: AbsenceService) {}

  @Get()
  findAll(): Promise<Absence[]> {
    return this.absenceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Absence> {
    return this.absenceService.findOne(+id);
  }

  @Post()
  create(@Body() createAbsenceDto: Partial<Absence>): Promise<Absence> {
    return this.absenceService.create(createAbsenceDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateAbsenceDto: Partial<Absence>): Promise<Absence> {
    return this.absenceService.update(+id, updateAbsenceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.absenceService.remove(+id);
  }
}
