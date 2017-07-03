/**
 * UserGroup.js
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
          required: true,
          unique: true
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
      country: {
          model: 'country'
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
      designation: {
          type: 'string'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }
/*,
  //Functions in alpha test branches to be integrated TODO
      //TODO - put in loop validation check for member groups
*/

};

