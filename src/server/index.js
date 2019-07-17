const express = require('express');
const cors = require('cors');
const graphqlHTTP = require('express-graphql');
const gql = require('graphql-tag');
const { buildASTSchema } = require('graphql');
// const POSTS = require('./posts.js')
const fetch = require("node-fetch")

// console.log('1', POSTS);
const schema = buildASTSchema(gql`
  type Query {
    posts: [Post]
    post(id: ID!): Post
  }

  type Post {
    id: ID
    author: String
    body: String
  }
`);

const root = {
  posts: async () => {
    const response = await fetch('http://localhost:3001/posts')
    return response.json()
  },
  post: async ({id}) => {
    const response = await fetch(`http://localhost:3001/posts/${id}`)
    return response.json()
  }
};

const app = express();
app.use(cors());
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true,
}));

const port = process.env.PORT || 4000
app.listen(port);
console.log(`Running a GraphQL API server at localhost:${port}/graphql`);