/**
 * Journal.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      type: {
          type: 'float'
      },
      glMonth: {
          type: 'float'
      },
      sent: {
          type: 'float'
      },
      exported: {
          type: 'float'
      },
      discountAmount: {
          type: 'float'
      },
      debitAmount: {
          type: 'float'
      },
      unidentifiedAmount: {
          type: 'float'
      },
      deleted: {
          type: 'boolean'
      }
  }


};

