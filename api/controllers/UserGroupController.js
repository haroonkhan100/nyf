/**
 * UserGroupController
 *
 * @description :: Server-side logic for managing usergroups
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		UserGroup.create({
			titleInternal:req.param('titleInternal'),
			titleExternal:req.param('titleExternal'),
			address1:req.param('address1'),
			address2:req.param('address2'),
			address3:req.param('address3'),
			address4:req.param('address4'),
			city:req.param('city'),
			state:req.param('state'),
			zip:req.param('zip'),
			country:req.param('country'),
			phoneCountryCode:req.param('phoneCountryCode'),
			phoneNumber:req.param('phoneNumber'),
			faxNumber:req.param('faxNumber'),
			url:req.param('url'),
			designation:req.param('designation'),
			active:req.param('active')
		},function userGroupCreated(err, newUserGroup){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleExternal && err.invalidAttributes.titleExternal[0] && err.invalidAttributes.titleExternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newUserGroup.id
			});
		});
	},
	editview: function(req, res){
		UserGroup.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a userGroup which no longer exists!');
				return res.view('homepage');
			}

			return res.view('userGroupUpdate', {
					userGroupUpdateId: found.id,
					userGroupNow: {
						titleInternal:found.titleInternal,
						titleExternal:found.titleExternal,
						address1:found.address1,
						address2:found.address2,
						address3:found.address3,
						address4:found.address4,
						city:found.city,
						state:found.state,
						zip:found.zip,
						country:found.country,
						phoneCountryCode:found.phoneCountryCode,
						phoneNumber:found.phoneNumber,
						faxNumber:found.faxNumber,
						url:found.url,
						designation:found.designation,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('userGroupList');
	}
};

