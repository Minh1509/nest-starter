import { Injectable } from "@nestjs/common";
import { renderEmail, ResetPasswordEmail } from "@repo/email-templates";
import { AbstractEmailService } from "./abstract-email.service";
import { ResetPasswordMailPayload } from "./email.interface";
import { EMAIL_SUBJECT } from "./email.constant";

@Injectable()
export class EmailService {
  constructor(private readonly emailProvider: AbstractEmailService) {}

  async forgotPasswordMailer(payload: ResetPasswordMailPayload): Promise<void> {
    const htmlContent = await renderEmail(ResetPasswordEmail, payload);

    await this.emailProvider.sendEmail({
      to: payload.email,
      subject: EMAIL_SUBJECT.RESET_PASSWORD,
      htmlContent,
    });
  }
}
