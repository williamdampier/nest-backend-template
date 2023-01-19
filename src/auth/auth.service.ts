import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import { JwtService } from '@nestjs/jwt/dist';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDTO } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/user.model';
import { UserService } from 'src/users/users.service';
import { Token } from 'src/types';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User) private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(userDto: CreateUserDTO): Promise<User> {
    const user = await this.userService.getUserByemail(userDto.email);
    return user;
  }

  async registration(userDto: CreateUserDTO): Promise<Token> {
    const candidate = await this.userService.getUserByemail(userDto.email);
    if (candidate)
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.BAD_REQUEST,
      );
    const hashPassword = await bcrypt.hash(userDto.password, 10);
    const user = await this.userService.createUser({
      ...userDto,
      password: hashPassword,
    });
    return this.generateToken(user);
  }

  async generateToken(user: User): Promise<Token> {
    const payload = { email: user.email, id: user.id, roles: user.roles };
    return {
      token: this.jwtService.sign(payload),
    };
  }
}
