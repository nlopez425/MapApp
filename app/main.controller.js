angular.module("SalesDashboardApp").controller("MainCtrl",function($rootScope,$scope,MapData,TableData){

	var mapDataPromise;
	var mapRegionPromise;
	var tableDataPromise;

	//initial var states
	$scope.mapData= []
	$scope.regionData = [];
	$scope.selectedRegion = "Global";
	$scope.tableData = [];

	//get region data on initialization
	mapRegionPromise = MapData.getMapRegions();
	mapRegionPromise.then(mapDataSuccess,mapDataError);
	tableDataPromise = TableData.getRegionsTableData();
	tableDataPromise.then(tableDataSuccess,tableDataError);



	$scope.setRegion = function(region){
		$scope.selectedRegion = region;

		switch(region){
			case "reg1":
				tableDataPromise = TableData.getAmericasData();
				tableDataPromise.then(tableDataSuccess,tableDataError);
				break;
			default:
				tableDataPromise = TableData.getRegionsTableData();
				tableDataPromise.then(tableDataSuccess,tableDataError);
				break;
		}

		$rootScope.$broadcast("regionSelected",{selection:region});
	}




	//event handlers
	function mapDataSuccess(data){
		$scope.mapData = data;
	}

	function mapDataError(msg){
		console.log(msg);
	}

	function tableDataSuccess(data){
		$scope.tableData = data;
	}

	function tableDataError(msg){
		console.log(msg);
	}

});