const dscrd = require("discord.js");
const trnsl = require("google-translate-api");
const ascii = require("cool-ascii-faces");
const client = new dscrd.Client({
	autoReconnect: true
});
client.login(process.env.TOKEN);
client.on("ready", () => {
	console.log(client);
	console.log(``);
	console.log(`Erfolgreich eingeloggt als ${client.user.username} (ID: ${client.user.id}).`);
	client.user.setActivity(`v2.0 Pre-Beta | ${process.env.PREFIX}hilfe`);
});
client.on("message", async message => {
	console.log(``);
	console.log(`Neue Nachricht von ${message.author.username} (ID: ${message.author.id}).`);
	console.log(``);
	console.log(message);
	console.log(``);
	if (message.author.bot) {
		console.log(`Nachricht wurde nicht verarbeitet, da sie von einem Bot und keinem Nutzer stammt.`);
		return;
	};
	if (message.content.indexOf(process.env.PREFIX) !== 0) {
		console.log(`Nachricht wurde nicht verarbeitet, da sie nicht mit dem bestimmten Prefix (${process.env.PREFIX}) beginnt.`);
		return;
	};	
	var args = message.content.slice(process.env.PREFIX.length).trim().split(/ /g);
	var command = args.shift().toLowerCase();
	if (command === "deutsch") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (args && args != "") {
			trnsl(args.join(" "), {
				to: "de"
			}).then(temp => {
				message.channel.send(temp.text);
			});
		} else {
			message.channel.fetchMessages({
				limit: 2
			}).then(temp => {
				trnsl(temp.last().content, {
					to: "de"
				}).then(temp => {
					message.channel.send(temp.text);
				});
			});
		};
	};
	if (command === "ersatz" || command === "replace") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (args && args != "") {
			message.channel.send(args.join(" ").replace(/aus/gi, "<:1aus:403611412938620929>").replace(/gel/gi, "<:2gel:403611412586430474>").replace(/öst/gi, "<:3oest:403611413022638081>").replace(/err/gi, "<:2err:406902951064371211>").replace(/eich/gi, "<:3eich:406902925764460544>").replace(/nuss/gi, "<:NUSS:402536220074180609>").replace(/schwul/gi, "<:schwul:406965196687671297>").replace(/verbessern/gi, "<:verbessern:403900299514740746>").replace(/xd/gi, "<:Xd:424962963095552000>").replace(/perfekt/gi, "<:perfekt:408736206885748736>").replace(/notiz beachten/gi, "<:notizbeachten:402532937221931008>").replace(/null/gi, "<:null:400375286451142656>").replace(/lösc dies/gi, "<:loesc_dies:406958134771580938>").replace(/fick geh zurück/gi, "<:fickgehzurueck:403900299087183872>"));
		} else {
			message.channel.fetchMessages({
				limit: 2
			}).then(temp => {
				message.channel.send(temp.last().content.replace(/aus/gi, "<:1aus:403611412938620929>").replace(/gel/gi, "<:2gel:403611412586430474>").replace(/öst/gi, "<:3oest:403611413022638081>").replace(/err/gi, "<:2err:406902951064371211>").replace(/eich/gi, "<:3eich:406902925764460544>").replace(/nuss/gi, "<:NUSS:402536220074180609>").replace(/schwul/gi, "<:schwul:406965196687671297>").replace(/verbessern/gi, "<:verbessern:403900299514740746>").replace(/xd/gi, "<:Xd:424962963095552000>").replace(/perfekt/gi, "<:perfekt:408736206885748736>").replace(/notiz beachten/gi, "<:notizbeachten:402532937221931008>").replace(/null/gi, "<:null:400375286451142656>").replace(/lösc dies/gi, "<:loesc_dies:406958134771580938>").replace(/fick geh zurück/gi, "<:fickgehzurueck:403900299087183872>"));
			});
		};
	};
	if (command === "ficken") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (/\[.+\] \[.+\]/.test(args.join(" "))) {
			message.channel.send(`toll`);
			message.channel.send(`dieses ding ${args.join(" ").match(/\[.+\] \[/).toString().slice(1, -3)} ab`);
			message.channel.send(`dieses ${args.join(" ").match(/\] \[.+\]/).toString().slice(3, -1)}`);
			message.channel.send(`FICKen`);
		} else {
			message.channel.send(`toll`);
			message.channel.send(`dieses ding beim kopfhörer ab`);
			message.channel.send(`dieses um das ohr`);
			message.channel.send(`FICKen`);
		};
	};
	if (command === "frauen") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (args && args != "") {
			message.channel.send(`Frauen stehn auf Männer wo ${args.join(" ")}`);
		} else {
			message.channel.fetchMessages({
				limit: 2
			}).then(temp => {
				message.channel.send(`Frauen stehn auf Männer wo ${temp.last().content}`);
			});
		};
	};
	if (command === "hilfe" || command === "help") {
		message.channel.send({
			embed: {
				author: {
					name: client.user.username,
					icon_url: client.user.avatarURL
				},
				url: "https://rsch.neocities.org",
				description: "Der Roboter exklusiv für den /r/ich_iel Discord. Hier gibt's eine Übersicht über alle Commands.\nFür die meisten Commands gilt: Ist kein Text angegeben, wird die vorherige Nachricht verwendet.",
				fields: [
					{
						name: `${process.env.PREFIX}deutsch`,
						value: "Übersetzt eine Nachricht ins Deutsche – mal mehr, mal weniger gut."
					},
					{
						name: `${process.env.PREFIX}ersatz | ${process.env.PREFIX}replace`,
						value: "Ersetzt \"AUS\", \"GEL\", \"ÖST\", etc. mit den entsprechenden Emotes."
					},
					{
						name: `${process.env.PREFIX}ficken`,
						value: "Zwei Argumente in eckigen Klammern: [beim kopfhörer] [um das ohr]. [FICKen](https://github.com/samogot/betterdiscord-plugins/blob/master/v2/Quoter/link-stub.md?guild_id=392678434687549440&channel_id=430838493359636490&message_id=431582731239948308&author_id=254703312312467467)"
					},
					{
						name: `${process.env.PREFIX}frauen`,
						value: "Frauen stehn auf Männer wo beim Sex die Arme kaputt"
					},
					{
						name: `${process.env.PREFIX}hilfe | ${process.env.PREFIX}help`,
						value: "Wenn du das hier lesen kannst, weißt du bereits, was dieser Command macht."
					},
					{
						name: `${process.env.PREFIX}huso`,
						value: "Wie gibt's nicht, du Hurensohn? [Inspiriert von Ömer.](https://www.facebook.com/KFC.Deutschland/posts/1145486008814468?comment_id=1145949152101487&reply_comment_id=1145955162100886)"
					},
					{
						name: `${process.env.PREFIX}ibims`,
						value: "I bims, 1 ... Der wohl sinnloseste Command dieses Roboters."
					},
					{
						name: `${process.env.PREFIX}ichmach`,
						value: "Ich mach Scheine, ey ey! [Inspiriert von Gloryholei55.](https://www.gutefrage.net/frage/wie-findet-ihr-meinen-ganster-rap-text)"
					},
					{
						name: `${process.env.PREFIX}jemand | ${process.env.PREFIX}someone`,
						value: "Ersetzt Discord's Aprilscherz 2018 (@someone) und erwähnt einen zufälligen User."
					},
					{
						name: `${process.env.PREFIX}kerle | ${process.env.PREFIX}dudes`,
						value: "Es ist Mittwoch, meine Kerle! [Inspiriert von kidpix2.](https://web.archive.org/web/20161007164108/https://kidpix2.tumblr.com/post/104840641707/wednesday-meme)"
					},
					{
						name: `${process.env.PREFIX}klatsch | ${process.env.PREFIX}clap`,
						value: "Fügt das erste Wort zwischen alle anderen ein. [Inspiriert vom \"Ratchet Clap\".](https://www.urbandictionary.com/define.php?term=Ratchet+Clap)"
					},
					{
						name: `${process.env.PREFIX}ping`,
						value: "Pingt den Roboter an und antwortet mit den Latenzzeiten."
					},
					{
						name: `${process.env.PREFIX}spott | ${process.env.PREFIX}mock`,
						value: "Gibt die Nachricht abwechselnd in Groß- und Kleinbuchstaben wieder. [Inspiriert von SpongeBob Schwammkopf.](https://www.imdb.com/title/tt2512000/)"
					},
					{
						name: `${process.env.PREFIX}stfu`,
						value: "shut the fuck up hannes – [Ich raste aus](https://i.redd.it/7qj006wr2kq01.png)"
					}
				],
				footer: {
					icon_url: client.user.avatarURL,
					text: "v2.0 Pre-Beta | von @roesch#0611 mit discord.js"
				}
			}
		});
	};
	if (command === "huso") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (args && args != "") {
			message.channel.send(`Wie ${args.join(" ")}, du Hurensohn?`);
		} else {
			message.channel.fetchMessages({
				limit: 2
			}).then(temp => {
				message.channel.send(`Wie ${temp.last().content}, du Hurensohn?`);
			});
		};
	};
	if (command === "ibims") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (args && args != "") {
			message.channel.send(`I bims, 1 ${args.join(" ")}!`);
		} else {
			if (message.guild.members.get(message.author.id).nickname) {
				message.channel.send(`I bims, 1 ${message.guild.members.get(message.author.id).nickname}!`);
			} else {
				message.channel.send(`I bims, 1 ${message.author.username}!`);
			};
		};
	};
	if (command === "ichmach") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (args && args != "") {
			var temp = args.join(" ");
		} else {
			var temp = "Scheine";
		};
		message.channel.send(`Bitte Objektiv beurteilen hab jetzt lange dafür gebraucht Stellt euch den Beat vor die Hook ist mit AutoTune\n\ney ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} Ich rappe und mache Krieg wie '39 und bin beim Dealen fleißig Ich hatte mit vielen Frauen Sex und saufe Wodka Bull auf Ex ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} Wer mich fikt den fike ich zurück Eyyyy Brudi mach nicht so auf 31er den ich komm in Haus und mach Schaden mit Waffe yooooohhhooo Wallah ich schiesse mit 5 kancken auf dein Haus ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} ey ey ich mach ${temp} Ich mache mit Koks Para und fike und Porsche Pana Ich nehm Drogen ala MDMA HEROIN COCAIN DOPE CRYSTAL und rauche denn Stoff gib mir den J und deine Mutter gibt mir Shoot So habe ich euch gefikkt yea yea Cho`);
	};
	if (command === "jemand" || command === "someone") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		var temp = message.channel.guild.members.random().user;
		if (message.guild.members.get(temp.id).nickname) {
			message.channel.send(ascii() + " " + message.guild.members.get(temp.id).nickname + " " + args.join(" "));
		} else {
			message.channel.send(ascii() + " " + temp.username + " " + args.join(" "));
		};
	};
	if (command === "kerle" || command === "dudes") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (args && args != "") {
			message.channel.send(`Es ist ${args.join(" ")}, meine Kerle!`);
		} else {
			var temp = new Date();
			message.channel.send(`Es ist ${["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"][temp.getDay()]}, meine Kerle!`);
		};
	};
	if (command === "klatsch" || command === "clap") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (args.length > 1) {
			var temp = args[0];
			args.shift();
			args = args.filter(Boolean);
			message.channel.send(args.join(` ${temp} `));
		} else if (args.length == 1) {
			message.channel.fetchMessages({
				limit: 2
			}).then(temp => {
				message.channel.send(temp.last().content.split(/ /g).join(` ${args} `));
			});
		};
	};
	if (command === "ping") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		var temp = await message.channel.send("Ping...");
		temp.edit(`Pong! Latenz: ${temp.createdTimestamp - message.createdTimestamp} ms. API-Latenz: ${Math.round(client.ping)} ms.`);
	};
	if (command === "spott" || command === "mock") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		if (args && args != "") {
			var temp = args.join(" ").split("");
			for (indx = 0; indx < temp.length; indx++) {
				if (indx % 2 == false) {
					temp[indx] = temp[indx].toUpperCase();
				} else {
					temp[indx] = temp[indx].toLowerCase();
				};
			};
			temp = temp.join("");
			message.channel.send(temp);
		} else {
			message.channel.fetchMessages({
				limit: 2
			}).then(temp => {
				var temp = temp.last().content.split("");
				for (indx = 0; indx < temp.length; indx++) {
					if (indx % 2 == false) {
						temp[indx] = temp[indx].toUpperCase();
					} else {
						temp[indx] = temp[indx].toLowerCase();
					};
				};
				temp = temp.join("");
				message.channel.send(temp);
			});
		};
	};
	if (command === "stfu") {
		console.log(`Nachricht wird als ${process.env.PREFIX}${command}-Command verarbeitet.`);
		var temp;
		if (args && args != "") {
			if (message.guild.members.get(args.join(" ").match(/\d+/g))) {
				if (message.guild.members.get(args.join(" ").match(/\d+/g)).nickname) {
					temp = message.guild.members.get(args.join(" ").match(/\d+/g)).nickname;
				} else if (message.guild.members.get(args.join(" ").match(/\d+/g)).user.username) {
					temp = message.guild.members.get(args.join(" ").match(/\d+/g)).user.username;
				} else {
					temp = args.join(" ");
				};
			} else {
				temp = args.join(" ");
			};
		} else {
			message.channel.fetchMessages({
				limit: 2
			}).then(temp => {
				if (message.guild.members.get(temp.last().author.id).nickname) {
					temp = message.guild.members.get(temp.last().author.id).nickname;
				} else {
					temp = temp.last().author.username;
				};
			});
		};
		message.channel.send("shut the fuck up " + temp);
	};
});