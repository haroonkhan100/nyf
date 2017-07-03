/**
 * PriceController
 *
 * @description :: Server-side logic for managing prices
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Price.create({
                        GLID:req.param('GLID'),
                        GLIDCost:req.param('GLIDCost'),
                        price:req.param('price'),
                        description:req.param('description'),
                        brief:req.param('brief'),
                        competition:req.param('competition'),
                        percent:req.param('percent'),
                        rangeQuantity:req.param('rangeQuantity'),
                        rangeQuantityMin:req.param('rangeQuantityMin'),
                        rangeQuantityMax:req.param('rangeQuantityMax'),
                        award:req.param('award'),
                        inventoryCount:req.param('inventoryCount'),
                        usWeight1:req.param('usWeight1'),
                        intlWeight1:req.param('intlWeight1'),
                        dimensions1:req.param('dimensions1'),
                        usWeight2:req.param('usWeight2'),
                        intlWeight2:req.param('intlWeight2'),
                        dimensions2:req.param('dimensions2'),
                        usWeight3:req.param('usWeight3'),
                        dimensions3:req.param('dimensions3'),
                        usWeight4:req.param('usWeight4'),
                        intlWeight4:req.param('intlWeight4'),
                        dimensions4:req.param('dimensions4'),
                        usWeight5:req.param('usWeight5'),
                        intlWeight5:req.param('intlWeight5'),
                        dimensions5:req.param('dimensions5'),
                        usWeight6:req.param('usWeight6'),
                        intlWeight6:req.param('intlWeight6'),
                        dimensions6:req.param('dimensions6'),
                        active:req.param('active')
		},function priceCreated(err, newPrice){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newPrice.id
			});
		});
	},
	editview: function(req, res){
		Price.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a price which no longer exists!');
				return res.view('homepage');
			}

			return res.view('priceUpdate', {
					priceUpdateId: found.id,
					priceNow: {
                                                GLID:found.GLID,
                                                GLIDCost:found.GLIDCost,
                                                price:found.price,
                                                description:found.description,
                                                brief:found.brief,
                                                competition:found.competition,
                                                percent:found.percent,
                                                rangeQuantity:found.rangeQuantity,
                                                rangeQuantityMin:found.rangeQuantityMin,
                                                rangeQuantityMax:found.rangeQuantityMax,
                                                award:found.award,
                                                inventoryCount:found.inventoryCount,
                                                usWeight1:found.usWeight1,
                                                intlWeight1:found.intlWeight1,
                                                dimensions1:found.dimensions1,
                                                usWeight2:found.usWeight2,
                                                intlWeight2:found.intlWeight2,
                                                dimensions2:found.dimensions2,
                                                usWeight3:found.usWeight3,
                                                dimensions3:found.dimensions3,
                                                usWeight4:found.usWeight4,
                                                intlWeight4:found.intlWeight4,
                                                dimensions4:found.dimensions4,
                                                usWeight5:found.usWeight5,
                                                intlWeight5:found.intlWeight5,
                                                dimensions5:found.dimensions5,
                                                usWeight6:found.usWeight6,
                                                intlWeight6:found.intlWeight6,
                                                dimensions6:found.dimensions6,
                                                active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('priceList');
	}
};

