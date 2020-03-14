const { GraphQLObjectType, GraphQLString } = require('graphql');
const threeDModelGraphQLType = require('../../types/ThreeDModelType');
const threeDModel = require('../../../models/3dmodels');

module.exports = {
  type: threeDModelGraphQLType,
  args: {
    id: { type: GraphQLString },
    name: { type: GraphQLString }, 
    obj: { 
      data: { type: GraphQLString }
    },
    mtl: { 
      data: { type: GraphQLString }
    },
    topic: {type: GraphQLString}
  },
  resolve(parent, args) {
    return threeDModel.findById(args.id)
      .then(threedmodel => {
        event.name = args.name
        event.obj = args.obj,
        event.mtl = args.mtl,
        event.topic = args.topic

        return threedmodel.save()

      })
      .then(updated3DModel => updated3DModel)
      .catch(err => console.log(err))
  }
};