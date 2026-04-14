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
		img = img.replaceAll(",", "");
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
	name: "STAR WARS: X-Wing Alliance",
	onDisk: true, size: 0.581,
	sources: ["Redloved"],
	gog: {
		genres: [],
		tags: []
	}
};

var GAMES = [{
	name: "9 Years of Shadows",
	onDisk: true, size: 1.4,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Metroidvania"],
		tags: ["Aventure", "Action", "Indé", "Fantasy", "Histoire Riche", "Atmosphère", "2D", "Exploration", "Protagoniste féminine", "Graphismes Pixel", "Plateformes", "Magie", "Metroidvania"]
	}
}, {
	name: "A Plague Tale: Innocence",
	onDisk: true, size: 38.0,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Infiltration"],
		tags: ["Aventure", "Action", "Histoire Riche", "Atmosphère", "Protagoniste féminine", "Sombre", "Superbe bande-son", "Horreur", "Troisième personne", "Historique", "Violent", "Gore", "Médieval", "Émotionnel", "Infiltration"]
	}
}, {
	name: "Anno 1404", fullname: "Anno 1404: Gold Edition",
	onDisk: true, size: 3.4,
	gog: {
		genres: ["Simulation", "Historique", "Stratégie"],
		tags: ["Stratégie", "Classique", "Simulation", "Superbe bande-son", "Gestion", "Bac-à-sable", "Historique", "Temps réél", "Gestion des resources", "Relaxant", "Médieval", "Construction de villes", "Commerce", "Transport"]
	}
}, {
	name: "Baldur's Gate", fullname: "Baldur's Gate: Enhanced Edition",
	onDisk: true, size: 5.8,
	sources: ["Redloved"],
	gog: {
		genres: ["Jeu de rôle","Temps réel", "Fantasy"],
		tags: ["Fantasy", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Classique", "Multijoueur", "Temps réél", "Isométrique", "Magie", "cRPG", "Remake"]
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
	name: "BioShock 2",
	onDisk: true, size: 14.1,
	sources: ["GP"],
	gog: {
		name: "BioShock 2 Remastered",
		genres: ["Tir", "FPP", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Science", "Première personne", "Sombre", "Horreur", "FPS", "Tir", "Dystopique", "Steampunk", "Sous l'eau"]
	}
}, {
	name: "BioShock Infinite", fullname: "BioShock Infinite Complete Edition",
	onDisk: true, size: 41.3,
	sources: ["GP"],
	gog: {
		name: "BioShock Infinite",
		genres: ["Tir", "FPP", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Science fiction", "Classique", "Science", "Première personne", "FPS", "Tir", "Steampunk"]
	}
}, {
	name: "Blade of Darkness", fullname: "Severance: Blade of Darkness",
	onDisk: true, size: 1.4,
	sources: ["GP"],
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
	name: "Brigador", fullname: "Brigador: Up-Armored Edition",
	onDisk: true, size: 0.67,
	gog: {
		name: "Brigador",
		genres: ["Action", "Combat", "Tactique"],
		tags: ["Action", "Indé", "Science", "Tactique", "Difficile", "Isométrique", "Vue du dessus", "Roguelite", "Combat", "Cyberpunk", "Dystopique", "Tir à deux joysticks", "Chars d'assaut"]
	}
}, {
	name: "Chasm: The Rift",
	onDisk: true, size: 0.801,
	sources: ["GP"],
	gog: {
		genres: ["Tir", "FPP", "Fantasy"],
		tags: ["Fantasy", "Atmosphère", "Science fiction", "Classique", "Première personne", "Sombre", "Violent", "Gore", "FPS", "Rétro", "Tir"]
	}
}, {
	name: "Close To The Sun",
	onDisk: true, size: 21.6,
	sources: ["GP"],
	gog: {
		genres: ["FPP", "SF", "Aventure"],
		tags: ["Aventure", "Science fiction", "Science", "Première personne", "Protagoniste féminine", "Horreur", "Violent", "Gore", "FPS", "Simulation de marche", "Steampunk"]
	}
}, {
	name: "Colt Canyon",
	onDisk: true, size: 0.545,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Roguelike"],
		tags: ["Aventure", "Action", "Atmosphère", "Casual", "Superbe bande-son", "Graphismes Pixel", "Violent", "Gore", "Roguelike", "Roguelite", "Génération procédurale", "Coop locale"]
	}
}, {
	name: "Control", fullname: "Control Ultimate Edition",
	onDisk: true, size: 28.4,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "SF"],
		tags: ["Aventure", "Action", "Histoire Riche", "Atmosphère", "Science fiction", "Science", "Protagoniste féminine", "Horreur", "Troisième personne", "Horreur psychologique", "Surréaliste", "Surnaturel"]
	}
}, {
	name: "Coromon",
	onDisk: true, size: 0.934,
	sources: ["GP"],
	gog: {
		genres: ["Aventure", "Jeu de rôle", "Exploration"],
		tags: ["Aventure", "Histoire Riche", "Jeu de rôle", "2D", "Exploration", "Tour par tour", "Graphismes Pixel", "Difficile", "JRPG", "Rétro"]
	}
}, {
	name: "Cursed to Golf",
	onDisk: true, size: 0.710,
	sources: ["GP"],
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
	name: "Dark Sky",
	onDisk: true, size: 2.0,
	sources: ["GP"],
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
	name: "Deus Ex: Human Revolution", fullname: "Deus Ex: Human Revolution - Director's Cut",
	onDisk: true, size: 16.5,
	sources: ["GP"],
	gog: {
		genres: ["Action", "SF", "Jeu de rôle"],
		tags: ["Action", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Classique", "Science", "Première personne", "Superbe bande-son", "FPS", "Infiltration", "Cyberpunk", "Dystopique"]
	}
}, {
	name: "Dishonored", fullname: "Dishonored - Definitive Edition",
	onDisk: true, size: 15.4,
	sources: ["GP"],
	gog: {
		genres: ["Action", "FPP", "Infiltration"],
		tags: ["Action", "Histoire Riche", "Atmosphère", "Classique", "Première personne", "Sombre", "Superbe bande-son", "Choix multiples", "Violent", "Gore", "Magie", "FPS", "Infiltration", "Surnaturel", "Steampunk"]
	}
}, {
	name: "Dragonsphere",
	onDisk: true, size: 0.172,
	sources: ["GP"],
	gog: {
		genres: ["Fantasy", "Aventure", "Point-and-click"],
		tags: ["Aventure", "Fantasy", "Classique", "Graphismes Pixel", "Point&Click"]
	}
}, {
	name: "Duck Paradox",
	onDisk: true, size: 0.226,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Roguelike"],
		tags: ["Aventure", "Action", "Indé", "2D", "Science fiction", "Casse-tête", "Science", "Protagoniste féminine", "Graphismes Pixel", "Plateformes", "Difficile", "Roguelike", "Rétro", "Surréaliste", "Bullet Hell", "Manipulation temporelle"]
	}
}, {
	name: "Everspace",
	onDisk: true, size: 3.7,
	gog: {
		genres: ["Action", "Simulation", "SF"],
		tags: ["Action", "Science fiction", "Classique", "Exploration", "Simulation", "Science", "Première personne", "Superbe bande-son", "Survie", "Difficile", "Roguelike", "Espace", "Roguelite", "Vol", "Réalité virtuelle"]
	}
}, {
	name: "Fallout", collection: "Fallout",
	onDisk: true, size: 1.0,
	sources: ["GP", "Redloved"],
	gog: {
		genres: ["Jeu de rôle", "Tour par tour", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Classique", "Exploration", "Tour par tour", "Science", "Tactique", "Monde Ouvert", "Fins multiples", "Isométrique", "Post-apocalyptique", "RPG tactique", "cRPG"]
	}
}, {
	name: "Fallout 2", collection: "Fallout",
	onDisk: true, size: 1.5,
	sources: ["GP", "Redloved"],
	gog: {
		genres: ["Jeu de rôle", "Tour par tour", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Classique", "Exploration", "Tour par tour", "Science", "Tactique", "Monde Ouvert", "Isométrique", "Post-apocalyptique", "RPG tactique", "cRPG"]
	}
}, {
	name: "Fallout Tactics", collection: "Fallout",
	onDisk: true, size: 3.5,
	sources: ["GP"],
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
	name: "FTL: Faster than Light",
	onDisk: true, size: 0.458,
	gog: {}
}, {
	name: "Full Throttle", fullname: "Full Throttle Remastered",
	onDisk: true, size: 4.7,
	gog: {
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Classique", "Superbe bande-son", "Graphismes Pixel", "Amusant", "Point&Click", "Enquête", "Enquête-mystère", "Court", "Remake"]
	}
}, {
	name: "Ghost of a Tale",
	onDisk: true, size: 2.9,
	sources: ["Redloved"],
	gog: {
		genres: ["Action", "Fantasy", "Jeu de rôle"],
		tags: ["Action", "Indé", "Fantasy", "Histoire Riche", "Atmosphère", "Jeu de rôle", "Exploration", "Superbe bande-son", "Horreur", "Amusant", "Monde Ouvert", "Troisième personne", "Médieval", "Infiltration"]
	}
}, {
	name: "Ghost Song",
	onDisk: true, size: 1.5,
	sources: ["GP"],
	gog: {
		genres: ["Jeu de rôle", "Tour par tour", "SF"],
		tags: ["Histoire Riche", "Atmosphère", "Jeu de rôle", "Science fiction", "Classique", "Exploration", "Tour par tour", "Science", "Tactique", "Monde Ouvert", "Isométrique", "Post-apocalyptique", "RPG tactique", "cRPG"]
	}
}, {
	name: "Ghostrunner",
	onDisk: true, size: 20.5,
	sources: ["GP"],
	gog: {
		genres: ["Action", "FPP", "SF"],
		tags: ["Action", "Science fiction", "Science", "Première personne", "Superbe bande-son", "Violent", "Difficile", "Gore", "FPS", "Hack and Slash", "Post-apocalyptique", "Cyberpunk", "Combat"]
	}
}, {
	name: "Giants: Citizen Kabuto",
	onDisk: true, size: 1.1,
	sources: ["GP"],
	gog: {
		genres: ["Action", "TPP", "SF"],
		tags: ["Action", "Fantasy", "Science fiction", "Classique", "Science", "Amusant", "Monde Ouvert", "Troisième personne", "Multijoueur", "Nudité", "Violent", "Gestion des resources", "FPS", "Construction de base", "Réaliste", "Stratégie en temps réél"]
	}
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
	gog: {
		genres: ["Course", "Action", "SF"],
		tags: ["Action", "Science fiction", "Science", "Multijoueur", "Multijoueur local", "Course", "Écran partagé", "Réalité virtuelle"]
	}
}, {
	name: "Hell Pie",
	onDisk: true, size: 4.3,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Comédie"],
		tags: ["Aventure", "Action", "Amusant", "Monde Ouvert", "Troisième personne", "Plateformes", "Mature", "Contenu à caractère sexuel", "Nudité", "Violent", "Gore", "Adulte", "Comédie", "Humour noir"]
	}
}, {
	name: "Hero's Hour",
	onDisk: true, size: 0.322,
	sources: ["Redloved"],
	gog: {
		genres: ["Jeu de rôle", "Tour par tour"],
		tags: ["Indé", "Fantasy", "Atmosphère", "Jeu de rôle", "2D", "Tour par tour", "Graphismes Pixel", "Tactique", "Gestion", "Gestion des resources", "Génération procédurale", "Coop locale", "Stratégie complexe", "4X", "Auto Battler"]
	}
}, {
	name: "Hive Jump 2: Survivors",
	onDisk: true, size: 0.168,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Roguelike", "Survie"],
		tags: ["Action", "Indé", "2D", "Science fiction", "Casual", "Graphismes Pixel", "Survie", "Roguelike", "Vue du dessus", "Espace", "Tir", "Roguelite", "Combat", "Bullet Hell", "Tir à deux joysticks"]
	}
}, {
	name: "Kerbal Space Program",
	onDisk: true, size: 4.3,
	sources: ["GP"],
	gog: {
		genres: ["Simulation", "SF", "Construction"],
		tags: ["Indé", "Science fiction", "Exploration", "Simulation", "Science", "Amusant", "Monde Ouvert", "Bac-à-sable", "Difficile", "Espace", "Construction", "Physique", "Éducation"]
	}
}, {
	name: "Les Chevaliers de Baphomet", fullname: "Les Chevaliers de Baphomet : The Director's Cut", collection: "Broken Sword",
	onDisk: true, size: 3.1,
	gog: {
		name: "Broken Sword: Director's Cut!",
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "2D", "Classique", "Casse-tête", "Casual", "Amusant", "Troisième personne", "Point&Click", "Mystère", "Enquête", "Enquête-mystère", "Objets cachés", "Remake"]
	}
}, {
	name: "Les Chevaliers de Baphomet 2", fullname: " Les Chevaliers de Baphomet II : Les Boucliers de Quetzalcoatl", collection: "Broken Sword",
	onDisk: true, size: 2.5,
	gog: {
		name: "broken_sword_2__the_smoking_mirror!",
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Atmosphère", "2D", "Classique", "Casse-tête", "Amusant", "Point&Click", "Mystère", "Cartoonesque", "Enquête", "Enquête-mystère", "Objets cachés", "Remake"]
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
	name: "Mafia 2", fullname: "Mafia II: Definitive Edition",
	onDisk: true, size: 46.6,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Monde ouvert"],
		tags: ["Aventure", "Action", "Histoire Riche", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Mature", "Contenu à caractère sexuel", "Nudité", "Violent", "Gore", "Crime", "Noir"]
	}
}, {
	name: "Might and Magic 7", fullname: "Might and Magic 7: For Blood and Honor",
	onDisk: true, size: 1.1,
	gog: {
		genres: ["Jeu de rôle", "FPP", "Fantasy"],
		tags: ["Fantasy", "Jeu de rôle", "Classique", "Exploration", "Tour par tour", "Première personne", "Gestion", "Monde Ouvert", "Magie", "FPS", "cRPG"]
	}
}, {
	name: "MKD",
	onDisk: true, size: 0.090,
	sources: ["DK"],
	gog: { genres: [], tags: [] }
}, {
	name: "Monster Train",
	onDisk: true, size: 0.684,
	sources: ["GP"],
	gog: {
		genres: ["Stratégie", "Roguelike", "Jeu de cartes"],
		tags: ["Fantasy", "Stratégie", "Choix multiples", "Difficile", "Roguelike", "Magie", "Roguelite", "Génération procédurale", "Jeu de cartes", "Deckbuilding"]
	}
}, {
	name: "Moonscars",
	onDisk: true, size: 0.273,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Plateforme", "Metroidvania"],
		tags: ["Action", "Indé", "2D", "Protagoniste féminine", "Graphismes Pixel", "Plateformes", "Hack and Slash", "Combat", "Metroidvania", "Souls-like"]
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
	onDisk: true, size: 5.8,
	gog: {
		genres: ["Action", "Aventure", "SF"],
		tags: ["Aventure", "Action", "Histoire Riche", "Science fiction", "Exploration", "Science", "Superbe bande-son", "Monde Ouvert", "Troisième personne", "Remake"]
	}
}, {
	name: "Overcooked", fullname: "Overcooked: Gourmet Edition",
	onDisk: true, size: 0.317,
	sources: ["GP"],
	gog: {
		genres: ["Simulation", "Action", "Comédie"],
		tags: ["Action", "Indé", "Classique", "Simulation", "Casual", "Superbe bande-son", "Amusant", "Difficile", "Familial", "Coop locale", "Multijoueur local", "Comédie", "Cuisine"]
	}
}, {
	name: "Phantasmagoria 2", fullname: "Phantasmagoria 2: A Puzzle of Flesh",
	onDisk: true, size: 2.5,
	sources: ["DK"],
	gog: {
		name: "Phantasmagoria 2",
		genres: ["TPP", "Horreur", "Aventure"],
		tags: ["Aventure", "Classique", "Casse-tête", "Sombre", "Horreur", "Troisième personne", "Point&Click", "Nudité", "Gore", "Horreur psychologique", "LGBTQ+", "FMV"]
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
	gog: {
		genres: ["Simulation", "Temps réel", "Gestion"],
		tags: ["2D", "Simulation", "Gestion", "Bac-à-sable", "Temps réél", "Gestion des resources", "Vue du dessus", "Construction", "Gestion", "Construction de base", "Construction de villes", "Moderne"]
	}
}, {
	name: "Pumpkin Jack",
	onDisk: true, size: 2.2,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Plateforme"],
		tags: ["Aventure", "Action", "Fantasy", "2D", "Casse-tête", "Troisième personne", "Plateformes", "Cartoonesque"]
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
	gog: {
		genres: ["Stratégie", "Simulation", "Moderne"],
		tags: ["Stratégie", "2D", "Simulation", "Graphismes Pixel", "Multijoueur", "Historique", "Violent", "Stratégie en temps réél", "Moderne", "Crime"]
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
		tags: ["Aventure", "Action", "Histoire Riche", "2D", "Classique", "Casse-tête", "Casual", "Superbe bande-son", "Amusant", "Point&Click", "Mystère", "Cartoonesque", "Enquête", "Enquête-mystère"]
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
	gog: {
		genres: ["Action", "TPP", "Moderne"],
		tags: ["Action", "Classique", "Troisième personne", "Moderne"]
	}
}, {
	name: "Scorn",
	onDisk: true, size: 18.6,
	sources: ["GP", "Redloved"],
	gog: {
		genres: ["Action", "Aventure", "Horreur"],
		tags: ["Aventure", "Action", "Indé", "Atmosphère", "Science fiction", "Première personne", "Sombre", "Horreur", "Contenu à caractère sexuel", "Nudité", "Violent", "Gore", "Horreur psychologique", "Horreur et survie", "Surréaliste", "Lovecraft", "Steampunk"]
	}
}, {
	name: "Shogun Showdown",
	onDisk: true, size: 0.238,
	sources: ["GP"],
	gog: {
		genres: ["Stratégie", "Tour par tour", "Roguelike"],
		tags: ["Stratégie", "2D", "Tour par tour", "Graphismes Pixel", "Tactique", "Roguelike", "Jeu de cartes", "Deckbuilding", "Ninja"]
	}
}, {
	name: "Showgunners",
	onDisk: true, size: 10.8,
	sources: ["GP"],
	gog: {
		genres: ["Stratégie", "Tour par tour", "Tactique"],
		tags: ["Stratégie", "Atmosphère", "Exploration", "Tour par tour", "Sombre", "Choix multiples", "Tactique", "Vue du dessus", "Dystopique"]
	}
}, {
	name: "Sir Whoopass: Immortal Death",
	onDisk: true, size: 11.1,
	sources: ["GP"],
	gog: {
		genres: ["Action, Aventure, Combat"],
		tags: ["Aventure", "Action", "Indé", "Fantasy", "Histoire Riche", "Exploration", "Amusant", "Troisième personne", "Hack and Slash", "Combat", "Loups-garous"]
	}
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
	gog: {
		genres: ["Tir", "Simulation", "SF"],
		tags: ["Science fiction", "Classique", "Simulation", "Science", "Espace", "Tir", "Vol"]
	}
}, {
	name: "Syberia", collection: "Syberia",
	onDisk: true, size: 1.2,
	gog: {
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Superbe bande-son", "Troisième personne", "Point&Click", "Mystère", "Logique", "Émotionnel", "Enquête", "Enquête-mystère", "Objets cachés", "Steampunk"]
	}
}, {
	name: "Syberia 2", collection: "Syberia",
	onDisk: true, size: 1.5,
	gog: {
		genres: ["Aventure", "Point-and-click", "Enquête-mystère"],
		tags: ["Aventure", "Histoire Riche", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Superbe bande-son", "Troisième personne", "Point&Click", "Mystère", "Logique", "Émotionnel", "Enquête", "Enquête-mystère", "Objets cachés", "Steampunk"]
	}
}, {
	name: "Syberia 3", fullname: "Syberia 3: The Complete Journey",
	onDisk: true, size: 20.6,
	gog: {
		genres: ["TPP", "Fantasy", "Aventure"],
		tags: ["Aventure", "Fantasy", "Histoire Riche", "Atmosphère", "Exploration", "Casse-tête", "Protagoniste féminine", "Troisième personne", "Point&Click", "Mystère", "Logique", "Émotionnel", "Enquête", "Objets cachés", "Steampunk"]
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
	gog: {
		genres: ["Action", "Combat", "Monde ouvert"],
		tags: ["Action", "Fantasy", "Exploration", "Science", "Monde Ouvert", "Troisième personne", "Guerre", "Militaire", "Combat", "Vol", "Pirates", "Sous terre"]
	}
}, {
	name: "The Gunk",
	onDisk: true, size: 6.6,
	sources: ["Shionn", "GP"],
	gog: {
		genres: ["Action", "Adventure", "Exploration"],
		tags: ["Adventure", "Action", "Story Rich", "Atmospheric", "Sci-fi", "Exploration", "Female Protagonist", "Third Person", "Family Friendly", "Relaxing", "LGBTQ+", "Metroidvania", "Nature"]
	}
}, {
	name: "The Smurfs 2", fullname: "The Smurfs 2 - The Prisoner of the Green Stone",
	onDisk: true, size: 9.4,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Exploration"],
		tags: ["Aventure", "Action", "Histoire Riche", "Atmosphère", "Exploration", "Amusant", "Plateformes", "Coop locale", "Nature"]
	}
}, {
	name: "The Talos Principle", fullname: "The Talos Principle: Gold Edition",
	onDisk: true, size: 6.9,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Réflexion"],
		tags: ["Aventure", "Action", "Indé", "Casse-tête", "Logique", "Casse-tête et plateformes"]
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
	onDisk: true, size: 8.2,
	gog: {
		name: "Tomb Raider IV VI Remastered",
		genres: ["Action", "Aventure", "Exploration"],
		tags: ["Aventure", "Action", "Atmosphère", "Classique", "Exploration", "Casse-tête", "Protagoniste féminine", "Violent", "Remake"]
	}
}, {
	name: "Tomb Raider 8", fullname: "Tomb Raider: Anniversary", collection: "Tomb Raider",
	onDisk: true, size: 3.1,
	sources: ["GP"],
	gog: {
		genres: ["Action", "Aventure", "Action"],
		tags: ["Aventure", "Action", "2D", "Classique", "Plateformes"]
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
	name: "Treasure Adventure Game",
	onDisk: true, size: 0.116,
	gog: {
		genres: ["Plateforme", "Aventure", "Jeu de rôle"],
		tags: ["Aventure", "Indé", "Fantasy", "Jeu de rôle", "2D", "Classique", "Plateformes", "Familial", "Cartoonesque", "Casse-tête et plateformes", "Metroidvania"]
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
	name: "Ultima 4", fullname: "Ultima IV: Quest of the Avatar", collection: "Ultima",
	onDisk: true, size: 0.054,
	gog: {
		genres: ["Role-playing", "Adventure", "Fantasy"],
		tags: ["Adventure", "Fantasy", "Role-playing", "Classic"]
	}
}, {
	name: "Unreal", fullname: "Unreal Gold",
	onDisk: true, size: 0.234,
	gog: {
		genres: ["Action"]
	}
}, {
	name: "Warsow",
	onDisk: true, size: 0.929,
	sources: ["GP"],
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
		genres: ["Role-playing", "Adventure", "Fantasy"],
		tags: ["Adventure", "Fantasy", "Role-playing", "Classic"]
	}
}, {
	name: "Yes, Your Grace",
	onDisk: true, size: 0.371,
	sources: ["GP"],
	gog: {
		genres: ["Stratégie", "Simulation", "Gestion"],
		tags: ["Aventure", "Fantasy", "Stratégie", "Jeu de rôle", "Casse-tête", "Simulation", "Superbe bande-son", "Graphismes Pixel", "Choix multiples", "Gestion", "Point&Click", "Historique", "Gestion des resources", "Fins multiples", "Guerre", "Médieval", "Gestion"]
	}
},].map(json => new Game(json));

