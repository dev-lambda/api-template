---
sidebar_position: 5
---

# Documentation guidelines and supports

:::tip
## Document intentionality, concepts and metaphores.

Code documents itself, but you can't understand the aim that lead to a specific implentation, or how the code should evolve based only on what's written. 
:::


:::tip
## Document for humans.

Be explicit on use cases that the project should cover and ilustrate with working examples.
:::

## Keep your target audiences' needs in mind

- Target users: use cases, features, metaphores, concepts
- Develppers: run setup, contribution, tests, implementation details
- Integration: api, sdk, events, error management, interface data models
- Data analysts: data semantics
- Admins: deployment, application setup, CI/CD, monitoring

## Documentation order

- Value, Benefits
  - project scope and responsabilities
- Concepts, metaphores
- Use cases, features
  - sample scenarios
- Basic usage
  - setup
  - how to use
- Deployment
  - deployment and ci
  - monitoring metrics
- Integration
  - api, sdk, jobs
    - interface data models
    - error management
  - exposed data and meaning
  - events semantics and triggers
- Contributing
  - Code conventions
  - Project structure
  - Documentation and tests guidelines
  - Review process
  - Specific algorithms in place

## Documentation supports

### `readme.md`

### Code comments and naming

### Schemas

### Open API specs

### Documentaiton website

This project has a documentation site in order to provide guided learn paths and comprehensive documentation about the project.

It uses docusaurus as the site builder engine and is hosted in a github page available at: 

[https://dev-lambda.github.io/api-template/](https://dev-lambda.github.io/api-template/)

The full documentation website is organised as a standard docusaurus site under the `\website` folder. Its dependencies are independent as those of the project's which means that it has it's own `npm scrips` and requires installing its own packages under `\website\node_modules`.

In order to run the documentation locally go to the `/website` folder and use the following npm scripts:

- Install documentation site dependencies (only needed the first time and on documentation depandencies changes)
  ```sh title="in the \website folder"
  npm install
  ```

- Generate/update the OpenAPI specification from code comments for the API section of the documentation
  ```sh title="in the project root folder"
  npm dumpApiSpec
  ```

- Launch a local instance of the documentation site
  ```sh title="in the \website folder"
  npm start
  ```

The local documentation page is available at [http://localhost:3500/api-template](http://localhost:3500/api-template).

This documentation site is deployed using github actions, for more details see the [deployment section](deployment#publish-documentation-website-to-gh-pages).