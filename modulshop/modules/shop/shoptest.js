var CalcPotok = function(){
	this.model_path = './modules/shop/model.json'
	this.model = {};
	this.Calc = (kolvo, time) => {
		var rslt = kolvo*time;
		return rslt;
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