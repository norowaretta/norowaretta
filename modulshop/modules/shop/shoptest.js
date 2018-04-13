var CalcPotok = function(){
	this.model_path = './modules/shop/model.json'
	this.model = {};
	this.Calc = (par1, par2, par3, par4, par5, par6, par7) => {
				
		var potokday = par1*par2;
		var prodanocelevoi = potokday*par4;
		var ostalnoipotok = par3 - potokday;
		var randomkupit = ostalnoipotok*par5;
		var vsegochekov = prodanocelevoi+randomkupit;
		var dohodday = vsegochekov*par6;
		var dohodmec = dohodday*30;
		var dohodrisk = dohodmec*par7;
		
		
		return dohodrisk;
	}

	this.load_model = () => {
		$.get(this.model_path, (res)=>{
			console.log(res) 
			this.model = res;
		})
	}

	this.init = () => {
		this.load_model();
	}
	this.init();
} 