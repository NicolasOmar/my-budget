const fs = require('fs');
const envConfigFile = `
export const environment = {
  production: true,
  API_URL: '${process.env.API_URL}'
};
`;

fs.writeFile(
  './src/environments/environment.prod.ts',
  envConfigFile,
  function (err) {
    if (err) {
      console.log(err)
    }
  }
)