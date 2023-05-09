import express from 'express';

/**
 * @openapi
 * /:
 *   get:
 *     summary: Base response
 *     description: The default `200 OK` response at the root
 *     tags:
 *       - API
 *     responses:
 *       200:
 *         description: The `ok` response
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/message'
 *             example:
 *               message: "ok"
 */
export const ok = (_: express.Request, res: express.Response) => {
  const result: message = { message: 'ok' };
  return res.status(200).json(result);
};

/**
 * @openapi
 * components:
 *   schemas:
 *     message:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 */
export interface message {
  message: string;
}

/**
 * @openapi
 * tags:
 *   - name: API
 *     description: API specific routes
 *     externalDocs:
 *       url: https://dev-lambda.github.io/api-template/
 */
