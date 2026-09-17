import { IsEmail } from 'class-validator';
import { PropertyDto } from 'src/common';

export class LoginDto {
  @PropertyDto({
    type: String,
    required: true,
    validated: true,
    example: 'temporary001@email.com',
  })
  @IsEmail()
  email: string;

  @PropertyDto({
    type: String,
    required: true,
    validated: true,
    example: '12345678Aa@',
  })
  password: string;
}
