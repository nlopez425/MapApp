angular.module("dashBoardUI").directive("salesDataTable",function($rootScope){

	var dataTable;

	return {
		restrict:"E",
		templateUrl:"/app/table/table.tpl.html",
		scope:{
			"data":"="
		},
		replace:true,
		link:function(scope,element,attr){
			
			dataTable = $('#data-table').DataTable({
				paging:false,
				info:false
			});

			//watch function
			scope.$watch("data",function(newData,oldData){
			
				//clear the table
				if(dataTable){
					dataTable.clear().draw();
				}

				//update the table
				dataTable.rows.add(newData).draw();

			});

			//update table header
			$rootScope.$on("regionSelected",function(e,args){
				switch(args.selection){
					case "Global":
						dataTable.columns(0).header().to$().text("Region");
						break;
					default:
						dataTable.columns(0).header().to$().text("Country");
						break;
				}
			})

		}//end of link
	}//end of return







});