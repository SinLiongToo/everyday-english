// 法文對照（Français）：行・交通
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
addFrench("transport", {
  words: `
bus | le bus | Je prends le bus pour aller à l'école.
train | le train | Le train part à neuf heures.
ticket | le billet ; le ticket | Il me faut un billet pour Taichung.
station | la gare ; la station | Où est la gare ?
left | à gauche | Tournez à gauche au coin de la rue.
walk | marcher ; aller à pied | Je vais au travail à pied tous les jours.
car | la voiture | Mon père conduit une voiture rouge.
taxi | le taxi | Prenons un taxi.
bike | le vélo | Je vais à l'école à vélo.
MRT | le métro | Le métro est rapide et propre.
airport | l'aéroport | Comment aller à l'aéroport ?
plane | l'avion | L'avion atterrit à trois heures.
boat | le bateau | Nous avons pris le bateau jusqu'à l'île.
map | le plan ; la carte | Vous pouvez me montrer sur le plan ?
road | la route | Cette route est très fréquentée.
street | la rue | La banque est dans cette rue.
bridge | le pont | Traversez le pont à pied.
corner | le coin | Le magasin est au coin de la rue.
stop | l'arrêt ; s'arrêter | Descends au prochain arrêt.
fast | rapide | Ce train est très rapide.
slow | lent | Le bus est lent aujourd'hui.
near | près | La gare est près d'ici ?
far | loin | C'est loin d'ici ?
right | à droite | Tournez à droite au feu.
straight | tout droit | Allez tout droit sur deux rues.
drive | conduire | Tu sais conduire ?
ride | aller en ; monter | Je vais au travail en scooter.
get on | monter | Montez dans le bus par la porte avant.
get off | descendre | Où est-ce que je dois descendre ?
wait | attendre | Attendez le feu vert, s'il vous plaît.
late | en retard | Le bus est encore en retard.
early | tôt | Partons tôt pour éviter les bouchons.
seat | la place ; le siège | Cette place est prise ?
scooter | le scooter | À Taïwan, beaucoup de gens roulent en scooter.
truck | le camion | Un gros camion bloque la route.
ship | le navire | Le navire est immense.
helicopter | l'hélicoptère | Un hélicoptère survole la ville.
subway | le métro | Prends le métro pour aller au centre-ville.
motorcycle | la moto | Mon oncle fait de la moto.
ambulance | l'ambulance | Appelez une ambulance !
police car | la voiture de police | Une voiture de police est garée dehors.
fire truck | le camion de pompiers | Le camion de pompiers est rouge.
wheel | la roue | Une voiture a quatre roues.
helmet | le casque | Porte toujours un casque.
seat belt | la ceinture de sécurité | Attache ta ceinture de sécurité.
traffic | la circulation | Il y a beaucoup de circulation aujourd'hui.
red light | le feu rouge | Arrête-toi au feu rouge.
green light | le feu vert | On passe au feu vert.
go | aller ; y aller | On y va !
come back | revenir | Reviens vite !
turn | tourner | Tourne à la prochaine rue.
cross | traverser | Traverse la rue prudemment.
park | se garer | Tu ne peux pas te garer ici.
fly | prendre l'avion ; voler | Nous prenons l'avion pour Tokyo demain.
sail | naviguer | Nous avons navigué autour de l'île.
lost | perdu | Je suis perdu. Vous pouvez m'aider ?
bus stop | l'arrêt de bus | L'arrêt de bus est là-bas.
next | prochain | Descends à la prochaine station.
first | premier | Prenez la première à gauche.
behind | derrière | La gare est derrière le centre commercial.
in front of | devant | Retrouve-moi devant la gare.
next to | à côté de | La banque est à côté de la poste.
across from | en face de | Le parc est en face de l'école.
between | entre | Le café est entre la banque et la librairie.
block | le pâté de maisons ; la rue | Marchez deux rues et tournez à droite.
minute | la minute | Le bus passe toutes les dix minutes.
hour | l'heure | Le trajet dure une heure.
gas | l'essence | On a besoin d'essence.
van | la camionnette ; le van | Nous avons loué un van pour le voyage.
tram | le tram | Tu peux prendre le tram pour la vieille ville.
cable car | le téléphérique | Prenons le téléphérique pour monter la montagne.
wheelchair | le fauteuil roulant | Le bus a de la place pour un fauteuil roulant.
sidewalk | le trottoir | Marche sur le trottoir, pas sur la route.
road sign | le panneau | Regarde le panneau.
tire | le pneu | La voiture a un pneu crevé.
engine | le moteur | Le moteur est très bruyant.
driver | le conducteur ; le chauffeur | Le chauffeur du bus est sympathique.
horn | le klaxon | Ne klaxonne pas la nuit.
brake | le frein | Appuie sur le frein pour t'arrêter.
steering wheel | le volant | Tiens le volant à deux mains.
ticket machine | le distributeur de billets | Achète un billet au distributeur.
stairs | l'escalier | Prends l'escalier pour aller au quai.
east | l'est | Le soleil se lève à l'est.
west | l'ouest | Roule vers l'ouest pendant dix minutes.
north | le nord | La gare est au nord du parc.
south | le sud | Nous allons vers le sud, à Kaohsiung.
speed | la vitesse | Vérifie ta vitesse.
road trip | le road trip ; le voyage en voiture | Nous avons fait un road trip l'été dernier.
rain | la pluie | Roule doucement sous la pluie.
dangerous | dangereux | Cette route est dangereuse la nuit.
safe | sans danger ; sûr | On peut traverser ici sans danger ?
careful | prudent | Fais attention dans l'escalier.
busy | animé ; bondé | La gare est très animée.
full | plein ; complet | Le bus est plein.
empty | vide | Le train est presque vide.
hurry | se dépêcher | Dépêche-toi, le bus arrive !
arrive | arriver | Le train arrivera à cinq heures.
leave | partir | À quelle heure part le bus ?
trip | le voyage ; le trajet | Ton voyage s'est bien passé ?
sign | le panneau | Le panneau dit « Stationnement interdit ».
`,
  phrases: `
How do I get to the MRT station? | Comment aller à la station de métro ?
Go straight and turn right. | Allez tout droit, puis tournez à droite.
How long does it take? | Ça prend combien de temps ?
Where is the bus stop? | Où est l'arrêt de bus ?
Where is the train station? | Où est la gare ?
How do I get to the station? | Comment aller à la gare ?
Is it far from here? | C'est loin d'ici ?
It's near here. | C'est tout près d'ici.
Go straight. | Allez tout droit.
Turn left. | Tournez à gauche.
Turn right. | Tournez à droite.
It's on your left. | C'est sur votre gauche.
It's on the corner. | C'est au coin de la rue.
Cross the street. | Traversez la rue.
Wait for the green light. | Attendez le feu vert.
Which bus goes to the airport? | Quel bus va à l'aéroport ?
Does this bus go downtown? | Ce bus va au centre-ville ?
When is the next bus? | Le prochain bus passe quand ?
The bus is late. | Le bus est en retard.
I missed the bus. | J'ai raté le bus.
How much is the ticket? | Combien coûte le billet ?
One ticket, please. | Un billet, s'il vous plaît.
A return ticket, please. | Un aller-retour, s'il vous plaît.
Where do I get off? | Où est-ce que je descends ?
Please tell me when to get off. | Dites-moi quand descendre, s'il vous plaît.
I get off at the next stop. | Je descends au prochain arrêt.
Press the button to stop. | Appuie sur le bouton pour demander l'arrêt.
Let's take a taxi. | Prenons un taxi.
Please take me to this address. | Conduisez-moi à cette adresse, s'il vous plaît.
Stop here, please. | Arrêtez-vous ici, s'il vous plaît.
How much do I owe you? | Je vous dois combien ?
Keep the change. | Gardez la monnaie.
I take the MRT to work. | Je prends le métro pour aller au travail.
I walk to school. | Je vais à l'école à pied.
I ride my bike every day. | Je fais du vélo tous les jours.
I drive to work. | Je vais au travail en voiture.
Can you give me a ride? | Tu peux me déposer ?
I'll pick you up at seven. | Je passe te prendre à sept heures.
I'll drop you off at the station. | Je te dépose à la gare.
Fasten your seat belt. | Attache ta ceinture.
Wear your helmet. | Mets ton casque.
Slow down! | Ralentis !
Be careful on the road. | Sois prudent sur la route.
The traffic is bad today. | La circulation est mauvaise aujourd'hui.
We're stuck in traffic. | On est coincés dans les bouchons.
There's a traffic jam. | Il y a un embouteillage.
I'm running late. | Je suis en retard.
I'm on my way. | J'arrive, je suis en route.
I'll be there in ten minutes. | J'arrive dans dix minutes.
Where can I park? | Où est-ce que je peux me garer ?
Is there a parking lot near here? | Il y a un parking près d'ici ?
You can't park here. | Vous ne pouvez pas vous garer ici.
We need gas. | On a besoin d'essence.
Let's stop at the gas station. | Arrêtons-nous à la station-service.
The train is coming. | Le train arrive.
Stand behind the yellow line. | Restez derrière la ligne jaune.
Let people get off first. | Laissez descendre les gens d'abord.
Is this seat taken? | Cette place est prise ?
Please give this seat to someone who needs it. | Merci de céder cette place à quelqu'un qui en a besoin.
Hold on to the handrail. | Tenez la rampe.
Which platform is it? | C'est quel quai ?
The train leaves at nine. | Le train part à neuf heures.
It takes about an hour. | Ça prend environ une heure.
Change trains at Taipei Main Station. | Changez de train à la gare centrale de Taipei.
Where's the exit? | Où est la sortie ?
Take Exit 2. | Prenez la sortie 2.
I'm lost. | Je suis perdu.
Can you show me on the map? | Vous pouvez me montrer sur le plan ?
Is there a bus to the zoo? | Il y a un bus pour le zoo ?
The bus is full. | Le bus est plein.
Get on the bus. | Monte dans le bus.
Get off the train. | Descends du train.
I use my card for the bus. | J'utilise ma carte pour le bus.
Tap your card here. | Passez votre carte ici.
My card doesn't have enough money. | Il n'y a pas assez d'argent sur ma carte.
Where can I top up my card? | Où est-ce que je peux recharger ma carte ?
Let's walk. It's not far. | Allons-y à pied. Ce n'est pas loin.
It's a five-minute walk. | C'est à cinq minutes à pied.
The road is closed. | La route est fermée.
Look both ways. | Regarde des deux côtés.
Don't cross on a red light. | Ne traverse pas au feu rouge.
Use the crosswalk. | Prends le passage piéton.
The bridge is over there. | Le pont est là-bas.
I'm afraid of flying. | J'ai peur de l'avion.
I like taking the train. | J'aime prendre le train.
The train is fast. | Le train est rapide.
The bus is cheap. | Le bus n'est pas cher.
Taxis are expensive here. | Les taxis sont chers ici.
I rent a scooter on weekends. | Je loue un scooter le week-end.
Can I bring my bike on the train? | Je peux prendre mon vélo dans le train ?
Have a safe trip! | Bon voyage, et sois prudent !
Text me when you get home. | Envoie-moi un message quand tu es rentré.
Let's meet at the station. | Retrouvons-nous à la gare.
Which way is north? | Le nord, c'est de quel côté ?
Go up the stairs. | Monte l'escalier.
The escalator is broken. | L'escalator est en panne.
Where's the ticket machine? | Où est le distributeur de billets ?
Where's the taxi stand? | Où est la station de taxis ?
Call me a taxi, please. | Appelez-moi un taxi, s'il vous plaît.
Is this the right train? | C'est bien le bon train ?
`
});

