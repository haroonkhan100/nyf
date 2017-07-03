/**
 * Ballot.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      session: {
          model: 'session',
          required: true
      },
      user: {
          model: 'user',
          required: true
      },
      abstain: {
          type: 'boolean'
      },
      scam: {
          type: 'boolean'
      },
      comment: {
          type: 'string'
      },
      finalized: {
          type: 'boolean'
      }
  }

};

