// 法文對照（Français）：軍事國防
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


addFrench("military", {
  words: `
army | l'armée de terre | Mon frère est dans l'armée de terre.
navy | la marine | Elle s'est engagée dans la marine.
air force | l'armée de l'air | Il pilote des avions de chasse dans l'armée de l'air.
marines | l'infanterie de marine | L'infanterie de marine a débarqué sur la plage.
soldier | le soldat | Le soldat se tenait à l'entrée.
sailor | le marin | Le marin a fait signe depuis le navire.
pilot | le pilote | Le pilote a atterri sans encombre.
military | militaire | Il veut faire une carrière militaire.
uniform | l'uniforme | Il a fière allure dans son uniforme.
helmet | le casque | Chaque soldat porte un casque.
boots | les rangers | Cire tes rangers.
base | la base | La base est près de la mer.
camp | le camp | Nous avons visité le camp dimanche.
tank | le char | Un char a descendu la route.
ship | le navire | Le navire a quitté le port.
warship | le navire de guerre | Un navire de guerre est passé près de l'île.
submarine | le sous-marin | Un sous-marin peut rester sous l'eau pendant des jours.
jet | l'avion à réaction | L'avion à réaction volait très vite.
fighter jet | l'avion de chasse | Un avion de chasse est très bruyant.
helicopter | l'hélicoptère | L'hélicoptère s'est posé sur le terrain.
gun | l'arme à feu | Ne pointe jamais une arme vers quelqu'un.
rifle | le fusil | Il a nettoyé son fusil.
bullet | la balle | Une balle, c'est très petit.
bomb | la bombe | La vieille bombe n'a pas explosé.
war | la guerre | La guerre est terrible.
peace | la paix | Tout le monde veut la paix.
fight | se battre | Ils ont dû se battre.
enemy | l'ennemi | L'ennemi est proche.
ally | l'allié | Ce sont nos alliés.
general | le général | Le général a fait un discours.
officer | l'officier | L'officier a vérifié nos papiers.
captain | le capitaine | Le capitaine est sur le navire.
sergeant | le sergent | Le sergent criait des ordres.
private | le soldat de deuxième classe | Il est soldat de deuxième classe dans l'armée.
salute | saluer | Saluez le drapeau.
march | marcher au pas | Les soldats marchent au pas.
flag | le drapeau | Le drapeau est sur le mât.
order | l'ordre | Suis l'ordre.
training | l'entraînement | L'entraînement commence à six heures.
drill | l'exercice | Nous avons fait un exercice sous la pluie.
guard | la sentinelle | La sentinelle se tenait à la porte.
barracks | la caserne | Nous dormons à la caserne.
bunk bed | le lit superposé | Je dors dans un lit superposé.
mess hall | le réfectoire | Nous mangeons au réfectoire.
push-up | la pompe | Faites vingt pompes !
sit-up | l'abdo | Fais trente abdos.
roll call | l'appel | L'appel est à six heures.
bugle | le clairon | Le clairon nous réveille.
wake up | se réveiller | Nous nous réveillons à six heures.
lights out | l'extinction des feux | L'extinction des feux est à dix heures.
leave | la permission | J'ai une permission ce week-end.
hero | le héros | C'est un héros de guerre.
brave | courageux | Les soldats ont été courageux.
protect | protéger | Les soldats protègent le pays.
defend | défendre | Nous devons défendre notre foyer.
attack | attaquer | L'ennemi pourrait attaquer de nuit.
safe | en sécurité | Restez en sécurité.
danger | le danger | Il y a un danger devant nous.
map | la carte | Lis attentivement la carte.
compass | la boussole | Utilise une boussole pour trouver le nord.
radio | la radio | Appelle-les à la radio.
backpack | le sac à dos | Son sac à dos est lourd.
tent | la tente | Nous avons dormi sous une tente.
truck | le camion | Le camion transporte des soldats.
jeep | la jeep | Ils conduisaient une jeep.
parachute | le parachute | Il a sauté en parachute.
target | la cible | Touche la cible.
aim | viser | Vise soigneusement.
shoot | tirer | Ne tirez pas !
fire | faire feu | En joue, feu !
knife | le couteau | Il porte un couteau.
sword | l'épée | Le roi avait une épée.
shield | le bouclier | Il a levé son bouclier.
castle | le château | Le château a des murs épais.
fort | le fort | Le vieux fort est maintenant un musée.
cannon | le canon | Le canon est très ancien.
medal | la médaille | Il a reçu une médaille.
parade | le défilé | Nous avons regardé le défilé.
veteran | l'ancien combattant | Mon grand-père est un ancien combattant.
medic | l'infirmier militaire | L'infirmier militaire l'a soigné.
first aid kit | la trousse de secours | Où est la trousse de secours ?
bandage | le bandage | Mets un bandage dessus.
camouflage | le camouflage | Les soldats portent une tenue de camouflage.
hide | se cacher | Cache-toi derrière le mur.
watch | le guet | C'est mon tour de faire le guet.
border | la frontière | Des soldats gardent la frontière.
island | l'île | Kinmen est une île.
coast | la côte | Les navires longent la côte.
patrol | patrouiller | Ils patrouillent la nuit.
rescue | secourir | L'armée a aidé à secourir les gens après l'inondation.
disaster | la catastrophe | Les soldats aident après une catastrophe.
sandbag | le sac de sable | Ils ont empilé des sacs de sable.
serve | servir | Il servira pendant un an.
join | rejoindre | Elle veut rejoindre l'armée de l'air.
homesick | avoir le mal du pays | J'avais le mal du pays à l'armée.
letter | la lettre | Écris-moi une lettre.
visit | rendre visite | La famille peut rendre visite le dimanche.
haircut | la coupe de cheveux | Les nouvelles recrues ont une coupe de cheveux courte.
strong | fort | L'entraînement rend fort.
tired | fatigué | Je suis tellement fatigué après l'entraînement.
military exercise | l'exercice militaire | L'exercice militaire dure cinq jours.
practice | l'entraînement | Ce n'est qu'un entraînement.
pretend | faire semblant | Les soldats font semblant que l'ennemi arrive.
real | réel | C'est réel ou c'est un exercice ?
smoke | la fumée | De la fumée s'élevait au-dessus de la plage.
explosion | l'explosion | Nous avons entendu une explosion au loin.
boom | le boum | Boum ! Tu as entendu ça ?
detour | la déviation | Prends la déviation autour de la route fermée.
alert | l'alerte | Mon téléphone a reçu une alerte.
calm | calme | Reste calme.
go inside | rentrer | Rentre maintenant.
sky | le ciel | Des avions ont traversé le ciel.
beach | la plage | Des chars sont arrivés sur la plage.
reporter | le journaliste | Un journaliste a filmé l'exercice.
schedule | le programme | Le programme de l'exercice est aux informations.
noise | le bruit | Désolé pour le bruit.
flash | l'éclair | Nous avons vu un éclair dans le ciel.
worry | s'inquiéter | Ne t'inquiète pas, c'est un exercice.
ready | prêt | Tu es prêt ?
open day | la journée portes ouvertes | La base organise une journée portes ouvertes.
EDC | l'EDC | EDC signifie « ce qu'on porte sur soi tous les jours ».
everyday carry | les affaires du quotidien | Mes affaires du quotidien tiennent dans une petite pochette.
go bag | le sac d'urgence | Garde un sac d'urgence près de la porte d'entrée.
flashlight | la lampe de poche | J'ai toujours une petite lampe de poche sur moi.
whistle | le sifflet | Un sifflet peut aider les secours à te retrouver.
power bank | la batterie externe | Garde ta batterie externe chargée.
cash | l'argent liquide | Prends un peu d'argent liquide. Les terminaux de paiement peuvent ne pas marcher pendant une panne.
ID card | la carte d'identité | Garde toujours ta carte d'identité sur toi.
health insurance card | la carte d'assurance maladie | Mets ta carte d'assurance maladie dans ton sac d'urgence.
bottled water | l'eau en bouteille | Garde de l'eau en bouteille à la maison.
canned food | les conserves | Les conserves se gardent des années.
energy bar | la barre énergétique | Prends quelques barres énergétiques.
spare batteries | les piles de rechange | N'oublie pas les piles de rechange.
mask | le masque | Prends quelques masques.
work gloves | les gants de travail | Les gants de travail protègent les mains.
raincoat | l'imperméable | Un imperméable te garde au sec et au chaud.
lighter | le briquet | Un briquet est petit et utile.
pocket knife | le couteau de poche | Un couteau de poche est un classique des affaires du quotidien.
tape | le ruban adhésif | Le gros scotch répare presque tout.
medicine | les médicaments | Apporte tes médicaments quotidiens.
glasses | les lunettes | Prends une paire de lunettes de rechange.
phone number | le numéro de téléphone | Écris les numéros de téléphone importants sur papier.
meeting place | le point de rendez-vous | Choisissez un point de rendez-vous familial.
family plan | le plan familial d'urgence | Préparez ensemble un plan familial d'urgence.
blackout | la panne de courant | La panne de courant a duré toute la nuit.
emergency | l'urgence | Reste calme en cas d'urgence.
`,
  phrases: `
My brother is in the army. | Mon frère fait son service militaire.
When do you go into the army? | Quand est-ce que tu pars à l'armée ?
I go next month. | Je pars le mois prochain.
How long is military service? | Le service militaire dure combien de temps ?
It's one year. | Un an.
Are you nervous? | Tu es nerveux ?
I'm a little scared. | J'ai un peu peur.
You'll be fine. | Ça va bien se passer.
Good luck in the army! | Bon courage à l'armée !
Take care of yourself. | Prends soin de toi.
Which base are you at? | Tu es dans quelle base ?
Where is your camp? | Où est ton camp ?
My camp is in the south. | Mon camp est dans le sud.
We get up at six. | Nous nous levons à six heures.
We go to bed at ten. | Nous nous couchons à dix heures.
Lights out! | Extinction des feux !
Wake up, everyone! | Debout, tout le monde !
Line up! | Rassemblement !
Stand up straight. | Tiens-toi droit.
Attention! | Garde-à-vous !
At ease. | Repos.
Salute! | Saluez !
Left, right, left, right. | Gauche, droite, gauche, droite.
Forward, march! | En avant, marche !
Halt! | Halte !
Turn left! | À gauche, gauche !
Turn right! | À droite, droite !
About face! | Demi-tour, droite !
Yes, sir! | À vos ordres, mon commandant !
Yes, ma'am! | À vos ordres, ma commandante !
Understood. | Bien compris.
Roll call in five minutes. | Appel dans cinq minutes.
Here! | Présent !
Make your bed. | Fais ton lit.
Fold your blanket neatly. | Plie ta couverture proprement.
Clean your boots. | Nettoie tes rangers.
Put on your uniform. | Mets ton uniforme.
Wear your helmet. | Mets ton casque.
Hurry up! | Dépêche-toi !
Faster! | Plus vite !
Don't be late. | Ne sois pas en retard.
Do twenty push-ups. | Fais vingt pompes.
We run every morning. | Nous courons tous les matins.
I'm so tired. | Je suis tellement fatigué.
My feet hurt. | J'ai mal aux pieds.
The food is not bad. | La nourriture n'est pas mauvaise.
I miss home food. | La cuisine de la maison me manque.
I miss my family. | Ma famille me manque.
Can I call home? | Je peux appeler chez moi ?
You can use your phone after dinner. | Tu peux utiliser ton téléphone après le dîner.
When is your next leave? | C'est quand ta prochaine permission ?
I have leave this weekend. | J'ai une permission ce week-end.
I'm coming home on Friday. | Je rentre vendredi.
Can we visit you? | On peut te rendre visite ?
Visiting hours are on Sunday. | Les visites ont lieu le dimanche.
Bring me some snacks. | Apporte-moi des en-cas.
Write me a letter. | Écris-moi une lettre.
I got your letter. | J'ai reçu ta lettre.
I have guard duty tonight. | Je suis de garde ce soir.
Who goes there? | Qui va là ?
Stop right there! | Halte-là !
Show me your ID. | Montrez-moi votre pièce d'identité.
This area is off-limits. | Cette zone est interdite d'accès.
No photos, please. | Pas de photos, s'il vous plaît.
Follow the rules. | Respecte le règlement.
Listen to your officer. | Écoute ton officier.
Stay with your team. | Reste avec ton équipe.
Help each other. | Entraidez-vous.
Are you okay? | Ça va ?
Call the medic! | Appelez l'infirmier !
I need first aid. | J'ai besoin des premiers secours.
Drink some water. | Bois un peu d'eau.
Take a break. | Fais une pause.
It's very hot today. | Il fait très chaud aujourd'hui.
It's raining, but we still train. | Il pleut, mais on s'entraîne quand même.
Look at that tank! | Regarde ce char !
Look at the fighter jets! | Regarde les avions de chasse !
The jets are so loud. | Les avions sont tellement bruyants.
The helicopter is landing. | L'hélicoptère atterrit.
That's a warship. | C'est un navire de guerre.
Soldiers help after typhoons. | Les soldats aident après les typhons.
The army helped clean up the town. | L'armée a aidé à nettoyer la ville.
Thank you for your service. | Merci pour votre engagement.
My grandpa was a soldier. | Mon grand-père était soldat.
He served on Kinmen. | Il a servi à Kinmen.
We visited an old fort. | Nous avons visité un vieux fort.
There is a military museum here. | Il y a un musée militaire ici.
We watched a parade. | Nous avons regardé un défilé.
War is scary. | La guerre fait peur.
I hope there's never a war. | J'espère qu'il n'y aura jamais de guerre.
We all want peace. | Nous voulons tous la paix.
My last day is next month. | Je suis libéré le mois prochain.
Only thirty days left! | Plus que trente jours !
I'm finally out of the army! | J'ai enfin fini mon service !
Welcome home! | Bienvenue à la maison !
You look stronger. | Tu as l'air plus costaud.
You got a short haircut. | Tu as les cheveux courts.
The army taught me a lot. | L'armée m'a beaucoup appris.
I made good friends in the army. | Je me suis fait de bons amis à l'armée.
I'm proud of you. | Je suis fier de toi.
Is this a drill? | C'est un exercice ?
Don't worry, it's only a drill. | Ne t'inquiète pas, ce n'est qu'un exercice.
Is it real? | C'est réel ?
What's that noise? | C'est quoi ce bruit ?
The army is practicing today. | L'armée fait un exercice aujourd'hui.
I heard loud booms this morning. | J'ai entendu de fortes détonations ce matin.
The jets are flying very low. | Les avions volent très bas.
The road is closed today. | La route est fermée aujourd'hui.
We have to take a detour. | Il faut faire un détour.
My phone just got an alert. | Mon téléphone vient de recevoir une alerte.
Please stay calm. | Restez calmes, s'il vous plaît.
Go inside the nearest building. | Entrez dans le bâtiment le plus proche.
Follow the police officer's directions. | Suivez les instructions du policier.
The drill ends at two o'clock. | L'exercice se termine à deux heures.
You can go out again after the drill. | Vous pourrez ressortir après l'exercice.
Tanks are driving down the street! | Des chars roulent dans la rue !
Let's watch the drill from here. | Regardons l'exercice d'ici.
Don't fly drones near the drill. | Ne faites pas voler de drones près de l'exercice.
The base has an open day this weekend. | La base organise une journée portes ouvertes ce week-end.
Kids can sit in a real tank! | Les enfants peuvent s'asseoir dans un vrai char !
What's in your EDC? | Qu'est-ce que tu portes sur toi tous les jours ?
I always carry a flashlight and a power bank. | J'ai toujours une lampe de poche et une batterie externe sur moi.
Do you have a go bag at home? | Tu as un sac d'urgence à la maison ?
Keep it by the front door. | Garde-le près de la porte d'entrée.
Pack enough water for three days. | Prends assez d'eau pour trois jours.
Don't forget your medicine. | N'oublie pas tes médicaments.
Bring some cash in small bills. | Prends un peu d'argent liquide en petites coupures.
Put copies of your ID in the bag. | Mets des copies de ta pièce d'identité dans le sac.
Write down phone numbers on paper. | Note les numéros de téléphone sur papier.
Your phone might die. | Ton téléphone pourrait tomber en panne de batterie.
Charge your power bank tonight. | Recharge ta batterie externe ce soir.
Where do we meet if we get separated? | Où est-ce qu'on se retrouve si on est séparés ?
Let's meet at the school gate. | Retrouvons-nous devant l'école.
The power is out. | Il y a une coupure de courant.
Where's the flashlight? | Où est la lampe de poche ?
Don't open the fridge too often. | N'ouvre pas le frigo trop souvent.
Fill the bathtub with water. | Remplis la baignoire d'eau.
My phone got an emergency alert. | Mon téléphone a reçu une alerte d'urgence.
Is this a drill or real? | C'est un exercice ou c'est réel ?
Listen to the radio for news. | Écoute la radio pour avoir des nouvelles.
Stay away from the windows. | Éloigne-toi des fenêtres.
Go to the basement. | Va au sous-sol.
Help the elderly first. | Aide d'abord les personnes âgées.
Check on your neighbors. | Prends des nouvelles de tes voisins.
Everyone should be ready. | Tout le monde devrait être prêt.
Being ready is not being scared. | Être prêt, ce n'est pas avoir peur.
`,
});

