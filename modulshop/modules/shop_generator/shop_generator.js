var Modulshop = function(){
	this.model_path = './modules/modulshop/model.json'
	this.model = {};
	this.sell = (min, max) => {
		
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