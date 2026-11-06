// 法文對照（Français）：露營
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
addFrench("camping", {
  words: `
camping | le camping | Nous faisons du camping chaque été.
camp | camper ; le camp | Campons au bord du lac.
tent | la tente | Nous avons monté la tente avant la nuit.
campsite | l'emplacement ; le terrain de camping | Notre emplacement est à côté de la rivière.
campfire | le feu de camp | Nous étions assis autour du feu de camp.
sleeping bag | le sac de couchage | Mon sac de couchage est chaud.
pillow | l'oreiller | J'ai oublié mon oreiller.
mat | le tapis de sol | Mets un tapis de sol sous ton sac de couchage.
flashlight | la lampe de poche | Prends une lampe de poche.
headlamp | la lampe frontale | Une lampe frontale te laisse les mains libres.
lantern | la lanterne | Accroche la lanterne dans la tente.
battery | la pile | La pile est morte.
backpack | le sac à dos | Mon sac à dos est lourd.
water bottle | la gourde | Remplis ta gourde.
cup | la tasse ; le gobelet | Passe-moi un gobelet.
plate | l'assiette | Nous avons utilisé des assiettes en carton.
pot | la casserole ; la marmite | Fais bouillir de l'eau dans la casserole.
pan | la poêle | Fais cuire les œufs dans la poêle.
stove | le réchaud | Allume le réchaud avec précaution.
grill | le gril ; la grille | Mets la viande sur le gril.
barbecue | le barbecue | Nous avons fait un barbecue au camping.
charcoal | le charbon de bois | Il nous faut plus de charbon de bois.
wood | le bois | Ramasse du bois sec.
match | l'allumette | Les allumettes ont pris l'eau.
lighter | le briquet | Tu as un briquet ?
marshmallow | le marshmallow ; la guimauve | Faisons griller des marshmallows !
sausage | la saucisse | Les saucisses sont prêtes.
instant noodles | les nouilles instantanées | Nous avons mangé des nouilles instantanées au dîner.
snack | l'en-cas ; le grignotage | J'ai apporté plein d'en-cas.
cooler | la glacière | Garde les boissons dans la glacière.
ice | la glace ; les glaçons | Achète de la glace en route.
table | la table | Installe la table ici.
chair | la chaise | Prends une chaise pliante.
blanket | la couverture | Il fait froid. Prends une couverture.
jacket | la veste | Prends une veste chaude.
raincoat | l'imperméable ; le ciré | Emporte un imperméable, au cas où.
umbrella | le parapluie | Un parapluie peut aussi servir.
hat | le chapeau | Porte un chapeau au soleil.
sunscreen | la crème solaire | Mets de la crème solaire.
bug spray | l'anti-moustiques | Utilise de l'anti-moustiques le soir.
mosquito | le moustique | Les moustiques sont terribles.
bug | la bestiole ; l'insecte | Il y a une bestiole dans ma tente !
ant | la fourmi | Les fourmis ont trouvé notre nourriture.
spider | l'araignée | Il y a une araignée sur la tente.
snake | le serpent | Attention aux serpents.
bird | l'oiseau | Les oiseaux m'ont réveillé tôt.
star | l'étoile | Regarde toutes ces étoiles !
moon | la lune | La lune est tellement brillante.
sky | le ciel | Le ciel est dégagé ce soir.
night | la nuit | La nuit était calme.
morning | le matin | L'air du matin est frais.
sunrise | le lever du soleil | Levons-nous pour le lever du soleil.
sunset | le coucher du soleil | Le coucher du soleil était magnifique.
mountain | la montagne | Nous avons campé à la montagne.
forest | la forêt | Le camping est dans une forêt.
tree | l'arbre | Accroche les vêtements à un arbre.
river | la rivière | Ne te baigne pas dans la rivière.
lake | le lac | Le lac est très calme.
beach | la plage | Nous avons campé sur la plage.
rock | le rocher | Assieds-toi sur ce gros rocher.
grass | l'herbe | Plante la tente sur l'herbe.
ground | le sol | Le sol est mouillé.
mud | la boue | Mes chaussures sont pleines de boue.
rain | la pluie | Il a plu toute la nuit.
wind | le vent | Le vent est très fort.
cold | froid | Il fait froid la nuit.
hot | chaud | Il fait trop chaud dans la tente.
wet | mouillé | Mes chaussettes sont mouillées.
dry | sec | Garde tes vêtements au sec.
toilet | les toilettes | Où sont les toilettes ?
shower | la douche | Il y a une douche chaude ?
sink | l'évier ; le lavabo | Lave la vaisselle à l'évier.
trash | les déchets ; les ordures | Remporte tes déchets chez toi.
trash bag | le sac poubelle | Prends des sacs poubelle en plus.
map | la carte | Regarde la carte.
trail | le sentier | Reste sur le sentier.
hike | la randonnée ; randonner | Allons jusqu'à la cascade à pied.
waterfall | la cascade | La cascade est magnifique.
walk | la promenade | Faisons une promenade.
car | la voiture | Gare la voiture près de la tente.
park | se garer | Où peut-on se garer ?
rope | la corde | Attache-le avec une corde.
knife | le couteau | Fais attention avec le couteau.
first aid kit | la trousse de premiers secours | Où est la trousse de premiers secours ?
towel | la serviette | J'ai besoin d'une serviette sèche.
toothbrush | la brosse à dents | J'ai oublié ma brosse à dents.
socks | les chaussettes | Prends des chaussettes en plus.
boots | les chaussures de randonnée ; les bottes | Mets des chaussures de randonnée.
fun | amusant | Le camping, c'est tellement amusant !
quiet | calme ; silencieux | Silence après 22 heures, s'il vous plaît.
noisy | bruyant | Nos voisins sont bruyants.
neighbor | le voisin | Notre voisin nous a prêté une lampe.
dog | le chien | On peut amener notre chien ?
family | la famille | Nous campons en famille.
friend | l'ami | Je suis allé camper avec des amis.
weekend | le week-end | Nous camperons ce week-end.
book | réserver | Il faut réserver un emplacement.
check in | arriver ; s'enregistrer | L'arrivée se fait après 13 heures.
check out | libérer l'emplacement | Il faut libérer l'emplacement avant 11 heures.
fishing | la pêche | Nous sommes allés pêcher au lac.
gloves | les gants | Mets des gants pour ramasser le bois.
lip balm | le baume à lèvres | Le vent m'a desséché les lèvres. Tu as du baume à lèvres ?
sunglasses | les lunettes de soleil | N'oublie pas tes lunettes de soleil.
cap | la casquette | Porte une casquette pour te protéger le visage du soleil.
long sleeves | les manches longues | Les manches longues éloignent les insectes.
long pants | le pantalon long | Mets un pantalon long dans les hautes herbes.
itchy | qui gratte ; qui démange | J'ai les jambes qui me grattent !
itch | la démangeaison | Essaie de ne pas toucher la démangeaison.
scratch | se gratter | Ne te gratte pas, sinon ça va empirer.
bite | la piqûre ; la morsure | J'ai une piqûre de moustique sur le bras.
sting | la piqûre ; piquer | Une piqûre d'abeille, ça fait vraiment mal.
bee | l'abeille | Il y a une abeille sur ton chapeau !
lotion | la lotion ; le lait hydratant | Mets un peu de lait hydratant sur tes mains sèches.
cream | la crème ; la pommade | Cette crème calme les démangeaisons.
spray | le spray ; vaporiser | Vaporise-le sur tes bras et tes jambes.
bandage | le pansement | Mets un pansement sur cette coupure.
cut | la coupure | Je me suis fait une petite coupure à la main.
running shoes | les chaussures de course | Ces chaussures de course sont très légères.
sweat | la sueur ; transpirer | Je suis trempé de sueur.
sweaty | en sueur | Mon t-shirt est tout trempé de sueur.
hand sanitizer | le gel hydroalcoolique | Utilise du gel hydroalcoolique s'il n'y a pas d'eau.
mask | le masque | Porte un masque sur la route poussiéreuse.
whistle | le sifflet | Garde un sifflet sur ton sac à dos.
earplugs | les bouchons d'oreilles | Prends des bouchons d'oreilles au cas où tes voisins ronflent.
tissue | le mouchoir en papier | Je peux avoir un mouchoir ?
`,
  phrases: `
Let's go camping this weekend! | Allons camper ce week-end !
Where should we camp? | Où est-ce qu'on campe ?
I've never been camping before. | Je n'ai jamais fait de camping.
Did you bring the tent? | Tu as pris la tente ?
Let's put up the tent here. | Montons la tente ici.
The ground here is flat. | Le sol est plat ici.
Help me hold this pole. | Aide-moi à tenir cet arceau.
Where's the hammer? | Où est le maillet ?
The tent is ready! | La tente est montée !
It's bigger than I thought. | Elle est plus grande que je pensais.
Put your shoes outside the tent. | Laisse tes chaussures devant la tente.
Close the door so bugs don't get in. | Ferme la porte pour que les insectes n'entrent pas.
Is it going to rain tonight? | Il va pleuvoir ce soir ?
I'm hungry. What's for dinner? | J'ai faim. Qu'est-ce qu'on mange ce soir ?
Let's have a barbecue. | Faisons un barbecue.
Can you light the fire? | Tu peux allumer le feu ?
The fire won't start. | Le feu ne prend pas.
The wood is wet. | Le bois est mouillé.
Blow on it gently. | Souffle doucement dessus.
The meat smells great! | La viande sent super bon !
Is it cooked yet? | C'est cuit ?
Not yet. Wait a minute. | Pas encore. Attends une minute.
Pass me a plate, please. | Passe-moi une assiette, s'il te plaît.
Do you want some coffee? | Tu veux du café ?
Let's boil some water. | Faisons bouillir de l'eau.
Be careful, it's hot! | Attention, c'est chaud !
Let's roast marshmallows. | Faisons griller des marshmallows.
Mine is burned! | Le mien est brûlé !
This is the best part of camping. | C'est le meilleur moment du camping.
Look at the stars! | Regarde les étoiles !
I've never seen so many stars. | Je n'ai jamais vu autant d'étoiles.
The moon is so bright tonight. | La lune est tellement brillante ce soir.
It's getting cold. | Il commence à faire froid.
Put on your jacket. | Mets ta veste.
I'm going to bed. | Je vais me coucher.
Good night. Sleep well. | Bonne nuit. Dors bien.
Where's my flashlight? | Où est ma lampe de poche ?
I need to go to the toilet. | Je dois aller aux toilettes.
Can you come with me? It's dark. | Tu peux venir avec moi ? Il fait noir.
What was that noise? | C'était quoi, ce bruit ?
It's just the wind. | C'est juste le vent.
I couldn't sleep last night. | Je n'ai pas pu dormir cette nuit.
The ground was too hard. | Le sol était trop dur.
The birds woke me up. | Les oiseaux m'ont réveillé.
Good morning! Did you sleep well? | Bonjour ! Tu as bien dormi ?
Let's watch the sunrise. | Allons voir le lever du soleil.
The air is so fresh. | L'air est tellement frais.
What's for breakfast? | Qu'est-ce qu'on prend au petit-déjeuner ?
I'll make eggs and toast. | Je vais faire des œufs et des tartines.
Who wants hot chocolate? | Qui veut un chocolat chaud ?
Let's go for a walk. | Allons nous promener.
Don't go too far. | Ne va pas trop loin.
Stay on the trail. | Reste sur le sentier.
Watch your step. | Fais attention où tu mets les pieds.
Is the water clean? | L'eau est propre ?
Don't drink the river water. | Ne bois pas l'eau de la rivière.
Can we swim here? | On peut se baigner ici ?
It's too dangerous to swim here. | C'est trop dangereux de se baigner ici.
Watch out for snakes. | Attention aux serpents.
I got bitten by a mosquito. | Je me suis fait piquer par un moustique.
Do you have bug spray? | Tu as de l'anti-moustiques ?
There are ants everywhere! | Il y a des fourmis partout !
Close the food box. | Ferme la boîte à provisions.
Don't feed the animals. | Ne nourris pas les animaux.
A monkey took our bread! | Un singe a pris notre pain !
Put on some sunscreen. | Mets de la crème solaire.
Drink more water. | Bois plus d'eau.
Did you bring a raincoat? | Tu as pris un imperméable ?
It's starting to rain! | Il commence à pleuvoir !
Get inside the tent! | Rentre dans la tente !
My sleeping bag is wet. | Mon sac de couchage est mouillé.
Let's dry our clothes in the sun. | Faisons sécher nos vêtements au soleil.
Where can we wash the dishes? | Où peut-on faire la vaisselle ?
Is there a hot shower? | Il y a une douche chaude ?
The toilets are very clean. | Les toilettes sont très propres.
Please be quiet. People are sleeping. | Moins de bruit, s'il vous plaît. Des gens dorment.
Our neighbors are very friendly. | Nos voisins sont très sympas.
Can I borrow your lighter? | Je peux t'emprunter ton briquet ?
Thanks for sharing your food. | Merci d'avoir partagé ta nourriture.
Take your trash with you. | Remporte tes déchets.
Don't leave anything behind. | Ne laisse rien derrière toi.
Let's pack up. | Remballons.
Help me fold the tent. | Aide-moi à plier la tente.
Is everything in the car? | Tout est dans la voiture ?
Did we forget anything? | On a oublié quelque chose ?
That was so much fun! | C'était tellement amusant !
Let's come back next month. | Revenons le mois prochain.
The kids loved it. | Les enfants ont adoré.
Can we bring the dog next time? | On peut amener le chien la prochaine fois ?
I need a shower and a real bed. | J'ai besoin d'une douche et d'un vrai lit.
How much is one night? | C'est combien la nuit ?
Do we need to book? | Faut-il réserver ?
What time can we check in? | À partir de quelle heure peut-on arriver ?
Check out is at 11. | Il faut partir avant 11 heures.
Where can we park? | Où peut-on se garer ?
Is there electricity at our site? | Il y a l'électricité sur notre emplacement ?
Can we rent a tent here? | On peut louer une tente ici ?
Do you sell ice? | Vous vendez de la glace ?
Is there a store nearby? | Il y a un magasin pas loin ?
This place is beautiful. | Cet endroit est magnifique.
Don't forget your gloves. | N'oublie pas tes gants.
Wear gloves when you carry firewood. | Mets des gants pour porter le bois.
My lips are dry. Do you have lip balm? | J'ai les lèvres sèches. Tu as du baume à lèvres ?
Put on your sunglasses. The sun is strong. | Mets tes lunettes de soleil. Le soleil tape fort.
Wear a hat and long sleeves. | Mets un chapeau et des manches longues.
Wear long pants in the grass. | Mets un pantalon long dans l'herbe.
I got bitten all over! | Je me suis fait piquer de partout !
This bite is so itchy. | Cette piqûre me gratte tellement.
Don't scratch it. | Ne te gratte pas.
Can I use your bug spray? | Je peux utiliser ton anti-moustiques ?
Spray it on your clothes too. | Vaporise-en aussi sur tes vêtements.
Don't spray it near your eyes. | N'en vaporise pas près des yeux.
Did you put on sunscreen? | Tu as mis de la crème solaire ?
Put some on your neck and ears too. | Mets-en aussi sur le cou et les oreilles.
My face is getting red. | Mon visage commence à rougir.
A bee stung me! | Une abeille m'a piqué !
Does it hurt? | Ça fait mal ?
I cut my finger. | Je me suis coupé le doigt.
Do you have a bandage? | Tu as un pansement ?
Wash your hands first. | Lave-toi d'abord les mains.
I'm so sweaty. | Je suis en nage.
My feet hurt in these shoes. | J'ai mal aux pieds avec ces chaussures.
Keep a whistle on your backpack. | Garde un sifflet sur ton sac à dos.
I brought earplugs. | J'ai apporté des bouchons d'oreilles.
Put the bug spray in the car. | Mets l'anti-moustiques dans la voiture.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("camping", {
  words: `
pitch a tent | monter une tente | Il nous a fallu une heure pour monter la tente.
take down the tent | démonter la tente | Démontons la tente après le petit-déjeuner.
tent peg | la sardine | Nous avons perdu deux sardines.
mallet | le maillet | Utilise le maillet pour planter les sardines.
guy line | le hauban | Tends les haubans.
tent pole | l'arceau | Un arceau est tordu.
rainfly | le double toit | Mets le double toit au cas où il pleuvrait.
inner tent | la chambre intérieure | La chambre intérieure a une porte en moustiquaire.
groundsheet | le tapis de sol ; la bâche de sol | Étale d'abord la bâche de sol.
tarp | la bâche ; le tarp | Installe une bâche au-dessus de la table.
sleeping pad | le matelas de sol | Un matelas de sol épais garde au chaud.
air mattress | le matelas gonflable | Le matelas gonflable s'est dégonflé.
camping chair | la chaise de camping | Ces chaises de camping se replient tout petit.
folding table | la table pliante | Déplie la table pliante.
camp stove | le réchaud de camping | Le réchaud de camping fonctionne avec des cartouches de gaz.
butane canister | la cartouche de butane | Prends deux cartouches de butane.
portable gas stove | le réchaud à gaz portable | Nous avons fait une fondue chinoise sur un réchaud à gaz portable.
cookware | les ustensiles de cuisine | Range les ustensiles de cuisine dans cette caisse.
kettle | la bouilloire | La bouilloire est en train de bouillir.
dutch oven | la cocotte en fonte | Elle a fait du pain dans une cocotte en fonte.
fire pit | le brasero ; le foyer | Ne faites du feu que dans le brasero.
firewood | le bois de chauffage | On peut acheter du bois ici ?
kindling | le petit bois | Commence avec du petit bois.
smoke | la fumée | La fumée me revient sans cesse dans la figure.
ashes | les cendres | Vérifie que les cendres sont froides.
campground | le terrain de camping | Ce terrain de camping compte 40 emplacements.
reservation | la réservation | Vous avez une réservation ?
site number | le numéro d'emplacement | Notre numéro d'emplacement est le B12.
deposit | l'acompte | Nous avons versé un acompte en ligne.
cancellation policy | les conditions d'annulation | Vérifie les conditions d'annulation avant de réserver.
facilities | les équipements ; les sanitaires | Les sanitaires sont très propres.
power outlet | la prise électrique | Notre emplacement a une prise électrique ?
quiet hours | les heures de silence | Le silence est de rigueur à partir de 22 heures.
campground owner | le propriétaire du camping | Le propriétaire du camping était très sympa.
glamping | le glamping ; le camping de luxe | Nous avons essayé le glamping pour l'anniversaire de maman.
car camping | le camping en voiture | Le camping en voiture, c'est plus facile avec des enfants.
wild camping | le camping sauvage | Le camping sauvage est interdit ici.
backpacking | la randonnée itinérante | Nous avons fait trois jours de randonnée itinérante.
mountain hut | le refuge | Nous avons dormi dans un refuge.
permit | le permis ; l'autorisation | Il faut un permis pour gravir cette montagne.
trailhead | le départ du sentier | Nous nous sommes retrouvés au départ du sentier à 6 heures.
elevation | l'altitude | L'altitude ici est de 2 000 mètres.
altitude sickness | le mal des montagnes | Il a eu le mal des montagnes et mal à la tête.
hypothermia | l'hypothermie | Les vêtements mouillés peuvent provoquer une hypothermie.
layer | la couche | Porte plusieurs couches, pas un seul gros manteau.
fleece | la polaire | Prends une polaire pour le soir.
down jacket | la doudoune | Il fait froid. Mets ta doudoune.
waterproof | imperméable ; étanche | Ta tente est imperméable ?
windproof | coupe-vent | J'ai besoin d'une veste coupe-vent.
condensation | la condensation | Il y avait de la condensation dans la tente.
dew | la rosée | L'herbe est mouillée de rosée.
humid | humide | C'est très humide ce soir.
thunderstorm | l'orage | Un orage d'après-midi arrive.
typhoon | le typhon | Le voyage a été annulé à cause d'un typhon.
flash flood | la crue soudaine | Ne campe pas au bord de la rivière. Une crue soudaine peut arriver vite.
riverbed | le lit de la rivière | Ne campe jamais dans le lit d'une rivière.
landslide | le glissement de terrain | Un glissement de terrain a bloqué la route.
weather forecast | la météo ; les prévisions météo | Regarde la météo avant de partir.
signal | le réseau ; le signal | Il n'y a pas de réseau ici.
power bank | la batterie externe | Prends une batterie externe.
solar panel | le panneau solaire | Nous chargeons nos téléphones avec un panneau solaire.
water filter | le filtre à eau | Utilise un filtre à eau pour l'eau du ruisseau.
boiled water | l'eau bouillie | Ne bois que de l'eau bouillie.
stream | le ruisseau | Nous nous sommes lavé le visage dans le ruisseau.
leech | la sangsue | Une sangsue s'est collée à ma jambe.
hornet | le frelon | Éloigne-toi des frelons.
biting midge | le moucheron piqueur | Les moucherons piqueurs sont pires que les moustiques.
wild boar | le sanglier | Nous avons entendu un sanglier pendant la nuit.
monkey | le singe | Un singe a volé notre pain.
firefly | la luciole | Regarde, une luciole !
stargazing | l'observation des étoiles | Le ciel est parfait pour observer les étoiles.
milky way | la Voie lactée | On voit la Voie lactée d'ici.
sea of clouds | la mer de nuages | Nous nous sommes réveillés face à une mer de nuages.
scenery | le paysage | Le paysage est incroyable.
hammock | le hamac | J'ai fait la sieste dans le hamac.
campfire song | la chanson de feu de camp | Nous avons chanté des chansons autour du feu.
ghost story | l'histoire de fantômes | Raconte-nous une histoire de fantômes !
s'mores | les s'mores (biscuits au marshmallow grillé) | Faisons des s'mores.
cast-iron | en fonte | Les poêles en fonte sont lourdes.
skewer | la brochette ; la pique | Mets la viande sur des brochettes.
aluminum foil | le papier aluminium | Enveloppe le maïs dans du papier aluminium.
cutting board | la planche à découper | Prends une petite planche à découper.
dish soap | le liquide vaisselle | Utilise du liquide vaisselle biodégradable.
wet wipes | les lingettes | Les lingettes sont pratiques en camping.
packing list | la liste d'affaires à emporter | Faisons une liste d'affaires à emporter.
gear | le matériel ; l'équipement | Notre matériel de camping remplit toute la voiture.
rent | louer | On peut louer des tentes au camping.
beginner | le débutant | Nous sommes des campeurs débutants.
experienced | expérimenté | Mon oncle est un campeur expérimenté.
setup | l'installation | L'installation a pris deux heures.
pack up | remballer ; plier bagage | Remballons avant qu'il pleuve.
dry out | faire sécher | Il faut faire sécher la tente à la maison.
mold | la moisissure | Range la tente sèche, sinon elle va moisir.
leave no trace | ne laisser aucune trace | N'oubliez pas de ne laisser aucune trace.
pack it in, pack it out | tout ce qu'on apporte, on le remporte | Tout ce qu'on apporte, on le remporte.
wildlife | la faune ; les animaux sauvages | Ne nourrissez pas les animaux sauvages.
compass | la boussole | Tu sais utiliser une boussole ?
insect repellent | le répulsif anti-insectes | Mets du répulsif anti-insectes.
sunburn | le coup de soleil | J'ai attrapé un gros coup de soleil.
first-come, first-served | premier arrivé, premier servi | Les emplacements sont attribués selon la règle du premier arrivé, premier servi.
mosquito net | la moustiquaire | Accroche une moustiquaire au-dessus de ton lit.
mosquito coil | le serpentin anti-moustiques | Ne brûle jamais de serpentin anti-moustiques dans une tente.
citronella | la citronnelle | Les bougies à la citronnelle aident un peu, mais pas beaucoup.
repel | repousser ; éloigner | Ce spray éloigne les moustiques pendant environ six heures.
reapply | remettre ; réappliquer | Remets de la crème solaire toutes les deux heures.
SPF | l'indice de protection (FPS) | Utilise une crème solaire d'indice 30 au minimum.
water-resistant | résistant à l'eau | Choisis une crème résistante à l'eau si tu vas beaucoup transpirer.
after-sun lotion | le lait après-soleil | Mets un peu de lait après-soleil sur tes épaules.
anti-itch cream | la crème contre les démangeaisons | Cette crème contre les démangeaisons agit vite.
swelling | le gonflement ; l'enflure | Mets de la glace pour faire dégonfler.
rash | l'éruption cutanée ; les rougeurs | J'ai eu des rougeurs à cause de cette plante.
tick | la tique | Vérifie que tu n'as pas de tiques après la randonnée.
work gloves | les gants de travail | Mets des gants de travail pour couper du bois.
fingerless gloves | les mitaines | Les mitaines permettent d'utiliser son téléphone.
grip | la prise ; l'adhérence | Ces gants donnent une meilleure prise sur la corde.
trail running | le trail | Le trail est beaucoup plus dur que la course sur route.
trail running shoes | les chaussures de trail | Mes chaussures de trail sont pleines de boue.
hydration vest | le gilet d'hydratation | Je porte deux flasques souples dans mon gilet d'hydratation.
trekking poles | les bâtons de randonnée | Les bâtons de randonnée ménagent les genoux dans les descentes.
gaiters | les guêtres | Les guêtres empêchent les cailloux d'entrer dans les chaussures.
arm sleeves | les manchettes | Les manchettes protègent du soleil.
neck gaiter | le tour de cou | Un tour de cou protège la nuque du soleil.
chafing | les frottements ; l'irritation | Les longues sorties peuvent provoquer des frottements.
anti-chafe balm | la crème anti-frottements | Mets de la crème anti-frottements sur tes pieds avant la course.
energy gel | le gel énergétique | Prends un gel énergétique toutes les 45 minutes.
electrolytes | les électrolytes | Ajoute des électrolytes à ton eau quand il fait chaud.
cramp | la crampe | J'ai une crampe à la jambe.
reflective | réfléchissant | Porte quelque chose de réfléchissant sur la route la nuit.
windbreaker | le coupe-vent | Prends un coupe-vent léger pour le sommet.
poncho | le poncho | Un poncho peut te couvrir, toi et ton sac.
quick-dry | à séchage rapide | Les vêtements à séchage rapide sont parfaits en camping.
leech socks | les chaussettes anti-sangsues | Mets des chaussettes anti-sangsues après la pluie.
UV | les UV | Les UV sont beaucoup plus forts en montagne.
rough it | vivre à la dure | On va vivre à la dure trois jours en montagne.
back to nature | le retour à la nature | Le camping nous ramène à la nature.
happy camper | quelqu'un de content | Il n'est pas content aujourd'hui.
under the stars | à la belle étoile | Nous avons dormi à la belle étoile.
early bird | le lève-tôt | Je suis un lève-tôt en camping.
out of the woods | tiré d'affaire | Le patient n'est pas encore tiré d'affaire.
can't see the forest for the trees | l'arbre qui cache la forêt | Tu laisses l'arbre te cacher la forêt.
babe in the woods | le novice ; l'innocent | J'étais un vrai novice lors de mon premier voyage.
blaze a trail | ouvrir la voie | Elle veut ouvrir la voie aux randonneuses.
pitch in | mettre la main à la pâte | Tout le monde devrait mettre la main à la pâte pour monter la tente.
a breath of fresh air | une bouffée d'air frais | Ce voyage a été une bouffée d'air frais.
call of the wild | l'appel de la nature | Je ne résiste pas à l'appel de la nature.
off the grid | hors réseau ; coupé du monde | Nous avons vécu une semaine coupés du monde.
fair-weather friend | l'ami des beaux jours | Un ami des beaux jours ne campera pas sous la pluie.
head for the hills | prendre la poudre d'escampette | Quand les insectes arrivent, on prend la poudre d'escampette.
`,
  phrases: `
How long does it take to pitch your tent? | Combien de temps te faut-il pour monter ta tente ?
Let's pitch the tent before it gets dark. | Montons la tente avant la nuit.
Lay the groundsheet down first. | Étale d'abord la bâche de sol.
Make sure the groundsheet is smaller than the tent. | La bâche de sol doit être plus petite que la tente.
Drive the pegs in at an angle. | Plante les sardines en biais.
Tighten the guy lines, or the tent will flap all night. | Tends les haubans, sinon la tente va claquer toute la nuit.
Put the rainfly on just in case. | Mets le double toit, au cas où.
Don't let the inner tent touch the rainfly. | La chambre intérieure ne doit pas toucher le double toit.
There's water dripping inside the tent. | Il y a de l'eau qui goutte dans la tente.
That's just condensation. Open the vents. | C'est juste de la condensation. Ouvre les aérations.
Let's set up the tarp over the kitchen area. | Installons la bâche au-dessus du coin cuisine.
Face the door away from the wind. | Oriente la porte dos au vent.
Don't pitch your tent in a low spot. | Ne monte pas ta tente dans un creux.
Water collects there when it rains. | L'eau s'y accumule quand il pleut.
Never camp next to a river or on a riverbed. | Ne campe jamais au bord d'une rivière ni dans son lit.
A flash flood can come with almost no warning. | Une crue soudaine peut arriver presque sans prévenir.
Check the weather forecast before you go. | Regarde la météo avant de partir.
Afternoon thunderstorms are common in summer. | Les orages d'après-midi sont fréquents en été.
If there's a typhoon, cancel the trip. | S'il y a un typhon, annule le voyage.
Is this a legal campground? | C'est un terrain de camping autorisé ?
We booked site B12 for two nights. | Nous avons réservé l'emplacement B12 pour deux nuits.
Can we cancel if it rains? | On peut annuler s'il pleut ?
What's your cancellation policy? | Quelles sont vos conditions d'annulation ?
We'll lose the deposit if we cancel. | Nous perdrons l'acompte si nous annulons.
Quiet hours start at 10 p.m. | Le silence est obligatoire à partir de 22 heures.
Could you turn the music down, please? | Vous pourriez baisser la musique, s'il vous plaît ?
Your lights are shining into our tent. | Vos lampes éclairent notre tente.
Sorry, we'll keep it down. | Désolés, nous allons faire moins de bruit.
Can we buy firewood here? | On peut acheter du bois ici ?
Only make fires in the fire pit. | Ne fais du feu que dans le brasero.
Start with small kindling, then add bigger pieces. | Commence avec du petit bois, puis ajoute de plus grosses bûches.
Keep a bucket of water near the fire. | Garde un seau d'eau près du feu.
Never leave the fire unattended. | Ne laisse jamais le feu sans surveillance.
Make sure the ashes are completely cold. | Vérifie que les cendres sont complètement froides.
Never use a gas stove inside the tent. | N'utilise jamais de réchaud à gaz dans la tente.
Carbon monoxide can build up in a closed tent. | Le monoxyde de carbone peut s'accumuler dans une tente fermée.
The butane canister is almost empty. | La cartouche de butane est presque vide.
Don't leave gas canisters in a hot car. | Ne laisse pas de cartouches de gaz dans une voiture chaude.
Let's make hot pot tonight. | Faisons une fondue chinoise ce soir.
Wrap the corn in aluminum foil. | Enveloppe le maïs dans du papier aluminium.
Keep the raw meat in the cooler. | Garde la viande crue dans la glacière.
The ice has melted already. | La glace a déjà fondu.
Store all food in the car at night. | Range toute la nourriture dans la voiture la nuit.
Something got into our trash! | Quelque chose a fouillé nos poubelles !
Don't throw food scraps into the bushes. | Ne jette pas les restes dans les buissons.
Pack it in, pack it out. | Tout ce qu'on apporte, on le remporte.
Use biodegradable soap, and keep it away from the stream. | Utilise du savon biodégradable, et loin du ruisseau.
Remember to leave no trace. | N'oublie pas de ne laisser aucune trace.
Layer up. It drops below ten degrees at night. | Couvre-toi bien. Il fait moins de dix degrés la nuit.
Wet clothes can cause hypothermia. | Les vêtements mouillés peuvent provoquer une hypothermie.
Change into dry clothes before you sleep. | Mets des vêtements secs avant de dormir.
My air mattress has a leak. | Mon matelas gonflable fuit.
A thicker sleeping pad keeps you warmer. | Un matelas de sol plus épais tient plus chaud.
My sleeping bag isn't warm enough. | Mon sac de couchage n'est pas assez chaud.
Wear a warm hat to bed. | Mets un bonnet chaud pour dormir.
Biting midges are everywhere here. | Il y a des moucherons piqueurs partout ici.
Put on long sleeves and insect repellent. | Mets des manches longues et du répulsif.
Leeches come out after the rain. | Les sangsues sortent après la pluie.
If you see hornets, back away slowly. | Si tu vois des frelons, recule lentement.
Don't wear perfume in the mountains. | Ne mets pas de parfum en montagne.
Shake out your shoes before you put them on. | Secoue tes chaussures avant de les enfiler.
We saw fireflies by the stream. | Nous avons vu des lucioles près du ruisseau.
You can see the Milky Way from here. | On voit la Voie lactée d'ici.
We woke up to a sea of clouds. | Au réveil, il y avait une mer de nuages.
There's no signal up here. | Il n'y a pas de réseau ici.
Download an offline map before we lose signal. | Télécharge une carte hors ligne avant de perdre le réseau.
Did you charge the power bank? | Tu as chargé la batterie externe ?
Bring a headlamp and spare batteries. | Prends une lampe frontale et des piles de rechange.
Let's make a packing list. | Faisons une liste d'affaires à emporter.
We forgot the tent pegs! | On a oublié les sardines !
Can we borrow a mallet from the owner? | On peut emprunter un maillet au propriétaire ?
The campground owner gave us extra firewood. | Le propriétaire du camping nous a donné du bois en plus.
Can we rent all the gear here? | On peut louer tout le matériel ici ?
Glamping is great for beginners. | Le glamping est parfait pour les débutants.
Car camping is easier with kids. | Avec des enfants, le camping en voiture est plus simple.
We're sleeping in the car tonight. | On dort dans la voiture ce soir.
Crack the windows open a little for fresh air. | Entrouvre les vitres pour avoir de l'air.
Is wild camping allowed here? | Le camping sauvage est autorisé ici ?
You need a permit to camp in the national park. | Il faut une autorisation pour camper dans le parc national.
We met at the trailhead at 5 a.m. | Nous nous sommes retrouvés au départ du sentier à 5 heures.
Tell someone where you're going and when you'll be back. | Dis à quelqu'un où tu vas et quand tu reviens.
He has a headache. It might be altitude sickness. | Il a mal à la tête. C'est peut-être le mal des montagnes.
Let's go down a bit and rest. | Descendons un peu et reposons-nous.
My boots are soaked. | Mes chaussures sont trempées.
Let's take down the tent while it's still dry. | Démontons la tente tant qu'elle est sèche.
The tent is still wet. | La tente est encore mouillée.
Dry the tent at home, or it will get moldy. | Fais sécher la tente à la maison, sinon elle va moisir.
Let's split the cost of the campsite. | Partageons le prix de l'emplacement.
Who's cooking tonight? | Qui cuisine ce soir ?
I'll wash up if you cook. | Je fais la vaisselle si tu cuisines.
Let's tell ghost stories! | Racontons des histoires de fantômes !
Stop it, I won't be able to sleep! | Arrête, je ne vais pas pouvoir dormir !
Let's sing some campfire songs. | Chantons des chansons autour du feu.
I could stay here forever. | Je pourrais rester ici pour toujours.
No phones tonight. Let's just talk. | Pas de téléphones ce soir. Parlons, tout simplement.
This was the best trip ever. | C'était le meilleur voyage de tous les temps.
Every campground is fully booked on long weekends. | Tous les campings sont complets pendant les ponts.
Prices are higher on holidays. | Les prix sont plus élevés pendant les vacances.
We should book three months in advance. | Nous devrions réserver trois mois à l'avance.
Let's arrive early to get a good site. | Arrivons tôt pour avoir un bon emplacement.
The mosquitoes here are terrible. | Les moustiques ici sont terribles.
Close the mosquito net properly. | Ferme bien la moustiquaire.
Don't burn a mosquito coil inside the tent. | Ne brûle pas de serpentin anti-moustiques dans la tente.
Citronella alone isn't enough. | La citronnelle seule ne suffit pas.
This repellent lasts about six hours. | Ce répulsif tient environ six heures.
Put sunscreen on first, then bug spray. | Mets d'abord la crème solaire, puis l'anti-moustiques.
Reapply your sunscreen after swimming. | Remets de la crème solaire après la baignade.
Is it SPF 50? | C'est un indice 50 ?
The UV is strong even when it's cloudy. | Les UV sont forts même quand il fait nuageux.
My shoulders are burned. Do you have after-sun lotion? | J'ai les épaules brûlées. Tu as du lait après-soleil ?
Put some anti-itch cream on it. | Mets un peu de crème contre les démangeaisons.
The swelling is getting worse. | Ça enfle de plus en plus.
I think I'm allergic to something. I've got a rash. | Je crois que je suis allergique à quelque chose. J'ai des rougeurs.
Check each other for ticks after the hike. | Vérifiez-vous mutuellement qu'il n'y a pas de tiques après la randonnée.
Wear work gloves when you put in the tent pegs. | Mets des gants de travail pour planter les sardines.
These gloves have a good grip. | Ces gants ont une bonne adhérence.
Have you ever tried trail running? | Tu as déjà essayé le trail ?
Road shoes are too slippery on the trail. | Les chaussures de route glissent trop sur les sentiers.
How much water does your hydration vest hold? | Combien d'eau contient ton gilet d'hydratation ?
Use trekking poles on steep downhills. | Utilise des bâtons dans les descentes raides.
Put your gaiters on. It's muddy. | Mets tes guêtres. C'est boueux.
Arm sleeves are cooler than a long-sleeved shirt. | Les manchettes sont plus fraîches qu'un t-shirt à manches longues.
My thighs are chafing. | J'ai les cuisses irritées par les frottements.
Put anti-chafe balm on before you start. | Mets de la crème anti-frottements avant de partir.
Take an energy gel before you feel tired. | Prends un gel énergétique avant de te sentir fatigué.
I'm cramping. I need electrolytes. | J'ai des crampes. Il me faut des électrolytes.
Wear something reflective if you run at night. | Porte quelque chose de réfléchissant si tu cours la nuit.
It's windy at the top. Bring a windbreaker. | Il y a du vent au sommet. Prends un coupe-vent.
Quick-dry clothes are much better than cotton. | Les vêtements à séchage rapide valent bien mieux que le coton.
Put on leech socks. The trail is wet. | Mets des chaussettes anti-sangsues. Le sentier est mouillé.
`,
});

// ---------- 高級 Advanced ----------
addFrench("camping", {
  words: `
campsite etiquette | le savoir-vivre au camping | Le savoir-vivre au camping, c'est faire peu de bruit la nuit.
light pollution | la pollution lumineuse | Il n'y a aucune pollution lumineuse ici.
unregistered campground | le camping non déclaré | Beaucoup de campings non déclarés sont installés sur des terrains en pente.
slopeland | le terrain en pente ; le versant | Construire sur un terrain en pente exige des permis stricts.
zoning | le zonage | Le camping enfreignait les règles de zonage.
land use | l'usage des sols | C'est un usage illégal des sols.
legal campground | le camping autorisé | Choisissez un camping autorisé pour la sécurité et l'assurance.
public liability insurance | l'assurance responsabilité civile | Demandez si le camping a une assurance responsabilité civile.
evacuation route | l'itinéraire d'évacuation | Connaissez l'itinéraire d'évacuation en cas d'inondation.
debris flow | la coulée de boue | La zone est en alerte aux coulées de boue.
heavy rain advisory | l'avis de fortes pluies | Un avis de fortes pluies a été émis pour la montagne.
afternoon convection | la convection de l'après-midi | La convection de l'après-midi apporte souvent des orages.
lightning strike | le coup de foudre ; la foudre | Évitez les crêtes pour réduire le risque d'être frappé par la foudre.
exposure | l'exposition aux éléments | L'exposition au vent et à la pluie est dangereuse.
wind chill | le refroidissement éolien | Avec le refroidissement éolien, on se serait cru sous zéro.
temperature inversion | l'inversion de température | Une inversion de température a bloqué les nuages dans la vallée.
microclimate | le microclimat | La vallée a son propre microclimat.
vapor barrier | le pare-vapeur | Un pare-vapeur empêche l'humidité d'entrer.
breathable | respirant | Un tissu respirant réduit la condensation.
ventilation | l'aération | Ouvre les aérations pour mieux ventiler.
vestibule | l'abside | Laisse tes chaussures dans l'abside.
freestanding tent | la tente autoportante | Une tente autoportante peut être déplacée une fois montée.
footprint | le tapis de sol sur mesure | Le tapis de sol protège le fond de la tente.
seam sealing | l'étanchéification des coutures | Les vieilles tentes ont besoin d'une étanchéification des coutures.
hydrostatic head | la colonne d'eau | Ce double toit a une colonne d'eau de 3 000 mm.
R-value | la valeur R (isolation) | En hiver, choisissez un matelas avec une valeur R plus élevée.
comfort rating | la température de confort | La température de confort de ce sac est de 5 °C.
base layer | la première couche | Porte une première couche en laine.
moisture-wicking | qui évacue la transpiration | Les t-shirts qui évacuent la transpiration sèchent vite.
insulation | l'isolation ; le garnissage | Le garnissage en duvet perd sa chaleur quand il est mouillé.
ultralight | ultraléger | Le matériel ultraléger coûte plus cher.
base weight | le poids de base | Mon poids de base est inférieur à 8 kilos.
carbon monoxide | le monoxyde de carbone | N'utilisez jamais de réchaud dans une tente fermée à cause du monoxyde de carbone.
carbon monoxide poisoning | l'intoxication au monoxyde de carbone | Les chauffages dans les tentes peuvent provoquer une intoxication au monoxyde de carbone.
open flame | la flamme nue | Pas de flamme nue dans la tente.
fire ban | l'interdiction de faire du feu | Il y a une interdiction de faire du feu pendant la saison sèche.
extinguish | éteindre | Éteignez complètement le feu de camp avant de dormir.
embers | les braises | Les braises peuvent rester chaudes pendant des heures.
wildfire | le feu de forêt | Un feu de camp négligé peut déclencher un feu de forêt.
ecological impact | l'impact écologique | Les grands campings ont un impact écologique.
habitat | l'habitat | Ne dérangez pas l'habitat des animaux.
invasive species | l'espèce envahissante | N'introduisez pas d'espèces envahissantes.
biodegradable | biodégradable | Même le savon biodégradable peut nuire aux ruisseaux.
gray water | les eaux grises | Évacuez les eaux grises loin du ruisseau.
human waste | les excréments | Enterrez les excréments à au moins 15 cm de profondeur.
cathole | le trou à excréments ; le trou de chat | Creusez un trou loin de l'eau.
durable surface | la surface résistante | Campez sur des surfaces résistantes.
food storage | le stockage de la nourriture | Un bon stockage de la nourriture éloigne les animaux.
bear canister | le conteneur anti-ours | Certains parcs exigent un conteneur anti-ours.
scent | l'odeur | Les animaux suivent l'odeur de la nourriture.
navigation | l'orientation ; la navigation | Les cartes hors ligne aident à l'orientation.
offline map | la carte hors ligne | Téléchargez une carte hors ligne avant de partir.
GPS track | la trace GPS | Suivez attentivement la trace GPS.
contour line | la courbe de niveau | Des courbes de niveau serrées indiquent une pente raide.
ridge | la crête | Le sentier suit la crête.
saddle | le col | Nous avons campé au col entre deux sommets.
switchback | le lacet | Le sentier monte en lacets.
scramble | escalader à quatre pattes ; crapahuter | Nous avons dû crapahuter sur les rochers.
exposed section | le passage exposé | Faites attention au passage exposé.
itinerary | l'itinéraire | Laissez votre itinéraire à un ami.
mountain climbing registration | la déclaration de randonnée en montagne | Remplissez la déclaration de randonnée en montagne en ligne.
entry permit | le permis d'entrée | Nous avons demandé le permis d'entrée du parc national.
mountain entry permit | le permis d'accès à la montagne | La police délivre le permis d'accès à la montagne.
satellite messenger | le communicateur satellite | Un communicateur satellite fonctionne sans réseau téléphonique.
emergency beacon | la balise de détresse | La balise de détresse a envoyé notre position.
search and rescue | les opérations de recherche et de sauvetage | Les frais de secours peuvent être facturés aux randonneurs.
helicopter rescue | le secours héliporté | Le secours héliporté est réservé aux vraies urgences.
self-sufficient | autonome | Soyez autonome en pleine nature.
backcountry | l'arrière-pays ; la pleine nature | Il n'y a pas de magasins dans l'arrière-pays.
water source | le point d'eau | Le point d'eau le plus proche est à 30 minutes.
purify | purifier | Purifiez toute l'eau des ruisseaux.
dehydration | la déshydratation | La déshydratation peut provoquer des maux de tête.
heat exhaustion | l'épuisement dû à la chaleur | Reposez-vous à l'ombre pour éviter l'épuisement dû à la chaleur.
blister | l'ampoule | J'ai une ampoule au talon.
sprained ankle | l'entorse à la cheville | Il s'est fait une entorse à la cheville.
venomous | venimeux | Taïwan compte plusieurs serpents venimeux.
antivenom | le sérum antivenimeux | L'hôpital lui a administré du sérum antivenimeux.
allergic reaction | la réaction allergique | Une piqûre de frelon peut provoquer une grave réaction allergique.
anaphylaxis | le choc anaphylactique | Un choc anaphylactique exige un traitement d'urgence.
epinephrine | l'adrénaline ; l'épinéphrine | Elle a toujours un stylo d'adrénaline sur elle.
hypothermic | en hypothermie | Le randonneur était en hypothermie quand les secours sont arrivés.
rewarm | réchauffer | Réchauffez lentement le randonneur avec des vêtements secs et des boissons chaudes.
off-grid | hors réseau | Nous avons passé une semaine hors réseau.
digital detox | la détox numérique | Le camping est une bonne détox numérique.
solitude | la solitude ; le calme | Je fais du camping pour la solitude.
overcrowded | bondé ; surpeuplé | Le camping était bondé pendant le pont.
peak season | la haute saison | Les prix doublent en haute saison.
off-season | la basse saison | Camper en basse saison coûte moins cher.
fully booked | complet | Tous les campings sont complets.
no-show | le client qui ne se présente pas | Les clients qui ne se présentent pas perdent leur acompte.
refund | le remboursement | On peut être remboursés à cause du typhon ?
rain or shine | qu'il pleuve ou qu'il vente | Nous irons, qu'il pleuve ou qu'il vente.
roughing it | vivre à la dure | Nous aimons vivre à la dure dans les bois.
creature comforts | le confort matériel | Le glamping offre tout le confort matériel.
gear junkie | le fan de matériel | Mon frère est un vrai fan de matériel.
contingency plan | le plan B | Ayez un plan B en cas de mauvais temps.
turnaround time | l'heure limite de demi-tour | Fixez une heure limite de demi-tour et respectez-la.
hazard tree | l'arbre dangereux | Ne montez pas votre tente sous un arbre dangereux.
widowmaker | la branche morte menaçante | Levez les yeux pour repérer les branches mortes avant de monter la tente.
terrain | le terrain | Le terrain est raide et rocailleux.
DEET | le DEET | Cherchez un répulsif au DEET ou à l'icaridine.
picaridin | l'icaridine | L'icaridine sent moins fort que le DEET.
permethrin | la perméthrine | La perméthrine est pour les vêtements, pas pour la peau.
concentration | la concentration | Une concentration plus élevée dure plus longtemps, mais n'est pas plus forte.
active ingredient | le principe actif | Vérifiez le principe actif sur l'étiquette.
broad-spectrum | à large spectre | Choisissez une crème solaire à large spectre.
mineral sunscreen | la crème solaire minérale | La crème solaire minérale utilise de l'oxyde de zinc ou du dioxyde de titane.
heat rash | la miliaire ; la bourbouille | Des vêtements amples aident à éviter la bourbouille.
contact dermatitis | la dermatite de contact | Certaines plantes peuvent provoquer une dermatite de contact.
antihistamine | l'antihistaminique | Prends un antihistaminique contre les démangeaisons.
hydrocortisone cream | la crème à l'hydrocortisone | Un peu de crème à l'hydrocortisone calme l'éruption.
calamine lotion | la lotion à la calamine | Tamponne les piqûres avec de la lotion à la calamine.
secondary infection | la surinfection | Se gratter peut provoquer une surinfection.
fine-tipped tweezers | la pince à épiler à bout fin | Retirez une tique avec une pince à épiler à bout fin.
chigger | l'aoûtat ; la larve de trombidion | Les aoûtats vivent dans les hautes herbes.
scrub typhus | le typhus des broussailles | Les piqûres d'aoûtats peuvent transmettre le typhus des broussailles.
dengue fever | la dengue | La dengue est transmise par les moustiques.
barrier cream | la crème protectrice | Une crème protectrice protège la peau des frottements.
friction | le frottement | Le frottement et l'humidité provoquent des ampoules.
hot spot | la zone d'échauffement | Arrêtez-vous et couvrez une zone d'échauffement avant qu'elle ne devienne une ampoule.
taping | le strapping | Un strapping aux talons peut prévenir les ampoules.
moleskin | le pansement anti-ampoules | Mets un pansement anti-ampoules sur ton talon.
toe socks | les chaussettes à orteils | Les chaussettes à orteils empêchent les orteils de frotter entre eux.
cut-resistant gloves | les gants anti-coupure | Utilisez des gants anti-coupure pour vider le poisson.
insulated gloves | les gants isolants | Prends des gants isolants pour le sommet.
touchscreen-compatible | compatible écran tactile | Ces gants sont compatibles avec les écrans tactiles.
technical terrain | le terrain technique | Les gants protègent les mains sur un terrain technique.
cushioning | l'amorti | Ces chaussures ont beaucoup d'amorti.
lug | le crampon (de semelle) | Les chaussures à crampons profonds accrochent bien dans la boue.
mandatory gear | le matériel obligatoire | Vérifiez la liste du matériel obligatoire de la course.
emergency blanket | la couverture de survie | Une couverture de survie ne pèse presque rien.
pacing | la gestion de l'allure | Bien gérer son allure compte dans les longues montées.
beat around the bush | tourner autour du pot | Ne tourne pas autour du pot.
bark up the wrong tree | se tromper de cible | Si tu m'accuses, tu te trompes de cible.
not out of the woods yet | pas encore tiré d'affaire | Nous ne sommes pas encore tirés d'affaire.
a drop in the ocean | une goutte d'eau dans l'océan | Notre don n'est qu'une goutte d'eau dans l'océan.
a ray of sunshine | un rayon de soleil | C'est un vrai rayon de soleil.
make hay while the sun shines | battre le fer pendant qu'il est chaud | Il faut battre le fer pendant qu'il est chaud.
the calm before the storm | le calme avant la tempête | C'était le calme avant la tempête.
come rain or shine | contre vents et marées | Nous camperons contre vents et marées.
take a hike | aller voir ailleurs ; dégager | Il a dit à l'homme grossier d'aller voir ailleurs.
a walk in the park | une promenade de santé | Ce sentier, c'est une promenade de santé.
lie low | se faire discret ; se tenir tranquille | On va se tenir tranquilles dans la tente jusqu'à ce que la pluie s'arrête.
up a creek without a paddle | dans de beaux draps | Sans carte, on est dans de beaux draps.
the great outdoors | la nature ; le grand air | J'adore le grand air.
weather the storm | traverser la tempête | Nous pouvons traverser la tempête ensemble.
`,
  phrases: `
Many campgrounds in Taiwan operate without proper permits. | À Taïwan, beaucoup de campings fonctionnent sans autorisation.
Unregistered campgrounds may have no insurance and no safety checks. | Les campings non déclarés n'ont parfois ni assurance ni contrôles de sécurité.
A lot of them are built on slopeland, where landslides are a risk. | Beaucoup sont construits sur des terrains en pente, où les glissements de terrain sont un risque.
Check whether the site is on the government's list of legal campgrounds. | Vérifiez si le site figure sur la liste officielle des campings autorisés.
Ask if they have public liability insurance. | Demandez s'ils ont une assurance responsabilité civile.
When a heavy rain advisory is issued, leave the riverbank immediately. | Dès qu'un avis de fortes pluies est émis, quittez immédiatement la berge.
Upstream rain can raise the river even when the sky above you is clear. | La pluie en amont peut faire monter la rivière même si le ciel est dégagé au-dessus de vous.
If the water turns muddy, move to higher ground right away. | Si l'eau devient boueuse, montez tout de suite en hauteur.
Know the evacuation route before dark. | Repérez l'itinéraire d'évacuation avant la nuit.
Avoid ridges and lone trees during a thunderstorm. | Évitez les crêtes et les arbres isolés pendant un orage.
Look up for dead branches before you pitch. | Levez les yeux pour repérer les branches mortes avant de monter la tente.
The wind chill makes it feel much colder than it is. | Le refroidissement éolien donne une sensation bien plus froide que la réalité.
Cotton is a terrible choice in cold, wet weather. | Le coton est un très mauvais choix par temps froid et humide.
Go with a wool or synthetic base layer instead. | Préférez une première couche en laine ou en synthétique.
Down insulation loses most of its warmth when it gets wet. | Le duvet perd l'essentiel de sa chaleur quand il est mouillé.
Check the comfort rating, not the extreme rating, of your sleeping bag. | Regardez la température de confort de votre sac, pas la température extrême.
In winter, choose a sleeping pad with a higher R-value. | En hiver, choisissez un matelas avec une valeur R plus élevée.
Breathable fabric reduces condensation inside the tent. | Un tissu respirant réduit la condensation dans la tente.
Leave the vents open even when it's cold. | Laissez les aérations ouvertes même quand il fait froid.
Store your boots in the vestibule. | Rangez vos chaussures dans l'abside.
A freestanding tent is easier to pitch on rocky ground. | Une tente autoportante est plus facile à monter sur un sol rocailleux.
My base weight is under eight kilograms. | Mon poids de base est inférieur à huit kilos.
Ultralight gear is expensive, but your knees will thank you. | Le matériel ultraléger est cher, mais vos genoux vous remercieront.
Never bring a charcoal heater or gas heater into a tent. | N'apportez jamais de chauffage au charbon ou au gaz dans une tente.
Carbon monoxide poisoning can happen while you're asleep. | L'intoxication au monoxyde de carbone peut survenir pendant le sommeil.
A small CO alarm is worth packing. | Un petit détecteur de CO vaut la peine d'être emporté.
Fully extinguish the fire: drown it, stir it, and feel it. | Éteignez complètement le feu : noyez-le, remuez-le et touchez pour vérifier.
Embers can stay hot enough to start a fire the next morning. | Les braises peuvent rester assez chaudes pour rallumer un feu le lendemain matin.
There's a fire ban during the dry season. | Il est interdit de faire du feu pendant la saison sèche.
Large campgrounds can have a serious ecological impact. | Les grands campings peuvent avoir un impact écologique important.
Night lights and loud music disturb wildlife. | Les lumières nocturnes et la musique forte dérangent la faune.
Don't move plants or animals from one area to another. | Ne déplacez pas de plantes ni d'animaux d'une zone à une autre.
Even biodegradable soap harms streams, so wash at least 60 meters away. | Même le savon biodégradable nuit aux ruisseaux, alors lavez-vous à au moins 60 mètres.
Bury human waste in a cathole far from water. | Enterrez les excréments dans un trou loin de l'eau.
Pack out used toilet paper. | Remportez le papier toilette usagé.
Camp on durable surfaces, not on fragile plants. | Campez sur des surfaces résistantes, pas sur des plantes fragiles.
Feeding monkeys makes them aggressive. | Nourrir les singes les rend agressifs.
In some parks, you need a bear canister for your food. | Dans certains parcs, il faut un conteneur anti-ours pour la nourriture.
Read the contour lines before you choose a route. | Lisez les courbes de niveau avant de choisir un itinéraire.
The trail follows an exposed ridge for two hours. | Le sentier suit une crête exposée pendant deux heures.
We'll scramble over the rocks near the summit. | Nous crapahuterons sur les rochers près du sommet.
Set a turnaround time and stick to it. | Fixez une heure de demi-tour et tenez-vous-y.
The summit will still be there next year. | Le sommet sera encore là l'an prochain.
File your mountain climbing registration online. | Faites votre déclaration de randonnée en montagne en ligne.
Some areas need both a park entry permit and a mountain entry permit. | Certaines zones exigent à la fois un permis d'entrée au parc et un permis d'accès à la montagne.
Leave your itinerary with someone who will call for help if you're late. | Laissez votre itinéraire à quelqu'un qui appellera les secours si vous êtes en retard.
A satellite messenger works where phones don't. | Un communicateur satellite fonctionne là où les téléphones ne passent pas.
Search and rescue costs may be charged to hikers who break the rules. | Les frais de secours peuvent être facturés aux randonneurs qui enfreignent les règles.
Helicopter rescue should only be for real emergencies. | Le secours héliporté devrait être réservé aux vraies urgences.
Treat all stream water before you drink it. | Traitez toute l'eau des ruisseaux avant de la boire.
Boil it, filter it, or use purification tablets. | Faites-la bouillir, filtrez-la ou utilisez des pastilles de purification.
Dehydration makes altitude sickness worse. | La déshydratation aggrave le mal des montagnes.
If symptoms get worse, descend immediately. | Si les symptômes empirent, descendez immédiatement.
Don't push on with a sprained ankle. | Ne continuez pas avec une entorse à la cheville.
Learn to tell venomous snakes from harmless ones. | Apprenez à distinguer les serpents venimeux des inoffensifs.
If you're bitten, stay calm and get to a hospital with antivenom. | Si vous êtes mordu, restez calme et rendez-vous dans un hôpital qui a du sérum antivenimeux.
Take a photo of the snake if you can do it safely. | Prenez le serpent en photo si vous pouvez le faire sans danger.
Hornet stings can trigger anaphylaxis. | Les piqûres de frelon peuvent déclencher un choc anaphylactique.
She always carries an epinephrine injector. | Elle a toujours un stylo d'adrénaline sur elle.
Rewarm a hypothermic person slowly, with dry clothes and warm drinks. | Réchauffez lentement une personne en hypothermie, avec des vêtements secs et des boissons chaudes.
Don't give alcohol to someone who is cold. | Ne donnez pas d'alcool à quelqu'un qui a froid.
We spent three days completely off-grid. | Nous avons passé trois jours complètement coupés du monde.
Camping is the best digital detox there is. | Le camping est la meilleure détox numérique qui soit.
I go camping for the solitude, not the parties. | Je fais du camping pour le calme, pas pour faire la fête.
Some campgrounds feel more like music festivals. | Certains campings ressemblent plus à des festivals de musique.
The campground was overcrowded on the long weekend. | Le camping était bondé pendant le pont.
Camping in the off-season is cheaper and quieter. | Camper en basse saison est moins cher et plus calme.
Will we get a refund if a typhoon warning is issued? | Serons-nous remboursés si une alerte typhon est émise ?
No-shows lose their full deposit. | En cas de non-présentation, l'acompte est entièrement perdu.
We'll go rain or shine. | Nous irons qu'il pleuve ou qu'il vente.
I prefer roughing it to glamping. | Je préfère le camping à la dure au glamping.
Glamping has all the creature comforts, including air conditioning. | Le glamping offre tout le confort, climatisation comprise.
My brother is a total gear junkie. | Mon frère est un vrai fan de matériel.
He spends more on gear than on the trips themselves. | Il dépense plus pour le matériel que pour les voyages eux-mêmes.
Camping gear has become a status symbol. | Le matériel de camping est devenu un signe extérieur de richesse.
Fancy gear doesn't make you a better camper. | Un matériel haut de gamme ne fait pas de vous un meilleur campeur.
Experience matters more than equipment. | L'expérience compte plus que l'équipement.
Always have a contingency plan for bad weather. | Ayez toujours un plan B en cas de mauvais temps.
Bad weather is the main reason trips go wrong. | Le mauvais temps est la principale cause des sorties qui tournent mal.
There's no such thing as bad weather, only bad clothing. | Il n'y a pas de mauvais temps, seulement de mauvais vêtements.
Light pollution makes stargazing impossible in the city. | La pollution lumineuse rend l'observation des étoiles impossible en ville.
Let your eyes adjust to the dark for twenty minutes. | Laissez vos yeux s'habituer à l'obscurité pendant vingt minutes.
Use a red light so you don't ruin everyone's night vision. | Utilisez une lumière rouge pour ne pas gâcher la vision nocturne des autres.
A temperature inversion trapped the clouds in the valley. | Une inversion de température a bloqué les nuages dans la vallée.
That's why we can see the sea of clouds below us. | C'est pour ça qu'on voit la mer de nuages en dessous de nous.
The valley has its own microclimate. | La vallée a son propre microclimat.
It's often foggy here in the afternoon. | Il y a souvent du brouillard ici l'après-midi.
Waking up in nature resets your body clock. | Se réveiller dans la nature remet l'horloge biologique à zéro.
Kids learn a lot from camping. | Les enfants apprennent beaucoup en camping.
They learn to cook, to share and to solve problems. | Ils apprennent à cuisiner, à partager et à résoudre des problèmes.
Camping teaches you how little you really need. | Le camping vous apprend de combien peu vous avez réellement besoin.
Respect the land and the people who live nearby. | Respectez la terre et les gens qui vivent à proximité.
Much of this land is part of an indigenous community's traditional territory. | Une grande partie de ces terres appartient au territoire traditionnel d'une communauté autochtone.
Ask before you take photos in the village. | Demandez avant de prendre des photos dans le village.
Buy local produce to support the community. | Achetez des produits locaux pour soutenir la communauté.
Leave the campsite better than you found it. | Laissez l'emplacement plus propre que vous ne l'avez trouvé.
Take only pictures, leave only footprints. | Ne prenez que des photos, ne laissez que des empreintes.
The mountains will teach you patience. | La montagne vous apprendra la patience.
Nature doesn't care how experienced you are. | La nature se moque de votre expérience.
When in doubt, turn back. | Dans le doute, faites demi-tour.
Choose a repellent with DEET or picaridin. | Choisissez un répulsif au DEET ou à l'icaridine.
Natural repellents usually don't last long. | Les répulsifs naturels ne durent généralement pas longtemps.
Spray permethrin on clothes, never on your skin. | Vaporisez la perméthrine sur les vêtements, jamais sur la peau.
Let the clothes dry completely before you wear them. | Laissez les vêtements sécher complètement avant de les porter.
A higher concentration means longer protection, not stronger protection. | Une concentration plus élevée protège plus longtemps, pas plus fort.
Read the label for the active ingredient. | Lisez l'étiquette pour connaître le principe actif.
Use a broad-spectrum sunscreen that blocks both UVA and UVB. | Utilisez une crème solaire à large spectre qui bloque les UVA et les UVB.
Mineral sunscreen is gentler on sensitive skin. | La crème solaire minérale est plus douce pour les peaux sensibles.
Most people don't use enough sunscreen. | La plupart des gens ne mettent pas assez de crème solaire.
Snow and water reflect UV rays. | La neige et l'eau réfléchissent les UV.
Wear loose clothes to avoid heat rash. | Portez des vêtements amples pour éviter la bourbouille.
Don't touch plants you don't recognize. | Ne touchez pas les plantes que vous ne connaissez pas.
An antihistamine can help if the itching keeps you awake. | Un antihistaminique peut aider si les démangeaisons vous empêchent de dormir.
Use calamine lotion or hydrocortisone cream on the bites. | Mettez de la lotion à la calamine ou de la crème à l'hydrocortisone sur les piqûres.
If a bite gets red, hot and painful, it could be infected. | Si une piqûre devient rouge, chaude et douloureuse, elle est peut-être infectée.
Grip the tick close to the skin and pull it straight out. | Saisissez la tique au ras de la peau et tirez-la bien droit.
Don't twist it or burn it. | Ne la tournez pas et ne la brûlez pas.
Chiggers live in grassy areas and can spread scrub typhus. | Les aoûtats vivent dans les herbes et peuvent transmettre le typhus des broussailles.
If you get a fever after a camping trip, tell the doctor where you went. | Si vous avez de la fièvre après un camping, dites au médecin où vous êtes allé.
Dengue fever is spread by mosquitoes that bite during the day. | La dengue est transmise par des moustiques qui piquent le jour.
Friction plus moisture is the recipe for blisters. | Frottement plus humidité, c'est la recette des ampoules.
Stop as soon as you feel a hot spot. | Arrêtez-vous dès que vous sentez une zone d'échauffement.
Tape your heels before a long race. | Faites un strapping aux talons avant une longue course.
Moleskin works best before the blister forms. | Le pansement anti-ampoules marche mieux avant que l'ampoule se forme.
Toe socks stop your toes from rubbing together. | Les chaussettes à orteils empêchent les orteils de frotter entre eux.
Wear cut-resistant gloves when you use a knife or clean fish. | Mettez des gants anti-coupure pour utiliser un couteau ou vider le poisson.
On a cold summit, insulated gloves make a huge difference. | Sur un sommet froid, des gants isolants font une énorme différence.
Gloves protect your hands if you fall on technical terrain. | Les gants protègent vos mains si vous tombez sur un terrain technique.
More cushioning helps on long downhill sections. | Plus d'amorti aide dans les longues descentes.
Deep lugs grip mud but feel strange on pavement. | Les crampons profonds accrochent la boue mais sont bizarres sur le bitume.
Every runner must carry the mandatory gear, including an emergency blanket. | Chaque coureur doit porter le matériel obligatoire, dont une couverture de survie.
Start slow. Good pacing wins long races. | Partez doucement. Une bonne gestion de l'allure fait gagner les longues courses.
`,
});
