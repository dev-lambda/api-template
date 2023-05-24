import axios from 'axios';
import { message, healtStatus } from 'api-template-dto';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LoggerFn = (message: string, ...extra: any[]) => void;

interface Logger {
  info: LoggerFn;
  warn: LoggerFn;
  error: LoggerFn;
}

// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noopLog = () => {};

const defaultLogger = {
  info: noopLog,
  warn: noopLog,
  error: noopLog,
};

interface ClientOptions {
  logger?: Logger;
  authToken?: string;
}

const ClientName = 'api-template client';

const responseLogInterceptor =
  (logger: Logger) => (response: axios.AxiosResponse) => {
    let { status } = response;
    if (status < 300) {
      logger.info(
        `[${ClientName}] Request success: ${response.config.url} ${status}`
      );
    } else {
      // useful when error status need to be interpreted by the client
      logger.warn(
        `[${ClientName}] Expected error response: ${response.config.url} ${status}`
      );
    }

    return response;
  };

// TODO Create a client specific error class

export enum ErrorType {
  'BadRequest' = 'BadRequest',
  'Unauthenticated' = 'Unauthenticated',
  'Forbidden' = 'Forbidden',
  'NotFound' = 'NotFound',
  'QuotaExceeded' = 'QuotaExceeded',
  'UnexpectedResponse' = 'UnexpectedResponse',
  'ServerError' = 'ServerError',
  'ConnectionError' = 'ConnectionError',
  'ClientError' = 'ClientError',
}

export class SDKError extends Error {
  type: ErrorType;
  constructor(type: ErrorType, cause?: Error) {
    super(type, { cause });
    this.type = type;
  }
}

const errorLogInterceptor = (logger: Logger) => (error: any) => {
  if (error.response) {
    let response = error.response as axios.AxiosResponse;
    let { status } = response;
    if (status < 500) {
      logger.warn(
        `[${ClientName}] Unexpected error response: ${response.config.url} ${status}`
      );
      switch (status) {
        case 400:
          throw new SDKError(ErrorType.BadRequest, error);
        case 401:
          throw new SDKError(ErrorType.Unauthenticated, error);
        case 403:
          throw new SDKError(ErrorType.Forbidden, error);
        case 404:
          throw new SDKError(ErrorType.NotFound, error);
        case 429:
          throw new SDKError(ErrorType.QuotaExceeded, error);
        default:
          throw new SDKError(ErrorType.UnexpectedResponse, error);
      }
    } else {
      logger.error(
        `[${ClientName}] Server error: ${response.config.url} ${status}`
      );
      throw new SDKError(ErrorType.ServerError, error);
    }
  } else if (error.config) {
    let config = error.config as axios.AxiosRequestConfig;
    logger.error(`[${ClientName}] Connection error: ${config.url}`, error);
    throw new SDKError(ErrorType.ConnectionError, error);
  } else {
    logger.error(`[${ClientName}] Internal client error`, error);
    throw new SDKError(ErrorType.ClientError, error);
  }
};

export class apiTemplateClient {
  private axios: axios.AxiosInstance;
  private logger: Logger;

  constructor(host = 'http://localhost:3000', options: ClientOptions = {}) {
    let { logger, authToken } = options;
    // prettier-ignore
    this.axios = axios.create({
      baseURL: host,
      headers: {
        Accept: 'application/json',         // default expected response content type
        'Content-Type': 'application/json', // default content type for post/put data
      },
    });
    if (logger) {
      this.logger = logger;
    } else {
      this.logger = defaultLogger;
    }
    this.axios.interceptors.response.use(
      responseLogInterceptor(this.logger),
      errorLogInterceptor(this.logger)
    );
    if (authToken) {
      this.authenticate(authToken);
    }
  }

  authenticate(authToken: string) {
    this.axios.defaults.headers.common['Authorization'] = authToken;
  }

  /**
   * Request for the ok response.
   * @returns the ok message object
   * @throws on any error or unexpected response.
   */
  async ok(): Promise<message> {
    let path = '/';

    return this.axios.get<message>(path).then((response) => {
      // Handle expected cases
      if (response.status === 200) {
        return response.data;
      }
      // Throw on anything else
      throw new Error(
        `Unexpected response ${response.status}, ${response.statusText}`
      );
    });
  }

  /**
   * Verifies the server health status
   * @returns server health status report
   * @throws on any error or unexpected responses
   */
  async health() {
    let path = '/health';

    return this.axios
      .get<healtStatus>(path, {
        validateStatus: () => true, // accept all status codes, including 500
      })
      .then((response) => {
        // Handle expected cases
        if ([200, 500].includes(response.status)) {
          return response.data;
        }
        // Throw on anything else
        throw new SDKError(ErrorType.UnexpectedResponse);
      });
  }
}
