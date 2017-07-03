/**
 * Entry.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      lineItem: {
          model: 'lineItem',
          required: true
      },
      entryType: {
          type: 'string'
      },
      stage: {
          type: 'string'
      },
      competition: {
          model: 'competition',
          required: true
      },
      user: {
          model: 'user',
          required: true
      },
      company: {
          model: 'userGroup'
      },
      shipAttention: {
          type: 'string'
      },
      shipDepartment: {
          type: 'string'
      },
      shipAddress1: {
          type: 'string'
      },
      shipAddress2: {
          type: 'string'
      },
      shipCity: {
          model: 'country'
      },
      shipStage: {
          type: 'string'
      },
      shipZip: {
          type: 'string'
      },
      shipCountry: {
          model: 'country'
      },
      orderTotal: {
          type: 'float'
      },
      amountReceived: {
          type: 'float'
      },
      financeStage: {
          type: 'string'
      },
      financeStageDate: {
          type: 'datetime'
      },
      notes: {
          type: 'string'
      },
      deleted: {
          type: 'boolean'
      },
      emailCount: {
          type: 'int'
      },
      emailNotes: {
      	  type: 'string'
      },
      emailDate: {
      	  type: 'datetime'
      },
      active: {
      	  type: 'boolean',
      	  required: true
      }
  }
/* TODO - Add validation check for stage movement; only allow transitions based on required criteria (will need to be specific to each competition)*/


};

