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

	get letter() {
		return this.name.charAt(0).replace(/\d/,"#");
	}

	get isNew() {
		// deux semaines
		return Date.now()-Date.parse(this.json.date) <= 14*24*60*60*1000;
	}

	get img() {
		let img = this.name.toLowerCase();
		img = img.replaceAll(":", "");
		img = img.replaceAll("/", "-");
		img = img.replaceAll(",", "");
		img = img.replaceAll("&", "");
		img = img.replaceAll("!", "");
		img = img.replaceAll("  ", " ");
		return "img/" + img.charAt(0) + "/" + img + ".jpg";
	}

	get gogUrl() {
		let url = this.json.gog.name || this.displayName;
		url = url.toLowerCase();
		url = url.replaceAll(" - ", " ");
		url = url.replaceAll(":", "");
		url = url.replaceAll("-", "");
		url = url.replaceAll("'", "");
		url = url.replaceAll("!", "");
		url = url.replaceAll(",", "");
		url = url.replaceAll("&", "and");
		url = url.replaceAll(" ", "_");
		return "https://www.gog.com/fr/game/" + url;
	}

	get displayName() {
		return this.fullname || this.name;
	}

}

var skel = {
	name: "Brutal Legend",
	onDisk: true, size: 17.7,
	date : "2026-04-16",
	gog: {
		genres: ["Action", "Fantasy", "Stratégie"],
		tags: ["Action", "Fantasy", "Stratégie", "Atmosphère", "Classique", "Superbe bande-son", "Amusant", "Monde Ouvert", "Troisième personne", "Multijoueur", "Hack and Slash", "Stratégie en temps réél", "Beat 'em up"]
	}
};

