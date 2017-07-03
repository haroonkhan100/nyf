/**
 * Fee.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      titleInternal: {
          type: 'string',
          required: true
      },
      titleExternal: {
          type: 'string',
          required: true
      },
      competition: {
          model: 'competition'
      },
      code: {
          required: true,
          type: 'string'
      },
      startDate: {
          required: true,
          type: 'datetime'
      },
      endDate: {
          required: true,
          type: 'datetime'
      },
      percentage: {
          type: 'float'
      },
      amount: {
          type: 'float'
      },
      price: {
          model: 'price'
      },
      quantityMin: {
          type: 'integer'
      },
      quantityMax: {
          type: 'integer'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

