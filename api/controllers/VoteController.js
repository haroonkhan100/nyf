/**
 * VoteController
 *
 * @description :: Server-side logic for managing votes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Vote.create({
			ballot:req.param('ballot'),
			type:req.param('type'),
			criteria:req.param('criteria'),
			score:req.param('score')
		},function voteCreated(err, newVote){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newVote.id
			});
		});
	},
	editview: function(req, res){
		Vote.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a vote which no longer exists!');
				return res.view('homepage');
			}

			return res.view('voteUpdate', {
					voteUpdateId: found.id,
					voteNow: {
			                        ballot:found.ballot,
			                        type:found.type,
			                        criteria:found.criteria,
			                        score:found.score
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('voteList');
	}
};

