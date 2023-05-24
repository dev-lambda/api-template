import app from 'api-template/src/app';
import { apiTemplateClient } from './Client';
// import init from 'api-template/src/server';
// import { Server } from 'http';
// import { AddressInfo } from 'net';
// import initdb from 'api-template/src/db';
// import logger from 'api-template/src/logger';
// import { MongoMemoryServer } from 'mongodb-memory-server';
// import { Connection } from 'mongoose';

describe('Api Client', () => {
  // let server: Server;
  // let baseURL: string;
  // let dbServer: MongoMemoryServer;
  // let connection: Connection;

  beforeAll(async () => {
    // init api server
    // server = await init(app);
    // let info = server.address() as AddressInfo;
    // if (info) {
    // baseURL = `http://localhost:${info.port}`;
    // baseURL = `http://localhost:3001`;
    // }
    // init db connection (to memory db)
    // dbServer = await MongoMemoryServer.create();
    // const dbHost: string = dbServer.getUri();
    // connection = await initdb(dbHost);
  });

  afterAll(() => {
    // close api server
    // server.close();
    // close db connection
    // connection.close();
    // dbServer.stop();
  });

  it('should get ok response', async () => {
    let client = new apiTemplateClient(/*baseURL, { logger }*/);
    let message = await client.ok();
    expect(message).toMatchObject({ message: 'ok' });
  });

  it('should get health response', async () => {
    let client = new apiTemplateClient(/*baseURL, { logger }*/);
    let message = await client.health();
    expect(message).toMatchObject({ server: true, db: true });
  });
});
