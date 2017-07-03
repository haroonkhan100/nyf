/**
 * TicketController
 *
 * @description :: Server-side logic for managing tickets
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Ticket.create({
                        purchaser:req.param('purchaser'),
                        show:req.param('show'),
                        name:req.param('name'),
                        jobTitle:req.param('jobTitle'),
                        company:req.param('company'),
                        address1:req.param('address1'),
                        address2:req.param('address2'),
                        city:req.param('city'),
                        state:req.param('state'),
                        zip:req.param('zip'),
                        country:req.param('country'),
                        phone:req.param('phone'),
                        phoneExtention:req.param('phoneExtention'),
                        mobile:req.param('mobile'),
                        fax:req.param('fax'),
                        email:req.param('email'),
                        alternateEmail:req.param('alternateEmail'),
                        twitter:req.param('twitter'),
                        paid:req.param('paid'),
                        comp:req.param('comp'),
                        active:req.param('active')

		},function ticketCreated(err, newTicket){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newTicket.id
			});
		});
	},
	editview: function(req, res){
		Ticket.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a ticket which no longer exists!');
				return res.view('homepage');
			}

			return res.view('ticketUpdate', {
					ticketUpdateId: found.id,
					ticketNow: {
                                                purchaser:found.purchaser,
                                                show:found.show,
                                                name:found.name,
                                                jobTitle:found.jobTitle,
                                                company:found.company,
                                                address1:found.address1,
                                                address2:found.address2,
                                                city:found.city,
                                                state:found.state,
                                                zip:found.zip,
                                                country:found.country,
                                                phone:found.phone,
                                                phoneExtention:found.phoneExtention,
                                                mobile:found.mobile,
                                                fax:found.fax,
                                                email:found.email,
                                                alternateEmail:found.alternateEmail,
                                                twitter:found.twitter,
                                                paid:found.paid,
                                                comp:found.comp,
                                                active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('ticketList');
	}
};

