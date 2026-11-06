// 法文對照（Français）：爬山・登山
// 格式見 fr-food.js。由 Claude 翻譯，未經法語母語者校對。
window.FRW = window.FRW || {};
window.FRP = window.FRP || {};
window.addFrench = window.addFrench || function (id, o) {
  const W = (window.FRW[id] = window.FRW[id] || {}), P = (window.FRP[id] = window.FRP[id] || {});
  const lines = (s) => (s || "").split("\n").map((l) => l.trim()).filter(Boolean).map((l) => l.split("|").map((x) => x.trim()));
  // French puts a space before ? ! : ; — make it non-breaking so the mark never wraps onto its own line.
  const nb = (s) => s.replace(/ ([?!:;»])/g, " $1").replace(/« /g, "« ");
  lines(o.words).forEach(([en, w, ex]) => { W[en] = [nb(w), nb(ex)]; });
  lines(o.phrases).forEach(([en, f]) => { P[en] = nb(f); });
};


addFrench("hiking", {
  words: `
mountain | la montagne | Nous avons gravi une montagne dimanche.
hill | la colline | Il y a une petite colline derrière chez moi.
hike | la randonnée | Faisons une randonnée ce week-end.
hiker | le randonneur | Le sentier était plein de randonneurs.
trail | le sentier | Ce sentier mène au sommet.
path | le chemin | Reste sur le chemin.
climb | monter | Il faut deux heures pour monter la colline.
top | le sommet | Nous avons enfin atteint le sommet !
peak | le pic | Ce pic est couvert de neige.
view | la vue | La vue d'ici est incroyable.
map | la carte | Laisse-moi regarder la carte.
backpack | le sac à dos | Mon sac à dos est trop lourd.
water bottle | la gourde | N'oublie pas ta gourde.
snack | l'en-cas | Arrêtons-nous pour un en-cas.
hat | le chapeau | Mets un chapeau au soleil.
sunscreen | la crème solaire | Mets de la crème solaire avant de partir.
sunglasses | les lunettes de soleil | Il fait très clair ici. J'ai besoin de mes lunettes de soleil.
jacket | la veste | Il fait froid au sommet, alors prends une veste.
raincoat | l'imperméable | J'ai pris un imperméable au cas où.
hiking boots | les chaussures de randonnée | Mes nouvelles chaussures de randonnée sont très confortables.
socks | les chaussettes | Prends une paire de chaussettes en plus.
rock | le rocher | Asseyons-nous sur ce gros rocher.
tree | l'arbre | Nous nous sommes reposés sous un grand arbre.
forest | la forêt | Le sentier traverse une forêt calme.
river | la rivière | Nous avons traversé une rivière en chemin.
stream | le ruisseau | L'eau du ruisseau est très claire.
waterfall | la cascade | Prenons une photo à la cascade.
lake | le lac | Il y a un lac près du sommet.
bridge | le pont | Le pont bouge un peu.
sign | le panneau | Le panneau indique deux kilomètres jusqu'au sommet.
stairs | les marches | Il y a tellement de marches sur ce sentier !
uphill | en montée | Marcher en montée, c'est dur.
downhill | en descente | Vas-y doucement en descente.
steep | raide | Ce passage est très raide.
flat | plat | La première partie du sentier est plate.
easy | facile | C'est un sentier facile pour les enfants.
hard | difficile | Cette montagne est trop difficile pour les débutants.
tired | fatigué | Je suis fatigué. On peut se reposer ?
rest | se reposer | Reposons-nous cinq minutes.
sweat | la sueur | Je suis couvert de sueur.
thirsty | avoir soif | J'ai tellement soif.
hungry | avoir faim | Grimper me donne faim.
lunch | le déjeuner | Nous avons déjeuné au sommet.
picnic | le pique-nique | Faisons un pique-nique au bord du lac.
photo | la photo | Tu peux nous prendre en photo ?
flashlight | la lampe de poche | Prends une lampe de poche au cas où il fasse nuit.
weather | la météo | Vérifie la météo avant de partir.
sunny | ensoleillé | Il fait beau aujourd'hui, parfait pour une randonnée.
cloudy | nuageux | C'est nuageux, on ne verra peut-être pas grand-chose.
rain | la pluie | Il s'est mis à pleuvoir pendant la descente.
windy | venteux | Il y a beaucoup de vent sur la crête.
cold | froid | Il fait froid au sommet.
fog | le brouillard | Le brouillard est si épais que je ne vois pas le sentier.
cloud | le nuage | Nous sommes au-dessus des nuages !
sunrise | le lever du soleil | Nous sommes partis tôt pour voir le lever du soleil.
sunset | le coucher du soleil | Descendons avant le coucher du soleil.
bird | l'oiseau | J'entends les oiseaux chanter.
bug | l'insecte | Il y a beaucoup d'insectes en été.
snake | le serpent | Attention ! Il y a un serpent sur le chemin.
monkey | le singe | Ne nourris pas les singes.
flower | la fleur | Regarde toutes ces fleurs sauvages !
leaf | la feuille | Une feuille rouge m'est tombée sur la tête.
mud | la boue | Mes chaussures sont couvertes de boue.
muddy | boueux | Le sentier est boueux après la pluie.
slippery | glissant | Les rochers sont glissants. Fais attention.
fall | tomber | Tiens-moi la main pour ne pas tomber.
careful | prudent | Sois prudent sur les marches mouillées.
safe | sûr | Ce sentier est-il sûr pour les enfants ?
danger | le danger | Danger ! Ne dépassez pas ce panneau.
lost | perdu | Je crois qu'on est perdus.
follow | suivre | Suis les panneaux rouges.
turn back | faire demi-tour | Il commence à faire nuit. Faisons demi-tour.
start | partir | On part à quelle heure ?
finish | finir | Nous avons fini la randonnée en quatre heures.
parking lot | le parking | Retrouvons-nous au parking.
bus stop | l'arrêt de bus | L'arrêt de bus est près du départ du sentier.
toilet | les toilettes | Il y a des toilettes sur le sentier ?
bench | le banc | Asseyons-nous une minute sur ce banc.
cabin | le refuge | Nous avons dormi dans un refuge en montagne.
guide | le guide | Notre guide connaît tous les sentiers ici.
group | le groupe | Reste avec le groupe.
walk | marcher | Nous avons marché pendant trois heures.
slow | doucement | Allons-y doucement et profitons de la vue.
fast | vite | Tu marches trop vite pour moi !
kilometer | le kilomètre | Le sentier fait huit kilomètres.
early | tôt | Partons tôt pour éviter la chaleur.
trash | les déchets | Emporte tes déchets.
plastic bag | le sac plastique | Mets tes déchets dans ce sac plastique.
walking stick | le bâton de marche | Un bâton de marche aide à la descente.
knee | le genou | J'ai mal au genou en descente.
blister | l'ampoule | J'ai une ampoule au pied.
first aid kit | la trousse de secours | Emporte toujours une trousse de secours.
whistle | le sifflet | Siffle si tu as besoin d'aide.
help | l'aide | À l'aide ! Mon ami est blessé.
gloves | les gants | Mets des gants pour tenir la corde.
towel | la serviette | J'ai apporté une petite serviette pour la sueur.
rice ball | la boulette de riz | J'apporte toujours une boulette de riz pour le déjeuner.
fruit | le fruit | Les fruits sont un excellent en-cas en randonnée.
temple | le temple | Il y a un petit temple sur le chemin de la montée.
mountain top | le sommet de la montagne | Il y a du vent au sommet de la montagne.
weekend | le week-end | Nous faisons de la randonnée tous les week-ends.
fresh air | l'air pur | J'adore l'air pur de la montagne.
quiet | calme | C'est tellement calme ici.
`,
  phrases: `
Do you like hiking? | Tu aimes la randonnée ?
Let's go hiking this weekend. | Allons faire une randonnée ce week-end.
Which mountain should we climb? | Quelle montagne on gravit ?
How long is the trail? | Le sentier fait combien de kilomètres ?
How long does it take to get to the top? | Il faut combien de temps pour arriver au sommet ?
Is it hard? | C'est difficile ?
Is this trail good for beginners? | Ce sentier convient-il aux débutants ?
What time should we meet? | On se retrouve à quelle heure ?
Let's meet at the train station at seven. | Retrouvons-nous à la gare à sept heures.
How do we get to the trailhead? | Comment on va au départ du sentier ?
Can we take a bus there? | On peut y aller en bus ?
Is there parking near the trail? | Il y a un parking près du sentier ?
What should I bring? | Qu'est-ce que je dois apporter ?
Bring lots of water. | Apporte beaucoup d'eau.
Wear comfortable shoes. | Mets des chaussures confortables.
Don't wear jeans. | Ne mets pas de jean.
Bring a jacket. It's cold at the top. | Prends une veste. Il fait froid au sommet.
Don't forget your hat. | N'oublie pas ton chapeau.
Did you put on sunscreen? | Tu as mis de la crème solaire ?
I'll bring some snacks. | J'apporterai des en-cas.
Let's check the weather first. | Vérifions d'abord la météo.
It might rain this afternoon. | Il risque de pleuvoir cet après-midi.
Let's start early. | Partons tôt.
Ready? Let's go! | Prêt ? On y va !
This way. | Par ici.
Follow me. | Suis-moi.
Stay on the trail. | Reste sur le sentier.
Is this the right way? | C'est le bon chemin ?
Which way do we go? | On va par où ?
The sign says go left. | Le panneau dit d'aller à gauche.
Watch your step. | Regarde où tu mets les pieds.
Be careful, it's slippery. | Attention, ça glisse.
Hold on to the rope. | Tiens-toi à la corde.
Go slowly. | Vas-y doucement.
Wait for me! | Attends-moi !
Can we take a break? | On peut faire une pause ?
I need to rest. | J'ai besoin de me reposer.
Let's rest here for a few minutes. | Reposons-nous ici quelques minutes.
I'm so tired. | Je suis tellement fatigué.
My legs hurt. | J'ai mal aux jambes.
I'm out of water. | Je n'ai plus d'eau.
Do you want some water? | Tu veux de l'eau ?
Have some chocolate. | Prends un peu de chocolat.
How much farther? | C'est encore loin ?
We're almost there. | On y est presque.
Just a little more. | Encore un petit effort.
You can do it! | Tu peux le faire !
Keep going! | Continue !
We made it! | On a réussi !
We're at the top! | On est au sommet !
What a beautiful view! | Quelle belle vue !
Look at the clouds! | Regarde les nuages !
Let's take a photo. | Prenons une photo.
Can you take a picture of us? | Tu peux nous prendre en photo ?
Let's eat lunch here. | Déjeunons ici.
It's windy up here. | Il y a du vent ici.
It's getting cold. | Il commence à faire froid.
Put on your jacket. | Mets ta veste.
It's starting to rain. | Il commence à pleuvoir.
Let's go down now. | Descendons maintenant.
Going down is harder on my knees. | La descente est plus dure pour mes genoux.
Don't run downhill. | Ne cours pas en descente.
Use your walking stick. | Utilise ton bâton de marche.
I think I have a blister. | Je crois que j'ai une ampoule.
I twisted my ankle. | Je me suis tordu la cheville.
Are you okay? | Ça va ?
Can you walk? | Tu peux marcher ?
Do you have a bandage? | Tu as un pansement ?
I think we're lost. | Je crois qu'on est perdus.
Let's go back the way we came. | Revenons par le même chemin.
There's no signal here. | Il n'y a pas de réseau ici.
It's getting dark. | Il commence à faire nuit.
Turn on your flashlight. | Allume ta lampe de poche.
Stay together. | Restez groupés.
Don't go near the edge. | Ne t'approche pas du bord.
Don't feed the monkeys. | Ne nourris pas les singes.
Look, a snake! Don't move. | Regarde, un serpent ! Ne bouge pas.
There are a lot of mosquitoes. | Il y a beaucoup de moustiques.
Take your trash with you. | Emporte tes déchets.
Don't pick the flowers. | Ne cueille pas les fleurs.
Where's the toilet? | Où sont les toilettes ?
Is there a store at the top? | Il y a un magasin au sommet ?
I'm so hungry. | J'ai tellement faim.
This rice ball tastes great after a hike. | Cette boulette de riz est délicieuse après une randonnée.
That was fun! | C'était amusant !
That was harder than I thought. | C'était plus dur que je pensais.
My legs will hurt tomorrow. | J'aurai mal aux jambes demain.
Let's do it again next month. | Refaisons-le le mois prochain.
I want to climb a higher mountain next time. | La prochaine fois, je veux gravir une montagne plus haute.
I hike every Sunday. | Je fais de la randonnée tous les dimanches.
Hiking is good for your health. | La randonnée est bonne pour la santé.
I love the fresh air. | J'adore l'air pur.
It's so quiet here. | C'est tellement calme ici.
Listen to the birds. | Écoute les oiseaux.
Let's sit in the shade. | Asseyons-nous à l'ombre.
The water is so clear. | L'eau est tellement claire.
Can we drink this water? | On peut boire cette eau ?
No, don't drink it. | Non, ne la bois pas.
Let's take the cable car down. | Descendons en téléphérique.
Thanks for coming with me. | Merci d'être venu avec moi.
`,
});

