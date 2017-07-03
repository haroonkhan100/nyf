/**
 * Piece.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
//TODO - integrate upload and thumb from aws alpha test

module.exports = {

  attributes: {
     mediaType: {
          type: 'string',
          enum: ['sound','movie','picture','document','stream','collateral','other'],
          required: true
      },
      title: {
          type: 'string',
          required: true
      },
      hours: {
          type: 'float'
      },
      minutes: {
          type: 'float'
      },
      seconds: {
          type: 'float'
      },
      width: {
          type: 'integer'
      },
      height: {
          type: 'integer'
      },
      received: {
          type: 'boolean'
      },
      converted: {
          type: 'boolean'
      },
     url: {
          type: 'string'
      },
     urlLogin: {
          type: 'string'
      },
     urlPassword: {
          type: 'string'
      },
     mediaPath: {
          type: 'string'
      },
     convertedPath: {
          type: 'string'
      },
     synopsisText: {
          type: 'string'
      },
     translationText: {
          type: 'string'
      },
     notes: {
          type: 'string'
      },
     smallThumbPath: {
          type: 'string'
      },
     largeThumbPath: {
          type: 'string'
      },
     itemsOwnedBy: {
          collection : 'item',
          via: 'pieceList'
      }
  }
/*,
  //Functions in alpha test branches to be integrated TODO
   uploadFile: function (options, cb){
   },
   generateThumb: function(options, cb){
   }*/
  
};

