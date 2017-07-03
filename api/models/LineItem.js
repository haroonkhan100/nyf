/**
 * LineItem.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      cart: {
          model: 'cart',
          required: true
      },
      entry: {
          model: 'entry'
      },
      item: {
          model: 'item'
      },
      ticket: {
          model: 'ticket'
      },
      product: {
          model: 'product'
      },
      discount: {
          model: 'discount'
      },
      fee: {
          model: 'fee'
      },
      price: {
          model: 'price'
      },
      addOrder: {
          type: 'integer'
      }
  }
//TODO - Validate that one of entry, ticket, product filled in and price exists once populated with anything

};

