import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger/dist';
import { User } from './user.model';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  createUser(@Body() userDto: CreateUserDTO) {
    return this.userService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get list of all users' })
  @ApiResponse({ status: 200, type: [User] })
  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }
}