addFrench("military", {
  words: `
conscription | la conscription | Taïwan a rétabli une conscription d'un an en 2024.
military service | le service militaire | Le service militaire dure maintenant un an.
enlist | s'engager | Il s'est engagé après l'université.
draft | appeler sous les drapeaux | Il a été appelé sous les drapeaux à dix-neuf ans.
draft notice | l'ordre d'appel | Mon ordre d'appel est arrivé aujourd'hui.
boot camp | les classes | Les classes ont été dures mais utiles.
basic training | la formation initiale | La formation initiale est difficile.
recruit | la recrue | Les nouvelles recrues sont arrivées lundi.
volunteer soldier | le militaire engagé | Elle est devenue militaire engagée.
reservist | le réserviste | Les réservistes s'entraînent tous les quelques années.
reserve training | la période de réserve | J'ai été convoqué pour une période de réserve.
call-up | la convocation | J'ai reçu une convocation.
alternative service | le service civil | Il a fait son service civil dans un hôpital.
discharge | la libération | Je suis libéré le mois prochain.
rank | le grade | Quel est ton grade ?
lieutenant | le lieutenant | Le lieutenant commandait la section.
colonel | le colonel | Le colonel a inspecté la base.
major | le commandant | Le commandant a fait le briefing.
corporal | le caporal | Le caporal a vérifié notre équipement.
commander | le commandant | Le commandant a pris la décision finale.
platoon | la section | Notre section compte trente soldats.
company | la compagnie | Notre compagnie est de garde cette semaine.
battalion | le bataillon | Le bataillon s'est déplacé vers la côte.
brigade | la brigade | La brigade a organisé un exercice.
division | la division | Il a servi dans une division blindée.
unit | l'unité | Tu es dans quelle unité ?
squad | le groupe de combat | Chaque groupe de combat a un chef.
infantry | l'infanterie | L'infanterie combat à pied.
artillery | l'artillerie | L'artillerie a tiré sur la cible.
special forces | les forces spéciales | Les forces spéciales s'entraînent en montagne.
military police | la police militaire | La police militaire a vérifié nos papiers.
coast guard | les garde-côtes | Les garde-côtes patrouillent dans les eaux de Taïwan.
Ministry of National Defense | le ministère de la Défense nationale | Le ministère de la Défense nationale a publié un communiqué.
defense budget | le budget de la défense | Le budget de la défense a augmenté cette année.
exercise | l'exercice | L'armée a organisé un grand exercice.
Han Kuang exercise | l'exercice Han Kuang | L'exercice Han Kuang a lieu chaque année.
live-fire | à tir réel | C'était un exercice à tir réel.
air raid drill | l'exercice d'alerte aérienne | Pendant l'exercice d'alerte aérienne, la circulation s'est arrêtée.
air raid shelter | l'abri antiaérien | Trouve l'abri antiaérien le plus proche.
siren | la sirène | La sirène a retenti à 13 h 30.
evacuate | évacuer | Nous avons dû évacuer le bâtiment.
civil defense | la défense civile | Les équipes de défense civile aident la population.
emergency kit | le kit d'urgence | Garde un kit d'urgence à la maison.
ammunition | les munitions | Les munitions sont stockées en lieu sûr.
bunker | le bunker | Nous nous sommes cachés dans un bunker.
weapon | l'arme | Nettoie ton arme.
missile | le missile | Le missile a atteint la cible.
radar | le radar | Le radar a repéré l'avion.
aircraft carrier | le porte-avions | Un porte-avions est comme un aéroport flottant.
destroyer | le destroyer | Le destroyer escortait le navire.
frigate | la frégate | Les frégates taïwanaises patrouillent dans le détroit.
drone | le drone | Le drone a survolé la base.
armored vehicle | le véhicule blindé | Un véhicule blindé est passé.
mine | la mine | Le navire a heurté une mine.
night vision goggles | les lunettes de vision nocturne | Les lunettes de vision nocturne aident les soldats à voir dans le noir.
bulletproof vest | le gilet pare-balles | Il portait un gilet pare-balles.
mission | la mission | La mission a été un succès.
operation | l'opération | L'opération a commencé à l'aube.
strategy | la stratégie | Notre stratégie est défensive.
tactics | la tactique | Ils ont changé de tactique.
troops | les troupes | Des troupes ont été envoyées pour aider après le séisme.
deploy | déployer | Les troupes ont été déployées sur les îles.
station | être stationné | Il est stationné à Penghu.
outlying islands | les îles périphériques | Il a servi sur les îles périphériques.
front line | la ligne de front | Les soldats en première ligne sont toujours en alerte.
retreat | battre en retraite | L'armée a dû battre en retraite.
surrender | se rendre | Ils ont refusé de se rendre.
invade | envahir | L'ennemi a tenté d'envahir l'île.
invasion | l'invasion | L'exercice simule une invasion.
blockade | le blocus | Un blocus empêcherait les navires d'atteindre le port.
ceasefire | le cessez-le-feu | Les deux camps ont accepté un cessez-le-feu.
treaty | le traité | Ils ont signé un traité de paix.
casualty | la victime | Chaque victime est une tragédie.
wounded | blessé | Les blessés ont été transportés à l'hôpital.
prisoner of war | le prisonnier de guerre | Il a été prisonnier de guerre.
paratrooper | le parachutiste | Les parachutistes sautent d'avions.
guard duty | la garde | Je suis de garde ce soir.
inspection | l'inspection | Nous avons tout nettoyé avant l'inspection.
discipline | la discipline | L'armée enseigne la discipline.
obey | obéir | Les soldats doivent obéir aux ordres.
chain of command | la chaîne de commandement | Respecte la chaîne de commandement.
headquarters | le quartier général | Le quartier général a envoyé de nouveaux ordres.
supply | le ravitaillement | Les camions de ravitaillement sont arrivés à midi.
logistics | la logistique | Une bonne logistique fait avancer une armée.
canteen | le bidon | Remplis ton bidon avant la marche.
shooting range | le stand de tir | Nous nous sommes entraînés au stand de tir.
marksmanship | l'adresse au tir | L'adresse au tir demande de l'entraînement.
physical fitness test | le test d'aptitude physique | J'ai réussi le test d'aptitude physique.
oath | le serment | Les recrues prêtent serment.
military academy | l'académie militaire | Elle a étudié dans une académie militaire.
cadet | l'élève officier | Les élèves officiers ont défilé.
national defense | la défense nationale | La défense nationale est l'affaire de tous.
security | la sécurité | La sécurité est stricte à la base.
spy | l'espion | L'espion a été arrêté.
intelligence | le renseignement | Le renseignement militaire est secret.
classified | classifié | Cette information est classifiée.
cyberattack | la cyberattaque | Une cyberattaque a touché des sites gouvernementaux.
disinformation | la désinformation | La désinformation peut aussi être une arme.
humanitarian aid | l'aide humanitaire | La marine a livré de l'aide humanitaire.
peacekeeper | le casque bleu | Les casques bleus de l'ONU protègent les civils.
joint exercise | l'exercice conjoint | Les deux marines ont organisé un exercice conjoint.
annual exercise | l'exercice annuel | Han Kuang est le plus grand exercice annuel de Taïwan.
tabletop exercise | l'exercice sur table | L'exercice sur table a précédé les manœuvres sur le terrain.
computer-assisted wargame | la simulation assistée par ordinateur | La simulation assistée par ordinateur a lieu avant les exercices réels.
live-fire zone | la zone de tir réel | Les bateaux de pêche doivent éviter la zone de tir réel.
navigation warning | l'avis aux navigateurs | La marine a publié un avis aux navigateurs.
no-fly zone | la zone d'exclusion aérienne | Une zone d'exclusion aérienne a été établie pendant l'exercice.
urban resilience exercise | l'exercice de résilience urbaine | L'exercice de résilience urbaine teste toute la ville.
evacuation drill | l'exercice d'évacuation | L'école a organisé un exercice d'évacuation.
traffic control | la régulation de la circulation | La régulation de la circulation commence à 13 h 30.
red team | l'équipe rouge | L'équipe rouge jouait l'ennemi.
blue team | l'équipe bleue | L'équipe bleue défendait la plage.
opposing force | la force adverse | La force adverse a tenté de débarquer de nuit.
simulated attack | l'attaque simulée | L'exercice a commencé par une attaque simulée.
counter-landing | la lutte anti-débarquement | Les troupes se sont entraînées à la lutte anti-débarquement.
beach defense | la défense des plages | La défense des plages commence au bord de l'eau.
highway landing | l'atterrissage sur autoroute | Des avions de chasse se sont entraînés à atterrir sur une autoroute.
rapid response | la réaction rapide | L'exercice testait la réaction rapide.
observe | observer | Des responsables étrangers sont venus observer l'exercice.
press release | le communiqué de presse | Le ministère a publié un communiqué de presse sur l'exercice.
scenario | le scénario | Le scénario était un blocus soudain.
debrief | le débriefing | Après l'exercice, il y a eu un débriefing.
lessons learned | les retours d'expérience | Le rapport listait les retours d'expérience.
decoy | le leurre | Des leurres gonflables peuvent tromper les drones ennemis.
camouflage net | le filet de camouflage | Les soldats ont caché le lanceur sous un filet de camouflage.
multitool | la pince multifonction | Une pince multifonction a une pince, un couteau et des tournevis.
tourniquet | le garrot | Apprends à utiliser un garrot.
pressure bandage | le pansement compressif | Applique un pansement compressif pour arrêter le saignement.
bleeding control | le contrôle des hémorragies | Le contrôle des hémorragies sauve des vies.
crank radio | la radio à manivelle | Une radio à manivelle fonctionne sans piles.
emergency blanket | la couverture de survie | Une couverture de survie ne pèse presque rien.
water purification tablets | les pastilles de purification d'eau | Prends quelques pastilles de purification d'eau.
72-hour kit | le kit de 72 heures | Prépare un kit de 72 heures pour chaque personne.
non-perishable food | les aliments non périssables | Stocke des aliments non périssables.
rotate | renouveler | Renouvelle tes réserves de nourriture tous les six mois.
expiration date | la date de péremption | Vérifie la date de péremption de ton eau.
copies of documents | les copies de documents | Garde des copies de documents dans un sac étanche.
waterproof bag | le sac étanche | Mets ton téléphone dans un sac étanche.
headlamp | la lampe frontale | Une lampe frontale te laisse les mains libres.
paper map | la carte papier | Le GPS peut tomber en panne, alors prends une carte papier.
landline | le téléphone fixe | Les téléphones fixes peuvent encore fonctionner quand le réseau mobile est coupé.
cell network | le réseau mobile | Le réseau mobile est tombé en panne.
communication plan | le plan de communication | Chaque famille a besoin d'un plan de communication.
out-of-town contact | le contact hors de la ville | Choisis un contact hors de la ville.
air raid alert | l'alerte aérienne | Quand tu entends l'alerte aérienne, va dans un abri.
shelter sign | le panneau d'abri | Cherche le panneau d'abri sur le bâtiment.
underground parking | le parking souterrain | Beaucoup d'abris sont des parkings souterrains.
basement | le sous-sol | Descends au sous-sol.
MRT station | la station de métro | Certaines stations de métro peuvent servir d'abris.
shelter in place | se mettre à l'abri sur place | Si tu ne peux pas atteindre un abri, mets-toi à l'abri sur place.
interior room | la pièce intérieure | Reste dans une pièce intérieure, loin des fenêtres.
debris | les débris | Les débris projetés peuvent te blesser.
fuel tank | le réservoir | Garde ton réservoir au moins à moitié plein.
generator | le groupe électrogène | Ne fais jamais fonctionner un groupe électrogène à l'intérieur.
misinformation | la fausse information | Ne partage pas de fausses informations en temps de crise.
official sources | les sources officielles | Informe-toi auprès des sources officielles.
bite the bullet | serrer les dents | Je vais serrer les dents et le faire.
hold the fort | tenir la boutique | Tu peux tenir la boutique pendant que je suis sorti ?
in the trenches | en première ligne | Les enseignants sont en première ligne.
call the shots | prendre les décisions | C'est l'entraîneur qui prendra les décisions.
the front line | la première ligne | Les infirmières sont en première ligne.
rank and file | la base | La base soutient le projet.
under fire | sous le feu des critiques | Le ministre est sous le feu des critiques.
stick to your guns | ne pas en démordre | N'en démords pas.
on the warpath | sur le sentier de la guerre | Le patron est sur le sentier de la guerre.
battle-ready | prêt au combat | L'équipe est prête au combat.
close ranks | serrer les rangs | Le parti va serrer les rangs.
a call to arms | un appel à la mobilisation | C'est un appel à la mobilisation.
pull rank | user de son autorité | N'use pas de ton autorité avec moi.
lock and load | paré | Parés, tout le monde !
stand down | lever l'alerte | On a ordonné aux troupes de lever l'alerte.
`,
  phrases: `
I got my draft notice. | J'ai reçu mon ordre d'appel.
When do you report for duty? | Quand dois-tu te présenter ?
I report to boot camp on Monday. | Je me présente aux classes lundi.
Did you serve? | Tu as fait ton service ?
I did one year of military service. | J'ai fait un an de service militaire.
I did alternative service instead. | J'ai fait un service civil à la place.
I was exempt for medical reasons. | J'ai été exempté pour raisons médicales.
Are you a volunteer or a conscript? | Tu es engagé volontaire ou appelé ?
She signed up as a volunteer soldier. | Elle s'est engagée comme militaire volontaire.
What unit were you in? | Tu étais dans quelle unité ?
I was in the infantry. | J'étais dans l'infanterie.
I served in the navy. | J'ai servi dans la marine.
I was stationed on Penghu. | J'étais stationné à Penghu.
I was posted to an outlying island. | J'ai été affecté sur une île périphérique.
Boot camp was tough, but I got through it. | Les classes ont été dures, mais j'ai tenu le coup.
We had a physical fitness test today. | Nous avons eu un test d'aptitude physique aujourd'hui.
I failed the run and have to retake it. | J'ai raté la course et je dois la repasser.
We practiced at the shooting range. | Nous nous sommes entraînés au stand de tir.
I hit eight out of ten targets. | J'ai touché huit cibles sur dix.
Keep your finger off the trigger. | Garde ton doigt hors de la détente.
Always treat a weapon as if it's loaded. | Considère toujours une arme comme chargée.
Check your gear before you leave. | Vérifie ton équipement avant de partir.
We have a long march tomorrow. | Nous avons une longue marche demain.
Pack light, but bring enough water. | Voyage léger, mais emporte assez d'eau.
We're going on a field exercise. | Nous partons en exercice sur le terrain.
We slept in tents for three days. | Nous avons dormi sous la tente pendant trois jours.
The inspection is tomorrow morning. | L'inspection a lieu demain matin.
Everything has to be spotless. | Tout doit être impeccable.
Our weekend leave was canceled. | Notre permission du week-end a été annulée.
We're on standby this week. | Nous sommes en alerte cette semaine.
I'm on night duty. | Je suis de service de nuit.
Report back to base by 9 p.m. | Soyez de retour à la base avant 21 heures.
Don't break the chain of command. | Ne court-circuite pas la chaîne de commandement.
Orders are orders. | Les ordres sont les ordres.
Request permission to speak. | Demande la permission de parler.
Permission granted. | Permission accordée.
The commander wants to see you. | Le commandant veut te voir.
Our platoon leader is strict but fair. | Notre chef de section est strict mais juste.
The sergeant made us run extra laps. | Le sergent nous a fait courir des tours supplémentaires.
I got promoted to corporal. | J'ai été promu caporal.
How many days until you're discharged? | Combien de jours avant ta libération ?
I got a call-up for reserve training. | J'ai reçu une convocation pour une période de réserve.
My reserve training lasts two weeks. | Ma période de réserve dure deux semaines.
Employers must give you leave for reserve training. | Les employeurs doivent accorder un congé pour la période de réserve.
The Han Kuang exercise starts next week. | L'exercice Han Kuang commence la semaine prochaine.
Expect road closures during the exercise. | Attendez-vous à des fermetures de routes pendant l'exercice.
There's an air raid drill this afternoon. | Il y a un exercice d'alerte aérienne cet après-midi.
When the siren sounds, go indoors. | Quand la sirène retentit, rentrez à l'intérieur.
Where is the nearest air raid shelter? | Où est l'abri antiaérien le plus proche ?
Look for the shelter sign on the building. | Cherche le panneau d'abri sur le bâtiment.
Pull over and turn off your engine. | Garez-vous sur le côté et coupez le moteur.
Stay away from windows. | Éloignez-vous des fenêtres.
Keep an emergency kit ready. | Gardez un kit d'urgence prêt.
Pack water, food, a flashlight and medicine. | Prenez de l'eau, de la nourriture, une lampe de poche et des médicaments.
Know your evacuation route. | Connaissez votre itinéraire d'évacuation.
Follow official news, not rumors. | Suivez les informations officielles, pas les rumeurs.
Check the facts before you share. | Vérifiez les faits avant de partager.
Civil defense volunteers are needed. | On recherche des bénévoles pour la défense civile.
I took a first aid course. | J'ai suivi une formation aux premiers secours.
Learn how to stop bleeding. | Apprenez à arrêter une hémorragie.
The army helped after the earthquake. | L'armée a aidé après le tremblement de terre.
Troops were sent to the disaster area. | Des troupes ont été envoyées dans la zone sinistrée.
The navy delivered supplies to the island. | La marine a livré des provisions sur l'île.
Coast guard ships patrol around the clock. | Les navires des garde-côtes patrouillent jour et nuit.
Military aircraft were spotted near Taiwan. | Des avions militaires ont été repérés près de Taïwan.
Our jets took off to monitor them. | Nos avions ont décollé pour les surveiller.
The defense ministry released a statement. | Le ministère de la Défense a publié un communiqué.
The defense budget is up this year. | Le budget de la défense est en hausse cette année.
They're buying new missiles and drones. | Ils achètent de nouveaux missiles et drones.
Taiwan builds its own drones now. | Taïwan fabrique désormais ses propres drones.
The new submarine is still being tested. | Le nouveau sous-marin est encore en essais.
Our military is moving to smaller, mobile units. | Notre armée évolue vers des unités plus petites et mobiles.
Training needs to be more realistic. | L'entraînement doit être plus réaliste.
Recruitment has become harder. | Le recrutement est devenu plus difficile.
The military raised pay for volunteers. | L'armée a augmenté la solde des engagés.
She wants to go to a military academy. | Elle veut entrer dans une académie militaire.
Military academy students get free tuition. | Les élèves des académies militaires ne paient pas de frais de scolarité.
He's a career officer. | C'est un officier de carrière.
After twenty years, he retired from the army. | Après vingt ans, il a pris sa retraite de l'armée.
Veterans get special benefits. | Les anciens combattants bénéficient d'avantages particuliers.
Spies were caught leaking secrets. | Des espions ont été pris en train de divulguer des secrets.
That information is classified. | Cette information est classifiée.
Don't post photos of military bases online. | Ne publiez pas de photos de bases militaires en ligne.
Cyberattacks happen every day. | Des cyberattaques ont lieu tous les jours.
Disinformation spreads quickly online. | La désinformation se propage vite en ligne.
Both sides agreed to a ceasefire. | Les deux camps ont accepté un cessez-le-feu.
Peace talks broke down. | Les pourparlers de paix ont échoué.
The war has lasted more than a year. | La guerre dure depuis plus d'un an.
Many civilians fled the fighting. | Beaucoup de civils ont fui les combats.
Aid is reaching the refugees. | L'aide parvient aux réfugiés.
UN peacekeepers are on the ground. | Les casques bleus de l'ONU sont sur le terrain.
The enemy is retreating. | L'ennemi bat en retraite.
They refused to surrender. | Ils ont refusé de se rendre.
The island was under blockade. | L'île était soumise à un blocus.
History shows that war is costly for everyone. | L'histoire montre que la guerre coûte cher à tout le monde.
Freedom isn't free. | La liberté a un prix.
Everyone has a role in national defense. | Chacun a un rôle à jouer dans la défense nationale.
Being prepared doesn't mean wanting war. | Être préparé ne veut pas dire vouloir la guerre.
Learn the sound of the air raid siren. | Apprenez à reconnaître le son de la sirène d'alerte aérienne.
Know where your family will meet in an emergency. | Sachez où votre famille se retrouvera en cas d'urgence.
When is this year's Han Kuang exercise? | Quand a lieu l'exercice Han Kuang cette année ?
It usually takes place in summer. | Il a généralement lieu en été.
The computer-assisted wargame comes first. | La simulation assistée par ordinateur a lieu en premier.
Then come the live drills. | Viennent ensuite les exercices réels.
The navy issued a navigation warning. | La marine a publié un avis aux navigateurs.
Fishing boats must stay out of the area. | Les bateaux de pêche doivent rester hors de la zone.
Some flights were rerouted. | Certains vols ont été déroutés.
Traffic control starts at 1:30 p.m. | La régulation de la circulation commence à 13 h 30.
Cars must pull over during the drill. | Les voitures doivent se garer pendant l'exercice.
Shops will close for thirty minutes. | Les magasins fermeront pendant trente minutes.
Everyone should take shelter indoors. | Tout le monde doit se mettre à l'abri à l'intérieur.
The metro station serves as a shelter. | La station de métro sert d'abri.
This year's drill tests the whole city. | L'exercice de cette année teste toute la ville.
Hospitals practiced handling mass casualties. | Les hôpitaux se sont entraînés à gérer un afflux massif de victimes.
Fighter jets landed on a highway. | Des avions de chasse ont atterri sur une autoroute.
The highway was closed for the landing drill. | L'autoroute a été fermée pour l'exercice d'atterrissage.
Troops practiced defending the beach. | Les troupes se sont entraînées à défendre la plage.
The red team played the enemy. | L'équipe rouge jouait l'ennemi.
The opposing force landed at night. | La force adverse a débarqué de nuit.
The scenario was a surprise attack. | Le scénario était une attaque surprise.
They practiced moving missiles at night. | Ils se sont entraînés à déplacer des missiles de nuit.
Reservists joined the exercise this year. | Les réservistes ont participé à l'exercice cette année.
Foreign observers watched the drill. | Des observateurs étrangers ont suivi l'exercice.
The drill exposed some problems. | L'exercice a révélé certains problèmes.
Communication broke down during the drill. | Les communications ont été coupées pendant l'exercice.
That's why we practice. | C'est pour ça qu'on s'entraîne.
Better to make mistakes in a drill than in a real war. | Mieux vaut faire des erreurs à l'exercice que dans une vraie guerre.
The two navies held a joint exercise. | Les deux marines ont mené un exercice conjoint.
Was anyone hurt during the drill? | Quelqu'un a été blessé pendant l'exercice ?
The drill went smoothly. | L'exercice s'est bien déroulé.
A good EDC kit is small enough to carry every day. | Un bon kit EDC est assez petit pour être porté tous les jours.
I keep a multitool, a whistle and a small flashlight on my keychain. | J'ai une pince multifonction, un sifflet et une petite lampe de poche sur mon porte-clés.
Build a 72-hour kit for every family member. | Préparez un kit de 72 heures pour chaque membre de la famille.
Store at least three liters of water per person per day. | Stockez au moins trois litres d'eau par personne et par jour.
Choose non-perishable food that doesn't need cooking. | Choisissez des aliments non périssables qui ne demandent pas de cuisson.
Rotate your stored food every six months. | Renouvelez vos réserves de nourriture tous les six mois.
Check the expiration dates twice a year. | Vérifiez les dates de péremption deux fois par an.
Keep copies of documents in a waterproof bag. | Gardez des copies de vos documents dans un sac étanche.
A crank radio works even when the batteries die. | Une radio à manivelle fonctionne même quand les piles sont vides.
An emergency blanket can prevent hypothermia. | Une couverture de survie peut prévenir l'hypothermie.
Learn how to use a tourniquet before you need one. | Apprenez à utiliser un garrot avant d'en avoir besoin.
Press hard on the wound to stop the bleeding. | Appuyez fort sur la plaie pour arrêter le saignement.
Make a communication plan with your family. | Établissez un plan de communication avec votre famille.
Text instead of calling. Texts get through more easily. | Envoyez des SMS au lieu d'appeler. Les SMS passent plus facilement.
Pick an out-of-town contact everyone can reach. | Choisissez un contact hors de la ville que tout le monde peut joindre.
When the air raid alert sounds, go to the nearest shelter. | Quand l'alerte aérienne retentit, allez à l'abri le plus proche.
Look for the shelter sign on buildings. | Repérez le panneau d'abri sur les bâtiments.
You can find nearby shelters with an app. | Vous pouvez trouver les abris proches avec une appli.
Many underground parking lots and MRT stations are shelters. | Beaucoup de parkings souterrains et de stations de métro sont des abris.
If you can't get to a shelter, stay in an interior room. | Si vous ne pouvez pas rejoindre un abri, restez dans une pièce intérieure.
Keep your fuel tank at least half full. | Gardez votre réservoir au moins à moitié plein.
Never run a generator indoors. | Ne faites jamais tourner un groupe électrogène à l'intérieur.
Don't believe everything you see online. | Ne croyez pas tout ce que vous voyez en ligne.
Get your news from official sources. | Informez-vous auprès des sources officielles.
Don't forward rumors. | Ne transférez pas de rumeurs.
GPS may fail, so carry a paper map. | Le GPS peut tomber en panne, alors emportez une carte papier.
Do you know where the water shutoff is? | Tu sais où se trouve le robinet d'arrêt général ?
Learn basic first aid and CPR. | Apprenez les premiers secours et le massage cardiaque.
Take a first aid course with your family. | Suivez une formation aux premiers secours en famille.
Preparing is a habit, not a one-time task. | Se préparer est une habitude, pas une tâche ponctuelle.
`,
});