var GAMES = [
{
	name: "112 Operator",
	onDisk: false, size: 1.6,
	date : "2026-08-14",
	gog: {
		genres: ["Strategy", "Indie", "Puzzle","Simulator"],
		tags: []
	}
}, {
	name: "9 Years of Shadows",
	onDisk: true, size: 1.4,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Metroidvania"],
		tags: ["Aventure", "Action", "Indé", "Fantasy", "Histoire Riche", "Atmosphère", "2D", "Exploration", "Protagoniste féminine", "Graphismes Pixel", "Plateformes", "Magie", "Metroidvania"]
	}
}, {
	name: "A Game of Thrones: The Board Game",
	onDisk: false, size: 0.147,
	date : "2026-08-14",
	gog: {
		genres: ["Stratégie", "Fantasy", "Jeu de cartes"],
		tags: ["Fantasy", "Stratégie", "Jeu de cartes"]
	}
}, {
	name: "A Plague Tale: Innocence",
	onDisk: true, size: 38.0,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Infiltration"],
		tags: ["Aventure", "Action", "Histoire Riche", "Atmosphère", "Protagoniste féminine", "Sombre", "Superbe bande-son", "Horreur", "Troisième personne", "Historique", "Violent", "Gore", "Médieval", "Émotionnel", "Infiltration"]
	}
}, {
	name: "Adios",
	onDisk: true, size: 2.2,
	date : "2026-08-14",
	gog: {
		genres: ["Simulation", "FPP", "Narratif"],
		tags: ["Indé", "Histoire Riche", "Simulation", "Première personne", "Sombre", "Mystère", "FPS", "Narratif", "Émotionnel", "Simulation de marche", "Thriller", "Crime", "Philosophique"]
	}
}, {
	name: "Alba: A Wildlife Adventure",
	onDisk: true, size: 0.303,
	date : "2026-08-13",
	gog: {
		genres: ["Aventure", "Exploration"],
		tags: ["Aventure", "Indé", "Exploration", "Protagoniste féminine", "Familial", "Relaxant", "Cartoonesque", "Nature", "Cozy"]
	}
}, {
	name: "Alan Wake", collection: "Remedy",
	onDisk: true, size: 8.4,
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Horreur"],
		tags: ["Aventure", "Action", "Histoire Riche", "Atmosphère", "Classique", "Sombre", "Superbe bande-son", "Horreur", "Troisième personne", "Mystère", "Survie", "Horreur psychologique", "Horreur et survie", "Surnaturel", "Thriller"]
	}
}, {
	name: "Alan Wake 2", collection: "Remedy",
	onDisk: false,
	gog: {
		genres: ["Adventure", "Shooter"],
		tags: ["Action", "Horror", "Thriller", "Survival", "Mystery"]
	}
}, {
	name: "Amnesia: Rebirth",
	onDisk: true, size: 18.3,
	date: "2026-08-14",
	gog: {
		genres: ["FPP", "Horreur", "Aventure"],
		tags: ["Aventure", "Indé", "Première personne", "Sombre", "Horreur", "FPS"]
	}
}, {
	name: "Anno 1404", fullname: "Anno 1404: Gold Edition",
	onDisk: true, size: 3.4,
	gog: {
		genres: ["Simulation", "Historique", "Stratégie"],
		tags: ["Stratégie", "Classique", "Simulation", "Superbe bande-son", "Gestion", "Bac-à-sable", "Historique", "Temps réél", "Gestion des resources", "Relaxant", "Médieval", "Construction de villes", "Commerce", "Transport"]
	}
}, {
	name: "Ancient Enemy",
	onDisk: true, size: 0.127,
	date: "2026-08-14",
	gog: {
		genres: ["Jeu de rôle", "Fantasy", "Jeu de cartes"],
		tags: ["Indé", "Fantasy", "Jeu de rôle", "Classique", "Tour par tour", "Sombre", "Historique", "Magie", "Relaxant", "Post-apocalyptique", "cRPG", "Jeu de cartes"]
	}
}, {
	name: "Axiom Verge",
	onDisk: true, size: 0.103,
}, {
	name: "Baldur's Gate", fullname: "Baldur's Gate: Enhanced Edition",
	onDisk: true, size: 5.8,
	sources: ["Redloved", "Faran"],
	date : "2026-04-14",
	gog: {
		genres: ["Jeu de rôle","Temps réel", "Fantasy"],
		tags: ["Fantasy", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Classique", "Multijoueur", "Temps réél", "Isométrique", "Magie", "cRPG", "Remake"]
	}
}, {
	name: "Batman: Arkham Knight",
	onDisk: true, size: 53.3,
	date : "2026-08-09",
	gog: {
		genres: ["Action","TPP","Monde ouvert"],
		tags: ["Action", "Troisième personne", "Monde Ouvert", "Mature"]
	}
}, {
	name: "Beacon Pines",
	onDisk: true, size: 0.972,
	date : "2026-08-14",
	gog: {
		genres: ["Jeu de rôle", "Aventure", "Narratif"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Exploration", "Casual", "Horreur", "Choix multiples", "Amusant", "Mystère", "Fins multiples", "Relaxant", "Cartoonesque", "Narratif", "Émotionnel", "Cozy"]
	}
}, {
	name: "Bear and Breakfast",
	onDisk: true, size: 0.905,
	date : "2026-08-14",
	gog: {
		genres: ["Simulation ", "Construction", "Gestion"],
		tags: ["Simulation", "Casual", "Amusant", "Gestion", "Gestion des resources", "Familial", "Relaxant", "Construction", "Cartoonesque", "Crafting", "Gestion", "Nature", "Simulation de vie"]
	}
}, {
	name: "Behind the Frame: The Finest Scenery",
	onDisk: true, size: 0.696,
	date : "2026-08-09",
	gog: {
		genres: ["Aventure","Narratif","Roman visuel"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Casse-tête", "Protagoniste féminine", "Roman graphique", "Point-and-click", "Familial", "Relaxant", "Logique", "Narratif", "Émotionnel", "Cozy", "Objets cachés", "Chats"]
	}
}, {
	name: "Beneath a Steel Sky", fullname: "Beneath a Steel Sky (1994)",
	onDisk: true, size: 0.222,
	gog: {
		name: "Beneath a Steel Sky",
		genres: ["SF", "Aventure", "Point-and-click"],
		tags: ["Aventure", "Science fiction", "Classique", "Casse-tête", "Science", "Choix multiples", "Point-and-click", "Post-apocalyptique", "Cyberpunk", "Dystopique", "Robots"]
	}
}, {
	name: "Beyond Good & Evil",
	onDisk: true, size: 1.7,
	gog: {
		genres: ["Action", "TPP", "SF"],
		tags: ["Action", "Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Exploration", "Science", "Protagoniste féminine", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Plateformes", "Émotionnel", "Infiltration", "Dystopique"]
	}
}, {
	name: "Beyond Blue",
	onDisk: true, size: 7,
	date : "2026-08-14"
}, {
	name: "BioShock", fullname: "BioShock & BioShock Remastered", size: 20.3,
	onDisk: true,
	gog: {
		name: "BioShock Remastered",
		genres: ["Shooter", "FPP", "Sci-fi"],
		tags: ["Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Science", "Première personne", "Sombre", "Horreur", "FPS", "Tir", "Dystopique", "Steampunk", "Sous l'eau"]
	}
}, {
	name: "BioShock 2",
	onDisk: true, size: 14.1,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		name: "BioShock 2 Remastered",
		genres: ["Tir", "FPP", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Science", "Première personne", "Sombre", "Horreur", "FPS", "Tir", "Dystopique", "Steampunk", "Sous l'eau"]
	}
}, {
	name: "BioShock Infinite", fullname: "BioShock Infinite Complete Edition",
	onDisk: true, size: 41.3,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		name: "BioShock Infinite",
		genres: ["Tir", "FPP", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Science", "Première personne", "FPS", "Tir", "Steampunk"]
	}
}, {
	name: "Blade of Darkness", fullname: "Severance: Blade of Darkness",
	onDisk: true, size: 1.4,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Jeu de rôle", "Action", "Fantasy"],
		tags: ["Action", "Fantasy", "Jeu de rôle", "Sombre", "Troisième personne", "Violent", "Gore", "Hack and Slash", "Souls-like"]
	}
}, {
	name: "Blades of Time",
	onDisk: true, size: 3.0,
	gog: {
		genres: ["Action", "Fantasy", "Jeu de rôle"],
		tags: ["Action", "Fantasy", "Jeu de rôle", "Classique", "Nudité"]
	}
}, {
	name: "Bleed 2",
	onDisk: true, size: 0.210,
	gog: {}
}, {
	name: "Bloodstained: Ritual of the Night",
	onDisk: true, size: 9.4,
	date : "2026-08-09",
	gog: {
		genres: ["Action", "Jeu de rôle", "Metroidvania"],
		tags: ["Action", "Jeu de rôle", "2D", "Exploration", "Protagoniste féminine", "Superbe bande-son", "Multijoueur", "Plateformes", "Contenu à caractère sexuel", "Nudité", "Difficile", "Crafting", "Metroidvania", "Vampire"]
	}
}, {
	name: "Bridge Constructor: The Walking Dead",
	onDisk: true, size: 0.143,
	date : "2026-08-14",
	gog: {
		genres: ["Simulation", "Construction", "Gestion"],
		tags: ["Indé", "Casse-tête", "Simulation", "Casual", "Bac-à-sable", "Construction", "Crafting", "Gestion", "Post-apocalyptique", "Physique", "Zombies"]
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
	name: "Brotato",
	onDisk: true, size: 0.148,
	date : "2026-08-14",
	gog: {
		genres: ["Action", "Roguelike", "Survie"],
		tags: ["2D", "Science fiction", "Casual", "Multijoueur", "Survie", "Roguelike", "Roguelite", "Coop locale", "Arcade", "Bullet Hell"]
	}
}, {
	name: "Brothers: A Tale of Two Sons",
	onDisk: true, size: 1.2,
	date : "2026-08-14",
	gog: {
		genres: ["Action", "Aventure", "Fantasy"],
		tags: ["Aventure", "Action", "Indé", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Casse-tête", "Casual", "Superbe bande-son", "Troisième personne", "Plateformes", "Multijoueur", "Émotionnel", "Coop locale", "Simulation de marche", "Cozy", "Court"]
	}
}, {
	name: "Brutal Legend",
	onDisk: true, size: 17.7,
	date : "2026-04-16",
	gog: {
		genres: ["Action", "Fantasy", "Stratégie"],
		tags: ["Action", "Fantasy", "Stratégie", "Atmosphère", "Classique", "Superbe bande-son", "Amusant", "Monde Ouvert", "Troisième personne", "Multijoueur", "Hack and Slash", "Stratégie en temps réél", "Beat 'em up"]
	}
}, {
	name: "Bus Simulator 21", fullname: "Bus Simulator 21 Next Stop",
	onDisk: false,
	gog: {
		genres: ["Simulation - Temps réel - Exploration"],
		tags: ["Exploration", "Simulation", "Première personne", "Gestion", "Troisième personne", "Monde Ouvert", "Multijoueur", "Temps réél", "Familial", "Relaxant", "Réaliste", "Moderne"]
	}
}, {
	name: "Call of the Sea",
	onDisk: true, size: 11.6,
	date: "2026-08-16",
	gog: {
		genres: ["Aventure", "Réflexion", "Mystère"],
		tags: ["Aventure", "Indé", "Casse-tête", "Première personne", "Protagoniste féminine", "Mystère", "Historique", "Logique", "Émotionnel", "Enquête", "Surréaliste", "Simulation de marche", "Lovecraft"]
	}
}, {
	name: "Car Mechanic Simulator 2018",
	onDisk: false,
}, {
	name: "Cave Story+",
	onDisk: true, size: 0.085,
	date : "2026-08-18",
	gog: {
		genres: ["Action", "Aventure", "Plateforme"],
		tags: ["Aventure", "Action", "Classique", "Science", "Plateformes", "Metroidvania", "Remake"]
	}
}, {
	name: "Chasm: The Rift",
	onDisk: true, size: 0.801,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Tir", "FPP", "Fantasy"],
		tags: ["Fantasy", "Atmosphère", "Science fiction", "Classique", "Première personne", "Sombre", "Violent", "Gore", "FPS", "Rétro", "Tir"]
	}
}, {
	name: "Cities: Skylines",
	onDisk: false,
	gog: {
		genres: ["Tir", "FPP", "Fantasy"],
		tags: ["Fantasy", "Atmosphère", "Science fiction", "Classique", "Première personne", "Sombre", "Violent", "Gore", "FPS", "Rétro", "Tir"]
	}
}, {
	name: "City of Brass",
	onDisk: false,
}, {
	name: "City of Gangsters",
	onDisk: false,
	gog: {
		genres: ["Simulation", "Stratégie", "Gestion"],
		tags: ["Stratégie", "Tour par tour", "Simulation", "Gestion", "Bac-à-sable", "Historique", "Gestion des resources", "Vue du dessus", "Gestion", "Génération procédurale", "Stratégie complexe", "Politique", "Crime", "Noir"]
	}
}, {
	name: "Close To The Sun",
	onDisk: true, size: 21.6,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["FPP", "SF", "Aventure"],
		tags: ["Aventure", "Science fiction", "Science", "Première personne", "Protagoniste féminine", "Horreur", "Violent", "Gore", "FPS", "Simulation de marche", "Steampunk"]
	}
}, {
	name: "Colt Canyon",
	onDisk: true, size: 0.545,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Roguelike"],
		tags: ["Aventure", "Action", "Atmosphère", "Casual", "Superbe bande-son", "Graphismes Pixel", "Violent", "Gore", "Roguelike", "Roguelite", "Génération procédurale", "Coop locale"]
	}
}, {
	name: "Control", fullname: "Control Ultimate Edition", collection: "Remedy",
	onDisk: true, size: 28.4,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "SF"],
		tags: ["Aventure", "Action", "Histoire Riche", "Atmosphère", "Science fiction", "Science", "Protagoniste féminine", "Horreur", "Troisième personne", "Horreur psychologique", "Surréaliste", "Surnaturel"]
	}
}, {
	name: "Coromon",
	onDisk: true, size: 0.934,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Aventure", "Jeu de rôle", "Exploration"],
		tags: ["Aventure", "Histoire Riche", "Jeu de rôle", "2D", "Exploration", "Tour par tour", "Graphismes Pixel", "Difficile", "JRPG", "Rétro"]
	}
}, {
	name: "Cursed to Golf",
	onDisk: true, size: 0.710,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Aventure", "Sport", "Roguelike"],
		tags: ["Aventure", "2D", "Graphismes Pixel", "Amusant", "Plateformes", "Difficile", "Roguelike", "Rétro", "Roguelite", "Dungeon Crawler", "Physique", "Sport"]
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
	onDisk: true, size: 1.3,
	gog: {
		name: "D the Game",
		genres: ["Horreur", "Aventure", "Réflexion"],
		tags: ["Aventure", "Atmosphère", "Classique", "Casse-tête", "Première personne", "Protagoniste féminine", "Sombre", "Horreur", "Fins multiples", "Logique", "Horreur psychologique", "FMV"]
	}
}, {
	name: "Daemon x Machina",
	onDisk: false
}, {
	name: "Dark Deity",
	onDisk: true, size: 0.827,
	size: "2026-08-16",
	gog: {
		name: "Dark Deity: Complete Edition",
		genres: ["Stratégie - Aventure - JRPG"],
		tags: ["Aventure", "Fantasy", "Histoire Riche", "Stratégie", "2D", "Tour par tour", "Graphismes Pixel", "JRPG"]
	}
}, {
	name: "Dark Devotion",
	onDisk: true, size: 1.4,
	date : "2026-08-05",
	gog: {
		genres: ["Action", "Aventure","Metroidvania"],
		tags: ["Aventure", "Action", "Indé", "2D", "Protagoniste féminine", "Graphismes Pixel", "Violent", "Difficile", "Gore", "Roguelike", "Metroidvania", "Souls-like"]
	}
}, {
	name: "Dark Sky",
	onDisk: true, size: 2.0,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["SF", "Stratégie", "Aventure"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Stratégie", "2D", "Science fiction", "Exploration", "Tour par tour", "JRPG", "Isométrique", "Post-apocalyptique", "RPG tactique", "Jeu de cartes", "Deckbuilding", "Party Game"]
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
	name: "Darksiders II", fullname: "Darksiders II: Deathinitive Edition", collection: "Darksiders",
	onDisk: true, size: 15.5,
	gog: {
		genres: ["Action", "Fantasy", "Jeu de rôle"],
		tags: ["Action", "Fantasy", "Histoire Riche", "Jeu de rôle", "Casse-tête", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Multijoueur", "Gore", "Hack and Slash", "Metroidvania"]
	}
}, {
	name: "Darksiders III", collection: "Darksiders",
	onDisk: true, size: 23.9,
	gog: {
		genres: ["Action", "Aventure", "Fantasy"],
		tags: ["Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "Casse-tête", "Protagoniste féminine", "Sombre", "Troisième personne", "Violent", "Gore", "Hack and Slash", "Post-apocalyptique", "Souls-like"]
	}
}, {
	name: "Darkwood",
	onDisk: true, size: 2.2,
	date : "2026-08-16",
	gog: {
		genres: ["Action", "Horreur", "Survie"],
		tags: ["Action", "Atmosphère", "Exploration", "Sombre", "Horreur", "Monde Ouvert", "Gestion des resources", "Gore", "Roguelike", "Vue du dessus", "Crafting", "Horreur et survie", "Horreur psychologique", "Lovecraft"]
	}
}, {
	name: "DARQ",
	onDisk: true, size: 1.4,
	date : "2026-08-16",
	gog: {
		genres: ["Action","Aventure","Horreur"],
		tags: ["Aventure", "Action", "Atmosphère", "Casse-tête", "Sombre", "Horreur", "Troisième personne", "Mystère", "Infiltration", "Horreur et survie", "Horreur psychologique", "Surréaliste", "Casse-tête et plateformes", "Physique", "Thriller", "Steampunk"]
	}
}, {
	name: "Day of the Tentacle", fullname: "Day of the Tentacle Remastered",
	onDisk: true, size: 4.7,
	date : "2026-04-14",
	gog: {
		genres: ["SF", "Aventure", "Point-and-click"],
		tags: ["Aventure", "Histoire Riche", "2D", "Science fiction", "Classique", "Casse-tête", "Science", "Superbe bande-son", "Graphismes Pixel", "Amusant", "Point-and-click", "Familial", "Cartoonesque", "Remake"]
	}
}, {
	name: "Deponia: The Complete Journey",
	onDisk: false
}, {
	name: "Deus Ex: Human Revolution", fullname: "Deus Ex: Human Revolution - Director's Cut",
	onDisk: true, size: 16.5,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "SF", "Jeu de rôle"],
		tags: ["Action", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Classique", "Science", "Première personne", "Superbe bande-son", "FPS", "Infiltration", "Cyberpunk", "Dystopique"]
	}
}, {
	name: "Dishonored", fullname: "Dishonored - Definitive Edition",
	onDisk: true, size: 15.4,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "FPP", "Infiltration"],
		tags: ["Action", "Histoire Riche", "Atmosphère", "Classique", "Première personne", "Sombre", "Superbe bande-son", "Choix multiples", "Violent", "Gore", "Magie", "FPS", "Infiltration", "Surnaturel", "Steampunk"]
	}
}, {
	name: "Dragon Age: Origins", fullname: "Dragon Age: Origins - Ultimate Edition",
	onDisk: true, size: 23.5,
	date : "2026-08-14",
	gog: {
		genres: ["Jeu de rôle","Aventure","Fantasy"],
		tags: ["Aventure", "Fantasy", "Histoire Riche", "Jeu de rôle", "Classique", "Protagoniste féminine", "Choix multiples", "Tactique", "Monde Ouvert", "Mature", "Fins multiples", "LGBTQ+", "Caresse de chien"]
	}
}, {
	name: "Dragonsphere",
	onDisk: true, size: 0.172,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Fantasy", "Aventure", "Point-and-click"],
		tags: ["Aventure", "Fantasy", "Classique", "Graphismes Pixel", "Point-and-click"]
	}
}, {
	name: "Duck Paradox",
	onDisk: true, size: 0.226,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Roguelike"],
		tags: ["Aventure", "Action", "Indé", "2D", "Science fiction", "Casse-tête", "Science", "Protagoniste féminine", "Graphismes Pixel", "Plateformes", "Difficile", "Roguelike", "Rétro", "Surréaliste", "Bullet Hell", "Manipulation temporelle"]
	}
}, {
	name: "Duskers",
	onDisk: true,size: 0.093,
	date : "2026-08-16",
	gog: {
		genres: ["Stratégie","SF","Survie"],
		tags: ["Indé", "Atmosphère", "Stratégie", "2D", "Science fiction", "Exploration", "Classique", "Casse-tête", "Science", "Horreur", "Tactique", "Survie", "Difficile", "Roguelike", "Espace", "Roguelite", "Génération procédurale", "Taper du texte"]
	}
}, {
	name: "Encased", fullname: "Encased: A Sci-Fi Post-Apocalyptic RPG",
	onDisk: false,
	gog: {
		genres: ["Jeu de rôle","Tour par tour","SF"],
		tags: ["Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Exploration", "Tour par tour", "Science", "Choix multiples", "Tactique", "Monde Ouvert", "Survie", "Fins multiples", "Isométrique", "Post-apocalyptique", "cRPG"]
	}
}, {
	name: "Enter the Gungeon",
	onDisk: true, size: 0.227,
	date : "2026-08-16",
	gog: {
		genres: ["Tir","Action","SF"],
		tags: ["Action", "Indé", "2D", "Science fiction", "Classique", "Graphismes Pixel", "Amusant", "Difficile", "Roguelike", "Vue du dessus", "Tir", "Roguelite", "Coop locale", "Dungeon Crawler", "Bullet Hell", "Tir à deux joysticks"]
	}
}, {
	name: "Epistory - Typing Chronicles",
	onDisk: true, size: 0.682,
	date : "2026-08-16",
	gog: {
		genres: ["Action","Aventure","Fantasy"],
		tags: ["Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "Exploration", "Classique", "Protagoniste féminine", "Superbe bande-son", "Monde Ouvert", "Magie", "Isométrique", "Vue du dessus", "Éducation", "Taper du texte"]
	}
}, {
	name: "Everspace",
	onDisk: true, size: 3.7,
	gog: {
		genres: ["Action", "Simulation", "SF"],
		tags: ["Action", "Science fiction", "Classique", "Exploration", "Simulation", "Science", "Première personne", "Superbe bande-son", "Survie", "Difficile", "Roguelike", "Espace", "Roguelite", "Vol", "Réalité virtuelle"]
	}
}, {
	name: "Evoland", fullname: "Evoland Legendary Edition",
	onDisk: true, size: 0.522,
	date : "2026-08-16",
	gog: {
		genres: ["Fantasy","Aventure","Jeu de rôle"],
		tags: ["Aventure", "Indé", "Fantasy", "Jeu de rôle", "2D", "Exploration", "Casual", "Graphismes Pixel", "Rétro", "cRPG"]
	}
}, {
	name: "Fallout", collection: "Fallout",
	onDisk: true, size: 1.0,
	sources: ["GP", "Redloved"],
	date : "2026-04-14",
	gog: {
		genres: ["Jeu de rôle", "Tour par tour", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Classique", "Exploration", "Tour par tour", "Science", "Tactique", "Monde Ouvert", "Fins multiples", "Isométrique", "Post-apocalyptique", "RPG tactique", "cRPG"]
	}
}, {
	name: "Fallout 2", collection: "Fallout",
	onDisk: true, size: 1.5,
	sources: ["GP", "Redloved"],
	date : "2026-04-14",
	gog: {
		genres: ["Jeu de rôle", "Tour par tour", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Classique", "Exploration", "Tour par tour", "Science", "Tactique", "Monde Ouvert", "Isométrique", "Post-apocalyptique", "RPG tactique", "cRPG"]
	}
}, {
	name: "Fallout 3", collection: "Fallout", fullname:"Fallout 3: Game of the Year Edition",
	onDisk: false,
	gog: {
		genres: ["Jeu de rôle","FPP","Monde ouvert"],
		tags: ["Histoire Riche", "Jeu de rôle", "Science fiction", "Classique", "Science", "Première personne", "Troisième personne", "Monde Ouvert", "Bac-à-sable", "FPS", "Post-apocalyptique"]
	}
}, {
	name: "Fallout Tactics", collection: "Fallout",
	onDisk: true, size: 3.5,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Jeu de rôle", "Tour par tour", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Classique", "Exploration", "Tour par tour", "Science", "Tactique", "Monde Ouvert", "Isométrique", "Post-apocalyptique", "RPG tactique", "cRPG"]
	}
}, {
	name: "Fantasy General",
	onDisk: true, size: 0.412,
	gog: {
		genres: ["Stratégie", "Tour par tour", "Fantasy"],
		tags: ["Fantasy", "Stratégie", "2D", "Classique", "Tour par tour", "Magie", "Guerre"]
	}
}, {
	name: "F.I.S.T.: Forged in Shadow Torch",
	onDisk: false,
}, {
	name: "First Racer",
	onDisk: true, size: 0.462,
	date : "2026-08-15",
	gog: {
		genres: ["Course", "Arcade", "Touring"],
		tags: ["Indé", "Atmosphère", "Casual", "Troisième personne", "Familial", "Relaxant", "Rétro", "Arcade", "Multijoueur local", "Course", "Touring"]
	}
}, {
	name: "Flashback",
	onDisk: true, size: 0.169,
	date : "2026-08-05",
	gog: {
		genres: ["Action", "SF", "Aventure"],
		tags: ["Aventure", "Action", "Atmosphère", "2D", "Science fiction", "Science", "Plateformes", "Cyberpunk"]
	}
}, {
	name: "Frostpunk",
	onDisk: false,
	gog: {
		genres: ["Stratégie","Simulation","Survie"],
		tags: ["Indé", "Atmosphère", "Stratégie", "Simulation", "Sombre", "Superbe bande-son", "Choix multiples", "Gestion", "Survie", "Gestion des resources", "Difficile", "Construction de base", "Post-apocalyptique", "Construction de villes", "Horreur et survie", "Steampunk"]
	}
}, {
	name: "FTL: Faster than Light",
	onDisk: true, size: 0.458,
	gog: {}
}, {
	name: "Full Throttle", fullname: "Full Throttle Remastered",
	onDisk: true, size: 4.7,
	gog: {
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Graphismes Pixel", "Amusant", "Point-and-click", "Enquête", "Enquête-mystère", "Court", "Remake"]
	}
}, {
	name: "Gamedec",  fullname: "Gamedec - Definitive Edition",
	onDisk: false,
	gog: {
		genres: ["Jeu de rôle","Aventure","SF"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Exploration", "Science", "Choix multiples", "Mystère", "Fins multiples", "Isométrique", "Enquête", "Vous êtes le héro", "Cyberpunk", "cRPG", "Noir", "Basé sur du texte"]
	}
}, {
	name: "Geneforge 1 - Mutagen",
	onDisk: true, size: 0.152,
	date : "2026-08-16",
	gog: {
		genres: ["Jeu de rôle","Tour par tour","Fantasy"],
		tags: ["Fantasy", "Histoire Riche", "Jeu de rôle", "Exploration", "Tour par tour", "Choix multiples", "Fins multiples", "Isométrique", "Dungeon Crawler", "cRPG", "Remake"]
	}
}, {
	name: "Ghost of a Tale",
	onDisk: true, size: 2.9,
	sources: ["Redloved"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Fantasy", "Jeu de rôle"],
		tags: ["Action", "Indé", "Fantasy", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Exploration", "Superbe bande-son", "Horreur", "Amusant", "Monde Ouvert", "Troisième personne", "Médieval", "Infiltration"]
	}
}, {
	name: "Ghost Song",
	onDisk: true, size: 1.5,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Jeu de rôle", "Tour par tour", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Classique", "Exploration", "Tour par tour", "Science", "Tactique", "Monde Ouvert", "Isométrique", "Post-apocalyptique", "RPG tactique", "cRPG"]
	}
}, {
	name: "Ghostrunner",
	onDisk: true, size: 20.5,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "FPP", "SF"],
		tags: ["Action", "Science fiction", "Science", "Première personne", "Superbe bande-son", "Violent", "Difficile", "Gore", "FPS", "Hack and Slash", "Post-apocalyptique", "Cyberpunk", "Combat"]
	}
}, {
	name: "Giants: Citizen Kabuto",
	onDisk: true, size: 1.1,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "TPP", "SF"],
		tags: ["Action", "Fantasy", "Science fiction", "Classique", "Science", "Amusant", "Monde Ouvert", "Troisième personne", "Multijoueur", "Nudité", "Violent", "Gestion des resources", "FPS", "Construction de base", "Réaliste", "Stratégie en temps réél"]
	}
}, {
	name: "Golden Light",
	onDisk: false,
}, {
	name: "Grandia 2", fullname: "Grandia II Anniversary Edition",
	onDisk: true, size: 2.0,
	gog: {
		genre: ["Aventure", "RPG"]
	}
}, {
	name: "GRIP",
	onDisk: true, size: 5.2,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Course", "Action", "SF"],
		tags: ["Action", "Science fiction", "Science", "Multijoueur", "Multijoueur local", "Course", "Écran partagé", "Réalité virtuelle"]
	}
}, {
	name: "GRIS",
	onDisk: true, size: 1.1,
	date : "2026-08-09",
	gog: {
		genres: ["Plateforme", "Aventure", "Réflexion"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Atmosphère", "2D", "Exploration", "Casse-tête", "Casual", "Protagoniste féminine", "Superbe bande-son", "Plateformes", "Relaxant", "Logique", "Surréaliste", "Casse-tête et plateformes", "Simulation de marche", "Cozy"]
	}
}, {
	name: "Guild of Dungeoneering",
	onDisk: true, size: 0.508,
	date : "2026-08-16",
	gog: {
		genres: ["Jeu de rôle","Tour par tour","Fantasy"],
		tags: ["Fantasy", "Jeu de rôle", "2D", "Tour par tour", "Superbe bande-son", "Amusant", "Difficile", "Familial", "Roguelike", "Roguelite", "Dungeon Crawler", "Jeu de cartes", "Deckbuilding"]
	}
}, {
	name: "Hell is Other Demons",
	onDisk: true, size: 0.149,
	date : "2026-08-16",
}, {
	name: "Hell Pie",
	onDisk: true, size: 4.3,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Comédie"],
		tags: ["Aventure", "Action", "Amusant", "Monde Ouvert", "Troisième personne", "Plateformes", "Mature", "Contenu à caractère sexuel", "Nudité", "Violent", "Gore", "Adulte", "Comédie", "Humour noir"]
	}
}, {
	name: "Hero's Hour",
	onDisk: true, size: 0.322,
	sources: ["Redloved"],
	date : "2026-04-14",
	gog: {
		genres: ["Jeu de rôle", "Tour par tour"],
		tags: ["Indé", "Fantasy", "Atmosphère", "Jeu de rôle", "2D", "Tour par tour", "Graphismes Pixel", "Tactique", "Gestion", "Gestion des resources", "Génération procédurale", "Coop locale", "Stratégie complexe", "4X", "Auto Battler"]
	}
}, {
	name: "Hive Jump 2: Survivors",
	onDisk: true, size: 0.168,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Roguelike", "Survie"],
		tags: ["Action", "Indé", "2D", "Science fiction", "Casual", "Graphismes Pixel", "Survie", "Roguelike", "Vue du dessus", "Espace", "Tir", "Roguelite", "Combat", "Bullet Hell", "Tir à deux joysticks"]
	}
}, {
	name: "Horizon Chase Turbo",
	onDisk: true, size: 0.552,
	date : "2026-08-16",
}, {
	name: "In Sound Mind",
	onDisk: false,
	gog: {
		genres: ["Horreur", "Aventure" ,"Survie"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Atmosphère", "Exploration", "Casse-tête", "Première personne", "Sombre", "Horreur", "Plateformes", "Survie", "FPS", "Horreur psychologique", "Casse-tête et plateformes", "Objets cachés", "Chats"]
	}
}, {
	name: "Iratus: Lord of the Dead",
	onDisk: false,
	gog: {
		genres: ["Jeu de rôle", "Tour par tour", "Fantasy"],
		tags: ["Indé", "Fantasy", "Jeu de rôle", "2D", "Tour par tour", "Sombre", "Violent", "Difficile", "Gore", "Roguelike", "Roguelite", "Dungeon Crawler", "Lovecraft"]
	}
}, {
	name: "Ironcast",
	onDisk: true, size: 0.278,
	date: "2026-08-16",
}, {
	name: "Jotun", fullname: "Jotun: Valhalla Edition",
	onDisk: false,
	gog: {
		genres: ["Jeu de rôle","Action","Fantasy"],
		tags: ["Action", "Indé", "Fantasy", "Histoire Riche", "Atmosphère", "Jeu de rôle", "2D", "Exploration", "Protagoniste féminine", "Superbe bande-son", "Difficile", "Isométrique", "Souls-like", "Mythologie", "Vikings"]
	}
}, {
	name: "Kerbal Space Program",
	onDisk: true, size: 4.3,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Simulation", "SF", "Construction"],
		tags: ["Indé", "Science fiction", "Exploration", "Simulation", "Science", "Amusant", "Monde Ouvert", "Bac-à-sable", "Difficile", "Espace", "Construction", "Physique", "Éducation"]
	}
}, {
	name: "Kingdom: New Lands",
	onDisk: false, size: 0.298,
	date: "2026-08-16",
	gog: {
		genres: ["Stratégie","Simulation","Fantasy"],
		tags: ["Indé", "Fantasy", "Atmosphère", "Stratégie", "2D", "Exploration", "Classique", "Simulation", "Graphismes Pixel", "Superbe bande-son", "Monde Ouvert", "Survie", "Roguelike", "Construction", "Médieval", "Construction de base", "Tower Defense"]
	}
}, {
	name: "L'amazone Queen",
	onDisk: true, size: 0.089,
	date : "2026-08-02",
	gog: {
		genres: ["Aventure", "Point-and-click", "Réflexion"],
		tags: ["Aventure", "Histoire Riche", "2D", "Classique", "Casse-tête", "Choix multiples", "Point-and-click", "Logique", "Casse-tête et plateformes"]
	}
}, {
	name: "Lacuna", fullname : "Lacuna A Sci-Fi Noir Adventure",
	onDisk: true, size: 0.575,
	date : "2026-08-09",
	gog: {
		genres: ["Aventure", "Aventure","Enquête-mystère"],
		tags: ["Aventure", "Indé", "Histoire Riche", "2D", "Science fiction", "Science", "Graphismes Pixel", "Choix multiples", "Fins multiples", "Enquête", "Cyberpunk", "Enquête-mystère", "Thriller", "Crime", "Basé sur du texte", "Noir"]
	}
}, {
	name: "Les Chevaliers de Baphomet", fullname: "Les Chevaliers de Baphomet : The Director's Cut", collection: "Broken Sword",
	onDisk: true, size: 3.1,
	gog: {
		name: "Broken Sword: Director's Cut!",
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "2D", "Classique", "Casse-tête", "Casual", "Amusant", "Troisième personne", "Point-and-click", "Mystère", "Enquête", "Enquête-mystère", "Objets cachés", "Remake"]
	}
}, {
	name: "Les Chevaliers de Baphomet 2", fullname: " Les Chevaliers de Baphomet II : Les Boucliers de Quetzalcoatl", collection: "Broken Sword",
	onDisk: true, size: 2.5,
	gog: {
		name: "broken_sword_2__the_smoking_mirror!",
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Atmosphère", "2D", "Classique", "Casse-tête", "Amusant", "Point-and-click", "Mystère", "Cartoonesque", "Enquête", "Enquête-mystère", "Objets cachés", "Remake"]
	}
}, {
	name: "Leisure Suit Larry 7", fullname: "Leisure Suit Larry : Drague en Haute Mer !", collection: "Leisure Suit Larry",
	onDisk: true, size: 0.926,
	gog: {
		name: "Leisure Suit Larry: Love for Sail!",
		genres: ["Aventure", "Point-and-click", "Réflexion"],
		tags: ["Aventure", "Classique", "Casse-tête", "Point-and-click", "Mature", "Contenu à caractère sexuel", "Nudité", "Logique", "Adulte"]
	}
}, {
	name: "Leisure Suit Larry 8", fullname: "Leisure Suit Larry - Wet Dreams Don't Dry", collection: "Leisure Suit Larry",
	onDisk: true, size: 1.1,
	date : "2026-08-05",
	gog: {
		genres: ["Moderne", "Point-and-click", "Aventure"],
		tags: ["Aventure", "Histoire Riche", "2D", "Casse-tête", "Casual", "Superbe bande-son", "Amusant", "Point-and-click", "Mature", "Contenu à caractère sexuel", "Nudité", "Adulte", "Cartoonesque", "LGBTQ+", "Moderne"]
	}
}, {
	name: "Leisure Suit Larry 9", fullname: "Leisure Suit Larry - Wet Dreams Dry Twice", collection: "Leisure Suit Larry",
	onDisk: true, size: 1.2,
	date : "2026-08-05",
	gog: {
		genres: ["Moderne", "Point-and-click", "Aventure"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "2D", "Casse-tête", "Casual", "Amusant", "Point-and-click", "Mature", "Contenu à caractère sexuel", "Nudité", "Adulte", "Rétro", "Cartoonesque", "Romance", "LGBTQ+", "Moderne"]
	}
}, {
	name: "Limbo",
	onDisk: true, size: 0.162,
	date : "2026-08-18",
}, {
	name: "Lure of the Tempress",
	onDisk: true, size: 0.070,
	date : "2026-08-02",
	gog: {
		genres: ["Fantasy","Aventure","Point-and-click"],
		tags: ["Aventure", "Fantasy", "2D", "Classique", "Sombre", "Point-and-click", "Médieval"]
	}
}, {
	name: "Mafia 2", fullname: "Mafia II: Definitive Edition",
	onDisk: true, size: 46.6,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Monde ouvert"],
		tags: ["Aventure", "Action", "Histoire Riche", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Mature", "Contenu à caractère sexuel", "Nudité", "Violent", "Gore", "Crime", "Noir"]
	}
}, {
	name: "Maytroid", fullname: "Maytroid. I swear it's a nice game too",
	onDisk: true, size: 0.321,
	date : "2026-08-09",
	gog: {
		genres: ["Adventure", "Indie", "Platform"],
		tags: []
	}
}, {
	name: "Might and Magic 7", fullname: "Might and Magic 7: For Blood and Honor",
	onDisk: true, size: 1.1,
	gog: {
		genres: ["Jeu de rôle", "FPP", "Fantasy"],
		tags: ["Fantasy", "Jeu de rôle", "Classique", "Exploration", "Tour par tour", "Première personne", "Gestion", "Monde Ouvert", "Magie", "FPS", "cRPG"]
	}
}, {
	name: "Minit",
	onDisk: true, size: 0.101,
	date : "2026-08-16",
	gog: {
		genres: ["Action","Aventure","Mystère"],
		tags: ["Aventure", "Action", "2D", "Exploration", "Casse-tête", "Graphismes Pixel", "Superbe bande-son", "Amusant", "Mystère", "Vue du dessus", "Metroidvania", "Court"]
	}
}, {
	name: "MKD",
	onDisk: true, size: 0.090,
	sources: ["DK"],
	gog: { genres: [], tags: [] }
}, {
	name: "Model Builder",
	onDisk: false,
}, {
	name: "Monster Train",
	onDisk: true, size: 0.684,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Stratégie", "Roguelike", "Jeu de cartes"],
		tags: ["Fantasy", "Stratégie", "Choix multiples", "Difficile", "Roguelike", "Magie", "Roguelite", "Génération procédurale", "Jeu de cartes", "Deckbuilding"]
	}
}, {
	name: "Moonscars",
	onDisk: true, size: 0.273,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Plateforme", "Metroidvania"],
		tags: ["Action", "Indé", "2D", "Protagoniste féminine", "Graphismes Pixel", "Plateformes", "Hack and Slash", "Combat", "Metroidvania", "Souls-like"]
	}
}, {
	name: "Mothergunship",
	onDisk: false,
	gog: {
		genres: ["Action","FPP","Roguelike"],
		tags: ["Action", "Science", "Première personne", "Difficile", "Roguelike", "FPS", "Roguelite", "Crafting", "Génération procédurale", "Bullet Hell", "Perma Death"]
	}
}, {
	name: "Mud Runner",
	onDisk: true, size: 1.3,
	date : "2026-08-09",
}, {
	name: "Murder by Numbers",
	onDisk: false, size: 0.511,
	date : "2026-08-16",
	gog: {
		genres: ["Aventure","Mystère","Roman visuel"],
		tags: ["Aventure", "Indé", "Histoire Riche", "2D", "Casse-tête", "Protagoniste féminine", "Mystère", "Roman graphique", "Logique", "Cartoonesque", "Enquête", "LGBTQ+", "Crime"]
	}
}, {
	name: "Never Alone",
	onDisk: false,
	gog: {
		name: "Never Alone Arctic Collection",
		genres: ["Plateforme","Aventure","Réflexion"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Atmosphère", "2D", "Casse-tête", "Casual", "Protagoniste féminine", "Superbe bande-son", "Plateformes", "OST", "Logique", "Coop locale", "Casse-tête et plateformes", "Nature", "Court"]
	}
}, {
	name: "Obduction",
	onDisk: false,
	gog: {
		genres: ["FPP","Aventure","Réflexion"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Exploration", "Classique", "Casse-tête", "Casual", "Science", "Première personne", "Choix multiples", "Monde Ouvert", "Mystère", "Point&Click", "Survie", "FPS", "Logique", "Surréaliste", "Simulation de marche", "FMV", "Réalité virtuelle"]
	}
}, {
	name: "Ori and the Blind Forest", fullname: "Ori and the Blind Forest: Definitive Edition", collection: "Ori",
	onDisk: true, size: 4.9,
	gog: {
		genres: ["Action", "Aventure", "Plateforme"],
		tags: ["Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "2D", "Classique", "Casse-tête", "Superbe bande-son", "Monde Ouvert", "Plateformes", "Difficile", "Familial", "Metroidvania"]
	}
}, {
	name: "Ori and the Will of the Wisps", collection: "Ori",
	onDisk: true, size: 4.4,
	date : "2026-08-09",
}, {
	name: "Out of Line",
	onDisk: true, size: 0.336,
	date : "2026-08-16",
	gog: {
		genres: ["Plateforme","Aventure","Réflexion"],
		tags: ["Aventure", "Indé", "2D", "Casse-tête", "Plateformes", "Logique", "Casse-tête et plateformes"]
	}
}, {
	name: "Outcast", fullname: "Outcast - Second Contact",
	onDisk: true, size: 5.8,
	gog: {
		genres: ["Action", "Aventure", "SF"],
		tags: ["Aventure", "Action", "Histoire Riche", "Science fiction", "Exploration", "Science", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Remake"]
	}
}, {
	name: "Overcooked!", fullname: "Overcooked: Gourmet Edition", collection :"Overcooked",
	onDisk: true, size: 0.317,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Simulation", "Action", "Comédie"],
		tags: ["Action", "Indé", "Classique", "Simulation", "Casual", "Superbe bande-son", "Amusant", "Difficile", "Familial", "Coop locale", "Multijoueur local", "Comédie", "Cuisine"]
	}
}, {
	name: "Overcooked! 2", collection :"Overcooked",
	onDisk: false,
	gog: {
		genres: ["Simulation", "Action", "Comédie"],
		tags: ["Action", "Simulation", "Casual", "Superbe bande-son", "Amusant", "Multijoueur", "Difficile", "Familial", "Coop locale", "Multijoueur local", "Comédie", "Cuisine"]
	}
}, {
	name: "Paradigm",
	onDisk: false,
	gog: {
		genres: ["SF","Aventure","Réflexion"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Atmosphère", "2D", "Science fiction", "Casse-tête", "Science", "Superbe bande-son", "Amusant", "Point&Click", "Logique", "Surréaliste"]
	}
}, {
	name: "Phantasmagoria",
	onDisk: true, size: 3.5,
	sources: ["DK"],
	date : "2026-05-07",
	gog: {
		genres: ["TPP", "Horreur", "Aventure"],
		tags: ["Aventure", "Classique", "Protagoniste féminine", "Sombre", "Horreur", "Troisième personne", "Mystère", "Point-and-click", "Gore", "Horreur psychologique", "FMV", "Caresse de chien"]
	}
}, {
	name: "Phantasmagoria 2", fullname: "Phantasmagoria 2: A Puzzle of Flesh",
	onDisk: true, size: 2.5,
	sources: ["DK"],
	gog: {
		name: "Phantasmagoria 2",
		genres: ["TPP", "Horreur", "Aventure"],
		tags: ["Aventure", "Classique", "Casse-tête", "Sombre", "Horreur", "Troisième personne", "Point-and-click", "Nudité", "Gore", "Horreur psychologique", "LGBTQ+", "FMV"]
	}
},  {
	name: "Pine",
	onDisk: false,
	gog: {
		genres: ["Action","Aventure","Monde ouvert"],
		tags: ["Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "Exploration", "Superbe bande-son", "Troisième personne", "Monde Ouvert", "Bac-à-sable", "Vous êtes le héro", "Nature"]
	}
}, {
	name: "Portal",
	onDisk: true, size: 2.5,
	date : "2026-08-09"
},  {
	name: "Prey",
	onDisk: false,
	gog: {
		genres: ["Action","FPP","SF"],
		tags: ["Action", "Histoire Riche", "Atmosphère", "Science fiction", "Exploration", "Science", "Première personne", "Superbe bande-son", "Horreur", "Monde Ouvert", "FPS", "Espace", "Infiltration", "Horreur et survie", "Horreur psychologique"]
	}
}, {
	name: "Prince of Persia 2003", fullname: "Prince of Persia : Les Sables du temps", collection: "Prince of Persia",
	onDisk: true, size: 1.3,
	gog: {
		name: "Prince of Persia: The Sands of Time",
		genres: ["Action", "Aventure", "Fantasy"],
		tags: ["Aventure", "Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Troisième personne", "Plateformes", "Hack and Slash", "Casse-tête et plateformes", "Manipulation temporelle"]
	}
}, {
	name: "Prince of Persia 2004", fullname: "Prince of Persia : L'Âme du guerrier", collection: "Prince of Persia",
	onDisk: true, size: 3.3,
	gog: {
		name: "Prince of Persia: Warrior Within",
		genres: ["Action", "TPP", "Fantasy"],
		tags: ["Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Casse-tête", "Sombre", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Plateformes", "Gore", "Hack and Slash", "Manipulation temporelle"]
	}
}, {
	name: "Prince of Persia 2005", fullname: "Prince of Persia : Les Deux Royaumes", collection: "Prince of Persia",
	onDisk: true, size: 1.4,
	gog: {
		name: "Prince of Persia: The Two Thrones",
		genres: ["Action", "TPP", "Fantasy"],
		tags: ["Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Troisième personne", "Plateformes", "Hack and Slash", "Infiltration", "Manipulation temporelle"]
	}
}, {
	name: "Prince of Persia 2008", fullname: "Prince of Persia", collection: "Prince of Persia",
	onDisk: true, size: 4.3,
	gog: {
		name: "Prince of Persia",
		genres: ["Action", "TPP", "Fantasy"],
		tags: ["Action", "Fantasy", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Plateformes", "Relaxant", "Hack and Slash", "Romance"]
	}
}, {
	name: "Prison Architect",
	onDisk: true, size: 1.1,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Simulation", "Temps réel", "Gestion"],
		tags: ["2D", "Simulation", "Gestion", "Bac-à-sable", "Temps réél", "Gestion des resources", "Vue du dessus", "Construction", "Gestion", "Construction de base", "Construction de villes", "Moderne"]
	}
}, {
	name: "Pumpkin Jack",
	onDisk: true, size: 2.2,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Plateforme"],
		tags: ["Aventure", "Action", "Fantasy", "2D", "Casse-tête", "Troisième personne", "Plateformes", "Cartoonesque"]
	}
}, {
	name: "Relicta",
	onDisk: false,
	gog: {
		genres: ["Action", "Aventure", "Réflexion"],
		tags: ["Aventure", "Action", "Histoire Riche", "Science fiction", "Exploration", "Casse-tête", "Casual", "Science", "Première personne", "Protagoniste féminine", "Logique", "Casse-tête et plateformes", "Physique"]
	}
}, {
	name: "Return of the Obra Dinn",
	onDisk: true, size: 0.928,
	gog: {
		genres: ["FPP", "Aventure", "Mystère"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Atmosphère", "Casse-tête", "Première personne", "Superbe bande-son", "Horreur", "Mystère", "Historique", "Violent", "Difficile", "Fins multiples", "FPS", "Simulation de marche", "Noir", "Pirates", "Naval"]
	}
}, {
	name: "RIOT - Civil Unrest",
	onDisk: true, size: 1.1,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Stratégie", "Simulation", "Moderne"],
		tags: ["Stratégie", "2D", "Simulation", "Graphismes Pixel", "Multijoueur", "Historique", "Violent", "Stratégie en temps réél", "Moderne", "Crime"]
	}
}, {
	name: "Rise of Industry",
	onDisk: true, size: 0.866,
	date : "2026-08-16",
	gog: {
		genres: ["Stratégie","Simulation","Gestion"],
		tags: ["Stratégie", "Simulation", "Gestion", "Bac-à-sable", "Gestion des resources", "Isométrique", "Construction de base", "Gestion", "Construction de villes", "Commerce"]
	}
}, {
	name: "Rising Hell",
	onDisk: true, size: 0.148,
	date : "2026-08-16",
	gog: {
		genres: ["Action","Roguelike"],
		tags: ["Action", "Fantasy", "Plateformes", "Gore", "Roguelike", "Roguelite", "Génération procédurale", "Bullet Hell", "Beat 'em up"]
	}
}, {
	name: "Road Redemption",
	onDisk: false,
}, {
	name: "Rogue Legacy",
	onDisk: true, size: 0.154,
	date: "2026-08-16",
	gog: {
		genres: ["Action","Plateforme","Jeu de rôle"],
		tags: ["Action", "Indé", "Fantasy", "Jeu de rôle", "2D", "Exploration", "Classique", "Graphismes Pixel", "Plateformes", "Difficile", "Roguelike", "Médieval", "Roguelite", "Metroidvania"]
	}
}, {
	name: "Runaway: A Road Adventure", collection: "Runaway",
	onDisk: true, size: 1.6,
	gog: {
		genres: ["Action", "Aventure", "Enquête-mystère"],
		tags: ["Aventure", "Action", "Classique", "Enquête", "Enquête-mystère"]
	}
}, {
	name: "Runaway 2: The Dream of the Turtle", collection: "Runaway",
	onDisk: true, size: 3.6,
	gog: {
		genres: ["Action", "Aventure", "Enquête-mystère"],
		tags: ["Aventure", "Action", "Histoire Riche", "2D", "Classique", "Casse-tête", "Casual", "Superbe bande-son", "Amusant", "Point-and-click", "Mystère", "Cartoonesque", "Enquête", "Enquête-mystère"]
	}
}, {
	name: "Runaway 3: A Twist of Fate", collection: "Runaway",
	onDisk: true, size: 5.6,
	gog: {
		genres: ["Action", "Aventure", "Enquête-mystère"],
		tags: ["Aventure", "Action", "Classique", "Enquête", "Enquête-mystère"]
	}
}, {
	name: "Saints Row: The Third", fullname: "Saints Row: The Third Remastered",
	onDisk: true, size: 44.9,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "TPP", "Moderne"],
		tags: ["Action", "Classique", "Troisième personne", "Moderne"]
	}
}, {
	name: "Saints Row IV: Re-Elected",
	onDisk: false,
	gog: {
		genres: ["Action","TPP","Monde ouvert"],
		tags: ["Action", "Classique", "Troisième personne", "Monde Ouvert"]
	}
}, {
	name: "Sam & Max Save the World", collection: "Sam & Max",
	onDisk: true, size: 0.927,
	date : "2026-08-09",
	gog: {
		genres: ["Aventure","Point-and-click","Enquête-mystère"],
		tags: ["Aventure", "Casse-tête", "Troisième personne", "Point-and-click", "Cartoonesque", "Enquête", "LGBTQ+", "Enquête-mystère", "Remake", "Chien"]
	}
}, {
	name: "Sam & Max: Beyond Time and Space", collection: "Sam & Max",
	onDisk: true, size: 1.3,
	date : "2026-08-09",
	gog: {
		genres: ["Aventure","Point-and-click","Enquête-mystère"],
		tags: ["Aventure", "Point-and-click", "Enquête", "Enquête-mystère"]
	}
}, {
	name: "Saturnalia",
	onDisk: false,
	gog: {
		genres: ["Horreur","Aventure","Survie"],
		tags: ["Aventure", "Atmosphère", "Exploration", "Horreur", "Troisième personne", "Monde Ouvert", "Mystère", "Survie", "Fins multiples", "Enquête", "Horreur et survie", "Enquête-mystère", "Lovecraft", "Thriller"]
	}
}, {
	name: "Scorn",
	onDisk: true, size: 18.6,
	sources: ["GP", "Redloved"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Horreur"],
		tags: ["Aventure", "Action", "Indé", "Atmosphère", "Science fiction", "Première personne", "Sombre", "Horreur", "Contenu à caractère sexuel", "Nudité", "Violent", "Gore", "Horreur psychologique", "Horreur et survie", "Surréaliste", "Lovecraft", "Steampunk"]
	}
}, {
	name: "Second Extinction",
	onDisk: false,
}, {
	name: "Secret Files 1", fullname: "Secret Files: Tunguska", collection: "Secret Files",
	onDisk: true, size: 2.7,
	date : "2026-04-14",
	gog: {
		genres: [],
		tags: ["Aventure", "Classique", "Casse-tête", "Protagoniste féminine", "Mystère", "Point-and-click", "Moderne"]
	}
}, {
	name: "Secret Files 2", fullname: "Secret Files 2: Puritas Cordis", collection: "Secret Files",
	onDisk: true, size: 2.1,
	date : "2026-04-14",
	gog: {
		genres: ["Moderne", "Aventure", "Point-and-click"],
		tags: ["Aventure", "Classique", "Protagoniste féminine", "Point-and-click", "Moderne"]
	}
}, {
	name: "Secret Files 3", collection: "Secret Files",
	onDisk: true, size: 2.3,
	date : "2026-04-14",
	gog: {
		genres: ["Moderne", "Aventure", "Point-and-click"],
		tags: ["Aventure", "Classique", "Protagoniste féminine", "Point-and-click", "Moderne"]
	}
}, {
	name: "Secret Files: Sam Peters", collection: "Secret Files",
	onDisk: true, size: 0.765,
	date : "2026-04-14",
	gog: {
		genres: ["Moderne", "Aventure", "Point-and-click"],
		tags: ["Aventure", "Classique", "Protagoniste féminine", "Point-and-click", "Moderne"]
	}
}, {
	name: "Shadow Tactics: Blades of the Shogun - Aiko's Choice",
	onDisk: false,
	gog: {
		genres: ["Stratégie","Temps réel","Infiltration"],
		tags: ["Indé", "Atmosphère", "Stratégie", "Casse-tête", "Superbe bande-son", "Tactique", "Troisième personne", "Historique", "Survie", "Violent", "Temps réél", "Difficile", "Isométrique", "Stratégie en temps réél", "Infiltration", "Ninja"]
	}
}, {
	name: "Shogun Showdown",
	onDisk: true, size: 0.238,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Stratégie", "Tour par tour", "Roguelike"],
		tags: ["Stratégie", "2D", "Tour par tour", "Graphismes Pixel", "Tactique", "Roguelike", "Jeu de cartes", "Deckbuilding", "Ninja"]
	}
}, {
	name: "Showgunners",
	onDisk: true, size: 10.8,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Stratégie", "Tour par tour", "Tactique"],
		tags: ["Stratégie", "Atmosphère", "Exploration", "Tour par tour", "Sombre", "Choix multiples", "Tactique", "Vue du dessus", "Dystopique"]
	}
}, {
	name: "Sir Whoopass: Immortal Death",
	onDisk: true, size: 11.1,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action, Aventure, Combat"],
		tags: ["Aventure", "Action", "Indé", "Fantasy", "Histoire Riche", "Exploration", "Amusant", "Troisième personne", "Hack and Slash", "Combat", "Loups-garous"]
	}
}, {
	name: "Snakebird Complete",
	onDisk: true, size: 0.090,
	date : "2026-08-16",
}, {
	name: "SOMA",
	onDisk: true, size: 24.5,
	gog: {
		genres: ["FPP", "Horreur", "Aventure"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Exploration", "Casse-tête", "Science", "Première personne", "Sombre", "Horreur", "Mystère", "FPS", "Infiltration", "Horreur psychologique", "Horreur et survie", "Simulation de marche", "Robots", "Philosophique", "Sous l'eau"]
	}
}, {
	name: "Space Quest 6",
	onDisk: true, size: 1.2,
	sources: ["DK"],
	gog: { genres: [], tags: [] }
}, {
	name: "Slipstream",
	date : "2026-08-09",
	onDisk: true, size: 0.159,
	gog: {
		genres: ["Course","Arcade", "Touring"],
		tags: ["Indé", "Casual", "Graphismes Pixel", "Superbe bande-son", "Arcade", "Multijoueur local", "Course", "Touring"]
	}
}, {
	name: "SPORE Collection",
	onDisk: true, size: 5.6,
	gog: {
		genres: ["Stratégie", "Temps réel", "Fantasy"],
		tags: ["Fantasy", "Stratégie", "Classique", "Temps réél"]
	}
}, {
	name: "STAR WARS: X-Wing Alliance",
	onDisk: true, size: 0.581,
	sources: ["Redloved"],
	date : "2026-04-14",
	gog: {
		genres: ["Tir", "Simulation", "SF"],
		tags: ["Science fiction", "Classique", "Simulation", "Science", "Espace", "Tir", "Vol"]
	}
}, {
	name: "Subnautica",
	date : "2026-08-09",
	onDisk: true, size: 3.6,
	gog: {
		genres: [],
		tags: []
	}
}, {
	name: "Supraland",
	onDisk: false,
}, {
	name: "Surviving the Aftermath",
	onDisk: false,
	gog: {
		genres: ["Stratégie","Gestion" , "Survie"],
		tags: ["Stratégie", "Gestion", "Survie", "Guerre", "Construction de base", "Gestion", "Post-apocalyptique", "Construction de villes"]
	}
}, {
	name: "Sonic Adventure DX",
	date : "2026-08-09",
	onDisk: true, size: 1.0,
	gog: {
		genres: [],
		tags: []
	}
}, {
	name: "Syberia", collection: "Syberia",
	onDisk: true, size: 1.2,
	gog: {
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Superbe bande-son", "Troisième personne", "Point-and-click", "Mystère", "Logique", "Émotionnel", "Enquête", "Enquête-mystère", "Objets cachés", "Steampunk"]
	}
},  {
	name: "Syberia 2", collection: "Syberia",
	onDisk: true, size: 1.5,
	gog: {
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Superbe bande-son", "Troisième personne", "Point-and-click", "Mystère", "Logique", "Émotionnel", "Enquête", "Enquête-mystère", "Objets cachés", "Steampunk"]
	}
}, {
	name: "Syberia 3", fullname: "Syberia 3: The Complete Journey",
	onDisk: true, size: 20.6,
	gog: {
		genres: ["TPP", "Fantasy", "Aventure"],
		tags: ["Aventure", "Fantasy", "Histoire Riche", "Atmosphère", "Exploration", "Casse-tête", "Protagoniste féminine", "Troisième personne", "Point-and-click", "Mystère", "Logique", "Émotionnel", "Enquête", "Objets cachés", "Steampunk"]
	}
}, {
	name: "Tandem: A Tale of Shadows",
	onDisk: false,
	gog: {
		genres: ["Plateforme","Aventure","Réflexion"],
		tags: ["Aventure", "Indé", "Fantasy", "2D", "Casse-tête", "Protagoniste féminine", "Mystère", "Plateformes", "Vue du dessus", "Logique", "Enquête", "Casse-tête et plateformes"]
	}
}, {
	name: "The Dungeon of Naheulbeuk: The Amulet of Chaos",
	onDisk: true, size: 9.1,
	date: "2026-08-16",
	gog: {
		genres: ["Jeu de rôle","Tour par tour","Fantasy"],
		tags: ["Fantasy", "Jeu de rôle", "Tour par tour", "Tactique", "Troisième personne", "Contenu à caractère sexuel", "Dungeon Crawler"]
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
	onDisk: true, size: 1.8,
	gog: {
		genres: ["Jeu de rôle", "Aventure", "Monde ouvert"],
		tags: ["Aventure", "Fantasy", "Jeu de rôle", "Classique", "Première personne", "Monde Ouvert", "Troisième personne", "Bac-à-sable", "Magie", "Médieval"]
	}
}, {
	name: "The Elder Scrolls IV: Oblivion", fullname: "The Elder Scrolls IV: Oblivion - GOTY Edition Deluxe", collection: "The Elder Scrolls",
	onDisk: true, size: 5.6,
	gog: {
		name: "Elder Scrolls IV: Oblivion - Game of the Year Edition Deluxe The",
		genres: ["Jeu de rôle", "Aventure", "Fantasy"],
		tags: ["Aventure", "Fantasy", "Jeu de rôle", "Classique"]
	}
}, {
	name: "The Falconeer",
	onDisk: true, size: 0.962,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Combat", "Monde ouvert"],
		tags: ["Action", "Fantasy", "Exploration", "Science", "Monde Ouvert", "Troisième personne", "Guerre", "Militaire", "Combat", "Vol", "Pirates", "Sous terre"]
	}
}, {
	name: "The Forest Quartet",
	onDisk: true, size: 0.862,
	date : "2026-08-16",
}, {
	name: "The Gunk",
	onDisk: true, size: 6.6,
	sources: ["Shionn", "GP"],
	gog: {
		genres: ["Action", "Adventure", "Exploration"],
		tags: ["Adventure", "Action", "Story Rich", "Atmospheric", "Sci-fi", "Exploration", "Female Protagonist", "Third Person", "Family Friendly", "Relaxing", "LGBTQ+", "Metroidvania", "Nature"]
	}
}, {
	name: "The Lion's Song",
	onDisk: true, size: 0.358,
	date: "2026-08-16",
	gog: {
		genres: ["Aventure","Point-and-click","Narratif"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Atmosphère", "2D", "Casual", "Protagoniste féminine", "Graphismes Pixel", "Superbe bande-son", "Choix multiples", "Roman graphique", "Point&Click", "Narratif"]
	}
}, {
	name: "The Operator",
	onDisk: true, size: 0.730,
	date: "2026-08-16",
	gog: {
		genres: ["Simulation","Réflexion","Narratif"],
		tags: ["Histoire Riche", "Casse-tête", "Simulation", "Choix multiples", "Mystère", "Roman graphique", "Narratif", "Enquête", "Vous êtes le héro", "Thriller", "Crime", "FMV"]
	}
}, {
	name: "The Smurfs 2", fullname: "The Smurfs 2 - The Prisoner of the Green Stone",
	onDisk: true, size: 9.4,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Exploration"],
		tags: ["Aventure", "Action", "Histoire Riche", "Atmosphère", "Exploration", "Amusant", "Plateformes", "Coop locale", "Nature"]
	}
}, {
	name: "The Spirit and the Mouse",
	onDisk: true, size: 0.304,
	date: "2026-08-16",
	gog: {
		genres: ["Plateforme","Aventure","Réflexion"],
		tags: ["Aventure", "Casse-tête", "Plateformes", "Casse-tête et plateformes"]
	}
}, {
	name: "The Talos Principle", fullname: "The Talos Principle: Gold Edition",
	onDisk: true, size: 6.9,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Réflexion"],
		tags: ["Aventure", "Action", "Indé", "Casse-tête", "Logique", "Casse-tête et plateformes"]
	}
}, {
	name: "The Vanishing of Ethan Carter",
	onDisk: false,
	gog: {
		genres: ["Action","Aventure","Horreur"],
		tags: ["Aventure", "Action", "Indé", "Histoire Riche", "Atmosphère", "Exploration", "Classique", "Casse-tête", "Première personne", "Sombre", "Superbe bande-son", "Horreur", "Monde Ouvert", "Mystère", "Point&Click", "Horreur psychologique", "Simulation de marche", "Surnaturel", "Lovecraft", "Court"]
	}
}, {
	name: "The Witcher", fullname: "The Witcher: Enhanced Edition", collection: "The Witcher",
	onDisk: true, size: 10.2,
	gog: {
		genres: ["Jeu de rôle", "Action", "Fantasy"],
		tags: ["Action", "Fantasy", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Classique", "Superbe bande-son", "Choix multiples", "Monde Ouvert", "Troisième personne", "Mature", "Nudité", "Fins multiples", "Magie", "Médieval"]
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
	name: "The X-Files",
	onDisk: true, size: 3.5,
	date: "2026-05-07"
}, {
	name: "Theme Hospital",
	onDisk: true, size: 0.176,
	gog: {
		genres: ["Stratégie", "Construction", "Gestion"],
		tags: ["Stratégie", "Classique", "Casual", "Amusant", "Gestion", "Construction", "Gestion", "Humour noir"]
	}
}, {
	name: "Theme Park",
	onDisk: false,
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
	name: "ToeJam & Earl: Back in the Groove!",
	onDisk: false, size: 0.720,
	date: "2026-08-16",
}, {
	name: "TOEM",
	onDisk: false,
	gog: {
		genres: ["Aventure","Réflexion","Exploration"],
		tags: ["Aventure", "Exploration", "Casse-tête", "Logique"]
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
	onDisk: true, size: 8.2,
	gog: {
		name: "Tomb Raider IV VI Remastered",
		genres: ["Action", "Aventure", "Exploration"],
		tags: ["Aventure", "Action", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Violent", "Remake"]
	}
}, {
	name: "Tomb Raider 7", fullname: "Tomb Raider: Legend", collection: "Tomb Raider",
	onDisk: true, size: 5.0,
	date : "2026-08-02",
	gog: {
		name : "Tomb Raider: Legend",
		genres: ["Action", "Aventure", "Action"],
		tags: ["Aventure", "Action", "Classique", "Plateformes"]
	}
}, {
	name: "Tomb Raider 8", fullname: "Tomb Raider: Anniversary", collection: "Tomb Raider",
	onDisk: true, size: 3.1,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Action", "Aventure", "Action"],
		tags: ["Aventure", "Action", "Classique", "Plateformes"]
	}
}, {
	name: "Tomb Raider 10", fullname: "Tomb Raider GOTY", collection: "Tomb Raider",
	onDisk: true, size: 17.8,
	gog: {
		genres: ["Action", "Aventure", "Survie"],
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
		tags: ["Aventure", "Histoire Riche", "2D", "Classique", "Exploration", "Casse-tête", "Amusant", "Troisième personne", "Point-and-click", "Logique", "Cartoonesque", "Humour noir", "Objets cachés", "FMV"]
	}
}, {
	name: "Torchlight", collection: "Torchlight",
	onDisk: true, size: 0.910,
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
	name: "Train Valley", collection: "Train Valley",
	onDisk: true, size: 0.581,
	date : "2026-04-16",
	gog: {
		genres: ["Simulation", "Construction", "Gestion"],
		tags: ["Atmosphère", "Casse-tête", "Simulation", "Casual", "Gestion", "Bac-à-sable", "Temps réél", "Gestion des resources", "Familial", "Relaxant", "Construction", "Gestion", "Construction de villes", "Trains"]
	}
}, {
	name: "Train Valley 2", collection: "Train Valley",
	onDisk: false,
	gog: {
		genres: ["Simulation", "Construction", "Gestion"],
		tags: ["Casse-tête", "Simulation", "Casual", "Gestion", "Gestion des resources", "Relaxant", "Vue du dessus", "Construction, Gestion", "Editeur de niveaux", "Trains", "Transport"]
	}
}, {
	name: "Treasure Adventure Game",
	onDisk: true, size: 0.116,
	gog: {
		genres: ["Plateforme", "Aventure", "Jeu de rôle"],
		tags: ["Aventure", "Indé", "Fantasy", "Jeu de rôle", "2D", "Classique", "Plateformes", "Familial", "Cartoonesque", "Casse-tête et plateformes", "Metroidvania"]
	}
}, {
	name: "Turnip Boy Commits Tax Evasion",
	onDisk: false,
	gog: {
		genres: ["Action","Aventure","Réflexion"],
		tags: ["Aventure", "Action", "Casse-tête", "Vue du dessus", "Logique", "Cartoonesque", "Cozy", "Crime"]
	}
}, {
	name: "Two Point Hospital",
	onDisk: true, size: 4.5,
	gog: {
		genres: ["Simulation", "Construction", "Gestion"],
		tags: ["Simulation", "Casual", "Tactique", "Amusant", "Gestion", "Bac-à-sable", "Isométrique", "Familial", "Rétro", "Construction", "Cartoonesque", "Gestion"]
	}
}, {
	name: "Tyrian 2000",
	onDisk: true, size: 0.019,
	gog: {
		genres: ["Tir", "Action", "SF"],
		tags: ["Action", "Science fiction", "Classique", "Science", "Tir"]
	}
}, {
	name: "Unepic",
	onDisk: true, size: 0.696,
	date: "2026-08-15",
	gog: {
		genres: ["Action", "Plateforme", "Jeu de rôle"],
		tags: ["Action", "Indé", "Jeu de rôle", "2D", "Classique", "Plateformes"]
	}
}, {
	name: "Ultima 4", fullname: "Ultima IV: Quest of the Avatar", collection: "Ultima",
	onDisk: true, size: 0.054,
	gog: {
		genres: ["Jeu de rôle", "Adventure", "Fantasy"],
		tags: ["Adventure", "Fantasy", "Jeu de rôle", "Classic"]
	}
}, {
	name: "Ultima Underworld 1", collection: "Ultima",
	onDisk: true, size: 0.076,
	date: "2026-08-15",
	gog: {
		genres: ["Jeu de rôle", "FPP", "Fantasy"],
		tags: ["Fantasy", "Jeu de rôle", "Classique", "Première personne", "FPS"]
	}
}, {
	name: "Ultima Underworld 2", collection: "Ultima",
	onDisk: true, size: 0.076,
	date: "2026-08-15",
	gog: {
		genres: ["Jeu de rôle", "FPP", "Fantasy"],
		tags: ["Fantasy", "Jeu de rôle", "Classique", "Première personne", "FPS"]
	}
}, {
	name: "Ultima Worlds of Adventure 2", fullname: "Ultima Worlds of Adventure 2: Martian Dreams", collection: "Ultima",
	onDisk: true, size: 0.190,
	date: "2026-08-02",
	gog: {
		genres: ["Jeu de rôle", "Adventure", "SF"],
		tags: ["Aventure", "Jeu de rôle", "Science fiction", "Classique", "Science"]
	}
}, {
	name: "Unreal", fullname: "Unreal Gold",
	onDisk: true, size: 0.234,
	gog: {
		genres: ["Action"]
	}
}, {
	name: "Vampyr",
	onDisk: false,
	gog: {
		genres: ["Action","Horreur","Jeu de rôle"],
		tags: ["Action", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Sombre", "Superbe bande-son", "Horreur", "Choix multiples", "Troisième personne", "Monde Ouvert", "Contenu à caractère sexuel", "Nudité", "Violent", "Gore", "Infiltration", "Souls-like", "Vampire"]
	}
}, {
	name: "Void Bastards",
	onDisk: false,
}, {
	name: "Warhammer 40,000: Gladius - Relics of War",
	onDisk: false,
	gog: {
		genres: ["Stratégie", "Tour par tour", "SF"],
		tags: ["Stratégie", "Science fiction", "Tour par tour", "Science", "Superbe bande-son", "Tactique", "Multijoueur", "Guerre", "Militaire", "Stratégie complexe", "4X"]
	}
}, {
	name: "Warhammer 40,000: Mechanicus",
	onDisk: false,
	gog: {
		genres: ["Stratégie", "Tour par tour", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Stratégie", "Science fiction", "Tour par tour", "Science", "Tactique", "Difficile", "Dungeon Crawler", "Robots", "Jeu de plateau"]
	}
}, {
	name: "Warpips",
	onDisk: false,
	gog: {
		genres: ["Stratégie", "Temps réel", "Tactique"],
		tags: ["Stratégie", "Tactique", "Temps réél"]
	}
}, {
	name: "Warsow",
	onDisk: true, size: 0.929,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: [],
		tags: []
	}
}, {
	name: "Wavetale",
	onDisk: true, size: 2.4,
	gog: {
		genres: ["Action", "Aventure", "Exploration"],
		tags: ["Aventure", "Action", "Histoire Riche", "Exploration", "Protagoniste féminine", "Troisième personne", "Plateformes", "Relaxant", "Cartoonesque", "Nature"]
	}
}, {
	name: "What Remains of Edith Finch",
	onDisk: false,
	gog: {
		genres: ["FPP", "Aventure", "Narratif"],
		tags: ["Aventure", "Indé", "Histoire Riche", "Atmosphère", "Exploration", "Casse-tête", "Première personne", "Protagoniste féminine", "Sombre", "Superbe bande-son", "Horreur", "Mystère", "Roman graphique", "Narratif", "Horreur psychologique", "Simulation de marche", "Lovecraft", "Cozy", "Court"]
	}
}, {
	name: "While True: learn()",
	onDisk: false,
	gog: {
		genres: ["Simulation","Réflexion","Programmation"],
		tags: ["Indé", "2D", "Science fiction", "Casse-tête", "Simulation", "Science", "Bac-à-sable", "Logique", "Construction", "Enquête", "Chats", "Éducation", "Sous terre", "Programmation"]
	}
}, {
	name: "Wildcat Gun Machine",
	onDisk: false,
	gog: {
		genres: ["Action","Temps réel","Shoot 'em Up"],
		tags: ["Action", "Indé", "Temps réél", "Shoot'EmUp"]
	}
}, {
	name: "Wolfenstein: The New Order",
	onDisk: false,
	gog: {
		genres: ["Tir","FPP","SF"],
		tags: ["Science fiction","Classique", "Science", "Première personne", "Gore", "FPS", "Tir"]
	}
}, {
	name: "Wonder Boy: The Dragon's Trap",
	onDisk: false,
	gog: {
		genres: ["Action","Aventure","Plateforme"],
		tags: ["Aventure", "Action", "Indé", "Fantasy", "2D", "Exploration", "Superbe bande-son", "Plateformes", "Difficile", "Familial", "Metroidvania", "Remake"]
	}
}, {
	name: "World of Goo",
	onDisk: true, size: 0.367,
	gog: {
		genres: ["Stratégie", "Construction", "Réflexion"],
		tags: ["Indé", "Histoire Riche", "Stratégie", "Atmosphère", "2D", "Classique", "Casse-tête", "Casual", "Superbe bande-son", "Amusant", "Difficile", "Familial", "Logique", "Construction", "Surréaliste", "Physique"]
	}
}, {
	name: "Worlds of Ultima: The Savage Empire", collection: "Ultima",
	onDisk: true, size: 0.169,
	gog: {
		genres: ["Jeu de rôle", "Adventure", "Fantasy"],
		tags: ["Adventure", "Fantasy", "Jeu de rôle", "Classic"]
	}
}, {
	name: "Yes, Your Grace",
	onDisk: true, size: 0.371,
	sources: ["GP"],
	date : "2026-04-14",
	gog: {
		genres: ["Stratégie", "Simulation", "Gestion"],
		tags: ["Aventure", "Fantasy", "Stratégie", "Jeu de rôle", "Casse-tête", "Simulation", "Superbe bande-son", "Graphismes Pixel", "Choix multiples", "Gestion", "Point-and-click", "Historique", "Gestion des resources", "Fins multiples", "Guerre", "Médieval", "Gestion"]
	}
},].map(json => new Game(json));

