import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';

export class CreateUserDTO {
  @ApiProperty({
    example: 'qwerty123@email.com',
    description: 'Unique email address',
    required: true,
  })
  readonly email: string;
  @ApiProperty({
    example: 'qwerty123',
    description: 'User password',
    required: true,
  })
  readonly password: string;
}
