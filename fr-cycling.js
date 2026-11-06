// 法文對照（Français）：自行車
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


addFrench("cycling", {
  words: `
bike | le vélo | Je vais à l'école à vélo.
bicycle | la bicyclette | Ma bicyclette est bleue.
ride | rouler | Roulons ensemble.
helmet | le casque | Porte toujours un casque.
wheel | la roue | La roue avant est à plat.
tire | le pneu | Mon pneu est à plat.
seat | la selle | Monte un peu la selle.
handlebars | le guidon | Tiens le guidon.
pedal | pédaler | Pédale plus vite !
chain | la chaîne | La chaîne a sauté.
brake | le frein | Utilise tes freins.
bell | la sonnette | Fais sonner ta sonnette.
light | la lumière | Allume ta lumière la nuit.
lock | l'antivol | Mets l'antivol à ton vélo.
basket | le panier | Mets ton sac dans le panier.
pump | la pompe | J'ai besoin d'une pompe.
air | l'air | Le pneu a besoin d'air.
flat tire | la crevaison | J'ai crevé.
fix | réparer | Tu peux réparer mon vélo ?
bike shop | le magasin de vélos | Apporte-le au magasin de vélos.
bike path | la piste cyclable | Roule sur la piste cyclable.
road | la route | Cette route est très fréquentée.
river | la rivière | Nous avons roulé le long de la rivière.
park | le parc | Roulons dans le parc.
hill | la côte | La côte est raide.
uphill | en montée | Rouler en montée, c'est dur.
downhill | en descente | Ralentis en descente.
fast | vite | Ne roule pas trop vite.
slow | lentement | Roule lentement ici.
stop | s'arrêter | Arrête-toi au feu rouge.
go | passer | Vert, ça veut dire qu'on passe.
turn | tourner | Tourne à gauche ici.
left | à gauche | Tourne à gauche au coin.
right | à droite | Tourne à droite.
careful | prudent | Sois prudent !
safe | sûr | Cette route est sûre ?
car | la voiture | Attention aux voitures.
scooter | le scooter | Il y a beaucoup de scooters.
traffic light | le feu | Arrête-toi au feu.
sign | le panneau | Regarde le panneau.
map | la carte | Regarde la carte.
far | loin | C'est loin ?
kilometer | le kilomètre | Nous avons roulé 30 kilomètres.
hour | l'heure | Nous avons roulé pendant deux heures.
break | la pause | Faisons une pause.
water | l'eau | Bois un peu d'eau.
water bottle | le bidon | Mets ton bidon dans le porte-bidon.
snack | l'en-cas | J'ai apporté un en-cas.
tired | fatigué | J'ai les jambes fatiguées.
legs | les jambes | J'ai mal aux jambes.
sweat | transpirer | Je transpire.
sun | le soleil | Le soleil est brûlant.
rain | la pluie | Il s'est mis à pleuvoir.
wind | le vent | Le vent est fort.
fun | amusant | Le vélo, c'est amusant.
friend | l'ami | Je roule avec mon ami.
family | la famille | Nous faisons du vélo en famille.
child seat | le siège enfant | Mon fils est assis dans le siège enfant.
training wheels | les petites roues | Enlève les petites roues.
fall | tomber | Ne tombe pas de ton vélo.
knee | le genou | Je me suis fait mal au genou.
bandage | le pansement | Mets un pansement dessus.
rent | louer | Louons des vélos.
YouBike | le YouBike | J'ai loué un YouBike.
station | la station | Rends le vélo à la station.
card | la carte | Passe ta carte pour déverrouiller.
park the bike | garer le vélo | Gare le vélo ici.
sidewalk | le trottoir | Ne roule pas sur le trottoir.
walk your bike | marcher à côté de son vélo | Traverse la rue à pied en poussant ton vélo.
bridge | le pont | Traverse le pont à vélo.
tunnel | le tunnel | Allume ta lumière dans le tunnel.
view | la vue | Quelle belle vue !
photo | la photo | Prenons une photo.
ice cream | la glace | Arrêtons-nous pour une glace.
morning | le matin | Nous roulons le matin.
evening | le soir | Il fait frais le soir.
weekend | le week-end | Nous roulons le week-end.
bike race | la course cycliste | J'ai regardé une course cycliste.
cyclist | le cycliste | Le cycliste est très rapide.
gloves | les gants | Mets des gants.
glasses | les lunettes | Mets des lunettes pour protéger tes yeux.
shorts | le cuissard | Je porte un cuissard.
bright clothes | les vêtements voyants | Porte des vêtements voyants.
mountain | la montagne | Nous avons monté la montagne à vélo.
beach | la plage | Nous sommes allés à la plage à vélo.
around | autour | Nous avons fait le tour du lac à vélo.
straight | tout droit | Va tout droit.
back | revenir | Rentrons à vélo maintenant.
home | la maison | Rentrons à la maison.
ready | prêt | Prêt à partir ?
again | encore | On roule encore demain.
happy | heureux | Je suis heureux quand je roule.
strong | fort | Le vélo renforce les jambes.
healthy | bon pour la santé | Le vélo est bon pour la santé.
gear | la vitesse | Change de vitesse dans la côte.
kickstand | la béquille | Baisse la béquille.
bike bag | la sacoche | Mets ton téléphone dans la sacoche.
tricycle | le tricycle | Ma petite sœur fait du tricycle.
balance | l'équilibre | Garde ton équilibre.
push | pousser | Pousse ton vélo dans la côte.
`,
  phrases: `
Can you ride a bike? | Tu sais faire du vélo ?
I learned to ride a bike when I was six. | J'ai appris à faire du vélo à six ans.
Let's ride bikes. | Faisons du vélo.
Let's go cycling this weekend. | Allons faire du vélo ce week-end.
Where do you want to ride? | Tu veux rouler où ?
Let's ride along the river. | Roulons le long de la rivière.
Is there a bike path? | Il y a une piste cyclable ?
Let's rent bikes. | Louons des vélos.
How do I rent a YouBike? | Comment je loue un YouBike ?
Tap your card here. | Passe ta carte ici.
Where can I return the bike? | Où je peux rendre le vélo ?
Put on your helmet. | Mets ton casque.
Is your helmet on tight? | Ton casque est bien attaché ?
Adjust your seat. | Règle ta selle.
The seat is too high. | La selle est trop haute.
The seat is too low. | La selle est trop basse.
Hold the handlebars with both hands. | Tiens le guidon à deux mains.
Ride slowly. | Roule doucement.
Slow down! | Ralentis !
Stop! | Arrête-toi !
Use your brakes. | Utilise tes freins.
Ring your bell. | Sonne.
Watch out for people walking. | Attention aux piétons.
Watch out for cars! | Attention aux voitures !
Ride on the right side. | Roule à droite.
Stop at the red light. | Arrête-toi au feu rouge.
Turn left at the next corner. | Tourne à gauche au prochain coin.
Follow me. | Suis-moi.
Wait for me! | Attends-moi !
You're too fast! | Tu vas trop vite !
This hill is hard. | Cette côte est dure.
Change to an easier gear. | Passe sur un braquet plus facile.
I have to get off and walk. | Je dois descendre et marcher.
Going downhill is fun! | La descente, c'est amusant !
Be careful going downhill. | Fais attention en descente.
I have a flat tire. | J'ai crevé.
Do you have a pump? | Tu as une pompe ?
My chain came off. | Ma chaîne a sauté.
Can you help me fix it? | Tu peux m'aider à la réparer ?
Let's find a bike shop. | Trouvons un magasin de vélos.
Let's take a break. | Faisons une pause.
I need some water. | J'ai besoin d'eau.
My legs are tired. | J'ai les jambes fatiguées.
I'm sweating a lot. | Je transpire beaucoup.
It's so hot today. | Il fait tellement chaud aujourd'hui.
The wind is really strong. | Le vent est vraiment fort.
It's starting to rain. | Il commence à pleuvoir.
Let's wait under the bridge. | Attendons sous le pont.
What a beautiful view! | Quelle belle vue !
Let's take a photo here. | Prenons une photo ici.
How far did we ride? | On a roulé combien de kilomètres ?
We rode twenty kilometers. | Nous avons roulé vingt kilomètres.
Let's stop for ice cream. | Arrêtons-nous pour une glace.
Lock your bike. | Attache ton vélo.
Where can I park my bike? | Où je peux garer mon vélo ?
Don't ride on the sidewalk. | Ne roule pas sur le trottoir.
Walk your bike across the street. | Traverse la rue en poussant ton vélo.
Turn on your light. It's getting dark. | Allume ta lumière. Il commence à faire nuit.
Wear bright clothes at night. | Porte des vêtements voyants la nuit.
I ride my bike to school. | Je vais à l'école à vélo.
I ride to work every day. | Je vais au travail à vélo tous les jours.
Cycling is good for your health. | Le vélo est bon pour la santé.
It's better for the environment. | C'est mieux pour l'environnement.
My dad is teaching me to ride. | Mon père m'apprend à faire du vélo.
Hold on! Don't let go! | Tiens bon ! Ne lâche pas !
I can do it by myself now! | Je sais le faire tout seul maintenant !
Take off the training wheels. | Enlève les petites roues.
I fell off my bike. | Je suis tombé de vélo.
Are you hurt? | Tu t'es fait mal ?
I scraped my knee. | Je me suis écorché le genou.
I'm okay. Let's keep going. | Ça va. Continuons.
Let's ride home now. | Rentrons maintenant.
Thanks for riding with me. | Merci d'avoir roulé avec moi.
That was so much fun! | C'était tellement amusant !
Let's ride again next weekend. | Refaisons du vélo le week-end prochain.
My bike is new. | Mon vélo est neuf.
I want a new bike for my birthday. | Je veux un nouveau vélo pour mon anniversaire.
Which bike is yours? | Lequel est ton vélo ?
The red one is mine. | Le rouge est à moi.
My tire needs air. | Mon pneu a besoin d'air.
Pump up the tires before you ride. | Gonfle les pneus avant de rouler.
Check your brakes. | Vérifie tes freins.
My bell is broken. | Ma sonnette est cassée.
Put your bag in the basket. | Mets ton sac dans le panier.
Can my little brother sit on the back? | Mon petit frère peut s'asseoir derrière ?
No, it's not safe. | Non, ce n'est pas sûr.
Taiwan has great bike paths. | Taïwan a d'excellentes pistes cyclables.
Many people ride around Taiwan. | Beaucoup de gens font le tour de Taïwan à vélo.
I want to cycle around Taiwan someday. | Je veux faire le tour de Taïwan à vélo un jour.
Let's ride to the beach. | Allons à la plage à vélo.
The bike path goes along the coast. | La piste cyclable longe la côte.
I love riding in the morning. | J'adore rouler le matin.
The air is fresh and cool. | L'air est frais et pur.
Ready? Let's go! | Prêt ? On y va !
Keep pedaling! | Continue de pédaler !
Almost there! | On y est presque !
We made it! | On y est arrivés !
I'm proud of you! | Je suis fier de toi !
Let's ride to the park. | Allons au parc à vélo.
My bike is too small for me now. | Mon vélo est trop petit pour moi maintenant.
`,
});

