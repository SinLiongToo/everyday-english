// 法文對照（Français）：交通事故
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
addFrench("accident", {
  words: `
accident | l'accident | Il y a eu un accident.
car accident | l'accident de voiture | J'ai vu un accident de voiture.
crash | se percuter ; l'accident | Les deux voitures se sont percutées.
hit | heurter ; percuter | Une voiture a heurté mon scooter.
scooter | le scooter | Je vais au travail en scooter.
motorcycle | la moto | Sa moto est tombée.
bike | le vélo | Elle est tombée de vélo.
car | la voiture | Ma voiture est abîmée.
truck | le camion | Un camion a tourné à droite.
bus | le bus | Le bus a freiné brusquement.
taxi | le taxi | Le taxi a percuté un poteau.
driver | le conducteur | Le conducteur va bien.
rider | le motard ; le conducteur de deux-roues | Le motard a été blessé.
pedestrian | le piéton | Un piéton traversait.
hurt | blessé ; avoir mal | Tu es blessé ?
injured | blessé | Deux personnes ont été blessées.
bleeding | saigner | Il saigne.
pain | la douleur | J'ai mal au cou.
broken arm | le bras cassé | Elle a le bras cassé.
scratch | l'égratignure ; la rayure | Ce n'est qu'une égratignure.
bruise | le bleu ; l'hématome | J'ai un gros bleu.
ambulance | l'ambulance | Appelez une ambulance !
police | la police | Appelle la police.
police officer | le policier | Le policier a posé des questions.
110 | le 110 (police à Taïwan) | Appelle le 110 pour la police.
119 | le 119 (secours à Taïwan) | Appelle le 119 pour une ambulance.
hospital | l'hôpital | Emmène-le à l'hôpital.
help | au secours ; l'aide | Au secours !
okay | ça va ; indemne | Ça va ?
stop | arrêter | Arrête la voiture !
brake | le frein ; freiner | J'ai pilé sur les freins.
slow down | ralentir | Ralentis !
fast | vite | Il roulait trop vite.
speed | la vitesse | Vous rouliez à quelle vitesse ?
red light | le feu rouge | Ne grille jamais un feu rouge.
green light | le feu vert | J'avais le feu vert.
traffic light | le feu de circulation | Le feu de circulation était en panne.
crosswalk | le passage piéton | Elle était sur le passage piéton.
intersection | le carrefour | C'est arrivé au carrefour.
corner | le virage ; le coin | La voiture est arrivée du coin de la rue.
lane | la voie | Il a changé de voie brusquement.
road | la route | La route était encombrée.
rain | la pluie | Il pleuvait fort.
wet | mouillé | La route était mouillée.
slippery | glissant | La route est glissante.
night | la nuit | C'était tard dans la nuit.
dark | sombre | La rue était sombre.
helmet | le casque | Porte toujours un casque.
seat belt | la ceinture de sécurité | Attache ta ceinture de sécurité.
license | le permis de conduire | Montrez-moi votre permis.
ID | la pièce d'identité | Vous avez une pièce d'identité ?
phone number | le numéro de téléphone | Échangeons nos numéros de téléphone.
name | le nom | Comment vous appelez-vous ?
photo | la photo | Prends une photo.
picture | la photo | Prends des photos des deux voitures.
witness | le témoin | Il y avait un témoin ?
see | voir | Vous avez vu ce qui s'est passé ?
fault | la faute | Ce n'était pas ma faute.
sorry | désolé | Je suis vraiment désolé.
careful | prudent | Sois prudent quand tu traverses.
cross | traverser | Regarde des deux côtés avant de traverser.
side | le bord ; le côté | Mets-toi sur le bord.
move | bouger ; déplacer | Ne le déplacez pas.
damage | les dégâts | Il y a des dégâts ?
dent | la bosse | Il y a une bosse sur la portière.
bumper | le pare-chocs | Le pare-chocs est tombé.
mirror | le rétroviseur | Le rétroviseur est cassé.
window | la vitre | La vitre a volé en éclats.
tire | le pneu | Le pneu est crevé.
fix | réparer | Ça coûte combien à réparer ?
pay | payer | Qui va payer ?
money | l'argent | Il veut de l'argent.
insurance | l'assurance | Vous êtes assuré ?
garage | le garage | Emmène la voiture au garage.
tow truck | la dépanneuse | Il nous faut une dépanneuse.
traffic jam | l'embouteillage | L'accident a provoqué un embouteillage.
horn | le klaxon | Il a donné un coup de klaxon.
honk | klaxonner | Ne klaxonne pas.
turn left | tourner à gauche | La voiture a essayé de tourner à gauche.
turn right | tourner à droite | Regarde avant de tourner à droite.
back up | reculer ; faire marche arrière | Ne recule pas si vite.
park | se garer | Ne te gare pas ici.
door | la portière | Il a ouvert sa portière sans regarder.
drunk | ivre | Le conducteur était ivre.
phone | le téléphone | N'utilise pas ton téléphone en conduisant.
tired | fatigué | Ne conduis pas quand tu es fatigué.
dangerous | dangereux | Ce virage est dangereux.
scared | effrayé ; avoir peur | J'ai eu tellement peur.
shock | le choc | Elle est en état de choc.
calm down | se calmer | Calmez-vous, tout le monde.
blood | le sang | Il a du sang sur le visage.
first aid | les premiers secours | Tu connais les premiers secours ?
fall | tomber | Fais attention à ne pas tomber.
slip | glisser | Ne glisse pas sur la route mouillée.
knee | le genou | J'ai mal au genou.
head | la tête | Tu t'es cogné la tête ?
lucky | chanceux | Tu as de la chance d'être en vie.
wait | attendre | Attendez la police.
stay | rester | Restez ici, s'il vous plaît.
safe | en sécurité | Mets-toi en sécurité.
`,
  phrases: `
Are you okay? | Ça va ?
Are you hurt? | Vous êtes blessé ?
I'm okay. | Ça va.
I think I'm fine. | Je crois que ça va.
My leg hurts. | J'ai mal à la jambe.
I can't move my arm. | Je ne peux pas bouger le bras.
I hit my head. | Je me suis cogné la tête.
He's bleeding! | Il saigne !
Don't move. | Ne bougez pas.
Stay still. | Restez immobile.
Don't move him. | Ne le déplacez pas.
Call an ambulance! | Appelez une ambulance !
Call 119! | Appelez le 119 !
Call the police! | Appelez la police !
I'll call 110. | J'appelle le 110.
Help is on the way. | Les secours arrivent.
The ambulance is coming. | L'ambulance arrive.
Stay with me. | Restez avec moi.
Can you hear me? | Vous m'entendez ?
What's your name? | Comment vous appelez-vous ?
Is anyone else hurt? | Quelqu'un d'autre est blessé ?
Everyone, stay calm. | Gardez tous votre calme.
Turn off the engine. | Coupez le moteur.
Get off the road. | Sortez de la route.
Move to the sidewalk. | Allez sur le trottoir.
Watch out for cars! | Attention aux voitures !
What happened? | Qu'est-ce qui s'est passé ?
A car hit me. | Une voiture m'a percuté.
He hit me from behind. | Il m'a percuté par l'arrière.
I didn't see him. | Je ne l'ai pas vu.
He came out of nowhere. | Il est sorti de nulle part.
He ran the red light. | Il a grillé le feu rouge.
I had a green light. | J'avais le feu vert.
He was going too fast. | Il roulait trop vite.
She turned without looking. | Elle a tourné sans regarder.
It happened so fast. | Tout s'est passé si vite.
It wasn't my fault. | Ce n'était pas ma faute.
It was my fault. | C'était ma faute.
I'm so sorry. | Je suis vraiment désolé.
Did you see what happened? | Vous avez vu ce qui s'est passé ?
I saw everything. | J'ai tout vu.
Can you be a witness? | Vous pouvez être témoin ?
Can I have your phone number? | Je peux avoir votre numéro de téléphone ?
Take pictures of everything. | Prends tout en photo.
Take a photo of his license plate. | Prends sa plaque d'immatriculation en photo.
Don't leave yet. | Ne partez pas encore.
Wait for the police. | Attendez la police.
He drove away! | Il s'est enfui !
Did you get the plate number? | Vous avez relevé le numéro de plaque ?
My scooter is damaged. | Mon scooter est abîmé.
My car has a big dent. | Ma voiture a une grosse bosse.
The mirror is broken. | Le rétroviseur est cassé.
The bumper fell off. | Le pare-chocs est tombé.
My helmet saved me. | Mon casque m'a sauvé la vie.
Always wear your helmet. | Porte toujours ton casque.
Wear your seat belt. | Attache ta ceinture.
Look both ways. | Regarde des deux côtés.
Wait for the green light. | Attends le feu vert.
Use the crosswalk. | Prends le passage piéton.
Slow down! | Ralentis !
Don't drive so fast. | Ne roule pas si vite.
Don't use your phone while driving. | N'utilise pas ton téléphone en conduisant.
Don't drink and drive. | Ne bois pas si tu conduis.
The road is slippery. | La route est glissante.
Be careful in the rain. | Sois prudent sous la pluie.
It's dark. Turn on your lights. | Il fait nuit. Allume tes phares.
There's a lot of traffic today. | Il y a beaucoup de circulation aujourd'hui.
There's an accident ahead. | Il y a un accident devant.
That's why there's a traffic jam. | C'est pour ça qu'il y a un bouchon.
We need a tow truck. | Il nous faut une dépanneuse.
Can you still ride it? | Tu peux encore rouler avec ?
It won't start. | Il ne démarre pas.
I need to go to the hospital. | Je dois aller à l'hôpital.
I'll take you to the hospital. | Je t'emmène à l'hôpital.
Do you have insurance? | Vous êtes assuré ?
Here's my driver's license. | Voici mon permis de conduire.
Who's going to pay? | Qui va payer ?
Let's wait for the police to decide. | Attendons que la police décide.
I'm shaking. | Je tremble.
I was so scared. | J'ai eu tellement peur.
You're lucky you weren't hurt. | Tu as de la chance de ne pas être blessé.
It could have been much worse. | Ça aurait pu être bien pire.
Take a deep breath. | Respire profondément.
Sit down for a minute. | Assieds-toi une minute.
Drink some water. | Bois un peu d'eau.
Call your family. | Appelle ta famille.
I'll stay with you. | Je reste avec toi.
Thank you for stopping. | Merci de vous être arrêté.
Thank you for your help. | Merci pour votre aide.
Get well soon. | Bon rétablissement.
I'm not going to ride a scooter for a while. | Je ne vais pas remonter sur un scooter de sitôt.
Drive safely. | Conduis prudemment.
Ride safely. | Roule prudemment.
Get home safe. | Rentre bien.
Safety first. | La sécurité avant tout.
Don't rush. | Ne te précipite pas.
It's better to be late than sorry. | Mieux vaut arriver en retard que ne jamais arriver.
Accidents happen in a second. | Un accident arrive en une seconde.
Be careful out there. | Sois prudent.
Text me when you get home. | Envoie-moi un message quand tu es rentré.
`
});

