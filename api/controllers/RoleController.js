/**
 * RoleController
 *
 * @description :: Server-side logic for managing roles
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Role.create({
			titleInternal:req.param('titleInternal'),
			titleExternal:req.param('titleExternal'),
			rankNumber:req.param('rankNumber'),
			rankTitle:req.param('rankTitle'),
			active:req.param('active')
		},function roleCreated(err, newRole){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleInternal && err.invalidAttributes.titleInternal[0] && err.invalidAttributes.titleInternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newRole.id
			});
		});
	},
	editview: function(req, res){
		Role.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a role which no longer exists!');
				return res.view('homepage');
			}

			return res.view('roleUpdate', {
					roleUpdateId: found.id,
					roleNow: {
						titleInternal:found.titleInternal,
						titleExternal:found.titleExternal,
						rankNumber:found.rankNumber,
						rankTitle:found.rankTitle,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('roleList');
	}
};

