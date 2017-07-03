/**
 * BallotController
 *
 * @description :: Server-side logic for managing ballots
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Ballot.create({
			session:req.param('session'),
			user:req.param('user'),
			abstain:req.param('abstain'),
			scam:req.param('scam'),
			comment:req.param('comment'),
			finalized:req.param('finalized')
		},function ballotCreated(err, newBallot){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newBallot.id
			});
		});
	},
	editview: function(req, res){
		Ballot.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a ballot which no longer exists!');
				return res.view('homepage');
			}

			return res.view('ballotUpdate', {
					ballotUpdateId: found.id,
					ballotNow: {
						session:found.session,
						user:found.user,
						abstain:found.abstain,
						scam:found.scam,
						comment:found.comment,
						finalized:found.finalized
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('ballotList');
	}
};

