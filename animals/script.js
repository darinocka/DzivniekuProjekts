// masīvs, kurā glabājam virsrakstu-jautājumu variantus, attēlošanai uz ekrāna.
let animalLv = ["zivju gārnis","lakstīgala","pūce","piekūns","papagailis","delfīns","kurpvalis",
"leduslacis","ronis","narvalis","kalāns","imperatorpingvīns","lauva","zilonis","nīlzirgs","vilks",
"alnis","puma","tīģeris","hiēna","ūdrs","sikspārnis","jenots","lemurs","koijots","mangusts"]

// masīvs, kurā glabājam vārdu-atbilžu variantus, attēlošanai uz ekrāna.
let animalEn = ["greyheron","sprosser","owl","falcon","parrot","dolphin","humpbackwhale",
"polarbear","seal","narwhal","seaotter","emperorpenguin","lion","elephant","hippopotamus","wolf",
"elk","cougar","tiger","hyena","otter","bat","raccoon","lemur","coyote","mongoose"]

// masīvs, kurā mēs glabājam fotogrāfijas, attēlošanai uz ekrāna.
let img = ["imgAnimal/zivjugarnis.jpg","imgAnimal/lakstigala.jpg","imgAnimal/puce.jpg","imgAnimal/piekuns.jpg",
"imgAnimal/papagailis.jpg","imgAnimal/delfins.jpg","imgAnimal/kuprvalis.jpg","imgAnimal/leduslacis.jpg","imgAnimal/ronis.jpg",
"imgAnimal/narval.jpg","imgAnimal/kalans.jpg","imgAnimal/imperatorpenguin.jpg","imgAnimal/lauva.jpg","imgAnimal/zilonis.jpg",
"imgAnimal/nilzirgs.jpg","imgAnimal/vilks.jpg","imgAnimal/alnis.jpg","imgAnimal/puma.jpeg","imgAnimal/tigeris.jpg",
"imgAnimal/hiena.jpg","imgAnimal/udrs.jpg","imgAnimal/siksparnis.jpg","imgAnimal/jenots.jpg","imgAnimal/lemurs.jpg",
"imgAnimal/kojots.jpg","imgAnimal/mangusts.jpg"];


let startTime = new Date(); // Laiks, kad spēle sākās
let gameInterval = null; // Spēles ilguma taimeris
let gameRunning = true; // Vai spēle vēl notiek



// meklē DIV elementus pēc to ID un piešķir tiem mainīgos.
let animalImgID = document.getElementById('animalImgID'); // meklējam <div>, kur parādīsim attēlu no masīva img. 
let animalNameID = document.getElementById('animalNameID'); // meklējam pārējos elementus, vajadzīgie lai kontrolētu tos.
let inputAnswer = document.getElementById('inputAnswer');
let submit = document.getElementById('submit'); // meklējam pogu.
let resultId = document.getElementById('resultId'); // meklējam mums nepieciešamo tagu pēc elementa ID, un piešķiram to mainīgajam, kas parādīs funkcijas rezultātu.

let hidenID = document.getElementById('hidenID');
let trueFalseId = document.getElementById('trueFalseId');
let whatToDoId = document.getElementById('whatToDoId');
let indikatorID = document.getElementById('indikatorID'); // tiek atrasts tags <footer>, kurā tas vizuāli parādīs progresa kustību.


// iegūstam pirmo nejauši izvelēto skaitli. Mēs izmantosim šo numuru kā INDEX visos masīvos ar datiem primārajam displejam.
let randomElem = Math.floor(Math.random() * animalLv.length);

animalImgID.src = img[randomElem];
animalNameID.innerHTML = animalLv[randomElem];
// sākotnējais datu attēlojums . izlases Elementu (Elem) mēs saņēmām augstāk.

submit.addEventListener('click' , checkAnswer);
// pakārt uz pogas notikumu submit - noklikšķiniet uz pogas. Mēs piešķiram šim callback notikumam funkciju checkAnswer .
// t.i., funkcija tiks izsaukta tikai konkrētajam notikumam.


// ērtībai, lai kontrolētu masīvu aizpildīšanu kļūdu gadījumā.
console.log(" animalLv : " + animalLv.length + ", animalEn :  " + animalEn.length + ", img :  " + img.length );

