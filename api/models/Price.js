/**
 * Price.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      GLID: {
          type: 'string',
          required: true
      },
      GLIDCost: {
          type: 'string',
          required: true
      },
      price: {
          type: 'float'
      },
      description: {
          type: 'string'
      },
      brief: {
          type: 'string'
      },
      competition: {
          model: 'competition'
      },
      percent: {
          type: 'float'
      },
      rangeQuantity: {
          type: 'boolean'
      },
      rangeQuantityMin: {
          type: 'integer'
      },
      rangeQuantityMax: {
          type: 'integer'
      },
      award: {
          model: 'award'
      },
      inventoryCount: {
          type: 'integer'
      },
      usWeight1: {
          type: 'float'
      },
      intlWeight1: {
          type: 'float'
      },
      dimensions1: {
          type: 'float'
      },
      usWeight2: {
          type: 'float'
      },
      intlWeight2: {
          type: 'float'
      },
      dimensions2: {
          type: 'float'
      },
      usWeight3: {
          type: 'float'
      },
      intlWeight3: {
          type: 'float'
      },
      dimensions3: {
          type: 'float'
      },
      usWeight4: {
          type: 'float'
      },
      intlWeight4: {
          type: 'float'
      },
      dimensions4: {
          type: 'float'
      },
      usWeight5: {
          type: 'float'
      },
      intlWeight5: {
          type: 'float'
      },
      dimensions5: {
          type: 'float'
      },
      usWeight6: {
          type: 'float'
      },
      intlWeight6: {
          type: 'float'
      },
      dimensions6: {
          type: 'float'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

