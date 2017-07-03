/**
 * CompetitionTypeController
 *
 * @description :: Server-side logic for managing competitiontypes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		CompetitionType.create({
			titleInternal:req.param('titleInternal'),
			titleExternal:req.param('titleExternal'),
			sector:req.param('sector'),
			active:req.param('active')
		},function CompetitionTypeCreated(err, newCompetitionType){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleInternal && err.invalidAttributes.titleInternal[0] && err.invalidAttributes.titleInternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newCompetitionType.id
			});
		});
	},
	editview: function(req, res){
		CompetitionType.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a CompetitionType which no longer exists!');
				return res.view('homepage');
			}

			return res.view('competitionTypeUpdate', {
					competitionTypeUpdateId: found.id,
					competitionTypeNow: {
						titleInternal:found.titleInternal,
						titleExternal:found.titleExternal,
						sector:found.sector,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('competitionTypeList');
	}
};

