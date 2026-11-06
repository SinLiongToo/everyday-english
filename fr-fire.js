// 法文對照（Français）：消防安全
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
addFrench("fire", {
  words: `
fire | le feu ; l'incendie | L'incendie s'est propagé très vite.
smoke | la fumée | Je sens de la fumée.
flame | la flamme | Les flammes étaient très hautes.
firefighter | le pompier | Le pompier a sauvé le chat.
fire truck | le camion de pompiers | Un camion de pompiers arrive.
fire station | la caserne de pompiers | La caserne de pompiers est près de mon école.
call 119 | appeler le 119 | Appelle le 119 tout de suite !
alarm | l'alarme | L'alarme sonne.
smoke alarm | le détecteur de fumée | Testez votre détecteur de fumée chaque mois.
fire extinguisher | l'extincteur | Où est l'extincteur ?
exit | la sortie | Trouvez la sortie la plus proche.
emergency exit | la sortie de secours | Ne bloquez pas la sortie de secours.
stairs | l'escalier | Prenez l'escalier, pas l'ascenseur.
elevator | l'ascenseur | Ne prenez jamais l'ascenseur pendant un incendie.
escape | s'échapper ; évacuer | Nous devons sortir maintenant.
hot | chaud ; brûlant | La porte est brûlante. Ne l'ouvre pas.
burn | brûler ; la brûlure | Fais attention, tu vas te brûler la main.
match | l'allumette | Gardez les allumettes hors de portée des enfants.
lighter | le briquet | Les enfants ne doivent pas jouer avec un briquet.
candle | la bougie | Ne laissez jamais une bougie allumée sans surveillance.
stove | la cuisinière ; le feu | Éteins la cuisinière.
gas | le gaz | Ça sent le gaz !
cigarette | la cigarette | Éteins ta cigarette.
ash | la cendre | La maison a été réduite en cendres.
water | l'eau | Ne versez pas d'eau sur un feu d'huile.
hose | le tuyau ; la lance à incendie | Les pompiers ont déroulé un tuyau.
ladder | l'échelle | Le camion de pompiers a une grande échelle.
helmet | le casque | Les pompiers portent un casque.
siren | la sirène | J'ai entendu une sirène dehors.
danger | le danger | Danger ! Défense d'entrer.
dangerous | dangereux | La fumée est très dangereuse.
safe | en sécurité | Nous sommes en sécurité maintenant.
safety | la sécurité | La sécurité incendie est importante.
help | au secours ; l'aide | Au secours ! Au feu !
shout | crier | Criez « Au feu ! » pour prévenir les autres.
crawl | ramper | Rampez sous la fumée.
stay low | rester baissé | Reste baissé et continue d'avancer.
towel | la serviette | Mettez une serviette mouillée sous la porte.
door | la porte | Ferme la porte derrière toi.
window | la fenêtre | Fais des signes depuis la fenêtre.
balcony | le balcon | Va sur le balcon et attends les secours.
outside | dehors | Sortez vite dehors.
meeting point | le point de rassemblement | Notre point de rassemblement est le parc.
fire drill | l'exercice d'évacuation | L'école a fait un exercice d'évacuation.
ambulance | l'ambulance | Une ambulance l'a emmené à l'hôpital.
injured | blessé | Y a-t-il des blessés ?
trapped | coincé ; piégé | Un homme est coincé à l'intérieur.
rescue | le sauvetage | Le sauvetage a duré deux heures.
save | sauver | Les pompiers ont sauvé la famille.
cough | tousser | La fumée m'a fait tousser.
breathe | respirer | On a du mal à respirer ici.
mask | le masque | Les pompiers portent un masque.
plug | la prise (mâle) ; la fiche | Débranche la prise.
socket | la prise de courant | Ne branchez pas trop d'appareils sur une seule prise.
cord | le fil électrique ; le cordon | Le fil est abîmé.
heater | le radiateur ; le chauffage d'appoint | Éloignez le radiateur des rideaux.
curtain | le rideau | Le rideau a pris feu.
kitchen | la cuisine | Beaucoup d'incendies domestiques commencent dans la cuisine.
cooking | la cuisson | Ne laissez jamais une cuisson sans surveillance.
oil | l'huile | L'huile dans la poêle est trop chaude.
pan | la poêle | La poêle a pris feu.
lid | le couvercle | Mets le couvercle sur la poêle.
blanket | la couverture | Utilisez une couverture anti-feu.
sand | le sable | Jetez du sable sur le feu.
bucket | le seau | Remplis le seau d'eau.
spark | l'étincelle | Une étincelle a déclenché l'incendie.
firework | le feu d'artifice ; le pétard | Les pétards peuvent provoquer des incendies.
incense | l'encens | Surveille bien l'encens.
paper money | le papier-monnaie rituel | Brûlez le papier-monnaie rituel dans une boîte en métal.
battery | la batterie ; la pile | La batterie a chauffé et a pris feu.
phone charger | le chargeur de téléphone | Débranche le chargeur de téléphone la nuit.
scooter | le scooter | Un scooter électrique a pris feu.
garbage | les ordures ; les déchets | N'entassez pas d'ordures dans l'escalier.
hallway | le couloir | Laissez le couloir dégagé.
neighbor | le voisin | Frappe à la porte de ton voisin.
floor | l'étage | Le feu est au cinquième étage.
building | l'immeuble ; le bâtiment | Tout le monde a quitté l'immeuble.
apartment | l'appartement | Mon appartement a un détecteur de fumée.
fire hydrant | la bouche d'incendie | Ne te gare pas à côté d'une bouche d'incendie.
sprinkler | le sprinkleur ; l'extincteur automatique | Le sprinkleur s'est déclenché.
fire door | la porte coupe-feu | Gardez la porte coupe-feu fermée.
exit sign | le panneau de sortie | Suivez le panneau de sortie vert.
flashlight | la lampe de poche | Gardez une lampe de poche près de votre lit.
calm | calme | Restez calme.
emergency | l'urgence | C'est une urgence !
wait | attendre | Attendez les pompiers.
address | l'adresse | Donnez-leur votre adresse.
smell | sentir | Tu sens quelque chose qui brûle ?
put out | éteindre | Éteignez le feu.
on fire | en feu | La voiture est en feu !
catch fire | prendre feu | Le papier prend feu facilement.
smoky | enfumé | La pièce est très enfumée.
dark | sombre ; noir | Il fait noir et enfumé à l'intérieur.
gloves | les gants | Portez des gants épais.
boots | les bottes | Les pompiers portent de lourdes bottes.
uniform | l'uniforme ; la tenue | La tenue protège de la chaleur.
brave | courageux | Les pompiers sont courageux.
hero | le héros | C'est un vrai héros.
practice | s'entraîner ; répéter | Entraînez-vous à votre plan d'évacuation.
plan | le plan | Chaque famille a besoin d'un plan d'évacuation en cas d'incendie.
`,
  phrases: `
Fire! Fire! | Au feu ! Au feu !
Call 119! | Appelle le 119 !
Get out now! | Sortez tout de suite !
Everybody out! | Tout le monde dehors !
Don't use the elevator. | Ne prenez pas l'ascenseur.
Use the stairs. | Prenez l'escalier.
Stay low. | Restez baissés.
Crawl under the smoke. | Rampez sous la fumée.
Cover your nose and mouth. | Couvrez-vous le nez et la bouche.
Don't go back inside. | Ne retournez pas à l'intérieur.
Where is the nearest exit? | Où est la sortie la plus proche ?
Follow the exit signs. | Suivez les panneaux de sortie.
Is anyone still inside? | Il y a encore quelqu'un à l'intérieur ?
My son is still inside! | Mon fils est encore à l'intérieur !
Help! I'm trapped! | Au secours ! Je suis coincé !
I'm on the fifth floor. | Je suis au cinquième étage.
Please hurry! | Faites vite, s'il vous plaît !
Stay calm. | Restez calme.
Don't panic. | Pas de panique.
I smell smoke. | Je sens de la fumée.
Something is burning. | Quelque chose brûle.
I smell gas. | Ça sent le gaz.
Don't turn on the lights. | N'allumez pas la lumière.
Open the windows. | Ouvrez les fenêtres.
Turn off the stove. | Éteins le feu de la cuisinière.
Turn off the gas. | Coupe le gaz.
The pan is on fire! | La poêle est en feu !
Put the lid on it! | Mets le couvercle dessus !
Don't use water! | Pas d'eau !
Where's the fire extinguisher? | Où est l'extincteur ?
Pull the pin. | Tirez la goupille.
Aim at the base of the fire. | Visez la base des flammes.
Squeeze the handle. | Appuyez sur la poignée.
The smoke alarm is beeping. | Le détecteur de fumée bipe.
The battery is low. | La pile est faible.
Change the battery. | Change la pile.
Test it once a month. | Testez-le une fois par mois.
Is the fire alarm real? | C'est une vraie alarme incendie ?
It's just a drill. | Ce n'est qu'un exercice.
This is not a drill! | Ce n'est pas un exercice !
Line up, please. | Mettez-vous en rang, s'il vous plaît.
Walk, don't run. | Marchez, ne courez pas.
Don't push. | Ne poussez pas.
Meet at the park. | Rendez-vous au parc.
Is everyone here? | Tout le monde est là ?
Let's count heads. | Comptons-nous.
Someone is missing. | Il manque quelqu'un.
The firefighters are here. | Les pompiers sont là.
I hear sirens. | J'entends des sirènes.
The fire truck is here. | Le camion de pompiers est arrivé.
Please move your car. | Déplacez votre voiture, s'il vous plaît.
Don't block the fire hydrant. | Ne bloquez pas la bouche d'incendie.
Keep the stairs clear. | Laissez l'escalier dégagé.
Don't park scooters in the hallway. | Ne garez pas de scooters dans le couloir.
Close the door behind you. | Fermez la porte derrière vous.
The door is hot. | La porte est brûlante.
Don't open it! | Ne l'ouvrez pas !
Stay in the room. | Restez dans la pièce.
Put a wet towel under the door. | Mettez une serviette mouillée sous la porte.
Wave something bright from the window. | Agitez quelque chose de voyant à la fenêtre.
Shout for help. | Appelez au secours.
I can't breathe. | Je n'arrive pas à respirer.
He's coughing a lot. | Il tousse beaucoup.
Are you hurt? | Vous êtes blessé ?
My hand is burned. | Je me suis brûlé la main.
Run it under cold water. | Passe-la sous l'eau froide.
Don't put ice on it. | Ne mets pas de glace dessus.
Call an ambulance. | Appelez une ambulance.
Thank you for saving us. | Merci de nous avoir sauvés.
The fire is out. | Le feu est éteint.
The house is badly damaged. | La maison est très endommagée.
Where will we sleep tonight? | Où allons-nous dormir ce soir ?
Don't smoke in bed. | Ne fume pas au lit.
Put out your cigarette. | Éteins ta cigarette.
Don't leave candles burning. | Ne laisse pas de bougies allumées.
Blow out the candle. | Souffle la bougie.
Keep matches away from children. | Rangez les allumettes hors de portée des enfants.
Don't play with fire. | Ne joue pas avec le feu.
Unplug it before you go out. | Débranche-le avant de sortir.
Don't charge your phone on the bed. | Ne charge pas ton téléphone sur le lit.
The charger is very hot. | Le chargeur est très chaud.
Don't plug in too many things. | Ne branche pas trop d'appareils.
This cord is broken. | Ce fil est abîmé.
Keep the heater away from the curtains. | Éloigne le radiateur des rideaux.
Never leave the stove on. | Ne laisse jamais le feu allumé.
Stay in the kitchen when you cook. | Reste dans la cuisine quand tu cuisines.
Watch the incense. | Surveille l'encens.
Burn paper money in a metal bucket. | Brûle le papier-monnaie dans un seau en métal.
Be careful with fireworks. | Fais attention avec les pétards.
Do you have a smoke alarm at home? | Tu as un détecteur de fumée chez toi ?
Where do we meet if there's a fire? | Où se retrouve-t-on en cas d'incendie ?
Let's practice our escape plan. | Répétons notre plan d'évacuation.
Know two ways out. | Connaissez deux issues.
Keep a flashlight by your bed. | Garde une lampe de poche près de ton lit.
Firefighters are heroes. | Les pompiers sont des héros.
Thank you for your hard work. | Merci pour votre travail.
Is it safe to go back in? | On peut rentrer sans danger ?
Not yet. Please wait here. | Pas encore. Attendez ici, s'il vous plaît.
What's your address? | Quelle est votre adresse ?
The fire is in my kitchen. | Le feu est dans ma cuisine.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("fire", {
  words: `
evacuate | évacuer | Veuillez évacuer le bâtiment.
evacuation route | l'itinéraire d'évacuation | Vérifiez l'itinéraire d'évacuation sur le plan.
escape plan | le plan d'évacuation | Faites un plan d'évacuation pour la maison.
smoke inhalation | l'inhalation de fumée | Beaucoup de victimes d'incendie meurent d'inhalation de fumée.
carbon monoxide | le monoxyde de carbone | Le monoxyde de carbone n'a pas d'odeur.
toxic fumes | les fumées toxiques | Le plastique qui brûle dégage des fumées toxiques.
heat detector | le détecteur de chaleur | Les cuisines utilisent souvent un détecteur de chaleur.
smoke detector | le détecteur de fumée | Le détecteur de fumée bipe quand la pile est faible.
fire alarm system | le système d'alarme incendie | Le système d'alarme incendie s'est déclenché à trois heures du matin.
false alarm | la fausse alerte | Ne t'inquiète pas, c'est une fausse alerte.
dry powder extinguisher | l'extincteur à poudre | La plupart des foyers ont un extincteur à poudre.
pressure gauge | le manomètre | L'aiguille du manomètre doit être dans la zone verte.
safety pin | la goupille de sécurité | Tirez d'abord la goupille de sécurité.
nozzle | la buse ; la lance | Dirigez la buse vers la base des flammes.
base of the fire | la base des flammes | Visez toujours la base des flammes.
squeeze | presser ; appuyer sur | Appuyez fermement sur la poignée.
sweep | balayer | Balayez de gauche à droite.
expiry date | la date de péremption | Vérifiez la date de péremption de votre extincteur.
grease fire | le feu de graisse ; le feu d'huile | N'utilisez jamais d'eau sur un feu d'huile.
electrical fire | l'incendie d'origine électrique | Coupez le courant avant de combattre un incendie électrique.
short circuit | le court-circuit | Un court-circuit a provoqué l'incendie.
overloaded | surchargé | La multiprise était surchargée.
power strip | la multiprise | Remplacez les vieilles multiprises.
lithium battery | la batterie au lithium | Une batterie au lithium gonflée présente un risque d'incendie.
swollen | gonflé | La batterie du téléphone est gonflée.
overheating | la surchauffe | Le chargeur est en surchauffe.
flammable | inflammable | Gardez les liquides inflammables dehors.
combustible | combustible | Le bois est combustible.
gas leak | la fuite de gaz | En cas de fuite de gaz, ouvrez les fenêtres.
gas valve | le robinet de gaz | Fermez le robinet de gaz.
light switch | l'interrupteur | Ne touchez à aucun interrupteur.
open flame | la flamme nue | Pas de flamme nue dans l'entrepôt.
stairwell | la cage d'escalier | La fumée a envahi la cage d'escalier.
fire exit | l'issue de secours | L'issue de secours était fermée à clé.
emergency lighting | l'éclairage de secours | L'éclairage de secours s'est allumé.
blocked | bloqué ; encombré | L'escalier était bloqué par des scooters.
clutter | le bric-à-brac ; l'encombrement | Débarrassez le couloir de tout ce bric-à-brac.
door handle | la poignée de porte | Touchez la poignée de porte avec le dos de la main.
seal | calfeutrer ; boucher | Bouchez les fentes avec des serviettes mouillées.
gap | la fente ; l'interstice | La fumée est entrée par la fente sous la porte.
shelter in place | se confiner sur place | Si le couloir est plein de fumée, restez confiné sur place.
close the door | fermer la porte | Fermez la porte pour arrêter la fumée.
stop, drop and roll | s'arrêter, se coucher et se rouler par terre | Si vos vêtements prennent feu, arrêtez-vous, couchez-vous et roulez-vous par terre.
first aid | les premiers secours | Apprenez les gestes de premiers secours.
cool the burn | refroidir la brûlure | Refroidissez la brûlure sous l'eau courante pendant 15 minutes.
blister | l'ampoule ; la cloque | Ne perce pas la cloque.
second-degree burn | la brûlure au deuxième degré | Elle avait une brûlure au deuxième degré au bras.
rescue team | l'équipe de secours | L'équipe de secours est arrivée en cinq minutes.
volunteer firefighter | le pompier volontaire | Mon oncle est pompier volontaire.
paramedic | l'ambulancier ; le secouriste | Un secouriste a vérifié sa respiration.
dispatcher | l'opérateur ; le régulateur | L'opérateur m'a demandé mon adresse.
arson | l'incendie criminel | La police soupçonne un incendie criminel.
cause of the fire | la cause de l'incendie | La cause de l'incendie est encore inconnue.
investigate | enquêter | Ils vont enquêter sur l'incendie.
spread | se propager | Le feu s'est propagé à la maison voisine.
extinguish | éteindre ; maîtriser | Ils ont éteint l'incendie en une heure.
contain | circonscrire ; contenir | L'incendie a été circonscrit vers minuit.
under control | maîtrisé | L'incendie est maîtrisé.
ember | la braise ; la flammèche | Des braises brûlantes volaient dans l'air.
fire hose | la lance à incendie ; le tuyau d'incendie | Ils ont raccordé le tuyau d'incendie à la bouche.
aerial ladder truck | le camion grande échelle | Le camion grande échelle a atteint le dixième étage.
fire lane | la voie pompiers ; la voie d'accès des secours | Ne vous garez pas sur la voie pompiers.
red curb | la bordure rouge (stationnement interdit) | Se garer le long d'une bordure rouge peut bloquer les camions de pompiers.
descent device | le dispositif de descente ; l'évacuateur à descente lente | Apprenez à utiliser le dispositif de descente.
escape ladder | l'échelle de secours | Gardez une échelle de secours au dernier étage.
rooftop | le toit-terrasse | Ne montez pas sur le toit-terrasse sauf si l'escalier en dessous est bloqué.
iron bars | les barreaux | Les barreaux aux fenêtres peuvent piéger les gens.
rooftop addition | la construction ajoutée sur le toit | La construction illégale ajoutée sur le toit a brûlé.
fire-resistant | ignifugé ; résistant au feu | Utilisez des rideaux ignifugés.
fire safety inspection | le contrôle de sécurité incendie | Le restaurant n'a pas passé le contrôle de sécurité incendie.
fine | l'amende | Le propriétaire a dû payer une amende.
building manager | le gardien ; le gestionnaire de l'immeuble | Signalez l'alarme en panne au gardien.
renovation | les travaux de rénovation | Les soudures pendant les travaux peuvent déclencher un incendie.
welding | la soudure | Des étincelles de soudure ont touché la mousse.
foam | la mousse | La mousse brûle très vite.
mosquito coil | le serpentin anti-moustiques | Éloignez le serpentin anti-moustiques du papier.
space heater | le radiateur d'appoint | Éteignez le radiateur d'appoint quand vous dormez.
dryer | le sèche-linge | Nettoyez le filtre du sèche-linge.
lint | les peluches ; la bourre | Les peluches sont très inflammables.
unattended | sans surveillance | Ne laissez jamais une cuisinière allumée sans surveillance.
fire risk | le risque d'incendie | Les vieux câblages présentent un risque d'incendie.
fire hazard | le danger d'incendie | Cette pile de cartons est un danger d'incendie.
wildfire | le feu de forêt ; l'incendie de végétation | Le feu de forêt a détruit des milliers de maisons.
forest fire | l'incendie de forêt | Les incendies de forêt sont fréquents en saison sèche.
burn mark | la trace de brûlure | Il y a des traces de brûlure sur le mur.
charred | calciné | Le bâtiment calciné est dangereux.
collapse | s'effondrer | Le toit pourrait s'effondrer.
victim | la victime | Aucune victime n'a été retrouvée à l'intérieur.
casualties | les victimes ; le bilan humain | Il n'y a eu aucune victime.
oxygen | l'oxygène | Le feu a besoin d'oxygène.
fire triangle | le triangle du feu | Le triangle du feu, c'est la chaleur, le combustible et l'oxygène.
fuel | le combustible | Retirez le combustible et le feu s'éteint.
smoke hood | la cagoule anti-fumée | Certains hôtels fournissent une cagoule anti-fumée.
fire blanket | la couverture anti-feu | Jetez une couverture anti-feu sur la poêle.
emergency kit | le kit d'urgence | Gardez un kit d'urgence près de la porte.
whistle | le sifflet | Sifflez pour que les secours vous trouvent.
wave | agiter ; faire signe | Agitez un tissu voyant à la fenêtre.
hotel room | la chambre d'hôtel | Repérez les sorties en entrant dans une chambre d'hôtel.
temperature | la température | La température à l'intérieur peut atteindre plusieurs centaines de degrés.
fire safety | la sécurité incendie | La sécurité incendie commence à la maison.
where there's smoke, there's fire | il n'y a pas de fumée sans feu | Il n'y a pas de fumée sans feu.
play with fire | jouer avec le feu | Ne joue pas avec le feu.
fight fire with fire | combattre le feu par le feu | Parfois, il faut combattre le feu par le feu.
add fuel to the fire | jeter de l'huile sur le feu | N'en rajoute pas, ne jette pas d'huile sur le feu.
go up in smoke | partir en fumée | Nos projets pourraient partir en fumée.
under fire | sous le feu des critiques | L'entreprise est sous le feu des critiques pour des problèmes de sécurité.
hold your fire | ne pas tirer trop vite ; retenir ses critiques | Retiens tes critiques jusqu'à ce que tu connaisses les faits.
fire away | vas-y, je t'écoute | Des questions ? Allez-y, je vous écoute.
burn the midnight oil | travailler tard dans la nuit | Les étudiants travaillent tard dans la nuit avant les examens.
smoke and mirrors | de la poudre aux yeux | Ce plan, c'est de la poudre aux yeux.
too hot to handle | trop brûlant ; trop délicat | Le sujet était trop brûlant.
fired up | survolté ; très motivé | Les supporters sont survoltés.
get burned | se brûler les ailes ; se faire avoir | Fais attention, ou tu vas te brûler les ailes.
light a fire under someone | secouer quelqu'un ; mettre la pression à quelqu'un | Une échéance, ça secoue les gens.
`,
  phrases: `
Small fire? Get out fast. Thick smoke? Close the door. | Petit feu ? Sortez vite. Fumée épaisse ? Fermez la porte.
Smoke kills more people than flames. | La fumée tue plus que les flammes.
You only have a few minutes to escape. | Vous n'avez que quelques minutes pour sortir.
Feel the door with the back of your hand. | Touchez la porte avec le dos de la main.
If the door is hot, don't open it. | Si la porte est chaude, ne l'ouvrez pas.
If the hallway is full of smoke, stay in your room. | Si le couloir est enfumé, restez dans votre chambre.
Close the door and seal the gaps. | Fermez la porte et bouchez les fentes.
Go to a room with a window and call 119. | Allez dans une pièce avec une fenêtre et appelez le 119.
Tell them your address, floor and room. | Donnez votre adresse, l'étage et la pièce.
Don't hide in the bathroom. | Ne vous cachez pas dans la salle de bains.
Don't run up to the roof. | Ne montez pas sur le toit.
Smoke rises faster than you can climb. | La fumée monte plus vite que vous.
Always go down, not up, if you can. | Si possible, descendez toujours, ne montez pas.
Hold the handrail and keep low. | Tenez la rampe et restez baissé.
Don't stop to take your things. | Ne vous arrêtez pas pour prendre vos affaires.
Never go back into a burning building. | Ne retournez jamais dans un bâtiment en feu.
If your clothes catch fire, stop, drop and roll. | Si vos vêtements prennent feu, arrêtez-vous, couchez-vous et roulez-vous par terre.
Pull the pin, aim, squeeze and sweep. | Tirez la goupille, visez, pressez et balayez.
Stand upwind, about two meters away. | Placez-vous dos au vent, à environ deux mètres.
Check the pressure gauge every month. | Vérifiez le manomètre tous les mois.
The needle should be in the green zone. | L'aiguille doit être dans la zone verte.
Our extinguisher has expired. | Notre extincteur est périmé.
Fire extinguishers only work on small fires. | Les extincteurs ne servent que pour les petits feux.
Keep a fire extinguisher in the kitchen. | Gardez un extincteur dans la cuisine.
If the fire is bigger than you, get out. | Si le feu est plus grand que vous, sortez.
Never pour water on a grease fire. | Ne versez jamais d'eau sur un feu d'huile.
Turn off the heat and cover the pan. | Coupez le feu et couvrez la poêle.
Leave the lid on until it cools down. | Laissez le couvercle jusqu'à ce que ça refroidisse.
Cut the power before you fight an electrical fire. | Coupez le courant avant de combattre un feu électrique.
If you smell gas, don't touch any switches. | Si ça sent le gaz, ne touchez à aucun interrupteur.
Don't use your phone inside. Go out first. | N'utilisez pas votre téléphone à l'intérieur. Sortez d'abord.
Turn off the gas valve and open the windows. | Fermez le robinet de gaz et ouvrez les fenêtres.
Never install an outdoor gas water heater indoors. | N'installez jamais un chauffe-eau à gaz d'extérieur à l'intérieur.
Carbon monoxide has no color and no smell. | Le monoxyde de carbone est incolore et inodore.
Install a carbon monoxide alarm. | Installez un détecteur de monoxyde de carbone.
Every bedroom should have a smoke alarm. | Chaque chambre devrait avoir un détecteur de fumée.
Don't take the battery out of the alarm. | N'enlevez pas la pile du détecteur.
The smoke detector keeps going off when I cook. | Le détecteur de fumée se déclenche dès que je cuisine.
It was a false alarm. | C'était une fausse alerte.
Our building has a fire drill next week. | Notre immeuble a un exercice d'évacuation la semaine prochaine.
Where's the evacuation route? | Où est l'itinéraire d'évacuation ?
The fire exit is locked! | L'issue de secours est fermée à clé !
The stairwell is full of junk. | La cage d'escalier est pleine de bric-à-brac.
Fire doors must be kept closed. | Les portes coupe-feu doivent rester fermées.
Please don't prop the fire door open. | Merci de ne pas caler la porte coupe-feu ouverte.
Too many scooters are blocking the exit. | Trop de scooters bloquent la sortie.
The emergency lights aren't working. | L'éclairage de secours ne fonctionne pas.
Tell the building manager. | Prévenez le gardien.
Swollen batteries can catch fire. | Les batteries gonflées peuvent prendre feu.
Don't charge an e-bike indoors overnight. | Ne chargez pas un vélo électrique à l'intérieur toute la nuit.
Use the original charger. | Utilisez le chargeur d'origine.
That power strip is overloaded. | Cette multiprise est surchargée.
Replace power strips that feel hot. | Remplacez les multiprises qui chauffent.
Old wiring is a fire risk. | Les vieux câblages présentent un risque d'incendie.
Clean the dryer filter after every load. | Nettoyez le filtre du sèche-linge après chaque séchage.
Don't dry clothes on the heater. | Ne faites pas sécher de vêtements sur le radiateur.
Keep the mosquito coil away from paper. | Éloignez le serpentin anti-moustiques du papier.
Don't leave the cooking unattended. | Ne laissez pas la cuisson sans surveillance.
Iron bars can trap you inside. | Les barreaux peuvent vous piéger à l'intérieur.
Make sure the iron bars can be opened from inside. | Vérifiez que les barreaux peuvent s'ouvrir de l'intérieur.
Do you know how to use the descent device? | Vous savez utiliser le dispositif de descente ?
Check the exits when you check into a hotel. | Repérez les sorties quand vous arrivez à l'hôtel.
Count the doors to the nearest exit. | Comptez les portes jusqu'à la sortie la plus proche.
Keep your room key and phone by the bed. | Gardez votre clé de chambre et votre téléphone près du lit.
Run cool water over the burn for 15 to 30 minutes. | Passez la brûlure sous l'eau fraîche pendant 15 à 30 minutes.
Rinse, remove, soak, cover, then go to the hospital. | Rincer, retirer, tremper, couvrir, puis aller à l'hôpital.
Don't pop the blisters. | Ne percez pas les cloques.
Don't put toothpaste on a burn. | Ne mettez pas de dentifrice sur une brûlure.
He inhaled a lot of smoke. | Il a inhalé beaucoup de fumée.
She's being treated for smoke inhalation. | Elle est soignée pour une inhalation de fumée.
The fire spread to the next building. | Le feu s'est propagé à l'immeuble voisin.
The fire is under control. | L'incendie est maîtrisé.
It took three hours to put out the fire. | Il a fallu trois heures pour éteindre l'incendie.
Firefighters are checking for hot spots. | Les pompiers recherchent les foyers résiduels.
The cause of the fire is under investigation. | La cause de l'incendie fait l'objet d'une enquête.
Police suspect arson. | La police soupçonne un incendie criminel.
Don't park in front of the fire lane. | Ne vous garez pas devant la voie pompiers.
Parking on a red line can block fire trucks. | Se garer sur une ligne rouge peut bloquer les pompiers.
The fire truck couldn't get down the lane. | Le camion de pompiers n'a pas pu passer dans la ruelle.
My uncle is a volunteer firefighter. | Mon oncle est pompier volontaire.
The dispatcher stayed on the phone with me. | L'opérateur est resté en ligne avec moi.
Does our fire insurance cover this? | Notre assurance incendie couvre ça ?
Take photos of the damage for the insurance claim. | Prenez les dégâts en photo pour la déclaration de sinistre.
Is the building safe to enter? | Peut-on entrer dans le bâtiment sans danger ?
The roof might collapse. | Le toit pourrait s'effondrer.
Everything smells like smoke. | Tout sent la fumée.
We lost almost everything. | Nous avons presque tout perdu.
At least everyone got out alive. | Au moins, tout le monde est sorti vivant.
The Red Cross gave us a place to stay. | La Croix-Rouge nous a trouvé un logement.
Fireworks caused the grass fire. | Les pétards ont provoqué le feu d'herbe.
Forest fires are common in the dry season. | Les incendies de forêt sont fréquents en saison sèche.
Don't throw cigarette butts out of the car. | Ne jetez pas vos mégots par la fenêtre de la voiture.
Report the fire first, then try to put it out. | Signalez d'abord l'incendie, puis essayez de l'éteindre.
Shout "Fire!" to warn everyone. | Criez « Au feu ! » pour prévenir tout le monde.
Pull the fire alarm on your way out. | Déclenchez l'alarme incendie en sortant.
Help the elderly and children first. | Aidez d'abord les personnes âgées et les enfants.
Let's make a family escape plan. | Faisons un plan d'évacuation familial.
Agree on a meeting point outside. | Mettez-vous d'accord sur un point de rassemblement dehors.
Practice the plan twice a year. | Répétez le plan deux fois par an.
Fire safety starts at home. | La sécurité incendie commence à la maison.
`,
});

// ---------- 高級 Advanced ----------
addFrench("fire", {
  words: `
dust explosion | l'explosion de poussières | L'explosion de poussières de 2015 dans un parc aquatique a blessé des centaines de personnes.
combustible dust | la poussière combustible | La poudre colorée peut être une poussière combustible.
flashover | l'embrasement généralisé éclair | Un embrasement généralisé éclair peut survenir en quelques secondes.
backdraft | l'explosion de fumées ; le backdraft | Ouvrir la porte a provoqué une explosion de fumées.
chimney effect | l'effet cheminée | La fumée est montée vite à cause de l'effet cheminée.
fire compartment | le compartiment coupe-feu | Chaque étage est un compartiment coupe-feu distinct.
fire-rated door | la porte coupe-feu homologuée | Une porte coupe-feu homologuée doit se fermer toute seule.
self-closing | à fermeture automatique | Les portes coupe-feu doivent être à fermeture automatique.
smoke exhaust system | le système de désenfumage | Le système de désenfumage est tombé en panne.
pressurized stairwell | l'escalier pressurisé | Un escalier pressurisé empêche la fumée d'entrer.
automatic sprinkler system | le système d'extinction automatique à eau | Le centre commercial a un système d'extinction automatique à eau.
fire suppression | l'extinction ; le système d'extinction | La salle des serveurs utilise une extinction par gaz.
fire resistance rating | le degré de résistance au feu | Le mur a une résistance au feu d'une heure.
fireproofing | la protection ignifuge | Les poutres en acier ont besoin d'une protection ignifuge.
flame retardant | le retardateur de flamme ; ignifugé | Les rideaux sont traités avec un retardateur de flamme.
non-combustible material | le matériau incombustible | Utilisez des matériaux incombustibles pour le plafond.
occupancy load | la capacité d'accueil maximale | Le bar dépassait sa capacité d'accueil maximale.
fire safety manager | le responsable de la sécurité incendie | Chaque grand bâtiment a besoin d'un responsable de la sécurité incendie.
fire safety equipment inspection | la vérification des équipements de sécurité incendie | Le bâtiment doit déclarer la vérification de ses équipements de sécurité incendie.
public safety inspection | l'inspection de sécurité des bâtiments | L'inspection de sécurité a relevé des sorties bloquées.
fire code | la réglementation incendie | Le bâtiment enfreint la réglementation incendie.
code violation | l'infraction à la réglementation | Le propriétaire a reçu une amende pour infraction à la réglementation.
negligence | la négligence | L'incendie a été causé par négligence.
liability | la responsabilité (juridique) | Le propriétaire est tenu pour responsable de l'incendie.
fire insurance | l'assurance incendie | L'assurance incendie a couvert les dégâts.
total loss | la perte totale | L'usine a été une perte totale.
structural integrity | la solidité de la structure | L'incendie a affaibli la solidité de la structure.
size-up | la reconnaissance ; l'évaluation de la situation | Le chef a fait une reconnaissance rapide.
incident commander | le commandant des opérations de secours | Le commandant des opérations a ordonné à tout le monde de sortir.
command post | le poste de commandement | Ils ont installé un poste de commandement de l'autre côté de la rue.
search and rescue | la recherche et le sauvetage | Des équipes de recherche et de sauvetage sont entrées dans le bâtiment.
primary search | la reconnaissance initiale | La reconnaissance initiale a permis de trouver deux victimes.
self-contained breathing apparatus | l'appareil respiratoire isolant (ARI) | Chaque pompier porte un appareil respiratoire isolant.
thermal imaging camera | la caméra thermique | Une caméra thermique voit à travers la fumée.
turnout gear | la tenue de feu | La tenue de feu est lourde et chaude.
mayday | le mayday ; l'appel de détresse | Le pompier a lancé un mayday.
ventilation | la ventilation ; le désenfumage | La ventilation évacue la chaleur et la fumée.
hazardous materials | les matières dangereuses | Des matières dangereuses étaient stockées dans l'usine.
hazmat team | l'équipe risques chimiques | On a fait venir l'équipe risques chimiques.
chemical fire | l'incendie chimique | L'eau peut aggraver un incendie chimique.
reactive | réactif | Certains produits chimiques réagissent avec l'eau.
Class A fire | le feu de classe A (solides) | Le bois et le papier qui brûlent font un feu de classe A.
Class B fire | le feu de classe B (liquides) | L'essence qui brûle est un feu de classe B.
Class C fire | le feu de classe C (électrique, norme américaine) | Un feu de classe C implique des équipements électriques sous tension.
Class D fire | le feu de classe D (métaux) | Le magnésium qui brûle est un feu de classe D.
thermal runaway | l'emballement thermique | L'emballement thermique peut faire exploser une batterie.
spontaneous combustion | la combustion spontanée | Des chiffons gras peuvent provoquer une combustion spontanée.
ignition source | la source d'inflammation | Éliminez toute source d'inflammation.
flash point | le point d'éclair | L'essence a un point d'éclair très bas.
accelerant | l'accélérant | Les enquêteurs ont trouvé des traces d'accélérant.
point of origin | le point de départ du feu ; le foyer initial | Ils ont trouvé le foyer initial dans la cuisine.
fire investigation | l'enquête sur l'incendie | L'enquête sur l'incendie a duré trois semaines.
forensic | médico-légal ; de police scientifique | Des experts de la police scientifique ont examiné le câblage.
arcing | l'arc électrique | Un arc électrique dans de vieux fils peut déclencher un incendie.
hydrogen cyanide | le cyanure d'hydrogène | La mousse qui brûle peut dégager du cyanure d'hydrogène.
asphyxiation | l'asphyxie | La plupart des décès étaient dus à l'asphyxie.
hypoxia | l'hypoxie | L'hypoxie rend les victimes confuses.
burn unit | le centre des grands brûlés | Elle a passé un mois au centre des grands brûlés.
skin graft | la greffe de peau | Il a eu besoin de plusieurs greffes de peau.
third-degree burn | la brûlure au troisième degré | Une brûlure au troisième degré peut ne pas faire mal au début.
rinse, remove, soak, cover, send | rincer, retirer, tremper, couvrir, transporter | Retenez : rincer, retirer, tremper, couvrir, transporter.
mass casualty incident | l'accident à nombreuses victimes | L'explosion a été un accident à nombreuses victimes.
triage | le triage | Les secouristes ont commencé le triage sur place.
vulnerable | vulnérable | Les vieux bâtiments mettent en danger les habitants vulnérables.
long-term care facility | l'établissement de soins de longue durée | Un incendie dans un établissement de soins de longue durée est particulièrement meurtrier.
horizontal evacuation | l'évacuation horizontale ; le transfert horizontal | Les hôpitaux utilisent l'évacuation horizontale vers une zone sûre.
refuge area | l'espace d'attente sécurisé | Attendez dans l'espace d'attente sécurisé.
fire load | la charge calorifique | Les piles de marchandises augmentent la charge calorifique.
dilapidated | vétuste ; délabré | Le bâtiment vétuste n'avait pas de sprinkleurs.
mixed-use building | l'immeuble à usage mixte | L'incendie s'est déclaré dans un immeuble à usage mixte.
illegal structure | la construction illégale | La construction illégale bloquait la voie pompiers.
factory fire | l'incendie d'usine | Plusieurs pompiers sont morts dans un incendie d'usine en 2023.
firefighter safety | la sécurité des pompiers | L'incendie de l'usine a soulevé des inquiétudes sur la sécurité des pompiers.
understaffed | en sous-effectif | Beaucoup de casernes sont en sous-effectif.
chemical inventory | l'inventaire des produits chimiques | Les pompiers ont besoin de l'inventaire des produits chimiques de l'usine.
risk assessment | l'évaluation des risques | Faites une évaluation des risques d'incendie chaque année.
fire prevention | la prévention des incendies | La prévention des incendies commence à la maison.
residential fire alarm | le détecteur de fumée résidentiel | Chaque chambre devrait avoir un détecteur de fumée résidentiel.
retrofit | équiper après coup ; mettre aux normes | Les vieux bâtiments devraient être équipés de sprinkleurs.
emergency response | l'intervention d'urgence | L'intervention d'urgence a été rapide.
response time | le délai d'intervention | Les embouteillages ont allongé le délai d'intervention.
public awareness | la sensibilisation du public | La campagne a renforcé la sensibilisation du public.
wind-driven | attisé par le vent | Un feu attisé par le vent se propage vite.
firebreak | le coupe-feu ; la tranchée pare-feu | Ils ont ouvert un coupe-feu dans la forêt.
controlled burn | le brûlage dirigé | Un brûlage dirigé réduit les broussailles sèches.
smolder | couver | Le matelas a couvé pendant des heures.
reignite | reprendre ; se rallumer | Le feu pourrait reprendre pendant la nuit.
overhaul | le déblai | Pendant le déblai, les pompiers cherchent les braises cachées.
pre-incident plan | le plan d'intervention préétabli | La caserne a un plan d'intervention préétabli pour l'usine.
mutual aid | le renfort ; l'entraide | Trois villes ont envoyé des renforts.
National Fire Agency | l'Agence nationale des pompiers (Taïwan) | L'Agence nationale des pompiers publie des consignes de sécurité.
compensation | l'indemnisation | Les familles ont reçu une indemnisation.
survivor | le survivant | Un survivant a décrit la fumée épaisse.
post-traumatic stress | le stress post-traumatique | Les pompiers peuvent souffrir de stress post-traumatique.
line of duty | en service commandé | Il est mort en service commandé.
carcinogen | la substance cancérogène | La fumée contient des substances cancérogènes.
decontamination | la décontamination | L'équipement doit être décontaminé après chaque incendie.
egress | l'issue ; le dégagement | Chaque étage doit avoir deux dégagements.
dead-end corridor | le cul-de-sac ; le couloir sans issue | Un couloir sans issue peut piéger les gens.
panic bar | la barre antipanique | Les portes de sortie devraient avoir une barre antipanique.
out of the frying pan and into the fire | tomber de Charybde en Scylla | C'était tomber de Charybde en Scylla.
baptism of fire | le baptême du feu | Mon premier jour a été un baptême du feu.
pour cold water on | doucher l'enthousiasme ; jeter un froid sur | Ne douche pas mon enthousiasme pour cette idée.
spread like wildfire | se répandre comme une traînée de poudre | La nouvelle s'est répandue comme une traînée de poudre.
fan the flames | attiser les flammes | Ses paroles ne feront qu'attiser les flammes.
put out fires | éteindre des incendies ; parer au plus pressé | Je passe ma journée à éteindre des incendies.
hold their feet to the fire | mettre la pression sur quelqu'un | Les électeurs doivent leur mettre la pression.
crash and burn | se planter ; faire un flop | Les nouveaux produits font souvent un flop.
a burning question | une question brûlante | Voici une question brûlante : qui va payer ?
set the world on fire | casser la baraque | Il n'a pas cassé la baraque, mais il s'en est bien sorti.
fire in the belly | le feu sacré | Elle a vraiment le feu sacré.
keep the home fires burning | garder le foyer | Maman gardera le foyer.
burn the candle at both ends | brûler la chandelle par les deux bouts | Ne brûle pas la chandelle par les deux bouts.
no smoke without fire | il n'y a pas de fumée sans feu | Il n'y a pas de fumée sans feu.
trial by fire | l'épreuve du feu | La première semaine a été une épreuve du feu.
`,
  phrases: `
A flashover can turn a room into a fireball in seconds. | Un embrasement généralisé éclair peut transformer une pièce en boule de feu en quelques secondes.
Opening the door suddenly could cause a backdraft. | Ouvrir la porte brusquement pourrait provoquer un backdraft.
The stairwell acted like a chimney. | La cage d'escalier a fait office de cheminée.
Smoke spreads vertically through shafts and stairwells. | La fumée monte par les gaines et les cages d'escalier.
A closed door can buy you precious minutes. | Une porte fermée peut vous faire gagner de précieuses minutes.
Most fire deaths are caused by smoke, not flames. | La plupart des morts dans un incendie sont dues à la fumée, pas aux flammes.
Burning plastics release toxic gases such as hydrogen cyanide. | Les plastiques qui brûlent dégagent des gaz toxiques comme le cyanure d'hydrogène.
Victims often become confused before they lose consciousness. | Les victimes deviennent souvent confuses avant de perdre connaissance.
The building had no working sprinklers. | Le bâtiment n'avait aucun sprinkleur en état de marche.
The fire doors had been propped open. | Les portes coupe-feu avaient été calées ouvertes.
Illegal structures blocked the escape routes. | Des constructions illégales bloquaient les issues de secours.
The building failed its public safety inspection. | Le bâtiment n'a pas passé l'inspection de sécurité.
Owners must file a fire safety equipment inspection report regularly. | Les propriétaires doivent déclarer régulièrement la vérification des équipements de sécurité incendie.
The fire safety manager is responsible for evacuation plans. | Le responsable de la sécurité incendie est chargé des plans d'évacuation.
The bar was well over its occupancy limit. | Le bar dépassait largement sa capacité d'accueil.
The renovation used flammable foam insulation. | Les travaux ont utilisé un isolant en mousse inflammable.
Sparks from welding ignited the insulation. | Des étincelles de soudure ont enflammé l'isolant.
Old mixed-use buildings are especially dangerous. | Les vieux immeubles à usage mixte sont particulièrement dangereux.
Many residents were elderly or had disabilities. | Beaucoup d'habitants étaient âgés ou handicapés.
Long-term care facilities need horizontal evacuation plans. | Les établissements de soins de longue durée ont besoin de plans d'évacuation horizontale.
Move patients to a safe zone on the same floor first. | Déplacez d'abord les patients vers une zone sûre au même étage.
The 2015 dust explosion at a water park shocked Taiwan. | L'explosion de poussières de 2015 dans un parc aquatique a choqué Taïwan.
Colored powder in the air can explode. | La poudre colorée en suspension dans l'air peut exploser.
The 2021 Kaohsiung building fire killed 46 people. | L'incendie d'immeuble de Kaohsiung en 2021 a fait 46 morts.
The 2023 factory fire in Pingtung killed several firefighters. | L'incendie d'usine de Pingtung en 2023 a tué plusieurs pompiers.
Firefighters didn't know what chemicals were stored inside. | Les pompiers ne savaient pas quels produits chimiques étaient stockés à l'intérieur.
Companies must share their chemical inventory with the fire department. | Les entreprises doivent communiquer l'inventaire de leurs produits chimiques aux pompiers.
Water can make some chemical fires worse. | L'eau peut aggraver certains incendies chimiques.
Use the right extinguisher for the class of fire. | Utilisez l'extincteur adapté à la classe de feu.
Class C fires involve live electrical equipment. | Les feux de classe C (norme américaine) concernent des équipements électriques sous tension.
Lithium batteries can go into thermal runaway. | Les batteries au lithium peuvent entrer en emballement thermique.
A battery fire can reignite hours later. | Un feu de batterie peut reprendre des heures plus tard.
Oily rags can catch fire by themselves. | Des chiffons gras peuvent s'enflammer tout seuls.
The incident commander ordered a defensive attack. | Le commandant des opérations a ordonné une attaque défensive.
It was too dangerous to send crews inside. | C'était trop dangereux d'envoyer des équipes à l'intérieur.
They set up a command post across the street. | Ils ont installé un poste de commandement en face.
The thermal imaging camera found a victim behind the sofa. | La caméra thermique a repéré une victime derrière le canapé.
Each air tank lasts about thirty minutes. | Chaque bouteille d'air dure environ trente minutes.
A firefighter called a mayday. | Un pompier a lancé un mayday.
Firefighters train for years to do this job. | Les pompiers s'entraînent pendant des années pour faire ce métier.
Many fire stations are understaffed. | Beaucoup de casernes sont en sous-effectif.
Firefighters face a higher risk of cancer. | Les pompiers ont un risque de cancer plus élevé.
Gear must be cleaned after every fire. | L'équipement doit être nettoyé après chaque incendie.
They died in the line of duty. | Ils sont morts en service commandé.
The families of fallen firefighters receive compensation. | Les familles des pompiers morts en service reçoivent une indemnisation.
Investigators traced the point of origin to the kitchen. | Les enquêteurs ont localisé le foyer initial dans la cuisine.
They found traces of an accelerant. | Ils ont trouvé des traces d'accélérant.
The fire was ruled accidental. | L'incendie a été jugé accidentel.
The landlord may be liable for negligence. | Le propriétaire pourrait être responsable pour négligence.
The owner was charged with negligent homicide. | Le propriétaire a été poursuivi pour homicide involontaire.
The factory was declared a total loss. | L'usine a été déclarée perte totale.
Engineers must check the structural integrity first. | Les ingénieurs doivent d'abord vérifier la solidité de la structure.
The fire gutted the building. | L'incendie a ravagé l'intérieur du bâtiment.
Third-degree burns may not hurt at first. | Les brûlures au troisième degré peuvent ne pas faire mal au début.
Severe burn patients are treated in a burn unit. | Les grands brûlés sont soignés dans un centre spécialisé.
He needed several skin grafts. | Il a eu besoin de plusieurs greffes de peau.
Paramedics began triage at the scene. | Les secouristes ont commencé le triage sur place.
It was declared a mass casualty incident. | L'événement a été classé accident à nombreuses victimes.
Nearby hospitals activated their emergency plans. | Les hôpitaux voisins ont déclenché leur plan d'urgence.
Survivors may suffer from post-traumatic stress. | Les survivants peuvent souffrir de stress post-traumatique.
Every home in Taiwan is required to have residential fire alarms. | À Taïwan, chaque logement doit être équipé de détecteurs de fumée.
Local fire departments sometimes install them for free. | Les pompiers locaux les installent parfois gratuitement.
Older buildings should be retrofitted with sprinklers. | Les vieux bâtiments devraient être équipés de sprinkleurs.
Fire-rated doors must be self-closing. | Les portes coupe-feu doivent être à fermeture automatique.
Pressurized stairwells keep smoke out. | Les escaliers pressurisés empêchent la fumée d'entrer.
Each floor is divided into fire compartments. | Chaque étage est divisé en compartiments coupe-feu.
The wall has a one-hour fire resistance rating. | Le mur a une résistance au feu d'une heure.
Curtains in public places must be flame-retardant. | Les rideaux des lieux publics doivent être ignifugés.
Look for the flame-retardant label. | Cherchez l'étiquette « ignifugé ».
Piles of goods increase the fire load. | Les piles de marchandises augmentent la charge calorifique.
Never lock fire exits during business hours. | Ne verrouillez jamais les issues de secours pendant les heures d'ouverture.
Exit doors should open outward with a panic bar. | Les portes de sortie doivent s'ouvrir vers l'extérieur avec une barre antipanique.
A dead-end corridor can become a death trap. | Un couloir sans issue peut devenir un piège mortel.
Every floor needs at least two ways out. | Chaque étage doit avoir au moins deux issues.
Strong winds turned the brush fire into a disaster. | Des vents violents ont transformé le feu de broussailles en catastrophe.
Crews cut a firebreak to stop the wildfire. | Les équipes ont ouvert un coupe-feu pour arrêter l'incendie.
Embers can travel a long way in strong winds. | Par vent fort, les braises peuvent voler très loin.
Climate change is making wildfire seasons longer. | Le changement climatique allonge la saison des feux.
Neighboring cities sent crews as mutual aid. | Les villes voisines ont envoyé des renforts.
Traffic jams delayed the fire trucks. | Les embouteillages ont retardé les camions de pompiers.
Narrow lanes and illegal parking slow down rescues. | Les ruelles étroites et le stationnement illégal ralentissent les secours.
Firefighters do a size-up before they go in. | Les pompiers évaluent la situation avant d'entrer.
The primary search found no one inside. | La reconnaissance initiale n'a trouvé personne à l'intérieur.
During overhaul, they tear open walls to find hidden fire. | Pendant le déblai, ils ouvrent les murs pour trouver le feu caché.
The mattress smoldered for hours. | Le matelas a couvé pendant des heures.
Prevention saves more lives than rescue. | La prévention sauve plus de vies que les secours.
Fire safety rules are written in blood. | Les règles de sécurité incendie sont écrites avec du sang.
Every fire is a lesson. | Chaque incendie est une leçon.
Public awareness campaigns really do save lives. | Les campagnes de sensibilisation sauvent vraiment des vies.
Schools should hold realistic fire drills. | Les écoles devraient organiser des exercices d'évacuation réalistes.
Know the fire safety rules before you rent an apartment. | Renseignez-vous sur les règles de sécurité incendie avant de louer un appartement.
Ask the landlord whether there is a smoke alarm. | Demandez au propriétaire s'il y a un détecteur de fumée.
Check that the descent device has been inspected. | Vérifiez que le dispositif de descente a été contrôlé.
Hotels should explain evacuation routes in several languages. | Les hôtels devraient expliquer les itinéraires d'évacuation en plusieurs langues.
Factories need a pre-incident plan with the fire department. | Les usines ont besoin d'un plan d'intervention établi avec les pompiers.
The fire department inspects high-risk sites every year. | Les pompiers inspectent les sites à risque chaque année.
Repeat violations can lead to heavy fines. | Les infractions répétées peuvent entraîner de lourdes amendes.
The business was ordered to suspend operations. | L'établissement a reçu l'ordre de suspendre son activité.
Illegal changes to a building can affect your insurance claim. | Des modifications illégales du bâtiment peuvent compromettre votre indemnisation.
In the end, the best fire is the one that never starts. | Au fond, le meilleur incendie est celui qui ne se déclare jamais.
`,
});
