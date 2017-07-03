/**
 * ProductController
 *
 * @description :: Server-side logic for managing products
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res){
		Product.create({
			titleInternal:req.param('titleInternal'),
			titleExternal:req.param('titleExternal'),
			description:req.param('description'),
			competition:req.param('competition'),
			competitionType:req.param('competitionType'),
			price:req.param('price'),
			active:req.param('active')
		},function productCreated(err, newProduct){
			if(err){
				console.log("err: " + err);
			
				if(err.invalidAttributes && err.invalidAttributes.titleInternal && err.invalidAttributes.titleInternal[0] && err.invalidAttributes.titleInternal[0].rule === 'unique'){
					return res.nameInUse();
				}
				return res.negotiate(err);
			}
			return res.json({
				id:newProduct.id
			});
		});
	},
	editview: function(req, res){
		Product.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a product which no longer exists!');
				return res.view('homepage');
			}

			return res.view('productUpdate', {
					productUpdateId: found.id,
					productNow: {
						titleInternal:found.titleInternal,
						titleExternal:found.titleExternal,
						description:found.description,
						competition:found.competition,
						competitionType:found.competitionType,
						price:found.price,
						active:found.active
					}
				})
		}
	)},
	listview: function(req,res){
		return res.view('productList');
	}
};