// ---------- 中級 Intermediate ----------
addFrench("accident", {
  words: `
fender bender | l'accrochage | Ce n'était qu'un accrochage.
rear-end | emboutir par l'arrière | Un taxi m'a embouti par l'arrière.
sideswipe | accrocher latéralement | Un bus a accroché mon scooter sur le côté.
head-on collision | la collision frontale | Une collision frontale est très dangereuse.
collision | la collision | La collision a eu lieu à midi.
hit-and-run | le délit de fuite | C'était un délit de fuite.
flee the scene | prendre la fuite | Ne prends jamais la fuite.
accident scene | le lieu de l'accident | Ne quitte pas le lieu de l'accident.
warning triangle | le triangle de signalisation | Place un triangle de signalisation derrière la voiture.
hazard lights | les feux de détresse | Allume tes feux de détresse.
mark the position | marquer la position | Marque la position de chaque roue avant de déplacer la voiture.
move the vehicles | déplacer les véhicules | Si personne n'est blessé, prends des photos et déplace les véhicules.
dashcam | la caméra embarquée ; la dashcam | Ma caméra embarquée a tout enregistré.
footage | les images ; l'enregistrement | Je peux voir les images de ta caméra embarquée ?
security camera | la caméra de surveillance | Une caméra de surveillance a filmé l'accident.
license plate | la plaque d'immatriculation | Note la plaque d'immatriculation.
vehicle registration | la carte grise | Montrez votre carte grise.
driver's license | le permis de conduire | Il n'a pas de permis de conduire.
statement | la déposition | La police a pris ma déposition.
police report | le procès-verbal | Demande une copie du procès-verbal.
accident report | le rapport d'accident | Le rapport d'accident prend quelques semaines.
sketch | le croquis | La police a fait un croquis des lieux.
liability | la responsabilité | Qui est responsable ?
at fault | en tort ; fautif | L'autre conducteur était en tort.
right of way | la priorité | Les piétons ont la priorité.
yield | céder le passage | Les voitures doivent céder le passage aux piétons.
run a red light | griller un feu rouge | Ne grille jamais un feu rouge.
speeding | l'excès de vitesse | Les excès de vitesse causent beaucoup d'accidents.
speed camera | le radar | Il y a un radar plus loin.
tailgate | coller ; ne pas respecter les distances | Ne colle pas la voiture de devant.
blind spot | l'angle mort | Le scooter était dans mon angle mort.
rearview mirror | le rétroviseur | Regarde dans ton rétroviseur.
signal | mettre son clignotant | Mets ton clignotant avant de tourner.
turn signal | le clignotant | Il n'a pas mis son clignotant.
U-turn | le demi-tour | Les demi-tours interdits causent des accidents.
lane change | le changement de voie | Un changement de voie brusque a causé l'accident.
scooter lane | la voie réservée aux deux-roues | Reste sur la voie réservée aux deux-roues.
two-stage left turn | le virage à gauche en deux temps | Ici, les scooters doivent tourner à gauche en deux temps.
waiting zone | la zone d'attente des deux-roues | Attends dans la zone d'attente des deux-roues.
traffic police | la police de la route | La police de la route est arrivée rapidement.
traffic ticket | la contravention ; le PV | Il a eu une contravention.
fine | l'amende | L'amende était lourde.
penalty points | les points de permis | On perd des points de permis pour les infractions graves.
drunk driving | la conduite en état d'ivresse | La conduite en état d'ivresse est un délit.
breathalyzer | l'éthylotest | La police a utilisé un éthylotest.
sobriety test | le contrôle d'alcoolémie | Il a refusé le contrôle d'alcoolémie.
distracted driving | la conduite distraite | La conduite distraite tue.
fatigue | la fatigue | La fatigue ralentit les réflexes.
whiplash | le coup du lapin | J'ai eu le coup du lapin.
concussion | la commotion cérébrale | Il a peut-être une commotion cérébrale.
fracture | la fracture | La radio a montré une fracture.
emergency room | les urgences | Ils l'ont emmenée aux urgences.
paramedic | l'ambulancier ; le secouriste | Les ambulanciers l'ont examiné.
stretcher | le brancard | Ils l'ont porté sur un brancard.
medical certificate | le certificat médical | Demande un certificat médical au médecin.
medical bills | les frais médicaux | Garde toutes tes factures de frais médicaux.
compulsory insurance | l'assurance obligatoire | L'assurance obligatoire couvre les blessures.
third-party liability insurance | l'assurance responsabilité civile | L'assurance responsabilité civile paie les dégâts causés aux autres.
comprehensive insurance | l'assurance tous risques | L'assurance tous risques couvre ta propre voiture.
insurance company | la compagnie d'assurance | Appelle ta compagnie d'assurance.
claim | la déclaration de sinistre | J'ai fait une déclaration de sinistre.
adjuster | l'expert | L'expert va examiner les dégâts.
deductible | la franchise | La franchise est de 3 000 dollars.
repair estimate | le devis de réparation | Demande un devis de réparation.
body shop | le carrossier | Le carrossier va réparer la bosse.
paint job | la peinture | La peinture coûte en plus.
total loss | l'épave ; le véhicule économiquement irréparable | La voiture est économiquement irréparable.
rental car | le véhicule de remplacement | L'assurance a pris en charge un véhicule de remplacement.
towing fee | les frais de remorquage | Les frais de remorquage étaient chers.
settlement | l'arrangement ; l'accord | Nous sommes parvenus à un accord.
settle | s'arranger ; régler à l'amiable | Réglons ça à l'amiable.
compensation | l'indemnisation | Il a demandé une indemnisation.
negotiate | négocier | Nous avons négocié avec son assureur.
apologize | s'excuser | Il s'est excusé sur place.
admit fault | reconnaître sa faute | Ne reconnais pas ta faute sur place.
exchange information | échanger ses coordonnées | Échange tes coordonnées avec l'autre conducteur.
contact information | les coordonnées | Prends leurs coordonnées.
skid marks | les traces de freinage | Les traces de freinage étaient longues.
debris | les débris | Des débris couvraient la route.
pothole | le nid-de-poule | Un nid-de-poule a causé la chute.
road conditions | l'état de la route | L'état de la route était mauvais.
visibility | la visibilité | La visibilité était mauvaise.
oncoming traffic | la circulation en sens inverse | Il a fait un écart vers la circulation en sens inverse.
swerve | faire une embardée ; donner un coup de volant | J'ai donné un coup de volant pour éviter un chien.
skid | déraper | La voiture a dérapé sur la route mouillée.
lose control | perdre le contrôle | La vitesse peut te faire perdre le contrôle.
roll over | faire un tonneau | Le camion pourrait faire un tonneau dans ce virage.
airbag | l'airbag | L'airbag s'est déclenché.
child seat | le siège auto pour enfant | Utilise un siège auto pour enfant.
jaywalk | traverser en dehors des passages piétons | Ne traverse pas en dehors des passages piétons.
pedestrian crossing | le passage piéton | Arrête-toi au passage piéton.
school zone | la zone scolaire | Ralentis dans une zone scolaire.
reckless driving | la conduite dangereuse | La conduite dangereuse est sévèrement punie.
road rage | la rage au volant | La rage au volant mène à des bagarres.
witness statement | le témoignage | Nous avons un témoignage.
traffic accident | l'accident de la route | Il y a des accidents de la route tous les jours.
uninsured | non assuré | L'autre conducteur n'était pas assuré.
traffic cone | le cône de signalisation | Place des cônes de signalisation autour des lieux.
tow-away zone | la zone de mise en fourrière | C'est une zone de mise en fourrière.
police station | le commissariat | Va au commissariat pour obtenir le procès-verbal.
accidents happen | ça peut arriver à tout le monde | Ne t'inquiète pas, ça peut arriver à tout le monde.
a close call | il était moins une | Avec ce camion, il était moins une.
a near miss | l'accident évité de justesse | Nous avons évité un accident de justesse au passage.
better safe than sorry | mieux vaut prévenir que guérir | Attache ta ceinture. Mieux vaut prévenir que guérir.
in one piece | sain et sauf | Dieu merci, tu es rentré sain et sauf.
shaken up | secoué | Elle n'était pas blessée, mais secouée.
out of the blue | sans crier gare ; de nulle part | Le scooter est arrivé sans crier gare.
in the nick of time | juste à temps | Il a freiné juste à temps.
an accident waiting to happen | un accident en puissance | Ce virage est un accident en puissance.
slip of the tongue | le lapsus | Désolé, c'était un lapsus.
by accident | par accident ; sans le faire exprès | J'ai rayé la voiture sans le faire exprès.
`,
  phrases: `
It was just a fender bender. | Ce n'était qu'un accrochage.
A taxi rear-ended me at the light. | Un taxi m'a embouti par l'arrière au feu.
A bus sideswiped my scooter. | Un bus a accroché mon scooter sur le côté.
Turn on your hazard lights. | Allume tes feux de détresse.
Put the warning triangle behind the car. | Place le triangle de signalisation derrière la voiture.
On the freeway, put it farther back. | Sur l'autoroute, place-le plus loin.
Is anyone injured? | Quelqu'un est blessé ?
If no one is hurt, we should move the cars. | Si personne n'est blessé, on devrait déplacer les voitures.
Take photos first, then move to the side. | Prends d'abord des photos, puis range-toi sur le côté.
Mark where the wheels are. | Marque l'emplacement des roues.
Photograph the scene from several angles. | Photographie les lieux sous plusieurs angles.
Get the license plates in the pictures. | Fais apparaître les plaques d'immatriculation sur les photos.
Does your dashcam work? | Ta caméra embarquée fonctionne ?
Save the dashcam footage right away. | Sauvegarde tout de suite les images de la caméra embarquée.
Footage gets overwritten quickly. | Les images sont vite écrasées.
Ask the shop if their security camera caught it. | Demande au magasin si sa caméra de surveillance l'a filmé.
Let's exchange information. | Échangeons nos coordonnées.
Can I see your license and registration? | Je peux voir votre permis et votre carte grise ?
What insurance company are you with? | Vous êtes assuré chez qui ?
Don't admit fault at the scene. | Ne reconnais pas ta faute sur place.
Let the police handle it. | Laisse la police s'en occuper.
The police will take statements from both of us. | La police va prendre nos deux dépositions.
Tell them exactly what happened. | Raconte-leur exactement ce qui s'est passé.
Don't guess. Say only what you know. | Ne devine pas. Dis seulement ce que tu sais.
Ask the officer for the case number. | Demande le numéro de dossier au policier.
You can get the accident report later. | Tu pourras obtenir le rapport d'accident plus tard.
He was changing lanes without signaling. | Il changeait de voie sans mettre son clignotant.
I was in his blind spot. | J'étais dans son angle mort.
The truck turned right and nearly hit me. | Le camion a tourné à droite et a failli me percuter.
Stay away from big trucks when they turn. | Tiens-toi à l'écart des gros camions quand ils tournent.
The car door opened right in front of me. | La portière s'est ouverte juste devant moi.
Check behind you before opening the door. | Regarde derrière toi avant d'ouvrir la portière.
Scooters must make a two-stage left turn here. | Ici, les scooters doivent tourner à gauche en deux temps.
Pedestrians have the right of way. | Les piétons ont la priorité.
Cars must stop for pedestrians in the crosswalk. | Les voitures doivent s'arrêter pour les piétons sur le passage.
He got a ticket for not yielding. | Il a eu une amende pour refus de priorité.
He was speeding in a school zone. | Il roulait trop vite dans une zone scolaire.
The police gave him a breathalyzer test. | La police lui a fait passer un éthylotest.
He was over the limit. | Il dépassait le taux autorisé.
Drunk driving is a criminal offense. | La conduite en état d'ivresse est un délit pénal.
He refused the test, so the penalty is even heavier. | Il a refusé le contrôle, donc la sanction est encore plus lourde.
Distracted driving is just as dangerous. | La conduite distraite est tout aussi dangereuse.
I think I have whiplash. | Je crois que j'ai eu le coup du lapin.
My neck is stiff. | J'ai le cou raide.
The pain started the next day. | La douleur a commencé le lendemain.
Go to the ER and get checked. | Va aux urgences te faire examiner.
Ask for a medical certificate. | Demande un certificat médical.
Keep all the receipts for your medical bills. | Garde tous les reçus de tes frais médicaux.
Compulsory insurance covers your medical costs. | L'assurance obligatoire couvre tes frais médicaux.
Call your insurance company as soon as possible. | Appelle ton assurance le plus vite possible.
Report the accident within the deadline. | Déclare l'accident dans les délais.
An adjuster will contact you. | Un expert va te contacter.
Get a repair estimate from the body shop. | Demande un devis de réparation au carrossier.
Is the car a total loss? | La voiture est-elle économiquement irréparable ?
My insurance doesn't cover my own car. | Mon assurance ne couvre pas ma propre voiture.
I only have third-party liability. | Je suis seulement assuré au tiers.
There's a deductible of 5,000 dollars. | Il y a une franchise de 5 000 dollars.
Can my insurance cover a rental car? | Mon assurance peut-elle prendre en charge un véhicule de remplacement ?
The towing fee is on me. | Les frais de remorquage sont pour moi.
He wants to settle privately. | Il veut s'arranger à l'amiable.
Be careful with private settlements. | Méfie-toi des arrangements à l'amiable.
Get everything in writing. | Mets tout par écrit.
How much compensation are you asking for? | Combien demandez-vous d'indemnisation ?
That's way too much. | C'est beaucoup trop.
Let's let the insurance companies negotiate. | Laissons les assurances négocier.
He apologized and offered to pay for the repair. | Il s'est excusé et a proposé de payer la réparation.
We exchanged LINE accounts. | Nous avons échangé nos comptes LINE.
He stopped answering my messages. | Il ne répond plus à mes messages.
I'll file a report at the police station. | Je vais porter plainte au commissariat.
It was a hit-and-run. | C'était un délit de fuite.
Hit-and-run is a serious crime. | Le délit de fuite est une infraction grave.
The police found him through the security cameras. | La police l'a retrouvé grâce aux caméras de surveillance.
He didn't have insurance. | Il n'était pas assuré.
The skid marks show he was going fast. | Les traces de freinage montrent qu'il roulait vite.
The road was full of potholes. | La route était pleine de nids-de-poule.
You can report dangerous roads to 1999. | Tu peux signaler les routes dangereuses au 1999.
Visibility was terrible in the heavy rain. | La visibilité était terrible sous la pluie battante.
He swerved to avoid a dog. | Il a donné un coup de volant pour éviter un chien.
The car skidded and rolled over. | La voiture a dérapé et a fait un tonneau.
The airbags went off. | Les airbags se sont déclenchés.
Keep a safe distance. | Garde une distance de sécurité.
Don't tailgate. | Ne colle pas.
Check your mirrors before you change lanes. | Regarde dans tes rétroviseurs avant de changer de voie.
Use your turn signal every time. | Mets ton clignotant à chaque fois.
Never make a U-turn here. | Ne fais jamais demi-tour ici.
There's a speed camera ahead. | Il y a un radar plus loin.
Speed cameras are everywhere now. | Il y a des radars partout maintenant.
Road rage never helps. | La rage au volant n'arrange jamais rien.
Don't get out and argue. | Ne sors pas pour te disputer.
Lock your doors and call the police. | Verrouille les portières et appelle la police.
Delivery riders are always in a hurry. | Les livreurs sont toujours pressés.
The rush hour is the most dangerous time. | L'heure de pointe est le moment le plus dangereux.
Fatigue is as dangerous as drinking. | La fatigue est aussi dangereuse que l'alcool.
Pull over and rest if you're sleepy. | Arrête-toi pour te reposer si tu as sommeil.
Take a break every two hours. | Fais une pause toutes les deux heures.
Make sure your kids are in child seats. | Assure-toi que tes enfants sont dans des sièges auto.
Back-seat passengers must wear seat belts too. | Les passagers arrière doivent aussi attacher leur ceinture.
I'll never forget that day. | Je n'oublierai jamais ce jour-là.
It was a wake-up call for me. | Ça m'a servi d'électrochoc.
Now I always ride more carefully. | Maintenant, je roule toujours plus prudemment.
`
});

