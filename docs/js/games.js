'use strict';


class Game {

	constructor(name) {
		this.name = name;
		this.genres = [];
		this.tags = [];
		this.dlcs = [];
	}

	tag(...tags) {
		this.tags = this.tags.concat(tags);
		return this;
	}

	isTag(tag) {
		return this.tags.includes(tag);
	}

	genre(...genres) {
		this.genres = this.genres.concat(genres);
		return this;
	}

	isGenre(genre) {
		return this.genres.includes(genre);
	}

	dlc(dlc) {
		this.dlcs.push(dlc);
		return this;
	}

	setFullname(fullname) {
		if (!fullname) {
			return this.fullname || this.name;
		}
		this.fullname = fullname;
		return this;
	}

	get img() {
		let img = this.name.toLowerCase();
		return "img/" + img.charAt(0) + "/" + img + ".jpg";
	}

	get displayName() {
		return this.fullname || this.name;
	}

}

class Form {
	constructor() {
		this.genres = new Set();
		this.tags = new Set();
	}

	toggleGenre(genre) {
		if (this.genres.has(genre)) {
			this.genres.delete(genre);
		} else {
			this.genres.add(genre);
		}
		return this;
	}

	isGenreSelected(genre) {
		return this.genres.has(genre);
	}

	toggleTag(tag) {
		if (this.tags.has(tag)) {
			this.tags.delete(tag);
		} else {
			this.tags.add(tag);
		}
		return this;
	}

	isTagSelected(tag) {
		return this.tags.has(tag);
	}

	get games() {
		var games = GAMES;
		return games.filter(g=>this._isSelected(g));
	}

	_isSelected(game) {
		return (this.genres.size == 0 || Array.from(this.genres).every(g=>game.isGenre(g)))
			&& (this.tags.size   == 0 || Array.from(this.tags).every(t=>game.isTag(t)));
	}
}

