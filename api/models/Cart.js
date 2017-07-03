/**
 * Cart.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
      user: {
          model: 'user',
          required: true
      },
      stage: {
          type: 'string',
          required: true
      },
      total: {
          type: 'float'
      },
      discounts: {
          type: 'float'
      },
      fees: {
          type: 'float'
      },
      shipping: {
          type: 'float'
      },
      ipAddress: {
          type: 'string'
      },
      active: {
      	  type: 'boolean',
      	  required: true      
      },
      lineItems: {
          collection: 'lineItem',
          via: 'cart'
      }
  } ,
  beforeValidate: function (toUpdate, cb) {
                 var total = 0.0;
                 var discount= 0.0;
                 var fee= 0.0;
      //console.log(toUpdate);
      LineItem.find(
                               {cart: toUpdate.id}
                        //,sort: 'addOrder'}
                  ).sort('addOrder').populate('price').populate('discount').populate('fee')
        .exec(function(err, found){
            if(found)
            {
                 var total = 0.0;
                 var discount= 0.0;
                 var fee= 0.0;
                 //console.log(found);
                 //Pass 1 -> add up individual items
                 found.forEach(function(a){
                    //console.log(a.price);
                    if(a.entry){
                        if(a.item){
                        //Apply to specific item (disc/fees)
                        total = a.price.price + total;
                        if(typeof a.discount =='undefined'){
                        } else {
                           if(a.discount.percentage!=null){
                              discount = a.price.price * a.discount.percentage + discount;
                           } else if (a.discount.amount!=null){
                              discount =  a.discount.amount + discount;
                           }
                        }
                        if(typeof a.fee =='undefined'){
                        } else {
                           if(a.fee.percentage!=null){
                              fee = a.price.price * a.fee.percentage + fee;
                           } else if (a.fee.amount!=null){
                              fee =  a.fee.amount + fee;
                           }
                        }
                        //fee = a.price.price + fee;
                        //console.log(a.price);
                        } else {
                           //No item, go to pass 2
                           //NOTE - with deprecation, shouldn't hit this branch
                        }
                    } else {
                           //No entry or item, go to pass 3
                    }
                 });
/* DEPRECATED - Not necessary for business
                 //Pass 2 -> apply entry level disc/fees
                 found.forEach(function(a){
                    //console.log(a.price);
                    if(a.entry){
                        if(a.item){
                           //Has an item, already handled in Pass 1
                        } else {
                            //Apply to specific entry (disc/fees)
                            if(typeof a.discount =='undefined'){
                            } else {
                               if(a.discount.percentage!=null){
                                  discount = (total - discount + fee)*a.discount.percentage + discount;
                               } else if (a.discount.amount!=null){
                                  discount =  a.discount.amount + discount;
                               }
                            }
                            if(typeof a.fee =='undefined'){
                            } else {
                               if(a.fee.percentage!=null){
                                  fee = (total - discount + fee)*a.fee.percentage + fee;
                               } else if (a.fee.amount!=null){
                                  fee =  a.fee.amount + fee;
                               }
                            }
                        }
                    } else {
                           //No entry or item, go to pass 3
                    }

                 }); 
*/
                 //Pass 3 -> apply cart level disc/fees
                 found.forEach(function(a){
                    //console.log(a.price);
                    if(a.entry){
                        if(a.item){
                           //Has an entry/item, already handled in Pass 1
                        } else {
                           //Has an entry, already handled in Pass 2
                        }
                    } else {
                            tempPrice = (total - discount + fee) > 0 ? (total - discount + fee) : 0;
                        //Apply to order (should have discount or fee)
                            if(typeof a.discount =='undefined'){
                            } else {
                               if(a.discount.percentage!=null){
                                  discount = tempPrice*a.discount.percentage + discount;
                               } else if (a.discount.amount!=null){
                                  discount =  a.discount.amount + discount;
                               }
                            }
                            if(typeof a.fee =='undefined'){
                            } else {
                               if(a.fee.percentage!=null){
                                  fee = tempPrice*a.fee.percentage + fee;
                               } else if (a.fee.amount!=null){
                                  fee =  a.fee.amount + fee;
                               }
                            }
                    }

                 }); 
           };
           console.log("Total:" + total);
           console.log("Disc:" + discount);
           console.log("Fee:" + fee);
           return cb();
  })


}
};