addFrench("hiking", {
  words: `
trailhead | le départ du sentier | Retrouvons-nous au départ du sentier à 7 heures.
summit | le sommet | Nous avons atteint le sommet juste avant midi.
ridge | la crête | Marcher sur la crête donnait l'impression d'être sur le toit du monde.
valley | la vallée | Le village se trouve au fond de la vallée.
slope | la pente | La pente est couverte de pierres instables.
cliff | la falaise | Éloigne-toi du bord de la falaise.
elevation | l'altitude | Le sommet est à 3 000 mètres d'altitude.
altitude | l'altitude | C'est plus difficile de respirer en haute altitude.
switchback | le lacet | Le sentier monte en zigzag par une série de lacets.
loop trail | la boucle | Une boucle te ramène à ton point de départ.
round trip | l'aller-retour | L'aller-retour prend environ cinq heures.
distance | la distance | Quelle est la distance totale de la randonnée ?
pace | le rythme | Gardons un rythme régulier.
trekking poles | les bâtons de randonnée | Les bâtons de randonnée soulagent les genoux.
daypack | le sac de journée | Un sac de journée de 20 litres suffit pour cette randonnée.
hydration bladder | la poche à eau | Je bois à ma poche à eau en marchant.
layers | les couches | Habille-toi en couches pour t'adapter à la température.
fleece | la polaire | Mets une polaire quand on s'arrête pour déjeuner.
windbreaker | le coupe-vent | Un coupe-vent léger est parfait pour la crête.
waterproof | imperméable | Tes chaussures sont imperméables ?
breathable | respirant | Choisis un tee-shirt respirant qui sèche vite.
ankle | la cheville | Les chaussures montantes maintiennent la cheville sur les sentiers rocheux.
sprain | l'entorse | Elle s'est fait une entorse à la cheville pendant la descente.
cramp | la crampe | J'ai eu une crampe à la jambe près du sommet.
sunburn | le coup de soleil | J'ai pris un gros coup de soleil sur la crête.
dehydration | la déshydratation | Les maux de tête peuvent être un signe de déshydratation.
heatstroke | le coup de chaleur | Randonner à midi en été peut provoquer un coup de chaleur.
trail map | la carte des sentiers | Prends une carte des sentiers au centre d'accueil.
GPS | le GPS | Le GPS de mon téléphone indique qu'on est sortis du sentier.
compass | la boussole | Tu sais utiliser une boussole ?
offline map | la carte hors ligne | Télécharge une carte hors ligne avant de perdre le réseau.
landmark | le point de repère | Le gros rocher est un bon point de repère.
junction | l'intersection | Tourne à gauche à la prochaine intersection.
detour | le détour | Le pont est fermé, alors il faut faire un détour.
shortcut | le raccourci | Ne prends pas de raccourcis ; ils abîment la pente.
viewpoint | le point de vue | Il y a un point de vue à mi-chemin.
observation deck | la plateforme d'observation | Nous avons regardé le coucher du soleil depuis la plateforme d'observation.
mountain hut | le refuge | Nous avons passé la nuit dans un refuge.
campsite | l'emplacement de camping | L'emplacement de camping est à côté d'un ruisseau.
permit | le permis | Il faut un permis pour gravir cette montagne.
ranger | le garde forestier | Le garde forestier a vérifié nos permis.
national park | le parc national | Taroko est l'un des parcs nationaux de Taïwan.
scenic | pittoresque | C'est le sentier le plus pittoresque de la région.
breathtaking | à couper le souffle | La vue du sommet était à couper le souffle.
wildlife | la faune | Garde tes distances avec la faune sauvage.
wasp | la guêpe | Ne mets pas de parfum ; ça attire les guêpes.
leech | la sangsue | Vérifie tes chaussettes après la randonnée pour les sangsues.
tick | la tique | Les tiques peuvent transmettre des maladies, alors vérifie ta peau.
insect repellent | l'anti-moustique | Mets de l'anti-moustique sur tes jambes.
rain gear | l'équipement de pluie | Prends ton équipement de pluie même s'il fait beau.
forecast | les prévisions | Les prévisions annoncent de la pluie l'après-midi.
thunderstorm | l'orage | Les orages de l'après-midi sont fréquents en été.
typhoon | le typhon | Le sentier est fermé à cause du typhon.
landslide | le glissement de terrain | Un glissement de terrain a bloqué une partie du sentier.
falling rocks | les chutes de pierres | Attention aux chutes de pierres dans cette zone.
trail closure | la fermeture du sentier | Vérifie les fermetures de sentiers avant de partir.
warm up | s'échauffer | Échauffe tes jambes avant la montée.
stretch | étirer | Étire tes mollets après la randonnée.
stamina | l'endurance | Il faut une bonne endurance pour une longue randonnée.
endurance | l'endurance | La randonnée développe l'endurance.
out of breath | essoufflé | Je suis essoufflé après ces marches.
catch your breath | reprendre son souffle | Arrête-toi ici et reprends ton souffle.
ascend | monter | Nous sommes montés de 800 mètres en trois heures.
descend | descendre | Descendre est souvent plus dur pour les genoux.
scramble | escalader | Nous avons dû escalader les rochers près du sommet.
rope | la corde | Tiens la corde dans le passage raide.
chain | la chaîne | Il y a des chaînes pour se tenir sur la paroi rocheuse.
handrail | la rampe | Utilise la rampe sur les marches mouillées.
boardwalk | le caillebotis | Le caillebotis te garde les pieds hors de la boue.
stream crossing | le passage de ruisseau | Le passage de ruisseau est dangereux après de fortes pluies.
energy bar | la barre énergétique | Mange une barre énergétique environ toutes les heures.
electrolytes | les électrolytes | Ajoute des électrolytes à ton eau quand il fait chaud.
trail mix | le mélange de fruits secs | J'apporte toujours un sachet de mélange de fruits secs.
headlamp | la lampe frontale | Prends une lampe frontale pour la randonnée au lever du soleil.
power bank | la batterie externe | Ma batterie externe a gardé mon téléphone en vie toute la journée.
itinerary | l'itinéraire | Laisse ton itinéraire à un ami.
solo hike | la randonnée en solo | Une randonnée en solo peut être paisible mais risquée.
hiking buddy | le compagnon de randonnée | Mon compagnon de randonnée emporte toujours de l'eau en plus.
hiking club | le club de randonnée | J'ai rejoint un club de randonnée pour rencontrer des gens.
beginner-friendly | adapté aux débutants | Ce sentier est adapté aux débutants.
challenging | exigeant | La dernière partie est assez exigeante.
moderate | modéré | C'est une randonnée de difficulté modérée avec quelques passages raides.
well-marked | bien balisé | Le sentier est bien balisé, c'est difficile de se perdre.
overgrown | envahi par la végétation | Le chemin est envahi par la végétation et difficile à suivre.
rocky | rocailleux | Le sentier rocailleux est dur pour les chevilles.
gravel | le gravier | La route de gravier mène au départ du sentier.
shade | l'ombre | Reposons-nous à l'ombre.
sea of clouds | la mer de nuages | Nous avons vu une mer de nuages au lever du soleil.
wildflowers | les fleurs sauvages | La prairie était pleine de fleurs sauvages.
pack out | redescendre ses déchets | Redescends tout ce que tu as monté.
Leave No Trace | ne laisser aucune trace | Ne laisser aucune trace, c'est laisser la nature telle qu'on l'a trouvée.
night hike | la randonnée nocturne | Nous avons vu des grenouilles et des hiboux lors d'une randonnée nocturne.
rescue | le secours | L'équipe de secours est arrivée après deux heures.
injury | la blessure | Signale toute blessure au guide immédiatement.
bandage | le bandage | Enroule le bandage autour de sa cheville.
signal | le réseau | Il n'y a pas de réseau dans la vallée.
emergency number | le numéro d'urgence | À Taïwan, le numéro d'urgence est le 119.
cable car | le téléphérique | Nous avons pris le téléphérique pour descendre de la montagne.
visitor center | le centre d'accueil | Le centre d'accueil a des cartes des sentiers gratuites.
mountain bike | le VTT | Attention aux VTT sur les sentiers partagés.
calves | les mollets | J'ai mal aux mollets après la montée.
sore | courbaturé | J'ai eu les jambes courbaturées pendant deux jours.
`,
});

