 // server.js
 const express = require('express');
 const app = express();
 const awsRoutes = require('./routes/aws-resource.routes');
 const port = 3000;

//  Connect all our routes to our application
app.use('/', awsRoutes);

 // start the server
 app.listen(port, function() {
  console.log(`Server running on http://localhost:${port}/`);
});