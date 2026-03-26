'use strict';


class Game {

	constructor(name) {
		this.name = name;
		this.tags = [];
		this.dlcs = [];
	}

	tag(tags) {
		this.tags = this.tags.concat(tags);
		return this;
	}

	dlc(dlc) {
		this.dlcs.push(dlc);
		return this;
	}

	fullname(fullname) {
		this.fullname =fullname;
		return this;
	}

	get img() {
		let img = this.name.toLowerCase();
		return "img/" + img.charAt(0) + "/" + img + ".jpg";
	}
}

var GAMES = [
	new Game("BioShock").tag("Shooter", "FPP", "Sci-fi"),
	new Game("Brigador").fullname("Brigador: Up-Armored Edition").tag("Action","Combat","Tactique"),
	new Game("Cyberpunk 2077").tag("Jeu de rôle","Action","SF"),
	new Game("D").fullname("D: Résoudre le Mystére... Explorer le Côté Noir de Votre âme").tag("Horreur", "Aventure", "Réflexion"),
	new Game("Darksiders").tag("Action", "Fantasy", "Jeu de rôle"),
	new Game("Darksiders 2").tag("Action", "Fantasy", "Jeu de rôle"),
	new Game("Darksiders 3").tag("Action", "Aventure", "Fantasy"),
	new Game("Everspace").tag("Action", "Simulation", "SF"),
	new Game("Fantasy General").tag("Stratégie", "Tour par tour", "Fantasy"),
	new Game("Timberborn").tag("Simulation", "Building", "Survival")
]

q(function() {
	GAMES.forEach((game) => {
		let div = q("<div>");
		div.append(q("<img>").src(game.img)).append(q("<span>").text(game.name));
		q("#games").append(div);
	});
});

