// 法文對照（Français）：緊急防災
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


// ---------- 基礎 Basic ----------
addFrench("prepare", {
  words: `
emergency | l'urgence | Restez calme en cas d'urgence.
disaster | la catastrophe | Préparez-vous avant une catastrophe.
earthquake | le tremblement de terre ; le séisme | Le tremblement de terre m'a réveillé.
typhoon | le typhon | Un typhon arrive.
flood | l'inondation | L'inondation est arrivée jusqu'à notre porte.
storm | la tempête | La tempête se renforce.
power outage | la coupure de courant | Il y a une coupure de courant.
blackout | la panne générale ; le black-out | La panne générale a duré toute la nuit.
ready | prêt | Tu es prêt pour le typhon ?
prepare | préparer | Préparons un sac d'urgence.
kit | le kit | Notre kit est sous le lit.
bag | le sac | Garde le sac près de la porte.
water | l'eau | Stockez assez d'eau pour tout le monde.
bottled water | l'eau en bouteille | Achète de l'eau en bouteille.
food | la nourriture | Gardez trois jours de nourriture à la maison.
can | la boîte de conserve | Ouvre une boîte de haricots.
canned food | les conserves | Les conserves se gardent longtemps.
can opener | l'ouvre-boîte | N'oublie pas l'ouvre-boîte.
rice | le riz | Nous avons un gros sac de riz.
instant noodles | les nouilles instantanées | Les nouilles instantanées demandent de l'eau chaude.
crackers | les crackers ; les biscuits salés | Les crackers sont faciles à stocker.
snack | l'en-cas ; le goûter | Emporte des en-cas pour les enfants.
chocolate | le chocolat | Le chocolat donne de l'énergie rapidement.
peanut butter | le beurre de cacahuète | Le beurre de cacahuète se conserve bien.
milk powder | le lait en poudre | Prends du lait en poudre pour le bébé.
baby | le bébé | De quoi le bébé a-t-il besoin ?
pet | l'animal de compagnie | N'oublie pas ton animal de compagnie.
pet food | la nourriture pour animaux | Emporte de la nourriture pour animaux.
flashlight | la lampe de poche | Où est la lampe de poche ?
battery | la pile | Vérifie la pile de la lampe de poche.
candle | la bougie | Les bougies peuvent provoquer des incendies.
radio | la radio | Écoutez la radio pour les infos.
charger | le chargeur | Emporte ton chargeur de téléphone.
power bank | la batterie externe | Garde la batterie externe chargée.
whistle | le sifflet | Siffle si tu es coincé.
first aid kit | la trousse de premiers secours | Où est la trousse de premiers secours ?
medicine | les médicaments | Emporte tes médicaments.
mask | le masque | Porte un masque dans la poussière.
gloves | les gants | Mets des gants pour ramasser le verre cassé.
shoes | les chaussures | Garde des chaussures près de ton lit.
glass | le verre | Il y a du verre cassé partout.
blanket | la couverture | Prends une couverture chaude.
raincoat | l'imperméable ; le ciré | Emporte un imperméable.
clothes | les vêtements | Emporte des vêtements de rechange.
towel | la serviette | Une serviette sert à beaucoup de choses.
toilet paper | le papier toilette | Il nous faut plus de papier toilette.
wet wipes | les lingettes | Les lingettes aident quand il n'y a pas d'eau.
trash bag | le sac poubelle | Les sacs poubelle servent à beaucoup de choses.
cash | l'argent liquide ; les espèces | Les distributeurs peuvent tomber en panne, alors garde des espèces.
coins | la monnaie ; les pièces | Garde aussi de la monnaie.
ID card | la carte d'identité | Garde une copie de ta carte d'identité.
copy | la copie ; la photocopie | Fais une copie de ton passeport.
key | la clé | Garde des clés de rechange dans le sac.
family | la famille | Fais un plan avec ta famille.
plan | le plan | Vous avez un plan familial ?
meet | se retrouver | Retrouvons-nous au parc.
meeting place | le lieu de rendez-vous | Notre lieu de rendez-vous est le portail de l'école.
neighbor | le voisin | Prenez des nouvelles de vos voisins.
help | l'aide ; au secours | Appelle à l'aide.
call | appeler | Appelle le 119.
safe | en sécurité | Tu es en sécurité ?
danger | le danger | Restez loin du danger.
shake | trembler ; secouer | Le sol s'est mis à trembler.
table | la table | Mets-toi sous la table.
cover | se protéger ; couvrir | Protège ta tête et ta nuque.
head | la tête | Protège ta tête.
window | la fenêtre | Éloigne-toi de la fenêtre.
stairs | l'escalier | Prends l'escalier, pas l'ascenseur.
elevator | l'ascenseur | Ne prends pas l'ascenseur pendant un incendie ou un séisme.
outside | dehors | Attends dehors.
inside | à l'intérieur | Reste à l'intérieur pendant le typhon.
leave | partir | Nous devons partir maintenant.
shelter | l'abri ; le centre d'hébergement | Allez au centre d'hébergement le plus proche.
open space | l'espace dégagé | Allez dans un espace dégagé, loin des bâtiments.
news | les informations ; les infos | Regarde les infos.
alert | l'alerte | Tu as reçu l'alerte sur ton téléphone ?
warning | l'avertissement ; l'alerte | Il y a une alerte typhon.
siren | la sirène | J'entends une sirène.
wind | le vent | Le vent est très fort.
heavy rain | les pluies torrentielles ; la forte pluie | De fortes pluies arrivent.
gas | le gaz | Ça sent le gaz !
turn off | couper ; éteindre | Coupe le gaz.
tape | le ruban adhésif ; le scotch | Le ruban adhésif sert à plein de choses.
bucket | le seau | Remplis un seau d'eau.
bathtub | la baignoire | Remplis la baignoire avant le typhon.
flush | tirer la chasse | Utilise un seau d'eau pour tirer la chasse.
cook | cuisiner | On peut cuisiner sans électricité ?
camping stove | le réchaud de camping | N'utilise le réchaud de camping que dehors.
dark | sombre ; noir | Il fait tellement noir sans électricité.
hot | chaud | Bois plus d'eau quand il fait chaud.
calm | calme | Reste calme.
together | ensemble | Restons ensemble.
list | la liste | Fais une liste de ce dont tu as besoin.
check | vérifier | Vérifie ton sac tous les six mois.
old | âgé ; vieux | Aidez d'abord les personnes âgées.
sick | malade | Ma mère est malade. Elle a besoin de ses médicaments.
hungry | qui a faim | Les enfants ont faim.
thirsty | qui a soif | J'ai soif.
store | stocker ; conserver | Stockez l'eau dans un endroit frais et sombre.
buy | acheter | Achetons de l'eau avant le typhon.
`,
  phrases: `
Are we ready for a typhoon? | Sommes-nous prêts pour un typhon ?
Let's get ready now. | Préparons-nous dès maintenant.
Do we have enough water? | On a assez d'eau ?
Let's buy some bottled water. | Achetons de l'eau en bouteille.
Fill the bathtub with water. | Remplis la baignoire d'eau.
Fill all the buckets too. | Remplis aussi tous les seaux.
Do we have enough food? | On a assez de nourriture ?
Buy food that doesn't need cooking. | Achète de la nourriture qui ne demande pas de cuisson.
Canned food is good. | Les conserves, c'est bien.
Don't forget the can opener. | N'oublie pas l'ouvre-boîte.
We have rice and instant noodles. | On a du riz et des nouilles instantanées.
Let's buy some crackers and peanut butter. | Achetons des crackers et du beurre de cacahuète.
Get some snacks for the kids. | Prends des en-cas pour les enfants.
Do we have milk powder for the baby? | On a du lait en poudre pour le bébé ?
Don't forget the cat food. | N'oublie pas les croquettes du chat.
Where's the flashlight? | Où est la lampe de poche ?
Do we have batteries? | On a des piles ?
Charge your phone now. | Charge ton téléphone maintenant.
Charge the power bank too. | Charge aussi la batterie externe.
Where's the first aid kit? | Où est la trousse de premiers secours ?
Pack your medicine. | Emporte tes médicaments.
Put a whistle in the bag. | Mets un sifflet dans le sac.
Keep some cash in the bag. | Garde un peu d'argent liquide dans le sac.
Make copies of our ID cards. | Fais des copies de nos cartes d'identité.
Put the bag by the door. | Mets le sac près de la porte.
Keep shoes by your bed. | Garde des chaussures près de ton lit.
Check the bag every six months. | Vérifie le sac tous les six mois.
Make a list. | Fais une liste.
What else do we need? | De quoi d'autre avons-nous besoin ?
Let's make a family plan. | Faisons un plan familial.
Where should we meet? | Où devrions-nous nous retrouver ?
Let's meet at the park. | Retrouvons-nous au parc.
Everyone, learn this phone number. | Tout le monde, apprenez ce numéro par cœur.
Call me if you can. | Appelle-moi si tu peux.
Send me a message if you can't call. | Envoie-moi un message si tu ne peux pas appeler.
I'm safe. Don't worry. | Je suis en sécurité. Ne t'inquiète pas.
Are you okay? | Ça va ?
Is everyone here? | Tout le monde est là ?
It's an earthquake! | C'est un tremblement de terre !
Get under the table! | Mets-toi sous la table !
Cover your head! | Protège ta tête !
Hold on to the table leg. | Tiens bien le pied de la table.
Stay away from the windows. | Éloigne-toi des fenêtres.
Don't run outside. | Ne cours pas dehors.
Wait until the shaking stops. | Attends que ça arrête de trembler.
Turn off the gas. | Coupe le gaz.
Watch out for broken glass. | Attention au verre cassé.
Put on your shoes. | Mets tes chaussures.
Use the stairs. | Prends l'escalier.
Don't use the elevator. | Ne prends pas l'ascenseur.
Go to an open space. | Va dans un espace dégagé.
Stay away from buildings. | Éloigne-toi des bâtiments.
There may be more shaking. | Il pourrait y avoir d'autres secousses.
The typhoon is coming tonight. | Le typhon arrive ce soir.
Bring the plants inside. | Rentre les plantes.
Close all the windows. | Ferme toutes les fenêtres.
Stay inside. | Reste à l'intérieur.
Don't go to the beach. | Ne va pas à la plage.
Don't go near the river. | Ne t'approche pas de la rivière.
The power is out. | Il n'y a plus de courant.
It's so dark. | Il fait tellement noir.
Use the flashlight, not candles. | Utilise la lampe de poche, pas des bougies.
Keep the fridge closed. | Garde le frigo fermé.
The water is off. | L'eau est coupée.
Use the bathtub water to flush the toilet. | Utilise l'eau de la baignoire pour tirer la chasse.
Don't drink the bathtub water. | Ne bois pas l'eau de la baignoire.
Listen to the radio. | Écoute la radio.
Did you get the alert? | Tu as reçu l'alerte ?
What does the news say? | Qu'est-ce que disent les infos ?
Is school closed tomorrow? | L'école est fermée demain ?
We have to leave now. | Nous devons partir maintenant.
Take your bag and go. | Prends ton sac et pars.
Leave everything else. | Laisse tout le reste.
Hold my hand. | Tiens-moi la main.
Stay close to me. | Reste près de moi.
Go to the shelter. | Va au centre d'hébergement.
Where is the nearest shelter? | Où est le centre d'hébergement le plus proche ?
The school is a shelter. | L'école sert de centre d'hébergement.
Help! I'm trapped! | Au secours ! Je suis coincé !
Blow the whistle. | Siffle.
Call 119. | Appelle le 119.
Is anyone hurt? | Il y a des blessés ?
I smell gas! | Ça sent le gaz !
Don't turn on the lights. | N'allume pas la lumière.
Open the windows and get out. | Ouvre les fenêtres et sors.
Check on your neighbors. | Prends des nouvelles de tes voisins.
Can I help you? | Je peux vous aider ?
Help old people first. | Aide d'abord les personnes âgées.
Share your water. | Partage ton eau.
Stay calm. | Reste calme.
Don't panic. | Pas de panique.
We'll be okay. | Ça va aller.
Drink some water. | Bois un peu d'eau.
Eat something. | Mange quelque chose.
Try to get some sleep. | Essaie de dormir un peu.
Let's wait for news. | Attendons les nouvelles.
It's over. We're safe now. | C'est fini. Nous sommes en sécurité maintenant.
Let's buy more water next time. | La prochaine fois, achetons plus d'eau.
Being ready is the best way to stay safe. | Être prêt, c'est la meilleure façon de rester en sécurité.
Keep the radio on. | Laisse la radio allumée.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("prepare", {
  words: `
emergency kit | le kit d'urgence | Chaque famille a besoin d'un kit d'urgence.
go-bag | le sac d'évacuation | Prends ton sac d'évacuation et pars.
supplies | les provisions ; les réserves | Il nous faut plus de provisions.
stock up | faire des réserves | Les gens font des réserves avant un typhon.
non-perishable | non périssable | Stockez des aliments non périssables.
shelf life | la durée de conservation | Le riz a une longue durée de conservation.
expiration date | la date de péremption | Vérifie la date de péremption.
rotate | renouveler ; faire tourner | Renouvelez vos réserves tous les six mois.
first in, first out | premier entré, premier sorti | Appliquez la règle « premier entré, premier sorti ».
ready-to-eat | prêt à manger | Les repas prêts à manger ne demandent pas de cuisson.
dried fruit | les fruits secs | Les fruits secs sont légers et sains.
energy bar | la barre énergétique | Emporte quelques barres énergétiques.
nuts | les noix ; les fruits à coque | Les fruits à coque sont très caloriques.
canned tuna | le thon en boîte | Le thon en boîte est une bonne source de protéines.
protein | les protéines | Les haricots apportent des protéines.
calories | les calories | Il faut assez de calories pour tenir.
drinking water | l'eau potable | Stockez l'eau potable dans des récipients propres.
per person | par personne | Stockez au moins trois litres par personne et par jour.
container | le récipient ; le bidon | Utilisez des récipients propres bien fermés.
tap water | l'eau du robinet | L'eau du robinet n'est peut-être pas sûre après un séisme.
boil-water notice | l'avis de faire bouillir l'eau | Il y a un avis de faire bouillir l'eau dans notre quartier.
water outage | la coupure d'eau | Il y a une coupure d'eau jusqu'à demain.
running water | l'eau courante | Nous n'avons plus d'eau courante.
ration | rationner | Nous devons rationner l'eau.
hand-crank radio | la radio à manivelle | Une radio à manivelle n'a pas besoin de piles.
solar charger | le chargeur solaire | Un chargeur solaire garde ton téléphone en vie.
headlamp | la lampe frontale | Une lampe frontale te laisse les mains libres.
spare | de rechange | Gardez une paire de lunettes de rechange dans votre kit.
prescription | les médicaments sur ordonnance | Emportez une semaine de médicaments sur ordonnance.
important documents | les documents importants | Gardez les documents importants dans un sac étanche.
emergency contact | la personne à contacter en cas d'urgence | Notez une personne à contacter en cas d'urgence.
contact list | la liste de contacts | Gardez une liste de contacts sur papier.
evacuate | évacuer | On nous a demandé d'évacuer.
evacuation route | l'itinéraire d'évacuation | Connaissez votre itinéraire d'évacuation.
evacuation center | le centre d'hébergement d'urgence | L'école est un centre d'hébergement d'urgence.
shelter in place | se mettre à l'abri sur place | On nous a dit de nous mettre à l'abri sur place.
drop, cover and hold on | se baisser, s'abriter, s'agripper | Quand ça commence à trembler : baissez-vous, abritez-vous, agrippez-vous !
aftershock | la réplique | Préparez-vous aux répliques.
magnitude | la magnitude | C'était un séisme de magnitude 6.
intensity | l'intensité | L'intensité était de niveau 5 à Taipei.
epicenter | l'épicentre | L'épicentre se trouvait au large de Hualien.
tsunami | le tsunami | Montez en hauteur en cas d'alerte au tsunami.
landslide | le glissement de terrain | Les fortes pluies peuvent provoquer des glissements de terrain.
storm surge | l'onde de tempête ; la submersion marine | L'onde de tempête peut inonder les zones côtières.
land warning | l'alerte typhon terrestre | Le service météo a émis une alerte typhon terrestre.
typhoon day | le jour de congé pour typhon | Demain, c'est jour de congé pour typhon.
sandbag | le sac de sable | Mets des sacs de sable devant la porte.
board up | barricader avec des planches | Barricade les fenêtres avec des planches.
secure | fixer ; arrimer | Fixez tout ce qui pourrait s'envoler.
loose objects | les objets non fixés | Rentrez les objets non fixés.
bookshelf | la bibliothèque ; l'étagère | Fixe la bibliothèque au mur.
anchor | fixer ; ancrer | Fixez les meubles lourds au mur.
gas valve | le robinet de gaz | Tu sais où est le robinet de gaz ?
circuit breaker | le disjoncteur | Coupe le disjoncteur si l'eau entre.
main switch | l'interrupteur général | Coupe l'interrupteur général avant de partir.
fire extinguisher | l'extincteur | Gardez un extincteur dans la cuisine.
generator | le groupe électrogène | Ne faites jamais tourner un groupe électrogène à l'intérieur.
carbon monoxide | le monoxyde de carbone | Le monoxyde de carbone n'a pas d'odeur.
trapped | coincé ; bloqué | Des gens sont bloqués dans le bâtiment.
rubble | les décombres | Les sauveteurs ont fouillé les décombres.
injured | blessé | Y a-t-il des blessés ?
missing | disparu | Deux personnes sont portées disparues.
volunteer | le bénévole | Des bénévoles ont distribué de l'eau.
donate | donner ; faire un don | Nous avons donné de la nourriture et des couvertures.
relief supplies | l'aide humanitaire ; les secours | L'aide humanitaire est arrivée par camion.
cell broadcast | la diffusion cellulaire | L'alerte est arrivée par diffusion cellulaire.
emergency alert | l'alerte d'urgence | Mon téléphone a émis une alerte d'urgence très forte.
air raid | le raid aérien ; l'attaque aérienne | Allez dans un abri pendant une attaque aérienne.
air-raid shelter | l'abri antiaérien | Trouvez l'abri antiaérien le plus proche.
basement | le sous-sol | Beaucoup d'abris antiaériens sont dans des sous-sols.
underground | souterrain | Les parkings souterrains peuvent être inondés.
high ground | les hauteurs | Montez sur les hauteurs.
low-lying | en contrebas ; de basse altitude | Les zones basses risquent d'être inondées.
mark yourself safe | signaler qu'on est en sécurité | Signalez que vous êtes en sécurité sur les réseaux sociaux.
checklist | la liste de contrôle | Utilisez une liste de contrôle pour préparer votre kit.
drill | l'exercice | Nous faisons un exercice séisme chaque année.
first aid | les premiers secours | Apprenez les gestes de premiers secours.
CPR | la réanimation cardio-pulmonaire (RCP) | J'ai appris la RCP au travail.
AED | le défibrillateur automatisé externe (DAE) | Il y a un défibrillateur dans le hall.
refrigerator | le réfrigérateur | Gardez le réfrigérateur fermé pendant une coupure.
spoil | se gâter ; s'avarier | La nourriture du frigo va se gâter.
thaw | décongeler | Les surgelés vont commencer à décongeler.
hygiene | l'hygiène | L'hygiène est importante après une inondation.
hand sanitizer | le gel hydroalcoolique | Emporte du gel hydroalcoolique.
sanitary pads | les serviettes hygiéniques | N'oublie pas les serviettes hygiéniques.
diapers | les couches | Emporte assez de couches.
elderly | âgé | Prenez des nouvelles des voisins âgés.
disability | le handicap | Prévoyez un plan pour les membres de la famille en situation de handicap.
power cut | la coupure de courant | Nous avons eu une coupure de courant de six heures.
waterproof | étanche | Mets ton téléphone dans une pochette étanche.
hazard | le danger ; le risque | Repérez les dangers autour de votre maison.
stay tuned | rester à l'écoute | Restez à l'écoute pour les mises à jour.
cancel | annuler | Tous les vols ont été annulés.
closed | fermé | Les écoles sont fermées demain.
fallen tree | l'arbre tombé | Un arbre tombé bloque la route.
power line | la ligne électrique | Restez loin des lignes électriques tombées.
emergency number | le numéro d'urgence | Le numéro d'urgence pour les pompiers et les ambulances est le 119.
pantry | le garde-manger ; le cellier | Gardez de la nourriture en plus dans le garde-manger.
jerry can | le jerrican | Remplis le jerrican d'eau.
flood barrier | le batardeau ; la barrière anti-inondation | Installe la barrière anti-inondation devant la porte.
`,
  phrases: `
Do you have an emergency kit at home? | Tu as un kit d'urgence chez toi ?
Every family member should have a go-bag. | Chaque membre de la famille devrait avoir un sac d'évacuation.
Store at least three liters of water per person per day. | Stockez au moins trois litres d'eau par personne et par jour.
Don't forget water for cooking and washing. | N'oubliez pas l'eau pour cuisiner et se laver.
Pets need water too. | Les animaux ont aussi besoin d'eau.
Store water in a cool, dark place. | Stockez l'eau dans un endroit frais et sombre.
Replace stored tap water every six months. | Renouvelez l'eau du robinet stockée tous les six mois.
Keep at least three days of non-perishable food. | Gardez au moins trois jours de nourriture non périssable.
Two weeks of supplies is even better. | Deux semaines de réserves, c'est encore mieux.
Choose food your family actually likes. | Choisissez des aliments que votre famille aime vraiment.
Avoid salty food. It makes you thirsty. | Évitez les aliments salés. Ils donnent soif.
Check the expiration dates twice a year. | Vérifiez les dates de péremption deux fois par an.
Use the oldest food first: first in, first out. | Consommez d'abord les aliments les plus anciens : premier entré, premier sorti.
Rotate your stock so nothing goes to waste. | Renouvelez vos réserves pour ne rien gaspiller.
Ready-to-eat meals are perfect for emergencies. | Les repas prêts à manger sont parfaits en cas d'urgence.
Canned tuna and beans are good sources of protein. | Le thon en boîte et les haricots sont de bonnes sources de protéines.
Pack energy bars, nuts and dried fruit. | Emportez des barres énergétiques, des fruits à coque et des fruits secs.
Keep a manual can opener in the kit. | Gardez un ouvre-boîte manuel dans le kit.
If there's no power, eat the food in the fridge first. | S'il n'y a plus de courant, mangez d'abord ce qu'il y a dans le frigo.
Then eat food from the freezer, and save canned food for last. | Ensuite le congélateur, et gardez les conserves pour la fin.
Keep the fridge door closed to keep food cold longer. | Gardez la porte du frigo fermée pour que les aliments restent froids plus longtemps.
A full freezer stays cold longer than a half-empty one. | Un congélateur plein reste froid plus longtemps qu'un congélateur à moitié vide.
If food smells strange, throw it away. | Si un aliment sent bizarre, jetez-le.
Is there a boil-water notice? | Y a-t-il un avis de faire bouillir l'eau ?
After an earthquake, tap water may not be safe. | Après un séisme, l'eau du robinet n'est peut-être pas sûre.
We need to ration the water until the supply is back. | Nous devons rationner l'eau jusqu'au rétablissement de la distribution.
Fill bottles and the bathtub before the water goes off. | Remplissez les bouteilles et la baignoire avant la coupure d'eau.
Pack a week of prescription medicine. | Emportez une semaine de médicaments sur ordonnance.
Keep spare glasses in your go-bag. | Gardez des lunettes de rechange dans votre sac d'évacuation.
Put important documents in a waterproof bag. | Mettez les documents importants dans un sac étanche.
Write your emergency contacts on paper. | Notez vos contacts d'urgence sur papier.
Your phone might be dead when you need it. | Votre téléphone sera peut-être déchargé au moment où vous en aurez besoin.
A hand-crank radio works without batteries. | Une radio à manivelle fonctionne sans piles.
Know two ways out of your home. | Connaissez deux façons de sortir de chez vous.
Do you know your evacuation route? | Vous connaissez votre itinéraire d'évacuation ?
Find the nearest evacuation center on the map. | Repérez sur la carte le centre d'hébergement le plus proche.
Sometimes it's safer to shelter in place. | Parfois, il est plus sûr de rester à l'abri sur place.
When the shaking starts, drop, cover and hold on. | Quand ça tremble : baissez-vous, abritez-vous, agrippez-vous.
If there's no table, protect your head with your arms. | S'il n'y a pas de table, protégez votre tête avec vos bras.
Don't run outside while the building is shaking. | Ne courez pas dehors pendant que le bâtiment tremble.
Be ready for aftershocks. | Préparez-vous aux répliques.
What was the magnitude? | Quelle était la magnitude ?
The intensity was level 5 here. | Ici, l'intensité était de niveau 5.
If you're near the coast and the shaking is strong, move to high ground. | Si vous êtes près de la côte et que la secousse est forte, montez sur les hauteurs.
Don't wait for a tsunami warning. | N'attendez pas l'alerte au tsunami.
A land warning has been issued. | Une alerte typhon terrestre a été émise.
Is tomorrow a typhoon day? | Demain, on a congé pour le typhon ?
Bring loose objects inside from the balcony. | Rentrez les objets non fixés du balcon.
Put sandbags in front of the garage. | Mettez des sacs de sable devant le garage.
Move your car out of the underground parking lot. | Sortez votre voiture du parking souterrain.
Fix bookshelves and heavy furniture to the wall. | Fixez les bibliothèques et les meubles lourds au mur.
Don't put heavy things on high shelves. | Ne mettez pas d'objets lourds sur les étagères hautes.
Where's the gas valve? | Où est le robinet de gaz ?
If water comes in, turn off the circuit breaker. | Si l'eau entre, coupez le disjoncteur.
Never touch electrical switches with wet hands. | Ne touchez jamais un interrupteur avec les mains mouillées.
Never run a generator indoors. | Ne faites jamais tourner un groupe électrogène à l'intérieur.
Carbon monoxide has no smell or color. | Le monoxyde de carbone est inodore et incolore.
Never use a charcoal stove inside. | N'utilisez jamais de réchaud à charbon à l'intérieur.
Stay away from fallen power lines. | Restez loin des lignes électriques tombées.
Don't drive through flooded roads. | Ne roulez pas sur des routes inondées.
Just thirty centimeters of moving water can sweep a car away. | Trente centimètres d'eau en mouvement suffisent à emporter une voiture.
Stay away from rivers and slopes in heavy rain. | Restez loin des rivières et des pentes en cas de fortes pluies.
I got an emergency alert on my phone. | J'ai reçu une alerte d'urgence sur mon téléphone.
That's a cell broadcast. Everyone gets it. | C'est une diffusion cellulaire. Tout le monde la reçoit.
Do you know where the nearest air-raid shelter is? | Tu sais où est l'abri antiaérien le plus proche ?
Look for the yellow air-raid shelter sign. | Cherchez le panneau jaune d'abri antiaérien.
Many shelters are in basements and underground parking lots. | Beaucoup d'abris se trouvent dans des sous-sols et des parkings souterrains.
Mark yourself safe so your family doesn't worry. | Signalez que vous êtes en sécurité pour que votre famille ne s'inquiète pas.
Text instead of calling. The lines may be busy. | Envoyez un SMS plutôt qu'appeler. Les lignes risquent d'être saturées.
Pick one relative who lives far away as a contact. | Choisissez comme contact un proche qui habite loin.
Do an earthquake drill with your family. | Faites un exercice séisme en famille.
Learn CPR and how to use an AED. | Apprenez la RCP et l'utilisation d'un défibrillateur.
Take a basic first aid course. | Suivez une formation de base aux premiers secours.
Pack hand sanitizer and wet wipes. | Emportez du gel hydroalcoolique et des lingettes.
Don't forget sanitary pads and diapers. | N'oubliez pas les serviettes hygiéniques et les couches.
Check on elderly neighbors who live alone. | Prenez des nouvelles des voisins âgés qui vivent seuls.
Plan for family members with a disability. | Prévoyez un plan pour les proches en situation de handicap.
Take photos of your home and belongings now. | Photographiez dès maintenant votre logement et vos biens.
Volunteers are handing out water at the school. | Des bénévoles distribuent de l'eau à l'école.
Where can we donate relief supplies? | Où peut-on donner des produits de première nécessité ?
Only donate what is needed. | Ne donnez que ce qui est nécessaire.
All flights have been canceled. | Tous les vols ont été annulés.
A fallen tree is blocking the road. | Un arbre tombé bloque la route.
The power should be back by tonight. | Le courant devrait revenir d'ici ce soir.
Stay tuned for updates. | Restez à l'écoute pour les mises à jour.
Is anyone trapped or injured? | Y a-t-il quelqu'un de coincé ou de blessé ?
Two people are still missing. | Deux personnes sont toujours portées disparues.
Rescuers are searching the rubble. | Les sauveteurs fouillent les décombres.
Don't go back inside until it's checked. | Ne rentrez pas avant que le bâtiment ait été vérifié.
There might be gas leaks. | Il pourrait y avoir des fuites de gaz.
Don't panic buy. There's enough for everyone. | Pas d'achats de panique. Il y en a assez pour tout le monde.
Don't spread rumors online. | Ne propagez pas de rumeurs en ligne.
Check the official website for updates. | Consultez le site officiel pour les mises à jour.
The government website has a preparedness guide. | Le site du gouvernement propose un guide de préparation.
Keep a little extra in the pantry all the time. | Gardez toujours un peu de réserve dans le garde-manger.
Make preparation a habit, not a panic. | Faites de la préparation une habitude, pas une panique.
Teach your kids what to do in an emergency. | Apprenez à vos enfants quoi faire en cas d'urgence.
Practice your plan, don't just write it down. | Entraînez-vous à votre plan, ne vous contentez pas de l'écrire.
Being prepared means you can help others too. | Être préparé, c'est aussi pouvoir aider les autres.
Keep extra batteries for the flashlight and radio. | Gardez des piles de rechange pour la lampe de poche et la radio.
`,
});

// ---------- 高級 Advanced ----------
addFrench("prepare", {
  words: `
preparedness | la préparation aux catastrophes | La préparation aux catastrophes sauve des vies.
resilience | la résilience | La résilience collective compte en temps de crise.
whole-of-society resilience | la résilience de toute la société | Taïwan construit la résilience de toute la société.
civil defense | la défense civile ; la protection civile | La formation à la protection civile enseigne les gestes de base.
self-sufficiency | l'autonomie | Visez au moins une semaine d'autonomie.
contingency plan | le plan d'urgence ; le plan de secours | Chaque famille a besoin d'un plan de secours.
redundancy | la redondance | Prévoyez une redondance dans votre alimentation électrique.
critical infrastructure | les infrastructures critiques | Les séismes peuvent endommager les infrastructures critiques.
supply chain disruption | la rupture de la chaîne d'approvisionnement | Une rupture de la chaîne d'approvisionnement peut vider les rayons des supermarchés.
panic buying | les achats de panique | Les achats de panique ne laissent rien aux autres.
hoarding | l'accaparement ; le stockage excessif | Le stockage excessif aggrave les pénuries.
shortage | la pénurie | Il y a une pénurie d'eau.
rationing | le rationnement | La ville a instauré un rationnement de l'eau.
potable water | l'eau potable | L'eau potable est la priorité absolue.
water purification | la purification de l'eau | Apprenez les bases de la purification de l'eau.
unscented bleach | l'eau de Javel sans parfum | N'utilisez que de l'eau de Javel ordinaire sans parfum pour désinfecter l'eau.
food-grade | de qualité alimentaire | Stockez l'eau dans des récipients de qualité alimentaire.
airtight | hermétique | Gardez le riz dans un récipient hermétique.
oxygen absorber | l'absorbeur d'oxygène | Les absorbeurs d'oxygène aident les aliments secs à se conserver plus longtemps.
vacuum-sealed | emballé sous vide | Les aliments emballés sous vide se conservent plus longtemps.
freeze-dried | lyophilisé | Les repas lyophilisés sont légers et se gardent des années.
caloric density | la densité calorique | Les fruits à coque ont une forte densité calorique.
dietary needs | les besoins alimentaires | Tenez compte des besoins alimentaires de chacun.
infant formula | le lait infantile | Stockez du lait infantile prêt à l'emploi.
food poisoning | l'intoxication alimentaire | Les aliments avariés peuvent provoquer une intoxication alimentaire.
when in doubt, throw it out | dans le doute, jetez | Dans le doute, jetez.
temperature danger zone | la zone de température dangereuse | Les bactéries se multiplient vite dans la zone de température dangereuse.
seismic | sismique | Taïwan se trouve dans une zone sismique.
seismic retrofit | le renforcement parasismique | Les vieux bâtiments ont besoin d'un renforcement parasismique.
fault line | la ligne de faille | Notre ville est près d'une ligne de faille.
liquefaction | la liquéfaction des sols | La liquéfaction des sols peut faire pencher les bâtiments.
soft story | l'étage souple ; le rez-de-chaussée transparent | Les bâtiments avec un étage souple s'effondrent plus facilement.
structural damage | les dommages structurels | Vérifiez s'il y a des dommages structurels.
building inspection | l'inspection du bâtiment | Attendez l'inspection du bâtiment avant de rentrer.
earthquake early warning | l'alerte sismique précoce | L'alerte sismique précoce nous a donné quelques secondes.
hazard map | la carte des risques | Consultez la carte des risques avant d'acheter une maison.
inundation | l'inondation ; la submersion | La carte montre le risque d'inondation.
debris flow | la coulée de boue | Il y a une alerte aux coulées de boue pour le village.
red alert | l'alerte rouge | Une alerte rouge aux coulées de boue a été émise.
mandatory evacuation | l'évacuation obligatoire | Le village était sous évacuation obligatoire.
emergency operations center | le centre opérationnel de crise | Le centre opérationnel de crise est maintenant ouvert.
first responders | les premiers intervenants | Les premiers intervenants sont arrivés rapidement.
search and rescue | la recherche et le sauvetage | Les équipes de recherche et de sauvetage ont travaillé toute la nuit.
triage | le triage | Le triage décide qui est soigné en premier.
mass casualty | les victimes en grand nombre | Les hôpitaux se sont préparés à un afflux massif de victimes.
crush injury | la blessure par écrasement | Une blessure par écrasement nécessite des soins à l'hôpital.
tourniquet | le garrot | Un garrot peut arrêter une hémorragie grave d'un membre.
hemorrhage control | le contrôle des hémorragies | Le contrôle des hémorragies sauve des vies.
trauma kit | la trousse de traumatologie | Gardez une trousse de traumatologie dans la voiture.
communication blackout | la coupure des communications | Une coupure des communications a compliqué le contact avec la famille.
out-of-area contact | le contact hors de la région | Choisissez un contact hors de la région pour toute la famille.
reunification point | le point de regroupement | Mettez-vous d'accord sur un point de regroupement.
ham radio | la radio amateur | La radio amateur fonctionne quand les téléphones ne marchent plus.
walkie-talkie | le talkie-walkie | Les talkies-walkies aident les familles à rester en contact à proximité.
satellite phone | le téléphone satellite | Les sauveteurs ont utilisé un téléphone satellite.
uninterruptible power supply | l'onduleur | Un onduleur garde la box internet allumée.
portable power station | la station électrique portable | Une station électrique portable peut faire tourner un ventilateur pendant des heures.
carbon monoxide poisoning | l'intoxication au monoxyde de carbone | L'intoxication au monoxyde de carbone survient souvent après les tempêtes.
ventilation | l'aération ; la ventilation | Assurez-vous qu'il y a une bonne aération.
heatstroke | le coup de chaleur | Le coup de chaleur est un risque pendant les coupures de courant en été.
vulnerable groups | les personnes vulnérables | Anticipez les besoins des personnes vulnérables.
medically dependent | dépendant d'un appareil médical | Les personnes dépendantes d'un appareil médical ont besoin d'une alimentation de secours.
dialysis | la dialyse | Les patients dialysés ont besoin d'un plan d'urgence.
cold chain | la chaîne du froid | Certains médicaments dépendent de la chaîne du froid.
insulin | l'insuline | Gardez l'insuline au frais pendant une coupure de courant.
mental health | la santé mentale | Les catastrophes affectent la santé mentale.
psychological first aid | les premiers secours psychologiques | Des bénévoles formés aux premiers secours psychologiques peuvent aider.
trauma | le traumatisme | Les enfants peuvent montrer des signes de traumatisme après un séisme.
misinformation | les fausses informations | Les fausses informations se propagent vite pendant les catastrophes.
disinformation | la désinformation | La désinformation peut être utilisée pour semer la panique.
official sources | les sources officielles | Fiez-vous aux sources officielles.
verify | vérifier | Vérifiez avant de partager.
rumor-mongering | la propagation de rumeurs | La propagation de rumeurs peut faire de vrais dégâts en temps de crise.
mutual aid | l'entraide | Les réseaux d'entraide aident les voisins à s'en sortir.
community response team | l'équipe de quartier de protection civile | Rejoignez une équipe de quartier de protection civile.
neighborhood chief | le chef de quartier (lizhang) | Le chef de quartier a organisé les bénévoles.
disaster relief | les secours aux sinistrés | L'armée a participé aux secours aux sinistrés.
reconstruction | la reconstruction | La reconstruction a pris des années.
insurance claim | la déclaration de sinistre | Prenez des photos pour votre déclaration de sinistre.
earthquake insurance | l'assurance tremblement de terre | Vous avez une assurance tremblement de terre ?
inventory | l'inventaire | Tenez un inventaire de vos biens.
grab-and-go | à emporter en un instant | Gardez un dossier de documents à emporter en un instant.
cache | la réserve ; la cache | Gardez une petite réserve de provisions au travail.
hunker down | se terrer ; rester à l'abri | Restons à l'abri jusqu'à ce que la tempête passe.
rainy day fund | l'argent mis de côté ; le bas de laine | Gardez de l'argent de côté pour les coups durs.
emergency fund | l'épargne de précaution | Une épargne de précaution couvre les dépenses imprévues.
tabletop exercise | l'exercice sur table | Le bureau a organisé un exercice sur table.
better safe than sorry | mieux vaut prévenir que guérir | Mieux vaut prévenir que guérir.
situational awareness | la conscience de la situation | La conscience de la situation aide à réagir plus vite.
continuity plan | le plan de continuité d'activité | Notre entreprise a un plan de continuité d'activité.
backup | la sauvegarde | Gardez une sauvegarde de vos photos dans le cloud.
cascading failure | la défaillance en cascade | Une panne de courant peut provoquer une défaillance en cascade d'autres systèmes.
grid | le réseau électrique | La tempête a endommagé le réseau électrique.
rolling blackout | le délestage tournant | La compagnie d'électricité a annoncé des délestages tournants.
water pressure | la pression de l'eau | La pression de l'eau baisse dans les étages élevés pendant les coupures.
pump | la pompe | La plupart des immeubles ont besoin de pompes électriques pour monter l'eau.
gravity-fed | alimenté par gravité | Un réservoir sur le toit est alimenté par gravité.
sheltering | le confinement ; la mise à l'abri | Se mettre à l'abri chez soi est souvent plus sûr que partir.
shelf-stable | de longue conservation | Le lait de longue conservation n'a pas besoin de frigo.
evacuation order | l'ordre d'évacuation | Un ordre d'évacuation a été émis pour la côte.
`,
  phrases: `
Preparedness turns a disaster into an inconvenience. | Être préparé transforme une catastrophe en simple désagrément.
Aim to be self-sufficient for at least a week. | Visez au moins une semaine d'autonomie.
Many agencies now recommend supplies for longer than three days. | Beaucoup d'organismes recommandent désormais des réserves pour plus de trois jours.
In a major disaster, help may not reach you for days. | Lors d'une catastrophe majeure, les secours peuvent mettre des jours à arriver.
Whole-of-society resilience starts in every household. | La résilience de toute la société commence dans chaque foyer.
Civil defense isn't only the government's job. | La protection civile n'est pas seulement l'affaire du gouvernement.
Store water in food-grade containers with tight lids. | Stockez l'eau dans des récipients de qualité alimentaire bien fermés.
Never reuse containers that held chemicals. | Ne réutilisez jamais des récipients qui ont contenu des produits chimiques.
Plain, unscented bleach can disinfect water in an emergency. | En cas d'urgence, de l'eau de Javel ordinaire sans parfum peut désinfecter l'eau.
Follow official instructions for the exact amount of bleach. | Suivez les consignes officielles pour la dose exacte d'eau de Javel.
Boiling is still the most reliable method if you have fuel. | L'ébullition reste la méthode la plus fiable si vous avez du combustible.
Water left in the rooftop tank can still be used for flushing and washing. | L'eau restant dans le réservoir du toit peut encore servir pour la chasse d'eau et la toilette.
High-rise buildings depend on electric pumps for water. | Les tours dépendent de pompes électriques pour l'eau.
When the power goes out, the water may stop too. | Quand le courant est coupé, l'eau peut s'arrêter aussi.
Choose food with a high caloric density and a long shelf life. | Choisissez des aliments à forte densité calorique et de longue conservation.
Store food in airtight containers to keep out insects. | Conservez les aliments dans des boîtes hermétiques contre les insectes.
Oxygen absorbers extend the shelf life of dry goods. | Les absorbeurs d'oxygène prolongent la conservation des aliments secs.
Freeze-dried meals are expensive, but they last for years. | Les repas lyophilisés sont chers, mais ils se gardent des années.
Think about everyone's dietary needs, including allergies. | Pensez aux besoins alimentaires de chacun, allergies comprises.
Ready-to-feed infant formula doesn't need clean water. | Le lait infantile prêt à l'emploi ne nécessite pas d'eau propre.
After four hours without power, check the food in your fridge carefully. | Après quatre heures sans courant, vérifiez soigneusement les aliments du frigo.
Food left in the temperature danger zone can make you sick. | Les aliments laissés dans la zone de température dangereuse peuvent rendre malade.
When in doubt, throw it out. | Dans le doute, jetez.
Panic buying creates shortages that didn't need to happen. | Les achats de panique créent des pénuries qui n'avaient pas lieu d'être.
Build your stockpile slowly, a little each week. | Constituez vos réserves petit à petit, un peu chaque semaine.
Taiwan sits on a seismic zone where two plates meet. | Taïwan se trouve dans une zone sismique, à la rencontre de deux plaques.
Check whether your building has had a seismic retrofit. | Vérifiez si votre immeuble a bénéficié d'un renforcement parasismique.
Buildings with a soft story on the ground floor are more vulnerable. | Les bâtiments avec un rez-de-chaussée souple sont plus vulnérables.
Look up your address on the government's hazard map. | Cherchez votre adresse sur la carte des risques du gouvernement.
Soil liquefaction is a risk in some coastal and riverside areas. | La liquéfaction des sols est un risque dans certaines zones côtières et riveraines.
The earthquake early warning may give you only a few seconds. | L'alerte sismique précoce ne vous laisse parfois que quelques secondes.
Use those seconds to get under cover, not to run. | Utilisez ces secondes pour vous abriter, pas pour courir.
Wait for a building inspection before you move back in. | Attendez l'inspection du bâtiment avant de vous réinstaller.
Cracks in columns are a sign of serious structural damage. | Des fissures dans les poteaux sont le signe de graves dommages structurels.
When a red alert is issued for debris flows, leave immediately. | En cas d'alerte rouge aux coulées de boue, partez immédiatement.
Mandatory evacuation orders are not suggestions. | Un ordre d'évacuation obligatoire n'est pas une suggestion.
The emergency operations center coordinates the response. | Le centre opérationnel de crise coordonne l'intervention.
First responders may be overwhelmed in the first few days. | Les premiers intervenants peuvent être débordés les premiers jours.
Triage means the most urgent cases are treated first. | Le triage signifie que les cas les plus urgents sont soignés en premier.
Learn how to stop severe bleeding with direct pressure or a tourniquet. | Apprenez à arrêter une hémorragie grave par compression directe ou avec un garrot.
Crush injuries need professional medical care. | Les blessures par écrasement nécessitent des soins médicaux professionnels.
Keep a trauma kit in your car and at work. | Gardez une trousse de traumatologie dans votre voiture et au travail.
Communication networks often fail during major disasters. | Les réseaux de communication tombent souvent en panne lors des grandes catastrophes.
An out-of-area contact is easier to reach than a local one. | Un contact hors de la région est plus facile à joindre qu'un contact local.
Agree on a reunification point in case phones don't work. | Convenez d'un point de regroupement au cas où les téléphones ne marcheraient pas.
Ham radio operators often relay messages after disasters. | Les radioamateurs relaient souvent des messages après les catastrophes.
Walkie-talkies are useful for families in the same neighborhood. | Les talkies-walkies sont utiles pour les familles d'un même quartier.
A portable power station can keep medical devices running. | Une station électrique portable peut faire fonctionner des appareils médicaux.
An uninterruptible power supply keeps your internet on during short outages. | Un onduleur maintient votre connexion internet pendant les courtes coupures.
Generators must be used outdoors, far from windows. | Les groupes électrogènes doivent être utilisés dehors, loin des fenêtres.
Carbon monoxide poisoning is a leading cause of death after storms. | L'intoxication au monoxyde de carbone est l'une des principales causes de décès après les tempêtes.
Summer blackouts can lead to heatstroke, especially in the elderly. | Les coupures de courant en été peuvent provoquer des coups de chaleur, surtout chez les personnes âgées.
Medically dependent people should register with their local authorities. | Les personnes dépendantes d'un appareil médical devraient se signaler aux autorités locales.
Dialysis patients need a plan for where to get treatment. | Les patients dialysés doivent prévoir où se faire soigner.
Insulin and some other medicines depend on the cold chain. | L'insuline et certains autres médicaments dépendent de la chaîne du froid.
Vulnerable groups should be part of every community plan. | Les personnes vulnérables doivent être prises en compte dans chaque plan local.
Disasters take a toll on mental health, even for those who weren't hurt. | Les catastrophes pèsent sur la santé mentale, même de ceux qui n'ont pas été blessés.
Children may show trauma through nightmares or clinginess. | Les enfants peuvent montrer un traumatisme par des cauchemars ou en restant collés à leurs parents.
Psychological first aid starts with listening, not advice. | Les premiers secours psychologiques commencent par l'écoute, pas par des conseils.
Misinformation spreads faster than the facts in a crisis. | En temps de crise, les fausses informations circulent plus vite que les faits.
Disinformation may be used deliberately to cause panic. | La désinformation peut être utilisée délibérément pour semer la panique.
Rely on official sources and verify before you share. | Fiez-vous aux sources officielles et vérifiez avant de partager.
Spreading false disaster rumors can be illegal. | Propager de fausses rumeurs sur une catastrophe peut être illégal.
Mutual aid between neighbors saves lives in the first hours. | L'entraide entre voisins sauve des vies dans les premières heures.
Get to know your neighborhood chief before a disaster. | Faites connaissance avec votre chef de quartier avant une catastrophe.
Join a community response team and learn basic skills. | Rejoignez une équipe de quartier de protection civile et apprenez les gestes de base.
Disaster relief works best when it's coordinated. | Les secours sont plus efficaces quand ils sont coordonnés.
Unrequested donations can clog relief efforts. | Les dons non sollicités peuvent encombrer les opérations de secours.
Cash donations are often more useful than goods. | Les dons en argent sont souvent plus utiles que les dons en nature.
Reconstruction can take years, long after the news moves on. | La reconstruction peut prendre des années, bien après que les médias sont passés à autre chose.
Keep an inventory of your belongings for insurance claims. | Tenez un inventaire de vos biens pour les déclarations de sinistre.
Basic earthquake insurance comes with most home fire insurance in Taiwan. | À Taïwan, la plupart des assurances incendie habitation incluent une assurance séisme de base.
Back up important files and photos in the cloud. | Sauvegardez vos fichiers et photos importants dans le cloud.
Keep a grab-and-go folder with copies of key documents. | Gardez un dossier prêt à emporter avec des copies des documents essentiels.
An emergency fund helps when you can't work for weeks. | Une épargne de précaution aide quand on ne peut pas travailler pendant des semaines.
Keep a small cache of supplies at work and in the car. | Gardez une petite réserve de provisions au travail et dans la voiture.
Companies need a business continuity plan, too. | Les entreprises ont aussi besoin d'un plan de continuité d'activité.
Run a tabletop exercise to test your plan. | Organisez un exercice sur table pour tester votre plan.
A single failure in the grid can cause cascading failures. | Une seule panne sur le réseau peut provoquer des défaillances en cascade.
Rolling blackouts are announced in advance when supply is short. | Les délestages tournants sont annoncés à l'avance quand l'électricité manque.
Redundancy means having a plan B for light, water and communication. | La redondance, c'est avoir un plan B pour l'éclairage, l'eau et les communications.
Situational awareness means noticing exits and hazards wherever you go. | La conscience de la situation, c'est repérer les sorties et les dangers partout où l'on va.
If officials tell you to shelter in place, seal the room and wait. | Si les autorités vous demandent de vous mettre à l'abri sur place, calfeutrez la pièce et attendez.
Hunker down, stay informed and check on others when it's safe. | Restez à l'abri, informez-vous et prenez des nouvelles des autres quand c'est sans danger.
Supply chain disruption can last long after the disaster itself. | La rupture des approvisionnements peut durer bien après la catastrophe elle-même.
In a long crisis, skills matter more than stuff. | Dans une crise longue, les compétences comptent plus que le matériel.
Knowing your neighbors may be your best preparation. | Connaître ses voisins est peut-être la meilleure des préparations.
Better safe than sorry. | Mieux vaut prévenir que guérir.
Prepare for the disasters that are most likely where you live. | Préparez-vous aux catastrophes les plus probables là où vous vivez.
Preparedness is not about fear; it's about confidence. | Se préparer, ce n'est pas avoir peur ; c'est avoir confiance.
The time to prepare is before you need it. | Le moment de se préparer, c'est avant d'en avoir besoin.
A plan that no one practices is just a piece of paper. | Un plan que personne ne répète n'est qu'un bout de papier.
Review your plan every year and after every move. | Revoyez votre plan chaque année et après chaque déménagement.
Update your kit as your family's needs change. | Mettez à jour votre kit selon l'évolution des besoins de la famille.
Resilience is built long before the disaster arrives. | La résilience se construit bien avant l'arrivée de la catastrophe.
Store supplies in more than one place in your home. | Répartissez vos réserves à plusieurs endroits de la maison.
Water and food are the foundation of any emergency plan. | L'eau et la nourriture sont la base de tout plan d'urgence.
Don't count on shops reopening right away. | Ne comptez pas sur une réouverture immédiate des magasins.
Know how to turn off your water, gas and electricity. | Sachez couper l'eau, le gaz et l'électricité.
Plan for your pets, because some shelters have rules about animals. | Prévoyez pour vos animaux, car certains centres d'hébergement ont des règles à leur sujet.
`,
});
