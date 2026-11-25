import { PropertyDto } from 'src/common';

export class UploadFileResponseDto {
  @PropertyDto()
  fileKey: string;

  @PropertyDto()
  fileUrl: string;
}
