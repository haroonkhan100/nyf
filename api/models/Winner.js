/**
 * Winner.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      item: {
          model: 'item',
          required: true
      },
      award: {
          model: 'award',
          required: true
      },
      notes: {
          type: 'string'
      },
/*
      purchaseOrder: {
          model: 'purchaseOrder'
      },
*/
      shipDate: {
          type: 'datetime'
      },
      shipMethod: {
          type: 'string'
      },
      trackingNumber: {
          type: 'string'
      },
      clientApproved: {
          type: 'boolean'
      },
      price: {
          model: 'price'
      },
      GLID: {
          type: 'string'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

