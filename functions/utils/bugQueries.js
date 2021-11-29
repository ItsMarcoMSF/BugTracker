const GET_BUGS = `query {
  allBugs {
    data {
      description
      _id
      dev
      priority
      resolved
    }
  }
}`;

const CREATE_BUG = `
    mutation($description: String!, $dev: String!, $priority: String!) {
        createBug( data: { description:$description, dev: $dev, priority: $priority, resolved: false }) {
            description
            _id
            dev
            priority
            resolved
        }
    }
`;

const UPDATE_BUG = `
  mutation($id: ID!, $resolved: Boolean!, $description: String!, $dev: String!, $priority: String!  ) {
    updateBug( id: $id, data: { description:$description, dev: $dev, priority: $priority, resolved: $resolved }) {
      description
      _id
      dev
      priority
      resolved
    }
  }
`;

const DELETE_BUG = `
  mutation($id: ID!) {
    deleteBug( id: $id) {
        _id
    }
  }
`;

module.exports = {
  GET_BUGS,
  CREATE_BUG,
  UPDATE_BUG,
  DELETE_BUG,
};