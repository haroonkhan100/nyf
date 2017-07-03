/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      email: {
          type: 'string',
          required: true,
          unique: true
      },
      password: {  //To be updated with alpha test login functionality TODO
          type: 'string',
          required: true
      },
      first: {
          type: 'string'
      },
      last: {
          type: 'string'
      },
      address1: {
          type: 'string'
      },
      address2: {
          type: 'string'
      },
      address3: {
          type: 'string'
      },
      address4: {
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
      phoneCountryCode: {
          type: 'string'
      },
      phoneNumber: {
          type: 'string'
      },
      faxNumber: {
          type: 'string'
      },
      url: {
          type: 'string'
      },
      birthYear: {
          type: 'integer'
      },
      role: {
          model: 'role'
      },
      jobTitle: {
          type: 'string'
      },
      twitter: {
          type: 'string'
      },
      company: {
          model: 'userGroup'
      },
      alternateEmail: {
          type: 'string'
      },
      areaCode1: {
          type: 'integer'
      },
      areaCode2: {
          type: 'integer'
      },
      country: {
          model: 'country'
      },
      doNotEmail: {
      	  type: 'boolean'
      },
      doNotCall: {
      	  type: 'boolean'
      },
      doNotSnailMail: {
      	  type: 'boolean'
      },
      addressClean: {
      	  type: 'boolean',
          defaultsTo: true
      },
      emailClean: {
      	  type: 'boolean',
          defaultsTo: true
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }
  //Login functionality in alpha test branches to be integrated TODO


};

