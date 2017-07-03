angular.module('ConsoleModule').controller('UserGroupController', ['$scope','$http','toastr','UserGroupAPI','CountryAPI','$routeParams', function($scope,$http,toastr,UserGroupAPI,CountryAPI,$routeParams){

    $scope.userGroupCreateForm = {};
    
    $scope.userGroupDetailsForm = {};
    //$scope.theListLoaded = {};

	$scope.submituserGroupCreateForm = function(){
		$scope.userGroup = new UserGroupAPI();
		$scope.userGroup.mediaType= $scope.userGroupCreateForm.mediaType;
 		
 		$scope.userGroup.titleInternal= $scope.userGroupCreateForm.titleInternal;
		$scope.userGroup.titleExternal= $scope.userGroupCreateForm.titleExternal;
		$scope.userGroup.address1= $scope.userGroupCreateForm.address1;
		$scope.userGroup.address2= $scope.userGroupCreateForm.address2;
		$scope.userGroup.address3= $scope.userGroupCreateForm.address3;
		$scope.userGroup.address4= $scope.userGroupCreateForm.address4;
		$scope.userGroup.city= $scope.userGroupCreateForm.city;
		$scope.userGroup.state= $scope.userGroupCreateForm.state;
		$scope.userGroup.zip= $scope.userGroupCreateForm.zip;
		$scope.userGroup.country= $scope.userGroupCreateForm.country;
		$scope.userGroup.phoneCountryCode= $scope.userGroupCreateForm.phoneCountryCode;
		$scope.userGroup.phoneNumber= $scope.userGroupCreateForm.phoneNumber;
		$scope.userGroup.faxNumber= $scope.userGroupCreateForm.faxNumber;
		$scope.userGroup.url= $scope.userGroupCreateForm.url;
		$scope.userGroup.designation= $scope.userGroupCreateForm.designation;
		$scope.userGroup.active= $scope.userGroupCreateForm.active;

		UserGroupAPI.save($scope.userGroup,function(sailsResponse){
			console.log(sailsResponse.id);
			console.log(sailsResponse);
			$scope.userGroupCreateForm.loading = false;
			window.location = '/admin/console#/usergroup';
		},function(sailsResponse) {
			console.log(sailsResponse.data.message)
			toastr.error('Error creating new User Group.'+sailsResponse.data.message,'Error');
			return;
		});
            	   
	};

		
	$scope.$on('$routeChangeSuccess', function () {
		if($routeParams.theid)
		{
		    $scope.userGroupViewer = UserGroupAPI.get({id:$routeParams.theid}, function() {
			$scope.userGroupDetailsForm.mediaType= $scope.userGroupViewer.mediaType;
			$scope.userGroupDetailsForm.title= $scope.userGroupViewer.title;
	 		$scope.userGroupDetailsForm.titleInternal= $scope.userGroupViewer.titleInternal;
			$scope.userGroupDetailsForm.titleExternal= $scope.userGroupViewer.titleExternal;
			$scope.userGroupDetailsForm.address1= $scope.userGroupViewer.address1;
			$scope.userGroupDetailsForm.address2= $scope.userGroupViewer.address2;
			$scope.userGroupDetailsForm.address3= $scope.userGroupViewer.address3;
			$scope.userGroupDetailsForm.address4= $scope.userGroupViewer.address4;
			$scope.userGroupDetailsForm.city= $scope.userGroupViewer.city;
			$scope.userGroupDetailsForm.state= $scope.userGroupViewer.state;
			$scope.userGroupDetailsForm.zip= $scope.userGroupViewer.zip;
			CountryAPI.query(function(result){
				$scope.userGroupDetailsForm.CountryList = result;
				if($scope.userGroupViewer.country){
					var index = result.map(function (country) { return country.id; }).indexOf($scope.userGroupViewer.country.id);;
					$scope.userGroupDetailsForm.country = result[index];
				}
				
			});
			$scope.userGroupDetailsForm.phoneCountryCode= $scope.userGroupViewer.phoneCountryCode;
			$scope.userGroupDetailsForm.phoneNumber= $scope.userGroupViewer.phoneNumber;
			$scope.userGroupDetailsForm.faxNumber= $scope.userGroupViewer.faxNumber;
			$scope.userGroupDetailsForm.url= $scope.userGroupViewer.url;
			$scope.userGroupDetailsForm.designation= $scope.userGroupViewer.designation;
			$scope.userGroupDetailsForm.active= $scope.userGroupViewer.active;
			$scope.userGroupDetailsForm.id = $scope.userGroupViewer.id;

		    })
		}

		$scope.theListLoaded = null;
		//$scope.theList = UserGroupAPI.query(function() {
	 	//	$scope.theListLoaded = $scope.theList;
		//});
	});

		$scope.theList = UserGroupAPI.query(function() {
	 		$scope.theListLoaded = $scope.theList;
		});

	$scope.submitUserGroupDetailsUpdateForm = function(){
			$scope.userGroupSave = UserGroupAPI.get({id: $scope.userGroupDetailsForm.id}, function() {
				$scope.userGroupSave.titleInternal = $scope.userGroupDetailsForm.titleInternal;
				$scope.userGroupSave.titleExternal = $scope.userGroupDetailsForm.titleExternal;
				$scope.userGroupSave.address1 = $scope.userGroupDetailsForm.address1;
				$scope.userGroupSave.address2 = $scope.userGroupDetailsForm.address2;
				$scope.userGroupSave.address3 = $scope.userGroupDetailsForm.address3;
				$scope.userGroupSave.address4 = $scope.userGroupDetailsForm.address4;
				$scope.userGroupSave.city = $scope.userGroupDetailsForm.city;
				$scope.userGroupSave.state = $scope.userGroupDetailsForm.state;
				$scope.userGroupSave.zip = $scope.userGroupDetailsForm.zip;
				$scope.userGroupSave.country = $scope.userGroupDetailsForm.country;
				$scope.userGroupSave.phoneCountryCode = $scope.userGroupDetailsForm.phoneCountryCode;
				$scope.userGroupSave.phoneNumber = $scope.userGroupDetailsForm.phoneNumber;
				$scope.userGroupSave.faxNumber = $scope.userGroupDetailsForm.faxNumber;
				$scope.userGroupSave.url = $scope.userGroupDetailsForm.url;
				$scope.userGroupSave.designation = $scope.userGroupDetailsForm.designation;
				$scope.userGroupSave.active = $scope.userGroupDetailsForm.active;
		    	$scope.userGroupSave._id = $scope.userGroupDetailsForm.id;

			    $scope.userGroupSave._id = $scope.userGroupDetailsForm.id;

				$scope.theListLoaded = null;

				$scope.userGroupSave.$update(function(saved){
					toastr.success("Updated Successfully!", "Success!");
				},function(err){
					console.log(err.data.message);
					toastr.error(err.data.message,'Error');
				});

			})
	}

	$scope.deleteUserGroup = function(){
		$scope.userGroupDelete = userGroupAPI.get({id: $scope.userGroupDetailsForm.id}, function() {
			$scope.userGroupDelete._id = $scope.userGroupDetailsForm.id;
			$scope.userGroupDelete.$delete(function(err){
			window.location.href = '/admin/console#/usergroup';
				toastr.error("Deleted Successfully!");
				return;
			});

		});
	}


}]);