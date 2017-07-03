/**
 * Session.js
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
      state: {
          type: 'string'
      },
      type: {
          type: 'string'
      },
      synch: {
          type: 'boolean'
      },
      stage: {
          type: 'string'
      },
      competition: {
          model: 'competition'
      },
      currentOrderId: {
          type: 'integer'
      },
      nextSession: {
          model: 'session'
      },
      reRunSession: {
          model: 'session'
      },
      judgingsPerItem: {
          type: 'integer'
      },
      itemsPerJudge: {
          type: 'integer'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

