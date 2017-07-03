/**
 * ShowController
 *
 * @description :: Server-side logic for managing shows
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Show.create({
			titleInternal:req.param('titleInternal'),
			titleExternal:req.param('titleExternal'),
			competition:req.param('competition'),
			startDate:req.param('startDate'),
			endDate:req.param('endDate'),
			openSales:req.param('openSales'),
			closeSales:req.param('closeSales'),
			longDescription:req.param('longDescription'),
			imageUrl:req.param('imageUrl'),
			active:req.param('active')
		},function showCreated(err, newShow){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleInternal && err.invalidAttributes.titleInternal[0] && err.invalidAttributes.titleInternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newShow.id
			});
		});
	},
	editview: function(req, res){
		Show.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a show which no longer exists!');
				return res.view('homepage');
			}

			return res.view('showUpdate', {
					showUpdateId: found.id,
					showNow: {
						titleInternal:found.titleInternal,
						titleExternal:found.titleExternal,
						competition:found.competition,
						startDate:found.startDate,
						endDate:found.endDate,
						openSales:found.openSales,
						closeSales:found.closeSales,
						longDescription:found.longDescription,
						imageUrl:found.imageUrl,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('showList');
	}
};

