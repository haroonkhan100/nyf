/**
 * LineItemController
 *
 * @description :: Server-side logic for managing lineitems
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		LineItem.create({
			cart:req.param('cart'),
			entry:req.param('entry'),
			item:req.param('item'),
			ticket:req.param('ticket'),
			product:req.param('product'),
			discount:req.param('discount'),
			fee:req.param('fee'),
			price:req.param('price'),
			quantity:req.param('quantity')
		},function lineItemCreated(err, newLineItem){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newLineItem.id
			});
		});
	},
	editview: function(req, res){
		LineItem.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a lineItem which no longer exists!');
				return res.view('homepage');
			}

			return res.view('lineItemUpdate', {
					lineItemUpdateId: found.id,
					lineItemNow: {
			                        cart:found.cart,
			                        entry:found.entry,
			                        ticket:found.ticket,
			                        product:found.product,
			                        discount:found.discount,
			                        fee:found.fee,
			                        price:found.price,
			                        quantity:found.quantity
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('lineItemList');
	}
};

