angular.module("dashBoardUI").directive("mapFilter",[function(){


	return{
		restrict:"A",
		link:function(scope,elem,attr){
			var filterButton = elem.find("div.filter-button");
			var subNav = elem.find("ul.filter-button-sub-links");

			filterButton.on("click",function(e){

				filterButton.removeClass("active");
				$(this).addClass("active");

				//this is for subnav
				if(subNav.hasClass("active")){
					subNav.animate({
						right:"-488%",
						opacity:0
					},250,function(){subNav.removeClass("active")})
				}else{
					$(this).find("ul.filter-button-sub-links").addClass("active")
					$(this).find("ul.filter-button-sub-links").animate({right:"-506%",opacity:1},250,function(){$(this).find("ul.filter-button-sub-links").addClass("active")});
				}			


			});
		}
	}





}]);