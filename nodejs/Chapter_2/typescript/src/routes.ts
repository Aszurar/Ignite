import { Request, Response } from 'express';
import CreateCourseService from './CreateCourseService';

export function createCourse(request: Request, response: Response) {
  CreateCourseService.execute({
    name: 'Lucas de Lima',
    duration: 10,
  });

  return response.send('Criado com sucesso');
}
