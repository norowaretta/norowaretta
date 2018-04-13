var data =
{
	"name":"shoptest",
	"top_arrow":[
		{
			"name":"rules"
		}
	],
	"bottom_arrow":[
		{
			"name":"magazin",
		},
		{
			"name":"potok",
			
		},

	],
	"left_arrow":[
		{
			"name":"application",
			"properties":[
				{
					"kolvo":80
				},
				{
					"time":11
				}
			]
		}
	],
	"right_arrow":[
		{
			"name":"rezultat"
		}
	]
}

var sizepotok = new CalcPotok();
sizepotok.model = data;
console.log(sizepotok.model)

describe("Проходимость магазина", function() {

  it("Если у нас есть ТЦ и на долю отдельного магазина приходится поток 80 людей в час, то поток всего за 11 часов работы составит 880 людей", function() {
	
	
	
  	var potokchas = sizepotok.model.left_arrow[0].properties[0].kolvo;
	var timework = sizepotok.model.left_arrow[0].properties[1].time;
	
	console.log(potokchas, timework);
	
	var totalpotok = sizepotok.Calc(potokchas,timework)
	
	
	console.log(totalpotok);
		
    assert.equal((totalpotok == 880), true);
  });
});
