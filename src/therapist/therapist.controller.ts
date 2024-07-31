import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TherapistService } from './therapist.service';
import { Therapist } from '../entities/therapist.entity';
import { CreateTherapistDto } from './dto/create-therapist.dto';
import { UpdateTherapistDto } from './dto/update-therapist.dto';

@Controller('therapists')
export class TherapistController {
  constructor(private readonly therapistService: TherapistService) {}

  @Get()
  findAll(): Promise<Therapist[]> {
    return this.therapistService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Therapist> {
    return this.therapistService.findOne(+id);
  }

  @Post()
  create(@Body() createTherapistDto: CreateTherapistDto): Promise<Therapist> {
    return this.therapistService.create(createTherapistDto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTherapistDto: UpdateTherapistDto): Promise<Therapist> {
    return this.therapistService.update(+id, updateTherapistDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.therapistService.remove(+id);
  }
}
