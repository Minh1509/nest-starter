import { IsStrongPassword, Matches, MaxLength } from 'class-validator';
import { PropertyDto } from 'src/common';
import { VerifyResetPasswordDto } from './verify-reset-password.dto';

export class ResetPasswordDto extends VerifyResetPasswordDto {
  @PropertyDto({
    type: String,
    required: true,
    validated: true,
    example: 'NewPass@123',
  })
  @MaxLength(50)
  @IsStrongPassword({
    minLength: 8,
    minUppercase: 1,
    minLowercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  @Matches(/^\S*$/, { message: 'Whitespace not allowed' })
  newPassword: string;
}
