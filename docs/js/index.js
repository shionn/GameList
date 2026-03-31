'use strict';

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
		return GAMES.filter(g => this._isSelected(g));
	}

	_isSelected(game) {
		return (this.genres.size == 0 || Array.from(this.genres).every(g => game.isGenre(g)))
			&& (this.tags.size == 0 || Array.from(this.tags).every(t => game.isTag(t)))
			&& (this.collection == undefined || this.collection === game.collection);
	}
}

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
		});//*/

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