addFrench("hiking", {
  phrases: `
Have you done this trail before? | Tu as déjà fait ce sentier ?
How long is the round trip? | Combien de temps dure l'aller-retour ?
What's the elevation gain on this hike? | Quel est le dénivelé de cette randonnée ?
Is it a loop trail or out and back? | C'est une boucle ou un aller-retour ?
Is the trail well-marked? | Le sentier est bien balisé ?
Do we need a permit for this mountain? | Il faut un permis pour cette montagne ?
I applied for the permit online last week. | J'ai demandé le permis en ligne la semaine dernière.
We should leave our itinerary with someone. | Nous devrions laisser notre itinéraire à quelqu'un.
Let me download an offline map in case we lose signal. | Je télécharge une carte hors ligne au cas où on perdrait le réseau.
The forecast says thunderstorms in the afternoon. | Les prévisions annoncent des orages l'après-midi.
We should be off the mountain by two. | Nous devrions être redescendus avant deux heures.
If the weather turns bad, we'll turn back. | Si le temps se gâte, nous ferons demi-tour.
Dress in layers so you can adjust as you go. | Habille-toi en couches pour t'adapter en chemin.
Cotton stays wet, so wear something that dries quickly. | Le coton reste mouillé, alors porte quelque chose qui sèche vite.
Are your boots broken in? | Tes chaussures sont rodées ?
Trekking poles really save your knees on the way down. | Les bâtons de randonnée ménagent vraiment les genoux à la descente.
Pack a headlamp even if you plan to be back early. | Prends une lampe frontale même si tu comptes rentrer tôt.
I always carry a small first aid kit and an emergency blanket. | J'emporte toujours une petite trousse de secours et une couverture de survie.
Let's warm up a bit before we start. | Échauffons-nous un peu avant de partir.
Let's keep a steady pace instead of rushing. | Gardons un rythme régulier au lieu de nous précipiter.
Walk at a pace where you can still talk. | Marche à un rythme qui te permet encore de parler.
The first hour is all stairs. | La première heure, ce ne sont que des marches.
This section is pretty steep, so take it slow. | Ce passage est assez raide, alors vas-y doucement.
I'm out of breath. Can we stop and catch our breath? | Je suis essoufflé. On peut s'arrêter pour reprendre notre souffle ?
Take small sips of water often. | Bois de petites gorgées souvent.
Have something salty; it helps with cramps. | Mange quelque chose de salé ; ça aide contre les crampes.
I think I'm getting a cramp in my calf. | Je crois que j'ai une crampe qui arrive au mollet.
You look pale. Do you feel dizzy? | Tu es pâle. Tu as la tête qui tourne ?
Let's rest in the shade until you feel better. | Reposons-nous à l'ombre jusqu'à ce que tu ailles mieux.
The trail splits here. Which way does the map say? | Le sentier se sépare ici. La carte dit d'aller par où ?
Follow the ribbons tied to the trees. | Suis les rubans accrochés aux arbres.
I think we missed the junction. | Je crois qu'on a raté l'intersection.
Let's go back to the last trail marker. | Revenons au dernier balisage.
According to the GPS, we're off the trail. | D'après le GPS, on est sortis du sentier.
Let's not take shortcuts. They cause erosion. | Ne prenons pas de raccourcis. Ils provoquent de l'érosion.
The bridge is out, so we'll have to take a detour. | Le pont est coupé, alors il faudra faire un détour.
Watch out for falling rocks in this section. | Attention aux chutes de pierres dans ce passage.
Hold on to the chain and don't look down. | Tiens-toi à la chaîne et ne regarde pas en bas.
Use three points of contact when you climb the rocks. | Garde trois points d'appui quand tu escalades les rochers.
The rocks are wet, so test each step. | Les rochers sont mouillés, alors teste chaque pas.
After heavy rain, the stream crossing can be dangerous. | Après de fortes pluies, le passage du ruisseau peut être dangereux.
Unbuckle your hip belt when you cross the stream. | Détache ta ceinture ventrale quand tu traverses le ruisseau.
Check your legs for leeches. | Vérifie qu'il n'y a pas de sangsues sur tes jambes.
Spray some insect repellent before we go into the forest. | Mets de l'anti-moustique avant d'entrer dans la forêt.
If you see wasps, move away slowly and quietly. | Si tu vois des guêpes, éloigne-toi lentement et sans bruit.
Keep your distance from the monkeys; they'll grab your food. | Garde tes distances avec les singes ; ils te prendront ta nourriture.
We're halfway there. | Nous sommes à mi-chemin.
There's a viewpoint just around the corner. | Il y a un point de vue juste après le virage.
Is that the summit, or is it a false summit? | C'est le sommet, ou un faux sommet ?
The last stretch is the hardest. | La dernière partie est la plus dure.
We reached the summit in three and a half hours. | Nous avons atteint le sommet en trois heures et demie.
We were lucky to see a sea of clouds. | Nous avons eu la chance de voir une mer de nuages.
On a clear day, you can see all the way to the ocean. | Par temps clair, on voit jusqu'à l'océan.
Let's take a summit photo with the marker. | Prenons une photo au sommet avec la borne.
Don't stay too long; the clouds are coming in. | Ne restons pas trop longtemps ; les nuages arrivent.
Put your jacket on before you get cold. | Mets ta veste avant d'avoir froid.
Going down, keep your knees slightly bent. | En descente, garde les genoux légèrement fléchis.
Take shorter steps on the way down. | Fais des pas plus courts en descente.
My toes hit the front of my boots on the way down. | Mes orteils tapent au bout de mes chaussures en descente.
Tighten your laces before the descent. | Serre tes lacets avant la descente.
We need to hurry; we only have an hour of daylight left. | Il faut se dépêcher ; il ne reste qu'une heure de jour.
If we get lost, we should stay put and call for help. | Si on se perd, il faut rester sur place et appeler à l'aide.
Save your phone battery in case of an emergency. | Économise la batterie de ton téléphone en cas d'urgence.
Call 119 and tell them our location. | Appelle le 119 et donne-leur notre position.
Send them our GPS coordinates. | Envoie-leur nos coordonnées GPS.
Can you put weight on your ankle? | Tu peux t'appuyer sur ta cheville ?
Let me wrap it with a bandage. | Laisse-moi la bander.
Let's carry some of your gear for you. | On va porter une partie de ton matériel.
Pack out everything you bring in. | Redescends tout ce que tu as monté.
Even fruit peels count as trash. | Même les épluchures de fruits sont des déchets.
Please keep your voice down so others can enjoy the quiet. | Parle moins fort, s'il te plaît, pour que les autres profitent du calme.
Hikers going uphill have the right of way. | Les randonneurs qui montent ont la priorité.
Let's step aside and let them pass. | Mettons-nous sur le côté pour les laisser passer.
Good morning! How's the trail ahead? | Bonjour ! Le sentier est comment plus loin ?
Is it muddy up there? | C'est boueux là-haut ?
How long did it take you from the top? | Ça vous a pris combien de temps depuis le sommet ?
The mountain hut is fully booked this weekend. | Le refuge est complet ce week-end.
We'll stay at the cabin and summit at sunrise. | Nous dormirons au refuge et atteindrons le sommet au lever du soleil.
Let's set the alarm for 3 a.m. | Mettons le réveil à 3 heures du matin.
It was freezing at sunrise, but it was worth it. | Il faisait glacial au lever du soleil, mais ça valait le coup.
I've been training on stairs to build up my stamina. | Je m'entraîne dans les escaliers pour améliorer mon endurance.
I want to try a two-day hike next. | La prochaine fois, je veux essayer une randonnée de deux jours.
My hiking club goes out every other Saturday. | Mon club de randonnée sort un samedi sur deux.
Do you know any beginner-friendly trails near Taipei? | Tu connais des sentiers pour débutants près de Taipei ?
The trail is closed because of the typhoon damage. | Le sentier est fermé à cause des dégâts du typhon.
A landslide blocked part of the trail. | Un glissement de terrain a bloqué une partie du sentier.
I prefer hiking in the fall when it's cooler. | Je préfère randonner en automne quand il fait plus frais.
Hiking clears my head after a stressful week. | La randonnée me vide la tête après une semaine stressante.
Let's stretch before we get in the car. | Étirons-nous avant de remonter en voiture.
My calves are so sore I can barely walk downstairs. | J'ai tellement mal aux mollets que j'ai du mal à descendre les escaliers.
I'll soak in a hot spring after the hike. | Après la randonnée, je vais me baigner dans une source chaude.
The visitor center has free trail maps. | Le centre d'accueil a des cartes des sentiers gratuites.
The ranger told us the upper trail is icy. | Le garde forestier nous a dit que le sentier du haut est verglacé.
Mountain weather can change in minutes. | En montagne, le temps peut changer en quelques minutes.
We should have brought more water. | Nous aurions dû apporter plus d'eau.
Next time, let's bring rain covers for our packs. | La prochaine fois, prenons des housses de pluie pour nos sacs.
I'd rather turn back than take a risk. | Je préfère faire demi-tour que prendre un risque.
Share your location with me before you go solo. | Partage ta position avec moi avant de partir seul.
That was one of the best hikes I've ever done. | C'était l'une des meilleures randonnées que j'aie jamais faites.
Let's check the trail conditions online before we go. | Vérifions l'état des sentiers en ligne avant de partir.
I'll text you when I'm back at the trailhead. | Je t'enverrai un message quand je serai revenu au départ du sentier.
`,
});

