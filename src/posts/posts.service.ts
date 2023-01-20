import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './post.model';
import { CreatePostDto } from './dto/create-post.dto';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post) private postRepository: typeof Post,
    private fileService: FilesService,
  ) {}

  async createPost(dto: CreatePostDto, image: any): Promise<Post> {
    const fileName = await this.fileService.createFile(image);
    const post = await this.postRepository.create({ ...dto, image: fileName });
    return post;
  }
}
