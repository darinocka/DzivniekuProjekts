let audio = null;
/// masīvs, kurā glabājam virsrakstu-jautājumu variantus, attēlošanai uz ekrāna.
let animalLv = ["zivju gārnis","lakstīgala","pūce","piekūns","papagailis","delfīns","kurpvalis",
"leduslacis","ronis","narvalis","kalāns","imperatorpingvīns","lauva","zilonis","nīlzirgs","vilks",
"alnis","puma","tīģeris","hiēna","ūdrs","sikspārnis","jenots","lemurs","koijots","mangusts"]
	
	// masīvs, kurā glabājam vārdu-atbilžu variantus, attēlošanai uz ekrāna.
let animalEn = ["greyheron","sprosser","owl","falcon","parrot","dolphin","humpbackwhale",
"polarbear","seal","narwhal","seaotter","emperorpenguin","lion","elephant","hippopotamus","wolf",
"elk","cougar","tiger","hyena","otter","bat","raccoon","lemur","coyote","mongoose"]
	
	// masīvs, kurā mēs glabājam fotogrāfijas, attēlošanai uz ekrāna.
let img = ["imgInfo/zivjugarnis.jpg","imgInfo/lakstigala.jpg","imgInfo/puce.jpg","imgInfo/piekuns.jpg",
"imgInfo/papagailis.jpg","imgInfo/delfins.jpg","imgInfo/kuprvalis.jpg","imgInfo/leduslacis.jpg","imgInfo/ronis.jpg",
"imgInfo/narval.jpg","imgInfo/kalans.jpg","imgInfo/imperatorpenguin.jpg","imgInfo/lauva.jpg","imgInfo/zilonis.jpg",
"imgInfo/nilzirgs.jpg","imgInfo/vilks.jpg","imgInfo/alnis.jpg","imgInfo/puma.jpeg","imgInfo/tigeris.jpg",
"imgInfo/hiena.jpg","imgInfo/udrs.jpg","imgInfo/siksparnis.jpg","imgInfo/jenots.jpg","imgInfo/lemurs.jpg",
"imgInfo/kojots.jpg","imgInfo/mangusts.jpg"];

let sound = ["Skanas/heron.mp3","Skanas/nightingale.mp3","Skanas/owl.mp3","Skanas/falcon.mp3","Skanas/parrot.mp3","Skanas/dolphin.mp3",
"Skanas/humpbackwhale.mp3","Skanas/iceBear.mp3","Skanas/seal.mp3","Skanas/narwhal.mp3","Skanas/seaOtter.mp3", "Skanas/EmperorPenguin.mp3","Skanas/lion.mp3",
"Skanas/Elefant.mp3","Skanas/bihippopotamus.mp3","Skanas/wolf.mp3","Skanas/moose.mp3","Skanas/cougar.mp3","Skanas/tiger.mp3","Skanas/hyena.mp3","Skanas/otter.mp3",
"Skanas/bats.mp3","Skanas/Raccoon.mp3","Skanas/lemur.mp3","Skanas/cayot.mp3","Skanas/mongoose.mp3"];