addFrench("hiking", {
  words: `
mountaineering | l'alpinisme | L'alpinisme demande à la fois de la technique et du discernement.
expedition | l'expédition | L'expédition a mis trois semaines à atteindre le sommet.
base camp | le camp de base | Nous avons passé deux nuits au camp de base pour nous reposer.
acclimatize | s'acclimater | Les alpinistes ont besoin de temps pour s'acclimater à l'air raréfié.
altitude sickness | le mal des montagnes | Maux de tête et nausées sont les premiers signes du mal des montagnes.
hypothermia | l'hypothermie | Des vêtements mouillés et un vent fort peuvent vite provoquer une hypothermie.
frostbite | les gelures | Il a perdu deux doigts à cause des gelures.
crampons | les crampons | Mets tes crampons avant de traverser la glace.
ice axe | le piolet | Utilise ton piolet pour arrêter une glissade.
harness | le baudrier | Vérifie que ton baudrier est bien bouclé.
carabiner | le mousqueton | Accroche le mousqueton à la corde fixe.
belay | assurer | Tu peux m'assurer sur cette longueur ?
rappel | descendre en rappel | Nous avons dû descendre la paroi en rappel.
glacier | le glacier | L'itinéraire traverse un glacier.
crevasse | la crevasse | Encordez-vous pour éviter de tomber dans une crevasse.
avalanche | l'avalanche | Le risque d'avalanche est élevé après de fortes chutes de neige.
scree | l'éboulis | Monter dans un éboulis instable est épuisant.
saddle | le col | Nous avons installé le camp sur le col entre deux sommets.
ridgeline | la ligne de crête | La ligne de crête est exposée aux vents forts.
traverse | la traversée | La traversée de la chaîne centrale a duré cinq jours.
gradient | la pente | La pente devient plus raide après le refuge.
elevation gain | le dénivelé positif | La randonnée fait plus de 1 500 mètres de dénivelé positif.
false summit | le faux sommet | À chaque faux sommet, le vrai apparaissait derrière.
summit fever | la fièvre du sommet | La fièvre du sommet pousse les alpinistes à ignorer le danger.
turnaround time | l'heure de demi-tour | Fixe une heure de demi-tour et respecte-la.
contour lines | les courbes de niveau | Des courbes de niveau serrées indiquent un terrain raide.
topographic map | la carte topographique | Une carte topographique montre le relief.
bearing | l'azimut | Prends un azimut à la boussole avant que le brouillard arrive.
navigate | s'orienter | Tu sais t'orienter sans GPS ?
whiteout | le jour blanc | Par jour blanc, on ne distingue plus le sol du ciel.
wind chill | le refroidissement éolien | Avec le refroidissement éolien, on avait l'impression qu'il faisait moins vingt.
cornice | la corniche | Ne marche jamais près du bord d'une corniche.
exposure | le gaz | Le gaz sur cette arête n'est pas pour ceux qui ont le vertige.
via ferrata | la via ferrata | Une via ferrata permet aux randonneurs d'escalader des falaises en sécurité avec des câbles.
technical climb | l'ascension technique | C'est une ascension technique, il faudra des cordes et un guide.
fixed rope | la corde fixe | Accroche-toi à la corde fixe dans le passage raide.
porter | le porteur | Nous avons engagé un porteur pour notre nourriture.
trekking | le trekking | Le trekking au Népal a été le voyage d'une vie.
thru-hike | la traversée intégrale | La traversée intégrale du sentier prend environ cinq mois.
ultralight | ultraléger | Les randonneurs ultralégers économisent chaque gramme.
base weight | le poids de base | Mon poids de base est inférieur à sept kilos.
resupply | le ravitaillement | Nous nous ravitaillerons dans la prochaine ville.
waypoint | le point de passage | Enregistre la source d'eau comme point de passage.
GPX track | la trace GPX | Charge la trace GPX sur ta montre.
satellite messenger | le communicateur satellite | Un communicateur satellite fonctionne là où les téléphones ne passent pas.
personal locator beacon | la balise de détresse | N'active ta balise de détresse qu'en cas de réelle urgence.
helicopter evacuation | l'évacuation en hélicoptère | Une évacuation en hélicoptère peut coûter extrêmement cher.
self-rescue | l'autosauvetage | Chaque alpiniste devrait connaître les bases de l'autosauvetage.
risk assessment | l'évaluation des risques | Fais une évaluation des risques avant chaque ascension.
contingency plan | le plan de secours | Quel est notre plan de secours si le temps se gâte ?
escape route | l'itinéraire de repli | Connais ton itinéraire de repli avant de partir.
weather window | la fenêtre météo | Nous attendons une fenêtre météo pour tenter le sommet.
lightning | la foudre | Quitte la crête quand tu vois des éclairs.
treeline | la limite des arbres | Au-dessus de la limite des arbres, il n'y a aucun abri contre le vent.
alpine | alpin | Les fleurs alpines ne fleurissent que quelques semaines.
microclimate | le microclimat | Chaque vallée a son propre microclimat.
erosion | l'érosion | Couper les lacets accélère l'érosion.
trail maintenance | l'entretien des sentiers | Des bénévoles participent à l'entretien des sentiers chaque printemps.
carrying capacity | la capacité de charge | Les permis limitent le nombre de visiteurs pour protéger la capacité de charge du parc.
overtourism | le surtourisme | Le surtourisme abîme les sentiers de montagne populaires.
conservation | la préservation | Les droits d'entrée financent la préservation du parc national.
ecosystem | l'écosystème | Les écosystèmes de haute montagne sont fragiles.
endemic species | l'espèce endémique | L'ours noir de Formose est une espèce endémique.
cloud forest | la forêt de nuages | La forêt de nuages est humide et couverte de mousse.
hundred peaks | les cent sommets | Son objectif est de gravir les cent sommets de Taïwan.
Jade Mountain | le mont Jade | Le mont Jade est le plus haut sommet de Taïwan.
alpine start | le départ nocturne | Nous sommes partis de nuit à 2 heures du matin.
summit push | l'assaut final | L'assaut final a commencé avant l'aube.
bivouac | bivouaquer | Nous avons dû bivouaquer sur une vire pendant la nuit.
mountain rescue | le secours en montagne | Appelle le secours en montagne si quelqu'un est gravement blessé.
mountain accident | l'accident de montagne | La plupart des accidents de montagne arrivent à la descente.
insurance | l'assurance | Vérifie que ton assurance couvre la randonnée en haute altitude.
waiver | la décharge | Tout le monde doit signer une décharge avant l'ascension.
liability | la responsabilité | Les guides sont responsables de la sécurité de leurs clients.
foolhardy | téméraire | Grimper pendant un typhon serait téméraire.
perseverance | la persévérance | Atteindre le sommet demande de la persévérance.
grit | la ténacité | Il a fallu de la ténacité pour continuer sous la pluie.
panoramic | panoramique | Le sommet offre une vue panoramique sur la chaîne.
majestic | majestueux | Le pic majestueux s'élevait au-dessus des nuages.
rugged | accidenté | Le terrain accidenté nous a ralentis.
remote | isolé | Le sentier traverse une vallée isolée.
pristine | intact | Le lac est intact et d'une clarté cristalline.
awe-inspiring | grandiose | Le lever du soleil sur les sommets était grandiose.
vantage point | le point de vue | De ce point de vue, on voit toute la vallée.
terrain | le terrain | Le terrain passe de la forêt à la roche nue.
off-trail | hors sentier | Sortir des sentiers est dangereux et abîme les plantes.
bushwhack | se frayer un chemin | Nous avons dû nous frayer un chemin à travers des bambous épais.
dwarf bamboo | le bambou nain | Les pentes sont couvertes de bambou nain.
water source | le point d'eau | Il y a un point d'eau fiable près du refuge ?
water filter | le filtre à eau | Utilise un filtre à eau avant de boire l'eau des ruisseaux.
emergency blanket | la couverture de survie | Une couverture de survie peut te garder au chaud en cas de crise.
ankle brace | la chevillère | Je porte une chevillère dans les longues descentes.
knee brace | la genouillère | Une genouillère aide dans les descentes raides.
conditioning | la préparation physique | Une bonne préparation physique rend une grande ascension beaucoup plus sûre.
aerobic capacity | la capacité aérobie | L'entraînement dans les escaliers améliore la capacité aérobie.
oxygen saturation | la saturation en oxygène | Sa saturation en oxygène est descendue à 80 pour cent.
pulmonary edema | l'œdème pulmonaire | L'œdème pulmonaire de haute altitude peut être mortel.
descent | la descente | La descente a pris plus de temps que la montée.
ascent | l'ascension | La dernière ascension est la partie la plus raide.
route finding | l'orientation | S'orienter est difficile quand le balisage manque.
trail markers | le balisage | Suis le balisage accroché aux arbres.
hut warden | le gardien de refuge | Le gardien de refuge nous a demandé d'être calmes après 20 heures.
quota | le quota | Le quota quotidien pour le sommet est de 100 randonneurs.
lottery | le tirage au sort | Les permis sont attribués par tirage au sort.
`,
  phrases: `
The mountain will still be there next year; turning back is never a failure. | La montagne sera encore là l'année prochaine ; faire demi-tour n'est jamais un échec.
Most accidents happen on the way down, when people are tired and less careful. | La plupart des accidents arrivent à la descente, quand on est fatigué et moins prudent.
Set a turnaround time and stick to it, no matter how close the summit looks. | Fixe une heure de demi-tour et respecte-la, même si le sommet semble tout proche.
Summit fever has led many experienced climbers to make fatal mistakes. | La fièvre du sommet a conduit de nombreux alpinistes expérimentés à des erreurs fatales.
We'll spend a night at 3,000 meters to acclimatize before the summit push. | Nous passerons une nuit à 3 000 mètres pour nous acclimater avant l'assaut final.
If your headache gets worse, the only real cure for altitude sickness is to descend. | Si ton mal de tête empire, le seul vrai remède au mal des montagnes est de descendre.
Climb high, sleep low is the golden rule of acclimatization. | Monter haut, dormir bas : c'est la règle d'or de l'acclimatation.
Hypothermia can set in even in summer if you're wet and exposed to the wind. | L'hypothermie peut survenir même en été si on est mouillé et exposé au vent.
In a whiteout, trust your compass rather than your instincts. | Par jour blanc, fais confiance à ta boussole plutôt qu'à ton instinct.
The contour lines are tightly packed here, so expect a steep climb. | Les courbes de niveau sont très serrées ici, attends-toi à une montée raide.
We made an alpine start to avoid the afternoon storms. | Nous sommes partis de nuit pour éviter les orages de l'après-midi.
The ridgeline is fully exposed, so there's nowhere to hide if lightning strikes. | La ligne de crête est entièrement exposée, il n'y a nulle part où s'abriter en cas de foudre.
If you hear thunder, get off the ridge and away from tall trees. | Si tu entends le tonnerre, quitte la crête et éloigne-toi des grands arbres.
We're waiting for a weather window before we attempt the traverse. | Nous attendons une fenêtre météo avant de tenter la traversée.
It's a non-technical climb, but the exposure on the final ridge is intense. | Ce n'est pas une ascension technique, mais le gaz sur l'arête finale est impressionnant.
You'll need crampons and an ice axe above the treeline in winter. | En hiver, il faut des crampons et un piolet au-dessus de la limite des arbres.
Practice self-arrest with your ice axe before you need it. | Entraîne-toi à freiner au piolet avant d'en avoir besoin.
Rope up when crossing the glacier; hidden crevasses are a real danger. | Encordez-vous pour traverser le glacier ; les crevasses cachées sont un vrai danger.
Avalanche risk is considerable today, so we'll stick to the lower route. | Le risque d'avalanche est marqué aujourd'hui, alors nous prendrons l'itinéraire du bas.
We bushwhacked through dwarf bamboo for three hours. | Nous nous sommes frayé un chemin dans le bambou nain pendant trois heures.
Route finding becomes tricky when the trail markers disappear. | S'orienter devient délicat quand le balisage disparaît.
Always carry a paper map; batteries die and screens crack. | Emporte toujours une carte papier ; les batteries se vident et les écrans se cassent.
A satellite messenger is worth every penny when you're out of cell range. | Un communicateur satellite vaut chaque centime quand on est hors réseau.
Only activate the personal locator beacon in a life-threatening emergency. | N'active la balise de détresse qu'en cas d'urgence vitale.
Helicopter rescues are costly, and some countries bill the hikers. | Les secours en hélicoptère coûtent cher, et certains pays les facturent aux randonneurs.
Make sure your travel insurance covers high-altitude trekking. | Vérifie que ton assurance voyage couvre le trekking en haute altitude.
Hiking alone requires a much higher level of self-reliance. | Randonner seul demande beaucoup plus d'autonomie.
Our contingency plan is to bail out via the forest road if the weather turns. | Notre plan de secours est de nous replier par la piste forestière si le temps se gâte.
Know your escape routes before you commit to a long traverse. | Connais tes itinéraires de repli avant de t'engager dans une longue traversée.
The hut warden recommended we start before dawn because of the heat. | Le gardien du refuge nous a conseillé de partir avant l'aube à cause de la chaleur.
Permits for the summit are allocated by lottery because of the daily quota. | Les permis pour le sommet sont attribués par tirage au sort à cause du quota quotidien.
Quotas protect the trail's carrying capacity and the fragile alpine ecosystem. | Les quotas protègent la capacité de charge du sentier et le fragile écosystème alpin.
Overtourism has turned some famous trails into traffic jams. | Le surtourisme a transformé certains sentiers célèbres en embouteillages.
Cutting switchbacks accelerates erosion and destroys plant roots. | Couper les lacets accélère l'érosion et détruit les racines des plantes.
Leave No Trace isn't just about trash; it's also about noise and wildlife. | Ne laisser aucune trace, ce n'est pas seulement une question de déchets ; c'est aussi le bruit et la faune.
Feeding wildlife changes their behavior and can make them aggressive. | Nourrir la faune sauvage change son comportement et peut la rendre agressive.
The Formosan black bear is rarely seen, but you should still know what to do. | On voit rarement l'ours noir de Formose, mais il faut quand même savoir quoi faire.
If you meet a bear, back away slowly and never run. | Si tu croises un ours, recule lentement et ne cours jamais.
Climbing Taiwan's hundred peaks is a lifelong goal for many hikers. | Gravir les cent sommets de Taïwan est l'objectif d'une vie pour beaucoup de randonneurs.
Jade Mountain is a non-technical climb, but altitude still catches people off guard. | Le mont Jade n'est pas une ascension technique, mais l'altitude surprend encore beaucoup de gens.
My base weight is down to six kilograms since I switched to ultralight gear. | Mon poids de base est descendu à six kilos depuis que je suis passé au matériel ultraléger.
Going ultralight means trading comfort for speed and freedom. | Passer à l'ultraléger, c'est échanger le confort contre la vitesse et la liberté.
On a thru-hike, planning your resupply points is half the battle. | Sur une traversée intégrale, planifier ses ravitaillements, c'est la moitié du travail.
Filter or boil all water from streams, no matter how clear it looks. | Filtre ou fais bouillir toute l'eau des ruisseaux, même si elle semble claire.
Good conditioning won't make the mountain easier, but it will make you safer. | Une bonne préparation physique ne rendra pas la montagne plus facile, mais elle te rendra plus en sécurité.
Training with a weighted pack on stairs is the closest thing to real hiking. | S'entraîner dans les escaliers avec un sac lesté est ce qui se rapproche le plus de la vraie randonnée.
Strengthening your quads and glutes will protect your knees on long descents. | Renforcer tes quadriceps et tes fessiers protégera tes genoux dans les longues descentes.
Your oxygen saturation is low; we're not going any higher today. | Ta saturation en oxygène est basse ; nous ne monterons pas plus haut aujourd'hui.
Pulmonary edema at altitude can kill within hours if ignored. | L'œdème pulmonaire d'altitude peut tuer en quelques heures s'il est ignoré.
A false summit can crush your morale if you're not mentally prepared. | Un faux sommet peut briser ton moral si tu n'es pas préparé mentalement.
The final ascent tests your mind more than your legs. | La dernière ascension met à l'épreuve ton mental plus que tes jambes.
Mountains teach you humility; they don't care how fit you are. | La montagne t'apprend l'humilité ; elle se moque de ta forme physique.
The panoramic view from the summit made every painful step worth it. | La vue panoramique du sommet valait chaque pas douloureux.
There's something sublime about watching the sun rise above a sea of clouds. | Il y a quelque chose de sublime à voir le soleil se lever au-dessus d'une mer de nuages.
Standing on the ridge, I felt both tiny and incredibly alive. | Debout sur la crête, je me sentais à la fois minuscule et incroyablement vivant.
Mountaineering is ultimately about judgment, not bravery. | L'alpinisme est avant tout une question de jugement, pas de bravoure.
Being foolhardy in the mountains isn't brave; it puts rescuers at risk too. | Être téméraire en montagne n'est pas courageux ; cela met aussi les secouristes en danger.
Search and rescue teams are mostly volunteers who risk their own lives. | Les équipes de recherche et de sauvetage sont surtout des bénévoles qui risquent leur propre vie.
Guides have a duty of care, but every climber is responsible for their own decisions. | Les guides ont un devoir de vigilance, mais chaque alpiniste est responsable de ses décisions.
Before signing the waiver, read what the guide service is and isn't liable for. | Avant de signer la décharge, lis ce dont l'agence de guides est responsable ou non.
Experienced porters carry loads that would flatten most of us. | Les porteurs expérimentés portent des charges qui écraseraient la plupart d'entre nous.
Tip your porters and guides generously; the work is brutal. | Donne de bons pourboires aux porteurs et aux guides ; le travail est éreintant.
The microclimate in this valley means fog rolls in almost every afternoon. | À cause du microclimat de cette vallée, le brouillard arrive presque chaque après-midi.
The cloud forest is permanently damp, so everything you own will get wet. | La forêt de nuages est toujours humide, alors toutes tes affaires seront mouillées.
We had to bivouac under a rock overhang when darkness caught us. | Nous avons dû bivouaquer sous un surplomb rocheux quand la nuit nous a surpris.
In hindsight, we underestimated how long the descent would take. | Avec le recul, nous avons sous-estimé la durée de la descente.
Plan for the slowest person in the group, not the fastest. | Prévois pour la personne la plus lente du groupe, pas la plus rapide.
Communication on the trail matters as much as fitness. | Sur le sentier, la communication compte autant que la forme physique.
Don't let ego push you past your limits. | Ne laisse pas ton ego te pousser au-delà de tes limites.
A good hiking partner tells you the truth when you need to turn back. | Un bon compagnon de randonnée te dit la vérité quand il faut faire demi-tour.
The trail was so overgrown that we lost it several times. | Le sentier était tellement envahi par la végétation que nous l'avons perdu plusieurs fois.
Volunteers spend weekends doing trail maintenance so the rest of us can hike safely. | Des bénévoles passent leurs week-ends à entretenir les sentiers pour que nous puissions randonner en sécurité.
Trail fees help fund conservation and keep the huts running. | Les droits d'accès aident à financer la préservation et le fonctionnement des refuges.
Climate change is shrinking glaciers and shifting the treeline upward. | Le changement climatique fait fondre les glaciers et remonter la limite des arbres.
Endemic species here exist nowhere else on Earth. | Les espèces endémiques d'ici n'existent nulle part ailleurs sur Terre.
I've learned more about myself on long trails than anywhere else. | J'en ai appris plus sur moi-même sur les longs sentiers que n'importe où ailleurs.
You don't conquer a mountain; at best, it lets you visit. | On ne conquiert pas une montagne ; au mieux, elle nous laisse la visiter.
Getting to the summit is optional; getting back down is mandatory. | Atteindre le sommet est facultatif ; redescendre est obligatoire.
We were soaked, freezing and exhausted, yet none of us regretted it. | Nous étions trempés, gelés et épuisés, et pourtant aucun de nous ne l'a regretté.
Sharing a hard climb creates a bond that's hard to explain. | Partager une ascension difficile crée un lien difficile à expliquer.
I'd recommend starting with day hikes before attempting multi-day treks. | Je recommande de commencer par des randonnées d'une journée avant de tenter des treks de plusieurs jours.
The physical challenge is real, but the mental challenge is even bigger. | Le défi physique est réel, mais le défi mental est encore plus grand.
Keeping a steady rhythm is more efficient than stopping and starting. | Garder un rythme régulier est plus efficace que de s'arrêter et repartir.
We gained 1,200 meters in under five kilometers, which is brutal. | Nous avons pris 1 200 mètres de dénivelé en moins de cinq kilomètres, c'est brutal.
The descent was punishing on our knees and toes. | La descente a été un supplice pour nos genoux et nos orteils.
Once we dropped below the treeline, the wind finally eased off. | Une fois sous la limite des arbres, le vent s'est enfin calmé.
The scree slope was two steps forward, one step back. | Dans l'éboulis, c'était deux pas en avant, un pas en arrière.
The via ferrata gave us the thrill of climbing without the technical skills. | La via ferrata nous a donné le frisson de l'escalade sans compétences techniques.
After the trip, we shared the GPX track so others could follow our route. | Après le voyage, nous avons partagé la trace GPX pour que d'autres puissent suivre notre itinéraire.
Make sure someone at home knows when to raise the alarm if you don't check in. | Assure-toi que quelqu'un sait quand donner l'alerte si tu ne donnes pas de nouvelles.
A good risk assessment considers the weather, the terrain and the team. | Une bonne évaluation des risques tient compte de la météo, du terrain et de l'équipe.
Knowing when to say no is the most important mountaineering skill. | Savoir dire non est la compétence la plus importante en alpinisme.
The mountains will humble you, heal you and call you back. | La montagne te rendra humble, te guérira et te rappellera à elle.
Every mountain has its own character; you have to learn to read it. | Chaque montagne a son caractère ; il faut apprendre à le lire.
I've never felt more grateful for a warm bowl of noodles than after that climb. | Je n'ai jamais été aussi reconnaissant pour un bol de nouilles chaud qu'après cette ascension.
The pristine lake was worth the two-day trek to reach it. | Le lac intact valait les deux jours de marche pour l'atteindre.
Respect the mountain, respect the locals and respect the rules. | Respecte la montagne, les habitants et les règles.
We cut the trip short because one of us showed signs of altitude sickness. | Nous avons écourté le voyage parce que l'un de nous présentait des signes du mal des montagnes.
The wind on the exposed ridge was strong enough to knock us off balance. | Le vent sur la crête exposée était assez fort pour nous déséquilibrer.
A long day in the mountains requires far more calories than people expect. | Une longue journée en montagne demande bien plus de calories qu'on ne le pense.
We agreed as a team that any one of us could call off the climb. | Nous avons convenu en équipe que n'importe lequel d'entre nous pouvait annuler l'ascension.
`,
});
