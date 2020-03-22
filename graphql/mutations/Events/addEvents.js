const { GraphQLObjectType, GraphQLString } = require('graphql');
const eventGraphQLType = require('../../types/eventType');
const Events = require('../../../models/events');

module.exports = {
  type: eventGraphQLType,
  args: {
    name: { type: GraphQLString },
    startDate: { type: GraphQLString },
    endDate: { type: GraphQLString },
    description: { type: GraphQLString },
    speaker: { type: GraphQLString },
  },
  resolve(parent, args) {

    const newEvent = new Events({
      name: args.name,
      startDate: args.startDate,
      endDate: args.endDate,
      description: args.description,
      speaker: args.speaker,
    })

    return newEvent.save();
  }
};

