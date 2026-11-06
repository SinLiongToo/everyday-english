// 法文對照（Français）：野外求生
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
addFrench("survival", {
  words: `
survive | survivre | Nous pouvons survivre si nous restons calmes.
survival | la survie | L'eau est essentielle à la survie.
lost | perdu | Nous sommes perdus.
help | à l'aide ; au secours | À l'aide ! Quelqu'un m'entend ?
call for help | appeler à l'aide | Appelle à l'aide tout de suite.
stay | rester | Reste où tu es.
calm | calme | Garde ton calme et réfléchis.
panic | paniquer | Ne panique pas.
whistle | le sifflet | Donne trois coups de sifflet.
phone | le téléphone | Économise la batterie de ton téléphone.
battery | la batterie | Ma batterie est faible.
signal | le réseau ; le signal | Il n'y a pas de réseau ici.
map | la carte | Regarde la carte.
compass | la boussole | La boussole indique le nord.
north | le nord | Le sentier va vers le nord.
south | le sud | La ville est au sud.
east | l'est | Le soleil se lève à l'est.
west | l'ouest | Le soleil se couche à l'ouest.
sun | le soleil | Le soleil se couche.
dark | sombre ; la nuit tombe | La nuit tombe tôt en montagne.
night | la nuit | Nous devons passer la nuit ici.
cold | froid | Il fait très froid la nuit.
warm | chaud | Garde ton corps au chaud.
wet | mouillé | Mes vêtements sont mouillés.
dry | sec | Mets des vêtements secs.
water | l'eau | Nous avons besoin d'eau.
drink | boire | Bois un peu à la fois.
thirsty | assoiffé | J'ai tellement soif.
hungry | affamé | J'ai faim, mais ça va.
food | la nourriture | Partagez la nourriture avec soin.
fire | le feu | Faisons un feu.
smoke | la fumée | La fumée se voit de très loin.
wood | le bois | Trouve du bois sec.
stick | la branche ; le bâton | Ramasse des branches sèches.
leaf | la feuille | Utilise une grande feuille comme gobelet.
rock | le rocher | Assieds-toi sur un rocher sec.
tree | l'arbre | Attends sous un grand arbre.
cave | la grotte | Nous nous sommes abrités dans une petite grotte.
shelter | l'abri | Il nous faut un abri contre la pluie.
rain | la pluie | La pluie devient forte.
wind | le vent | Mets-toi à l'abri du vent.
fog | le brouillard | Le brouillard est très épais.
river | la rivière | Ne traverse pas la rivière.
stream | le ruisseau | Nous avons trouvé un petit ruisseau.
cliff | la falaise | Éloigne-toi de la falaise.
path | le chemin | Reste sur le chemin.
trail | le sentier | Nous avons perdu le sentier.
mountain | la montagne | La montagne est dangereuse la nuit.
forest | la forêt | La forêt est très dense.
valley | la vallée | Ne descends pas dans la vallée.
top | le sommet ; le haut | Monte en haut pour avoir du réseau.
hurt | blessé ; faire mal | J'ai mal à la jambe.
injured | blessé | Y a-t-il des blessés ?
bleeding | saigner | Il saigne.
bandage | le bandage | Mets un bandage.
pain | la douleur | J'ai très mal.
tired | fatigué | Je suis trop fatigué pour marcher.
rest | se reposer | Reposons-nous dix minutes.
walk | marcher | Tu peux marcher ?
carry | porter | Je vais porter ton sac.
snake | le serpent | Il y a un serpent sur le chemin !
bee | l'abeille | Cours ! Des abeilles !
bite | la morsure ; mordre | Une morsure de serpent est une urgence.
sting | la piqûre | La piqûre d'abeille a enflé.
bear | l'ours | Il y a des ours dans ces montagnes.
monkey | le singe | Ne nourris pas les singes.
mushroom | le champignon | Ne mange pas de champignons sauvages.
berry | la baie | Cette baie rouge est peut-être toxique.
poison | le poison | Certaines plantes contiennent du poison.
safe | sûr ; sans danger | Cette eau est potable ?
danger | le danger | Il y a un danger plus loin.
careful | prudent | Sois prudent sur les rochers.
slow | lent ; lentement | Vas-y lentement.
slip | glisser | Ne glisse pas sur les rochers mouillés.
fall | tomber | Il risque de tomber.
climb | grimper | Grimpe lentement.
rope | la corde | Tiens la corde.
knife | le couteau | Un couteau est très utile.
lighter | le briquet | Garde le briquet au sec.
flashlight | la lampe de poche | Éteins la lampe de poche pour économiser la batterie.
jacket | la veste | Mets ta veste.
hat | le chapeau ; le bonnet | Porte un chapeau.
bag | le sac | Qu'est-ce qu'il y a dans ton sac ?
plastic bag | le sac en plastique | Un sac en plastique peut garder les affaires au sec.
bright | vif ; voyant | Porte quelque chose de voyant.
color | la couleur | L'orange est une couleur facile à voir.
wave | agiter ; faire signe | Agite les bras vers l'hélicoptère.
shout | crier | Crie à l'aide.
listen | écouter | Écoute ! Quelqu'un appelle.
hear | entendre | Tu m'entends ?
see | voir | Je vois une route.
rescue | les secours ; le sauvetage | Les secours arrivent.
helicopter | l'hélicoptère | Un hélicoptère nous survole.
police | la police | Appelle la police.
together | ensemble | Restez ensemble.
alone | seul | N'y va pas seul.
plan | le plan | Il nous faut un plan.
hope | l'espoir | Ne perds pas espoir.
alive | vivant | Nous sommes vivants !
home | la maison ; chez soi | Nous rentrons à la maison.
clean water | l'eau propre | Nous avons besoin d'eau propre.
dirty | sale | Cette eau a l'air sale.
clear | limpide ; clair | Même une eau limpide peut rendre malade.
cloudy | trouble | L'eau est trouble après la pluie.
bottle | la bouteille | Remplis ta bouteille ici.
pot | la casserole ; la gamelle | Fais bouillir l'eau dans une gamelle.
bubble | bouillonner ; la bulle | Attends que l'eau bouillonne.
cool | refroidir | Laisse l'eau refroidir.
cloth | le tissu ; le chiffon | Verse l'eau à travers un tissu.
sick | malade | L'eau sale peut rendre malade.
stomachache | le mal de ventre | J'ai mal au ventre.
fill | remplir | Remplis toutes les bouteilles.
flowing | courant ; qui coule | Prends l'eau dans les ruisseaux qui coulent.
dog | le chien | Il y a un chien sur le sentier.
stray dog | le chien errant | Attention aux chiens errants.
bark | aboyer | Le chien nous aboie dessus.
growl | grogner | Le chien grogne.
wild boar | le sanglier | Un sanglier a traversé le sentier.
animal | l'animal | Ne t'approche pas des animaux sauvages.
wild | sauvage | Ces animaux sont sauvages.
attack | attaquer | Le singe a essayé de m'attaquer.
scared | qui a peur | J'ai peur des chiens.
run away | s'enfuir | Ne t'enfuis pas devant un chien.
stand still | rester immobile | Reste immobile et garde ton calme.
back away | reculer | Recule lentement.
loud | fort ; bruyant | Fais un bruit fort.
noise | le bruit | Fais du bruit en marchant.
food bag | le sac à provisions | Garde ton sac à provisions fermé.
wash | laver | Lave la morsure à l'eau et au savon.
soap | le savon | Utilise du savon et beaucoup d'eau.
doctor | le médecin | Consulte un médecin après toute morsure d'animal.
scratch | la griffure | Une griffure de singe peut s'infecter.
claw | la griffe | Les ours ont de longues griffes.
teeth | les dents ; les crocs | Le chien a montré les crocs.
`,
  phrases: `
I think we're lost. | Je crois qu'on est perdus.
Don't panic. | Pas de panique.
Stop and think. | Arrête-toi et réfléchis.
Stay where you are. | Reste où tu es.
Don't walk around in the dark. | Ne marche pas dans le noir.
Let's stay together. | Restons ensemble.
Don't go alone. | N'y va pas seul.
Can you hear me? | Tu m'entends ?
Help! Over here! | Au secours ! Par ici !
Blow the whistle. | Siffle.
Three blasts mean help. | Trois coups de sifflet, c'est un appel à l'aide.
Is there any signal? | Il y a du réseau ?
I have one bar. | J'ai une barre.
Call 119 now. | Appelle le 119 maintenant.
Save your phone battery. | Économise la batterie de ton téléphone.
Turn off the apps you don't need. | Ferme les applis dont tu n'as pas besoin.
Send our location. | Envoie notre position.
Where's the map? | Où est la carte ?
Which way is north? | Où est le nord ?
The sun rises in the east. | Le soleil se lève à l'est.
We came from that way. | Nous sommes venus par là.
Let's go back the way we came. | Revenons sur nos pas.
Look for the trail ribbons. | Cherche les rubans de balisage.
I can't see the trail. | Je ne vois plus le sentier.
The fog is too thick. | Le brouillard est trop épais.
It's getting dark. | La nuit tombe.
We have to stay here tonight. | Nous devons rester ici cette nuit.
We need shelter. | Il nous faut un abri.
Get out of the wind. | Mets-toi à l'abri du vent.
Sit on your backpack, not the ground. | Assieds-toi sur ton sac, pas par terre.
Put on all your clothes. | Mets tous tes vêtements.
Change into dry socks. | Mets des chaussettes sèches.
I'm so cold. | J'ai tellement froid.
Come closer. Let's keep warm together. | Rapproche-toi. Tenons-nous chaud.
How much water do we have? | Combien d'eau nous reste-t-il ?
Drink a little, but don't wait until you're thirsty. | Bois un peu, mais n'attends pas d'avoir soif.
Don't drink from the river. | Ne bois pas l'eau de la rivière.
Boil the water first. | Fais d'abord bouillir l'eau.
Let's share the food. | Partageons la nourriture.
Don't eat wild plants. | Ne mange pas de plantes sauvages.
Don't eat that mushroom! | Ne mange pas ce champignon !
Let's make a fire. | Faisons un feu.
Find dry wood. | Trouve du bois sec.
Keep the lighter dry. | Garde le briquet au sec.
Be careful with the fire. | Fais attention au feu.
Are you hurt? | Tu es blessé ?
My ankle hurts. | J'ai mal à la cheville.
I can't walk. | Je ne peux pas marcher.
Can you move your fingers? | Tu peux bouger les doigts ?
Press here to stop the bleeding. | Appuie ici pour arrêter le saignement.
Don't move him. | Ne le bouge pas.
I'll stay with you. | Je reste avec toi.
Someone will find us. | Quelqu'un va nous trouver.
Don't give up. | N'abandonne pas.
We're going to be okay. | On va s'en sortir.
Watch out! A snake! | Attention ! Un serpent !
Step back slowly. | Recule lentement.
Don't touch it. | Ne le touche pas.
Run! Bees! | Cours ! Des abeilles !
Cover your head. | Protège ta tête.
I got stung. | Je me suis fait piquer.
Don't feed the monkeys. | Ne nourris pas les singes.
Is it safe to cross? | On peut traverser sans danger ?
The water is too fast. | Le courant est trop fort.
Don't cross the river. | Ne traverse pas la rivière.
Wait for the water to go down. | Attends que l'eau baisse.
Stay away from the edge. | Éloigne-toi du bord.
The rocks are slippery. | Les rochers sont glissants.
Watch your step. | Regarde où tu mets les pieds.
Hold on to the rope. | Tiens bien la corde.
Go slowly. | Vas-y doucement.
I need to rest. | J'ai besoin de me reposer.
Let's rest for five minutes. | Reposons-nous cinq minutes.
Eat something sweet. | Mange quelque chose de sucré.
Wear something bright. | Porte quelque chose de voyant.
Wave your jacket. | Agite ta veste.
I hear a helicopter! | J'entends un hélicoptère !
Go to the open area. | Va dans la zone dégagée.
Wave both arms. | Agite les deux bras.
They see us! | Ils nous voient !
We're over here! | Nous sommes ici !
Thank you for finding us. | Merci de nous avoir trouvés.
Is everyone here? | Tout le monde est là ?
Count everyone. | Compte tout le monde.
Who has the first aid kit? | Qui a la trousse de secours ?
Tell someone where you're going. | Dis à quelqu'un où tu vas.
Check the weather before you go. | Regarde la météo avant de partir.
Start early. | Pars tôt.
Turn back if the weather gets bad. | Fais demi-tour si le temps se gâte.
Always bring a headlamp. | Prends toujours une lampe frontale.
Bring more water than you need. | Prends plus d'eau que nécessaire.
Pack a raincoat, even if it's sunny. | Emporte un imperméable, même s'il fait beau.
Never hike alone. | Ne randonne jamais seul.
Stay on the marked trail. | Reste sur le sentier balisé.
Don't take shortcuts. | Ne prends pas de raccourcis.
Listen to the leader. | Écoute le guide.
Walk at the slowest person's speed. | Marche au rythme du plus lent.
It's okay to turn back. | Ce n'est pas grave de faire demi-tour.
The mountain will still be here. | La montagne sera toujours là.
Safety comes first. | La sécurité d'abord.
Is this water safe to drink? | Cette eau est potable ?
Clear water isn't always clean. | Une eau limpide n'est pas toujours propre.
The water is too dirty. | L'eau est trop sale.
Let's find another stream. | Trouvons un autre ruisseau.
Take water from where it's flowing. | Prends l'eau là où elle coule.
Fill the pot with water. | Remplis la gamelle d'eau.
Wait until it bubbles. | Attends que ça bouillonne.
Let it cool before you drink. | Laisse refroidir avant de boire.
Pour it through a cloth first. | Filtre-la d'abord à travers un tissu.
Did you bring the water tablets? | Tu as pris les pastilles de purification ?
Put one tablet in your bottle. | Mets une pastille dans ta bouteille.
Wait before you drink it. | Attends avant de la boire.
Don't drink it yet. | Ne la bois pas encore.
It tastes funny. | Elle a un drôle de goût.
I feel sick. | Je me sens mal.
My stomach hurts. | J'ai mal au ventre.
Don't wash your feet in the drinking water. | Ne te lave pas les pieds dans l'eau à boire.
There's a dog. Don't run. | Il y a un chien. Ne cours pas.
Stand still. | Ne bouge pas.
Don't look it in the eye. | Ne le regarde pas dans les yeux.
Walk away slowly. | Éloigne-toi lentement.
The dog is barking. Stay calm. | Le chien aboie. Reste calme.
Keep your backpack between you and the dog. | Garde ton sac entre toi et le chien.
There's a wild boar! | Il y a un sanglier !
Get behind a tree. | Mets-toi derrière un arbre.
The monkey wants our food. | Le singe veut notre nourriture.
Hide your food. | Cache ta nourriture.
Don't eat in front of the monkeys. | Ne mange pas devant les singes.
Let go of the bag. | Lâche le sac.
Make a loud noise. | Fais un grand bruit.
I got bitten by a dog. | Je me suis fait mordre par un chien.
Wash it with soap and water. | Lave-la à l'eau et au savon.
We need to see a doctor. | Il faut voir un médecin.
Don't touch wild animals. | Ne touche pas les animaux sauvages.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("survival", {
  words: `
rule of threes | la règle des trois | La règle des trois aide à fixer les priorités.
priority | la priorité | Sous une pluie froide, l'abri est la première priorité.
STOP | STOP (s'arrêter, réfléchir, observer, planifier) | Retenez STOP : s'arrêter, réfléchir, observer, planifier.
stay put | rester sur place | Si vous êtes perdu, restez sur place.
retrace your steps | revenir sur ses pas | Essayez de revenir sur vos pas jusqu'au dernier balisage.
trail marker | la balise ; le balisage | Cherche la prochaine balise.
ribbon | le ruban de balisage | Suis les rubans accrochés aux arbres.
landmark | le point de repère | Prends le sommet comme point de repère.
bearing | le cap ; l'azimut | Prends un cap avec ta boussole.
GPS coordinates | les coordonnées GPS | Envoie tes coordonnées GPS aux secours.
location sharing | le partage de position | Active le partage de position.
emergency call | l'appel d'urgence | Un appel d'urgence peut passer sans carte SIM.
dial 112 | composer le 112 | Compose le 112 si ton opérateur ne capte pas.
battery saver | le mode économie d'énergie | Active le mode économie d'énergie.
airplane mode | le mode avion | Utilise le mode avion pour économiser la batterie.
distress signal | le signal de détresse | Trois coups de sifflet, c'est un signal de détresse.
signal mirror | le miroir de signalisation | Fais des signaux à l'avion avec le miroir.
signal fire | le feu de signalisation | Allume trois feux de signalisation en triangle.
SOS | le SOS | Écris SOS au sol avec des pierres.
open area | la zone dégagée | Attends dans une zone dégagée pour que l'hélicoptère te voie.
visible | visible | Rends-toi visible.
ridge | la crête | Monte vers la crête, pas vers le ruisseau.
gully | la ravine | Une ravine finit souvent sur une cascade.
waterfall | la cascade | Nous n'avons pas pu passer la cascade.
dead end | l'impasse ; le cul-de-sac | Ce chemin est une impasse.
steep | raide | La pente est trop raide.
loose rock | les pierres instables | Attention aux pierres instables.
river crossing | le passage de rivière ; le gué | Le passage de la rivière est le moment le plus dangereux.
current | le courant | Le courant est trop fort.
rising water | la montée des eaux | La montée des eaux a piégé les randonneurs.
hypothermia | l'hypothermie | L'hypothermie peut tuer même en été.
shivering | les frissons ; grelotter | Grelotter est un premier signe d'hypothermie.
heatstroke | le coup de chaleur | Le coup de chaleur est une urgence médicale.
dehydrated | déshydraté | Je commence à être déshydraté.
ration | rationner | Rationne la nourriture, pas l'eau.
purify | purifier | Purifie l'eau avant de la boire.
boil | faire bouillir | Fais bouillir l'eau au moins une minute.
filter | filtrer | Filtre d'abord l'eau à travers un tissu.
rainwater | l'eau de pluie | Récupère l'eau de pluie avec une bâche.
insulation | l'isolation | Les feuilles isolent du sol froid.
windbreak | le brise-vent | Fais un brise-vent avec des branches.
lean-to | l'appentis ; l'abri en appentis | Nous avons construit un abri en appentis contre un arbre tombé.
tarp | la bâche | Une bâche fait un abri rapide.
emergency blanket | la couverture de survie | Enveloppe-toi dans une couverture de survie.
bivy bag | le sac de bivouac | Un sac de bivouac peut te sauver la vie.
tinder | l'amadou ; le petit combustible | L'herbe sèche fait un bon amadou.
kindling | le petit bois | Ajoute le petit bois lentement.
fire starter | l'allume-feu | Un allume-feu fonctionne même mouillé.
waterproof matches | les allumettes étanches | Emporte des allumettes étanches.
fire steel | le firesteel ; la pierre à feu | Frotte fort la pierre à feu.
edible | comestible | Cette plante est comestible ?
poisonous | toxique ; vénéneux | Beaucoup de champignons sont vénéneux.
venomous snake | le serpent venimeux | Taïwan compte six serpents venimeux courants.
bamboo viper | le trigonocéphale vert des bambous | Le trigonocéphale vert des bambous est vert et difficile à voir.
hundred-pacer | le crotale « cent pas » (Deinagkistrodon) | Le crotale « cent pas » est très venimeux.
banded krait | le bongare annelé | Le bongare annelé a des anneaux noirs et blancs.
cobra | le cobra | Le cobra dresse la tête quand il est en colère.
hornet | le frelon | Les frelons sont les plus actifs en automne.
hornet nest | le nid de frelons | Éloigne-toi du nid de frelons.
Formosan black bear | l'ours noir de Formose | Nous avons vu des traces d'ours noir de Formose.
bear bell | la clochette anti-ours | Accroche une clochette anti-ours à ton sac.
tick | la tique | Vérifie que tu n'as pas de tiques.
leech | la sangsue | N'arrache pas la sangsue brutalement.
splint | l'attelle | Fabrique une attelle avec deux bâtons.
sprain | l'entorse | C'est une entorse, pas une fracture.
fracture | la fracture | Il a peut-être une fracture.
pressure | la pression ; la compression | Appuie sur la plaie.
wound | la plaie | Nettoie la plaie avec de l'eau.
infection | l'infection | Garde la plaie propre pour éviter l'infection.
blister | l'ampoule | Couvre l'ampoule avec du sparadrap.
unconscious | inconscient | Il est inconscient mais il respire.
recovery position | la position latérale de sécurité (PLS) | Mets-le en position latérale de sécurité.
mountain rescue | le secours en montagne | Les équipes de secours en montagne s'entraînent pendant des années.
search party | l'équipe de recherche | Une équipe de recherche les cherche.
missing | disparu | Deux randonneurs ont disparu.
overdue | en retard ; pas encore rentré | Signale-le si ton ami n'est pas rentré à l'heure.
itinerary | l'itinéraire | Laisse ton itinéraire à un ami.
headcount | le comptage | Fais un comptage à chaque pause.
sweep | le serre-file | Le serre-file marche à l'arrière du groupe.
pace | le rythme | Marche au rythme du plus lent.
turn back | faire demi-tour | Il est tard. Faisons demi-tour.
daylight | la lumière du jour | Il nous reste deux heures de jour.
nightfall | la tombée de la nuit | Trouve un abri avant la tombée de la nuit.
layers | les couches | Porte des couches que tu peux enlever et remettre.
cotton | le coton | Le coton reste mouillé et froid.
wool | la laine | La laine reste chaude même mouillée.
rain gear | l'équipement de pluie | Prends toujours ton équipement de pluie.
headlamp | la lampe frontale | Emporte une lampe frontale et des piles de rechange.
whistle blast | le coup de sifflet | Trois coups de sifflet signifient « à l'aide ».
footprints | les empreintes de pas | Les secouristes ont suivi nos empreintes.
energy | l'énergie | Économise ton énergie.
morale | le moral | Garde le moral en parlant.
willpower | la volonté | La volonté te fait tenir.
survival kit | le kit de survie | Mon kit de survie tient dans une boîte en fer.
first aid kit | la trousse de secours | Ouvre la trousse de secours.
trekking pole | le bâton de randonnée | Utilise un bâton de randonnée dans les pentes raides.
paracord | la paracorde | La paracorde a cent usages.
duct tape | le ruban adhésif toilé ; le duct tape | Le duct tape peut réparer une veste déchirée.
high ground | les hauteurs | Monte sur les hauteurs si l'eau monte.
trail map | la carte des sentiers | Télécharge la carte des sentiers avant la randonnée.
water source | le point d'eau | Trouve un point d'eau avant la nuit.
upstream | en amont | Prends l'eau en amont du campement.
downstream | en aval | Ne prends pas l'eau en aval d'un village.
stagnant | stagnant | Évite l'eau stagnante.
rolling boil | la pleine ébullition | Porte-la à pleine ébullition.
purification tablets | les pastilles de purification | Ajoute les pastilles de purification et attends.
chlorine dioxide | le dioxyde de chlore | Les pastilles au dioxyde de chlore tuent la plupart des germes.
iodine | l'iode | L'iode donne mauvais goût à l'eau.
waiting time | le temps d'attente | Vérifie le temps d'attente sur l'emballage.
dose | la dose | Utilise la bonne dose selon la quantité d'eau.
liter | le litre | Lis combien de litres traite une pastille.
taste | le goût ; avoir le goût de | L'eau a un goût de piscine.
squeeze filter | le filtre à presser | Un filtre à presser est léger et rapide.
gravity filter | le filtre par gravité | Un filtre par gravité fonctionne pendant que tu installes le camp.
UV purifier | le purificateur UV | Un purificateur UV a besoin de piles et d'eau claire.
sediment | le sédiment ; le dépôt | Laisse d'abord le dépôt se former.
settle | décanter | Laisse l'eau décanter une heure.
prefilter | préfiltrer | Préfiltre l'eau trouble à travers un bandana.
bacteria | les bactéries | L'ébullition tue les bactéries.
virus | le virus | La plupart des filtres portables n'éliminent pas les virus.
diarrhea | la diarrhée | L'eau sale peut provoquer la diarrhée.
vomit | vomir | Il a commencé à vomir.
Formosan rock macaque | le macaque de Formose | Les macaques de Formose volent souvent de la nourriture.
charge | charger | Le sanglier nous a chargés.
pack | la meute | Une meute de chiens nous a suivis.
territorial | territorial | Les chiens peuvent être territoriaux près des fermes.
aggressive | agressif | Ce chien a l'air agressif.
eye contact | le contact visuel | Évite le contact visuel avec le singe.
make yourself big | se faire grand | Lève les bras et fais-toi grand.
centipede | le mille-pattes ; la scolopendre | Une morsure de scolopendre est très douloureuse.
wasp | la guêpe | Des guêpes ont fait un nid près du sentier.
nest | le nid | Éloigne-toi du nid.
rabies | la rage | Les blaireaux-furets de Taïwan peuvent être porteurs de la rage.
ferret-badger | le blaireau-furet | Ne touche pas un blaireau-furet malade.
bite wound | la plaie de morsure | Nettoie immédiatement la plaie de morsure.
tetanus shot | le vaccin antitétanique | Tu auras peut-être besoin d'un vaccin antitétanique.
hang your food | suspendre sa nourriture | Suspends ta nourriture loin de la tente.
scent | l'odeur | Les animaux suivent l'odeur de la nourriture.
survival of the fittest | la loi du plus fort | Ici, c'est la loi du plus fort.
keep your head | garder la tête froide | Garde la tête froide en cas d'urgence.
lose your head | perdre la tête ; perdre ses moyens | Ne perds pas tes moyens.
a matter of life and death | une question de vie ou de mort | L'eau est une question de vie ou de mort.
fend for yourself | se débrouiller seul | Dans la nature, tu te débrouilles seul.
live off the land | vivre de ce que donne la nature | Ils vivent de ce que donne la nature en été.
safe and sound | sain et sauf | Ils ont été retrouvés sains et saufs.
in the middle of nowhere | au milieu de nulle part | Nous nous sommes perdus au milieu de nulle part.
by the skin of your teeth | de justesse ; d'un cheveu | Tu t'en es tiré de justesse.
hang on for dear life | s'accrocher de toutes ses forces | Accroche-toi de toutes tes forces à la falaise !
on your last legs | à bout de forces | Tu as l'air à bout de forces.
against the clock | contre la montre | Les secours travaillent contre la montre.
save your breath | économiser sa salive | Économise ta salive, personne ne nous entend.
cut your losses | limiter les dégâts | Fais demi-tour et limite les dégâts.
the coast is clear | la voie est libre | L'ours est parti. La voie est libre.
`,
  phrases: `
Remember the rule of threes. | Souviens-toi de la règle des trois.
You can survive about three minutes without air, three hours in harsh weather without shelter, three days without water and three weeks without food. | On peut survivre environ trois minutes sans air, trois heures sans abri par mauvais temps, trois jours sans eau et trois semaines sans nourriture.
Use STOP: stop, think, observe and plan. | Applique STOP : s'arrêter, réfléchir, observer et planifier.
Most lost people walk farther and make things worse. | La plupart des gens perdus marchent plus loin et aggravent la situation.
If you're lost, stay put and let rescuers come to you. | Si tu es perdu, reste sur place et laisse les secours venir à toi.
Try to retrace your steps to the last trail marker. | Essaie de revenir sur tes pas jusqu'à la dernière balise.
In Taiwan's mountains, go up to the ridge, not down to the stream. | Dans les montagnes de Taïwan, monte vers la crête, ne descends pas vers le ruisseau.
Streams often lead to waterfalls and cliffs. | Les ruisseaux mènent souvent à des cascades et des falaises.
Gullies look easy at first, then turn into dead ends. | Les ravines semblent faciles au début, puis deviennent des impasses.
Climb to an open spot where you can get a signal and be seen. | Monte dans un endroit dégagé où tu peux capter du réseau et être vu.
If your carrier has no signal, try dialing 112. | Si ton opérateur ne capte pas, essaie de composer le 112.
Send a text with your GPS coordinates. | Envoie un SMS avec tes coordonnées GPS.
Texts often get through when calls don't. | Les SMS passent souvent quand les appels ne passent pas.
Switch to airplane mode between check-ins to save battery. | Passe en mode avion entre deux contacts pour économiser la batterie.
Keep your phone warm inside your jacket. | Garde ton téléphone au chaud dans ta veste.
Three of anything is a distress signal. | Trois de n'importe quoi, c'est un signal de détresse.
Three whistle blasts, three fires, or three flashes of light. | Trois coups de sifflet, trois feux ou trois éclats de lumière.
Flash the signal mirror at the helicopter. | Fais des signaux à l'hélicoptère avec le miroir.
Spread out something bright on the ground. | Étale quelque chose de voyant par terre.
Write SOS in large letters with rocks or branches. | Écris SOS en grandes lettres avec des pierres ou des branches.
Smoke is easier to see in the daytime, and fire at night. | La fumée se voit mieux le jour, et le feu la nuit.
Get off the cold ground. Insulation is everything. | Ne reste pas sur le sol froid. L'isolation, c'est essentiel.
Pile up dry leaves to sleep on. | Entasse des feuilles sèches pour dormir dessus.
Build a small shelter. Small spaces stay warmer. | Construis un petit abri. Les petits espaces restent plus chauds.
Wrap yourself in the emergency blanket. | Enveloppe-toi dans la couverture de survie.
Wet clothes pull heat from your body fast. | Les vêtements mouillés font perdre la chaleur du corps très vite.
Cotton kills. Wear wool or synthetic layers. | Le coton tue. Porte des couches en laine ou en synthétique.
If you're shivering hard, stop and warm up now. | Si tu grelottes fort, arrête-toi et réchauffe-toi tout de suite.
Hypothermia can happen even at ten degrees if you're wet and windy. | L'hypothermie peut survenir même à dix degrés si tu es mouillé et exposé au vent.
Ration your food, not your water. | Rationne ta nourriture, pas ton eau.
Collect rainwater with the tarp. | Récupère l'eau de pluie avec la bâche.
Filter the water through a cloth, then boil it. | Filtre l'eau à travers un tissu, puis fais-la bouillir.
Bring the water to a rolling boil for at least one minute. | Porte l'eau à pleine ébullition pendant au moins une minute.
Don't eat snow. It lowers your body temperature. | Ne mange pas de neige. Ça fait baisser ta température.
Start with tinder, add kindling, then bigger wood. | Commence par l'amadou, ajoute le petit bois, puis les grosses bûches.
Build the fire out of the wind. | Fais le feu à l'abri du vent.
A fire starter works even when it's wet. | Un allume-feu fonctionne même mouillé.
Never eat a wild mushroom you can't identify. | Ne mange jamais un champignon sauvage que tu ne sais pas identifier.
You won't starve in a few days. Water and warmth come first. | On ne meurt pas de faim en quelques jours. L'eau et la chaleur passent d'abord.
Taiwan has six common venomous snakes. | Taïwan compte six serpents venimeux courants.
Most snakes will leave if you give them space. | La plupart des serpents s'en vont si on leur laisse de la place.
Use a trekking pole to check the grass ahead. | Sonde l'herbe devant toi avec un bâton de randonnée.
If you're bitten, stay calm and keep the limb still. | Si tu es mordu, reste calme et garde le membre immobile.
Don't cut the wound or suck out the venom. | N'incise pas la plaie et n'aspire pas le venin.
Take a photo of the snake if it's safe. | Prends le serpent en photo si c'est sans danger.
If hornets attack, run at least fifty meters away. | Si des frelons attaquent, cours au moins à cinquante mètres.
Protect your head and neck while you run. | Protège ta tête et ton cou en courant.
Don't lie down or swing at them. | Ne te couche pas et ne les frappe pas.
Hornets are most aggressive in autumn. | Les frelons sont les plus agressifs en automne.
Don't wear black or strong perfume on the trail. | Ne porte pas de noir ni de parfum fort sur le sentier.
If you see a bear, don't run. | Si tu vois un ours, ne cours pas.
Stay calm and back away slowly. | Reste calme et recule lentement.
Make noise so bears know you're coming. | Fais du bruit pour que les ours sachent que tu arrives.
Check your body for ticks after the hike. | Vérifie que tu n'as pas de tiques après la randonnée.
Put pressure on the wound and keep it there. | Appuie sur la plaie et maintiens la pression.
Make a splint with two sticks and some tape. | Fais une attelle avec deux bâtons et du sparadrap.
Don't move him if you think his back is hurt. | Ne le bouge pas si tu penses que son dos est touché.
Put him in the recovery position. | Mets-le en position latérale de sécurité.
Keep him warm and talk to him. | Garde-le au chaud et parle-lui.
One person stays with the injured, and two go for help. | Une personne reste avec le blessé, deux vont chercher de l'aide.
Never send one person alone for help. | N'envoie jamais une personne seule chercher de l'aide.
Mark the spot on the map before you leave. | Marque l'endroit sur la carte avant de partir.
Leave a note saying which way you went. | Laisse un mot indiquant la direction que tu as prise.
Rescuers start searching when you're overdue. | Les secours commencent les recherches quand tu n'es pas rentré à l'heure.
That's why your itinerary matters. | C'est pour ça que ton itinéraire compte.
Agree on a turnaround time before you start. | Mettez-vous d'accord sur une heure de demi-tour avant de partir.
We have two hours of daylight left. | Il nous reste deux heures de jour.
Let's find a place to stay before nightfall. | Trouvons un endroit où passer la nuit avant qu'il fasse noir.
Never cross a river after heavy rain. | Ne traverse jamais une rivière après de fortes pluies.
Unbuckle your backpack's hip belt before crossing. | Détache la ceinture de ton sac avant de traverser.
Face upstream and move one step at a time. | Fais face à l'amont et avance pas à pas.
If the water is above your knees, don't cross. | Si l'eau dépasse tes genoux, ne traverse pas.
Get away from the riverbed if the water turns muddy. | Éloigne-toi du lit de la rivière si l'eau devient boueuse.
In a thunderstorm, get off the ridge immediately. | Pendant un orage, quitte la crête immédiatement.
Don't shelter under a lone tree. | Ne t'abrite pas sous un arbre isolé.
Spread out so lightning can't hit everyone. | Dispersez-vous pour que la foudre ne frappe pas tout le monde.
Keep up morale. Talk, joke and make a plan. | Garde le moral. Parlez, plaisantez et faites un plan.
Give everyone a job. It helps with fear. | Donne une tâche à chacun. Ça aide contre la peur.
Save your energy. Don't shout all the time. | Économise ton énergie. Ne crie pas tout le temps.
Use the whistle instead. It carries farther. | Utilise plutôt le sifflet. Il porte plus loin.
Wear a bright jacket so rescuers can spot you. | Porte une veste voyante pour que les secours te repèrent.
Stay in one place, and make that place visible. | Reste au même endroit, et rends cet endroit visible.
My survival kit has a whistle, a lighter, a blanket and a knife. | Mon kit de survie contient un sifflet, un briquet, une couverture et un couteau.
Always pack for an unplanned night out. | Prévois toujours de quoi passer une nuit imprévue dehors.
A headlamp is more useful than a flashlight. | Une lampe frontale est plus utile qu'une lampe de poche.
Bring spare batteries for the headlamp. | Prends des piles de rechange pour la frontale.
Carry a power bank and a charging cable. | Emporte une batterie externe et un câble de recharge.
Download the trail map before you lose signal. | Télécharge la carte des sentiers avant de perdre le réseau.
Learn to use a compass, not just your phone. | Apprends à utiliser une boussole, pas seulement ton téléphone.
Take a first aid course before your next big trip. | Suis une formation aux premiers secours avant ta prochaine grande sortie.
Even short day hikes can go wrong. | Même une courte randonnée d'une journée peut mal tourner.
Most rescues are of hikers on easy, popular trails. | La plupart des secours concernent des randonneurs sur des sentiers faciles et fréquentés.
Fill out your mountain climbing registration. | Remplis ta déclaration de randonnée en montagne.
Hike with a group, and never leave anyone behind. | Randonne en groupe et ne laisse jamais personne derrière.
The leader walks in front, and the sweep walks at the back. | Le guide marche devant et le serre-file derrière.
Do a headcount at every junction. | Compte tout le monde à chaque bifurcation.
If you get separated, stop and wait. | Si vous êtes séparés, arrête-toi et attends.
Turning back is a smart decision, not a failure. | Faire demi-tour est une décision intelligente, pas un échec.
Bring a warm hat and gloves, even in summer. | Prends un bonnet chaud et des gants, même en été.
Mountain weather changes fast. | Le temps change vite en montagne.
Always treat water from streams, even in the mountains. | Traite toujours l'eau des ruisseaux, même en montagne.
Collect water upstream of the campsite. | Prends l'eau en amont du campement.
Avoid stagnant water. | Évite l'eau stagnante.
Look for a water source before it gets dark. | Cherche un point d'eau avant qu'il fasse noir.
Let the cloudy water settle, then pour off the top. | Laisse décanter l'eau trouble, puis verse le dessus.
Prefilter it through a bandana. | Préfiltre-la à travers un bandana.
Bring the water to a rolling boil for one minute. | Porte l'eau à pleine ébullition pendant une minute.
Above two thousand meters, boil it for three minutes. | Au-dessus de deux mille mètres, fais-la bouillir trois minutes.
Read the instructions on the purification tablets. | Lis les instructions des pastilles de purification.
How many liters does one tablet treat? | Combien de litres traite une pastille ?
Wait the full time before you drink. | Attends le temps indiqué avant de boire.
Cold water needs a longer waiting time. | L'eau froide demande un temps d'attente plus long.
Don't forget to treat the bottle cap and threads. | N'oublie pas de traiter le bouchon et le pas de vis.
Iodine tablets aren't for pregnant women. | Les pastilles d'iode ne conviennent pas aux femmes enceintes.
The water tastes like chlorine, but it's safe. | L'eau a un goût de chlore, mais elle est sûre.
My squeeze filter is getting slow. | Mon filtre à presser devient lent.
Most portable filters don't remove viruses. | La plupart des filtres portables n'éliminent pas les virus.
A UV purifier doesn't work well in cloudy water. | Un purificateur UV fonctionne mal dans l'eau trouble.
Carry a backup, like tablets or a stove. | Emporte une solution de secours, comme des pastilles ou un réchaud.
He's got diarrhea. Make sure he drinks enough. | Il a la diarrhée. Assure-toi qu'il boive assez.
If a dog growls, stop and stand side-on. | Si un chien grogne, arrête-toi et mets-toi de profil.
Don't turn your back and run. | Ne tourne pas le dos pour t'enfuir.
Use your trekking pole to keep the dog away. | Utilise ton bâton pour tenir le chien à distance.
A pack of dogs is more dangerous than one dog. | Une meute de chiens est plus dangereuse qu'un seul chien.
Stray dogs are often territorial near farms and temples. | Les chiens errants sont souvent territoriaux près des fermes et des temples.
If a boar charges, get behind a tree or climb onto a rock. | Si un sanglier charge, mets-toi derrière un arbre ou monte sur un rocher.
Give a mother boar and her piglets plenty of space. | Laisse beaucoup de place à une laie et ses marcassins.
Formosan rock macaques can grab bags and food. | Les macaques de Formose peuvent arracher sacs et nourriture.
Don't show your teeth or smile at a monkey. | Ne montre pas les dents et ne souris pas à un singe.
Showing teeth is a threat to them. | Pour eux, montrer les dents est une menace.
Stay away from wasp nests. | Éloigne-toi des nids de guêpes.
Shake out your boots. Centipedes like to hide inside. | Secoue tes chaussures. Les scolopendres aiment s'y cacher.
Hang your food bag away from the tent. | Suspends ton sac de nourriture loin de la tente.
Clean any bite wound for at least fifteen minutes. | Nettoie toute morsure pendant au moins quinze minutes.
Any mammal bite could carry rabies. | Toute morsure de mammifère peut transmettre la rage.
Ask the doctor about a tetanus shot. | Demande au médecin pour le vaccin antitétanique.
`,
});

// ---------- 高級 Advanced ----------
addFrench("survival", {
  words: `
survival mindset | l'état d'esprit de survie | L'état d'esprit de survie compte plus que le matériel.
risk assessment | l'évaluation des risques | Fais une rapide évaluation des risques avant de bouger.
decision fatigue | la fatigue décisionnelle | La fatigue décisionnelle mène à de mauvais choix.
summit fever | l'obsession du sommet | L'obsession du sommet a tué beaucoup d'alpinistes.
normalcy bias | le biais de normalité | Le biais de normalité pousse les gens à ignorer les avertissements.
overconfidence | l'excès de confiance | L'excès de confiance est une cause fréquente d'accidents.
complacency | le relâchement ; la suffisance | Le relâchement s'installe sur les sentiers familiers.
contingency | la solution de repli | Ayez toujours une solution de repli en cas de mauvais temps.
escape route | l'itinéraire de repli | Connaissez votre itinéraire de repli avant de partir.
point of no return | le point de non-retour | Faites demi-tour avant le point de non-retour.
disorientation | la désorientation | Le brouillard provoque la désorientation.
whiteout | le jour blanc | Par jour blanc, on ne voit plus le sol.
dead reckoning | la navigation à l'estime | Navigue à l'estime quand tu ne vois aucun repère.
triangulation | la triangulation | La triangulation donne ta position sur la carte.
magnetic declination | la déclinaison magnétique | Corrige ta boussole selon la déclinaison magnétique.
topographic map | la carte topographique | Apprends à lire une carte topographique.
contour interval | l'équidistance des courbes | L'équidistance des courbes est de 20 mètres.
handrail | la ligne directrice ; la main courante | Utilise la rivière comme ligne directrice pour t'orienter.
catching feature | la ligne d'arrêt | La route est notre ligne d'arrêt.
collecting feature | le repère de collecte | Le ruisseau est un bon repère de collecte.
ground-to-air signal | le signal sol-air | Un grand X est un signal sol-air signifiant « besoin d'aide médicale ».
personal locator beacon | la balise de localisation personnelle | Une balise de localisation personnelle envoie ta position par satellite.
satellite messenger | le communicateur satellite | Mon communicateur satellite peut envoyer des messages sans réseau.
emergency SOS via satellite | l'appel d'urgence par satellite | Certains téléphones permettent l'appel d'urgence par satellite.
thermal imaging | l'imagerie thermique | Les hélicoptères utilisent l'imagerie thermique pour retrouver les gens la nuit.
search grid | le quadrillage de recherche | Les secours ont découpé la forêt en quadrillage de recherche.
probability of detection | la probabilité de détection | Les couleurs vives augmentent la probabilité de détection.
lost person behavior | le comportement des personnes égarées | Le comportement des personnes égarées aide les secours à prévoir où elles vont.
core temperature | la température centrale | Sa température centrale est descendue sous 35 °C.
afterdrop | la chute de température post-sauvetage | Réchauffez lentement pour éviter la chute de température après le sauvetage.
conduction | la conduction | On perd de la chaleur par conduction avec le sol froid.
convection | la convection | Le vent vole la chaleur par convection.
evaporation | l'évaporation | La sueur refroidit par évaporation.
radiation | le rayonnement | Le corps perd de la chaleur par rayonnement.
vasoconstriction | la vasoconstriction | La vasoconstriction garde le sang chaud au centre du corps.
frostbite | la gelure | Les gelures peuvent survenir au-dessus de 3 000 mètres en hiver.
hyponatremia | l'hyponatrémie | Boire trop d'eau pure peut provoquer une hyponatrémie.
electrolytes | les électrolytes | Ajoute des électrolytes à ton eau.
waterborne disease | la maladie d'origine hydrique | Une maladie d'origine hydrique peut te rendre malade des semaines.
giardia | la giardia | La giardia vit dans l'eau de ruisseau non traitée.
leptospirosis | la leptospirose | La leptospirose se transmet par l'eau après les inondations.
pathogen | l'agent pathogène | L'ébullition tue la plupart des agents pathogènes.
solar still | le distillateur solaire | Un distillateur solaire produit très peu d'eau.
transpiration bag | le sac de transpiration | Attache un sac de transpiration autour de branches feuillues.
foraging | la cueillette sauvage | La cueillette sauvage consomme plus d'énergie qu'elle n'en apporte.
universal edibility test | le test universel de comestibilité | Le test universel de comestibilité est lent et risqué.
toxic look-alike | le sosie toxique | Beaucoup de plantes comestibles ont un sosie toxique.
caloric deficit | le déficit calorique | Un déficit calorique est normal en situation de survie.
neurotoxic | neurotoxique | Le venin du bongare annelé est neurotoxique.
hemotoxic | hémotoxique | Le venin du crotale « cent pas » est hémotoxique.
immobilize | immobiliser | Immobilise le membre mordu.
antivenom | le sérum antivenimeux | Va dans un hôpital qui a du sérum antivenimeux.
anaphylactic shock | le choc anaphylactique | Plusieurs piqûres de frelon peuvent provoquer un choc anaphylactique.
epinephrine auto-injector | le stylo auto-injecteur d'adrénaline | Utilise le stylo d'adrénaline sur l'extérieur de la cuisse.
improvised | improvisé ; de fortune | Nous avons fabriqué un brancard de fortune.
stretcher | le brancard | Portez-le sur un brancard.
evacuation | l'évacuation | L'évacuation par hélicoptère a pris une heure.
hoist | le treuil ; l'hélitreuillage | L'hélicoptère l'a hélitreuillé.
triage | le triage | Le triage décide qui est secouru en premier.
spinal injury | la lésion de la colonne vertébrale | Ne déplacez pas quelqu'un qui a une lésion de la colonne.
head injury | le traumatisme crânien | Surveillez la confusion après un traumatisme crânien.
concussion | la commotion cérébrale | Il a peut-être une commotion cérébrale.
compartment syndrome | le syndrome des loges | Les écrasements peuvent provoquer un syndrome des loges.
shock | l'état de choc | Gardez le blessé au chaud pour prévenir l'état de choc.
vital signs | les signes vitaux | Vérifiez les signes vitaux toutes les dix minutes.
flash flood | la crue éclair | Les crues éclair peuvent arriver sous un ciel bleu.
debris flow | la coulée de boue | La coulée de boue a enseveli le sentier.
rockfall | la chute de pierres | Les chutes de pierres sont fréquentes après les séismes.
lightning position | la position de sécurité contre la foudre | Accroupis-toi en position de sécurité, pieds joints.
afternoon thunderstorm | l'orage d'après-midi | Quitte la crête avant l'orage d'après-midi.
microburst | la rafale descendante | Une rafale descendante peut aplatir les tentes.
exposure | l'exposition aux éléments | L'exposition aux éléments tue plus de randonneurs que les animaux.
mountain climbing registration | la déclaration de randonnée en montagne | Envoyez votre déclaration de randonnée avant le départ.
search and rescue costs | les frais de recherche et de secours | Les randonneurs qui enfreignent les règles peuvent payer les frais de secours.
restricted area | la zone réglementée | Entrer dans une zone réglementée sans permis est illégal.
liability | la responsabilité | L'organisateur pourrait voir sa responsabilité engagée dans l'accident.
group dynamics | la dynamique de groupe | Une mauvaise dynamique de groupe peut mener à de mauvaises décisions.
leadership | le leadership ; la direction | Un leadership clair compte en cas d'urgence.
split up | se séparer | Ne séparez jamais le groupe par mauvais temps.
self-rescue | l'auto-sauvetage | L'auto-sauvetage est possible pour les blessures légères.
assisted rescue | le sauvetage assisté | Une jambe cassée nécessite un sauvetage assisté.
bivouac | bivouaquer ; le bivouac | Nous avons dû bivouaquer sur la crête.
unplanned night out | la nuit imprévue dehors | Préparez-vous à une nuit imprévue dehors.
ten essentials | les dix indispensables | Emportez toujours les dix indispensables.
redundancy | la redondance | La redondance compte pour l'éclairage et le feu.
resourcefulness | la débrouillardise | La débrouillardise transforme les déchets en outils.
resilience | la résilience | La résilience mentale maintient les gens en vie.
situational awareness | la conscience de la situation | La conscience de la situation évite la plupart des accidents.
tunnel vision | la vision en tunnel | La panique provoque une vision en tunnel.
psychological first aid | les premiers secours psychologiques | Les premiers secours psychologiques aident les survivants à faire face.
post-traumatic stress | le stress post-traumatique | Certains survivants souffrent de stress post-traumatique.
hindsight | le recul ; après coup | Après coup, tout paraît évident.
lessons learned | les enseignements tirés | Chaque rapport de secours contient des enseignements.
complacent | trop sûr de soi | Même les experts deviennent trop sûrs d'eux.
humility | l'humilité | La montagne récompense l'humilité.
shelter site | l'emplacement de l'abri | Choisis un emplacement d'abri loin des arbres morts.
widowmaker | la branche morte menaçante | Lève les yeux pour repérer les branches mortes.
body heat | la chaleur corporelle | Partagez votre chaleur corporelle pour rester au chaud.
calorie-dense | riche en calories | Emporte des aliments riches en calories comme des noix.
signaling device | le dispositif de signalisation | Un sifflet est le dispositif de signalisation le moins cher.
microfilter | le microfiltre | Un microfiltre élimine les bactéries et les protozoaires.
hollow-fiber membrane | la membrane à fibres creuses | La plupart des filtres à presser utilisent une membrane à fibres creuses.
pore size | la taille des pores | Des pores de 0,1 micron arrêtent les bactéries.
micron | le micron | Un micron, c'est un millième de millimètre.
protozoa | les protozoaires | Les protozoaires comme la giardia causent des troubles digestifs.
Cryptosporidium | le cryptosporidium | Le cryptosporidium résiste au chlore ordinaire.
contact time | le temps de contact | Le dioxyde de chlore demande un temps de contact plus long dans l'eau froide.
turbidity | la turbidité | Une forte turbidité rend le traitement chimique moins efficace.
activated carbon | le charbon actif | Le charbon actif améliore le goût et élimine certains produits chimiques.
chemical contamination | la contamination chimique | L'ébullition n'élimine pas la contamination chimique.
agricultural runoff | le ruissellement agricole | Les ruisseaux en aval des fermes peuvent contenir du ruissellement agricole.
cross-contamination | la contamination croisée | Séparez les bouteilles sales et propres pour éviter la contamination croisée.
backflush | rétrolaver | Rétrolave le filtre quand le débit ralentit.
clog | colmater ; boucher | L'eau limoneuse va colmater ton filtre.
freeze | geler | Ne laisse pas un filtre à fibres creuses geler.
boiling point | le point d'ébullition | En altitude, le point d'ébullition de l'eau est plus bas.
disinfect | désinfecter | Désinfecte l'eau avant de la boire.
potable | potable | Cette eau est potable ?
provoke | provoquer | Ne provoque pas l'animal.
predatory | prédateur | La plupart des attaques ne sont pas des attaques de prédateur.
defensive | défensif | Une laie avec ses marcassins peut être très défensive.
habituated | habitué à l'homme | Les singes habitués à l'homme n'en ont plus peur.
food-conditioned | habitué à être nourri | Les animaux habitués à être nourris deviennent dangereux.
bluff charge | la fausse charge | Les ours font parfois une fausse charge.
bear spray | le spray anti-ours | Garde le spray anti-ours à portée de main.
deterrent | le moyen de dissuasion | Un sifflet puissant peut être un bon moyen de dissuasion.
fight back | se défendre ; riposter | Si un ours noir t'attaque, défends-toi.
protect your neck | se protéger la nuque | Roule-toi en boule et protège ta nuque.
post-exposure prophylaxis | la prophylaxie post-exposition | La prophylaxie post-exposition contre la rage doit commencer au plus vite.
rabies vaccine | le vaccin antirabique | Il te faudra une série de vaccins antirabiques.
zoonotic disease | la zoonose | La rage est une zoonose.
tusk | la défense | Les défenses d'un sanglier peuvent causer des blessures profondes.
envenomation | l'envenimation | De multiples piqûres peuvent provoquer une envenimation grave.
apex predator | le superprédateur | L'ours noir de Formose est le superprédateur de Taïwan.
batten down the hatches | se préparer au pire | Un typhon arrive ; préparons-nous au pire.
hope for the best, prepare for the worst | espérer le meilleur, se préparer au pire | Espère le meilleur, prépare-toi au pire.
a race against time | une course contre la montre | Trouver de l'eau était une course contre la montre.
weather the storm | traverser la tempête | Nous pouvons traverser la tempête ensemble.
go to ground | se terrer | Par mauvais temps, les randonneurs devraient se terrer jusqu'à l'aube.
dig in your heels | tenir bon | Tiens bon et n'abandonne pas.
live to fight another day | reculer pour mieux sauter | Fais demi-tour maintenant ; il faut savoir reculer pour mieux sauter.
at the eleventh hour | à la dernière minute | Les secours sont arrivés à la dernière minute.
lose your bearings | perdre le nord | On perd facilement le nord dans le brouillard.
a blessing in disguise | un mal pour un bien | La pluie a été un mal pour un bien.
a fighting chance | une chance de s'en sortir | Avec de l'eau, nous avons une chance de nous en sortir.
in dire straits | dans une situation désespérée | Sans nourriture, nous étions dans une situation désespérée.
come what may | quoi qu'il arrive | Quoi qu'il arrive, nous restons ensemble.
a last resort | un dernier recours | Manger des insectes est un dernier recours.
on a wing and a prayer | par miracle ; avec les moyens du bord | Nous sommes redescendus par miracle.
`,
  phrases: `
A survival mindset matters more than any piece of gear. | L'état d'esprit de survie compte plus que n'importe quel équipement.
Panic causes tunnel vision and bad decisions. | La panique provoque une vision en tunnel et de mauvaises décisions.
Most survival situations begin with a small mistake that snowballs. | La plupart des situations de survie commencent par une petite erreur qui fait boule de neige.
Summit fever has killed more climbers than storms. | L'obsession du sommet a tué plus d'alpinistes que les tempêtes.
Normalcy bias makes people ignore early warning signs. | Le biais de normalité pousse à ignorer les premiers signaux d'alerte.
Complacency is most dangerous on familiar trails. | Le relâchement est le plus dangereux sur les sentiers familiers.
Decide on a turnaround time and treat it as non-negotiable. | Fixez une heure de demi-tour et considérez-la comme non négociable.
Know your escape route before you need it. | Connaissez votre itinéraire de repli avant d'en avoir besoin.
In fog or a whiteout, disorientation sets in within minutes. | Dans le brouillard ou par jour blanc, la désorientation s'installe en quelques minutes.
Use dead reckoning: direction, distance and time. | Naviguez à l'estime : direction, distance et temps.
Triangulate your position from two known landmarks. | Triangulez votre position à partir de deux repères connus.
Remember to adjust for magnetic declination. | N'oubliez pas de corriger la déclinaison magnétique.
Use the river as a handrail and the road as a catching feature. | Servez-vous de la rivière comme ligne directrice et de la route comme ligne d'arrêt.
Close contour lines mean steep ground. Avoid them in the dark. | Des courbes de niveau serrées indiquent un terrain raide. Évitez-les dans le noir.
Lost person behavior shows that people tend to walk downhill. | L'étude des personnes égarées montre qu'elles ont tendance à descendre.
Rescuers use that data to plan their search grid. | Les secours utilisent ces données pour établir leur quadrillage de recherche.
Bright colors greatly raise the probability of detection. | Les couleurs vives augmentent nettement la probabilité de détection.
A large X on the ground means you need medical help. | Un grand X au sol signifie que vous avez besoin d'une aide médicale.
A personal locator beacon sends your position by satellite. | Une balise de localisation personnelle envoie votre position par satellite.
Some phones now offer emergency SOS via satellite. | Certains téléphones proposent désormais l'appel d'urgence par satellite.
Only activate a beacon in a real emergency. | N'activez une balise qu'en cas de réelle urgence.
Rescue helicopters may use thermal imaging at night. | Les hélicoptères de secours peuvent utiliser l'imagerie thermique la nuit.
Clear a landing area and stay away from the rotor wash. | Dégagez une zone d'atterrissage et tenez-vous loin du souffle du rotor.
The body loses heat through conduction, convection, evaporation and radiation. | Le corps perd sa chaleur par conduction, convection, évaporation et rayonnement.
Lying on cold ground causes rapid heat loss by conduction. | S'allonger sur un sol froid fait perdre rapidement de la chaleur par conduction.
Once shivering stops, hypothermia has become severe. | Quand les frissons cessent, l'hypothermie est devenue grave.
Handle a hypothermic person gently and keep them horizontal. | Manipulez une personne en hypothermie avec douceur et gardez-la à l'horizontale.
Rewarm the core first to avoid afterdrop. | Réchauffez d'abord le tronc pour éviter la chute de température secondaire.
Don't rub frostbitten skin. | Ne frottez pas une peau gelée.
Drinking huge amounts of plain water can cause hyponatremia. | Boire d'énormes quantités d'eau pure peut provoquer une hyponatrémie.
Add electrolytes on long, hot days. | Ajoutez des électrolytes lors des longues journées chaudes.
Untreated water can carry giardia and other pathogens. | L'eau non traitée peut contenir de la giardia et d'autres agents pathogènes.
Floodwater may carry leptospirosis. | L'eau de crue peut transmettre la leptospirose.
A solar still produces far less water than most people think. | Un distillateur solaire produit bien moins d'eau qu'on ne le croit.
Foraging usually burns more calories than it provides. | La cueillette sauvage brûle généralement plus de calories qu'elle n'en apporte.
Many edible plants have a deadly toxic look-alike. | Beaucoup de plantes comestibles ont un sosie mortel.
The universal edibility test is a last resort, not a plan. | Le test universel de comestibilité est un dernier recours, pas un plan.
A caloric deficit is uncomfortable but rarely fatal in the short term. | Un déficit calorique est désagréable mais rarement mortel à court terme.
Krait and cobra venoms are mostly neurotoxic. | Les venins de bongare et de cobra sont surtout neurotoxiques.
Viper venoms, like the hundred-pacer's, are mostly hemotoxic. | Les venins de vipéridés, comme celui du crotale « cent pas », sont surtout hémotoxiques.
Immobilize the limb and keep it at heart level. | Immobilisez le membre et maintenez-le à hauteur du cœur.
Don't use a tight tourniquet for snakebites. | N'utilisez pas de garrot serré pour une morsure de serpent.
Tell the hospital what the snake looked like so they can choose the right antivenom. | Décrivez le serpent à l'hôpital pour qu'il choisisse le bon sérum.
Multiple hornet stings can cause anaphylactic shock or kidney failure. | De multiples piqûres de frelon peuvent provoquer un choc anaphylactique ou une insuffisance rénale.
Use an epinephrine auto-injector at the first sign of anaphylaxis. | Utilisez un stylo d'adrénaline dès les premiers signes d'anaphylaxie.
Suspect a spinal injury after any serious fall. | Soupçonnez une lésion de la colonne après toute chute grave.
Watch for confusion or vomiting after a head injury. | Surveillez la confusion ou les vomissements après un traumatisme crânien.
Check vital signs regularly and write them down. | Vérifiez régulièrement les signes vitaux et notez-les.
Treat for shock: keep the patient warm, flat and calm. | Prévenez l'état de choc : gardez le blessé au chaud, allongé et calme.
We improvised a stretcher from two poles and a jacket. | Nous avons improvisé un brancard avec deux perches et une veste.
Carrying an injured person over rough ground takes many people. | Porter un blessé en terrain accidenté demande beaucoup de monde.
The helicopter used a hoist because there was nowhere to land. | L'hélicoptère a hélitreuillé le blessé faute d'endroit pour se poser.
Flash floods can arrive under clear blue skies. | Les crues éclair peuvent survenir sous un ciel bleu.
Debris flows are common after typhoons and earthquakes. | Les coulées de boue sont fréquentes après les typhons et les séismes.
Earthquakes loosen rocks for months afterward. | Les séismes déstabilisent les roches pendant des mois.
Be off exposed ridges before the afternoon thunderstorms build. | Quittez les crêtes exposées avant que les orages d'après-midi se forment.
If you're caught in lightning, crouch with your feet together. | Si l'orage vous surprend, accroupissez-vous pieds joints.
Exposure kills far more hikers than wild animals do. | Les intempéries tuent bien plus de randonneurs que les animaux sauvages.
Hikers who enter restricted areas may be charged search and rescue costs. | Les randonneurs qui entrent dans des zones réglementées peuvent devoir payer les frais de secours.
Every rescue puts the rescuers at risk too. | Chaque sauvetage met aussi les sauveteurs en danger.
Bad group dynamics lead to poor decisions. | Une mauvaise dynamique de groupe mène à de mauvaises décisions.
Nobody wants to be the one who says, "Let's turn back." | Personne ne veut être celui qui dit : « On fait demi-tour. »
Clear leadership saves time in an emergency. | Un leadership clair fait gagner du temps en cas d'urgence.
Never split up the group in bad weather. | Ne séparez jamais le groupe par mauvais temps.
Self-rescue is possible for minor injuries, but a fracture needs assisted rescue. | L'auto-sauvetage est possible pour les blessures légères, mais une fracture nécessite des secours.
An unplanned bivouac is survivable if you're prepared. | Un bivouac imprévu se surmonte si l'on est préparé.
Carry the ten essentials, even on a short hike. | Emportez les dix indispensables, même pour une courte randonnée.
Build redundancy into your light, fire and communication. | Prévoyez des solutions de secours pour l'éclairage, le feu et la communication.
Resourcefulness turns everyday items into survival tools. | La débrouillardise transforme les objets du quotidien en outils de survie.
Trash bags make excellent rain ponchos and ground sheets. | Les sacs poubelle font d'excellents ponchos et tapis de sol.
Mental resilience is what keeps people alive for days. | C'est la résilience mentale qui maintient les gens en vie pendant des jours.
Set small goals: make it through the next hour. | Fixez-vous de petits objectifs : tenir l'heure qui vient.
Survivors often say they kept going for their families. | Les survivants disent souvent avoir tenu pour leur famille.
Psychological first aid helps survivors process what happened. | Les premiers secours psychologiques aident les survivants à assimiler ce qui s'est passé.
Some survivors deal with post-traumatic stress for years. | Certains survivants souffrent de stress post-traumatique pendant des années.
Read accident reports. They're full of lessons learned. | Lisez les rapports d'accidents. Ils regorgent d'enseignements.
In hindsight, most accidents were preventable. | Avec le recul, la plupart des accidents étaient évitables.
The most dangerous phrase is "It'll be fine." | La phrase la plus dangereuse, c'est « Ça va aller ».
Experience teaches you when to say no. | L'expérience vous apprend quand dire non.
Even experts get complacent. | Même les experts finissent par se relâcher.
The mountains reward humility and punish arrogance. | La montagne récompense l'humilité et punit l'arrogance.
Preparation turns an emergency into an inconvenience. | La préparation transforme une urgence en simple contretemps.
Assume the weather will be worse than forecast. | Partez du principe que le temps sera pire que prévu.
Plan for the worst, hope for the best. | Préparez-vous au pire, espérez le meilleur.
Tell someone your plan, and stick to it. | Communiquez votre plan à quelqu'un, et tenez-vous-y.
Changing routes without telling anyone confuses rescuers. | Changer d'itinéraire sans prévenir désoriente les secours.
Rescuers search where you said you would be. | Les secours cherchent là où vous avez dit que vous seriez.
Don't let pride stop you from asking for help. | Ne laissez pas votre fierté vous empêcher de demander de l'aide.
Calling for help early is better than calling too late. | Mieux vaut appeler les secours tôt que trop tard.
The goal is not the summit. The goal is to come home. | Le but n'est pas le sommet. Le but, c'est de rentrer.
Survival is about decisions, not about heroics. | La survie tient aux décisions, pas à l'héroïsme.
Stay curious, stay humble and stay alive. | Restez curieux, restez humble et restez en vie.
Respect nature, and it will usually let you go home. | Respectez la nature, et elle vous laissera généralement rentrer.
A good trip is one where everyone comes back. | Une bonne sortie, c'est une sortie dont tout le monde revient.
The best survival story is the one that never needs to be told. | La meilleure histoire de survie, c'est celle qu'on n'a jamais besoin de raconter.
Fatigue and dehydration affect judgment long before you notice. | La fatigue et la déshydratation altèrent le jugement bien avant qu'on s'en rende compte.
Eat and drink regularly to keep your thinking clear. | Mangez et buvez régulièrement pour garder les idées claires.
Altitude sickness can affect fit, young people too. | Le mal des montagnes peut aussi toucher les jeunes en pleine forme.
If symptoms get worse, descending is the best treatment. | Si les symptômes s'aggravent, descendre est le meilleur traitement.
A wet sleeping bag loses most of its warmth. | Un sac de couchage mouillé perd l'essentiel de sa chaleur.
Boiling is the most reliable way to disinfect water. | L'ébullition est le moyen le plus fiable de désinfecter l'eau.
At high altitude, water boils at a lower temperature. | En altitude, l'eau bout à une température plus basse.
A microfilter removes bacteria and protozoa, but not viruses. | Un microfiltre élimine bactéries et protozoaires, mais pas les virus.
Chlorine dioxide also works against Cryptosporidium, given enough time. | Le dioxyde de chlore agit aussi contre le cryptosporidium, avec un temps suffisant.
High turbidity shields germs from chemicals and UV light. | Une forte turbidité protège les germes des produits chimiques et des UV.
Prefiltering extends the life of your filter. | Le préfiltrage prolonge la durée de vie de votre filtre.
Backflush the filter whenever the flow slows down. | Rétrolavez le filtre dès que le débit ralentit.
A frozen hollow-fiber filter may be damaged, and you can't tell by looking. | Un filtre à fibres creuses qui a gelé peut être endommagé, sans que cela se voie.
Sleep with your filter in your sleeping bag on cold nights. | Les nuits froides, dormez avec votre filtre dans votre sac de couchage.
Never let dirty water touch the clean side of the filter. | Ne laissez jamais l'eau sale toucher le côté propre du filtre.
Use separate bottles for dirty and clean water. | Utilisez des bouteilles différentes pour l'eau sale et l'eau propre.
Filters and boiling don't remove pesticides or heavy metals. | Ni les filtres ni l'ébullition n'éliminent les pesticides ou les métaux lourds.
Avoid water below farms, mines or roads. | Évitez l'eau en aval des fermes, des mines ou des routes.
Activated carbon can improve taste and remove some chemicals. | Le charbon actif peut améliorer le goût et éliminer certains produits chimiques.
Combine methods: filter for protozoa, then use tablets for viruses. | Combinez les méthodes : filtrez contre les protozoaires, puis utilisez des pastilles contre les virus.
Is this water potable, or only for washing? | Cette eau est potable, ou seulement pour se laver ?
Most animal attacks are defensive, not predatory. | La plupart des attaques d'animaux sont défensives, pas prédatrices.
Animals usually attack when they feel cornered or surprised. | Les animaux attaquent généralement quand ils se sentent acculés ou surpris.
Never get between a mother and her young. | Ne vous mettez jamais entre une mère et ses petits.
Feeding wildlife creates food-conditioned animals. | Nourrir la faune crée des animaux habitués à être nourris.
Habituated macaques may bite if you refuse to hand over food. | Les macaques habitués à l'homme peuvent mordre si vous refusez de donner à manger.
A boar's tusks can cause deep wounds to the legs. | Les défenses d'un sanglier peuvent causer des plaies profondes aux jambes.
If a dog attacks, protect your face and neck. | Si un chien attaque, protégez votre visage et votre cou.
If you're knocked down, curl up and protect your neck with your hands. | Si vous êtes renversé, roulez-vous en boule et protégez votre nuque avec vos mains.
A bear will usually avoid you if it hears you coming. | Un ours vous évitera généralement s'il vous entend arriver.
Many charges are bluff charges. Stand your ground and back away slowly. | Beaucoup de charges sont des fausses charges. Tenez bon et reculez lentement.
If a black bear makes contact, fight back with everything you have. | Si un ours noir vous touche, défendez-vous de toutes vos forces.
Report any bear sighting to the park rangers. | Signalez toute observation d'ours aux gardes du parc.
Rabies has been found in Taiwan's ferret-badgers since 2013. | La rage est détectée chez les blaireaux-furets de Taïwan depuis 2013.
Rabies is almost always fatal once symptoms appear. | La rage est presque toujours mortelle une fois les symptômes apparus.
Post-exposure prophylaxis is very effective if started early. | La prophylaxie post-exposition est très efficace si elle commence tôt.
Wash the wound with soap and running water for fifteen minutes. | Lavez la plaie à l'eau courante et au savon pendant quinze minutes.
Note what the animal looked like and where it happened. | Notez à quoi ressemblait l'animal et où cela s'est produit.
Don't try to catch or kill the animal yourself. | N'essayez pas d'attraper ou de tuer l'animal vous-même.
Multiple wasp stings can cause serious envenomation. | De multiples piqûres de guêpe peuvent provoquer une envenimation grave.
Wild animals are not pets, however cute they look. | Les animaux sauvages ne sont pas des animaux de compagnie, aussi mignons soient-ils.
`,
});
