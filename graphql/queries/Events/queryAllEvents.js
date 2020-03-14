const { GraphQLList } =  require('graphql');
const eventGraphQLType = require('../../types/eventType');
const Event = require('../../../models/events');

module.exports = {
  type: new GraphQLList(eventGraphQLType),
  args: {},
  resolve() {
    return Event.find({})
  }
}