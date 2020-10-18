# My Budget Angular
Web application based on Angular for administrating personal earnings and expenses connected to a [NodeJs API](https://github.com/NicolasOmar/my-budget-api)

## What do I need?
Before cloning this repo, I recommend installing the following software:
- [Node](https://nodejs.org/en/download/) >=12.16.1 to install packages
- [API Repo](https://github.com/NicolasOmar/my-budget-api) to work in a local environment
- [Angular CLI](https://cli.angular.io/) to run Angular specific commands

## Setup
After cloning the repo, go to the created folder and install the node packages (including [Angular CLI](https://cli.angular.io/) at the global level).
```sh
git clone https://github.com/NicolasOmar/my-budget-angular.git
cd my-budget-angular
npm run setup
```

## How to run it
Before starting for the first time, I reserved the `npm start` command for the [Heroku](https://www.heroku.com/) deploy process.
Therefore, I added two start options:
To run the app as a non-stopping service and start it in a new browser tab
```sh
npm run local
```
To run the service only
```sh
ng serve
```

## Branches and Environments
To maintain a better code tracking in time, I decided to separate two branches with its respective environments.
Those environments are being built and deployed on [Heroku](https://www.heroku.com/).
| Branch | Version | Environment | Usage |
| :--- | :--- | :--- | :--- |
| master | ![MyBudget Angular (master version)](https://img.shields.io/github/package-json/v/nicolasomar/my-budget-angular/master?color=success&label=%20&style=flat-square) | [mybudget-angular](https://mybudget-angular.herokuapp.com/) | Stable version |
| in-progress | ![MyBudget Angular (in-progress version)](https://img.shields.io/github/package-json/v/nicolasomar/my-budget-angular/in-progress?color=yellow&label=%20&style=flat-square) | [mybudget-angular-dev](https://mybudget-angular-dev.herokuapp.com/) | Working on next iteration |

## Find out more
| [Documentation](https://nicolasomar.github.io/my-budget-docs) | [Project Status](https://trello.com/b/R6Yn7vb0/mybudget) | [React Repo](https://github.com/NicolasOmar/my-budget-react) | [Node Repo](https://github.com/NicolasOmar/my-budget-api) |
| :--- | :--- | :--- | :--- |
| Documentation related to project (objective, features & roadmap) & technical aspects (error handling, testing mechanisms) | Project board to track current status | React front-end repository | Node API repository

## License
**MIT**