'use strict';


class Game {

	constructor(name) {
		this.name = name;
		this.genres = [];
		this.tags = [];
		this.dlcs = [];
		this.collection = undefined;
		this.disk = false;
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

	setCollection(collection) {
		this.collection = collection;
		return this;
	}

	get img() {
		let img = this.name.toLowerCase();
		img = img.replaceAll(":", "");
		img = img.replaceAll("/", "-");
		return "img/" + img.charAt(0) + "/" + img + ".jpg";
	}

	get displayName() {
		return this.fullname || this.name;
	}

	onDisk() {
		this.disk = true;
		return this;
	}

}

class Form {
	constructor() {
		this.genres = new Set();
		this.tags = new Set();
		this.collection = undefined;
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

	toggleCollection(collection) {
		if (this.collection == collection) {
			this.collection = undefined;
		} else {
			this.collection = collection;
		}
		return this;
	}

	isCollectionSelected(collection) {
		return this.collection == collection;
	}

	get games() {
		var games = GAMES;
		return games.filter(g => this._isSelected(g));
	}

	_isSelected(game) {
		return (this.genres.size == 0 || Array.from(this.genres).every(g => game.isGenre(g)))
			&& (this.tags.size == 0 || Array.from(this.tags).every(t => game.isTag(t)))
			&& (this.collection == undefined || this.collection === game.collection);
	}
}

var GAMES = [
	new Game("Anno 1404").setFullname("Anno 1404: Gold Edition")
		.genre("Simulation", "Historique", "Stratégie")
		.tag("Stratégie", "Classique", "Simulation", "Superbe bande-son", "Gestion", "Bac-à-sable", "Historique", "Temps réél", "Gestion des resources", "Relaxant", "Médieval", "Construction de villes", "Commerce", "Transport"),

	new Game("Beyond Good & Evil").onDisk()
		.genre("Action", "TPP", "SF")
		.tag("Action", "Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Exploration", "Science", "Protagoniste féminine", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Plateformes", "Émotionnel", "Infiltration", "Dystopique"),
	new Game("BioShock").setFullname("BioShock & BioShock Remastered").onDisk()
		.genre("Shooter", "FPP", "Sci-fi")
		.tag("Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Science", "Première personne", "Sombre", "Horreur", "FPS", "Tir", "Dystopique", "Steampunk", "Sous l'eau"),
	new Game("Brigador").setFullname("Brigador: Up-Armored Edition").onDisk()
		.genre("Action", "Combat", "Tactique")
		.tag("Action", "Indé", "Science", "Tactique", "Difficile", "Isométrique", "Vue du dessus", "Roguelite", "Combat", "Cyberpunk", "Dystopique", "Tir à deux joysticks", "Chars d'assaut"),

	new Game("Cyberpunk 2077")
		.genre("Jeu de rôle", "Action", "SF")
		.tag("Action", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Science", "Première personne", "Superbe bande-son", "Choix multiples", "Monde Ouvert", "Mature", "Nudité", "Violent", "Fins multiples", "FPS", "Cyberpunk"),

	new Game("D").setFullname("D: Résoudre le Mystére... Explorer le Côté Noir de Votre âme").onDisk()
		.genre("Horreur", "Aventure", "Réflexion")
		.tag("Aventure", "Atmosphère", "Classique", "Casse-tête", "Première personne", "Protagoniste féminine", "Sombre", "Horreur", "Fins multiples", "Logique", "Horreur psychologique", "FMV"),
	new Game("Darksiders").setFullname("Darksiders Warmastered Edition").setCollection("Darksiders")
		.genre("Action", "Fantasy", "Jeu de rôle")
		.tag("Action", "Fantasy", "Histoire Riche", "Jeu de rôle", "Classique", "Casse-tête", "Monde Ouvert", "Troisième personne", "Multijoueur", "Violent", "Difficile", "Gore", "Hack and Slash", "Post-apocalyptique", "Metroidvania", "Remake"),
	new Game("Darksiders 2").setCollection("Darksiders")
		.genre("Action", "Fantasy", "Jeu de rôle")
		.tag("Action", "Fantasy", "Histoire Riche", "Jeu de rôle", "Casse-tête", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Multijoueur", "Gore", "Hack and Slash", "Metroidvania"),
	new Game("Darksiders 3").setCollection("Darksiders").onDisk()
		.genre("Action", "Aventure", "Fantasy")
		.tag("Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "Casse-tête", "Protagoniste féminine", "Sombre", "Troisième personne", "Violent", "Gore", "Hack and Slash", "Post-apocalyptique", "Souls-like"),

	new Game("Everspace")
		.genre("Action", "Simulation", "SF")
		.tag("Action", "Science fiction", "Classique", "Exploration", "Simulation", "Science", "Première personne", "Superbe bande-son", "Survie", "Difficile", "Roguelike", "Espace", "Roguelite", "Vol", "Réalité virtuelle"),

	new Game("Fantasy General").onDisk()
		.genre("Stratégie", "Tour par tour", "Fantasy")
		.tag("Fantasy", "Stratégie", "2D", "Classique", "Tour par tour", "Magie", "Guerre"),
	new Game("Full Throttle").setFullname("Full Throttle Remastered")
		.genre("Aventure", "Point-and-click", "Enquête-mystère")
		.tag("Aventure", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Graphismes Pixel", "Amusant", "Point&Click", "Enquête", "Enquête-mystère", "Court", "Remake"),

	new Game("Grandia 2").setFullname("Grandia II Anniversary Edition").onDisk().genre("Aventure", "RPG"),

	new Game("Leisure Suit Larry 7").setFullname("Leisure Suit Larry : Drague en Haute Mer !").onDisk()
		.genre("Aventure", "Point-and-click", "Réflexion")
		.tag("Aventure", "Classique", "Casse-tête", "Point&Click", "Mature", "Contenu à caractère sexuel", "Nudité", "Logique", "Adulte"),

	new Game("Might and Magic 7").setFullname("Might and Magic 7: For Blood and Honor")
		.genre("Jeu de rôle", "FPP", "Fantasy")
		.tag("Fantasy", "Jeu de rôle", "Classique", "Exploration", "Tour par tour", "Première personne", "Gestion", "Monde Ouvert", "Magie", "FPS", "cRPG"),

	new Game("Ori and the Blind Forest").setFullname("Ori and the Blind Forest: Definitive Edition").onDisk()
		.genre("Action", "Aventure", "Plateforme")
		.tag("Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "2D", "Classique", "Casse-tête", "Superbe bande-son", "Monde Ouvert", "Plateformes", "Difficile", "Familial", "Metroidvania"),
	new Game("Outcast").setFullname("Outcast - Second Contact")
		.genre("Action", "Aventure", "SF")
		.tag("Aventure", "Action", "Histoire Riche", "Science fiction", "Exploration", "Science", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Remake"),

	new Game("Prince of Persia 2003").setFullname("Prince of Persia : Les Sables du temps").setCollection("Prince of Persia")
		.genre("Action", "Aventure", "Fantasy")
		.tag("Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Troisième personne", "Plateformes", "Hack and Slash", "Casse-tête et plateformes", "Manipulation temporelle"),
	new Game("Prince of Persia 2004").setFullname("Prince of Persia : L'Âme du guerrier").setCollection("Prince of Persia")
		.genre("Action", "TPP", "Fantasy")
		.tag("Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Casse-tête", "Sombre", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Plateformes", "Gore", "Hack and Slash", "Manipulation temporelle"),
	new Game("Prince of Persia 2005").setFullname("Prince of Persia : Les Deux Royaumes").setCollection("Prince of Persia")
		.genre("Action", "TPP", "Fantasy")
		.tag("Action, Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Troisième personne", "Plateformes", "Hack and Slash", "Infiltration", "Manipulation temporelle"),
	new Game("Prince of Persia 2008").setFullname("Prince of Persia").setCollection("Prince of Persia")
		.genre("Action", "TPP", "Fantasy")
		.tag("Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Plateformes", "Relaxant", "Hack and Slash", "Romance"),

	new Game("Return of the Obra Dinn").onDisk()
		.genre("FPP", "Aventure", "Mystère")
		.tag("Aventure", "Indé", "Histoire Riche", "Atmosphère", "Casse-tête", "Première personne", "Superbe bande-son", "Horreur", "Mystère", "Historique", "Violent", "Difficile", "Fins multiples", "FPS", "Simulation de marche", "Noir", "Pirates", "Naval"),
	new Game("Runaway: A Road Adventure").setCollection("Runaway")
		.genre("Action", "Aventure", "Enquête-mystère")
		.tag("Aventure", "Action", "Classique", "Enquête", "Enquête-mystère"),
	new Game("Runaway 2: The Dream of the Turtle").setCollection("Runaway")
		.genre("Action", "Aventure", "Enquête-mystère")
		.tag("Aventure", "Action", "Histoire Riche", "2D", "Classique", "Casse-tête", "Casual", "Superbe bande-son", "Amusant", "Point&Click", "Mystère", "Cartoonesque", "Enquête", "Enquête-mystère"),
	new Game("Runaway 3: A Twist of Fate").setCollection("Runaway")
		.genre("Action", "Aventure", "Enquête-mystère")
		.tag("Aventure", "Action", "Classique", "Enquête", "Enquête-mystère"),

	new Game("SOMA")
		.genre("FPP", "Horreur", "Aventure")
		.tag("Aventure", "Histoire Riche", "Atmosphère", "Exploration", "Casse-tête", "Science", "Première personne", "Sombre", "Horreur", "Mystère", "FPS", "Infiltration", "Horreur psychologique", "Horreur et survie", "Simulation de marche", "Robots", "Philosophique", "Sous l'eau"),
	new Game("SPORE Collection")
		.genre("Stratégie", "Temps réel", "Fantasy")
		.tag("Fantasy", "Stratégie", "Classique", "Temps réél"),

	new Game("The Elder Scrolls: Arena").setCollection("The Elder Scrolls").onDisk()
		.genre("Jeu de rôle", "Action", "Monde ouvert")
		.tag("Action", "Jeu de rôle", "Classique", "Monde Ouvert"),
	new Game("The Elder Scrolls II: Daggerfall").setCollection("The Elder Scrolls").onDisk()
		.genre("Jeu de rôle", "Aventure", " Monde ouvert")
		.tag("Aventure", "Jeu de rôle", "Classique", "Monde Ouvert"),
	new Game("The Elder Scrolls III: Morrowind").setFullname("The Elder Scrolls III: Morrowind - GOTY Edition").setCollection("The Elder Scrolls"),
	new Game("The Elder Scrolls IV: Oblivion").setFullname("The Elder Scrolls IV: Oblivion - GOTY Deluxe").setCollection("The Elder Scrolls"),
	new Game("The Gunk")
		.genre("Action", "Adventure", "Exploration")
		.tag("Adventure", "Action", "Story Rich", "Atmospheric", "Sci-fi", "Exploration", "Female Protagonist", "Third Person", "Family Friendly", "Relaxing", "LGBTQ+", "Metroidvania", "Nature"),
	new Game("The Witcher 3").setFullname("The Witcher 3: Wild Hunt - Complete Edition").setCollection("The Witcher")
		.genre("Jeu de rôle", "Aventure", "Fantasy")
		.tag("Aventure", "Fantasy", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Classique", "Exploration", "Superbe bande-son", "Choix multiples", "Monde Ouvert", "Troisième personne", "Mature", "Contenu à caractère sexuel", "Nudité", "Violent", "Fins multiples", "Gore", "Magie", "Médieval", "Vampire", "Loups-garous"),
	new Game("The Witness").onDisk()
		.genre("Aventure", "Réflexion", "Monde ouvert")
		.tag("Aventure", "Indé", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Casual", "Première personne", "Superbe bande-son", "Monde Ouvert", "Mystère", "Bac-à-sable", "Difficile", "Logique", "Relaxant", "Surréaliste", "Simulation de marche", "Cozy", "Philosophique"),

	new Game("Theme Hospital").onDisk()
		.genre("Stratégie", "Construction", "Gestion")
		.tag("Stratégie", "Classique", "Casual", "Amusant", "Gestion", "Construction", "Gestion", "Humour noir"),
	new Game("Theme Park")
		.genre("Simulation", "Construction", "Gestion")
		.tag("Classique", "Simulation", "Construction", "Gestion"),
	new Game("Timberborn").onDisk()
		.genre("Simulation", "Building", "Survival")
		.tag("Science fiction", "Simulation", "Gestion", "Bac-à-sable", "Survie", "Gestion des resources", "Vue du dessus", "Construction", "Construction de base", "Post-apocalyptique", "Construction de villes", "Editeur de niveaux"),
	new Game("Tomb Raider 1/2/3").setFullname("Tomb Raider I-III Remastered Starring Lara Croft").setCollection("Tomb Raider").onDisk()
		.genre("Action", "Aventure", "Exploration")
		.tag("Aventure", "Action", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Violent", "Remake"),
	new Game("Tomb Raider 4/5/6").setFullname("Tomb Raider IV-VI Remastered").setCollection("Tomb Raider")
		.genre("Action", "Aventure", "Exploration")
		.tag("Aventure", "Action", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Violent", "Remake"),
	new Game("Tomb Raider 10").setFullname("Tomb Raider GOTY").setCollection("Tomb Raider")
		.genre("Action", "Aventure", "Survie")
		.tag("Aventure", "Action", "Classique", "Survie", "Horreur et survie"),
	new Game("Tomb Raider 11").setFullname("Rise of the Tomb Raider: 20 Year Celebration").setCollection("Tomb Raider")
		.genre("Action", "Aventure", "Survie")
		.tag("Aventure", "Action", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Sombre", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Multijoueur", "Survie", "Violent", "Gore", "Infiltration"),
	new Game("Tomb Raider 12").setFullname("Shadow of the Tomb Raider: Definitive Edition").setCollection("Tomb Raider")
		.genre("Action", "Aventure", "Survie")
		.tag("Aventure", "Action", "Histoire Riche", "Atmosphère", "Exploration", "Casse-tête", "Protagoniste féminine", "Sombre", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Multijoueur", "Survie", "Violent", "Gore", "Infiltration"),
	new Game("Toonstruck")
		.genre("Aventure", "Point-and-click", "Réflexion")
		.tag("Aventure", "Histoire Riche", "2D", "Classique", "Exploration", "Casse-tête", "Amusant", "Troisième personne", "Point&Click", "Logique", "Cartoonesque", "Humour noir", "Objets cachés", "FMV"),
	new Game("Torchlight").setCollection("Torchlight")
		.genre("Jeu de rôle", "Action", "Fantasy")
		.tag("Action", "Indé", "Fantasy", "Jeu de rôle", "Classique", "Exploration", "Protagoniste féminine", "Superbe bande-son", "Isométrique", "Magie", "Vue du dessus", "Hack and Slash", "Dungeon Crawler", "Steampunk"),
	new Game("Torchlight 2").setFullname("Torchlight II").setCollection("Torchlight")
		.genre("Jeu de rôle", "Action", "Fantasy")
		.tag("Action", "Indé", "Fantasy", "Atmosphère", "Jeu de rôle", "Classique", "Multijoueur", "Isométrique", "Hack and Slash", "Dungeon Crawler", "Steampunk"),
	new Game("Tower Hunter: Erza's Trial").setFullname("Tower Hunter: Erza's Trial")
		.genre("Action", "Roguelike", "Metroidvania")
		.tag("Action", "2D", "Casual", "Protagoniste féminine", "Superbe bande-son", "Nudité", "Difficile", "Roguelike", "Roguelite", "Hack and Slash", "Metroidvania", "Souls-like", "Perma Death"),
	new Game("Two Point Hospital").genre("Simulation", "Construction", "Gestion")
		.tag("Simulation", "Casual", "Tactique", "Amusant", "Gestion", "Bac-à-sable", "Isométrique", "Familial", "Rétro", "Construction", "Cartoonesque", "Gestion"),

	new Game("Ultima 4").setFullname("Ultima IV: Quest of the Avatar ").setCollection("Ultima").onDisk()
		.genre("Role-playing", "Adventure", "Fantasy")
		.tag("Adventure", "Fantasy", "Role-playing", "Classic"),
	new Game("Unreal").setFullname("Unreal Gold")
		.genre("Action"),

	new Game("Wavetale")
		.genre("Action", "Aventure", "Exploration")
		.tag("Aventure", "Action", "Histoire Riche", "Exploration", "Protagoniste féminine", "Troisième personne", "Plateformes", "Relaxant", "Cartoonesque", "Nature"),
	new Game("Worlds of Ultima : The Savage Empire").setCollection("Ultima").onDisk()
		.genre("Role-playing", "Adventure", "Fantasy")
		.tag("Adventure", "Fantasy", "Role-playing", "Classic"),




];

q(function() {

	let form = new Form();

	function display() {
		// construction des genres
		let genres = GAMES.flatMap(g => g.genres);
		genres = [...new Set(genres)];
		genres.sort();
		q("#genres").clearChildren().append(q("<strong>").text("Genre : "));
		genres.forEach(genre => {
			let a = q("<a>").href("#" + genre).data("genre", genre).text(genre);
			if (form.isGenreSelected(genre)) {
				a.addClass("selected");
			}
			q("#genres").append(a);
		});

		// des tags
		let tags = GAMES.flatMap(g => g.tags);
		tags = [...new Set(tags)];
		tags.sort();
		q("#tags").clearChildren().append(q("<strong>").text("Tag : "));
		tags.forEach(tag => {
			let a = q("<a>").href("#" + tag).data("tag", tag).text(tag);
			if (form.isTagSelected(tag)) {
				a.addClass("selected");
			}
			q("#tags").append(a);
		});

		// des collections
		let collections = GAMES.map(g => g.collection).filter(c => c !== undefined);
		collections = [...new Set(collections)];
		collections.sort();
		q("#collections").clearChildren().append(q("<strong>").text("Collections : "));
		collections.forEach(collection => {
			let a = q("<a>").href("#" + collection).data("collection", collection).text(collection);
			if (form.isCollectionSelected(collection)) {
				a.addClass("selected");
			}
			q("#collections").append(a);
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
	q("main").on("click", "a[data-genre]", (e) => {
		e.preventDefault();
		let a = q(e.target);
		let genre = a.data("genre");
		form.toggleGenre(genre);
		q("#game").rmClass("open");
		display();
	});

	// clic sur les tags
	q("main").on("click", "a[data-tag]", (e) => {
		e.preventDefault();
		let a = q(e.target);
		let tag = a.data("tag");
		form.toggleTag(tag);
		q("#game").rmClass("open");
		display();
	});

	// clic sur les collections
	q("main").on("click", "a[data-collection]", (e) => {
		e.preventDefault();
		let a = q(e.target);
		let collection = a.data("collection");
		form.toggleCollection(collection);
		q("#game").rmClass("open");
		display();
	});

	// fermeture de la popin
	q("#game").on("click", (e) => {
		q(e.target).rmClass("open");
	})

	// ouvrir la popin
	q("main").on("click", "#games > div", (e) => {
		let name = q(e.target).parent("div[data-name]").data("name");
		let game = GAMES.find(g => g.name === name);

		let div = q("<div>");
		div.append(q("<img>").src(game.img));
		let h1 = q("<h1>").text(game.displayName);
		if (game.disk) {
			h1.append(q("<small>").text(ICON_DISK))
		}
		div.append(h1);

		if (game.collection) {
			let collection = q("<p>").append(q("<strong>").text("Collection : ")).append(q("<a>").href("#" + game.collection).data("collection", game.collection).text(game.collection));
			div.append(collection);
		}

		let genre = q("<p>").append(q("<strong>").text("Genre : "));
		game.genres.forEach(g => genre.append(q("<a>").href("#" + g).data("genre", g).text(g)));

		let tag = q("<p>").append(q("<strong>").text("Tags : "));
		game.tags.forEach(t => tag.append(q("<a>").href("#" + t).data("tag", t).text(t)));

		div.append(genre).append(tag);
		q("#game").clearChildren().append(div).addClass("open");
	});
});