// masīvs, kurā mēs saglabājam apraksta opcijas jautājumiem no masīva animalLv, parādot uz ekrāna.
let descriptionArr = [
"The plumage is largely ashy-grey above, and greyish-white below with some black on the flanks. Adults have a head and neck white with a broad black supercilium that terminates in the slender, dangling crest, and bluish-black streaks on the front of the neck. The scapular feathers are elongated and the feathers at the base of the neck are also somewhat elongated.", 
"The head, nape and the whole of the upper parts of the bird are dark brown with a slight olive tinge. The colour is much deeper than that of the other species and is not at all rufous. The upper tail-coverts are less olivaceous and the tail feathers are dark rufous-brown. The lores and ear-coverts are brownish-black and the chin and throat are pale buff or whitish, mottled with brown.",
"They possess large, forward-facing eyes and ear-holes, a hawk-like beak, a flat face, and usually a conspicuous circle of feathers, a facial disc, around each eye. The feathers making up this disc can be adjusted to sharply focus sounds from varying distances onto the birds asymmetrically placed ear cavities. They have binocular vision.",
"These birds have thin, tapered wings, which enable them to fly at high speed and change direction rapidly. Fledgling individuals, in their first year of flying, have longer flight feathers, which make their configuration more like that of a general-purpose bird such as a broad wing. This makes flying easier while learning the exceptional skills required to be effective hunters as adults.", 
"They are found mostly in tropical and subtropical regions. Characteristic features of these birds include a strong, curved bill, an upright stance, strong legs, and clawed zygodactyl feet. Many of them are vividly coloured, and some are multi-coloured. They are are among the most intelligent birds, and the ability of some species to imitate human speech enhances their popularity as pets.",
"They are highly social animals, often living in pods of up to a dozen individuals, though pod sizes and structures vary greatly between species and locations. They sleep with only one brain hemisphere in slow-wave sleep at a time, thus maintaining enough consciousness to breathe and to watch for possible predators and other threats.",
"The body is bulky with a thin rostrum and proportionally long flippers, each around one-third of its body length. The dorsal or upper-side of the animal is generally black; the ventral or underside has various levels of black and white coloration. The end of the genital slit of the female is marked by a round lobe. This lobe visually distinguishes males and females.", 
"Although most of them are born on land, they spend most of their time on the sea ice. Because of expected habitat loss caused by climate change, it is classified as a vulnerable species. For decades, large-scale hunting raised international concern for the future of the species, but populations rebounded after controls and quotas began to take effect.", 
"They live in the oceans of both hemispheres and, with the exception of the more tropical monk individuals, are mostly confined to polar, subpolar, and temperate climates. Unlike otariids, they do not communicate by *barking*. Instead, they communicate by slapping the water and grunting. There are 34 extant species of them, and more than 50 extinct species have been described from fossils.", 
"It is a medium-sized toothed whale that possesses a large *tusk* from a protruding canine tooth. It lives year-round in the Arctic waters around Greenland, Canada and Russia. It is one of two living species of whale in the family Monodontidae, along with the beluga whale, and the only species in the genus Monodon.", 
"It is the fifth heaviest living bird species, after only the larger varieties of ratite. The weight also varies by season, as both male and female penguins lose substantial mass while raising hatchlings and incubating their egg. A male individual must withstand the extreme Antarctic winter cold for more than two months while protecting his egg. He eats nothing during this time.", 
"It inhabits nearshore environments, where it dives to the sea floor to forage. It preys mostly on marine invertebrates such as sea urchins, various mollusks and crustaceans, and some species of fish. Its foraging and eating habits are noteworthy in several respects. Its use of rocks to dislodge prey and to open shells makes it one of the few mammal species to use tools.", 
"Large cat, that has a muscular, broad-chested body, short, rounded head; round ears and a hairy tuft at the end of its tail.",
"The largest existing land animals. Distinctive features include a long proboscis called a trunk, tusks, large ear flaps, pillar-like legs, and tough but sensitive skin.",
"Large semiaquatic mammal native to sub-Saharan Africa. They are recognisable for their barrel-shaped torsos, wide-opening mouths with large canine tusks, nearly hairless bodies, pillar-like legs, and large size.",
"The animals fur is usually mottled white, brown, gray, and black, although subspecies in the arctic region may be nearly all white. It travels in nuclear families consisting of a mated pair accompanied by their offspring.",
"These animals have thick bodies with slender legs and short tails. Antlers are made of bone, which can grow at a rate of 2.5 centimeters per day. While actively growing, a soft layer of highly vascularized skin known as velvet covers and protects them.",
"The head is round and the ears are erect. Its powerful forequarters, neck, and jaw serve to grasp and hold large prey. It has four retractile claws on its hind paws and five on its forepaws, of which one is a dewclaw. The larger front feet and claws are adaptations for clutching prey.",
"It has a muscular body with strong forelimbs, a large head and a tail that is about half the length of its body. Its pelage colouration varies between shades of orange with a white underside and distinctive vertical black stripes; the patterns of which are unique in each individual.",
"They have relatively short torsos and are fairly massive and wolf-like in build, but have lower hind quarters, high withers and their backs slope noticeably downward towards their rumps. The forelegs are high, while the hind legs are very short and their necks are thick and short.",
"They have long, slim bodies and relatively short limbs. Their most striking anatomical features are the powerful webbed feet used to swim, and their seal-like abilities for holding breath underwater. Most have sharp claws on their feet and all except the sea otter have long, muscular tails.",
"Their forelimbs adapted as wings, they are the only mammals capable of true and sustained flight. They are more agile in flight than most birds, flying with their very long spread-out digits covered with a thin membrane or patagium.",
"The most characteristic physical feature of the animal is the area of black fur around the eyes, which contrasts sharply with the surrounding white face coloring. This is reminiscent of a *bandit's mask* and has thus enhanced the animal's reputation for mischief. The slightly rounded ears are also bordered by white fur.",
"Most existing individuals are small, have a pointed snout, large eyes, and a long tail. They chiefly live in trees and are active at night. They share many common basal primate traits, such as divergent digits on their hands and feet, and nails instead of claws.",
"The color and texture of the animals fur vary somewhat geographically. The hairs predominant color is light gray and red or fulvous, interspersed around the body with black and white. These animals living at high elevations tend to have more black and gray shades than their desert-dwelling counterparts, which are more fulvous or whitish-gray.",
"They have long faces and bodies, small, rounded ears, short legs, and long, tapered tails. Many species of mongoose have grizzly-like fur, but some species have distinct fur color. Mongooses cannot retract their claws like cats because they use them for digging."
];

