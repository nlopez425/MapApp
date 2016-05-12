angular.module("dashBoardData").factory("TableData",["$q","$http",function($q,$http){


	function getRegionsTableData(){
		var deferRegionData = $q.defer();

		$http({
			method:"GET",
			url:"./data/fakeRegionData.json"
		})

		.success(function(data){

			deferRegionData.resolve(data);


		})

		.error(function (msg){

			deferRegionData.reject(msg);

		})

		return deferRegionData.promise;
	}


	function getAmericasData(){
		var deferRegionData = $q.defer();

		$http({
			method:"GET",
			url:"./data/fakeAmericasData.json"
		})

		.success(function(data){

			deferRegionData.resolve(data);


		})

		.error(function (msg){

			deferRegionData.reject(msg);

		})

		return deferRegionData.promise;
	}




	return{
		getRegionsTableData:getRegionsTableData,
		getAmericasData:getAmericasData
	};


}]);