'use strict';

class Game {

	constructor(json) {
		this.json = json;
	}

	get name() {
		return this.json.name;
	}

	get fullname() {
		return this.json.fullname;
	}

	get collection() {
		return this.json.collection;
	}

	get onDisk() {
		return this.json.onDisk || false;
	}

	get size() {
		return this.json.size || 0;
	}

	get formatedSize() {
		return (this.json.size || "-") + " Go";
	}


	get genres() {
		return [];
	}

	get tags() {
		var tags = this.json.gog?.tags || [];
		return tags.concat(this.json.gog?.genres || []);
	}

	isTag(tag) {
		return this.tags.includes(tag);
	}

	isGenre(genre) {
		return this.genres.includes(genre);
	}

	get img() {
		let img = this.name.toLowerCase();
		img = img.replaceAll(":", "");
		img = img.replaceAll("/", "-");
		return "img/" + img.charAt(0) + "/" + img + ".jpg";
	}

	get gogUrl() {
		let url = this.json.gog.name || this.displayName;
		url = url.toLowerCase();
		url = url.replaceAll(" - ", " ");
		url = url.replaceAll(":", "");
		url = url.replaceAll("'", "");
		url = url.replaceAll("!", "");
		url = url.replaceAll("&", "and");
		url = url.replaceAll(" ", "_");
		return "https://www.gog.com/fr/game/" + url;
	}

	get displayName() {
		return this.fullname || this.name;
	}

}

