# Weather Forecast API

## Table of Contents

* [Getting Started](#getting-started)
  * [Prerequisite](#prerequisite)
  * [Installation](#installation)
* [Running](#running)
* [How it works?](#how-it-works?)
  * [Admin](#admin)
    * [Login](#login)
    * [About me](#about-me)
    * [Create a movie](#create-a-movie)
  * [User](#user)
    * [Register](#register)
    * [About me](#about-me)
    * [Get a movie](#get-a-movie)
    * [Search movies](#search-movies)
* [Built with](#built-with)
  * [Development Environment](#development-environment)
  * [Third Party Dependencies](#third-party-dependencies)
  * [Third Party Dev Dependencies](#third-party-dev-dependencies)
* [Authors](#authors)
* [License](#license)
* [Resources](#resources)

## Getting Started

These instructions will guide you to up and running the project on your local machine.

### Prerequisite

* Node.js
* Yarn (or npm)

### Installation

After pulling the source code, you can install all dependencies via `yarn install` in the directory.

## Running

`yarn run serve` will start the server however it will fail because app is not built at the moment.

Dev and production builds can be managed with Webpack. The difference is that code will be compressed on production one.

Based on needs, you can either run `yarn run serve:dev` or `yarn run serve:prod`.

First dist folder will be created then nodemon is gonna serve the app from [http://localhost:3000/api/](http://localhost:3000/api/).

## Testing

Currently dependencies are not mocked thus server must already be running before running tests.

You can run all tests with `yarn run test` also you can get test report and coverage via `yarn run test:report` and `yarn run test:coverage`.

## Built with

#### Development Environment

* [Ubuntu 16](https://www.ubuntu.com/download/server) - Server
* [Linux Mint 18](https://www.linuxmint.com/) - OS
* [WebStorm](https://www.jetbrains.com/webstorm/) - IDE
* [Postman](https://www.getpostman.com/) - API client tool
* terminator - A Linux terminal emulator

#### Third Party Dependencies

* [yr.no-forecast](https://github.com/evanshortiss/yr.no-forecast) - Wrapper to easily get weather data for a specified location in JSON format
* [ioredis](https://github.com/luin/ioredis) - ioredis is a robust, full-featured Redis client
* [body-parser](https://github.com/expressjs/body-parser) - Node.js body parsing middleware
* [express](https://github.com/expressjs/express) - minimalist web framework for node
* [nodemon](https://github.com/remy/nodemon) - For use during development of a node.js based application

#### Third Party Dev Dependencies

* [Chai](http://www.chaijs.com/) - Chai is a BDD / TDD assertion library for node
* [Mocha](https://mochajs.org//) - JavaScript test framework running on Node.js

## Authors

* **Emrah Sifoğlu** - *Initial work* - [emrahsifoglu](https://github.com/emrahsifoglu)

## License

This project is licensed under the [MIT License](http://opensource.org/licenses/MIT).

## Resources

- https://marcobotto.com/blog/compiling-and-bundling-typescript-libraries-with-webpack/
- https://appdividend.com/2017/03/31/beginners-guide-to-setup-typescript-with-webpack/
- https://stackoverflow.com/questions/48799446/webpack-hot-middleware-webpack-express-typescript
- https://webpack.js.org/configuration/devtool/
- https://stackoverflow.com/questions/43698460/how-do-i-resolve-a-promise-in-node-js
- https://stackoverflow.com/questions/48529155/express-route-hanging-async-await
- https://dev.to/geoff/writing-asyncawait-middleware-in-express-6i0
- https://medium.com/@Abazhenov/using-async-await-in-express-with-node-8-b8af872c0016
- https://odino.org/async-slash-await-in-expressjs/
- http://mherman.org/blog/2016/11/05/developing-a-restful-api-with-node-and-typescript/#.WvMGdnWFPQ0
- https://proinlab.com/archives/1508
- http://thisdavej.com/guides/redis-node/node/counters.html
- https://samueleresca.net/2017/07/inversion-of-control-and-unit-testing-using-typescript/
- https://github.com/wzr1337/node.express.webpack.starter
- https://github.com/kinotto/node-typescript-webpack-starter
- https://gorrion.io/blog/node-express-js-typescript-sequelize/
- https://azimi.me/2016/09/30/nyc-mocha-typescript.1.html
- https://istanbul.js.org/docs/tutorials/typescript/
- https://blog.khophi.co/mocha-chai-chai-http-test-express-api-auth-endpoints/
- https://github.com/slavovojacek/adbrain-typescript-definitions/blob/master/chai-http/chai-http-tests.ts
- http://www.letsblogitutkarsh.in/2017/05/promisifying-redis-client-with-bluebird.html
- https://github.com/YR/weather-symbols
- https://github.com/UtkarshYeolekar/promisify-redis-client
- https://stackoverflow.com/questions/31490071/cant-connect-to-the-fakeredis-instance-nodejs-redis-fakeredis
- https://stackoverflow.com/questions/30650499/node-js-redis-and-how-to-use-promise-when-using-a-module/30656831
- https://michael.hoennig.de/2018/01/22/getting-rid-of-endless-in-es6-typescript-imports-of-ionic-projects/
- https://github.com/zinserjan/mocha-webpack/issues/185
- https://hichambi.github.io/2016/12/27/testing-angular2-with-webpack-mocha-on-browser-and-node.html
- https://zinserjan.github.io/mocha-webpack/docs/guides/ide-integration.html
- https://www.reddit.com/r/node/comments/76z9r4/help_patterns_for_using_asyncawait_with_mocha/
- https://labs.chiedo.com/blog/async-mocha-tests/
- https://stackoverflow.com/questions/41761683/why-am-i-getting-error-resolution-method-is-overspecified/41761748
- http://blog.arunaherath.com/2014/06/faking-redis-in-nodejs-with-fakeredis.html
