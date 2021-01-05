# My Budget Angular
Web application based on Angular for administrating personal earnings and expenses connected to a [Node API](https://github.com/NicolasOmar/my-budget-api).

## What do I need?
Before cloning this repo, I recommend installing the following software:
- [Node](https://nodejs.org/en/download/) >=12.16.1 to install packages
- [API Repo](https://github.com/NicolasOmar/my-budget-api) to work in a local environment
- [Angular CLI](https://cli.angular.io/) to run Angular specific commands

## Setup
After cloning the repo, go to the created folder and install the node packages (including [Angular CLI](https://cli.angular.io/) at the global level).
```sh
git clone https://github.com/NicolasOmar/my-budget.git
cd my-budget
npm run setup
```

## How to run it
To run the app as a non-stopping service and start it in a new browser tab
```sh
npm start
```
To run the service only
```sh
npm run local
```

## Branches and Environments
To maintain better code tracking in time, I decided to separate the development process into two branches with their respective environments.
Those environments are being hosted on [AWS Amplify](https://aws.amazon.com/amplify/).
| Branch | Version | Coverage | Environment | Usage |
| :--- | :---: | :---: | :--- | :--- |
| master | ![My Budget (master branch)](https://img.shields.io/github/package-json/v/nicolasomar/my-budget/master?color=success&label=%20&style=flat-square) | ![My Budget Coverage (master branch)](https://img.shields.io/codecov/c/github/nicolasomar/my-budget/master?label=%20&style=flat-square&logo=codecov) | [Production](https://in-progress.d1q34rcbg2o0b5.amplifyapp.com/) | Stable version |
| develop | ![My Budget (develop branch)](https://img.shields.io/github/package-json/v/nicolasomar/my-budget/develop?color=yellow&label=%20&style=flat-square) | ![My Budget Coverage (develop branch)](https://img.shields.io/codecov/c/github/nicolasomar/my-budget/develop?label=%20&style=flat-square&logo=codecov) | [Development](https://master.d2i6kyeewx6g66.amplifyapp.com/) | Working on next iteration |

## Find out more
| [Documentation](https://nicolasomar.github.io/my-budget-docs) | [Project Status](https://trello.com/b/R6Yn7vb0/mybudget) | [Node Repo](https://github.com/NicolasOmar/my-budget-api) |
| :--- | :--- | :--- |
| Documentation site for analysis and technical reference | Trello board for project status & tracking | Node API repository

## License
**MIT**