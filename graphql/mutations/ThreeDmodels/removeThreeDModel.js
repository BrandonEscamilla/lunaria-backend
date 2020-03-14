const { GraphQLObjectType, GraphQLString } = require('graphql');
const threeDModelGraphQLType = require('../../types/ThreeDModelType');
const threeDModel = require('../../../models/3dmodels');

module.exports = {
  type: threeDModelGraphQLType,
  args: { 
    id: { type: GraphQLString }
  },
  resolve(parent, args) {
    return threeDModel.findOneAndDelete({_id: args.id}).exec()
      .then(threedmodel => threedmodel.remove())
      .then(deleted3DModel => deleted3DModel)
      .catch(err => console.log(err))
  }
};