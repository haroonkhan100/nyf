/**
 * CategoryGroup.js
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
      order: {
          type: 'int'
      },
      competitionType: {
          model: 'competitionType'
      },
      class: {
          type: 'string'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

