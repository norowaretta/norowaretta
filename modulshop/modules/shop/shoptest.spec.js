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
			                  ,
				{
				    "potokTS":12000
				}
				,			
				{
				    "procentcelevoi":0.025
				}
				,
				{
				    "pcocentcelevoirand":0.005
				}
				,
				{
                      "srcheck":200				
				}
				,
				{
				    "risk":0.8
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

describe("Доход канцелярского магазина", function() {

  it("Если у нас есть ТЦ проходимостью 12 000 человек в сутки, время работы 11 часов, то на долю условного магазина канцелярских товаров приходится поток 80 человек в час. Всего от общего потока канц. магазина в день совершат покупки 2,5%. На долю случайных продаж от общего потока ТЦ приходится 0.5%. С учетом среднего чека 200р, требуется найти месячный доход канц. магазина с добавочным риском в 20%. ", function() {
	
	
  	var par1 = sizepotok.model.left_arrow[0].properties[0].kolvo;
	var par2 = sizepotok.model.left_arrow[0].properties[1].time;
	
	var par3 = sizepotok.model.left_arrow[0].properties[2].potokTS;
	var par4 = sizepotok.model.left_arrow[0].properties[3].procentcelevoi;
	
	var par5 = sizepotok.model.left_arrow[0].properties[4].pcocentcelevoirand;
    var par6 = sizepotok.model.left_arrow[0].properties[5].srcheck;
	var par7 = sizepotok.model.left_arrow[0].properties[6].risk;

	
	
	
	console.log(par1, par2, par3, par4, par5, par6, par7);
	
	var totaldohodrsk = sizepotok.Calc(par1, par2, par3, par4, par5, par6, par7)
	
	
	console.log('totaldohodrsk ' + totaldohodrsk);
	console.log ( 'Что-нибудь' );
		
    assert.equal((totaldohodrsk == 372480), true);
	
	
  });  
});


	
