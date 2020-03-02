# Serverless Project Template
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

[![Made with love](https://img.shields.io/badge/Made%20with%20love%20by-ZRP-orange)](https://www.zrp.com.br/) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) ![Build Status](https://github.com/zrp-aplicacoes/serverless-monorepo-template/workflows/Build%20Status/badge.svg)

![Logo](http://institutional.zrp.com.br.s3.amazonaws.com/logos/serverless-project-template.png)

[About](#about) | [Commiting](#commiting) | [Versioning](#versioning) | [Syntax Checking](#syntax-checking-and-code-formatter) | [Folder Structure](#folder-structure) | [Documentation](#documentation) | [Debugging](#debugging) | [Testing](#testing) | [CI/CD](#continuous-integration-and-deployment)

## About

This is a [GitHub Template Project](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template) for serverless based projects to mostly ease the burden of **setup**, providing a set of helpers for developers to quick-off projects using serverless and node.

The helpers and adopted standards focus on commiting, versioning, writing and managing documentation, linting, style checking, formatting code, deploying, continuous delivering, testing, debugging and logging.

In the following sections, the choosen standards and use cases are explained.

## Commiting

Commiting follow the [Conventional Commits 1.0.0 Specification](https://www.conventionalcommits.org/en/v1.0.0/) enforced through [commitizen](https://github.com/commitizen/cz-cli).

_OPTIONAL_: You can set hooks locally for invoking the commit script or the commitizen cli.

## Versioning

This repository follows the [semver 2.0.0](https://semver.org/) guideline and enforces it using the [standard-version](https://github.com/conventional-changelog/standard-version) library. Standard Version was choosen (over semantic-release) since it only affects your local repository, thus enabling revision before publishing any releases.

## Syntax Checking and Code Formatter

This project uses the [AirBnb Style Guide](https://github.com/airbnb/javascript#airbnb-javascript-style-guide-) and was configured using [this script](https://github.com/paulolramos/eslint-prettier-airbnb-react) that install both [ESLint](https://eslint.org/) (style / syntax checking) and [Prettier](https://prettier.io/) (code formatter).

The set of rules used by default are the recommended by both the `airbnb/base` and the `plugin:prettier/recommended` configs.

For linting the codebase, run `npm run lint`. To fix any fixable errors automatically, run `npm run lint:fix`.

## Folder Structure

The following folders are available and considered (for most use cases):

- **.github**: GitHub configuration files for issue templates, pull request templates and github actions;
- **.vscode**: Shared configuration for .vscode debugger;
- **bin**: Binaries and Scripts that can be used for deployment, tooling, parsing, building or any other common operation;
- **docs**: Automated generated docs using JSDoc (check package.json) for further info.
- **lib**: Shared code, can be anything from logging and utilities, to common access patterns and data manipulation;
- **src**: Services and specific code;
- **test**: Test files for both src and lib code;

## Documentation

Documentation is generated using JSDoc. You can run `npm run docs:gen` to generate the latest documentation and `npm run docs:serve` to serve the generated documentation.

## Debugging

### Locally

You can start a debug session using vscode debugger. Just run the `Launch Serverless Offline (Locally)` option. Then you can hit the API GW Simulator on `localhost:3000`. By default, this project accepts incoming GET requests on / and /{id}. An example request follows:

```bash
curl -v -L "http://localhost:3000/1?ok=true"
```

Any breakpoint will be lazily evaluated. Any code change will automatically restart the server, and breakpoints will be revaluated.

### Docker

You can start the application using `docker-compose` by running the `docker-compose up app` or `docker-compose run --service-ports app`.

Optionally, you can run `Launch Serverless Offline (Docker)` to boot a container and bind to it automatically.

## Testing

Tests are run through jest. You can run `npm test`, which will run every test suite available.

Otherwise, you can run a specific test file using the vscode debugger `Jest (Current File)` option.

For coverage report, run `npm test` on the command line or `Jest (All)` on vscode and run `npm run cov:serve`, which will serve the coverage report on [http://localhost:2223](http://localhost:2223).

## Continuous Integration and Deployment

The CI/CD pipeline is provided by GitHub Actions.

For deployment, there are 2 default stages:

- `dev`
- `production`

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://twitter.com/_nikolas_vs"><img src="https://avatars0.githubusercontent.com/u/7339932?v=4" width="100px;" alt=""/><br /><sub><b>Nikolas Vago Serafini</b></sub></a><br /><a href="https://github.com/zrp-aplicacoes/serverless-project-template/commits?author=Emethium" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!