const { GraphQLObjectType, GraphQLString } = require('graphql');
const eventGraphQLType = require('../../types/eventType');
const Event = require('../../../models/events');

module.exports = {
  type: eventGraphQLType,
  args: {
    id: {type: GraphQLString},
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    description: { type: GraphQLString },
    speaker: { type: GraphQLString },
  },
  resolve(parent, args) {
    return Event.findById(args.id)
      .then(event => {
        event.name = args.name
        event.date = args.date,
        event.description = args.description,
        event.speaker = args.speaker

        return event.save()

      })
      .then(updatedEvent => updatedEvent)
      .catch(err => console.log(err))
  }
};