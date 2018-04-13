var App = function(){
	this.modules = {
		sizepotok: new CalcPotok()
	}

	this.spec = {
		start:function(){
			mocha.run();
		}
	}
}

var app = new App();