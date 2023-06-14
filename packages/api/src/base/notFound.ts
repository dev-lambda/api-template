import {
  notFoundMessage,
  notFoundMessageSchema,
} from '@dev-lambda/api-template-dto';
import { Request, Response } from 'express';
import registry from 'src/doc/openApi';

export const notFoundResponse = {
  404: {
    description: 'Resource not found',
    content: {
      'application/json': {
        schema: notFoundMessageSchema,
        example: {
          message: 'not found',
          path: '/wrongPath',
          params: {},
        },
      },
    },
  },
};

registry.registerPath({
  method: 'get',
  path: '/wrongPath',
  summary: 'Not found',
  description: 'The response given on any unknown path',
  tags: ['Base'],
  responses: {
    ...notFoundResponse,
  },
});

export const notFound = (req: Request, res: Response) => {
  const { path, params } = req;
  const result: Partial<notFoundMessage> = {
    message: 'not found',
    path,
    params,
  };
  return res.status(404).json(result);
};
