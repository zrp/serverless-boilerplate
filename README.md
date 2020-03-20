<h1 align="center">
  <br>
  <a href="https://zrp.com.br"><img src="http://institutional.zrp.com.br.s3.amazonaws.com/logos/serverless-project-template.png" alt="Serverless Project Template" width="300"></a>
</h1>

<p align="center">
  <a href="https://saythanks.io/to/p@zrp.com.br">
    <img alt="Say Thanks!" src="https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg">
  </a>

  <a href="https://zrp.revelo.com.br/">
    <img alt="Join the team" src="https://img.shields.io/badge/join%20the%20team-jobs-blue">
  </a>

  <a href="https://github.com/zrpaplicacoes/serverless-project-template/actions?query=workflow%3A%22Build+Status%22">
    <img alt="Build Status" src="https://github.com/zrp-aplicacoes/serverless-monorepo-template/workflows/Build%20Status/badge.svg">
  </a>

  <a href="https://snyk.io/test/github/zrpaplicacoes/serverless-project-template?targetFile=package.json">
    <img alt="Known Vulnerabilities" src="https://snyk.io/test/github/zrpaplicacoes/serverless-project-template/badge.svg?targetFile=package.json">
  </a>

  <a href="http://commitizen.github.io/cz-cli/">
    <img alt="Commitizen friendly" src="https://img.shields.io/badge/commitizen-friendly-brightgreen.svg">
  </a>
</h2>

<p align="center">
  <a href="#about">About</a> ·
  <a href="#commiting">Commiting</a> ·
  <a href="#versioning">Versioning</a> ·
  <a href="#syntax-checking-and-code-formatter">Syntax Checking</a> ·
  <a href="#folder-structure">Folder Structure</a>
</p>
<p align="center">
  <a href="#documentation">Documentation</a> ·
  <a href="#debugging">Debugging</a> ·
  <a href="#testing">Testing</a> ·
  <a href="#continuous-integration-and-deployment">CI/CD</a>
  <br/>
  <br/>
</p>

# Serverless Project Template

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->

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
    <td align="center"><a href="https://www.linkedin.com/in/pedro-gryzinsky-b2570490/"><img src="https://avatars3.githubusercontent.com/u/8284669?v=4" width="100px;" alt=""/><br /><sub><b>Pedro Gryzinsky</b></sub></a><br /><a href="https://github.com/zrp-aplicacoes/serverless-project-template/commits?author=pedrogryzinsky" title="Code">💻</a> <a href="https://github.com/zrp-aplicacoes/serverless-project-template/commits?author=pedrogryzinsky" title="Documentation">📖</a></td>
    <td align="center"><a href="https://twitter.com/_nikolas_vs"><img src="https://avatars0.githubusercontent.com/u/7339932?v=4" width="100px;" alt=""/><br /><sub><b>Nikolas Vago Serafini</b></sub></a><br /><a href="https://github.com/zrp-aplicacoes/serverless-project-template/commits?author=Emethium" title="Documentation">📖</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
