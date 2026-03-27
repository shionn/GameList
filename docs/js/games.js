'use strict';


class Game {

	constructor(name) {
		this.name = name;
		this.genres = [];
		this.tags = [];
		this.dlcs = [];
	}

	tag(tags) {
		this.tags = this.tags.concat(tags);
		return this;
	}
	
	genre(genres) {
		this.genres = this.genres.concat(genres);
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
	new Game("BioShock").genre("Shooter", "FPP", "Sci-fi"),
	new Game("Brigador").fullname("Brigador: Up-Armored Edition").genre("Action","Combat","Tactique"),
	new Game("Cyberpunk 2077").genre("Jeu de rôle","Action","SF"),
	new Game("D").fullname("D: Résoudre le Mystére... Explorer le Côté Noir de Votre âme").genre("Horreur", "Aventure", "Réflexion"),
	new Game("Darksiders").genre("Action", "Fantasy", "Jeu de rôle"),
	new Game("Darksiders 2").genre("Action", "Fantasy", "Jeu de rôle"),
	new Game("Darksiders 3").genre("Action", "Aventure", "Fantasy"),
	new Game("Everspace").genre("Action", "Simulation", "SF"),
	new Game("Fantasy General").genre("Stratégie", "Tour par tour", "Fantasy"),
	new Game("Ori and the Blind Forest").genre("Action", "Aventure", "Plateforme"),
	new Game("The Witness").genre("Aventure", "Réflexion", "Monde ouvert"),
	new Game("Timberborn").genre("Simulation", "Building", "Survival"),
]

q(function() {
	GAMES.forEach((game) => {
		let div = q("<div>").attr("data-game", game.name);
		div.append(q("<img>").src(game.img)).append(q("<span>").text(game.name));
		q("#games").append(div);
	});
});

