import { MikroOrmModule } from '@mikro-orm/nestjs';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { WinstonModule } from 'nest-winston';
import { join } from 'path';
import { AllExceptionFilter, getWinstonConfig, HttpLoggerMiddleware } from 'src/common';
import {
  appConfiguration,
  dbConfiguration,
  kafkaConfiguration,
  rabbitmqConfiguration,
} from 'src/config';
import { BaseRepository } from 'src/data-access/base.repository';
import { AppAuthGuard, RoleBasedAccessControlGuard } from 'src/guards';
import { AwsS3Module, RedisModule } from 'src/integrations';
import { EmailModule } from 'src/modules/email';
import { UploadModule } from 'src/modules/upload';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      // validationSchema,
      validationOptions: {
        abortEarly: false,
      },
      load: [
        appConfiguration,
        rabbitmqConfiguration,
        kafkaConfiguration,
        dbConfiguration,
      ],
    }),
    MikroOrmModule.forRootAsync({
      useFactory: (dbConfig: ConfigType<typeof dbConfiguration>) => {
        return {
          ...dbConfig,
          entityRepository: BaseRepository,
        };
      },
      inject: [dbConfiguration.KEY],
    }),
    WinstonModule.forRootAsync({
      useFactory: (appConfig: ConfigType<typeof appConfiguration>) => {
        return getWinstonConfig(appConfig.appName, appConfig.nodeEnv);
      },
      inject: [appConfiguration.KEY],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../public'),
      serveRoot: '/static',
    }),
    UploadModule,
    // Business Logic Modules
    AuthModule,
    AwsS3Module,
    RedisModule,
    EmailModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AppAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RoleBasedAccessControlGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(HttpLoggerMiddleware).forRoutes('*');
  }
}
