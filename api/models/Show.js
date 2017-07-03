/**
 * Show.js
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
      competition: {
          model: 'competition'
      },
      price: {
          model: 'price'
      },
      startDate: {
          type: 'datetime'
      },
      endDate: {
          type: 'datetime'
      },
      openSales: {
          type: 'datetime'
      },
      closeSales: {
          type: 'datetime'
      },
      longDescription: {
          type: 'string'
      },
      imageURL: {
          type: 'string'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

