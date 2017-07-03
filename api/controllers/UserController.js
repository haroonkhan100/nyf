/**
 * UserController
 *
 * @description :: Server-side logic for managing user
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		User.create({
                        email:req.param('email'),
                        password:req.param('password'),
                        first:req.param('first'),
                        last:req.param('last'),
                        address1:req.param('address1'),
                        address2:req.param('address2'),
                        address3:req.param('address3'),
                        address4:req.param('address4'),
                        city:req.param('city'),
                        state:req.param('state'),
                        zip:req.param('zip'),
                        phoneCountryCode:req.param('phoneCountryCode'),
                        phoneNumber:req.param('phoneNumber'),
                        faxNumber:req.param('faxNumber'),
                        url:req.param('url'),
                        birthYear:req.param('birthYear'),
                        role:req.param('role'),
                        jobTitle:req.param('jobTitle'),
                        twitter:req.param('twitter'),
                        companyID:req.param('companyID'),
                        alternateEmail:req.param('alternateEmail'),
                        areaCode1:req.param('areaCode1'),
                        areaCode2:req.param('areaCode2'),
                        countryID:req.param('countryID'),
                        active:req.param('active'),
                        doNotEmail:req.param('doNotEmail'),
                        doNotCall:req.param('doNotCall'),
                        doNotSnailMail:req.param('doNotSnailMail'),
                        addressClean:req.param('addressClean'),
                        emailClean:req.param('emailClean')
		},function userCreated(err, newUser){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.email && err.invalidAttributes.email[0] && err.invalidAttributes.email[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newUser.id
			});
		});
	},
	editview: function(req, res){
		User.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a user which no longer exists!');
				return res.view('homepage');
			}

			return res.view('userUpdate', {
					userUpdateId: found.id,
					userNow: {
                                                email:found.email,
                                                password:found.password,
                                                first:found.first,
                                                last:found.last,
                                                address1:found.address1,
                                                address2:found.address2,
                                                address3:found.address3,
                                                address4:found.address4,
                                                city:found.city,
                                                state:found.state,
                                                zip:found.zip,
                                                phoneCountryCode:found.phoneCountryCode,
                                                phoneNumber:found.phoneNumber,
                                                faxNumber:found.faxNumber,
                                                url:found.url,
                                                birthYear:found.birthYear,
                                                role:found.role,
                                                jobTitle:found.jobTitle,
                                                twitter:found.twitter,
                                                companyID:found.companyID,
                                                alternateEmail:found.alternateEmail,
                                                areaCode1:found.areaCode1,
                                                areaCode2:found.areaCode2,
                                                countryID:found.countryID,
                                                active:found.active,
                                                doNotEmail:found.doNotEmail,
                                                doNotCall:found.doNotCall,
                                                doNotSnailMail:found.doNotSnailMail,
                                                addressClean:found.addressClean,
                                                emailClean:found.emailClean
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('userList');
	}
};

