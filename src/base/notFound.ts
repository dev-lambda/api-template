import express from 'express';
import { message } from './ok';

/**
 * @openapi
 * /wrongPath:
 *   get:
 *     summary: Not found
 *     description: The response given on any unknown path
 *     tags:
 *       - API
 *     responses:
 *       404:
 *         description: The `not found` response
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/notFoundMessage'
 *             example:
 *               message: "not found"
 *               path: "/wrongPath"
 *
 */
export const notFound = (req: express.Request, res: express.Response) => {
  const { path } = req;
  const result: Partial<notFoundMessage> = { message: 'not found', path };
  return res.status(404).json(result);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     notFoundMessage:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *         path:
 *           type: string
 */
export interface notFoundMessage extends message {
  path: string;
}
