import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist/common';
import { Model } from 'mongoose';
import { crudDocument, CRUD_MODEL } from './schemas/crud/crud.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(CRUD_MODEL) private readonly crudModel: Model<crudDocument>,
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  async productall() {
    const product = await this.crudModel.find();
    return product;
  }

  async productdetails(id) {
    const product = await this.crudModel.findById(id);
    return product;
  }

  async productcreate(data) {
    const product = await this.crudModel.create(data);
    return product;
  }

  async productupdate(data) {
    const { userdata, id } = data;
    const product = await this.crudModel.findByIdAndUpdate(id, userdata);
    return product;
  }

  async productdelete(id) {
    const product = await this.crudModel.findByIdAndDelete(id);
    return product;
  }
}
