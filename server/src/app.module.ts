import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose/dist/mongoose.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MiddlewareModule } from './middleware/middleware.module';
import { MongooseModules } from './schemas/mongoose-moduls';
// import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      // envFilePath: '.production.env',
    }),
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://127.0.0.1:27017/crud',
      }),
      // imports: [ConfigModule],
      // useFactory: (configservice: ConfigService) => ({
      //   uri: configservice.get('MONGO_URI'),
      // }),
      // inject: [ConfigService],
    }),
    // UsersModule,
    MongooseModules,
    // MiddlewareModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
