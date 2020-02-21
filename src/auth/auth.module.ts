import { Module } from '@nestjs/common';
import {AuthService} from './auth.service';
import {AuthController} from './auth.controller';
import {PassportModule} from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import {LocalStrategy} from './local.stratery';
import {JwtStrategy} from './jwt.stratery';

@Module({
    imports:[
        PassportModule,
        JwtModule.register({
            secret: 'gmgttt',
            signOptions:{expiresIn:'3000s'}
        })
    ],
    providers:[AuthService,LocalStrategy,JwtStrategy],
    controllers:[AuthController]
})

export class authModule {}