let animalImgID = document.getElementById('animalImgID'); // meklējam <div>, kur parādīsim attēlu no masīva img.
let animalNameID = document.getElementById('animalNameID'); // meklējam pārējos elementus, vajadzīgos lai kontrolētu tos.
let inputAnswer = document.getElementById('inputAnswer');
let submit = document.getElementById('submit'); // meklējam pogu.
let indikatorID = document.getElementById('indikatorID'); // tiek atrasts tags <footer>, kurā tas vizuāli parādīs progresa kustību.
let animalTranslationID = document.getElementById('animalTranslationID');
let SoundOutput = document.getElementById('SoundOutput')
let currentSound


let counter = 0;
let total = animalLv.length; // Saglabājam sākotnējo dzīvnieku skaitu

// Funkcija, lai atjauninātu progresu
function updateProgress() {
    
    let progress = Math.round((counter / total) * 100); // Aprēķinām progresu
    indikatorID.style.width = progress + "%";
    indikatorID.innerHTML = "PROGRESS " + progress + "%";
}


let randomElem = Math.floor(Math.random() * animalLv.length);
animalImgID.src = img[randomElem];
animalNameID.innerHTML = animalLv[randomElem];
animalDescriptionID.innerHTML = descriptionArr[randomElem];
animalTranslationID.innerHTML = "Dzīvnieka tulkojums angļu valodā: " + animalEn[randomElem];
currentSound = sound[randomElem];



SoundOutput.addEventListener('click', function () {

    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0; // Audio sāksies no sākuma, ja pēc tam atkal nospiedīs uz ikonas
    }
    else {
        audio = new Audio(currentSound);
        audio.play();
    }
})

submit.addEventListener('click', function () {
    // Ja visi dzīvnieki ir parādīti, apstājam spēli
    if (counter == total) {
        indikatorID.style.width = "99%"; // Pārliecināmies, ka progress ir 100%
        return; // Spēle ir beigusies
    }


    // Pārtrauc skaņas skanēšanu, ja tāda ir
    if (audio && !audio.paused) {
        audio.pause();
        audio.currentTime = 0;
    }

    // Izņemam elementu no masīviem
    animalLv.splice(randomElem, 1);
    img.splice(randomElem, 1);
    descriptionArr.splice(randomElem, 1);
    animalEn.splice(randomElem, 1);
    sound.splice(randomElem, 1);

    counter++; // Palielinām skaitītāju

    // Atjauninām progresu
    updateProgress();

    // Ja masīvā ir vēl dzīvnieki, parādām nākamo
    if (animalLv.length > 0) {
        randomElem = Math.floor(Math.random() * animalLv.length);
        animalImgID.src = img[randomElem];
        animalNameID.innerHTML = animalLv[randomElem];
        animalDescriptionID.innerHTML = descriptionArr[randomElem];
        animalTranslationID.innerHTML = "Dzīvnieka tulkojums angļu valodā: " + animalEn[randomElem];
        currentSound = sound[randomElem]
    }
}
)


function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'lv',
        includedLanguages: 'lv,en',
        autoDisplay: false
    }, 'google_translate_element');
}

// Pārslēdz valodas
document.getElementById('TranslateOutput').addEventListener('click', function () {
    const googleTranslateSelect = document.querySelector('.goog-te-combo');
    if (googleTranslateSelect) {
        let currentLang = document.documentElement.lang;
        let newLang = (currentLang === 'lv') ? 'en' : 'lv';
        googleTranslateSelect.value = newLang;
        googleTranslateSelect.dispatchEvent(new Event('change'));
    }
})