addFrench("military", {
  words: `
deterrence | la dissuasion | La dissuasion vise à empêcher la guerre, pas à la gagner.
asymmetric warfare | la guerre asymétrique | Taïwan mise sur la guerre asymétrique.
porcupine strategy | la stratégie du porc-épic | La stratégie du porc-épic rend une invasion trop coûteuse.
anti-ship missile | le missile antinavire | Les missiles antinavires mobiles sont difficiles à cibler.
air defense | la défense aérienne | Une défense aérienne multicouche protège les villes.
missile defense | la défense antimissile | Aucune défense antimissile ne peut tout arrêter.
surface-to-air missile | le missile sol-air | Une batterie de missiles sol-air protège l'aéroport.
hypersonic | hypersonique | Les armes hypersoniques sont difficiles à intercepter.
intercept | intercepter | Le système peut intercepter les roquettes.
ballistic missile | le missile balistique | Un missile balistique suit une trajectoire en arc à travers l'espace.
cruise missile | le missile de croisière | Un missile de croisière vole bas pour éviter les radars.
precision strike | la frappe de précision | La capacité de frappe de précision réduit les dommages collatéraux.
amphibious assault | l'assaut amphibie | Un assaut amphibie est l'une des opérations les plus difficiles.
landing craft | la barge de débarquement | Les barges de débarquement sont vulnérables à l'approche du rivage.
littoral | littoral | Le combat littoral se déroule près de la côte.
area denial | l'interdiction de zone | L'interdiction de zone tient les forces ennemies à distance.
gray-zone tactics | les tactiques de zone grise | Les tactiques de zone grise restent sous le seuil de la guerre.
coercion | la coercition | La coercition militaire vise à intimider.
escalation | l'escalade | Les deux camps veulent éviter l'escalade.
de-escalation | la désescalade | Les diplomates ont poussé à la désescalade.
median line | la ligne médiane | Des avions ont de nouveau franchi la ligne médiane.
Taiwan Strait | le détroit de Taïwan | Les tensions ont augmenté dans le détroit de Taïwan.
air defense identification zone | la zone d'identification de défense aérienne | Des avions sont entrés dans la zone d'identification de défense aérienne de Taïwan.
incursion | l'incursion | Des incursions d'avions militaires sont signalées chaque jour.
sortie | la sortie | L'armée de l'air a effectué des dizaines de sorties.
scramble | faire décoller en urgence | Des avions ont décollé en urgence pour suivre les bombardiers.
reconnaissance | la reconnaissance | Un drone de reconnaissance a cartographié le littoral.
surveillance | la surveillance | La surveillance maritime suit chaque navire.
early warning | l'alerte avancée | Le radar d'alerte avancée fait gagner de précieuses minutes.
command and control | le commandement et contrôle | Le commandement et contrôle doit survivre à la première frappe.
interoperability | l'interopérabilité | Les alliés s'entraînent ensemble pour améliorer l'interopérabilité.
joint operations | les opérations interarmées | Les opérations interarmées combinent forces terrestres, navales et aériennes.
combined arms | le combat interarmes | Le combat interarmes associe infanterie, blindés et artillerie.
mobilization | la mobilisation | La mobilisation des réservistes demande une planification minutieuse.
all-out defense | la défense globale | La défense globale implique les civils autant que les soldats.
whole-of-society resilience | la résilience de toute la société | La résilience de toute la société prépare la population aux catastrophes et à la guerre.
resilience | la résilience | La résilience est une forme de dissuasion.
critical infrastructure | les infrastructures critiques | Les réseaux électriques sont des infrastructures critiques.
undersea cable | le câble sous-marin | Un câble sous-marin coupé peut isoler une île.
energy security | la sécurité énergétique | La sécurité énergétique compte pour une île qui importe la plupart de son carburant.
stockpile | les réserves | Le gouvernement garde des réserves de carburant et de nourriture.
arms sale | la vente d'armes | Les États-Unis ont approuvé une nouvelle vente d'armes.
arms race | la course aux armements | Une course aux armements rend tout le monde moins sûr.
arms control | la maîtrise des armements | Les traités de maîtrise des armements limitent les armes nucléaires.
nonproliferation | la non-prolifération | Le traité de non-prolifération limite la diffusion des armes nucléaires.
nuclear deterrent | la dissuasion nucléaire | La dissuasion nucléaire est conçue pour ne jamais servir.
mutually assured destruction | la destruction mutuelle assurée | La destruction mutuelle assurée a maintenu la guerre froide sans affrontement direct.
alliance | l'alliance | L'OTAN est la plus grande alliance militaire.
collective defense | la défense collective | L'OTAN repose sur la défense collective.
security guarantee | la garantie de sécurité | Certains pays comptent sur la garantie de sécurité d'un allié.
strategic ambiguity | l'ambiguïté stratégique | L'ambiguïté stratégique laisse volontairement la réponse floue.
Taiwan Relations Act | le Taiwan Relations Act | Le Taiwan Relations Act a été adopté en 1979.
status quo | le statu quo | La plupart des gens veulent maintenir le statu quo.
first island chain | la première chaîne d'îles | Taïwan se trouve au milieu de la première chaîne d'îles.
sovereignty | la souveraineté | La souveraineté est au cœur du différend.
territorial waters | les eaux territoriales | Les eaux territoriales s'étendent jusqu'à 12 milles marins de la côte.
exclusive economic zone | la zone économique exclusive | Des bateaux de pêche sont entrés dans la zone économique exclusive.
freedom of navigation | la liberté de navigation | Des marines traversent le détroit pour affirmer la liberté de navigation.
geopolitics | la géopolitique | La géopolitique façonne les chaînes d'approvisionnement.
hybrid warfare | la guerre hybride | La guerre hybride mêle pressions militaires, économiques et informationnelles.
cognitive warfare | la guerre cognitive | La guerre cognitive vise ce que les gens croient.
information warfare | la guerre de l'information | La guerre de l'information sème la confusion en ligne.
electronic warfare | la guerre électronique | La guerre électronique peut aveugler les radars.
jamming | le brouillage | Le brouillage GPS a perturbé la navigation.
cyber defense | la cyberdéfense | La cyberdéfense est désormais une branche militaire à part entière.
unmanned systems | les systèmes sans pilote | Les systèmes sans pilote transforment la guerre navale.
loitering munition | la munition rôdeuse | Une munition rôdeuse tourne jusqu'à trouver une cible.
swarm | l'essaim | Un essaim de drones peut submerger les défenses.
autonomous weapon | l'arme autonome | Qui est responsable quand une arme autonome se trompe ?
kill chain | la chaîne de frappe | Briser la chaîne de frappe ennemie protège tes forces.
situational awareness | la connaissance de la situation | La connaissance de la situation dépend du partage des données.
fog of war | le brouillard de la guerre | Le brouillard de la guerre rend chaque décision incertaine.
attrition | l'usure | Une guerre d'usure épuise les deux camps.
sustainment | le soutien logistique | Le soutien logistique détermine combien de temps les forces peuvent combattre.
force posture | le dispositif des forces | Le nouveau dispositif place plus d'unités sur les îles.
readiness | la disponibilité opérationnelle | La disponibilité opérationnelle baisse quand le matériel n'est pas entretenu.
procurement | l'acquisition | Les acquisitions de défense peuvent prendre des années.
indigenous submarine | le sous-marin de conception nationale | Taïwan a lancé son premier sous-marin de conception nationale en 2023.
defense industry | l'industrie de défense | L'industrie de défense crée des emplois de haute technologie.
dual-use | à double usage | Les drones sont une technologie typiquement à double usage.
export controls | les contrôles à l'exportation | Les contrôles à l'exportation limitent la vente de puces avancées.
sanctions | les sanctions | Des sanctions ont été imposées après l'invasion.
quarantine | la quarantaine maritime | Une quarantaine maritime de l'île mettrait le droit international à l'épreuve.
wargame | le jeu de guerre | Des analystes ont simulé un conflit dans le détroit.
contingency | l'imprévu | Chaque imprévu a besoin d'un plan.
rules of engagement | les règles d'engagement | Les règles d'engagement disent quand les soldats peuvent tirer.
proportionality | la proportionnalité | La proportionnalité limite l'usage de la force.
Geneva Conventions | les Conventions de Genève | Les Conventions de Genève protègent les prisonniers et les civils.
war crime | le crime de guerre | Attaquer des hôpitaux est un crime de guerre.
conscientious objector | l'objecteur de conscience | Un objecteur de conscience peut faire un service civil à la place.
civilian control | le contrôle civil | Le contrôle civil de l'armée est essentiel dans une démocratie.
martial law | la loi martiale | Taïwan a levé la loi martiale en 1987.
Battle of Guningtou | la bataille de Guningtou | La bataille de Guningtou a eu lieu à Kinmen en 1949.
Second Taiwan Strait Crisis | la deuxième crise du détroit de Taïwan | La deuxième crise du détroit de Taïwan a commencé en 1958.
Third Taiwan Strait Crisis | la troisième crise du détroit de Taïwan | La troisième crise du détroit de Taïwan a eu lieu en 1995 et 1996.
doctrine | la doctrine | La nouvelle doctrine met l'accent sur la mobilité et la dispersion.
force multiplier | le multiplicateur de force | Un bon entraînement est un multiplicateur de force.
dispersal | la dispersion | La dispersion rend les forces plus difficiles à détruire.
civilian casualties | les victimes civiles | Les armes de précision visent à réduire les victimes civiles.
defense spending | les dépenses de défense | Beaucoup de pays augmentent leurs dépenses de défense.
encirclement | l'encerclement | Les exercices simulaient un encerclement de l'île.
Joint Sword | Joint Sword | Joint Sword-2024A a suivi l'investiture présidentielle.
Strait Thunder | Strait Thunder | Strait Thunder-2025A a eu lieu en avril 2025.
Eastern Theater Command | le commandement du théâtre oriental | Le commandement du théâtre oriental a annoncé les exercices.
combat readiness patrol | la patrouille de préparation au combat | L'APL a annoncé une patrouille conjointe de préparation au combat près de Taïwan.
rocket force | la force des fusées | La force des fusées a tiré des missiles dans la mer.
show of force | la démonstration de force | Les exercices étaient une démonstration de force.
signaling | l'envoi de signaux | Les exercices militaires sont une forme d'envoi de signaux politiques.
intimidation | l'intimidation | Le but était l'intimidation, pas l'invasion.
rehearsal | la répétition | Certains analystes voient ces exercices comme une répétition de blocus.
normalization | la banalisation | La banalisation des exercices rend l'alerte plus difficile.
warning time | le délai d'alerte | Des exercices fréquents peuvent réduire le délai d'alerte.
snap drill | l'exercice surprise | Un exercice surprise a été annoncé sans préavis.
exclusion zone | la zone d'exclusion | Les navires ont évité la zone d'exclusion.
unscripted | sans scénario préétabli | Han Kuang comprend désormais des exercices sans scénario préétabli.
round-the-clock | 24 heures sur 24 | Les exercices de 2025 se sont déroulés 24 heures sur 24 pendant dix jours.
multinational exercise | l'exercice multinational | RIMPAC est un grand exercice multinational organisé près d'Hawaï.
Balikatan | Balikatan | Balikatan est un exercice annuel américano-philippin.
freedom of navigation operation | l'opération de liberté de navigation | Une opération de liberté de navigation conteste des revendications maritimes excessives.
transit | le transit | Un destroyer américain a transité par le détroit de Taïwan.
carrier strike group | le groupe aéronaval | Un groupe aéronaval a rejoint l'exercice.
anti-submarine warfare | la lutte anti-sous-marine | L'exercice portait sur la lutte anti-sous-marine.
mine countermeasures | la guerre des mines | La guerre des mines est un travail lent et dangereux.
force projection | la projection de forces | Les groupes aéronavals permettent la projection de forces loin du pays.
escalation ladder | l'échelle de l'escalade | Chaque exercice monte d'un échelon sur l'échelle de l'escalade.
after-action review | le retour d'expérience | Le retour d'expérience a révélé des lacunes de communication.
civil defense handbook | le manuel de défense civile | Le gouvernement a publié un manuel de défense civile.
continuity of operations | la continuité d'activité | Les hôpitaux ont besoin de plans de continuité d'activité.
grid failure | la panne du réseau électrique | Une panne du réseau électrique pourrait durer des semaines.
satellite internet | l'internet par satellite | L'internet par satellite peut remplacer des câbles coupés.
LNG reserves | les réserves de GNL | Les réserves de GNL de Taïwan dureraient des jours, pas des mois.
food self-sufficiency | l'autosuffisance alimentaire | L'autosuffisance alimentaire de Taïwan n'est que d'environ 30 pour cent.
rationing | le rationnement | Le rationnement pourrait commencer lors d'une longue crise.
hoarding | l'accaparement | L'accaparement par panique vide les rayons.
panic buying | les achats de panique | Les achats de panique ont commencé avant le typhon.
trauma kit | la trousse de traumatologie | Garde une trousse de traumatologie dans ta voiture.
hemorrhage | l'hémorragie | Une hémorragie massive peut tuer en quelques minutes.
hemostatic gauze | la compresse hémostatique | Bourre la plaie avec une compresse hémostatique.
wound packing | le méchage de plaie | Le méchage de plaie arrête les saignements profonds.
chest seal | le pansement thoracique | Un pansement thoracique traite une plaie ouverte du thorax.
gray man | la personne discrète | En cas de crise, essaie de passer inaperçu.
bug-out bag | le sac d'évacuation | Un sac d'évacuation contient 72 heures de provisions.
bug in | rester chez soi | La plupart des experts conseillent de rester chez soi sauf si la maison n'est pas sûre.
self-reliance | l'autonomie | L'autonomie fait gagner du temps jusqu'à l'arrivée des secours.
neighborhood mutual aid | l'entraide de voisinage | L'entraide de voisinage sauve des vies après les catastrophes.
village chief | le chef de quartier | Le chef de quartier sait qui a besoin d'aide.
vulnerable groups | les personnes vulnérables | Prends des nouvelles des personnes vulnérables comme les personnes âgées.
civil defense volunteer | le bénévole de la défense civile | Elle s'est formée comme bénévole de la défense civile.
redundancy | la redondance | La redondance, c'est avoir une solution de secours pour chaque outil essentiel.
two is one, one is none | deux, c'est un ; un, c'est zéro | Deux, c'est un ; un, c'est zéro.
a war of words | une guerre des mots | Une guerre des mots a éclaté.
bury the hatchet | enterrer la hache de guerre | Enterrons la hache de guerre.
the big guns | les poids lourds | Ils ont fait appel aux poids lourds.
a battle royal | une mêlée générale | C'était une mêlée générale.
lose the battle but win the war | perdre la bataille mais gagner la guerre | Nous pouvons perdre la bataille mais gagner la guerre.
a scorched earth policy | la politique de la terre brûlée | Ils ont pratiqué la politique de la terre brûlée.
fall on his sword | porter le chapeau | Le PDG a dû porter le chapeau.
a war chest | un trésor de guerre | La campagne dispose d'un trésor de guerre de plusieurs millions.
the fog of war | le brouillard de la guerre | Les erreurs arrivent dans le brouillard de la guerre.
a Pyrrhic victory | une victoire à la Pyrrhus | C'était une victoire à la Pyrrhus.
cross swords | croiser le fer | Ils croisent souvent le fer en réunion.
in the line of fire | en première ligne | Les journalistes sont en première ligne.
take no prisoners | ne faire aucun quartier | Elle aime ne faire aucun quartier.
a loose cannon | un électron libre | C'est un électron libre.
all is fair in love and war | en amour comme à la guerre, tous les coups sont permis | En amour comme à la guerre, tous les coups sont permis.
`,
  phrases: `
Deterrence works only if it's credible. | La dissuasion ne fonctionne que si elle est crédible.
The aim is to make an attack too costly to try. | Le but est de rendre une attaque trop coûteuse pour être tentée.
Asymmetric warfare uses many small, cheap systems. | La guerre asymétrique utilise de nombreux systèmes petits et bon marché.
Mobile launchers are harder to find and destroy. | Les lanceurs mobiles sont plus difficiles à repérer et à détruire.
Sea mines could slow down a landing force. | Les mines marines pourraient ralentir une force de débarquement.
An amphibious invasion is extremely difficult. | Une invasion amphibie est extrêmement difficile.
The weather in the strait limits landing windows. | La météo dans le détroit limite les fenêtres de débarquement.
Only a few beaches are suitable for a landing. | Seules quelques plages conviennent à un débarquement.
A blockade may be more likely than an invasion. | Un blocus est peut-être plus probable qu'une invasion.
A quarantine could be framed as law enforcement. | Une quarantaine pourrait être présentée comme une opération de police.
Gray-zone pressure stays just below the threshold of war. | La pression en zone grise reste juste sous le seuil de la guerre.
The goal is to wear down the other side over time. | Le but est d'user l'adversaire sur la durée.
Daily incursions test our response. | Les incursions quotidiennes testent notre réaction.
Scrambling jets every day is expensive. | Faire décoller des avions en urgence chaque jour coûte cher.
Aircraft crossed the median line again. | Des avions ont de nouveau franchi la ligne médiane.
Coast guard vessels entered restricted waters. | Des navires garde-côtes sont entrés dans des eaux réglementées.
Undersea cables to the outlying islands were cut. | Les câbles sous-marins vers les îles périphériques ont été coupés.
Was it an accident or sabotage? | Était-ce un accident ou un sabotage ?
Critical infrastructure must be protected. | Les infrastructures critiques doivent être protégées.
Taiwan imports most of its energy. | Taïwan importe la majeure partie de son énergie.
How long could the island hold out under blockade? | Combien de temps l'île pourrait-elle tenir sous blocus ?
Energy stockpiles are a strategic issue. | Les réserves d'énergie sont un enjeu stratégique.
Resilience is a form of deterrence. | La résilience est une forme de dissuasion.
Whole-of-society resilience means everyone is prepared. | La résilience de toute la société signifie que tout le monde est préparé.
Civil defense can save lives in the first hours. | La défense civile peut sauver des vies dans les premières heures.
Mobilization plans must be tested, not just written. | Les plans de mobilisation doivent être testés, pas seulement rédigés.
Reserve forces need more realistic training. | Les forces de réserve ont besoin d'un entraînement plus réaliste.
Conscription alone doesn't guarantee readiness. | La conscription seule ne garantit pas la disponibilité opérationnelle.
Training quality matters more than headcount. | La qualité de l'entraînement compte plus que les effectifs.
The military is shifting toward dispersed, mobile units. | L'armée évolue vers des unités dispersées et mobiles.
Big platforms make big targets. | Les grandes plateformes font de grandes cibles.
Fighter jets are useless if the runways are destroyed. | Les avions de chasse sont inutiles si les pistes sont détruites.
Survivability should drive procurement. | La capacité de survie devrait guider les acquisitions.
Drones have changed the modern battlefield. | Les drones ont transformé le champ de bataille moderne.
Cheap drones can destroy expensive tanks. | Des drones bon marché peuvent détruire des chars coûteux.
Electronic warfare can jam drone signals. | La guerre électronique peut brouiller les signaux des drones.
The war in Ukraine offers hard lessons. | La guerre en Ukraine offre de dures leçons.
Ammunition production can't keep up with demand. | La production de munitions ne suit pas la demande.
Wars are won by logistics, not just firepower. | Les guerres se gagnent par la logistique, pas seulement par la puissance de feu.
Command and control must survive the first strike. | Le commandement et contrôle doit survivre à la première frappe.
Decentralized command lets units act on their own. | Le commandement décentralisé permet aux unités d'agir de manière autonome.
Situational awareness depends on secure communications. | La connaissance de la situation dépend de communications sécurisées.
Satellite internet keeps units connected. | L'internet par satellite garde les unités connectées.
The fog of war makes every decision uncertain. | Le brouillard de la guerre rend chaque décision incertaine.
Wargames help planners find weak points. | Les jeux de guerre aident les planificateurs à trouver les points faibles.
Most wargames show heavy losses on all sides. | La plupart des jeux de guerre montrent de lourdes pertes de tous les côtés.
No one wins a war like this. | Personne ne gagne une guerre comme celle-là.
Cognitive warfare targets what people believe. | La guerre cognitive vise ce que les gens croient.
The aim is to divide society and erode trust. | Le but est de diviser la société et d'éroder la confiance.
Media literacy is part of national security. | L'éducation aux médias fait partie de la sécurité nationale.
Fact-checking organizations play an important role. | Les organisations de vérification des faits jouent un rôle important.
Cyber defense is now a front line of its own. | La cyberdéfense est désormais une ligne de front à part entière.
The US sells arms to Taiwan under the Taiwan Relations Act. | Les États-Unis vendent des armes à Taïwan en vertu du Taiwan Relations Act.
There's a backlog of arms already paid for. | Il y a un retard de livraison d'armes déjà payées.
Delivery delays create capability gaps. | Les retards de livraison créent des lacunes capacitaires.
Strategic ambiguity is meant to deter both sides. | L'ambiguïté stratégique vise à dissuader les deux camps.
Critics say it invites miscalculation. | Les critiques disent qu'elle favorise les erreurs de calcul.
Allies want Taiwan to spend more on defense. | Les alliés veulent que Taïwan dépense davantage pour sa défense.
Defense spending is rising across the region. | Les dépenses de défense augmentent dans toute la région.
Japan is acquiring a counterstrike capability. | Le Japon se dote d'une capacité de contre-frappe.
The Philippines has expanded access for US forces. | Les Philippines ont élargi l'accès des forces américaines.
Regional tensions affect global supply chains. | Les tensions régionales affectent les chaînes d'approvisionnement mondiales.
A conflict would disrupt chip supplies worldwide. | Un conflit perturberait l'approvisionnement mondial en puces.
Shipping insurance rates would spike. | Les tarifs d'assurance maritime s'envoleraient.
Sanctions only work if major economies join in. | Les sanctions ne fonctionnent que si les grandes économies y participent.
Escalation can spiral out of control. | L'escalade peut échapper à tout contrôle.
Hotlines exist to prevent accidents from becoming wars. | Les lignes directes existent pour éviter que des accidents ne deviennent des guerres.
Military-to-military dialogue reduces risk. | Le dialogue entre militaires réduit les risques.
Both sides need off-ramps. | Les deux camps ont besoin de portes de sortie.
Diplomacy and deterrence go hand in hand. | La diplomatie et la dissuasion vont de pair.
Peace through strength is an old idea. | La paix par la force est une vieille idée.
Nuclear weapons raise the stakes of any conflict. | Les armes nucléaires augmentent les enjeux de tout conflit.
Arms control has weakened in recent years. | La maîtrise des armements s'est affaiblie ces dernières années.
Autonomous weapons raise serious ethical questions. | Les armes autonomes soulèvent de graves questions éthiques.
Who is accountable when an algorithm makes a mistake? | Qui est responsable quand un algorithme se trompe ?
Humans must stay in the loop. | Les humains doivent rester dans la boucle de décision.
The laws of war still apply. | Le droit de la guerre s'applique toujours.
Targeting civilians is a war crime. | Prendre des civils pour cible est un crime de guerre.
Proportionality limits the use of force. | La proportionnalité limite l'usage de la force.
Civilian control of the military is a pillar of democracy. | Le contrôle civil de l'armée est un pilier de la démocratie.
Taiwan lifted martial law in 1987. | Taïwan a levé la loi martiale en 1987.
The military became politically neutral. | L'armée est devenue politiquement neutre.
Kinmen was shelled for years during the Cold War. | Kinmen a été bombardée pendant des années pendant la guerre froide.
Old tunnels and bunkers are tourist sites now. | Les anciens tunnels et bunkers sont maintenant des sites touristiques.
The 1995–96 crisis led to missile tests near Taiwan. | La crise de 1995-1996 a conduit à des tirs d'essai de missiles près de Taïwan.
The US sent two carrier groups in response. | Les États-Unis ont envoyé deux groupes aéronavals en réponse.
History shapes how each side sees the threat. | L'histoire façonne la façon dont chaque camp perçoit la menace.
Defense reform takes political courage. | La réforme de la défense demande du courage politique.
Public support is essential for any defense policy. | Le soutien public est essentiel à toute politique de défense.
Polls show most people want to defend their country. | Les sondages montrent que la plupart des gens veulent défendre leur pays.
Willingness to fight is hard to measure. | La volonté de se battre est difficile à mesurer.
A society that is united is hard to defeat. | Une société unie est difficile à vaincre.
Preparation reduces panic in a crisis. | La préparation réduit la panique en temps de crise.
Every household should have a plan. | Chaque foyer devrait avoir un plan.
Deterrence fails quietly, then suddenly. | La dissuasion échoue d'abord en silence, puis d'un coup.
The best war is the one never fought. | La meilleure guerre est celle qu'on ne fait jamais.
Preparing for war is the surest way to prevent it. | Se préparer à la guerre est le moyen le plus sûr de l'empêcher.
Freedom has to be defended by each generation. | La liberté doit être défendue par chaque génération.
Peace is not the absence of threats, but the ability to manage them. | La paix n'est pas l'absence de menaces, mais la capacité de les gérer.
Security is built in peacetime, not in a crisis. | La sécurité se construit en temps de paix, pas en temps de crise.
China announced large-scale drills around Taiwan. | La Chine a annoncé des exercices de grande ampleur autour de Taïwan.
The Eastern Theater Command named the drills Strait Thunder. | Le commandement du théâtre oriental a baptisé les exercices Strait Thunder.
The drills simulated a blockade of major ports. | Les exercices simulaient un blocus des principaux ports.
Coast guard ships practiced boarding and inspection. | Des navires garde-côtes se sont entraînés à l'arraisonnement et à l'inspection.
In 2022, missiles were fired over Taiwan. | En 2022, des missiles ont été tirés au-dessus de Taïwan.
Some missiles landed in Japan's exclusive economic zone. | Certains missiles sont tombés dans la zone économique exclusive du Japon.
The drills followed the president's inauguration. | Les exercices ont suivi l'investiture du président.
Large-scale drills are becoming routine. | Les exercices de grande ampleur deviennent routiniers.
Routine drills shorten warning time. | Les exercices routiniers raccourcissent le délai d'alerte.
An exercise could turn into an attack with little warning. | Un exercice pourrait se transformer en attaque presque sans préavis.
Intelligence agencies watch for unusual signs. | Les services de renseignement guettent les signes inhabituels.
The drills are a form of political signaling. | Les exercices sont une forme de signal politique.
The message is aimed at both Taipei and Washington. | Le message s'adresse à la fois à Taipei et à Washington.
Taiwan responded calmly and monitored the situation. | Taïwan a réagi avec calme et a surveillé la situation.
The defense ministry set up a response center. | Le ministère de la Défense a mis en place un centre de réponse.
Our ships shadowed their warships. | Nos navires ont suivi leurs navires de guerre.
Han Kuang now includes unscripted drills. | Han Kuang comprend désormais des exercices sans scénario préétabli.
In 2025, Han Kuang ran for ten days, around the clock. | En 2025, Han Kuang a duré dix jours, 24 heures sur 24.
Realistic training reveals real weaknesses. | Un entraînement réaliste révèle de vraies faiblesses.
The after-action review matters as much as the drill itself. | Le retour d'expérience compte autant que l'exercice lui-même.
RIMPAC is held every two years near Hawaii. | RIMPAC a lieu tous les deux ans près d'Hawaï.
Taiwan has not been invited to RIMPAC. | Taïwan n'a pas été invitée à RIMPAC.
Multinational exercises build trust among allies. | Les exercices multinationaux renforcent la confiance entre alliés.
Allied navies sail through the strait from time to time. | Les marines alliées traversent le détroit de temps en temps.
Joint drills send a message of deterrence. | Les exercices conjoints envoient un message de dissuasion.
Exercises are diplomacy by other means. | Les exercices sont la diplomatie par d'autres moyens.
Each side watches the other's drills closely. | Chaque camp surveille de près les exercices de l'autre.
A miscalculation during a drill could be dangerous. | Une erreur de calcul pendant un exercice pourrait être dangereuse.
Close encounters at sea raise the risk of accidents. | Les rencontres rapprochées en mer augmentent le risque d'accidents.
Clear communication channels help prevent a crisis. | Des canaux de communication clairs aident à éviter une crise.
Taiwan's civil defense handbook tells people how to prepare for disasters and military threats. | Le manuel de défense civile de Taïwan explique comment se préparer aux catastrophes et aux menaces militaires.
Whole-of-society resilience means every citizen has a role. | La résilience de toute la société signifie que chaque citoyen a un rôle.
The urban resilience exercise combines air raid drills with disaster response. | L'exercice de résilience urbaine associe alertes aériennes et réponse aux catastrophes.
An attack on critical infrastructure could cause a grid failure. | Une attaque contre les infrastructures critiques pourrait provoquer une panne du réseau électrique.
In 2023, cut undersea cables left Matsu with slow internet for weeks. | En 2023, des câbles sous-marins coupés ont laissé Matsu avec un internet lent pendant des semaines.
Satellite internet can serve as a backup for communications. | L'internet par satellite peut servir de solution de secours pour les communications.
Taiwan imports almost all of its energy. | Taïwan importe presque toute son énergie.
LNG reserves would run out quickly in a blockade. | Les réserves de GNL s'épuiseraient vite en cas de blocus.
Food self-sufficiency is a national security issue. | L'autosuffisance alimentaire est une question de sécurité nationale.
Panic buying makes shortages worse. | Les achats de panique aggravent les pénuries.
Buy a little extra each week instead of hoarding. | Achète un peu plus chaque semaine au lieu de faire des stocks massifs.
Cognitive warfare aims to make people give up before a fight. | La guerre cognitive vise à faire abandonner les gens avant même le combat.
Calm, informed citizens are hard to manipulate. | Des citoyens calmes et informés sont difficiles à manipuler.
Situational awareness is the most important thing you carry. | La vigilance est la chose la plus importante que tu emportes.
Massive bleeding can kill in minutes, before an ambulance arrives. | Une hémorragie massive peut tuer en quelques minutes, avant l'arrivée d'une ambulance.
Apply a tourniquet high and tight on the limb. | Pose un garrot haut et serré sur le membre.
Pack deep wounds with hemostatic gauze. | Bourre les plaies profondes avec une compresse hémostatique.
A chest seal treats an open chest wound. | Un pansement thoracique traite une plaie ouverte du thorax.
Keep a trauma kit in your car and at work. | Garde une trousse de traumatologie dans ta voiture et au travail.
Most experts say to bug in unless your home is unsafe. | La plupart des experts conseillent de rester chez soi sauf si la maison n'est pas sûre.
Your bug-out bag should be light enough to carry for hours. | Ton sac d'évacuation doit être assez léger pour être porté pendant des heures.
Two is one, one is none. Always have a backup. | Deux, c'est un ; un, c'est zéro. Aie toujours une solution de secours.
Redundancy matters most for light, water and communication. | La redondance compte surtout pour l'éclairage, l'eau et la communication.
Neighborhood mutual aid is faster than any government response. | L'entraide de voisinage est plus rapide que n'importe quelle réponse du gouvernement.
The village chief keeps a list of residents who need help. | Le chef de quartier tient une liste des habitants qui ont besoin d'aide.
Check on vulnerable groups, such as the elderly and people with disabilities. | Prends des nouvelles des personnes vulnérables, comme les personnes âgées et les personnes handicapées.
Civil defense volunteers help run shelters and distribute supplies. | Les bénévoles de la défense civile aident à gérer les abris et à distribuer les provisions.
Businesses need continuity of operations plans. | Les entreprises ont besoin de plans de continuité d'activité.
Self-reliance buys time until help arrives. | L'autonomie fait gagner du temps jusqu'à l'arrivée des secours.
Preparation is a form of deterrence. | La préparation est une forme de dissuasion.
`,
});
