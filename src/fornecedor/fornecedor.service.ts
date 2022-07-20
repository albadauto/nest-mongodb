import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateFornecedorDto } from './dto/create-fornecedor.dto';
import { UpdateFornecedorDto } from './dto/update-fornecedor.dto';
import { Fornecedor, FornecedorDocument } from './entities/fornecedor.entity';

@Injectable()
export class FornecedorService {

  constructor(@InjectModel(Fornecedor.name) private fornecedorModel: Model<FornecedorDocument>) {}

  create(createFornecedorDto: CreateFornecedorDto) {
    const fornecedor = new this.fornecedorModel(createFornecedorDto);
    this.fornecedorModel.create(fornecedor)
  }

  findAll() {
    return `This action returns all fornecedor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fornecedor`;
  }

  update(id: number, updateFornecedorDto: UpdateFornecedorDto) {
    return `This action updates a #${id} fornecedor`;
  }

  remove(id: number) {
    return `This action removes a #${id} fornecedor`;
  }
}
