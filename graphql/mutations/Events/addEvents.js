const { GraphQLObjectType, GraphQLString } = require('graphql');
const eventGraphQLType = require('../../types/eventType');
const Events = require('../../../models/events');

module.exports = {
  type: eventGraphQLType,
  args: {
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    description: { type: GraphQLString },
    speaker: { type: GraphQLString },
  },
  resolve(parent, args) {
    const newEvent = new Events({
      name: args.name,
      date: args.date,
      description: args.description,
      speaker: args.speaker,
    })

    return newEvent.save();
  }
};

