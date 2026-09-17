import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { smtpConfiguration } from 'src/config';
import { AbstractEmailService } from './abstract-email.service';
import { EmailService } from './email.service';
import { SmtpEmailService } from './smtp-email.service';

@Global()
@Module({
  imports: [ConfigModule.forFeature(smtpConfiguration)],
  providers: [
    {
      provide: AbstractEmailService,
      useClass: SmtpEmailService,
    },
    EmailService,
  ],
  exports: [AbstractEmailService, EmailService],
})
export class EmailModule {}
