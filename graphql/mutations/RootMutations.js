const { GraphQLObjectType, GraphQLString } = require('graphql');


//Events Model CRUD
const addEvents = require('./Events/addEvents');
const updateEvents = require('./Events/updateEvents');
const removeEvents = require('./Events/removeEvents');

//3D Model CRUD
const add3DModel = require('./ThreeDmodels/addThreeDModel')
const update3DModel = require('./ThreeDmodels/addThreeDModel')
const remove3DModel = require('./ThreeDmodels/addThreeDModel')

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addEvents,
    updateEvents,
    removeEvents,
    add3DModel,
    update3DModel,
    remove3DModel
  }
})

module.exports = Mutation;