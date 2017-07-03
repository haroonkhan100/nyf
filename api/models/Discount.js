/**
 * Discount.js
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
          required: true
      },
      competition: {
          model: 'competition'
      },
      code: {
          required: true,
          type: 'string'
      },
      startDate: {
          required: true,
          type: 'datetime'
      },
      endDate: {
          required: true,
          type: 'datetime'
      },
      percentage: {
          type: 'float'
      },
      amount: {
          type: 'float'
      },
      price: {
          model: 'price'
      },
      quantityMin: {
          type: 'integer'
      },
      quantityMax: {
          type: 'integer'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      }
  },
  beforeValidate: function (toUpdate, cb) {
      console.log(toUpdate);
      Discount.find(
                      {and : [
                               {or : [
                                       {startDate: {'>': toUpdate.startDate,'<':toUpdate.endDate}},
                                       {endDate:   {'>': toUpdate.startDate,'<':toUpdate.endDate}}
                                     ]
                               },
                               {or: [{competition: toUpdate.competition},
                                     {competition: null}]
                               },
                               {or: [{price: toUpdate.price},
                                     {price: null}]
                               },
                               {code: toUpdate.code}
                              ]
                       }
                      )
        .exec(function(err, found){
            if(found)
            {
               console.log(found);
               return cb('Existing discount with same code.');
            }
            return cb();
       });
  }


};