// ---------- 高級 Advanced ----------
addFrench("accident", {
  words: `
preliminary analysis report | le rapport d'analyse préliminaire | Vous pouvez demander le rapport d'analyse préliminaire après trente jours.
accident appraisal | l'expertise de l'accident | Demande une expertise de l'accident si tu n'es pas d'accord.
appraisal committee | la commission d'expertise | La commission d'expertise a examiné les images.
reappraisal | la contre-expertise | Vous pouvez demander une contre-expertise.
mediation committee | la commission de médiation | La commission de médiation du district traite gratuitement les affaires de circulation.
mediation | la médiation | La médiation est plus rapide qu'un procès.
civil claim | l'action civile | Il a intenté une action civile en dommages et intérêts.
criminal complaint | la plainte pénale | Elle a déposé une plainte pénale.
negligent injury | les blessures involontaires | Il a été poursuivi pour blessures involontaires.
negligent homicide | l'homicide involontaire | L'homicide involontaire peut mener à la prison.
statute of limitations | le délai de prescription | Attention au délai de prescription.
contributory negligence | la faute partagée | Le tribunal a retenu une faute partagée.
apportionment of fault | le partage des responsabilités | Le partage des responsabilités était de 70 contre 30.
pain and suffering | le préjudice moral | Il a réclamé des dommages pour préjudice moral.
loss of income | la perte de revenus | Vous pouvez réclamer la perte de revenus.
lost earning capacity | l'incapacité de travail | L'incapacité de travail est difficile à calculer.
disability rating | le taux d'invalidité | Le taux d'invalidité influe sur l'indemnisation.
rehabilitation | la rééducation | La rééducation a duré six mois.
physical therapy | la kinésithérapie | Elle a besoin de kinésithérapie deux fois par semaine.
diminished value | la dépréciation du véhicule | La dépréciation du véhicule est souvent oubliée.
subrogation | la subrogation | L'assureur a exercé un recours par subrogation.
indemnity | l'indemnité | Le contrat prévoit une indemnité jusqu'à un plafond.
coverage limit | le plafond de garantie | Vérifie ton plafond de garantie.
policyholder | l'assuré | L'assuré doit déclarer l'accident rapidement.
lawyer | l'avocat | Parle à un avocat avant de signer.
legal aid | l'aide juridictionnelle | L'aide juridictionnelle est accessible aux victimes à faibles revenus.
waiver | la renonciation | Ne signe pas de renonciation trop tôt.
settlement agreement | la transaction ; l'accord transactionnel | Lis attentivement l'accord transactionnel.
installment payment | le paiement échelonné | Nous nous sommes mis d'accord sur un paiement échelonné.
forensic reconstruction | la reconstitution de l'accident | La reconstitution de l'accident a montré sa vitesse.
event data recorder | l'enregistreur de données d'accident | L'enregistreur de données d'accident a gardé la vitesse avant l'impact.
impact | l'impact ; le choc | Le choc l'a projeté de son scooter.
point of impact | le point d'impact | Marque le point d'impact.
braking distance | la distance de freinage | La distance de freinage est bien plus longue sur route mouillée.
reaction time | le temps de réaction | Le temps de réaction augmente avec la fatigue.
inner wheel difference | le déport des roues arrière | Reste loin des camions qui tournent à cause du déport des roues arrière.
blind spot detection | la détection d'angle mort | La détection d'angle mort signale les scooters.
ADAS | les aides à la conduite (ADAS) | Les ADAS peuvent freiner automatiquement.
automatic emergency braking | le freinage d'urgence automatique | Le freinage d'urgence automatique évite beaucoup de collisions par l'arrière.
lane departure warning | l'alerte de franchissement de ligne | L'alerte de franchissement de ligne bipe quand tu dévies.
autonomous driving | la conduite autonome | Qui est responsable quand la conduite autonome échoue ?
pedestrian hell | l'enfer des piétons | La presse étrangère a un jour qualifié Taïwan d'enfer des piétons.
pedestrian safety | la sécurité des piétons | La sécurité des piétons est devenue un enjeu national.
road safety | la sécurité routière | La sécurité routière passe par un meilleur aménagement.
traffic fatalities | la mortalité routière | La mortalité routière à Taïwan est élevée pour un pays développé.
road design | l'aménagement routier | Un mauvais aménagement routier cause des accidents.
traffic calming | l'apaisement de la circulation | L'apaisement de la circulation fait ralentir les voitures près des écoles.
speed bump | le dos-d'âne ; le ralentisseur | Ajoute un ralentisseur.
sidewalk | le trottoir | Beaucoup de rues n'ont pas de trottoir.
arcade | la galerie couverte ; les arcades | Les scooters bloquent souvent les arcades.
curb extension | l'avancée de trottoir | Une avancée de trottoir raccourcit la traversée.
pedestrian refuge island | le refuge pour piétons ; l'îlot central | Un refuge pour piétons aide les personnes âgées à traverser.
leading pedestrian interval | le feu piéton anticipé | Un feu piéton anticipé donne de l'avance aux piétons.
Vision Zero | la Vision zéro | La Vision zéro vise zéro mort sur les routes.
traffic enforcement | les contrôles routiers | Des contrôles routiers renforcés sauvent des vies.
citizen reporting | le signalement citoyen | Le signalement citoyen des infractions est courant à Taïwan.
traffic violation | l'infraction au code de la route | Il a commis de nombreuses infractions au code de la route.
license suspension | la suspension de permis | La conduite en état d'ivresse entraîne une suspension de permis.
license revocation | l'annulation du permis | Les récidivistes risquent l'annulation du permis.
ignition interlock | l'éthylotest antidémarrage | Certains conducteurs ivres doivent installer un éthylotest antidémarrage.
blood alcohol | le taux d'alcoolémie | Même un faible taux d'alcoolémie ralentit les réflexes.
zero tolerance | la tolérance zéro | Le gouvernement a promis la tolérance zéro contre l'alcool au volant.
driver education | la formation des conducteurs | Une meilleure formation des conducteurs réduit les accidents.
driving test | l'examen du permis | Beaucoup trouvent l'examen du permis trop facile.
elderly driver | le conducteur âgé | Les conducteurs âgés de 75 ans et plus doivent renouveler régulièrement leur permis.
heavy vehicle | le poids lourd | Les poids lourds ont de grands angles morts.
delivery rider | le livreur | Les livreurs sont sous pression.
occupational accident | l'accident du travail | Un accident pendant le travail compte comme un accident du travail.
commuting accident | l'accident de trajet | L'assurance travail couvre les accidents de trajet.
trauma | le traumatisme | Le traumatisme a duré longtemps après l'accident.
PTSD | le trouble de stress post-traumatique (TSPT) | Certaines victimes développent un trouble de stress post-traumatique.
victim support | l'aide aux victimes | Les associations d'aide aux victimes proposent un soutien psychologique.
fatal accident | l'accident mortel | Un accident mortel a fermé l'autoroute.
mass casualty | les nombreuses victimes | L'accident de bus a fait de nombreuses victimes.
pile-up | le carambolage | Le brouillard a causé un carambolage de 20 voitures.
black spot | le point noir | Ce carrefour est un point noir de la circulation.
near miss | l'accident évité de justesse | C'était un accident évité de justesse.
defensive driving | la conduite défensive | La conduite défensive part du principe que les autres feront des erreurs.
following distance | la distance de sécurité | Garde une distance de sécurité suffisante.
three-second rule | la règle des trois secondes | Applique la règle des trois secondes.
hydroplaning | l'aquaplaning | Des pneus usés augmentent le risque d'aquaplaning.
tread depth | la profondeur des sculptures | Vérifie la profondeur des sculptures de tes pneus.
recall | le rappel | Les airbags faisaient partie d'un rappel.
manufacturer defect | le défaut de fabrication | Un défaut de fabrication a causé la défaillance des freins.
product liability | la responsabilité du fait des produits | Les recours en responsabilité du fait des produits visent le fabricant.
insurance fraud | la fraude à l'assurance | Les faux accidents sont une fraude à l'assurance.
staged accident | le faux accident | La police a démantelé un réseau de faux accidents.
vulnerable road users | les usagers vulnérables | Les piétons et les cyclistes sont des usagers vulnérables.
helmet law | l'obligation du port du casque | À Taïwan, l'obligation du port du casque s'applique à tous les conducteurs de scooter.
seat belt law | l'obligation du port de la ceinture | L'obligation du port de la ceinture concerne aussi les passagers arrière.
dashcam evidence | les images de caméra embarquée comme preuve | Les images de la caméra embarquée ont tranché l'affaire.
burden of proof | la charge de la preuve | La charge de la preuve incombe au demandeur.
plaintiff | le demandeur ; le plaignant | Le demandeur a réclamé deux millions de dollars.
defendant | le défendeur ; le prévenu | Le prévenu a reconnu sa faute.
court ruling | le jugement | Le jugement a partagé les torts.
appeal | faire appel | Il compte faire appel.
suspended sentence | la peine avec sursis | Il a été condamné à une peine avec sursis.
community service | les travaux d'intérêt général | Le juge a ordonné des travaux d'intérêt général.
punitive damages | les dommages et intérêts punitifs | Les dommages et intérêts punitifs sont rares dans les affaires de circulation.
expert witness | l'expert judiciaire | L'expert judiciaire a expliqué les traces de freinage.
a wake-up call | un électrochoc ; une sonnette d'alarme | L'accident a été un électrochoc pour moi.
dodge a bullet | l'échapper belle | Eh bien, tu l'as échappé belle.
add insult to injury | pour couronner le tout | Pour couronner le tout, j'ai aussi eu une amende.
the blame game | se renvoyer la balle | Arrêtons de nous renvoyer la balle.
pass the buck | refiler la responsabilité | Ne refile pas la responsabilité à l'autre conducteur.
own up | avouer ; reconnaître | Tu devrais reconnaître que tu as heurté la voiture.
cool your heels | faire le pied de grue | Tu vas devoir faire le pied de grue jusqu'à l'arrivée de la police.
rubbernecking | le ralentissement des curieux | Le ralentissement des curieux a créé un long bouchon.
wreak havoc | faire des ravages | Les tempêtes peuvent faire des ravages sur les routes.
by the skin of your teeth | de justesse | Tu t'en es sorti de justesse.
throw caution to the wind | jeter toute prudence aux orties | Ne jette pas toute prudence aux orties en scooter.
come to a head | atteindre un point critique | Les choses vont atteindre un point critique à la réunion.
a recipe for disaster | la recette du désastre | Écrire des messages en conduisant, c'est la recette du désastre.
in the blink of an eye | en un clin d'œil | C'est arrivé en un clin d'œil.
lucky escape | l'échapper belle | Les passagers l'ont échappé belle.
`,
  phrases: `
Wait for the preliminary analysis report before you settle. | Attends le rapport d'analyse préliminaire avant de transiger.
You can apply for it thirty days after the accident. | Tu peux le demander trente jours après l'accident.
If you disagree, apply for an accident appraisal. | Si tu n'es pas d'accord, demande une expertise de l'accident.
The appraisal committee will review the evidence. | La commission d'expertise examinera les preuves.
You can request a reappraisal if you still disagree. | Tu peux demander une contre-expertise si tu n'es toujours pas d'accord.
The district office offers free mediation. | La mairie de district propose une médiation gratuite.
A mediation agreement approved by the court is legally binding. | Un accord de médiation homologué par le tribunal a force exécutoire.
If mediation fails, you can go to court. | Si la médiation échoue, tu peux aller en justice.
Negligent injury is only prosecuted if the victim files a complaint. | Les blessures involontaires ne sont poursuivies que si la victime porte plainte.
You have six months to file a criminal complaint. | Tu as six mois pour déposer une plainte pénale.
The civil claim has a two-year limit from when you knew the damage. | L'action civile se prescrit par deux ans à compter de la connaissance du dommage.
Don't miss the deadlines. | Ne laisse pas passer les délais.
Talk to a lawyer before you sign anything. | Parle à un avocat avant de signer quoi que ce soit.
Legal aid is available if you can't afford a lawyer. | L'aide juridictionnelle existe si tu n'as pas les moyens de payer un avocat.
Read the settlement agreement carefully. | Lis attentivement l'accord transactionnel.
Once you sign, you usually can't claim more. | Une fois signé, on ne peut généralement plus rien réclamer.
Make sure it covers future medical costs. | Assure-toi qu'il couvre les frais médicaux futurs.
Some injuries show up weeks later. | Certaines blessures n'apparaissent que des semaines plus tard.
Claim for medical costs, lost income and pain and suffering. | Réclame les frais médicaux, la perte de revenus et le préjudice moral.
Lost income needs proof from your employer. | La perte de revenus doit être justifiée par l'employeur.
A disability rating affects the compensation. | Le taux d'invalidité influe sur l'indemnisation.
Rehabilitation can take months. | La rééducation peut prendre des mois.
Keep a diary of your symptoms. | Tiens un journal de tes symptômes.
The court found contributory negligence. | Le tribunal a retenu une faute partagée.
The fault was split seventy-thirty. | Les torts ont été partagés à soixante-dix contre trente.
Even if he ran the light, you were speeding. | Même s'il a grillé le feu, tu roulais trop vite.
That reduces your compensation. | Ça réduit ton indemnisation.
Dashcam evidence often decides the case. | Les images de caméra embarquée tranchent souvent l'affaire.
Event data recorders store the speed before impact. | Les enregistreurs de données gardent la vitesse avant l'impact.
Accident reconstruction can estimate the speed. | La reconstitution de l'accident permet d'estimer la vitesse.
Braking distance increases sharply on wet roads. | La distance de freinage augmente fortement sur route mouillée.
At high speed, reaction time matters even more. | À grande vitesse, le temps de réaction compte encore plus.
The insurer will pursue subrogation against the other driver. | L'assureur exercera un recours subrogatoire contre l'autre conducteur.
Diminished value is rarely compensated in full. | La dépréciation du véhicule est rarement indemnisée en totalité.
Staged accidents are a known insurance scam. | Les faux accidents sont une arnaque à l'assurance bien connue.
Be careful if a driver suddenly brakes in front of you. | Méfie-toi si un conducteur freine brusquement devant toi.
Foreign media once called Taiwan a pedestrian hell. | La presse étrangère a un jour qualifié Taïwan d'enfer des piétons.
It became a national debate. | C'est devenu un débat national.
The government promised to improve pedestrian safety. | Le gouvernement a promis d'améliorer la sécurité des piétons.
Many streets still have no proper sidewalks. | Beaucoup de rues n'ont toujours pas de vrais trottoirs.
Pedestrians have to walk in the road. | Les piétons doivent marcher sur la chaussée.
Scooters parked in arcades block the way. | Les scooters garés sous les arcades bloquent le passage.
Road design matters more than slogans. | L'aménagement routier compte plus que les slogans.
Curb extensions shorten the distance to cross. | Les avancées de trottoir raccourcissent la traversée.
Refuge islands help elderly pedestrians. | Les refuges pour piétons aident les personnes âgées.
A leading pedestrian interval gives walkers a head start. | Un feu piéton anticipé donne de l'avance aux piétons.
Traffic calming slows cars in neighborhoods. | L'apaisement de la circulation fait ralentir les voitures dans les quartiers.
Vision Zero says no traffic death is acceptable. | Selon la Vision zéro, aucun mort sur la route n'est acceptable.
Traffic deaths in Taiwan are high for a rich country. | La mortalité routière à Taïwan est élevée pour un pays riche.
Most victims are scooter riders. | La plupart des victimes sont des conducteurs de scooter.
Elderly pedestrians are especially vulnerable. | Les piétons âgés sont particulièrement vulnérables.
Heavy vehicles are involved in many fatal crashes. | Les poids lourds sont impliqués dans beaucoup d'accidents mortels.
The inner wheel difference of a turning truck is deadly. | Le déport des roues arrière d'un camion qui tourne est mortel.
Blind spot detection should be standard on trucks. | La détection d'angle mort devrait être de série sur les camions.
Automatic emergency braking prevents many crashes. | Le freinage d'urgence automatique évite beaucoup d'accidents.
Driver assistance isn't the same as self-driving. | L'aide à la conduite, ce n'est pas la conduite autonome.
Who is liable when autonomous driving fails? | Qui est responsable quand la conduite autonome échoue ?
The law hasn't caught up with technology. | La loi n'a pas rattrapé la technologie.
Penalties for drunk driving have been raised several times. | Les sanctions contre l'alcool au volant ont été alourdies plusieurs fois.
Repeat offenders may have to install an ignition interlock. | Les récidivistes peuvent être obligés d'installer un éthylotest antidémarrage.
Passengers can be fined for riding with a drunk driver. | Les passagers peuvent être verbalisés s'ils montent avec un conducteur ivre.
Elderly drivers must renew their license more often. | Les conducteurs âgés doivent renouveler leur permis plus souvent.
Driving tests used to be far too easy. | L'examen du permis était autrefois bien trop facile.
Driver education should focus on real road risks. | La formation des conducteurs devrait porter sur les vrais risques de la route.
Citizen reporting has changed driver behavior. | Le signalement citoyen a changé le comportement des conducteurs.
Some say it's turned into a reporting frenzy. | Certains disent que c'est devenu une frénésie de délation.
Enforcement works best when it's consistent. | Les contrôles sont plus efficaces quand ils sont constants.
Delivery platforms push riders to rush. | Les plateformes de livraison poussent les livreurs à se presser.
Who's responsible when a delivery rider crashes? | Qui est responsable quand un livreur a un accident ?
A crash on the way to work may count as an occupational accident. | Un accident sur le chemin du travail peut compter comme accident du travail.
Labor insurance covers commuting accidents. | L'assurance travail couvre les accidents de trajet.
Keep your route reasonable and direct. | Prends un itinéraire raisonnable et direct.
Victims often suffer from trauma long after the crash. | Les victimes souffrent souvent d'un traumatisme longtemps après l'accident.
Some develop PTSD and fear riding again. | Certaines développent un TSPT et ont peur de reprendre la route.
Counseling should be part of recovery. | Le soutien psychologique devrait faire partie de la guérison.
Victim support centers can help with legal steps. | Les centres d'aide aux victimes peuvent aider dans les démarches juridiques.
A fatal accident changes families forever. | Un accident mortel bouleverse une famille pour toujours.
The driver was charged with negligent homicide. | Le conducteur a été poursuivi pour homicide involontaire.
He received a suspended sentence and paid compensation. | Il a été condamné avec sursis et a versé une indemnisation.
The family felt justice wasn't served. | La famille a eu le sentiment que justice n'avait pas été rendue.
Punishment alone won't make roads safer. | La sanction seule ne rendra pas les routes plus sûres.
Safer design saves more lives than harsher laws. | Un aménagement plus sûr sauve plus de vies que des lois plus sévères.
Defensive driving assumes others will make mistakes. | La conduite défensive part du principe que les autres feront des erreurs.
Keep a three-second following distance. | Garde trois secondes de distance avec le véhicule devant.
Worn tires increase the risk of hydroplaning. | Les pneus usés augmentent le risque d'aquaplaning.
Check your tread depth before typhoon season. | Vérifie l'usure de tes pneus avant la saison des typhons.
Check whether your car is part of a recall. | Vérifie si ta voiture fait l'objet d'un rappel.
A manufacturer defect may shift liability to the maker. | Un défaut de fabrication peut faire porter la responsabilité au fabricant.
This intersection is an accident black spot. | Ce carrefour est un point noir.
Residents have petitioned for a traffic light for years. | Les habitants réclament un feu depuis des années.
Near misses are warnings we should take seriously. | Les accidents évités de justesse sont des avertissements à prendre au sérieux.
Road safety is everyone's responsibility. | La sécurité routière est l'affaire de tous.
Slow down; nothing is that urgent. | Ralentis : rien n'est si urgent.
Every life lost is one too many. | Chaque vie perdue est une vie de trop.
Arrive alive. | Arrivez vivants.
The best accident is the one that never happens. | Le meilleur accident est celui qui n'arrive jamais.
Ride as if everyone else can't see you. | Roule comme si personne ne te voyait.
Drive as if your family is in the crosswalk. | Conduis comme si ta famille était sur le passage piéton.
Speed limits exist for a reason. | Les limitations de vitesse existent pour une bonne raison.
A few seconds saved is never worth a life. | Quelques secondes gagnées ne valent jamais une vie.
`
});
