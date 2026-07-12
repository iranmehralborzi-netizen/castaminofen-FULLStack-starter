import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { PodcastsModule } from './modules/podcasts/podcasts.module';
import { UsersModule } from './modules/users/users.module';
import { SearchModule } from './modules/search/search.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

@Module({
  imports: [AuthModule, PodcastsModule, UsersModule, SearchModule, UploadsModule, NotificationsModule],
})
export class AppModule {}
