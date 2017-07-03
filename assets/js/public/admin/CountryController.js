angular.module('ConsoleModule').controller('CountryController', ['$scope','$http','toastr','CountryAPI','$routeParams', function($scope,$http,toastr,CountryAPI,$routeParams){

    $scope.countryCreateForm = {};
    
    $scope.countryDetailsForm = {};

	$scope.submitCountryCreateForm = function(){
					$scope.country = new CountryAPI(); 
				    $scope.country.name = $scope.countryCreateForm.name;
				    $scope.country.code = $scope.countryCreateForm.code;
				    $scope.country.currency = $scope.countryCreateForm.currency;
				    $scope.country.active = $scope.countryCreateForm.active;
					
					CountryAPI.save($scope.country,function(sailsResponse){
						console.log(sailsResponse.id);
						console.log(sailsResponse);
						$scope.countryCreateForm.loading = false;
						window.location = '/admin/console#/country';
					},function(sailsResponse) {
						console.log(sailsResponse.data.message)
						toastr.error('Error creating new country.'+sailsResponse.data.message,'Error');
						return;
					});	   
	};

		
	$scope.$on('$routeChangeSuccess', function () {
		if($routeParams.theid)
		{
		    $scope.countryViewer = CountryAPI.get({id:$routeParams.theid}, function() {
		    $scope.countryDetailsForm.name = $scope.countryViewer.name;
		    $scope.countryDetailsForm.code = $scope.countryViewer.code;
		    $scope.countryDetailsForm.currency = $scope.countryViewer.currency;
		    $scope.countryDetailsForm.active = $scope.countryViewer.active;
			$scope.countryDetailsForm.id = $scope.countryViewer.id;

		    })
		}

		$scope.theListLoaded = null;
	});

		$scope.theList = CountryAPI.query(function() {
	 		$scope.theListLoaded = $scope.theList;
		});

	$scope.submitCountryDetailsUpdateForm = function(){
			$scope.countrySave = CountryAPI.get({id: $scope.countryDetailsForm.id}, function() {
			$scope.countrySave.name = $scope.countryDetailsForm.name;
		    $scope.countrySave.code = $scope.countryDetailsForm.code;
		    $scope.countrySave.currency = $scope.countryDetailsForm.currency;
		    $scope.countrySave.active = $scope.countryDetailsForm.active;
		    $scope.countrySave._id = $scope.countryDetailsForm.id;

			$scope.theListLoaded = null;

			$scope.countrySave.$update(function(saved){
				toastr.success("Updated Successfully!", "Success!");
			},function(err){
				console.log(err.data.message);
				toastr.error(err.data.message,'Error');
			});

			})
	}

	$scope.deleteCountry = function(){
		$scope.countryDelete = CountryAPI.get({id: $scope.countryDetailsForm.id}, function() {
			$scope.countryDelete._id = $scope.countryDetailsForm.id;
			$scope.countryDelete.$delete(function(err){
			window.location.href = '/admin/console#/country';
				toastr.error("Deleted Successfully!");
				return;
			});

		});
	}


}]);