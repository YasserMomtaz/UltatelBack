import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './student/student.entity';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from './auth/user.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'b23h3m0soucma6btbuqa-mysql.services.clever-cloud.com', 
      port: 3306, // Default MySQL port
      username: 'uyrz1ethh9jebwpq', 
      password: 'mGGgZz4T2tCF2xLwdkH5', 
      database: 'b23h3m0soucma6btbuqa',
      entities: [Student,User],
      synchronize: true,
    }),
    StudentModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
