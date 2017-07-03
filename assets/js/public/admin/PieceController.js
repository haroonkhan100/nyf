angular.module('ConsoleModule').controller('PieceController', ['$scope','$http','toastr','PieceAPI','$routeParams', function($scope,$http,toastr,PieceAPI,$routeParams){

    $scope.pieceCreateForm = {};
    
    $scope.pieceDetailsForm = {};

	$scope.submitPieceCreateForm = function(){
	     			$scope.piece = new PieceAPI();
            		$scope.piece.mediaType= $scope.pieceCreateForm.mediaType;
					$scope.piece.title= $scope.pieceCreateForm.title;
					$scope.piece.hours= $scope.pieceCreateForm.hours;
					$scope.piece.minutes= $scope.pieceCreateForm.minutes;
					$scope.piece.seconds= $scope.pieceCreateForm.seconds;
					$scope.piece.width= $scope.pieceCreateForm.width;
					$scope.piece.height= $scope.pieceCreateForm.height;
					$scope.piece.received= !$scope.pieceCreateForm.received ? 0 : $scope.pieceCreateForm.received;
					$scope.piece.converted= !$scope.pieceCreateForm.converted ? 0 : $scope.pieceCreateForm.converted;
					$scope.piece.url= $scope.pieceCreateForm.url;
					$scope.piece.urlLogin= $scope.pieceCreateForm.urlLogin;
					$scope.piece.urlPassword= $scope.pieceCreateForm.urlPassword;
					$scope.piece.mediaPath= $scope.pieceCreateForm.mediaPath;
					$scope.piece.convertedPath= $scope.pieceCreateForm.convertedPath;
					$scope.piece.synopsisText= $scope.pieceCreateForm.synopsisText;
					$scope.piece.translationText= $scope.pieceCreateForm.translationText;
					$scope.piece.notes= $scope.pieceCreateForm.notes;
					$scope.piece.smallThumbPath= $scope.pieceCreateForm.smallThumbPath;
					$scope.piece.largeThumbPath= $scope.pieceCreateForm.largeThumbPath;
					PieceAPI.save($scope.piece,function(sailsResponse){
						console.log(sailsResponse.id);
						console.log(sailsResponse);
						$scope.pieceCreateForm.loading = false;
						window.location = '/admin/console#/piece';
					},function(sailsResponse) {
						console.log(sailsResponse.data.message)
						toastr.error('Error creating new piece.'+sailsResponse.data.message,'Error');
						return;
					});
            	   
	};

		
	$scope.$on('$routeChangeSuccess', function () {
		if($routeParams.theid)
		{
		    $scope.pieceViewer = PieceAPI.get({id:$routeParams.theid}, function() {
			$scope.pieceDetailsForm.mediaType= $scope.pieceViewer.mediaType;
			$scope.pieceDetailsForm.title= $scope.pieceViewer.title;
			$scope.pieceDetailsForm.hours= $scope.pieceViewer.hours;
			$scope.pieceDetailsForm.minutes= $scope.pieceViewer.minutes;
			$scope.pieceDetailsForm.seconds= $scope.pieceViewer.seconds;
			$scope.pieceDetailsForm.width= $scope.pieceViewer.width;
			$scope.pieceDetailsForm.height= $scope.pieceViewer.height;
			$scope.pieceDetailsForm.received= !$scope.pieceViewer.received ? 0 : $scope.pieceViewer.received;
			$scope.pieceDetailsForm.converted= !$scope.pieceViewer.converted ? 0 : $scope.pieceViewer.converted;
			$scope.pieceDetailsForm.url= $scope.pieceViewer.url;
			$scope.pieceDetailsForm.urlLogin= $scope.pieceViewer.urlLogin;
			$scope.pieceDetailsForm.urlPassword= $scope.pieceViewer.urlPassword;
			$scope.pieceDetailsForm.mediaPath= $scope.pieceViewer.mediaPath;
			$scope.pieceDetailsForm.convertedPath= $scope.pieceViewer.convertedPath;
			$scope.pieceDetailsForm.synopsisText= $scope.pieceViewer.synopsisText;
			$scope.pieceDetailsForm.translationText= $scope.pieceViewer.translationText;
			$scope.pieceDetailsForm.notes= $scope.pieceViewer.notes;
			$scope.pieceDetailsForm.smallThumbPath= $scope.pieceViewer.smallThumbPath;
			$scope.pieceDetailsForm.largeThumbPath= $scope.pieceViewer.largeThumbPath;
			$scope.pieceDetailsForm.id = $scope.pieceViewer.id;

		    })
		}

		$scope.theListLoaded = null;
		//$scope.theList = PieceAPI.query(function() {
	 	//	$scope.theListLoaded = $scope.theList;
		//});
	});

		$scope.theList = PieceAPI.query(function() {
	 		$scope.theListLoaded = $scope.theList;
		});

	$scope.submitPieceDetailsUpdateForm = function(){
			$scope.pieceSave = PieceAPI.get({id: $scope.pieceDetailsForm.id}, function() {
				

			$scope.pieceSave.title = $scope.pieceDetailsForm.title;
			$scope.pieceSave.mediaType= $scope.pieceDetailsForm.mediaType;
			$scope.pieceSave.title= $scope.pieceDetailsForm.title;
			$scope.pieceSave.hours= $scope.pieceDetailsForm.hours;
			$scope.pieceSave.minutes= $scope.pieceDetailsForm.minutes;
			$scope.pieceSave.seconds= $scope.pieceDetailsForm.seconds;
			$scope.pieceSave.width= $scope.pieceDetailsForm.width;
			$scope.pieceSave.height= $scope.pieceDetailsForm.height;
			$scope.pieceSave.received= !$scope.pieceDetailsForm.received ? 0 : $scope.pieceDetailsForm.received;
			$scope.pieceSave.converted= !$scope.pieceDetailsForm.converted ? 0 : $scope.pieceDetailsForm.converted;
			$scope.pieceSave.url= $scope.pieceDetailsForm.url;
			$scope.pieceSave.urlLogin= $scope.pieceDetailsForm.urlLogin;
			$scope.pieceSave.urlPassword= $scope.pieceDetailsForm.urlPassword;
			$scope.pieceSave.mediaPath= $scope.pieceDetailsForm.mediaPath;
			$scope.pieceSave.convertedPath= $scope.pieceDetailsForm.convertedPath;
			$scope.pieceSave.synopsisText= $scope.pieceDetailsForm.synopsisText;
			$scope.pieceSave.translationText= $scope.pieceDetailsForm.translationText;
			$scope.pieceSave.notes= $scope.pieceDetailsForm.notes;
			$scope.pieceSave.smallThumbPath= $scope.pieceDetailsForm.smallThumbPath;
			$scope.pieceSave.largeThumbPath= $scope.pieceDetailsForm.largeThumbPath;
		    $scope.pieceSave._id = $scope.pieceDetailsForm.id;

		$scope.theListLoaded = null;

			$scope.pieceSave.$update(function(saved){
				toastr.success("Updated Successfully!", "Success!");
			},function(err){
				console.log(err.data.message);
				toastr.error(err.data.message,'Error');
			});

			})
	}

	$scope.deletePiece = function(){
		$scope.pieceDelete = PieceAPI.get({id: $scope.pieceDetailsForm.id}, function() {
			$scope.pieceDelete._id = $scope.pieceDetailsForm.id;
			$scope.pieceDelete.$delete(function(err){
			window.location.href = '/admin/console#/piece';
				toastr.error("Deleted Successfully!");
				return;
			});

		});
	}


}]);