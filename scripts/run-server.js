//Install express server
const express = require('express');
const app = express();
const folder = './dist/my-budget-angular';

// Serve only the static files form the dist directory
app.use(express.static(folder));

app.get('/*',
  (req, res) => {
    res.sendFile('index.html', { root: `${folder}/` });
  }
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
