/**
 * PieceController
 *
 * @description :: Server-side logic for managing pieces
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
//TODO - integrate upload and thumb from aws alpha test

module.exports = {
	create: function(req, res){
		Piece.create({
			mediaType:req.param('mediaType'),
			title:req.param('title'),
			hours:req.param('hours'),
			minutes:req.param('minutes'),
			seconds:req.param('seconds'),
			width:req.param('width'),
			height:req.param('height'),
			received:req.param('received'),
			converted:req.param('converted'),
			url:req.param('url'),
			urlLogin:req.param('urlLogin'),
			urlPassword:req.param('urlPassword'),
			mediaPath:req.param('mediaPath'),
			convertedPath:req.param('convertedPath'),
			synopsisText:req.param('synopsisText'),
			translationText:req.param('translationText'),
			notes:req.param('notes'),
			smallThumbPath:req.param('smallThumbPath'),
			largeThumbPath:req.param('largeThumbPath')
		},function pieceCreated(err, newPiece){
			if(err){
				console.log("err: " + err);
				return res.negotiate(err);
			}
			return res.json({
				id:newPiece.id
			});
		});
	}
	,
	editview: function(req, res){
		Piece.findOne(req.param('id'), function(err, found){
			if(err) {
				return res.negotiate(err);
			}

			if(!found){
				sails.log.verbose('Session refers to a piece which no longer exists!');
				return res.view('homepage');
			}

			return res.view('pieceUpdate', {
					pieceUpdateId: found.id
				})
		}
	)},
	listview: function(req,res){
		return res.view('pieceList');
	}
};

