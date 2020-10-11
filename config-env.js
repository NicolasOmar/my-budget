const fs = require('fs');
const envConfigFile = `
export const environment = {
  production: true,
  API_URL: '${process.env.API_URL}'
  CRYPT_SECRET: '${process.env.CRYPT_SECRET}'
  CRYPT_METH: '${process.env.CRYPT_METH}'
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