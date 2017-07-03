/**
 * Product.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      titleInternal: {
          type: 'string',
          required: true,
          unique: true
      },
      titleExternal: {
          type: 'string',
          required: true
      },
      description: {
          type: 'string'
      },
      competition: {
          model: 'competition'
      },
      competitionType: {
          model: 'competitionType'
      },
      price: {
          model: 'price'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

