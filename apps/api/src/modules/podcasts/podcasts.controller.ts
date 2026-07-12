import { Controller, Get } from '@nestjs/common';

@Controller('podcasts')
export class PodcastsController {
  @Get()
  findAll() {
    return {
      message: 'Podcasts module placeholder',
      items: [],
    };
  }
}
