const { GraphQLObjectType, GraphQLString } = require('graphql');
const eventGraphQLType = require('../../types/eventType');
const Event = require('../../../models/events');

module.exports = {
  type: eventGraphQLType,
  args: { 
    id: { type: GraphQLString }
  },
  resolve(parent, args) {
    console.log(args.id)
    return Event.findOneAndDelete({_id: args.id}).exec()
      .then(event => event.remove())
      .then(deletedEvent => deletedEvent)
      .catch(err => console.log(err))
  }
};