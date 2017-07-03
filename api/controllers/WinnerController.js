/**
 * WinnerController
 *
 * @description :: Server-side logic for managing winners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Winner.create({
                        item:req.param('item'),
                        award:req.param('award'),
                        notes:req.param('notes'),
//                        purchaseOrder:req.param('purchaseOrder'),
                        shipDate:req.param('shipDate'),
                        shipMethod:req.param('shipMethod'),
                        trackingNumber:req.param('trackingNumber'),
                        clientApproved:req.param('clientApproved'),
                        price:req.param('price'),
                        GLID:req.param('GLID'),
                        active:req.param('active')
		},function winnerCreated(err, newWinner){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newWinner.id
			});
		});
	},
	editview: function(req, res){
		Winner.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a winner which no longer exists!');
				return res.view('homepage');
			}

			return res.view('winnerUpdate', {
					winnerUpdateId: found.id,
					winnerNow: {
                                                item:found.item,
                                                award:found.award,
                                                notes:found.notes,
                                                purchaseOrder:found.purchaseOrder,
                                                shipDate:found.shipDate,
                                                shipMethod:found.shipMethod,
                                                trackingNumber:found.trackingNumber,
                                                clientApproved:found.clientApproved,
                                                price:found.price,
                                                GLID:found.GLID,
                                                active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('winnerList');
	}
};

