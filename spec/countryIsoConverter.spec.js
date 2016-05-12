describe("Country Iso Converter",function(){

	var CountryIsoConverter;

	beforeEach(module('SalesDashboardApp'));
	
	beforeEach(inject(function(_CountryIsoConverter_){

		CountryIsoConverter = _CountryIsoConverter_;

	}));


	it("should convert an iso country to an iso abbreviation",function(){
		expect(CountryIsoConverter.convert("Afghanistan")).toBe("AF");
	});



});