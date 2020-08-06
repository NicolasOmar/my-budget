# My Budget Angular
Web application based on Angular for administrating earnings and expenses. Connected to a [NodeJs API](https://github.com/NicolasOmar/my-budget-api)

## What do I need?
Before cloning this repo, I recommend installing the following software:
- [Node](https://nodejs.org/en/download/) >=12.16.1 to install packages
- [API Repo](https://github.com/NicolasOmar/my-budget-api) to work in a local environment

## Setup
After cloning the repo, just install the node packages in the project´s root file.
```sh
git clone https://github.com/NicolasOmar/my-budget-angular.git
cd my-budget-angular
npm run setup
```

## How to run it
To run it as a non-stopping service and start it in a browser tab
```sh
npm run local
```
To run the service only
```sh
ng serve
```

## Branches and Environments
To maintain a better code tracking in time, I resolved to maintain two branches with its respective environments.
Those environments are been deployed on [Heroku](https://www.heroku.com/)
| Branch | Environment | Usage |
| ------ | ------ | ------ |
| master | [mybudget-angular](https://mybudget-angular.herokuapp.com/) | Stable version |
| in-progress | [mybudget-angular-dev](https://mybudget-angular-dev.herokuapp.com/) | Working on next iteration |

## Find out more
| [Project Docs](https://github.com/NicolasOmar/my-budget-api/wiki/Project-documentation) | [Technical Docs](https://github.com/NicolasOmar/my-budget-api/wiki/Technical-documentation) | [Changelog](https://github.com/NicolasOmar/my-budget-angular/blob/master/CHANGELOG.md) |
| ----- | ----- | ----- |
| Documentation related to project aspects (objective, features & roadmap) | Documentation related to technical aspects (used packages, testing mechanisms) | List of features and bug fixes included on each iteration/release |

## License
**MIT**