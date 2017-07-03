/**
 * FeeController
 *
 * @description :: Server-side logic for managing fees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Fee.create({
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
		},function feeCreated(err, newFee){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleInternal && err.invalidAttributes.titleInternal[0] && err.invalidAttributes.titleInternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newFee.id
			});
		});
	},
	editview: function(req, res){
		Fee.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a fee which no longer exists!');
				return res.view('homepage');
			}

			return res.view('feeUpdate', {
					feeUpdateId: found.id,
					feeNow: {
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
		return res.view('feeList');
	}
};

