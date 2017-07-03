/**
 * Category.js
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
      categoryGroup: {
          model: 'categoryGroup'
      },
      competitionType: {
          model: 'competitionType'
      },
      new: {
          type: 'boolean'
      },
      singlePrice: {
          model: 'price'
      },
      campaignPrice: {
          model: 'price'
      },
      mixedPrice: {
          model: 'price'
      },
      allowSingle: {
          type: 'boolean'
      },
      allowCampaign: {
          type: 'boolean'
      },
      allowMixed: {
          type: 'boolean'
      },
      engraving: {
          type: 'string'
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

