var App = function(){
	this.modules = {
		random: new RandGenerator(),
		shop: new ShopGenerator()
	}

	this.spec = {
		start:function(){
			mocha.run();
		}
	}
}

var app = new App();
