/**
 * CountryController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Country.create({
			name:req.param('name'),
			code:req.param('code'),
			currency:req.param('currency'),
			active:req.param('active')
		},function countryCreated(err, newCountry){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.name && err.invalidAttributes.name[0] && err.invalidAttributes.name[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newCountry.id
			});
		});
	},
	editview: function(req, res){
		Country.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a country which no longer exists!');
				return res.view('homepage');
			}

			return res.view('countryUpdate', {
					countryUpdateId: found.id,
					countryNow: {
						name: found.name,
						id: found.id,
						code: found.code,
						currency: found.currency,
						active: found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('countryList');
	}
};

