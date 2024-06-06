import { Controller, FileTypeValidator, Get , MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { AppService } from './app.service';
import { v4 as uuid } from 'uuid';
import * as fs from 'fs/promises';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file) {
    const uniqueFilename = uuid() + extname(file.originalname);
    
    // Déplacez le fichier vers le dossier de destination (par exemple le dossier "uploads")
    const destinationPath = './uploads/' + uniqueFilename;
    await fs.rename(file.path, destinationPath);
    console.log({
      message: 'Fichier reçu avec succès !',
      filename: uniqueFilename,
      url: `http://localhost:8000/uploads/${uniqueFilename}`, // URL du fichier stocké
    });
    return {
      message: 'Fichier reçu avec succès !',
      filename: uniqueFilename,
      url: `http://localhost:8000/uploads/${uniqueFilename}`, // URL du fichier stocké
    };
  }
} 
