/**
 * CartController
 *
 * @description :: Server-side logic for managing carts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Cart.create({
			user:req.param('user'),
			stage:req.param('stage'),
			total:req.param('total'),
			discounts:req.param('discounts'),
			shipping:req.param('shipping'),
			taxes:req.param('taxes'),
			ipAddress:req.param('ipAddress'),
			active:req.param('active')
		},function cartCreated(err, newCart){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newCart.id
			});
		});
	},
	editview: function(req, res){
		Cart.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a cart which no longer exists!');
				return res.view('homepage');
			}

			return res.view('cartUpdate', {
					cartUpdateId: found.id,
					cartNow: {
						user:found.user,
						stage:found.stage,
						total:found.total,
						discounts:found.discounts,
						shipping:found.shipping,
						taxes:found.taxes,
						ipAddress:found.ipAddress,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('cartList');
	}
};

