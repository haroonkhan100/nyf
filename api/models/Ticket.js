/**
 * Ticket.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      purchaser: {
          model: 'user',
          required: true
      },
      show: {
          model: 'show'
      },
      name: {
          type: 'string'
      },
      jobTitle: {
          type: 'string'
      },
      company: {
          type: 'string'
      },
      address1: {
          type: 'string'
      },
      address2: {
          type: 'string'
      },
      city: {
          type: 'string'
      },
      state: {
          type: 'string'
      },
      zip: {
          type: 'string'
      },
      country: {
          model: 'country'
      },
      phone: {
          type: 'string'
      },
      phoneExtention: {
          type: 'string'
      },
      mobile: {
          type: 'string'
      },
      fax: {
          type: 'string'
      },
      email: {
          type: 'string'
      },
      alternateEmail: {
          type: 'string'
      },
      twitter: {
          type: 'string'
      },
      paid: {
          type: 'boolean'
      },
      comp: {
          type: 'boolean'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

