![CI status](https://github.com/BenjaVR/node-typescript-template/actions/workflows/ci.yml/badge.svg)

# Node.js + TypeScript template

Template project for full-stack Node.js projects written in TypeScript.

If you do not want the mono-repo experience, you can just use any of the [packages](./packages) and
use that as a standalone application.

## What's included?

- Example projects:
  - [API with Fastify](packages/server)
  - [Web app with React](packages/web)
  - [Library with some sample utilities, shared between client/server](packages/lib)

- All projects use:
  - TypeScript (type safety)
  - Jest (unit testing)
  - ESlint (linting)
  - Prettier (formatting)
  - Editorconfig (editor uniformity)
  - Husky (pre-push hook for linting, typechecks, unit tests ...)

- GitHub Actions
  - CI doing typechecking, linting and unit tests
  - Update dependencies automatically (handy for the template, can be thrown away once applied)

## Using this template

- [ ] The project name, author, description ... in the [root package.json](./package.json).
- [ ] The name + year of the [LICENSE](./LICENSE.md) file (or replace it completely to another type
  of license, check https://choosealicense.com).
- [ ] Replace this [README](./README.md) file.
- [ ] Replace/modify/rename services in the [docker-compose.yml](./docker-compose.yml) file.
- [ ] Run `npx npm-check-updates -u` to update all the dependencies to the latest version.
  - [ ] Note: this only updates [package.json](./package.json), please run `npm install`
    to make sure the lock-file is updated as well. You can do this with a manual trigger of
    the [update-deps.yml](./.github/workflows/update-deps.yml) action as well. Feel free to remove
    this action afterwards.

## NPM workspaces

This project uses [NPM workspaces](https://docs.npmjs.com/cli/v8/using-npm/workspaces).

To run npm commands in specific projects (e.g., installing a new dependency), use
the `-w <workspace>` suffix in your npm command. Example: `npm install react -w packages/web`.
