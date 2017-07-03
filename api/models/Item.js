/**
 * Item.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      entry: {
          model: 'entry',
          required: true
      },
      title: {
          type: 'string'
      },
      advertiser: {
          type: 'string'
      },
      company: {
          type: 'string'
      },
      brand: {
          type: 'string'
      },
      brandUrl: {
          type: 'string'
      },
      category: {
          model: 'category'
      },
      productionCompany: {
          type: 'string'
      },
      productionCPName: {
          type: 'string'
      },
      productionCPEmail: {
          type: 'string'
      },
      productionDate: {
          type: 'string'
      },
      targetAudience: {
          type: 'string'
      },
      seriesQuantity: {
          type: 'int'
      },
      notes: {
          type: 'string'
      },
      creditsChecked: {
          type: 'boolean'
      },
      sponsor: {
          type: 'string'
      },
      GLID: {
          type: 'string'
      },
      pieceList: {
          collection : 'piece',
          via: 'itemsOwnedBy',
          dominant: true
      }

  }
/*TODO - Add validation to verify that category can only be changed between same price categories or if the cart/entry is in the business specified statuses.  May need to change per competition */


};

