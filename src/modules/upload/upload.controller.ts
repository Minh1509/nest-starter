import {
  Body,
  Controller,
  HttpStatus,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import {
  BodyContentType,
  FileValidationPipe,
  MimeType,
  SwaggerApiDocument,
} from 'src/common';
import {
  UploadFileResponseDto,
  UploadPresignBodyDto,
  UploadPresignResponseDto,
} from 'src/modules/upload/dto';
import { UploadService } from './upload.service';

const MAX_UPLOAD_FILE_SIZE = 10 * 1024 * 1024;

@Controller('upload')
@ApiTags('Upload')
@ApiBearerAuth()
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('presign')
  @SwaggerApiDocument({
    response: {
      status: HttpStatus.OK,
      type: UploadPresignResponseDto,
    },
    body: { type: UploadPresignBodyDto, required: true },
    operation: {
      operationId: 'generateUploadUrl',
      summary: 'Api generateUploadUrl',
      description: 'Generate presigned URL for file upload to S3',
    },
  })
  generateUploadUrl(
    @Body() body: UploadPresignBodyDto,
  ): Promise<UploadPresignResponseDto> {
    return this.uploadService.generateUploadUrl(body);
  }

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      limits: { fileSize: MAX_UPLOAD_FILE_SIZE },
    }),
  )
  @SwaggerApiDocument({
    response: {
      status: HttpStatus.CREATED,
      type: UploadFileResponseDto,
    },
    body: {
      required: true,
      schema: {
        type: 'object',
        required: ['file'],
        properties: {
          file: { type: 'string', format: 'binary' },
          uploadPath: { type: 'string' },
        },
      },
    },
    contentType: [BodyContentType.MultipartFormData],
    operation: {
      operationId: 'uploadFile',
      summary: 'Upload file to S3',
      description: 'Upload a file through the API directly to S3',
    },
  })
  uploadFile(
    @UploadedFile(
      new FileValidationPipe({
        maxSize: MAX_UPLOAD_FILE_SIZE,
        allowedTypes: Object.values(MimeType),
      }),
    )
    file: Express.Multer.File,
    @Body('uploadPath') uploadPath?: string,
  ): Promise<UploadFileResponseDto> {
    return this.uploadService.uploadFile(file, uploadPath);
  }
}
