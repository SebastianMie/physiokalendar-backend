// src/cancellation/cancellation.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cancellation } from '../entities/cancellation.entity';
import { CancellationService } from './cancellation.service';
import { CancellationController } from './cancellation.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Cancellation])],
  providers: [CancellationService],
  controllers: [CancellationController],
})
export class CancellationModule {}
