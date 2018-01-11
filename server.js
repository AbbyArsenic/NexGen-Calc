const express   = require("express"),
    path        = require("path"),
    bodyParser  = require("body-parser");
    
const PORT      = process.env.PORT || 3001;
const app       = express();

// Serve up static assets
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
