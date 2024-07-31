import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExceptionService } from './exception.service';
import { ExceptionController } from './exception.controller';
import { Exception } from '../entities/exception.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Exception])],
  providers: [ExceptionService],
  controllers: [ExceptionController],
})
export class ExceptionModule {}
