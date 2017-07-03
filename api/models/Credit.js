/**
 * Credit.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      talentText: {
          type: 'string',
          required: true
      },
      talentEmail: {
          type: 'string',
          required: true
      },
      winner: {
          model: 'winner'
      },
      order: {
          type: 'integer'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