var GAMES = [{
	name: "Anno 1404", fullname: "Anno 1404: Gold Edition",
	onDisk: true, size: 0.003,
	gog: {
		genres: ["Simulation", "Historique", "Stratégie"],
		tags: ["Stratégie", "Classique", "Simulation", "Superbe bande-son", "Gestion", "Bac-à-sable", "Historique", "Temps réél", "Gestion des resources", "Relaxant", "Médieval", "Construction de villes", "Commerce", "Transport"]
	}
}, {
	name: "Beneath a Steel Sky", fullname: "Beneath a Steel Sky (1994)",
	onDisk: true, size: 0.222,
	gog: {
		name: "Beneath a Steel Sky",
		genres: ["SF", "Aventure", "Point-and-click"],
		tags: ["Aventure", "Science fiction", "Classique", "Casse-tête", "Science", "Choix multiples", "Point&Click", "Post-apocalyptique", "Cyberpunk", "Dystopique", "Robots"]
	}
}, {
	name: "Beyond Good & Evil",
	onDisk: true, size: 1.7,
	gog: {
		genres: ["Action", "TPP", "SF"],
		tags: ["Action", "Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Exploration", "Science", "Protagoniste féminine", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Plateformes", "Émotionnel", "Infiltration", "Dystopique"]
	}
}, {
	name: "BioShock", fullname: "BioShock & BioShock Remastered", size: 20.3,
	onDisk: true,
	gog: {
		name: "BioShock Remastered",
		genres: ["Shooter", "FPP", "Sci-fi"],
		tags: ["Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Science", "Première personne", "Sombre", "Horreur", "FPS", "Tir", "Dystopique", "Steampunk", "Sous l'eau"]
	}
}, {
	name: "Brigador", fullname: "Brigador: Up-Armored Edition",
	onDisk: true, size: 0.67,
	gog: {
		name: "Brigador",
		genres: ["Action", "Combat", "Tactique"],
		tags: ["Action", "Indé", "Science", "Tactique", "Difficile", "Isométrique", "Vue du dessus", "Roguelite", "Combat", "Cyberpunk", "Dystopique", "Tir à deux joysticks", "Chars d'assaut"]
	}
}, {
	name: "Cyberpunk 2077",
	onDisk: true, size: 113.1,
	gog: {
		genres: ["Jeu de rôle", "Action", "SF"],
		tags: ["Action", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Science", "Première personne", "Superbe bande-son", "Choix multiples", "Monde Ouvert", "Mature", "Nudité", "Violent", "Fins multiples", "FPS", "Cyberpunk"]
	}
}, {
	name: "D", fullname: "D: Résoudre le Mystére... Explorer le Côté Noir de Votre âme",
	onDisk: true, size: 0.584,
	gog: {
		name: "D the Game",
		genres: ["Horreur", "Aventure", "Réflexion"],
		tags: ["Aventure", "Atmosphère", "Classique", "Casse-tête", "Première personne", "Protagoniste féminine", "Sombre", "Horreur", "Fins multiples", "Logique", "Horreur psychologique", "FMV"]
	}
}, {
	name: "Darksiders", fullname: "Darksiders Warmastered Edition",
	collection: "Darksiders",
	onDisk: true, size: 40.5,
	gog: {
		genres: ["Action", "Fantasy", "Jeu de rôle"],
		tags: ["Action", "Fantasy", "Histoire Riche", "Jeu de rôle", "Classique", "Casse-tête", "Monde Ouvert", "Troisième personne", "Multijoueur", "Violent", "Difficile", "Gore", "Hack and Slash", "Post-apocalyptique", "Metroidvania", "Remake"]
	}
}, {
	name: "Darksiders II", fullname: "Darksiders II: Deathinitive Edition", collection: "Darksiders", size: 15.5,
	onDisk: true,
	gog: {
		genres: ["Action", "Fantasy", "Jeu de rôle"],
		tags: ["Action", "Fantasy", "Histoire Riche", "Jeu de rôle", "Casse-tête", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Multijoueur", "Gore", "Hack and Slash", "Metroidvania"]
	}
}, {
	name: "Darksiders III", collection: "Darksiders", size: 23.9,
	onDisk: true,
	gog: {
		genres: ["Action", "Aventure", "Fantasy"],
		tags: ["Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "Casse-tête", "Protagoniste féminine", "Sombre", "Troisième personne", "Violent", "Gore", "Hack and Slash", "Post-apocalyptique", "Souls-like"]
	}
}, {
	name: "Everspace",
	onDisk: true, size: 3.7,
	gog: {
		genres: ["Action", "Simulation", "SF"],
		tags: ["Action", "Science fiction", "Classique", "Exploration", "Simulation", "Science", "Première personne", "Superbe bande-son", "Survie", "Difficile", "Roguelike", "Espace", "Roguelite", "Vol", "Réalité virtuelle"]
	}
}, {
	name: "Fantasy General",
	onDisk: true, size: 0.412,
	gog: {
		genres: ["Stratégie", "Tour par tour", "Fantasy"],
		tags: ["Fantasy", "Stratégie", "2D", "Classique", "Tour par tour", "Magie", "Guerre"]
	}
}, {
	name: "Full Throttle", fullname: "Full Throttle Remastered",
	gog: {
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Graphismes Pixel", "Amusant", "Point&Click", "Enquête", "Enquête-mystère", "Court", "Remake"]
	}
}, {
	name: "Grandia 2", fullname: "Grandia II Anniversary Edition",
	onDisk: true, size: 2.0,
	gog: {
		genre: ["Aventure", "RPG"]
	}
}, {
	name: "Leisure Suit Larry 7", fullname: "Leisure Suit Larry : Drague en Haute Mer !",
	onDisk: true, size: 0.926,
	gog: {
		name: "Leisure Suit Larry: Love for Sail!",
		genres: ["Aventure", "Point-and-click", "Réflexion"],
		tags: ["Aventure", "Classique", "Casse-tête", "Point&Click", "Mature", "Contenu à caractère sexuel", "Nudité", "Logique", "Adulte"]
	}
}, {
	name: "Might and Magic 7", fullname: "Might and Magic 7: For Blood and Honor",
	gog: {
		genres: ["Jeu de rôle", "FPP", "Fantasy"],
		tags: ["Fantasy", "Jeu de rôle", "Classique", "Exploration", "Tour par tour", "Première personne", "Gestion", "Monde Ouvert", "Magie", "FPS", "cRPG"]
	}
}, {
	name: "Ori and the Blind Forest", fullname: "Ori and the Blind Forest: Definitive Edition",
	onDisk: true, size: 4.9,
	gog: {
		genres: ["Action", "Aventure", "Plateforme"],
		tags: ["Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "2D", "Classique", "Casse-tête", "Superbe bande-son", "Monde Ouvert", "Plateformes", "Difficile", "Familial", "Metroidvania"]
	}
}, {
	name: "Outcast", fullname: "Outcast - Second Contact",
	gog: {
		genres: ["Action", "Aventure", "SF"],
		tags: ["Aventure", "Action", "Histoire Riche", "Science fiction", "Exploration", "Science", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Remake"]
	}
}, {
	name: "Prince of Persia 2003", fullname: "Prince of Persia : Les Sables du temps", collection: "Prince of Persia",
	gog: {
		name: "Prince of Persia: The Sands of Time",
		genres: ["Action", "Aventure", "Fantasy"],
		tags: ["Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Troisième personne", "Plateformes", "Hack and Slash", "Casse-tête et plateformes", "Manipulation temporelle"]
	}
}, {
	name: "Prince of Persia 2004", fullname: "Prince of Persia : L'Âme du guerrier", collection: "Prince of Persia",
	gog: {
		name: "Prince of Persia: Warrior Within",
		genres: ["Action", "TPP", "Fantasy"],
		tags: ["Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Casse-tête", "Sombre", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Plateformes", "Gore", "Hack and Slash", "Manipulation temporelle"]
	}
}, {
	name: "Prince of Persia 2005", fullname: "Prince of Persia : Les Deux Royaumes", collection: "Prince of Persia",
	gog: {
		name: "Prince of Persia: The Two Thrones",
		genres: ["Action", "TPP", "Fantasy"],
		tags: ["Action","Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Troisième personne", "Plateformes", "Hack and Slash", "Infiltration", "Manipulation temporelle"]
	}
}, {
	name: "Prince of Persia 2008", fullname: "Prince of Persia", collection: "Prince of Persia",
	gog: {
		name: "Prince of Persia",
		genres: ["Action", "TPP", "Fantasy"],
		tags: ["Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Plateformes", "Relaxant", "Hack and Slash", "Romance"]
	}
}, {
	name: "Return of the Obra Dinn",
	onDisk: true, size: 0.928,
	gog: {
		genres: ["FPP", "Aventure", "Mystère"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Atmosphère", "Casse-tête", "Première personne", "Superbe bande-son", "Horreur", "Mystère", "Historique", "Violent", "Difficile", "Fins multiples", "FPS", "Simulation de marche", "Noir", "Pirates", "Naval"]
	}
}, {
	name: "Runaway: A Road Adventure", collection: "Runaway",
	gog: {
		genres: ["Action", "Aventure", "Enquête-mystère"],
		tags: ["Aventure", "Action", "Classique", "Enquête", "Enquête-mystère"]
	}
}, {
	name: "Runaway 2: The Dream of the Turtle", collection: "Runaway",
	gog: {
		genres: ["Action", "Aventure", "Enquête-mystère"],
		tags: ["Aventure", "Action", "Histoire Riche", "2D", "Classique", "Casse-tête", "Casual", "Superbe bande-son", "Amusant", "Point&Click", "Mystère", "Cartoonesque", "Enquête", "Enquête-mystère"]
	}
}, {
	name: "Runaway 3: A Twist of Fate", collection: "Runaway",
	gog: {
		genres: ["Action", "Aventure", "Enquête-mystère"],
		tags: ["Aventure", "Action", "Classique", "Enquête", "Enquête-mystère"]
	}
}, {
	name: "SOMA",
	gog: {
		genres: ["FPP", "Horreur", "Aventure"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Exploration", "Casse-tête", "Science", "Première personne", "Sombre", "Horreur", "Mystère", "FPS", "Infiltration", "Horreur psychologique", "Horreur et survie", "Simulation de marche", "Robots", "Philosophique", "Sous l'eau"]
	}
}, {
	name: "SPORE Collection",
	gog: {
		genres: ["Stratégie", "Temps réel", "Fantasy"],
		tags: ["Fantasy", "Stratégie", "Classique", "Temps réél"]
	}
}, {
	name: "The Elder Scrolls: Arena", collection: "The Elder Scrolls",
	onDisk: true, size: 0.122,
	gog: {
		genres: ["Jeu de rôle", "Action", "Monde ouvert"],
		tags: ["Action", "Jeu de rôle", "Classique", "Monde Ouvert"]
	}
}, {
	name: "The Elder Scrolls II: Daggerfall", fullname: "The Elder Scrolls Chapter II: Daggerfall", collection: "The Elder Scrolls",
	onDisk: true, size: 0.256,
	gog: {
		genres: ["Jeu de rôle", "Aventure", "Monde ouvert"],
		tags: ["Aventure", "Jeu de rôle", "Classique", "Monde Ouvert"]
	}
}, {
	name: "The Elder Scrolls III: Morrowind", fullname: "The Elder Scrolls III: Morrowind GOTY Edition", collection: "The Elder Scrolls",
	gog: {
		genres: ["Jeu de rôle", "Aventure", "Monde ouvert"],
		tags: ["Aventure", "Fantasy", "Jeu de rôle", "Classique", "Première personne", "Monde Ouvert", "Troisième personne", "Bac-à-sable", "Magie", "Médieval"]
	}
}, {
	name: "The Elder Scrolls IV: Oblivion", fullname: "The Elder Scrolls IV: Oblivion - GOTY Edition Deluxe", collection: "The Elder Scrolls",
	gog: {
		name: "Elder Scrolls IV: Oblivion - Game of the Year Edition Deluxe The",
		genres: ["Jeu de rôle", "Aventure", "Fantasy"],
		tags: ["Aventure", "Fantasy", "Jeu de rôle", "Classique"]
	}
}, {
	name: "The Gunk",
	gog: {
		genres: ["Action", "Adventure", "Exploration"],
		tags: ["Adventure", "Action", "Story Rich", "Atmospheric", "Sci-fi", "Exploration", "Female Protagonist", "Third Person", "Family Friendly", "Relaxing", "LGBTQ+", "Metroidvania", "Nature"]
	}
}, {
	name: "The Witcher 3", fullname: "The Witcher 3: Wild Hunt - Complete Edition", collection: "The Witcher",
	onDisk: true, size: 86.0,
	gog: {
		genres: ["Jeu de rôle", "Aventure", "Fantasy"],
		tags: ["Aventure", "Fantasy", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Classique", "Exploration", "Superbe bande-son", "Choix multiples", "Monde Ouvert", "Troisième personne", "Mature", "Contenu à caractère sexuel", "Nudité", "Violent", "Fins multiples", "Gore", "Magie", "Médieval", "Vampire", "Loups-garous"]
	}
}, {

	name: "The Witness",
	onDisk: true, size: 4.0,
	gog: {
		genres: ["Aventure", "Réflexion", "Monde ouvert"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Casual", "Première personne", "Superbe bande-son", "Monde Ouvert", "Mystère", "Bac-à-sable", "Difficile", "Logique", "Relaxant", "Surréaliste", "Simulation de marche", "Cozy", "Philosophique"]
	}
}, {
	name: "Theme Hospital",
	onDisk: true, size: 0.176,
	gog: {
		genres: ["Stratégie", "Construction", "Gestion"],
		tags: ["Stratégie", "Classique", "Casual", "Amusant", "Gestion", "Construction", "Gestion", "Humour noir"]
	}
}, {
	name: "Theme Park",
	gog: {
		genres: ["Simulation", "Construction", "Gestion"],
		tags: ["Classique", "Simulation", "Construction", "Gestion"]
	}
}, {
	name: "Timberborn",
	onDisk: true, size: 1.3,
	gog: {
		genres: ["Simulation", "Building", "Survival"],
		tags: ["Science fiction", "Simulation", "Gestion", "Bac-à-sable", "Survie", "Gestion des resources", "Vue du dessus", "Construction", "Construction de base", "Post-apocalyptique", "Construction de villes", "Editeur de niveaux"]
	}
}, {
	name: "Tomb Raider 1/2/3", fullname: "Tomb Raider I-III Remastered Starring Lara Croft", collection: "Tomb Raider",
	onDisk: true, size: 4.3,
	gog: {
		name: "Tomb Raider I to III Remastered",
		genres: ["Action", "Aventure", "Exploration"],
		tags: ["Aventure", "Action", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Violent", "Remake"]
	}
}, {
	name: "Tomb Raider 4/5/6", fullname: "Tomb Raider IV-VI Remastered", collection: "Tomb Raider",
	gog: {
		name: "Tomb Raider IV VI Remastered",
		genres: ["Action", "Aventure", "Exploration"],
		tags: ["Aventure", "Action", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Violent", "Remake"]
	}
}, {
	name: "Tomb Raider 10", fullname: "Tomb Raider GOTY", collection: "Tomb Raider",
	onDisk: true, size: 17.8,
	gog: {
		genres: ["Action", "Aventure", "Survie"],
		tags: ["Aventure", "Action", "Classique", "Survie", "Horreur et survie"]
	}
}, {
	name: "Tomb Raider 11", fullname: "Rise of the Tomb Raider: 20 Year Celebration", collection: "Tomb Raider",
	onDisk: true, size: 33.8,
	gog: {
		genres: ["Action", "Aventure", "Survie"],
		tags: ["Aventure", "Action", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Sombre", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Multijoueur", "Survie", "Violent", "Gore", "Infiltration"]
	}
}, {
	name: "Tomb Raider 12", fullname: "Shadow of the Tomb Raider: Definitive Edition", collection: "Tomb Raider",
	onDisk: true, size: 36.3,
	gog: {
		genres: ["Action", "Aventure", "Survie"],
		tags: ["Aventure", "Action", "Histoire Riche", "Atmosphère", "Exploration", "Casse-tête", "Protagoniste féminine", "Sombre", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Multijoueur", "Survie", "Violent", "Gore", "Infiltration"]
	}
}, {
	name: "Toonstruck",
	onDisk: true, size: 2.0,
	gog: {
		genres: ["Aventure", "Point-and-click", "Réflexion"],
		tags: ["Aventure", "Histoire Riche", "2D", "Classique", "Exploration", "Casse-tête", "Amusant", "Troisième personne", "Point&Click", "Logique", "Cartoonesque", "Humour noir", "Objets cachés", "FMV"]
	}
}, {
	name: "Torchlight", collection: "Torchlight",
	onDisk: true, size: 0.442,
	gog: {
		genres: ["Jeu de rôle", "Action", "Fantasy"],
		tags: ["Action", "Indé", "Fantasy", "Jeu de rôle", "Classique", "Exploration", "Protagoniste féminine", "Superbe bande-son", "Isométrique", "Magie", "Vue du dessus", "Hack and Slash", "Dungeon Crawler", "Steampunk"]
	}
}, {
	name: "Torchlight 2", fullname: "Torchlight II", collection: "Torchlight",
	onDisk: true, size: 3.4,
	gog: {
		genres: ["Jeu de rôle", "Action", "Fantasy"],
		tags: ["Action", "Indé", "Fantasy", "Atmosphère", "Jeu de rôle", "Classique", "Multijoueur", "Isométrique", "Hack and Slash", "Dungeon Crawler", "Steampunk"]
	}
}, {
	name: "Tower Hunter: Erza's Trial", fullname: "Tower Hunter: Erza's Trial",
	onDisk: true, size: 1.1,
	gog: {
		genres: ["Action", "Roguelike", "Metroidvania"],
		tags: ["Action", "2D", "Casual", "Protagoniste féminine", "Superbe bande-son", "Nudité", "Difficile", "Roguelike", "Roguelite", "Hack and Slash", "Metroidvania", "Souls-like", "Perma Death"]
	}
}, {
	name: "Treasure Adventure Game",
	gog: {
		genres: ["Plateforme", "Aventure", "Jeu de rôle"],
		tags: ["Aventure", "Indé", "Fantasy", "Jeu de rôle", "2D", "Classique", "Plateformes", "Familial", "Cartoonesque", "Casse-tête et plateformes", "Metroidvania"]
	}
}, {
	name: "Two Point Hospital",
	gog: {
		genres: ["Simulation", "Construction", "Gestion"],
		tags: ["Simulation", "Casual", "Tactique", "Amusant", "Gestion", "Bac-à-sable", "Isométrique", "Familial", "Rétro", "Construction", "Cartoonesque", "Gestion"]
	}
}, {
	name: "Tyrian 2000",
	gog: {
		genres: ["Tir", "Action", "SF"],
		tags: ["Action", "Science fiction", "Classique", "Science", "Tir"]
	}
}, {
	name: "Ultima 4", fullname: "Ultima IV: Quest of the Avatar", collection: "Ultima",
	onDisk: true, size: 0.054,
	gog: {
		genres: ["Role-playing", "Adventure", "Fantasy"],
		tags: ["Adventure", "Fantasy", "Role-playing", "Classic"]
	}
}, {
	name: "Unreal", fullname: "Unreal Gold",
	gog: {
		genres: ["Action"]
	}
}, {
	name: "Wavetale",
	gog: {
		genres: ["Action", "Aventure", "Exploration"],
		tags: ["Aventure", "Action", "Histoire Riche", "Exploration", "Protagoniste féminine", "Troisième personne", "Plateformes", "Relaxant", "Cartoonesque", "Nature"]
	}
}, {
	name: "Worlds of Ultima: The Savage Empire", collection: "Ultima",
	onDisk: true, size: 0.169,
	gog: {
		genres: ["Role-playing", "Adventure", "Fantasy"],
		tags: ["Adventure", "Fantasy", "Role-playing", "Classic"]
	}
}].map(json => new Game(json));

