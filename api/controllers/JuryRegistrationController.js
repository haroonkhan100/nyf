/**
 * JuryRegistrationController
 *
 * @description :: Server-side logic for managing jury registrations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		JuryRegistration.create({
                        competition:req.param('competition'),
                        user:req.param('user'),
                        name:req.param('name'),
                        email:req.param('email'),
                        twitterHandleMain:req.param('twitterHandleMain'),
                        mobilNumber:req.param('mobilNumber'),
                        alternativeNumber:req.param('alternativeNumber'),
                        assistantName:req.param('assistantName'),
                        assistantEmailAddress:req.param('assistantEmailAddress'),
                        assistantPhoneNumber:req.param('assistantPhoneNumber'),
                        twitterHandle:req.param('twitterHandle'),
                        arrivalAirlineName:req.param('arrivalAirlineName'),
                        arrivalDate:req.param('arrivalDate'),
                        arrivalAirport:req.param('arrivalAirport'),
                        arrivalFlightNumber:req.param('arrivalFlightNumber'),
                        arrivalNotApplicable:req.param('arrivalNotApplicable'),
                        arrivalNeedLimousine:req.param('arrivalNeedLimousine'),
                        someoneTravelingWithYou:req.param('someoneTravelingWithYou'),
                        attendingDinner:req.param('attendingDinner'),
                        departureCity:req.param('departureCity'),
                        departureCountry:req.param('departureCountry'),
                        departureDate:req.param('departureDate'),
                        departureAirport:req.param('departureAirport'),
                        iLiveLocally:req.param('iLiveLocally'),
                        departureNeedLimousine:req.param('departureNeedLimousine'),
                        departureFlightNumber:req.param('departureFlightNumber'),
                        departureNotApplicable:req.param('departureNotApplicable'),
                        dietaryRestrictions:req.param('dietaryRestrictions'),
                        publicRelationsName:req.param('publicRelationsName'),
                        publicRelationsPhone:req.param('publicRelationsPhone'),
                        active:req.param('active')
		},function juryRegistrationCreated(err, newJuryRegistration){
			if(err){
				console.log("err: " + err);
			
				return res.negotiate(err);
			}
			return res.json({
				id:newJuryRegistration.id
			});
		});
	},
	editview: function(req, res){
		JuryRegistration.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a juryRegistration which no longer exists!');
				return res.view('homepage');
			}

			return res.view('juryRegistrationUpdate', {
					juryRegistrationUpdateId: found.id,
					juryRegistrationNow: {
                                                competition:found.competition,
                                                user:found.user,
                                                name:found.name,
                                                email:found.email,
                                                twitterHandleMain:found.twitterHandleMain,
                                                mobilNumber:found.mobilNumber,
                                                alternativeNumber:found.alternativeNumber,
                                                assistantName:found.assistantName,
                                                assistantEmailAddress:found.assistantEmailAddress,
                                                assistantPhoneNumber:found.assistantPhoneNumber,
                                                twitterHandle:found.twitterHandle,
                                                arrivalAirlineName:found.arrivalAirlineName,
                                                arrivalDate:found.arrivalDate,
                                                arrivalAirport:found.arrivalAirport,
                                                arrivalFlightNumber:found.arrivalFlightNumber,
                                                arrivalNotApplicable:found.arrivalNotApplicable,
                                                arrivalNeedLimousine:found.arrivalNeedLimousine,
                                                someoneTravelingWithYou:found.someoneTravelingWithYou,
                                                attendingDinner:found.attendingDinner,
                                                departureCity:found.departureCity,
                                                departureCountry:found.departureCountry,
                                                departureDate:found.departureDate,
                                                departureAirport:found.departureAirport,
                                                iLiveLocally:found.iLiveLocally,
                                                departureNeedLimousine:found.departureNeedLimousine,
                                                departureFlightNumber:found.departureFlightNumber,
                                                departureNotApplicable:found.departureNotApplicable,
                                                dietaryRestrictions:found.dietaryRestrictions,
                                                publicRelationsName:found.publicRelationsName,
                                                publicRelationsPhone:found.publicRelationsPhone,
                                                active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('juryRegistrationList');
	}
};

