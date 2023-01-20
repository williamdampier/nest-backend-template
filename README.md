## Description

This repo is Nest.js backend template created for use in my personal projects

## Installation (can use Yarn)

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## ENV variables example (.development.env and .production.env)

PORT=7000 //Application port
PG_HOST=postgres
PG_PORT=5432
PG_USERNAME=postgres
PG_PASSWORD=postgresss
PG_DATABASE=nest-test
PRIVATE_KEY='JWT-Secret-KEY' //JWT Secret for signature

Environment var is managed via cross-env (check package.json for script run details)

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
