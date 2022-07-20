import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { FornecedorModule } from './fornecedor/fornecedor.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    UsersModule,
    ProductsModule,
    FornecedorModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
