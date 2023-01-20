import { ApiProperty } from '@nestjs/swagger/dist/decorators';
import {
  Table,
  Column,
  DataType,
  Model,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { User } from 'src/users/user.model';

//interface for creating objects from this class
interface PostAttributes {
  email: string;
  password: string;
  userId: number;
  image: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostAttributes> {
  @ApiProperty({ example: '123', description: 'Unique Post ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Welcome to my new blog!',
    description: 'Post title',
    required: true,
  })
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  title: string;

  @ApiProperty({
    example: 'lorem ipsum blog content text',
    description: 'Post content',
  })
  @Column({ type: DataType.STRING, allowNull: true })
  content: string;

  @ApiProperty({
    example: 'image1.png',
    description: 'Post image',
    required: true,
  })
  @Column({ type: DataType.STRING })
  image: string;

  @ApiProperty({
    example: 'User1',
    description: 'Post author',
    required: true,
  })
  @Column({ type: DataType.INTEGER })
  @ForeignKey(() => User)
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