// mainīgo lielumu deklarācija
let tot = 20;  // skaitītājs, ko izmanto, lai iestatītu testā uzdodamo jautājumu skaitu.
let trueAns = 0; // pareizas atbildes
let falseAns = 0; // nepareizas atbildes
let counter = 0; // skaitītājs , cikla kontrolei.
let widthForIdentifikator = 5; // šajā mainīgajā tiks saglabāts mūsu taga <footer> garums, kurā tiks parādīta animācijas norises josla.
let progressCheckOut = 0; // šajā mainīgajā mēs saglabāsim skaitli, kas mūsu identifikatorā parādīs PAŠREIZĒJO progresu %.

		function checkAnswer() { 	//funkcija, kas darbosies, noklikšķinot uz pogas submit.
										// 1 - pārbaudīs atbilžu pareizrakstību
										// 2 - izņems no masīviem jau izmantotos datus, lai tos neizmantotu atkārtoti.
										// 3- pārbaudīs kopējo uzdoto jautājumu skaitu.
										// 4 - iegūst jaunu randomElem un atjauno informāciju uz ekrāna, pamatojoties uz to.
										// 5 - pārbaudīs kopējo jau uzdoto jautājumu skaitu, pamatojoties uz skaitītāju , un, ja tas ir sasniegts, tad:
										// 2-1 - paslēpt visus interfeisa(saskarnes) elementus, mainot elementa īpašību tā stilos, lai parādītu: nav;
										// 2-2 - parādīt nepieciešamos jaunos elementus.
										// 2-3 - testa rezultāta izvade, ko iegūstam no funkcijas doCount returna ar nodotajiem parametriem:
																		// 3-1 - funkcija doCount saņems pareizo atbilžu skaitu un kopējo jautājumu skaitu.
																		// 3-2 - veiks savus aprēķinus un atgriezīs rezultātu, kas tiks parādīts 2-3 punktā

				inputAnswer.value.toLowerCase() == animalEn[randomElem].toLowerCase() ? trueAns++ : falseAns++ ;
				// 1- trīskāršs operators , pārbaudiet, kas tika ievadīts atbildes laukā:
					// funkcija toLowerCase visu pārveido ar mazajiem burtiem.
					// pēc tam pārbauda, vai ievadītais atbilst pareizajai atbildei?
					// ja sakrīt, pievieno +1 mainīgajam "pareizā atbilde".
					// ja nesakrīt, tad pievienojo +1 mainīgajam "nepareiza atbilde".

				
				if (inputAnswer.value.toLowerCase() === "stop"){
					window.location.href = "../index.html";
					return;
				}

				inputAnswer.value = '';
				//notīra ievades lauku, katram jaunam jautājumam - tukšs ievades lauks atbildei.


				animalLv.splice(randomElem, 1); // masīva metode splice --> noņem VIENU randomElem elementu no animalLv masīva (pēc indeksa).
				animalEn.splice(randomElem, 1); // masīva metode splice --> noņem VIENU randomElem elementu no animalEn masīva (pēc indeksa).
				img.splice(randomElem, 1);	// masīva metode splice --> noņem VIENU randomElem elementu no img masīva (pēc indeksa).
				// 2 - izņem no masīviem jau izmantotos datus, lai tos neizmantotu atkārtoti.
				counter++; // palielinam skaitītāju cikla kontrolei par 1 .


				// Identifikatora darbība. Divi parametri - skalas vizuālā kustība. Un vizuālas izmaiņas PROGRESS procentos.
				// tagā <footer> html failā mēs uzreiz iestatām stilu uz style="width:5%" un iestatām tam vērtību 5% no kopējā ekrāna garuma.
				// to izdarīja, lai mums jau no paša sākuma progresa sākums būtu 5%.
				widthForIdentifikator += 4.9; // skalas vizuālā parametra - kustība.
											 //katra funkcijas izpilde palielinās šo vērtību par 4,9 . 4.9, nevis 5 dizaina apsvērumu dēļ.

				indikatorID.style.width  = widthForIdentifikator + "%"; // mainam stila vērtību platumu, iepriekš atrastajā tagā <footer>.
				progressCheckOut += 5; // PROGRESA vizuālā parametra izmaiņas %. Katra funkcijas izpilde palielinās globālo mainīgo progressCheckOut par 5.
				indikatorID.innerHTML = "PROGRESS " + progressCheckOut + "%"; // mainam teksta vērtību iepriekš atrastā <footer> tagā.

					if (counter == 20) { // 3- pārbauda kopējo uzdoto jautājumu skaitu
										// 5 - pārbauda kopējo uzdoto jautājumu skaitu un, ja tas ir sasniegts, tad:

								gameRunning = false;
								clearInterval(gameInterval); // aptur spēles ilguma skaitītāju

							animalNameID.className = 'hiden'; 
							// 2-1 - paslēpj visus interfeisa elementus, mainot elementa īpašību tā stilos, lai parādītu: nav;

							indikatorID.style.width  = 99 + "%"
							indikatorID.innerHTML = feedbackMaker(tot , trueAns)

							resultId.innerHTML = doCount(tot ,trueAns );
							// 2-3 - testa rezultāta izvade, ko iegūstam no funkcijas doCount returna ar nodotajiem parametriem:

							inputAnswer.className = 'hiden';
							whatToDoId.className = 'hiden';
							submit.className = 'hiden'; 
							// 3-1 - paslēpt visus interfeisa elementus, mainot elementa rekvizītu tā stilos, lai parādītu: nav;

							hidenID.className = 'visible';  // 3-2 - parādiet vajadzīgos jaunos elementus.
								
							animalImgID.className = 'lastImg'; // maina klašu nosaukumus, lai izmantotu dažādus stilus, lai parādītu galīgo attēlu..
						return animalImgID.src = 'comp.jpg' 	 // gala attēls , fonam, uz kura tiks parādīts rezultāts.
					}


	randomElem = Math.floor(Math.random() * animalLv.length);
	// 4 - iegūt jaunu randomElem.
	animalImgID.src = img[randomElem];
	animalNameID.innerHTML = animalLv[randomElem];
	// 4 - un pamatojoties uz to (randomElem) atjauninina informāciju ekrānā.
}


