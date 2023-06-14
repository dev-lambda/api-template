import { HealthReport } from '@dev-lambda/api-template-dto';
import { Client } from './Client';

describe.skip('Api Client', () => {
  let baseURL = 'http://localhost:3000';

  it('should get ok response', async () => {
    let client = new Client(baseURL /*{ logger }*/);
    let message = await client.ok();
    expect(message).toMatchObject({ message: 'ok' });
  });

  it('should get health response', async () => {
    let client = new Client(baseURL /*{ logger }*/);
    let message = await client.health();
    let expected: Partial<HealthReport> = {
      healthy: true,
      // report: [
      //   {
      //     name: 'APIServer',
      //     healthy: true,
      //   },
      //   {
      //     name: 'Database',
      //     healthy: true,
      //   },
      // ],
    };
    expect(message).toMatchObject(expected);
  });
});
