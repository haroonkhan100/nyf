/**
 * JournalController
 *
 * @description :: Server-side logic for managing journals
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Journal.create({
			type:req.param('type'),
			glMonth:req.param('glMonth'),
			sent:req.param('sent'),
			exported:req.param('exported'),
			discountAmount:req.param('discountAmount'),
			debitAmount:req.param('debitAmount'),
			unidentifiedAmount:req.param('unidentifiedAmount'),
			deleted:req.param('deleted')
		},function journalCreated(err, newJournal){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newJournal.id
			});
		});
	},
	editview: function(req, res){
		Journal.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a journal which no longer exists!');
				return res.view('homepage');
			}

			return res.view('journalUpdate', {
					journalUpdateId: found.id,
					journalNow: {
						type:found.type,
						glMonth:found.glMonth,
						sent:found.sent,
						exported:found.exported,
						disountAmount:found.disountAmount,
						debitAmount:found.debitAmount,
						unidentifiedAmount:found.unidentifiedAmount,
						deleted:found.deleted
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('journalList');
	}
};

