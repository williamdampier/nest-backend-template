import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  Table,
  Column,
  DataType,
  Model,
  BelongsToMany,
} from 'sequelize-typescript';
import { Role } from 'src/roles/role.model';
import { UserRoles } from 'src/roles/user-roles.model';

//interface for creating objects from this call -> compulsory email and pswd only
interface UserAttributes {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserAttributes> {
  @ApiProperty({ example: '123', description: 'Unique User ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'qwerty123@email.com',
    description: 'Unique email address',
    required: true,
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @ApiProperty({
    example: 'qwerty123',
    description: 'User password',
    required: true,
  })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({
    example: 'true',
    description: 'Banned user or not',
    required: false,
  })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({
    example: 'Spam',
    description: 'User ban reason',
    required: false,
  })
  @Column({ type: DataType.STRING, allowNull: true })
  bannedReason: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
