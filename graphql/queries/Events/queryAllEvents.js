const { GraphQLList } =  require('graphql');
const eventGraphQLType = require('../../types/eventType');
const Event = require('../../../models/events');

module.exports = {
  type: new GraphQLList(eventGraphQLType),
  args: {},
  resolve() {
    console.log('Enter to get All eventss!')
    return Event.find({})
  }
}