angular.module("dashBoardData").factory("MapData",["$q","$http",function($q,$http){

	function getMapRegions(){
		
		var deferRegionData = $q.defer();

		$http({
			method:"GET",
			url:"./data/salesSegment.json"
		})

		.success(function(data){

			deferRegionData.resolve(data);


		})

		.error(function (msg){

			deferRegionData.reject(msg);

		})

		return deferRegionData.promise;
	}


	function getAvailibility(url){
		var deferAvailibilityData = $q.defer();

		$http({
			method:"GET",
			url:url
		})

		.success(function(data){

			deferAvailibilityData.resolve(data);


		})

		.error(function (msg){

			deferAvailibilityData.reject(msg);

		})

		return deferAvailibilityData.promise;
	}



	return{
		getMapRegions:getMapRegions,
		getAvailibility:getAvailibility
	}




}])