addFrench("cycling", {
  words: `
road bike | le vélo de route | Un vélo de route est léger et rapide.
mountain bike | le VTT | Je fais du VTT sur les sentiers.
folding bike | le vélo pliant | Un vélo pliant rentre dans le métro.
e-bike | le vélo électrique | Un vélo électrique aide dans les côtes.
gravel bike | le gravel | Un gravel passe bien sur les chemins de terre.
frame | le cadre | Le cadre est en aluminium.
fork | la fourche | La fourche absorbe les chocs.
derailleur | le dérailleur | Le dérailleur arrière doit être réglé.
cassette | la cassette | J'ai changé ma cassette.
crankset | le pédalier | Le pédalier a deux plateaux.
chainring | le plateau | Passe sur le petit plateau.
shifter | la manette de vitesse | Ma manette de vitesse est dure.
gear ratio | le braquet | Un petit braquet aide en montée.
inner tube | la chambre à air | Emporte une chambre à air de rechange.
puncture | la crevaison | J'ai crevé à cause d'un bout de verre.
tire levers | les démonte-pneus | Utilise des démonte-pneus pour enlever le pneu.
mini pump | la mini-pompe | Garde une mini-pompe sur ton vélo.
multi-tool | l'outil multifonction | Un outil multifonction règle la plupart des problèmes.
tire pressure | la pression des pneus | Vérifie la pression des pneus.
saddle | la selle | Une bonne selle évite les douleurs.
saddle height | la hauteur de selle | Règle ta hauteur de selle.
bike fit | l'étude posturale | Une étude posturale peut éviter les douleurs au genou.
clipless pedals | les pédales automatiques | Les pédales automatiques améliorent le rendement.
cleats | les cales | Mes cales s'enclenchent dans les pédales.
cycling shoes | les chaussures de vélo | Les chaussures de vélo ont des semelles rigides.
jersey | le maillot | Mon maillot de vélo a des poches dans le dos.
bib shorts | le cuissard à bretelles | Le cuissard à bretelles est plus confortable.
chamois | la peau de chamois | La peau de chamois réduit les frottements.
chamois cream | la crème pour peau de chamois | Utilise de la crème pour peau de chamois sur les longues sorties.
cycling computer | le compteur | Mon compteur affiche la vitesse.
cadence | la cadence | Garde une cadence autour de 90.
average speed | la vitesse moyenne | Ma vitesse moyenne était de 25 km/h.
climb | la montée | La montée fait dix kilomètres.
descent | la descente | Prends la descente doucement.
switchback | le lacet | La route a beaucoup de lacets.
gradient | la pente | La pente est de 10 pour cent.
headwind | le vent de face | Nous avons roulé avec le vent de face.
tailwind | le vent dans le dos | Le vent dans le dos nous a aidés.
crosswind | le vent latéral | Le vent latéral est dangereux sur les ponts.
group ride | la sortie en groupe | Je fais une sortie en groupe le dimanche.
paceline | le relais | Roulez en relais pour économiser de l'énergie.
drafting | l'aspiration | Rouler dans l'aspiration économise jusqu'à 30 % d'énergie.
hand signals | les signes de la main | Utilise les signes de la main en groupe.
point out | signaler | Signale les nids-de-poule aux cyclistes derrière toi.
pothole | le nid-de-poule | Attention à ce nid-de-poule !
gravel | le gravier | Ralentis sur le gravier.
bike lane | la bande cyclable | Utilise la bande cyclable.
round-the-island | le tour de l'île | J'ai fait le tour de l'île à vélo.
cycling route | l'itinéraire cyclable | La route 1 est le principal itinéraire cyclable de Taïwan.
rest stop | l'aire de repos | Les supérettes sont d'excellentes aires de repos.
convenience store | la supérette | Nous avons refait le plein d'eau dans une supérette.
support van | la voiture d'assistance | Une voiture d'assistance transportait nos bagages.
tour group | le groupe organisé | Nous avons rejoint un groupe organisé à vélo.
bike rental | la location de vélos | La location de vélos est disponible à la gare.
bike rack | l'arceau à vélos | Attache ton vélo à l'arceau.
U-lock | l'antivol en U | Un antivol en U est plus solide qu'un câble.
theft | le vol | Le vol de vélos est fréquent.
reflector | le catadioptre | Ajoute un catadioptre sur ta roue.
front light | l'éclairage avant | Mon éclairage avant est très puissant.
tail light | le feu arrière | Allume ton feu arrière.
visibility | la visibilité | Des vêtements voyants améliorent la visibilité.
crash | la chute | Il a chuté dans la descente.
road rash | la brûlure de bitume | J'ai une brûlure de bitume sur le bras.
collarbone | la clavicule | Il s'est cassé la clavicule dans une chute.
saddle sore | la douleur de selle | Les longues sorties me donnent des douleurs de selle.
numb hands | les mains engourdies | Change de position des mains pour éviter les engourdissements.
bonk | la fringale | Mange avant d'avoir une fringale.
energy bar | la barre énergétique | Je mange une barre énergétique toutes les heures.
hydration | l'hydratation | L'hydratation compte quand il fait chaud.
electrolytes | les électrolytes | Ajoute des électrolytes à ton eau.
Strava | Strava | Je télécharge mes sorties sur Strava.
segment | le segment | J'ai fait un top dix sur le segment.
KOM | le KOM | Il détient le KOM de cette montée.
century ride | la sortie de cent miles | Une sortie de cent miles fait environ 160 kilomètres.
Gran Fondo | la cyclosportive | Je me suis inscrit à une cyclosportive.
time trial | le contre-la-montre | Le contre-la-montre faisait 40 kilomètres.
peloton | le peloton | Le peloton a rattrapé l'échappée.
breakaway | l'échappée | Trois coureurs ont formé une échappée.
sprint finish | l'arrivée au sprint | Tout s'est joué à l'arrivée au sprint.
yellow jersey | le maillot jaune | Il porte le maillot jaune.
Tour de France | le Tour de France | Je regarde le Tour de France tous les mois de juillet.
Tour de Taiwan | le Tour de Taïwan | Le Tour de Taïwan attire des équipes professionnelles.
Wuling | Wuling | Monter à Wuling est le rêve de tout cycliste.
indoor trainer | le home-trainer | Je roule sur home-trainer quand il pleut.
Zwift | Zwift | Je fais des courses sur Zwift en hiver.
spin class | le cours de biking | Je vais au cours de biking deux fois par semaine.
commute by bike | aller au travail à vélo | Je vais au travail à vélo tous les jours.
bike-friendly | adapté aux vélos | Taipei devient plus adaptée aux vélos.
bike maintenance | l'entretien du vélo | Apprends l'entretien de base du vélo.
lube | le lubrifiant | Mets du lubrifiant sur ta chaîne chaque semaine.
clean the chain | nettoyer la chaîne | Nettoie la chaîne après la pluie.
true a wheel | dévoiler une roue | Le mécanicien peut dévoiler une roue en quelques minutes.
spoke | le rayon | Un rayon a cassé.
chain drop | le déraillement | Un déraillement m'a arrêté dans la montée.
brake pads | les plaquettes de frein | Change tes plaquettes de frein.
quick release | le blocage rapide | Ouvre le blocage rapide pour enlever la roue.
thru-axle | l'axe traversant | Les vélos à disques utilisent un axe traversant.
cable | le câble | Le câble de frein est détendu.
bottle cage | le porte-bidon | Mon porte-bidon est cassé.
saddle bag | la sacoche de selle | Garde les outils dans une sacoche de selle.
like riding a bike | ça ne s'oublie pas | Ne t'inquiète pas, ça ne s'oublie pas.
back in the saddle | de nouveau en selle | Ça fait du bien d'être de nouveau en selle.
on a roll | sur une bonne lancée | Nous sommes sur une bonne lancée !
uphill battle | un combat difficile | C'est un combat difficile.
downhill from here | plus facile à partir de maintenant | À partir de maintenant, ce sera plus facile.
spin your wheels | tourner en rond | Ne tourne pas en rond sur des petites tâches.
the wheels came off | tout est parti en vrille | Tout est parti en vrille à la fin.
get in gear | se mettre en route | Mets-toi en route, on est en retard !
shift gears | changer de sujet | Changeons de sujet et parlons d'argent.
put the brakes on | freiner | Freine sur les dépenses.
on two wheels | à vélo | J'explore la ville à vélo.
pedal power | la force des mollets | Tout ça à la force des mollets !
a bumpy ride | un parcours chaotique | Ça a été un parcours chaotique.
take a spin | faire un tour | Faisons un tour du lac.
reinvent the wheel | réinventer la roue | Inutile de réinventer la roue.
`,
});

