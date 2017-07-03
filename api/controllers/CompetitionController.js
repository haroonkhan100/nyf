/**
 * CompetitionController
 *
 * @description :: Server-side logic for managing competitions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Competition.create({
			titleInternal:req.param('titleInternal'),
			titleExternal:req.param('titleExternal'),
			competitionType:req.param('competitionType'),
			filterStartDate:req.param('filterStartDate'),
			filterEndDate:req.param('filterEndDate'),
			state:req.param('state'),
			year:req.param('year'),
			active:req.param('active')
		},function competitionCreated(err, newCompetition){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleInternal && err.invalidAttributes.titleInternal[0] && err.invalidAttributes.titleInternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newCompetition.id
			});
		});
	},
	editview: function(req, res){
		Competition.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a competition which no longer exists!');
				return res.view('homepage');
			}

			return res.view('competitionUpdate', {
					competitionUpdateId: found.id,
					competitionNow: {
						titleInternal:found.titleInternal,
						titleExternal:found.titleExternal,
						competitionId:found.competitionId,
						filterStartDate:found.filterStartDate,
						filterEndDate:found.filterEndDate,
						state:found.state,
						year:found.year,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('competitionList');
	}
};

