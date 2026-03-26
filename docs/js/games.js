'use strict';


class Game {
	
	constructor(name) {
		this.name = name;
		this.tags = [];
		this.dlcs = [];
	}
	
	tag(tags) {
		this
		this.tags = this.tags.concat(tags);
		return this;
	}

	dlc(dlc) {
		this.dlcs.push(dlc);
		return this;
	}
}

var GAMES = [
	new Game("BioShock").tag("Shooter","FPP","Sci-fi"),
	new Game("Timberborn").tag("Simulation","Building","Survival")
]

q(function() {
		
});

