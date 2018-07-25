const express = require('express');
const app = express();

const PORT = process.env.port || 3005;

app.listen(PORT, () => {
  console.log(`Now listening on port: ${PORT}`)
})
