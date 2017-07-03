/**
 * DiscountController
 *
 * @description :: Server-side logic for managing discounts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Discount.create({
                        titleInternal:req.param('titleInternal'),
                        titleExternal:req.param('titleExternal'),
                        competition:req.param('competition'),
                        code:req.param('code'),
                        startDate:req.param('startDate'),
                        endDate:req.param('endDate'),
                        percentage:req.param('percentage'),
                        amount:req.param('amount'),
                        price:req.param('price'),
                        quantityMin:req.param('quantityMin'),
                        quantityMax:req.param('quantityMax'),
                        active:req.param('active')
		},function discountCreated(err, newDiscount){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleInternal && err.invalidAttributes.titleInternal[0] && err.invalidAttributes.titleInternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newDiscount.id
			});
		});
	},
	editview: function(req, res){
		Discount.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a discount which no longer exists!');
				return res.view('homepage');
			}

			return res.view('discountUpdate', {
					discountUpdateId: found.id,
					discountNow: {
                                                titleInternal:found.titleInternal,
                                                titleExternal:found.titleExternal,
                                                competition:found.competition,
                                                code:found.code,
                                                startDate:found.startDate,
                                                endDate:found.endDate,
                                                percentage:found.percentage,
                                                amount:found.amount,
                                                price:found.price,
                                                quantityMin:found.quantityMin,
                                                quantityMax:found.quantityMax,
                                                active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('discountList');
	}
};

