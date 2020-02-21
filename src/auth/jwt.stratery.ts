import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable,UnauthorizedException } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: 'gmgttt',
    });
  }

  async validate(payload: any) {
    if(payload.authority == 'ADMIN')
    {
        return {filter:{admins:payload.user_id},authority:'ADMIN'};
    }
    else if(payload.authority == 'NOMAL')
    {
      return {filter:{users:payload.user_id},authority:'NOMAL'};
    }
    else
        throw new UnauthorizedException('Ban khong co quyen truy cap');
  }
}