var GAMES = [
	new Game("BioShock").setFullname("BioShock & BioShock Remastered").genre("Shooter", "FPP", "Sci-fi")
		.tag("Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Science", "Première personne", "Sombre", "Horreur", "FPS", "Tir", "Dystopique", "Steampunk", "Sous l'eau"),
	new Game("Brigador").setFullname("Brigador: Up-Armored Edition").genre("Action","Combat","Tactique")
		.tag("Action", "Indé", "Science", "Tactique", "Difficile", "Isométrique", "Vue du dessus", "Roguelite", "Combat", "Cyberpunk", "Dystopique", "Tir à deux joysticks", "Chars d'assaut"),
	new Game("Cyberpunk 2077").genre("Jeu de rôle","Action","SF")
		.tag("Action", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Science", "Première personne", "Superbe bande-son", "Choix multiples", "Monde Ouvert", "Mature", "Nudité", "Violent", "Fins multiples", "FPS", "Cyberpunk"),
	new Game("D").setFullname("D: Résoudre le Mystére... Explorer le Côté Noir de Votre âme").genre("Horreur", "Aventure", "Réflexion")
		.tag("Aventure", "Atmosphère", "Classique", "Casse-tête", "Première personne", "Protagoniste féminine", "Sombre", "Horreur", "Fins multiples", "Logique", "Horreur psychologique", "FMV"),
	new Game("Darksiders").setFullname("Darksiders Warmastered Edition").genre("Action", "Fantasy", "Jeu de rôle")
		.tag("Action", "Fantasy", "Histoire Riche", "Jeu de rôle", "Classique", "Casse-tête", "Monde Ouvert", "Troisième personne", "Multijoueur", "Violent", "Difficile", "Gore", "Hack and Slash", "Post-apocalyptique", "Metroidvania", "Remake"),
	new Game("Darksiders 2").genre("Action", "Fantasy", "Jeu de rôle")
		.tag("Action", "Fantasy", "Histoire Riche", "Jeu de rôle", "Casse-tête", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Multijoueur", "Gore", "Hack and Slash", "Metroidvania"),
	new Game("Darksiders 3").genre("Action", "Aventure", "Fantasy")
		.tag("Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "Casse-tête", "Protagoniste féminine", "Sombre", "Troisième personne", "Violent", "Gore", "Hack and Slash", "Post-apocalyptique", "Souls-like"),
	new Game("Everspace").genre("Action", "Simulation", "SF")
		.tag("Action", "Science fiction", "Classique", "Exploration", "Simulation", "Science", "Première personne", "Superbe bande-son", "Survie", "Difficile", "Roguelike", "Espace", "Roguelite", "Vol", "Réalité virtuelle"),
	new Game("Fantasy General").genre("Stratégie", "Tour par tour", "Fantasy")
		.tag("Fantasy", "Stratégie", "2D", "Classique", "Tour par tour", "Magie", "Guerre", "Good Old Game"),
	new Game("Full Throttle").setFullname("Full Throttle Remastered").genre("Aventure","Point-and-click","Enquête-mystère")
		.tag("Aventure", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Graphismes Pixel", "Amusant", "Point&Click", "Enquête", "Enquête-mystère", "Court", "Remake"),
	new Game("Grandia 2").setFullname("Grandia II Anniversary Edition").genre("Aventure","RPG"),

	new Game("The Witness").genre("Aventure", "Réflexion", "Monde ouvert")
		.tag("Aventure", "Indé", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Casual", "Première personne", "Superbe bande-son", "Monde Ouvert", "Mystère", "Bac-à-sable", "Difficile", "Logique", "Relaxant", "Surréaliste", "Simulation de marche", "Cozy", "Philosophique"),
	new Game("Timberborn").genre("Simulation", "Building", "Survival")
		.tag("Science fiction", "Simulation", "Gestion", "Bac-à-sable", "Survie", "Gestion des resources", "Vue du dessus", "Construction", "Construction de base", "Post-apocalyptique", "Construction de villes", "Editeur de niveaux"),
];

q(function() {

	let form = new Form();

	function display() {
		// construction des genres
		let genres = GAMES.flatMap(g=>g.genres);
		genres = [...new Set(genres)];
		genres.sort();
		q("#genres").clearChildren().append(q("<strong>").text("Genre : "));
		genres.forEach(genre => {
			let a = q("<a>").href("#"+genre).data("genre", genre).text(genre);
			if (form.isGenreSelected(genre)) {
				a.addClass("selected");
			}
			q("#genres").append(a);
		});

		let tags = GAMES.flatMap(g=>g.tags);
		tags = [...new Set(tags)];
		tags.sort();
		q("#tags").clearChildren().append(q("<strong>").text("Tag : "));
		tags.forEach(tag => {
			let a = q("<a>").href("#"+tag).data("tag", tag).text(tag);
			if (form.isTagSelected(tag)) {
				a.addClass("selected");
			}
			q("#tags").append(a);
		});


		// construction des jeux
		q("#games").clearChildren();
		form.games.forEach((game) => {
			let div = q("<div>").data("name", game.name);
			div.append(q("<img>").src(game.img)).append(q("<span>").text(game.name));
			q("#games").append(div);
		});
	}

	display();

	// clic sur les genres
	q("main").on("click", "a[data-genre]", (e)=> {
		e.preventDefault();
		let a = q(e.target);
		let genre = a.data("genre");
		form.toggleGenre(genre);
		q("#game").rmClass("open");
		display();
	});

	// clic sur les tags
	q("main").on("click", "a[data-tag]", (e)=> {
		e.preventDefault();
		let a = q(e.target);
		let tag = a.data("tag");
		form.toggleTag(tag);
		q("#game").rmClass("open");
		display();
	});

	// fermeture de la popin
	q("#game").on("click", (e)=>{
		q(e.target).rmClass("open");
	})

	// ouvrir la popin
	q("main").on("click", "#games > div", (e) => {
		let name = q(e.target).parent("div[data-name]").data("name");
		let game = GAMES.find(g=>g.name === name);

		let div = q("<div>");
		div.append(q("<img>").src(game.img));
		div.append(q("<h1>").text(game.displayName));

		let genre = q("<p>").append(q("<strong>").text("Genre : "));
		game.genres.forEach(g=>genre.append(q("<a>").href("#"+g).data("genre", g).text(g)));

		let tag = q("<p>").append(q("<strong>").text("Tags : "));
		game.tags.forEach(t=>tag.append(q("<a>").href("#"+t).data("tag", t).text(t)));

		div.append(genre).append(tag);
		q("#game").clearChildren().append(div).addClass("open");
	});
});

