const { GraphQLList } =  require('graphql');
const threeDMOdelGraphQLType = require('../../types/eventType');
const ThreeDModel = require('../../../models/3dmodels');

module.exports = {
  type: new GraphQLList(threeDMOdelGraphQLType),
  args: {},
  resolve() {
    return ThreeDModel.find({})
  }
}