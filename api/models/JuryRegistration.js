/**
 * JuryRegistration.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      competition: {
          model: 'competition',
          required: true
      },
      user: {
          model: 'user',
          required: true
      },
      name: {
          type: 'string'
      },
      email: {
          type: 'string'
      },
      twitterHandleMain: {
          type: 'string'
      },
      mobilNumber: {
          type: 'string'
      },
      alternativeNumber: {
          type: 'string'
      },
      assistantName: {
          type: 'string'
      },
      assistantEmailAddress: {
          type: 'string'
      },
      assistantPhoneNumber: {
          type: 'string'
      },
      twitterHandle: {
          type: 'string'
      },
      arrivalAirlineName: {
          type: 'string'
      },
      arrivalDate: {
          type: 'datetime'
      },
      arrivalAirport: {
          type: 'string'
      },
      arrivalFlightNumber: {
          type: 'string'
      },
      arrivalNotApplicable: {
          type: 'boolean'
      },
      arrivalNeedLimousine: {
          type: 'boolean'
      },
      someoneTravelingWithYou: {
          type: 'boolean'
      },
      attendingDinner: {
          type: 'boolean'
      },
      departureCity: {
          type: 'string'
      },
      departureCountry: {
          model: 'country'
      },
      departureDate: {
          type: 'datetime'
      },
      departureAirport: {
          type: 'string'
      },
      iLiveLocally: {
          type: 'boolean'
      },
      departureNeedLimousine: {
          type: 'boolean'
      },
      departureFlightNumber: {
          type: 'string'
      },
      departureNotApplicable: {
          type: 'boolean'
      },
      dietaryRestrictions: {
          type: 'string'
      },
      publicRelationsName: {
          type: 'string'
      },
      publicRelationsPhone: {
          type: 'string'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  }


};