function doCount(tot , trueAns) { // funkcija, atgriezīs vienu un četrām testa rezultātu opcijām.

	let bad = tot / 4;   // iegūstam sliktāko variantu - kopējo jautājumu skaitu, dalot ar 4
	let good = tot / 2; // iegūstam labu variantu - kopējo jautājumu skaitu, dalot ar 2
	let perfect = tot; // iegūt labāko variantu - kopējais jautājumu skaits ir vienāds ar pareizajām atbildēm
		if (trueAns <= bad) {  // atgriež šo virkni, ja pareizās atbildes no funkcijas parametriem ir mazākas vai vienādas ar mainīgo bad.
		return 'Pareizas atbildes <font size="7" color="#337dff"><b> ' +  trueAns   + '</font></b> no <font size="7" color="#337dff"><b>'   + tot  +  '.'
	} // "+" operators ļauj virknē ievietot mainīgā vērtību.

		if (trueAns <= good) { // atgriež šo virkni, ja pareizās atbildes no funkcijas parametriem ir mazākas vai vienādas ar mainīgo good.
			return 'Pareizas atbildes <font size="7" color="#337dff"><b>' + trueAns + '</font></b> no <font size="7" color="#337dff"><b>' + tot + '</font></b> , ir kur tiekties.'
		}
		if (trueAns < perfect) { // atgriež šo virkni, ja pareizās atbildes no funkcijas parametriem ir mazākas par ideālo mainīgo(perfect).
				return 'Punktu summa tuvu perfektai. <br> Tu Esi malacis.<font size="7" color="#337dff"><b> ' + trueAns + '</font></b> pareizas atbildes no <font size="7" color="#337dff"><b>' + tot +'</font></b>';
			}
			if (trueAns == perfect) { // atgriež šo virkni, ja pareizās atbildes no funkcijas parametriem ir vienādas ar ideālo mainīgo(perfect).
				return 'Perfekti! Tu Esi malacis.<font size="7" color="#337dff"><b>' + trueAns + '</font></b> pareizas atbildes no <font size="7" color="#337dff"><b>' + tot +'</font></b>';
			} 
}


function feedbackMaker(tot , trueAns) {
	let bad = tot / 4; // iegūstam sliktāko variantu - kopējo jautājumu skaitu, dalot ar 4
	let good = tot / 2; // iegūstam labu variantu - kopējo jautājumu skaitu, dalot ar 2
	let perfect = tot; // iegūt labāko variantu - kopējais jautājumu skaits ir vienāds ar pareizajām atbildēm
		if (trueAns <= bad) {  // atgriež šo virkni, ja pareizās atbildes no funkcijas parametriem ir mazākas vai vienādas ar mainīgo bad.
		return "Tests ir pabeigts, tas nekur neder. Pamācies un mēģini vēlreiz.";
	} 
		if (trueAns <= good) { // atgriež šo virkni, ja pareizās atbildes no funkcijas parametriem ir mazākas vai vienādas ar mainīgo good.
			return "Tests ir pabeigts. Tev ir labs rezultāts.";
		}
		if (trueAns < perfect) { // atgriež šo virkni, ja pareizās atbildes no funkcijas parametriem ir mazākas par ideālo mainīgo(perfect).
				return "Gandrīz ideāli. Bet tu vari labāk.";
			}
			if (trueAns == perfect) { // atgriež šo virkni, ja pareizās atbildes no funkcijas parametriem ir vienādas ar ideālo mainīgo(perfect).
				return "Ideāli. Varbūt tev tikai paveicās?😉";
			} 
}


// Funkcija, kas rāda datumu un laiku
function updateDateTime() {
	let now = new Date();
	let timeStr = now.toLocaleTimeString(); // Piemēram, 17:22:05
	let dateStr = now.toLocaleDateString(); // Piemēram, 06.04.2025.
	document.getElementById('dateTime').innerText = dateStr + " " + timeStr;
}
setInterval(updateDateTime, 1000); // Atjaunina katru sekundi
updateDateTime(); // Pirmais izsaukums uzreiz

// Funkcija, kas rēķina spēles ilgumu
function updatePlayTime() {
	if (!gameRunning) return; // ja spēle ir beigusies, neko nedara

	let now = new Date();
	let time = Math.floor((now - startTime) / 1000); // sekundēs
	let minutes = Math.floor(time / 60);
	let seconds = time % 60;
	let formatted = `${minutes} min ${seconds < 10 ? "0" : ""}${seconds} sek`;
	document.getElementById('playTime').innerText = "Spēlēts: " + formatted;
}
gameInterval = setInterval(updatePlayTime, 1000); // katru sekundi
updatePlayTime(); // sākumā