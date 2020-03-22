const { GraphQLList, GraphQLString } =  require('graphql');
const eventGraphQLType = require('../../types/eventType');
const Event = require('../../../models/events');

module.exports = {
  type: new GraphQLList(eventGraphQLType),
  args: {
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Event.find({startDate: {$gte: args.startDate, $lte: args.endDate}})
  }
}