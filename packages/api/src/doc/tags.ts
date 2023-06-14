import { OpenAPIV3 } from '@asteasolutions/zod-to-openapi';

// export interface TagObject extends ISpecificationExtension {
//   name: string;
//   description?: string;
//   externalDocs?: ExternalDocumentationObject;
//   [extension: string]: any;
// }

const tags: OpenAPIV3.TagObject[] = [
  {
    name: 'Integration',
    description: 'Integration support resources',
  },
  {
    name: 'Base',
    description: 'Base API responses',
  },
  {
    name: 'Monitoring',
    description: ' Monitoring and health check features',
  },
];

export default tags;
