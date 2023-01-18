import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose/dist';
import { CrudSchema, CRUD_MODEL } from './crud/crud.schema';

const MODEL = [
  { name: CRUD_MODEL, schema: CrudSchema }
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODEL)],
  exports: [MongooseModule],
})
export class MongooseModules {}
