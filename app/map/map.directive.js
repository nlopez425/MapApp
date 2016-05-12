
angular.module("dashBoardUI").directive("saleMap",["CountryIsoConverter",function(CountryIsoConverter){


	return{

		restrict:"E",
		template:"<div id='map'></div>",
		replace:true,
		scope:{
			"mapdata":"=",
			"region":"="
		},
		link:function(scope,element,attrs){

			var map;

			AmCharts.ready(function(){
				map = new AmCharts.AmMap();
				map.backgroundColor = "#ffffff";
				map.backgroundAlpha = 1;
				


				var dataProvider = {
					map:"worldLow",
					getAreasFromMap: true
				};

				map.dataProvider = dataProvider;

			    map.areasSettings = {
			        color: "#CDCDCD",
			        colorSolid: "#5EB7DE",
			        selectedColor: "#5EB7DE",
			        outlineColor: "#ffffff",
			        rollOverColor: "#88CAE7",
			        rollOverOutlineColor: "#FFFFFF",
			        selectable: true
			    };

			    map.addListener( 'clickMapObject', function( event ) {

			        // deselect the area by assigning all of the dataProvider as selected object
			        map.selectedObject = map.dataProvider;
			        
			        // toggle showAsSelected
			        event.mapObject.showAsSelected = !event.mapObject.showAsSelected;
			        
			        // bring it to an appropriate color
			        map.returnInitialColor(event.mapObject);
			        
			        // let's build a list of currently selected states
			        var states = [];
			        for (var i in map.dataProvider.areas) {
			            var area = map.dataProvider.areas[i];
			            if (area.showAsSelected) {
			                states.push(area.title);
			            }
			        }

			    } );



			    map.export = {
			        enabled: true
			    }

				map.write(element.attr("id"));
				

				scope.$watch("mapdata",function(newValue,oldValue){
					
					paintMap(newValue,map);
					
				});//end of watch mapdata
				
				scope.$watch("region",function(newValue,oldValue){

					paintMap(scope.mapdata,map);

					switch(newValue){
						case "reg1":
							filterRegions("reg1",map);
							break;
						case "reg2":
							filterRegions("reg2",map);
							break;
						case "reg3":
							filterRegions("reg3",map);
							break;
						default:
							paintMap(scope.mapdata,map);
					}

				});

			});//end of ready
			

		}//end of link


	}//end of return

	function toTitleCase(str)
	{
	    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
	}

	function filterRegions(region,map){
		var mapAreasLength = map.dataProvider.areas.length;
		console.log("chang");
		for(var m = 0; m < mapAreasLength; m++){

			if(map.dataProvider.areas[m].group !== region){
				map.dataProvider.areas[m].color = "#CDCDCD";
			}

		}

		map.validateNow(false, false);
	}


	function paintMap(newValue,map){
					var mapDataLength = newValue.length;
					var mapAreasLength = map.dataProvider.areas.length;

					for(var i = 0; i < mapDataLength; i++ ){
						
						for(var m = 0; m < mapAreasLength; m++){
							if(map.dataProvider.areas[m].id === CountryIsoConverter.convert(toTitleCase(newValue[i].country))){
								map.dataProvider.areas[m].group = newValue[i].geo_area;
								switch(newValue[i].geo_area.toLowerCase()){
									case "reg1":
										map.dataProvider.areas[m].color  = "#DDE461";
										break;
									case "reg2":
										map.dataProvider.areas[m].color  = "#386C6F";
										break;
									case "reg3":
										map.dataProvider.areas[m].color  = "#ADBB6C";
										break;
									case "other":
										map.dataProvider.areas[m].color  = "#849D71";
										break;
								}
							}
						}


					}

					
					map.validateNow(false, false);
	}

}]);