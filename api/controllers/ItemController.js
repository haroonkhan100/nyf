/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Item.create({
                        entry:req.param('entry'),
                        price:req.param('price'),
                        title:req.param('title'),
                        advertiser:req.param('advertiser'),
                        company:req.param('company'),
                        brand:req.param('brand'),
                        brandUrl:req.param('brandUrl'),
                        category:req.param('category'),
                        productionCompany:req.param('productionCompany'),
                        productionCPName:req.param('productionCPName'),
                        productionCPEmail:req.param('productionCPEmail'),
                        productionDate:req.param('productionDate'),
                        targetAudience:req.param('targetAudience'),
                        seriesQuantity:req.param('seriesQuantity'),
                        notes:req.param('notes'),
                        creditsChecked:req.param('creditsChecked'),
                        sponsor:req.param('sponsor'),
                        GLID:req.param('GLID')
		},function itemCreated(err, newItem){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleExternal && err.invalidAttributes.titleExternal[0] && err.invalidAttributes.titleExternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newItem.id
			});
		});
	},
	editview: function(req, res){
		Item.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a item which no longer exists!');
				return res.view('homepage');
			}

			return res.view('itemUpdate', {
					itemUpdateId: found.id,
					itemNow: {
                                                entry:found.entry,
                                                price:found.price,
                                                title:found.title,
                                                advertiser:found.advertiser,
                                                company:found.company,
                                                brand:found.brand,
                                                brandUrl:found.brandUrl,
                                                category:found.category,
                                                productionCompany:found.productionCompany,
                                                productionCPName:found.productionCPName,
                                                productionCPEmail:found.productionCPEmail,
                                                productionDate:found.productionDate,
                                                targetAudience:found.targetAudience,
                                                seriesQuantity:found.seriesQuantity,
                                                notes:found.notes,
                                                creditsChecked:found.creditsChecked,
                                                sponsor:found.sponsor,
                                                GLID:found.GLID
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('itemList');
	}
};

