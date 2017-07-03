/**
 * CreditController
 *
 * @description :: Server-side logic for managing credits
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Credit.create({
			talentText:req.param('talentText'),
			talentEmail:req.param('talentEmail'),
			winner:req.param('winner'),
			order:req.param('order'),
			active:req.param('active')
		},function creditCreated(err, newCredit){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newCredit.id
			});
		});
	},
	editview: function(req, res){
		Credit.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a credit which no longer exists!');
				return res.view('homepage');
			}

			return res.view('creditUpdate', {
					creditUpdateId: found.id,
					creditNow: {
						talentText:found.talentText,
						talentEmail:found.talentEmail,
						winner:found.winner,
						order:found.order,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('creditList');
	}
};