addFrench("cycling", {
  phrases: `
I'm planning to cycle around Taiwan next month. | Je prévois de faire le tour de Taïwan à vélo le mois prochain.
It usually takes about nine days. | Ça prend généralement environ neuf jours.
I'll ride around 100 kilometers a day. | Je ferai environ 100 kilomètres par jour.
Most people ride counterclockwise. | La plupart des gens roulent dans le sens inverse des aiguilles d'une montre.
The east coast is the most beautiful part. | La côte est est la plus belle partie.
The South Link Highway has some tough climbs. | La route du South Link a quelques montées difficiles.
Convenience stores make great rest stops. | Les supérettes font d'excellentes aires de repos.
Some stores have bike repair kits and pumps. | Certaines supérettes ont des kits de réparation et des pompes.
Many police stations offer water and rest for cyclists. | Beaucoup de commissariats offrent de l'eau et une pause aux cyclistes.
I joined a cycling tour with a support van. | J'ai rejoint un voyage à vélo avec une voiture d'assistance.
The support van carries our luggage. | La voiture d'assistance transporte nos bagages.
I'm riding a road bike this time. | Cette fois, je roule en vélo de route.
A road bike is fast on smooth roads. | Un vélo de route est rapide sur les routes lisses.
A mountain bike is better for trails. | Un VTT est mieux pour les sentiers.
I'm thinking about getting an e-bike. | Je pense m'acheter un vélo électrique.
E-bikes make hills much easier. | Les vélos électriques rendent les côtes beaucoup plus faciles.
A folding bike is easy to take on the train. | Un vélo pliant se prend facilement dans le train.
I need to get a proper bike fit. | Je dois faire une vraie étude posturale.
My knees hurt after long rides. | J'ai mal aux genoux après les longues sorties.
Your saddle might be too low. | Ta selle est peut-être trop basse.
I'm using clipless pedals now. | J'utilise des pédales automatiques maintenant.
It took a while to get used to clipping in. | Il m'a fallu du temps pour m'habituer à m'enclencher.
I fell over at a red light because I couldn't unclip. | Je suis tombé à un feu rouge parce que je n'arrivais pas à me déclipser.
Everyone falls over once with clipless pedals. | Tout le monde tombe une fois avec des pédales automatiques.
Keep your cadence around ninety. | Garde une cadence autour de quatre-vingt-dix.
Shift to a lower gear before the climb. | Passe un braquet plus petit avant la montée.
Don't shift under heavy load. | Ne change pas de vitesse en appuyant fort.
Stay seated on long climbs. | Reste assis dans les longues montées.
Stand up on the steep parts. | Mets-toi en danseuse dans les passages raides.
Brake before the corner, not in it. | Freine avant le virage, pas dedans.
Look where you want to go. | Regarde là où tu veux aller.
Watch out for gravel on the descent. | Attention aux gravillons dans la descente.
Point out potholes to the riders behind you. | Signale les nids-de-poule aux cyclistes derrière toi.
Use hand signals when you turn. | Fais des signes de la main quand tu tournes.
Ride single file on busy roads. | Roulez en file indienne sur les routes fréquentées.
I joined a group ride on Sunday. | J'ai fait une sortie en groupe dimanche.
We rode in a paceline. | Nous avons roulé en relais.
Take your turn at the front. | Prends ton relais devant.
Drafting saves a lot of energy. | Rouler dans l'aspiration économise beaucoup d'énergie.
Don't overlap wheels. | Ne chevauche pas les roues.
We rode into a headwind all the way back. | Nous avons eu le vent de face pendant tout le retour.
The tailwind was amazing. | Le vent dans le dos était génial.
I got a puncture from a piece of glass. | J'ai crevé à cause d'un morceau de verre.
Do you know how to change an inner tube? | Tu sais changer une chambre à air ?
Always carry a spare tube and tire levers. | Emporte toujours une chambre à air de rechange et des démonte-pneus.
I use tubeless tires now. | J'utilise des pneus tubeless maintenant.
Check your tire pressure before every ride. | Vérifie la pression de tes pneus avant chaque sortie.
My chain needs lubing. | Ma chaîne a besoin d'être lubrifiée.
Clean your chain after riding in the rain. | Nettoie ta chaîne après avoir roulé sous la pluie.
My gears keep slipping. | Mes vitesses sautent sans arrêt.
The derailleur needs adjusting. | Le dérailleur doit être réglé.
My brake pads are worn out. | Mes plaquettes de frein sont usées.
The bike shop is very busy on weekends. | Le magasin de vélos est très occupé le week-end.
How much is a basic service? | Combien coûte une révision de base ?
I upload all my rides to Strava. | Je télécharge toutes mes sorties sur Strava.
I got a personal record on that climb. | J'ai battu mon record personnel dans cette montée.
What's your average speed? | Quelle est ta vitesse moyenne ?
I averaged 25 kilometers an hour. | J'ai roulé à 25 kilomètres à l'heure de moyenne.
I ride an indoor trainer when it rains. | Je roule sur home-trainer quand il pleut.
I race on Zwift in the winter. | Je fais des courses sur Zwift en hiver.
I go to spin class twice a week. | Je vais au cours de biking deux fois par semaine.
I'm training for a Gran Fondo. | Je m'entraîne pour une cyclosportive.
My goal is to climb Wuling. | Mon objectif est de monter à Wuling.
It's the highest road in Taiwan. | C'est la route la plus haute de Taïwan.
The climb is over fifty kilometers long. | La montée fait plus de cinquante kilomètres.
Eat before you're hungry. | Mange avant d'avoir faim.
Drink before you're thirsty. | Bois avant d'avoir soif.
I bonked halfway up the mountain. | J'ai eu une fringale à mi-montée.
Bring energy bars and gels. | Apporte des barres et des gels énergétiques.
Add electrolytes to your water bottle. | Ajoute des électrolytes dans ton bidon.
Padded shorts make long rides comfortable. | Un cuissard rembourré rend les longues sorties confortables.
Use chamois cream to prevent saddle sores. | Utilise de la crème pour peau de chamois pour éviter les douleurs de selle.
My hands go numb on long rides. | J'ai les mains engourdies sur les longues sorties.
Change your hand position often. | Change souvent la position de tes mains.
I commute by bike every day. | Je vais au travail à vélo tous les jours.
There's a shower at my office. | Il y a une douche à mon bureau.
Taipei has a lot of riverside bike paths. | Taipei a beaucoup de pistes cyclables au bord des rivières.
The bike lanes in the city are getting better. | Les pistes cyclables en ville s'améliorent.
Some drivers don't respect cyclists. | Certains conducteurs ne respectent pas les cyclistes.
Stay out of the truck's blind spot. | Ne reste pas dans l'angle mort du camion.
Watch out for car doors opening. | Attention aux portières qui s'ouvrent.
Use a front and rear light, even in the day. | Utilise un éclairage avant et arrière, même le jour.
A U-lock is safer than a cable lock. | Un antivol en U est plus sûr qu'un antivol à câble.
My bike was stolen last year. | Mon vélo a été volé l'année dernière.
Register your bike so it can be found. | Fais enregistrer ton vélo pour qu'on puisse le retrouver.
Did you watch the Tour de France? | Tu as regardé le Tour de France ?
He's wearing the yellow jersey. | Il porte le maillot jaune.
The breakaway was caught near the finish. | L'échappée a été reprise près de l'arrivée.
It came down to a sprint finish. | Tout s'est joué au sprint.
The peloton is moving very fast. | Le peloton roule très vite.
The Tour de Taiwan brings pro teams here every year. | Le Tour de Taïwan attire des équipes professionnelles chaque année.
Many famous bike brands are made in Taiwan. | Beaucoup de marques de vélos célèbres sont fabriquées à Taïwan.
Taichung is the center of Taiwan's bike industry. | Taichung est le centre de l'industrie du vélo à Taïwan.
Cycling is a great way to see the countryside. | Le vélo est un excellent moyen de découvrir la campagne.
The mountains in Taiwan are a cyclist's paradise. | Les montagnes de Taïwan sont un paradis pour cyclistes.
I'll send you photos from the east coast. | Je t'enverrai des photos de la côte est.
Enjoy the ride! | Bonne route !
Safe riding! | Roule prudemment !
What size frame do you ride? | Tu roules sur quelle taille de cadre ?
Let's meet at the bike shop at seven. | Retrouvons-nous au magasin de vélos à sept heures.
`,
});

