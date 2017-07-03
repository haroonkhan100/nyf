/**
 * Vote.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      ballot: {
          model: 'ballot',
          required: true
      },
      type: {
          type: 'string',
          enum: ['slider5','slider10','sliderPercent','radio5','radio10','yesNo','places'],
          required: true
      },
      criteria: {
          type: 'string',
          enum: ['idea','relevance','execution','mulligan','overall'],
          required: true
      },
      score: {
          type: 'float'
      }
  },
  beforeValidate: function (toUpdate, cb) {
      if((toUpdate.type == 'yesNo' && toUpdate.score && 
          toUpdate.score != 0 && 
          toUpdate.score != 1)  || 
         (toUpdate.type == 'places' && toUpdate.score && 
          toUpdate.score != 0 && 
          toUpdate.score != .33 && 
          toUpdate.score != .67 && 
          toUpdate.score != 1) ||
         (toUpdate.score &&
          (toUpdate.score > 1 ||
          toUpdate.score < 0))
        )
      {
         return cb("Bad Score");
      }
      return cb();
  }


};