// ---------- 中級 Intermediate ----------
addFrench("transport", {
  words: `
commute | le trajet domicile-travail | Mon trajet domicile-travail prend environ quarante minutes.
transfer | la correspondance ; changer | Vous devez changer à la gare centrale de Taipei.
delay | le retard | Il y a un retard à cause des fortes pluies.
rush hour | l'heure de pointe | Le métro est bondé aux heures de pointe.
fare | le prix du billet ; le tarif | Le billet coûte trente dollars.
traffic jam | l'embouteillage ; le bouchon | Désolé pour le retard. J'étais coincé dans un embouteillage.
platform | le quai | Le train part du quai trois.
departure | le départ | Le départ est à 8 h 15.
arrival | l'arrivée | Regarde le tableau des arrivées pour les retards.
one-way | l'aller simple | Un aller simple pour Tainan, s'il vous plaît.
round-trip | l'aller-retour | Un aller-retour coûte moins cher.
timetable | les horaires | Consulte les horaires du bus en ligne.
passenger | le passager ; le voyageur | Tous les passagers doivent attacher leur ceinture.
luggage | les bagages | Combien de bagages je peux emporter ?
gate | la porte d'embarquement | Notre vol part de la porte douze.
boarding pass | la carte d'embarquement | Montrez votre carte d'embarquement, s'il vous plaît.
check in | s'enregistrer | Vous pouvez vous enregistrer en ligne.
aisle seat | la place côté couloir | Je préférerais une place côté couloir.
route | l'itinéraire ; le trajet | Quel est l'itinéraire le plus rapide pour l'aéroport ?
detour | le détour ; la déviation | Nous avons dû faire un détour à cause des travaux.
intersection | le carrefour | Tournez à gauche au prochain carrefour.
crosswalk | le passage piéton | Prends toujours le passage piéton.
traffic light | le feu de circulation | Arrête-toi au feu.
speed limit | la limitation de vitesse | Ici, la vitesse est limitée à cinquante.
parking lot | le parking | Le parking est complet.
gas station | la station-service | On doit s'arrêter à une station-service.
license | le permis de conduire | Je viens d'avoir mon permis de conduire.
accident | l'accident | Il y a eu un accident sur l'autoroute.
fine | l'amende ; la contravention | J'ai eu une amende pour stationnement interdit.
pedestrian | le piéton | Les conducteurs doivent céder le passage aux piétons.
carpool | le covoiturage | Nous faisons du covoiturage pour économiser.
high-speed rail | le train à grande vitesse | Le train à grande vitesse vous emmène à Kaohsiung en quatre-vingt-dix minutes.
shuttle | la navette | Prenez la navette gratuite pour l'hôtel.
reserved seat | la place réservée | J'ai réservé une place dans le train.
non-reserved | non réservé | Les voitures sans réservation sont à l'avant.
express | le train express ; le direct | Prends le direct : il ne s'arrête pas aux petites gares.
local train | le train régional ; l'omnibus | L'omnibus s'arrête à toutes les gares.
terminal | le terminal | Notre vol part du terminal 2.
security check | le contrôle de sécurité | Le contrôle de sécurité a pris trente minutes.
carry-on | le bagage cabine | Vous avez droit à un bagage cabine.
baggage claim | la récupération des bagages | Retrouve-moi à la récupération des bagages.
window seat | la place côté hublot ; côté fenêtre | Je demande toujours une place côté hublot.
canceled | annulé | Notre vol a été annulé.
on time | à l'heure | Le train est arrivé à l'heure.
breakdown | la panne | Il y a eu une panne sur la ligne bleue.
flat tire | le pneu crevé ; la crevaison | J'ai crevé sur l'autoroute.
tow | remorquer ; mettre en fourrière | Ma voiture a été mise en fourrière pour stationnement interdit.
parking ticket | la contravention de stationnement ; le PV | J'ai eu un PV dans le centre-ville.
navigation | la navigation ; le GPS | Utilise l'appli de navigation pour trouver le chemin.
GPS | le GPS | Le GPS nous a envoyés dans la mauvaise direction.
U-turn | le demi-tour | Vous ne pouvez pas faire demi-tour ici.
lane | la voie | Reste sur la voie de droite.
overtake | doubler ; dépasser | Ne double pas dans un virage.
honk | klaxonner | Ne klaxonne pas devant l'hôpital.
roundabout | le rond-point | Prenez la deuxième sortie au rond-point.
highway | l'autoroute | L'autoroute est chargée pendant les vacances.
tunnel | le tunnel | Le tunnel de Hsuehshan est très long.
ferry | le ferry | Nous avons pris le ferry pour Penghu.
cruise | la croisière | Ils ont fait une croisière à Okinawa.
rental car | la voiture de location | Nous avons récupéré une voiture de location à l'aéroport.
test drive | l'essai ; l'essai routier | Je peux faire un essai ?
transit card | la carte de transport | Passe ta carte de transport au portique.
top up | recharger | Je dois recharger ma carte.
exit | la sortie | Prends la sortie 3 pour le marché de nuit.
entrance | l'entrée | L'entrée est à gauche.
handrail | la main courante ; la rampe | Tiens la main courante dans l'escalator.
refuel | faire le plein | On doit faire le plein avant l'autoroute.
diesel | le diesel ; le gazole | Les camions roulent généralement au diesel.
gasoline | l'essence | Le prix de l'essence a encore augmenté.
mileage | le kilométrage | La voiture d'occasion a un faible kilométrage.
driving test | l'examen du permis | J'ai eu mon examen du permis du premier coup.
learner driver | l'apprenti conducteur | Sois patient avec l'apprenti conducteur.
rear-view mirror | le rétroviseur | Regarde dans ton rétroviseur avant de tourner.
windshield | le pare-brise | Un caillou a fissuré le pare-brise.
headlights | les phares | Allume tes phares dans le tunnel.
turn signal | le clignotant | Mets ton clignotant avant de changer de voie.
hazard lights | les feux de détresse | Il a mis ses feux de détresse et s'est rangé sur le côté.
spare tire | la roue de secours | Il y a une roue de secours dans le coffre ?
jumper cables | les câbles de démarrage | Tu as des câbles de démarrage ?
tow truck | la dépanneuse | Nous avons dû appeler une dépanneuse.
speeding | l'excès de vitesse | Il a eu une amende pour excès de vitesse.
speed camera | le radar | Il y a un radar sur cette route.
breathalyzer | l'éthylotest ; l'alcootest | La police lui a demandé de souffler dans l'éthylotest.
parking meter | le parcmètre | Mets des pièces dans le parcmètre.
valet | le voiturier | L'hôtel propose un service de voiturier.
monthly pass | l'abonnement mensuel | Un abonnement mensuel fait économiser si tu fais le trajet tous les jours.
turnstile | le portique ; le tourniquet | Passe ta carte au portique.
conductor | le contrôleur | Le contrôleur a vérifié nos billets.
sleeper train | le train de nuit ; le train-couchettes | Nous avons pris un train de nuit pour Hanoï.
dining car | la voiture-restaurant | La voiture-restaurant sert des repas chauds.
luggage rack | le porte-bagages | Mets ton sac sur le porte-bagages.
standing room | les places debout | Il ne restait que des places debout.
priority seat | la place prioritaire | Merci de céder la place prioritaire à une personne âgée.
bike-sharing | le vélo en libre-service | J'utilise le vélo en libre-service pour aller à la gare.
dock | la borne ; la station | Rends le vélo à n'importe quelle borne.
two-stage left turn | le virage à gauche en deux temps | Ici, les scooters doivent tourner à gauche en deux temps.
motorway | l'autoroute | L'autoroute a été fermée après l'accident.
overpass | la passerelle ; le pont routier | Prends la passerelle pour traverser la route.
underpass | le passage souterrain | Le passage souterrain est inondé quand il pleut.
junction | le carrefour ; l'embranchement | Tournez à droite au prochain carrefour.
in the same boat | dans le même bateau | Nous sommes tous dans le même bateau.
hit the road | prendre la route | Il est tard. Prenons la route.
miss the boat | rater le coche | Achète les billets maintenant, sinon tu vas rater le coche.
the end of the line | le terminus ; la fin du parcours | Pour moi, c'est le terminus.
in the driver's seat | aux commandes | Maintenant, c'est toi qui es aux commandes.
backseat driver | le passager qui donne des conseils de conduite | Arrête de me dire comment conduire !
on the right track | sur la bonne voie | Tu es sur la bonne voie.
off track | hors sujet ; dévier | Ne nous égarons pas.
fast lane | la vie à cent à l'heure | Il adore la vie à cent à l'heure.
get the show on the road | se mettre en route ; démarrer | Allez, on se met en route.
run out of gas | tomber en panne d'essence ; être à plat | Je suis toujours à plat après le travail.
take a back seat | passer au second plan | Mes loisirs passent au second plan après le travail.
jump on the bandwagon | suivre le mouvement ; prendre le train en marche | Ne suis pas simplement le mouvement.
a long haul | un travail de longue haleine | Apprendre l'anglais, c'est un travail de longue haleine.
`,
  phrases: `
Which platform does the train leave from? | Le train part de quel quai ?
I missed my stop. | J'ai raté mon arrêt.
Could you give me a ride? | Tu pourrais me déposer ?
What's the quickest way to get downtown? | Quel est le moyen le plus rapide d'aller au centre-ville ?
Is it quicker to take the bus or the MRT? | C'est plus rapide en bus ou en métro ?
You'll need to transfer at the next station. | Vous devrez changer à la prochaine station.
The trains run every five minutes during rush hour. | Aux heures de pointe, il y a un train toutes les cinq minutes.
The last train leaves at midnight. | Le dernier train part à minuit.
I missed my connection. | J'ai raté ma correspondance.
The train has been delayed due to a signal problem. | Le train est retardé à cause d'un problème de signalisation.
Service is suspended between these two stations. | Le trafic est interrompu entre ces deux stations.
There's a shuttle bus replacing the train. | Un bus de substitution remplace le train.
Do I need to book a seat in advance? | Je dois réserver une place à l'avance ?
The high-speed rail is sold out for Friday. | Le train à grande vitesse est complet pour vendredi.
Is there a discount for students? | Il y a une réduction pour les étudiants ?
Can I change my ticket to a later train? | Je peux échanger mon billet pour un train plus tard ?
I'd like a window seat, please. | Je voudrais une place côté fenêtre, s'il vous plaît.
Is there a non-reserved car? | Il y a une voiture sans réservation ?
My commute takes about an hour each way. | Mon trajet prend environ une heure dans chaque sens.
I spend way too much time commuting. | Je passe beaucoup trop de temps dans les transports.
I try to avoid rush hour. | J'essaie d'éviter les heures de pointe.
The MRT is packed in the morning. | Le métro est bondé le matin.
I usually listen to podcasts on my commute. | J'écoute généralement des podcasts pendant mon trajet.
I got a parking ticket. | J'ai eu un PV.
I got pulled over for speeding. | Je me suis fait arrêter pour excès de vitesse.
The speed limit here is 50. | Ici, la vitesse est limitée à 50.
Watch out for speed cameras. | Attention aux radars.
Could you slow down a bit? | Tu pourrais ralentir un peu ?
Let's take the highway. | Prenons l'autoroute.
There's a toll on this road. | Cette route est à péage.
The GPS says to take the next exit. | Le GPS dit de prendre la prochaine sortie.
I think we took a wrong turn. | Je crois qu'on s'est trompés de route.
We should have turned left back there. | On aurait dû tourner à gauche là-bas.
Let's pull over and check the map. | Arrêtons-nous sur le bas-côté pour regarder la carte.
I'm not used to driving on the left. | Je n'ai pas l'habitude de conduire à gauche.
Do I need an international driving permit? | J'ai besoin d'un permis de conduire international ?
How much does it cost to rent a car for a week? | Combien coûte la location d'une voiture pour une semaine ?
Does the price include insurance? | L'assurance est comprise dans le prix ?
Return the car with a full tank. | Rendez la voiture avec le plein.
There's a scratch on the bumper already. | Il y a déjà une rayure sur le pare-chocs.
The car broke down on the way. | La voiture est tombée en panne en route.
I have a flat tire. | J'ai un pneu crevé.
The battery is dead. Can you give me a jump? | La batterie est à plat. Tu peux m'aider à démarrer ?
We need to call roadside assistance. | Il faut appeler l'assistance routière.
There was an accident on the freeway. | Il y a eu un accident sur l'autoroute.
Nobody was hurt, luckily. | Heureusement, personne n'a été blessé.
I'll call the police and report it. | Je vais appeler la police pour le signaler.
Let's exchange insurance details. | Échangeons nos informations d'assurance.
Scooters are everywhere in Taiwan. | À Taïwan, il y a des scooters partout.
Riding a scooter in the rain is miserable. | Rouler en scooter sous la pluie, c'est l'horreur.
Make a two-stage left turn here. | Ici, tourne à gauche en deux temps.
Bike lanes make cycling much safer. | Les pistes cyclables rendent le vélo bien plus sûr.
I use the public bikes to get to the station. | J'utilise les vélos en libre-service pour aller à la gare.
Where can I return the bike? | Où est-ce que je peux rendre le vélo ?
The dock is full, so I can't return my bike. | La station est pleine, donc je ne peux pas rendre mon vélo.
Ride-sharing apps are really convenient. | Les applis de VTC sont vraiment pratiques.
The driver is two minutes away. | Le chauffeur arrive dans deux minutes.
The fare went up because of high demand. | Le prix a augmenté à cause de la forte demande.
Could you turn on the meter, please? | Vous pouvez mettre le compteur, s'il vous plaît ?
Is there an extra charge for luggage? | Il y a un supplément pour les bagages ?
The taxi driver took the long way around. | Le chauffeur de taxi a pris le chemin le plus long.
How long does it take by car? | Ça prend combien de temps en voiture ?
It's about a forty-minute drive. | C'est à environ quarante minutes en voiture.
It depends on the traffic. | Ça dépend de la circulation.
Traffic is bumper to bumper. | Les voitures roulent pare-chocs contre pare-chocs.
There are roadworks on the main road. | Il y a des travaux sur la route principale.
Take a detour through the side streets. | Fais un détour par les petites rues.
The road is closed for the marathon. | La route est fermée pour le marathon.
Parking is a nightmare downtown. | Se garer en centre-ville, c'est un cauchemar.
It's cheaper to park on the outskirts and take the train. | C'est moins cher de se garer en périphérie et de prendre le train.
The ferry runs every hour. | Le ferry part toutes les heures.
Is the ferry affected by the typhoon? | Le ferry est perturbé par le typhon ?
I get carsick on winding roads. | J'ai le mal des transports sur les routes sinueuses.
I get seasick on boats. | J'ai le mal de mer en bateau.
Let's take the scenic route. | Prenons la route panoramique.
We can stop for a break halfway. | On peut faire une pause à mi-chemin.
Is there a rest stop ahead? | Il y a une aire de repos plus loin ?
Let's share the driving. | Relayons-nous au volant.
You're driving too close to the car in front. | Tu colles trop la voiture de devant.
Don't use your phone while driving. | N'utilise pas ton téléphone en conduisant.
Drinking and driving is never okay. | Conduire après avoir bu n'est jamais acceptable.
Pedestrians have the right of way. | Les piétons ont la priorité.
The traffic lights are out at this junction. | Les feux sont en panne à ce carrefour.
The bus driver didn't stop. | Le chauffeur du bus ne s'est pas arrêté.
You have to wave to stop the bus here. | Ici, il faut faire signe pour arrêter le bus.
The bus route has changed. | L'itinéraire du bus a changé.
Check the app for live arrival times. | Regarde l'appli pour les horaires en temps réel.
The next train is in three minutes. | Le prochain train arrive dans trois minutes.
I'll get a monthly pass. | Je vais prendre un abonnement mensuel.
The monthly pass saves me a lot of money. | L'abonnement mensuel me fait économiser beaucoup d'argent.
Please mind the gap. | Attention à l'espace entre le train et le quai.
Give up your seat for elderly passengers. | Cède ta place aux passagers âgés.
No eating or drinking on the MRT. | Il est interdit de manger et de boire dans le métro.
I left my umbrella on the train. | J'ai oublié mon parapluie dans le train.
Where's the lost and found? | Où sont les objets trouvés ?
I'd like to report a lost wallet. | Je voudrais signaler la perte d'un portefeuille.
We're going on a road trip next week. | On part en road trip la semaine prochaine.
Public transport here is excellent. | Ici, les transports en commun sont excellents.
I don't really need a car in the city. | En ville, je n'ai pas vraiment besoin de voiture.
Which exit is closest to the museum? | Quelle sortie est la plus proche du musée ?
`
});