addFrench("cycling", {
  words: `
FTP | la FTP | Ma FTP est de 250 watts.
power meter | le capteur de puissance | Un capteur de puissance mesure ta production d'énergie.
watts | les watts | Il a tenu 300 watts de moyenne.
watts per kilo | les watts par kilo | En montée, tout dépend des watts par kilo.
normalized power | la puissance normalisée | La puissance normalisée reflète les efforts variables.
training stress score | le score de charge d'entraînement | Le score de charge d'entraînement d'aujourd'hui était de 120.
power zones | les zones de puissance | Entraîne-toi dans des zones de puissance précises.
sweet spot | le sweet spot | Les intervalles sweet spot développent l'endurance efficacement.
VO2 max intervals | les intervalles VO2 max | Les intervalles VO2 max sont terriblement durs.
threshold intervals | les intervalles au seuil | Les intervalles au seuil augmentent ta FTP.
base miles | le foncier | L'hiver, c'est pour le foncier.
structured training | l'entraînement structuré | L'entraînement structuré vaut mieux que rouler au hasard.
aerodynamics | l'aérodynamisme | L'aérodynamisme compte le plus à haute vitesse.
CdA | le CdA | Réduire ton CdA fait économiser des watts.
aero position | la position aérodynamique | Tiens une position aérodynamique sur le plat.
wind tunnel | la soufflerie | Les pros testent leur position en soufflerie.
aero helmet | le casque aéro | Un casque aéro fait gagner du temps en contre-la-montre.
deep-section wheels | les roues à jantes hautes | Les roues à jantes hautes sont rapides mais lourdes.
disc brakes | les freins à disque | Les freins à disque fonctionnent mieux sous la pluie.
rim brakes | les freins sur jante | Les freins sur jante sont plus légers.
tubeless tires | les pneus tubeless | Les pneus tubeless colmatent les petites crevaisons.
rolling resistance | la résistance au roulement | Des pneus plus larges peuvent avoir une résistance au roulement plus faible.
carbon frame | le cadre carbone | Un cadre carbone est léger et rigide.
stiffness | la rigidité | La rigidité du cadre améliore le transfert de puissance.
compliance | le confort | Le confort rend les longues sorties agréables.
geometry | la géométrie | La géométrie course est agressive.
stack and reach | le stack et le reach | Le stack et le reach définissent l'ajustement du cadre.
electronic shifting | la transmission électronique | La transmission électronique est précise.
groupset | le groupe | Il a amélioré son groupe.
compact crankset | le pédalier compact | Un pédalier compact aide en montée.
climbing gear | le petit braquet | Mets ton petit braquet tôt.
pacing strategy | la stratégie d'allure | Une bonne stratégie d'allure évite d'exploser.
going into the red | se mettre dans le rouge | Se mettre dans le rouge dans une montée se paie plus tard.
recovery ride | la sortie de récupération | Aujourd'hui, c'est une sortie de récupération facile.
carbohydrate intake | l'apport en glucides | Les pros visent un apport de 90 grammes de glucides par heure.
glycogen | le glycogène | Les longues sorties épuisent le glycogène.
heat adaptation | l'adaptation à la chaleur | L'adaptation à la chaleur aide pendant l'été taïwanais.
altitude | l'altitude | Wuling est à plus de 3 000 mètres d'altitude.
hors catégorie | hors catégorie | C'est une montée hors catégorie.
King of the Mountains | le meilleur grimpeur | Il a remporté le maillot du meilleur grimpeur.
general classification | le classement général | Elle est en tête du classement général.
stage race | la course par étapes | Une course par étapes dure plusieurs jours.
domestique | l'équipier | Un équipier se sacrifie pour son leader.
team leader | le leader | Le leader garde de l'énergie pour les montées.
lead-out train | le train | Le train a lancé le sprint.
echelon | la bordure | Le vent latéral a coupé le peloton en bordures.
attack | attaquer | Il a attaqué dans la dernière montée.
bridge across | faire la jonction | Elle a tenté de faire la jonction avec l'échappée.
neutral service | l'assistance neutre | L'assistance neutre lui a donné une nouvelle roue.
team car | la voiture d'équipe | La voiture d'équipe suivait les coureurs.
UCI | l'UCI | L'UCI fixe les règles sur le matériel.
WorldTour | le WorldTour | Il court pour une équipe du WorldTour.
doping | le dopage | Les scandales de dopage ont hanté le cyclisme pendant des années.
EPO | l'EPO | L'EPO augmente les globules rouges.
mechanical doping | le dopage mécanique | Les vélos sont scannés pour détecter le dopage mécanique.
whereabouts | la localisation | Les coureurs doivent déclarer leur localisation pour les contrôles.
infrastructure | les infrastructures | De meilleures infrastructures font rouler plus de gens.
protected bike lane | la piste cyclable protégée | Les pistes cyclables protégées réduisent les blessures.
road sharing | le partage de la route | Le partage de la route exige un respect mutuel.
vulnerable road users | les usagers vulnérables | Les cyclistes sont des usagers vulnérables.
dooring | l'emportiérage | L'emportiérage cause beaucoup de blessures en ville.
blind spot | l'angle mort | Reste hors de l'angle mort d'un camion.
right hook | le crochet à droite | Un crochet à droite, c'est quand une voiture tourne en te coupant la route.
helmet law | l'obligation du casque | L'obligation du casque fait débat dans de nombreux pays.
micromobility | la micromobilité | La micromobilité transforme les transports urbains.
bike-sharing | le vélo en libre-service | Le vélo en libre-service s'est développé rapidement.
last mile | le dernier kilomètre | Les vélos résolvent le problème du dernier kilomètre.
modal shift | le report modal | Un report modal vers le vélo réduit les émissions.
active transport | la mobilité active | La mobilité active améliore la santé publique.
cycling tourism | le cyclotourisme | Le cyclotourisme apporte des revenus aux villages.
bike industry | l'industrie du vélo | L'industrie du vélo taïwanaise est mondialement connue.
OEM | le sous-traitant | Beaucoup de marques mondiales font appel à des sous-traitants taïwanais.
supply chain | la chaîne d'approvisionnement | La chaîne d'approvisionnement du vélo a été perturbée pendant la pandémie.
Giant | Giant | Giant est une marque de vélos taïwanaise.
Merida | Merida | Merida fabrique aussi des vélos à Taïwan.
Taichung | Taichung | Taichung est le centre de l'industrie du vélo.
e-bike market | le marché du vélo électrique | Le marché du vélo électrique est en plein essor.
battery range | l'autonomie de la batterie | L'autonomie de la batterie limite les longues sorties en vélo électrique.
pedal assist | l'assistance au pédalage | L'assistance au pédalage rend les côtes faciles.
throttle | l'accélérateur | Certains vélos électriques ont un accélérateur.
regulation | la réglementation | La réglementation des vélos électriques varie selon les pays.
cycling culture | la culture vélo | La culture vélo est forte aux Pays-Bas.
gravel racing | les courses de gravel | Les courses de gravel sont devenues très populaires.
bikepacking | le bikepacking | Le bikepacking combine camping et vélo.
ultra-distance | l'ultra-distance | Les courses d'ultra-distance traversent des pays entiers.
self-supported | en autonomie | La course se fait en autonomie complète.
brevet | le brevet | Un brevet de 600 kilomètres prend jusqu'à 40 heures.
randonneuring | la randonnée cyclo longue distance | La randonnée cyclo longue distance n'est pas une course ; il s'agit de finir.
bike fitter | le spécialiste de l'étude posturale | Un spécialiste de l'étude posturale a réglé ma douleur au genou.
overuse injury | la blessure de surmenage | Les blessures de surmenage commencent souvent au genou.
lower back pain | le mal de dos | Le mal de dos peut venir d'une mauvaise position sur le vélo.
core strength | la force du tronc | La force du tronc t'aide à rester stable.
off-season | l'intersaison | Profite de l'intersaison pour faire du renforcement.
lactate threshold | le seuil lactique | Ta FTP est proche de ton seuil lactique.
fatigue resistance | la résistance à la fatigue | La résistance à la fatigue décide des grands tours.
durability | la durabilité | La durabilité, c'est garder sa puissance en fin de course.
marginal gains | les gains marginaux | Les gains marginaux s'additionnent jusqu'à la victoire.
aero socks | les chaussettes aéro | Même les chaussettes aéro font gagner des watts.
crit | le critérium | Un critérium est une course courte et rapide sur circuit fermé.
cobbles | les pavés | Les pavés de Roubaix sont redoutables.
a fifth wheel | la cinquième roue du carrosse | Je me sentais comme la cinquième roue du carrosse.
the squeaky wheel gets the grease | ce sont ceux qui se plaignent qui obtiennent | Ce sont ceux qui se plaignent qui obtiennent quelque chose.
wheels within wheels | une affaire compliquée | C'est une affaire bien compliquée.
in the slipstream | dans le sillage | Les petites entreprises avancent dans le sillage des grandes.
coast along | se laisser aller | Ne te laisse pas aller à l'école.
gear up | se préparer | Préparons-nous pour la course.
grease the wheels | faciliter les choses | Un petit cadeau peut faciliter les choses.
hit a speed bump | rencontrer un obstacle | Nous avons rencontré un petit obstacle.
the uphill climb | la longue montée | La longue montée en vaut la peine.
a vicious cycle | un cercle vicieux | C'est un cercle vicieux.
full circle | la boucle est bouclée | La boucle est bouclée.
pedal to the metal | à fond | Maintenant, c'est à fond.
lose your balance | perdre l'équilibre | Ne perds pas l'équilibre.
in the fast lane | à cent à l'heure | Vivre à cent à l'heure, c'est fatigant.
the wheel of fortune | la roue de la fortune | La roue de la fortune continue de tourner.
`,
  phrases: `
I train by power, not by heart rate. | Je m'entraîne à la puissance, pas à la fréquence cardiaque.
My FTP has gone up twenty watts this season. | Ma FTP a augmenté de vingt watts cette saison.
On long climbs, watts per kilo is everything. | Dans les longues montées, les watts par kilo font tout.
Normalized power reflects how hard a variable ride really was. | La puissance normalisée reflète la difficulté réelle d'une sortie irrégulière.
Training stress score helps me manage fatigue. | Le score de charge d'entraînement m'aide à gérer la fatigue.
Most of my training is in zone 2. | La plupart de mon entraînement se fait en zone 2.
Sweet spot intervals give a lot of benefit for the time. | Les intervalles sweet spot rapportent beaucoup pour le temps passé.
VO2 max intervals are short but brutal. | Les intervalles VO2 max sont courts mais brutaux.
Structured training beats junk miles. | L'entraînement structuré vaut mieux que les kilomètres inutiles.
Base miles in the winter pay off in the summer. | Le foncier de l'hiver paie en été.
Fatigue resistance decides who wins a long race. | La résistance à la fatigue décide du vainqueur d'une longue course.
Durability means producing the same power after five hours. | La durabilité, c'est produire la même puissance après cinq heures.
Fueling at 90 grams of carbs an hour is now normal for pros. | Prendre 90 grammes de glucides par heure est désormais normal chez les pros.
Gut training lets you absorb more carbohydrate. | L'entraînement digestif permet d'absorber plus de glucides.
Heat adaptation is essential for summer riding in Taiwan. | L'adaptation à la chaleur est essentielle pour rouler l'été à Taïwan.
Pace the climb; don't go into the red early. | Gère la montée ; ne te mets pas dans le rouge trop tôt.
Riding just below threshold is sustainable for about an hour. | Rouler juste sous le seuil se tient environ une heure.
Aerodynamics matter more than weight on flat roads. | Sur le plat, l'aérodynamisme compte plus que le poids.
Your body creates most of the drag, not the bike. | C'est ton corps qui crée l'essentiel de la résistance, pas le vélo.
Lowering your CdA can save more watts than a new frame. | Réduire ton CdA peut faire gagner plus de watts qu'un nouveau cadre.
Pros test their positions in wind tunnels. | Les pros testent leur position en soufflerie.
Deep-section wheels are fast but tricky in crosswinds. | Les roues à jantes hautes sont rapides mais délicates par vent latéral.
Disc brakes give better control in wet conditions. | Les freins à disque offrent un meilleur contrôle sur sol mouillé.
Wider tires often have lower rolling resistance. | Les pneus plus larges ont souvent une résistance au roulement plus faible.
Tubeless tires can run at lower pressure for comfort and grip. | Les pneus tubeless peuvent rouler à plus basse pression pour le confort et l'adhérence.
Frame stiffness improves power transfer, but compliance improves comfort. | La rigidité du cadre améliore le transfert de puissance, mais la souplesse améliore le confort.
Stack and reach tell you more than frame size. | Le stack et le reach en disent plus que la taille du cadre.
Electronic shifting is precise and almost maintenance-free. | La transmission électronique est précise et ne demande presque pas d'entretien.
A compact crankset is the sensible choice for mountains. | Un pédalier compact est le choix raisonnable pour la montagne.
Marginal gains add up to big advantages. | Les gains marginaux s'additionnent en gros avantages.
In a stage race, the general classification rewards consistency. | Dans une course par étapes, le classement général récompense la régularité.
Domestiques sacrifice their own chances for the leader. | Les équipiers sacrifient leurs chances pour le leader.
A good lead-out train delivers the sprinter at full speed. | Un bon train lance le sprinteur à pleine vitesse.
Crosswinds split the peloton into echelons. | Le vent latéral coupe le peloton en bordures.
Positioning before a climb is half the battle. | Bien se placer avant une montée, c'est la moitié du travail.
Attacks on the steepest section do the most damage. | Les attaques dans la partie la plus raide font le plus de dégâts.
She bridged across to the breakaway alone. | Elle a fait seule la jonction avec l'échappée.
The cobbles of Paris-Roubaix destroy bikes and riders alike. | Les pavés de Paris-Roubaix détruisent les vélos comme les coureurs.
Doping scandals nearly destroyed professional cycling. | Les scandales de dopage ont failli détruire le cyclisme professionnel.
The biological passport changed the culture of the sport. | Le passeport biologique a changé la culture de ce sport.
Riders must report their whereabouts for out-of-competition tests. | Les coureurs doivent déclarer leur localisation pour les contrôles hors compétition.
Officials now scan bikes for hidden motors. | Les commissaires scannent désormais les vélos pour détecter des moteurs cachés.
Cycling infrastructure determines how many people ride. | Les infrastructures cyclables déterminent combien de gens font du vélo.
Protected bike lanes make cycling feel safe for everyone. | Les pistes cyclables protégées donnent à chacun un sentiment de sécurité.
Painted lanes alone don't stop cars from cutting in. | Les bandes peintes seules n'empêchent pas les voitures de couper.
Cyclists are vulnerable road users and need legal protection. | Les cyclistes sont des usagers vulnérables et ont besoin d'une protection légale.
Dooring is one of the most common urban cycling injuries. | L'emportiérage est l'une des blessures les plus courantes à vélo en ville.
Large trucks have deadly blind spots. | Les gros camions ont des angles morts mortels.
Mandatory helmet laws may discourage casual cycling. | L'obligation du casque peut décourager la pratique occasionnelle du vélo.
Bike-sharing systems have transformed urban mobility. | Les systèmes de vélos en libre-service ont transformé la mobilité urbaine.
Bikes are an ideal solution for the last mile. | Le vélo est une solution idéale pour le dernier kilomètre.
A modal shift from cars to bikes cuts emissions and congestion. | Un report modal de la voiture vers le vélo réduit les émissions et les embouteillages.
Active transport brings major public health benefits. | La mobilité active apporte d'importants bénéfices de santé publique.
Cycling tourism brings money into rural communities. | Le cyclotourisme apporte de l'argent aux communautés rurales.
Taiwan's government has promoted round-the-island cycling as a rite of passage. | Le gouvernement taïwanais a promu le tour de l'île à vélo comme un rite de passage.
Taiwan is a powerhouse of the global bike industry. | Taïwan est une puissance de l'industrie mondiale du vélo.
Many top brands rely on Taiwanese factories for their frames. | Beaucoup de grandes marques comptent sur des usines taïwanaises pour leurs cadres.
The pandemic created a bike boom and then a glut of stock. | La pandémie a provoqué un boom du vélo, puis un excès de stocks.
Supply chain disruptions left shops with no bikes to sell. | Les perturbations de la chaîne d'approvisionnement ont laissé les magasins sans vélos à vendre.
The e-bike market is growing faster than any other segment. | Le marché du vélo électrique croît plus vite que tous les autres segments.
E-bike regulations limit motor power and top speed. | La réglementation des vélos électriques limite la puissance du moteur et la vitesse maximale.
Battery fires have raised safety concerns about cheap e-bikes. | Les incendies de batteries ont soulevé des inquiétudes sur les vélos électriques bon marché.
Gravel racing has exploded in popularity. | Les courses de gravel ont explosé en popularité.
Bikepacking combines adventure, camping and cycling. | Le bikepacking combine aventure, camping et vélo.
Ultra-distance races push riders to the limits of sleep deprivation. | Les courses d'ultra-distance poussent les coureurs aux limites du manque de sommeil.
Self-supported racing means no outside help at all. | Courir en autonomie signifie aucune aide extérieure.
Randonneuring is about endurance, not speed. | La randonnée cyclo longue distance est une affaire d'endurance, pas de vitesse.
A professional bike fit can prevent years of pain. | Une étude posturale professionnelle peut éviter des années de douleur.
Knee pain usually points to saddle height or cleat position. | La douleur au genou vient généralement de la hauteur de selle ou de la position des cales.
Lower back pain often comes from weak core muscles. | Le mal de dos vient souvent d'une faiblesse des muscles du tronc.
Strength training in the off-season prevents injuries. | Le renforcement à l'intersaison prévient les blessures.
Older cyclists benefit greatly from strength work. | Les cyclistes plus âgés profitent beaucoup du renforcement musculaire.
Cycling is easy on the joints but hard on the bones if it's all you do. | Le vélo ménage les articulations, mais pas forcément les os si c'est tout ce que tu fais.
Weight-bearing exercise helps maintain bone density. | Les exercices en charge aident à maintenir la densité osseuse.
Group rides have their own etiquette. | Les sorties en groupe ont leurs propres règles de savoir-vivre.
Never brake suddenly in a paceline. | Ne freine jamais brusquement dans un relais.
Half-wheeling the rider next to you is considered rude. | Rouler toujours une demi-roue devant ton voisin est considéré comme impoli.
Crashes in a group often come from a moment's inattention. | Les chutes en groupe viennent souvent d'un instant d'inattention.
Road rash heals, but a concussion needs proper rest. | Les brûlures de bitume guérissent, mais une commotion demande un vrai repos.
Always replace your helmet after a crash. | Remplace toujours ton casque après une chute.
Climbing Wuling is a pilgrimage for Taiwanese cyclists. | Monter à Wuling est un pèlerinage pour les cyclistes taïwanais.
The altitude makes the final kilometers feel twice as hard. | L'altitude rend les derniers kilomètres deux fois plus durs.
The KOM on that climb is held by a former pro. | Le KOM de cette montée est détenu par un ancien pro.
Strava segments have turned every road into a race. | Les segments Strava ont transformé chaque route en course.
Chasing segments on public roads can be dangerous. | Chasser les segments sur la voie publique peut être dangereux.
Indoor training platforms have changed how people train in winter. | Les plateformes d'entraînement en intérieur ont changé la façon de s'entraîner en hiver.
Virtual racing has its own world championships now. | Les courses virtuelles ont désormais leurs propres championnats du monde.
Data helps, but the best rides are often the unplanned ones. | Les données aident, mais les meilleures sorties sont souvent celles qu'on n'a pas prévues.
Cycling culture is about more than racing. | La culture vélo ne se limite pas à la course.
The Netherlands shows what a cycling-first city can look like. | Les Pays-Bas montrent à quoi peut ressembler une ville qui donne la priorité au vélo.
Cities designed for bikes are quieter and healthier. | Les villes conçues pour le vélo sont plus calmes et plus saines.
Every new bike lane faces opposition before it becomes popular. | Chaque nouvelle piste cyclable rencontre de l'opposition avant de devenir populaire.
Once people feel safe, they start riding. | Dès que les gens se sentent en sécurité, ils se mettent au vélo.
A bike gives you freedom at the speed of curiosity. | Le vélo donne la liberté à la vitesse de la curiosité.
The climb hurts, but the view from the top is worth it. | La montée fait mal, mais la vue du sommet en vaut la peine.
Cycling teaches you to suffer patiently. | Le vélo t'apprend à souffrir avec patience.
It never gets easier; you just go faster. | Ça ne devient jamais plus facile ; on va juste plus vite.
Cycling connects people across generations and borders. | Le vélo relie les gens au-delà des générations et des frontières.
A well-planned route makes all the difference. | Un itinéraire bien préparé fait toute la différence.
Respect the mountain, and the mountain will respect you. | Respecte la montagne, et la montagne te respectera.
`,
});
