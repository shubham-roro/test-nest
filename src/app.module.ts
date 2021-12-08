import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: process.env.DB_URL,
      database: 'nest',
      useNewUrlParser: true,
      logging: true,
      useUnifiedTopology: true,
      retryWrites: true,
      entities: [User],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
