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
Before asking, I do not recommend `npm start` because it's reserved for the Heroku deploy process.
Therefore, there are two start options:
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
| Branch | Environment | Usage |
| ------ | ------ | ------ |
| master | [mybudget-angular](https://mybudget-angular.herokuapp.com/) | Stable version |
| in-progress | [mybudget-angular-dev](https://mybudget-angular-dev.herokuapp.com/) | Working on next iteration |

## Find out more
| [Documentation](https://nicolasomar.github.io/my-budget-docs) | [Project Status](https://trello.com/b/R6Yn7vb0/mybudget) | [Changelog](https://github.com/NicolasOmar/my-budget-angular/blob/master/CHANGELOG.md) |
| ----- | ----- | ----- |
| Documentation related to project (objective, features & roadmap) & technical aspects (used packages, testing mechanisms) | Project board to track current status | List of features, improvements and bug fixes included on each iteration |

## License
**MIT**