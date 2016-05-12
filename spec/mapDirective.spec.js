describe("Map Directive",function(){

	var $compile,$rootScope;

	beforeEach(module('SalesDashboardApp'));

	beforeEach(inject(function(_$compile_,_$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}))

	it("replaces the element with the map container",function(){
		var element = $compile("<sale-map></sale-map>")($rootScope);
		$rootScope.$digest();
		expect("div#map").toBeDefined();
	});

});