// ---------- 高級 Advanced ----------
addFrench("transport", {
  words: `
infrastructure | les infrastructures | Le gouvernement investit dans les infrastructures ferroviaires.
congestion | la congestion ; les embouteillages | Un péage urbain pourrait réduire la circulation en centre-ville.
emissions | les émissions | Les bus électriques réduisent les émissions de carbone.
autonomous | autonome | Les véhicules autonomes sont encore en phase de test.
itinerary | l'itinéraire ; le programme du voyage | Je t'envoie notre programme de voyage.
layover | l'escale | Nous avons une escale de cinq heures à Tokyo.
mobility | la mobilité | Les vélos partagés améliorent la mobilité urbaine.
commuter | le navetteur ; l'usager | Des milliers d'usagers empruntent cette ligne chaque jour.
logistics | la logistique | L'entreprise gère la logistique pour des boutiques en ligne.
freight | le fret | La majorité du fret est encore transportée par mer.
ridesharing | les VTC ; le covoiturage | Les applis de VTC ont transformé le secteur des taxis.
toll | le péage | Il y a un péage électronique sur l'autoroute.
bottleneck | le goulot d'étranglement | Le pont est un gros goulot d'étranglement aux heures de pointe.
gridlock | la paralysie du trafic | Après le défilé, la ville était totalement paralysée.
carbon footprint | l'empreinte carbone | Prendre l'avion augmente ton empreinte carbone.
electric vehicle | le véhicule électrique | Les ventes de véhicules électriques augmentent rapidement.
charging station | la borne de recharge | Il y a une borne de recharge dans le parking.
subsidy | la subvention | Le gouvernement offre une subvention pour les scooters électriques.
jet lag | le décalage horaire | Je me remets encore du décalage horaire.
turbulence | les turbulences | Attachez votre ceinture. Nous allons traverser des turbulences.
customs | la douane | Passer la douane a pris une heure.
red-eye flight | le vol de nuit | J'ai pris un vol de nuit pour gagner une journée.
overbooked | en surréservation | Le vol était en surréservation, alors ils ont proposé des bons.
stranded | bloqué | Des centaines de voyageurs ont été bloqués par le typhon.
punctual | ponctuel | Les trains japonais sont réputés pour leur ponctualité.
walkability | la marchabilité | La marchabilité du quartier attire les jeunes familles.
bike lane | la piste cyclable | La ville a ajouté des pistes cyclables protégées dans le centre.
urban planning | l'urbanisme | Un bon urbanisme réduit le besoin de voiture.
road rage | la rage au volant | Les incidents de rage au volant sont en hausse.
fuel efficiency | la sobriété en carburant | Les hybrides consomment moins de carburant.
scenic route | la route panoramique | Prenons la route panoramique le long de la côte.
last mile | le dernier kilomètre | Les trottinettes partagées résolvent le problème du dernier kilomètre.
expressway | la voie express | La voie express était fermée pour travaux.
public transit | les transports en commun | Les transports en commun devraient être abordables pour tous.
transit-oriented | orienté vers les transports en commun | Un aménagement orienté vers les transports en commun réduit l'usage de la voiture.
modal shift | le report modal | Les politiques encouragent le report modal de la voiture vers le train.
micromobility | la micromobilité | La micromobilité comprend les vélos électriques et les trottinettes.
e-scooter | la trottinette électrique | Les trottinettes électriques sont interdites sur les trottoirs.
ride-hailing | le VTC | Les chauffeurs de VTC veulent une meilleure protection.
self-driving | autonome ; sans conducteur | Des taxis sans conducteur sont testés dans certaines villes.
hydrogen | l'hydrogène | Les bus à hydrogène ne rejettent que de l'eau.
battery swap | l'échange de batterie | Gogoro a été pionnier des stations d'échange de batteries.
range anxiety | l'angoisse de l'autonomie | L'angoisse de l'autonomie freine certains acheteurs de voitures électriques.
car-free | sans voiture | Le centre-ville est sans voiture le dimanche.
pedestrianize | piétonniser | Ils prévoient de piétonniser la vieille rue.
traffic calming | l'apaisement de la circulation | Les dos-d'âne sont une mesure d'apaisement de la circulation.
road safety | la sécurité routière | Les campagnes de sécurité routière ciblent les jeunes conducteurs.
fatality | le décès ; le mort | L'accident a fait un mort.
hit-and-run | le délit de fuite | La police enquête sur un délit de fuite.
DUI | la conduite en état d'ivresse | Il a perdu son permis pour conduite en état d'ivresse.
ridership | la fréquentation | La fréquentation du métro a atteint un record.
capacity | la capacité | La ligne fonctionne à pleine capacité.
frequency | la fréquence | Une fréquence plus élevée, c'est moins d'attente.
headway | l'intervalle | Aux heures de pointe, les trains passent à trois minutes d'intervalle.
interchange | le pôle d'échanges ; l'échangeur | La gare centrale de Taipei est un grand pôle d'échanges.
hub | la plaque tournante ; le hub | Singapour est une plaque tournante aérienne régionale.
aviation | l'aviation ; le transport aérien | Le transport aérien représente une part des émissions mondiales.
low-cost carrier | la compagnie low-cost | Les compagnies low-cost font payer les bagages en plus.
connecting flight | le vol de correspondance | J'ai raté mon vol de correspondance.
shipping | le transport maritime ; l'expédition | Les frais d'expédition ont doublé pendant la pandémie.
container | le conteneur | Kaohsiung est un grand port à conteneurs.
port | le port | Le port traite des millions de conteneurs par an.
rail network | le réseau ferroviaire | Le Japon a un vaste réseau ferroviaire.
maglev | le train à sustentation magnétique | Le train à sustentation magnétique de Shanghai atteint 430 km/h.
telecommuting | le télétravail | Le télétravail réduit les bouchons aux heures de pointe.
accessibility | l'accessibilité | Les gares doivent améliorer leur accessibilité pour les fauteuils roulants.
congestion charge | le péage urbain | La ville a instauré un péage urbain dans le centre.
induced demand | la demande induite | Élargir les routes crée une demande induite.
light rail | le tramway ; le métro léger | Le tramway relie le port à la ville.
bus rapid transit | le bus à haut niveau de service | Le bus à haut niveau de service utilise des voies réservées.
platform screen doors | les portes palières | Les portes palières empêchent les chutes sur les voies.
derailment | le déraillement | Le déraillement a été causé par un glissement de terrain.
collision | la collision | La collision a bloqué deux voies.
level crossing | le passage à niveau | Ne t'arrête jamais sur un passage à niveau.
signal failure | la panne de signalisation | Une panne de signalisation a retardé tous les trains.
contingency plan | le plan d'urgence | La compagnie ferroviaire a un plan d'urgence en cas de typhon.
rolling stock | le matériel roulant | L'opérateur remplace son vieux matériel roulant.
electrification | l'électrification | L'électrification des voies ferrées réduit les émissions.
intermodal | intermodal | Le fret intermodal combine le rail et la route.
supply chain | la chaîne d'approvisionnement | Les retards au port ont perturbé la chaîne d'approvisionnement.
warehouse | l'entrepôt | Les marchandises sont stockées dans un entrepôt près du port.
fleet | la flotte | L'entreprise électrifie sa flotte.
dispatch | la régulation ; envoyer | La régulation a envoyé l'ambulance la plus proche.
car ownership | la possession d'une voiture | La possession d'une voiture recule chez les jeunes.
car sharing | l'autopartage | L'autopartage réduit le besoin de posséder une voiture.
parking minimum | le nombre minimal de places de stationnement | Le nombre minimal de places de stationnement rend le logement plus cher.
road pricing | la tarification routière | La tarification routière fait payer les conducteurs selon la distance.
fuel tax | la taxe sur les carburants | La taxe sur les carburants finance l'entretien des routes.
emission standard | la norme d'émission | Les vieux scooters ne respectent pas la norme d'émission.
hybrid | la voiture hybride | Ma nouvelle voiture est une hybride.
plug-in | rechargeable | Une hybride rechargeable peut rouler à l'électricité sur de courts trajets.
regenerative braking | le freinage régénératif | Le freinage régénératif recharge la batterie.
lidar | le lidar | Les voitures autonomes utilisent le lidar pour cartographier leur environnement.
driver assistance | l'aide à la conduite | Les systèmes d'aide à la conduite peuvent éviter des accidents.
liability | la responsabilité | La responsabilité en cas d'accident de voiture autonome reste floue.
fare cap | le plafonnement tarifaire | Le plafonnement tarifaire limite ce que vous payez chaque jour.
concession fare | le tarif réduit | Les étudiants et les seniors paient un tarif réduit.
paratransit | le transport adapté | Le transport adapté sert les personnes qui ne peuvent pas prendre les bus ordinaires.
wayfinding | la signalétique | Une bonne signalétique rend les gares faciles à parcourir.
noise barrier | le mur antibruit | Un mur antibruit longe l'autoroute.
fall off the wagon | rechuter ; replonger | Essaie de ne pas rechuter après avoir arrêté de fumer.
asleep at the wheel | endormi aux commandes ; négligent | Le directeur s'est endormi aux commandes.
put the brakes on | freiner ; mettre un frein à | Le gouvernement a mis un frein au projet.
step on it | appuyer sur le champignon | Appuie sur le champignon, on est en retard !
drive a hard bargain | être dur en affaires | Tu es dur en affaires.
the wheels came off | tout a déraillé | En seconde mi-temps, tout a déraillé.
a fork in the road | la croisée des chemins | Je suis à la croisée des chemins.
burn your bridges | couper les ponts | Ne coupe pas les ponts avec ton ancien patron.
cross that bridge when we come to it | chaque chose en son temps | Chaque chose en son temps : on verra bien le moment venu.
off the rails | dérailler ; partir en vrille | Le projet a déraillé.
in the pipeline | en préparation ; dans les tuyaux | Une nouvelle ligne de métro est dans les tuyaux.
pedal to the metal | le pied au plancher | C'est pied au plancher jusqu'à la date limite.
gravy train | la planque ; la vache à lait | Ce boulot, c'était une vraie planque.
light at the end of the tunnel | le bout du tunnel | On voit le bout du tunnel.
all aboard | en voiture | En voiture ! Le train va partir.
`,
  phrases: `
Public transit should be the backbone of urban mobility. | Les transports en commun devraient être la colonne vertébrale de la mobilité urbaine.
Our flight was rerouted due to bad weather. | Notre vol a été dérouté à cause du mauvais temps.
It's not worth the hassle of driving downtown. | Ça ne vaut pas la peine de prendre la voiture pour aller en centre-ville.
Public transport is the backbone of any livable city. | Les transports publics sont la colonne vertébrale de toute ville agréable à vivre.
Investment in rail has lagged behind road building. | L'investissement dans le rail a pris du retard sur la construction de routes.
The new line will cut journey times in half. | La nouvelle ligne réduira de moitié les temps de trajet.
The project is years behind schedule and over budget. | Le projet a des années de retard et dépasse son budget.
Congestion costs the economy billions every year. | Les embouteillages coûtent des milliards à l'économie chaque année.
A congestion charge could reduce traffic in the city center. | Un péage urbain pourrait réduire la circulation en centre-ville.
Building more roads tends to generate more traffic. | Construire plus de routes a tendance à générer plus de trafic.
This phenomenon is known as induced demand. | Ce phénomène s'appelle la demande induite.
Cities are reclaiming streets for pedestrians. | Les villes rendent les rues aux piétons.
Car-free zones have revitalized the old town. | Les zones sans voitures ont redonné vie à la vieille ville.
Cycling infrastructure is still patchy at best. | Les aménagements cyclables restent, au mieux, inégaux.
Last-mile connectivity remains a challenge. | La desserte du dernier kilomètre reste un défi.
Micromobility options like e-scooters are reshaping urban travel. | Les solutions de micromobilité comme les trottinettes électriques transforment les déplacements urbains.
E-scooters cluttering the sidewalk have become a nuisance. | Les trottinettes électriques qui encombrent les trottoirs sont devenues une nuisance.
Electric vehicles are only as clean as the grid that charges them. | Une voiture électrique n'est propre que si le réseau qui la recharge l'est.
Charging infrastructure needs to expand rapidly. | Le réseau de bornes de recharge doit se développer rapidement.
Range anxiety is still putting people off electric cars. | L'angoisse de l'autonomie dissuade encore les gens d'acheter une voiture électrique.
Battery costs have fallen dramatically. | Le coût des batteries a chuté de façon spectaculaire.
Subsidies have accelerated the shift to electric scooters. | Les subventions ont accéléré le passage aux scooters électriques.
Self-driving cars still struggle in unpredictable conditions. | Les voitures autonomes ont encore du mal dans des conditions imprévisibles.
Who is liable when an autonomous vehicle crashes? | Qui est responsable quand un véhicule autonome a un accident ?
Road safety here leaves a lot to be desired. | Ici, la sécurité routière laisse beaucoup à désirer.
The streets were designed for cars, not people. | Les rues ont été conçues pour les voitures, pas pour les gens.
Pedestrian deaths have prompted calls for reform. | Les décès de piétons ont suscité des appels à la réforme.
Traffic calming measures slow cars down in residential areas. | Les mesures d'apaisement de la circulation font ralentir les voitures dans les quartiers résidentiels.
Stricter enforcement has reduced drunk driving. | Des contrôles plus stricts ont fait reculer l'alcool au volant.
Penalties for traffic violations have been raised. | Les sanctions pour infractions au code de la route ont été alourdies.
The license test is notoriously easy here. | Ici, l'examen du permis est réputé facile.
Older drivers may need to be retested. | Les conducteurs âgés devraient peut-être repasser un examen.
Rural areas are poorly served by public transport. | Les zones rurales sont mal desservies par les transports en commun.
Many villages rely on a single bus a day. | Beaucoup de villages dépendent d'un seul bus par jour.
Without a car, you're cut off from basic services. | Sans voiture, on est coupé des services de base.
Fare subsidies make public transport accessible to everyone. | Les subventions tarifaires rendent les transports publics accessibles à tous.
Free public transport has been tried in several cities. | La gratuité des transports a été testée dans plusieurs villes.
The fare increase sparked public anger. | La hausse des tarifs a provoqué la colère du public.
Ridership has yet to recover from the pandemic. | La fréquentation ne s'est pas encore remise de la pandémie.
Remote work has reshaped commuting patterns. | Le télétravail a modifié les habitudes de déplacement domicile-travail.
The high-speed rail has effectively shrunk the island. | Le train à grande vitesse a en quelque sorte rétréci l'île.
Day trips across the country are now feasible. | Faire l'aller-retour à travers le pays dans la journée est désormais possible.
Short-haul flights are being replaced by trains in Europe. | En Europe, les vols court-courriers sont remplacés par le train.
Night trains are making a comeback. | Les trains de nuit font leur retour.
Aviation is notoriously hard to decarbonize. | Le transport aérien est notoirement difficile à décarboner.
Shipping accounts for a significant share of global emissions. | Le transport maritime représente une part importante des émissions mondiales.
Freight is shifting from road to rail. | Le fret passe de la route au rail.
Logistics bottlenecks disrupted global supply chains. | Les goulets d'étranglement logistiques ont perturbé les chaînes d'approvisionnement mondiales.
Port congestion caused weeks of delays. | La congestion des ports a causé des semaines de retard.
Delivery vans now make up a large share of city traffic. | Les camionnettes de livraison représentent désormais une grande part du trafic urbain.
Toll roads are funded by the people who use them. | Les routes à péage sont financées par ceux qui les empruntent.
Road pricing is fairer than a flat fuel tax. | La tarification routière est plus juste qu'une taxe uniforme sur les carburants.
Fuel prices have a ripple effect on the whole economy. | Le prix des carburants a un effet domino sur toute l'économie.
The trains are punctual to the minute. | Les trains sont ponctuels à la minute près.
Delays are compensated with a partial refund. | Les retards sont compensés par un remboursement partiel.
The network is remarkably well integrated. | Le réseau est remarquablement bien intégré.
A single card works on buses, trains and ferries. | Une seule carte fonctionne dans les bus, les trains et les ferries.
Contactless payment has made ticketing seamless. | Le paiement sans contact a rendu la billetterie fluide.
Real-time data has transformed how people plan trips. | Les données en temps réel ont transformé la façon dont on prépare ses trajets.
Navigation apps sometimes route traffic through quiet neighborhoods. | Les applis de navigation font parfois passer la circulation par des quartiers tranquilles.
Transit-oriented development concentrates housing near stations. | L'urbanisme orienté vers les transports concentre les logements près des gares.
Property values rise near new MRT stations. | Les prix de l'immobilier augmentent près des nouvelles stations de métro.
Accessibility upgrades are long overdue at older stations. | Les travaux d'accessibilité dans les vieilles gares n'ont que trop tardé.
Not every station has an elevator, which excludes wheelchair users. | Toutes les stations n'ont pas d'ascenseur, ce qui exclut les personnes en fauteuil roulant.
Women-only carriages are controversial. | Les voitures réservées aux femmes font polémique.
Platform screen doors have improved safety. | Les portes palières ont amélioré la sécurité.
The derailment raised serious questions about maintenance. | Le déraillement a soulevé de sérieuses questions sur l'entretien.
An investigation is under way into the cause of the crash. | Une enquête est en cours sur la cause de l'accident.
Driver fatigue is a factor in many accidents. | La fatigue au volant est un facteur dans de nombreux accidents.
Bus drivers often work punishing hours. | Les chauffeurs de bus ont souvent des horaires épuisants.
The transport workers' union has threatened to strike. | Le syndicat des transports a menacé de faire grève.
The strike brought the city to a standstill. | La grève a paralysé la ville.
Commuters were left stranded for hours. | Les usagers sont restés bloqués pendant des heures.
Contingency plans were put in place to minimize disruption. | Des plans d'urgence ont été mis en place pour limiter les perturbations.
The typhoon grounded all flights and suspended rail services. | Le typhon a cloué tous les avions au sol et interrompu le trafic ferroviaire.
The bridge was closed as a precaution. | Le pont a été fermé par précaution.
Aging infrastructure needs urgent investment. | Les infrastructures vieillissantes ont besoin d'investissements urgents.
Maintenance is less glamorous than new projects, but more important. | L'entretien est moins prestigieux que les nouveaux projets, mais plus important.
Megaprojects are prone to cost overruns. | Les grands projets sont sujets aux dépassements de budget.
The route was chosen for political rather than practical reasons. | Le tracé a été choisi pour des raisons politiques plutôt que pratiques.
Local opposition delayed the project for a decade. | L'opposition locale a retardé le projet de dix ans.
Environmental impact assessments are often rushed. | Les études d'impact environnemental sont souvent bâclées.
Tunneling under the city is enormously expensive. | Creuser des tunnels sous la ville coûte extrêmement cher.
Elevated lines are cheaper but blight the streets below. | Les lignes aériennes coûtent moins cher, mais défigurent les rues en dessous.
Bus rapid transit offers metro-like service at a fraction of the cost. | Le bus à haut niveau de service offre un service proche du métro pour une fraction du coût.
Dedicated bus lanes are only effective if they're enforced. | Les voies réservées aux bus ne sont efficaces que si elles sont respectées.
Car ownership is a status symbol for many people. | Pour beaucoup, posséder une voiture est un signe de réussite sociale.
Young people in cities are less interested in owning cars. | En ville, les jeunes s'intéressent moins à l'idée d'avoir une voiture.
Car sharing reduces the number of vehicles on the road. | L'autopartage réduit le nombre de véhicules sur la route.
Parking minimums encourage people to drive. | Les obligations minimales de stationnement incitent à prendre la voiture.
Free parking is never really free. | Le stationnement gratuit n'est jamais vraiment gratuit.
Walkability is a key measure of urban quality. | La marchabilité est un indicateur clé de la qualité urbaine.
Good transport links can revive a declining town. | De bonnes liaisons de transport peuvent relancer une ville en déclin.
Mobility is closely tied to economic opportunity. | La mobilité est étroitement liée aux opportunités économiques.
Transport policy shapes how cities grow. | La politique des transports façonne le développement des villes.
I'd happily give up my car if the buses were reliable. | J'abandonnerais volontiers ma voiture si les bus étaient fiables.
Getting around without a car takes some planning. | Se déplacer sans voiture demande un peu d'organisation.
I've come to enjoy the train journey as time to myself. | J'ai appris à apprécier le trajet en train comme un moment à moi.
The journey is half the fun. | Le voyage, c'est la moitié du plaisir.
Fare evasion costs transit systems millions each year. | La fraude coûte des millions aux réseaux de transport chaque année.
`
});
