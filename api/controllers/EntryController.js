/**
 * EntryController
 *
 * @description :: Server-side logic for managing entrys
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Entry.create({
                        lineItem:req.param('lineItem'),
                        entryType:req.param('entryType'),
                        stage:req.param('stage'),
                        competition:req.param('competition'),
                        user:req.param('user'),
                        company:req.param('company'),
                        shipAttention:req.param('shipAttention'),
                        shipDepartment:req.param('shipDepartment'),
                        shipAddress1:req.param('shipAddress1'),
                        shipAddress2:req.param('shipAddress2'),
                        shipCity:req.param('shipCity'),
                        shipStage:req.param('shipStage'),
                        shipZip:req.param('shipZip'),
                        shipCountry:req.param('shipCountry'),
                        orderTotal:req.param('orderTotal'),
                        amountReceived:req.param('amountReceived'),
                        financeStage:req.param('financeStage'),
                        financeStageDate:req.param('financeStageDate'),
                        notes:req.param('notes'),
                        deleted:req.param('deleted'),
                        emailCount:req.param('emailCount'),
                        emailNotes:req.param('emailNotes'),
                        emailDate:req.param('emailDate'),
                        active:req.param('active')
		},function entryCreated(err, newEntry){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newEntry.id
			});
		});
	},
	editview: function(req, res){
		Entry.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a entry which no longer exists!');
				return res.view('homepage');
			}

			return res.view('entryUpdate', {
					entryUpdateId: found.id,
					entryNow: {
                                                lineItem:found.lineItem,
                                                entryType:found.entryType,
                                                stage:found.stage,
                                                competition:found.competition,
                                                user:found.user,
                                                company:found.company,
                                                shipAttention:found.shipAttention,
                                                shipDepartment:found.shipDepartment,
                                                shipAddress1:found.shipAddress1,
                                                shipAddress2:found.shipAddress2,
                                                shipCity:found.shipCity,
                                                shipStage:found.shipStage,
                                                shipZip:found.shipZip,
                                                shipCountry:found.shipCountry,
                                                orderTotal:found.orderTotal,
                                                amountReceived:found.amountReceived,
                                                financeStage:found.financeStage,
                                                financeStageDate:found.financeStageDate,
                                                notes:found.notes,
                                                deleted:found.deleted,
                                                emailCount:found.emailCount,
                                                emailNotes:found.emailNotes,
                                                emailDate:found.emailDate,
                                                active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('entryList');
	}
};

