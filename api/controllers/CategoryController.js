/**
 * CategoryController
 *
 * @description :: Server-side logic for managing categories
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Category.create({
                        titleInternal:req.param('titleInternal'),
                        titleExternal:req.param('titleExternal'),
                        categoryGroup:req.param('categoryGroup'),
                        competitionType:req.param('competitionType'),
                        new:req.param('new'),
                        singlePrice:req.param('singlePrice'),
                        campaignPrice:req.param('campaignPrice'),
                        mixedPrice:req.param('mixedPrice'),
                        allowSingle:req.param('allowSingle'),
                        allowCampaign:req.param('allowCampaign'),
                        allowMixed:req.param('allowMixed'),
                        engraving:req.param('engraving'),
                        order:req.param('order'),
                        active:req.param('active')
		},function categoryCreated(err, newCategory){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newCategory.id
			});
		});
	},
	editview: function(req, res){
		Category.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a category which no longer exists!');
				return res.view('homepage');
			}

			return res.view('categoryUpdate', {
					categoryUpdateId: found.id,
					categoryNow: {
                                                titleInternal:found.titleInternal,
                                                titleExternal:found.titleExternal,
                                                categoryGroup:found.categoryGroup,
                                                competitionType:found.competitionType,
                                                new:found.new,
                                                singlePrice:found.singlePrice,
                                                campaignPrice:found.campaignPrice,
                                                mixedPrice:found.mixedPrice,
                                                allowSingle:found.allowSingle,
                                                allowCampaign:found.allowCampaign,
                                                allowMixed:found.allowMixed,
                                                engraving:found.engraving,
                                                order:found.order,
                                                active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('categoryList');
	}
};

