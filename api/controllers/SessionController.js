/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Session.create({
                        titleInternal:req.param('titleInternal'),
                        titleExternal:req.param('titleExternal'),
                        description:req.param('description'),
                        state:req.param('state'),
                        type:req.param('type'),
                        synch:req.param('synch'),
                        stage:req.param('stage'),
                        competition:req.param('competition'),
                        currentOrderId:req.param('currentOrderId'),
                        nextSession:req.param('nextSession'),
                        reRunSession:req.param('reRunSession'),
                        judgingsPerItem:req.param('judgingsPerItem'),
                        itemsPerJudge:req.param('itemsPerJudge'),
                        active:req.param('active')
		},function sessionCreated(err, newSession){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleInternal && err.invalidAttributes.titleInternal[0] && err.invalidAttributes.titleInternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newSession.id
			});
		});
	},
	editview: function(req, res){
		Session.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a session which no longer exists!');
				return res.view('homepage');
			}

			return res.view('sessionUpdate', {
					sessionUpdateId: found.id,
					sessionNow: {
                                                titleInternal:found.titleInternal,
                                                titleExternal:found.titleExternal,
                                                description:found.description,
                                                state:found.state,
                                                type:found.type,
                                                synch:found.synch,
                                                stage:found.stage,
                                                competition:found.competition,
                                                currentOrderId:found.currentOrderId,
                                                nextSession:found.nextSession,
                                                reRunSession:found.reRunSession,
                                                judgingsPerItem:found.judgingsPerItem,
                                                itemsPerJudge:found.itemsPerJudge,
                                                active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('sessionList');
	}
};

