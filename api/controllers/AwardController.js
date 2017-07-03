/**
 * AwardController
 *
 * @description :: Server-side logic for managing awards
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Award.create({
			name:req.param('name'),
			level:req.param('level'),
			competitionType:req.param('competitionType'),
			active:req.param('active')
		},function awardCreated(err, newAward){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newAward.id
			});
		});
	},
	editview: function(req, res){
		Award.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a award which no longer exists!');
				return res.view('homepage');
			}

			return res.view('awardUpdate', {
					awardUpdateId: found.id,
					awardNow: {
						name:found.name,
						level:found.level,
						competitionType:found.competitionType,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('awardList');
	}
};

