import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';
import { RolesService } from './roles.service';
import { CreateRoleDTO } from './dto/create-role.dto';
import { Role } from './role.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger/dist';

@ApiTags('Roles')
@Controller('roles')
export class RolesController {
  constructor(private roleService: RolesService) {}

  @ApiOperation({ summary: 'Create role' })
  @ApiResponse({ status: 200, type: Role })
  @Post()
  createRole(@Body() dto: CreateRoleDTO): Promise<Role> {
    return this.roleService.createRole(dto);
  }

  @ApiOperation({ summary: 'Get Role by Value' })
  @ApiResponse({ status: 200, type: Role })
  @Get('/:value')
  getByValue(@Param('value') value: string): Promise<Role> {
    return this.roleService.getRoleByValue(value);
  }
}
