const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");

require('dotenv').config();

// mongoose.connect("mongodb://localhost:27017/gql-test", { useNewUrlParser: true });
mongoose.connect(`mongodb://${process.env.APP_DB_NAME}:${process.env.APP_DB_PASSWORD}@ds249005.mlab.com:49005/gql-test`)
mongoose.connection.once('open', () => {
  console.log('database is connected');
});

const app = express();
// allow cross-origin request
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('now listening');
})