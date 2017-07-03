/**
 * CategoryGroupController
 *
 * @description :: Server-side logic for managing category groups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		CategoryGroup.create({
			titleInternal:req.param('titleInternal'),
			titleExternal:req.param('titleExternal'),
			order:req.param('order'),
			competitionType:req.param('competitionType'),
			class:req.param('class'),
			active:req.param('active')
		},function categoryGroupCreated(err, newCategoryGroup){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newCategoryGroup.id
			});
		});
	},
	editview: function(req, res){
		CategoryGroup.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a categoryGroup which no longer exists!');
				return res.view('homepage');
			}

			return res.view('categoryGroupUpdate', {
					categoryGroupUpdateId: found.id,
					categoryGroupNow: {
						titleInternal:found.titleInternal,
						titleExternal:found.titleExternal,
						order:found.order,
						competitionType:found.competitionType,
						class:found.class,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('categoryGroupList');
	}
};

