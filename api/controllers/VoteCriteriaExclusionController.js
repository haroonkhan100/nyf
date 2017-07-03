/**
 * VoteCriteriaExclusionController
 *
 * @description :: Server-side logic for managing VoteCriteriaExclusions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		VoteCriteriaExclusion.create({
			category:req.param('category'),
			type:req.param('type'),
			synch:req.param('synch'),
			stage:req.param('stage'),
			criteria:req.param('criteria'),
			active:req.param('active')
		},function voteCriteriaExclusionCreated(err, newVoteCriteriaExclusion){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newVoteCriteriaExclusion.id
			});
		});
	},
	editview: function(req, res){
		VoteCriteriaExclusion.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a voteCriteriaExclusion which no longer exists!');
				return res.view('homepage');
			}

			return res.view('voteCriteriaExclusionUpdate', {
					voteCriteriaExclusionUpdateId: found.id,
					voteCriteriaExclusionNow: {
			                        category:found.category,
			                        type:found.type,
			                        synch:found.synch,
			                        stage:found.stage,
			                        criteria:found.criteria,
			                        active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('voteCriteriaExclusionList');
	}
};

