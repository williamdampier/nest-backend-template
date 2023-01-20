import { IsString, IsNumber, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePostDto {
  @IsString({ message: 'Must be a String' })
  readonly title: string;
  @IsString({ message: 'Must be a String' })
  readonly content: string;
  @IsNumber({}, { message: 'Must be a Number' })
  @Type(() => Number)
  @IsInt()
  readonly userId: number;
}
