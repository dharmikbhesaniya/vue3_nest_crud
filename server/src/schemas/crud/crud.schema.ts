import { Schema } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose/dist/decorators';
import { SchemaFactory } from '@nestjs/mongoose/dist/factories';
import { type } from 'os';

export type crudDocument = crud & Document;

@Schema({
  timestamps: true,
})
export class crud {
  @Prop()
  title: string;
  @Prop()
  image: string;
}

export const CRUD_MODEL = crud.name;

export const CrudSchema = SchemaFactory.createForClass(crud);
