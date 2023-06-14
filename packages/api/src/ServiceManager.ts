import { ServiceHealthReport } from '@dev-lambda/api-template-dto';

export interface ServiceManager<InitOptions, InstanceType> {
  name: string;
  init(params: InitOptions): Promise<InstanceType>;
  close(): Promise<void>;
  isAlive(): Promise<ServiceHealthReport>;
  getInstance(): InstanceType | undefined;
}
