// 法文對照（Français）：居家用品
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
addFrench("household", {
  words: `
toothbrush | la brosse à dents | J'ai besoin d'une nouvelle brosse à dents.
toothpaste | le dentifrice | On n'a plus de dentifrice.
shampoo | le shampooing | Ce shampooing sent bon.
toilet paper | le papier toilette | Achète du papier toilette, s'il te plaît.
hair dryer | le sèche-cheveux | Je peux emprunter ton sèche-cheveux ?
comb | le peigne | Où est mon peigne ?
conditioner | l'après-shampooing | Mets de l'après-shampooing après le shampooing.
body wash | le gel douche | J'aime ce gel douche.
razor | le rasoir | Papa utilise un rasoir tous les matins.
tissue | le mouchoir en papier | Je peux avoir un mouchoir ?
cotton swab | le coton-tige | Ne mets pas de coton-tige dans ton oreille.
bucket | le seau | Remplis le seau d'eau.
mop | la serpillière ; le balai à franges | Nettoie le sol avec la serpillière.
sponge | l'éponge | Lave la vaisselle avec une éponge.
dustpan | la pelle à poussière | Prends le balai et la pelle.
trash bag | le sac poubelle | Il nous faut plus de sacs poubelle.
basket | le panier | Mets le linge sale dans le panier.
bottle | la bouteille | Remplis la bouteille d'eau.
jar | le bocal | Mets les biscuits dans un bocal.
can | la boîte de conserve | Ouvre la boîte de thon.
can opener | l'ouvre-boîte | Où est l'ouvre-boîte ?
pot | la casserole ; la marmite | Fais bouillir de l'eau dans une casserole.
pan | la poêle | Fais cuire l'œuf dans une poêle.
kettle | la bouilloire | Mets la bouilloire en route.
teapot | la théière | Mamie a une très belle théière.
mug | le mug ; la tasse | Je bois mon thé dans un grand mug.
cutting board | la planche à découper | Coupe les légumes sur la planche à découper.
rice cooker | le cuiseur à riz | Chaque foyer taïwanais a un cuiseur à riz.
toaster | le grille-pain | Mets le pain dans le grille-pain.
blender | le blender ; le mixeur | Fais un smoothie au mixeur.
dishwasher | le lave-vaisselle | Mets les assiettes dans le lave-vaisselle.
washing machine | la machine à laver | La machine à laver est sur le balcon.
iron | le fer à repasser | Le fer à repasser est chaud. Fais attention.
vacuum cleaner | l'aspirateur | L'aspirateur est très bruyant.
remote control | la télécommande | Où est la télécommande ?
light bulb | l'ampoule | Change l'ampoule.
flashlight | la lampe de poche | Garde une lampe de poche pour les typhons.
candle | la bougie | Allume une bougie.
matches | les allumettes | Garde les allumettes hors de portée des enfants.
lighter | le briquet | Tu as un briquet ?
hammer | le marteau | Tape sur le clou avec un marteau.
nail | le clou | Accroche le tableau à un clou.
screwdriver | le tournevis | J'ai besoin d'un tournevis.
ladder | l'échelle | Monte à l'échelle prudemment.
tape | le ruban adhésif ; le scotch | Ferme le carton avec du scotch.
string | la ficelle | Attache-le avec de la ficelle.
needle | l'aiguille | Couds-le avec une aiguille et du fil.
thread | le fil | J'ai besoin de fil noir.
safety pin | l'épingle à nourrice | Tiens-le avec une épingle à nourrice.
calendar | le calendrier | Note-le sur le calendrier.
photo frame | le cadre photo | J'ai acheté un nouveau cadre photo.
vase | le vase | Mets les fleurs dans un vase.
plant | la plante | Arrose la plante tous les jours.
cushion | le coussin | Le canapé a deux coussins.
rug | le tapis | Le chien dort sur le tapis.
drawer | le tiroir | Les cuillères sont dans le tiroir.
cabinet | le placard | Les tasses sont dans le placard.
bookcase | la bibliothèque | La bibliothèque est pleine.
hook | le crochet ; la patère | Accroche ton sac au crochet.
doormat | le paillasson | Essuie-toi les pieds sur le paillasson.
umbrella stand | le porte-parapluies | Mets ton parapluie dans le porte-parapluies.
alarm clock | le réveil | Mets le réveil à six heures.
scale | la balance ; le pèse-personne | Monte sur la balance.
thermometer | le thermomètre | Prends ta température avec un thermomètre pour voir si tu as de la fièvre.
medicine | le médicament | Prends ton médicament après le dîner.
bandage | le pansement | Mets un pansement sur la coupure.
mask | le masque | Porte un masque quand tu es malade.
hand cream | la crème pour les mains | J'ai les mains sèches. Il me faut de la crème pour les mains.
towel | la serviette | Essuie-toi les mains avec une serviette.
soap | le savon | Lave-toi les mains avec du savon.
cup | la tasse ; le gobelet | Il me faut une tasse pour mon thé.
spoon | la cuillère | Mange la soupe avec une cuillère.
fork | la fourchette | Je peux avoir une fourchette ?
plate | l'assiette | Mets le gâteau sur une assiette.
bowl | le bol | Je veux un bol de riz.
chopsticks | les baguettes | Je mange les nouilles avec des baguettes.
napkin | la serviette en papier | Voici une serviette.
tray | le plateau | Elle portait les tasses sur un plateau.
glue | la colle | Utilise de la colle pour coller le papier.
scissors | les ciseaux | Coupe-le avec des ciseaux.
ruler | la règle | Trace un trait avec une règle.
pen | le stylo | Je peux t'emprunter un stylo ?
pencil | le crayon | Écris ton nom au crayon.
eraser | la gomme | J'ai besoin d'une gomme.
notebook | le cahier ; le carnet | J'écris dans mon carnet.
envelope | l'enveloppe | Mets la lettre dans une enveloppe.
stamp | le timbre | Il faut un timbre pour envoyer ça.
lamp | la lampe de bureau ; la lampe | Allume la lampe.
fan | le ventilateur | Le ventilateur est trop bruyant.
heater | le radiateur ; le chauffage | Allume le radiateur. Il fait froid.
clock | l'horloge | L'horloge est au mur.
mirror | le miroir | Regarde-toi dans le miroir.
brush | la brosse | Nettoie les chaussures avec une brosse.
dustbin | la poubelle | Jette-le à la poubelle.
lock | la serrure | La serrure de la porte est cassée ?
key ring | le porte-clés | Mes clés sont sur un porte-clés.
slippers | les chaussons | Mets des chaussons dans la maison.
toy | le jouet | Range ton jouet.
sticky note | le post-it | Je t'ai laissé un post-it sur le frigo.
piggy bank | la tirelire | Je mets des pièces dans ma tirelire.
`,
  phrases: `
Where do you keep the scissors? | Où est-ce que tu ranges les ciseaux ?
We're out of toilet paper. | On n'a plus de papier toilette.
Can you hand me a towel? | Tu peux me passer une serviette ?
Where is the remote control? | Où est la télécommande ?
Can you pass me the scissors? | Tu peux me passer les ciseaux ?
The cups are in the cupboard. | Les tasses sont dans le placard.
Put the plates in the sink. | Mets les assiettes dans l'évier.
Wash the dishes, please. | Fais la vaisselle, s'il te plaît.
Dry the dishes with a towel. | Essuie la vaisselle avec un torchon.
We need more toilet paper. | Il nous faut plus de papier toilette.
The soap is next to the sink. | Le savon est à côté du lavabo.
Where is my toothbrush? | Où est ma brosse à dents ?
I need a new toothbrush. | J'ai besoin d'une nouvelle brosse à dents.
The towel is wet. | La serviette est mouillée.
Get a clean towel. | Prends une serviette propre.
Turn on the fan. | Allume le ventilateur.
Turn off the TV. | Éteins la télé.
The TV is too loud. | La télé est trop forte.
Turn it down, please. | Baisse le son, s'il te plaît.
Charge your phone. | Recharge ton téléphone.
Where is the charger? | Où est le chargeur ?
The battery is dead. | La batterie est à plat.
Plug it in. | Branche-le.
Unplug the iron. | Débranche le fer à repasser.
Put the milk in the fridge. | Mets le lait au frigo.
The fridge is empty. | Le frigo est vide.
Heat it in the microwave. | Réchauffe-le au micro-ondes.
Two minutes in the microwave. | Deux minutes au micro-ondes.
Boil some water in the kettle. | Fais bouillir de l'eau dans la bouilloire.
Don't touch the stove. It's hot. | Ne touche pas la cuisinière. Elle est chaude.
Turn off the gas. | Coupe le gaz.
Use the rice cooker. | Utilise le cuiseur à riz.
The washing machine is full. | La machine à laver est pleine.
Put your clothes in the basket. | Mets tes vêtements dans le panier.
Sweep the floor. | Balaie le sol.
Where's the broom? | Où est le balai ?
Mop the kitchen floor. | Passe la serpillière dans la cuisine.
Vacuum the carpet. | Passe l'aspirateur sur le tapis.
Dust the shelves. | Dépoussière les étagères.
The trash can is full. | La poubelle est pleine.
Put a new bag in the trash can. | Mets un nouveau sac dans la poubelle.
Put it in the recycling bin. | Mets-le dans la poubelle de recyclage.
Hang it on the hook. | Accroche-le au crochet.
Put the shoes on the shoe rack. | Mets les chaussures sur l'étagère à chaussures.
I need a pillow. | J'ai besoin d'un oreiller.
Can I have another blanket? | Je peux avoir une autre couverture ?
Change the sheets. | Change les draps.
Close the curtains. | Ferme les rideaux.
Open the curtains. | Ouvre les rideaux.
The lamp is broken. | La lampe est cassée.
Change the light bulb. | Change l'ampoule.
Where's the flashlight? | Où est la lampe de poche ?
Use a hanger for your shirt. | Mets ta chemise sur un cintre.
The mirror is dirty. | Le miroir est sale.
Look in the mirror. | Regarde-toi dans le miroir.
Get a chair. | Prends une chaise.
Sit on the sofa. | Assieds-toi sur le canapé.
Put the book on the shelf. | Pose le livre sur l'étagère.
The clock is slow. | L'horloge retarde.
Set the alarm for six. | Mets le réveil à six heures.
Turn off the alarm clock. | Éteins le réveil.
I need a pen. | J'ai besoin d'un stylo.
Do you have some tape? | Tu as du scotch ?
Where's the trash bag? | Où est le sac poubelle ?
Use the hair dryer. | Utilise le sèche-cheveux.
The shampoo is empty. | Il n'y a plus de shampooing.
Buy some toothpaste. | Achète du dentifrice.
Put the cups on the tray. | Mets les tasses sur le plateau.
Use a cutting board. | Utilise une planche à découper.
Be careful with the knife. | Fais attention avec le couteau.
Pass me a bowl. | Passe-moi un bol.
Get a spoon and a fork. | Prends une cuillère et une fourchette.
The pan is dirty. | La poêle est sale.
Fill the pot with water. | Remplis la casserole d'eau.
Where's the bottle opener? | Où est le décapsuleur ?
Put the lid on. | Mets le couvercle.
Take a tissue. | Prends un mouchoir.
Wipe the table. | Essuie la table.
Use a sponge. | Utilise une éponge.
Put the bucket in the bathroom. | Mets le seau dans la salle de bains.
Turn on the heater. | Allume le chauffage.
Close the drawer. | Ferme le tiroir.
Open the box. | Ouvre la boîte.
Put your toys in the box. | Range tes jouets dans la boîte.
Where's my umbrella? | Où est mon parapluie ?
Hang the keys by the door. | Accroche les clés près de la porte.
I can't find the key. | Je ne trouve pas la clé.
Fold the towels. | Plie les serviettes.
This drawer is stuck. | Ce tiroir est coincé.
We need a new kettle. | Il nous faut une nouvelle bouilloire.
The iron is hot. | Le fer est chaud.
Put the plant by the window. | Mets la plante près de la fenêtre.
Water the plants. | Arrose les plantes.
The vase is on the table. | Le vase est sur la table.
Don't break the glass. | Ne casse pas le verre.
Sweep up the broken glass. | Balaie le verre cassé.
Plug in the lamp. | Branche la lampe.
The fan is too strong. | Le ventilateur est trop fort.
Use the stepladder. | Utilise l'escabeau.
Put the dishes away. | Range la vaisselle.
`
});

// ---------- 中級 Intermediate ----------
addFrench("household", {
  words: `
detergent | la lessive | Mets moins de lessive pour les petites machines.
extension cord | la rallonge | Branche la lampe sur la rallonge.
ironing board | la planche à repasser | Installe la planche à repasser dans la chambre.
drying rack | l'étendoir ; le séchoir | Étends les chemises sur l'étendoir.
first aid kit | la trousse de secours | Garde une trousse de secours dans la cuisine.
batteries | les piles | La télécommande a besoin de piles neuves.
dish soap | le liquide vaisselle | On n'a presque plus de liquide vaisselle.
bleach | l'eau de Javel | Ne mélange pas l'eau de Javel avec d'autres produits.
fabric softener | l'adoucissant | L'adoucissant rend les serviettes moelleuses.
stain remover | le détachant | Essaie un détachant sur la tache de café.
laundry bag | le filet de lavage | Mets les vêtements délicats dans un filet de lavage.
clothespin | la pince à linge | Utilise des pinces à linge les jours de vent.
dryer | le sèche-linge | Ne mets pas la laine au sèche-linge.
lint roller | la brosse adhésive | Utilise une brosse adhésive pour enlever les poils de chat.
storage box | la boîte de rangement | Les vêtements d'hiver vont dans une boîte de rangement.
hamper | le panier à linge | Jette tes chaussettes dans le panier à linge.
cleaning cloth | le chiffon | Essuie la table avec un chiffon.
rubber gloves | les gants en caoutchouc | Mets des gants en caoutchouc pour récurer les toilettes.
toilet brush | la brosse WC ; la balayette | La brosse WC est derrière les toilettes.
plunger | la ventouse | Les toilettes sont bouchées. Où est la ventouse ?
air freshener | le désodorisant | Le désodorisant sent la lavande.
insect repellent | l'antimoustique ; le répulsif | Mets de l'antimoustique avant la randonnée.
electric fly swatter | la raquette électrique anti-moustiques | À Taïwan, chaque foyer a une raquette électrique anti-moustiques.
mousetrap | le piège à souris | Nous avons posé un piège à souris dans la cuisine.
food container | la boîte hermétique | Mets les restes dans une boîte hermétique.
plastic wrap | le film alimentaire | Couvre le bol de film alimentaire.
aluminum foil | le papier aluminium | Enveloppe le poisson dans du papier aluminium.
thermos | le thermos | J'emporte du thé chaud dans un thermos.
ladle | la louche | Sers la soupe avec une louche.
spatula | la spatule | Retourne la crêpe avec une spatule.
tongs | la pince | Utilise une pince pour retourner la viande.
peeler | l'économe ; l'éplucheur | Épluche les carottes avec un économe.
grater | la râpe | Râpe le fromage avec une râpe.
strainer | la passoire | Égoutte les nouilles dans une passoire.
measuring cup | le verre doseur | Utilise un verre doseur pour la farine.
apron | le tablier | Mets un tablier quand tu cuisines.
oven mitt | le gant de cuisine | Prends un gant de cuisine pour sortir la plaque.
air fryer | la friteuse sans huile | Nous faisons des frites à la friteuse sans huile.
electric kettle | la bouilloire électrique | La bouilloire électrique fait bouillir l'eau en deux minutes.
water dispenser | la fontaine à eau | Le bureau a une fontaine à eau.
range hood | la hotte | Allume la hotte quand tu fais de la friture.
freezer | le congélateur | La glace est au congélateur.
power strip | la multiprise | Branche la télé et la console sur la multiprise.
plug | la prise ; la fiche | Débranche la prise avant de nettoyer le ventilateur.
socket | la prise de courant | Il n'y a pas de prise près du lit.
charger | le chargeur | J'ai oublié le chargeur de mon téléphone.
adapter | l'adaptateur | Il faut un adaptateur au Royaume-Uni.
smoke detector | le détecteur de fumée | Teste le détecteur de fumée tous les mois.
fire extinguisher | l'extincteur | Garde un extincteur dans la cuisine.
toolbox | la boîte à outils | Le marteau est dans la boîte à outils.
wrench | la clé ; la clé à molette | Serre le tuyau avec une clé.
pliers | la pince | Utilise une pince pour plier le fil.
drill | la perceuse | Il nous faut une perceuse pour fixer l'étagère.
screw | la vis | Une vis est desserrée.
tape measure | le mètre ruban | Mesure la fenêtre avec un mètre ruban.
superglue | la colle forte ; la super glu | Répare l'anse de la tasse avec de la colle forte.
sewing kit | le nécessaire de couture | Je garde un nécessaire de couture dans mon tiroir.
coat rack | le portemanteau | Accroche ta veste au portemanteau.
shoe rack | l'étagère à chaussures | Mets tes chaussures sur l'étagère à chaussures.
bedsheet | le drap | Change les draps chaque semaine.
duvet | la couette | Il me faut une couette plus épaisse pour l'hiver.
mattress | le matelas | Ce matelas est trop mou.
pillowcase | la taie d'oreiller | Lave aussi les taies d'oreiller.
blinds | le store | Baisse le store : le soleil est trop fort.
nightlight | la veilleuse | Les enfants dorment avec une veilleuse.
doorstop | la cale-porte ; le butoir | Utilise une cale-porte pour garder la porte ouverte.
kitchen roll | l'essuie-tout | Essuie ça avec de l'essuie-tout.
paper towel | l'essuie-mains en papier | Prends un essuie-mains en papier pour te sécher les mains.
dish rack | l'égouttoir | Mets les assiettes propres dans l'égouttoir.
cutlery tray | le range-couverts | Les fourchettes vont dans le range-couverts.
spice rack | l'étagère à épices | L'étagère à épices est à côté de la cuisinière.
kitchen timer | le minuteur | Règle le minuteur sur dix minutes.
garbage disposal | le broyeur d'évier | Ne mets pas d'os dans le broyeur d'évier.
recycling bin | la poubelle de tri | Les bouteilles vont dans la poubelle de tri.
step stool | le marchepied | Utilise le marchepied pour atteindre l'étagère du haut.
feather duster | le plumeau | Elle a nettoyé les étagères avec un plumeau.
squeegee | la raclette | Utilise une raclette pour nettoyer la vitre de la douche.
scrub brush | la brosse à récurer | Frotte le sol avec une brosse à récurer.
steel wool | la paille de fer | La paille de fer enlève la nourriture brûlée des poêles.
baking soda | le bicarbonate de soude | Le bicarbonate de soude élimine les mauvaises odeurs.
vinegar | le vinaigre | Le vinaigre blanc est efficace pour nettoyer les vitres.
disinfectant | le désinfectant | Essuie la table avec du désinfectant.
hand sanitizer | le gel hydroalcoolique | Garde du gel hydroalcoolique dans ton sac.
wet wipes | les lingettes | Les lingettes sont pratiques avec les petits enfants.
cotton pad | le coton démaquillant | Démaquille-toi avec un coton démaquillant.
nail clippers | le coupe-ongles | Où est le coupe-ongles ?
tweezers | la pince à épiler | J'ai utilisé une pince à épiler pour enlever l'écharde.
shower cap | le bonnet de douche | Mets un bonnet de douche pour garder les cheveux secs.
bath mat | le tapis de bain | Le tapis de bain t'empêche de glisser.
towel rack | le porte-serviettes | Accroche ta serviette au porte-serviettes.
soap dispenser | le distributeur de savon | Le distributeur de savon est vide.
toothbrush holder | le porte-brosse à dents | Mets ta brosse à dents dans le porte-brosse à dents.
laundry basket | le panier à linge | Mets ton linge sale dans le panier à linge.
garment steamer | le défroisseur vapeur | Un défroisseur vapeur est plus rapide qu'un fer.
sewing machine | la machine à coudre | Ma grand-mère utilise encore sa vieille machine à coudre.
glue gun | le pistolet à colle | J'ai réparé le cadre avec un pistolet à colle.
duct tape | le chatterton ; le ruban adhésif toilé | Le chatterton peut presque tout réparer.
zip tie | le collier de serrage | Utilise un collier de serrage pour regrouper les câbles.
curtain rod | la tringle à rideaux | La tringle à rideaux est tombée.
coaster | le dessous-de-verre | Pose ton verre sur un dessous-de-verre.
clean as a whistle | propre comme un sou neuf | La cuisine est propre comme un sou neuf.
everything but the kitchen sink | tout sauf l'évier ; tout et n'importe quoi | Elle a tout emporté, sauf l'évier.
sweep it under the rug | cacher la poussière sous le tapis | Ne cache pas la poussière sous le tapis.
a new broom sweeps clean | tout nouveau, tout beau | Tout nouveau, tout beau : le nouveau directeur a tout changé.
on the back burner | en veilleuse | Mettons ce projet en veilleuse.
air your dirty laundry | laver son linge sale en public | Ne lave pas ton linge sale en public sur Internet.
spick and span | impeccable ; nickel | La maison est nickel pour les invités.
out like a light | dormir comme une masse | Hier soir, j'ai dormi comme une masse.
bright spark | le petit malin | Quel petit malin a laissé la porte ouverte ?
a watched pot never boils | plus on attend, plus c'est long | Arrête de vérifier. Plus on attend, plus c'est long.
the pot calling the kettle black | c'est l'hôpital qui se moque de la charité | C'est l'hôpital qui se moque de la charité.
from scratch | à partir de zéro ; fait maison | J'ai fait cette soupe à partir de zéro.
a storm in a teacup | une tempête dans un verre d'eau | Leur dispute, c'était une tempête dans un verre d'eau.
on the shelf | mis de côté ; au placard | Le projet est mis de côté pour l'instant.
hang by a thread | ne tenir qu'à un fil | La vieille étagère ne tient qu'à un fil.
`,
  phrases: `
The light bulb in the hallway burned out. | L'ampoule du couloir a grillé.
Could you unplug the iron when you're done? | Tu pourrais débrancher le fer quand tu as fini ?
The vacuum cleaner isn't picking anything up. | L'aspirateur n'aspire plus rien.
The washing machine is making a weird noise. | La machine à laver fait un bruit bizarre.
The dishwasher isn't draining properly. | Le lave-vaisselle ne se vide pas bien.
I think the fridge door isn't closing all the way. | Je crois que la porte du frigo ne ferme pas complètement.
The freezer needs defrosting. | Il faut dégivrer le congélateur.
The microwave sparks when I use it. | Le micro-ondes fait des étincelles quand je l'utilise.
Don't put metal in the microwave. | Ne mets pas de métal au micro-ondes.
The vacuum cleaner has lost its suction. | L'aspirateur a perdu de sa puissance d'aspiration.
Empty the dust container before it gets full. | Vide le bac à poussière avant qu'il soit plein.
The robot vacuum keeps getting stuck under the sofa. | L'aspirateur robot reste tout le temps coincé sous le canapé.
We should get an air purifier. | On devrait acheter un purificateur d'air.
Change the filter every three months. | Change le filtre tous les trois mois.
The dehumidifier tank is full again. | Le réservoir du déshumidificateur est encore plein.
The air conditioner needs cleaning. | Il faut nettoyer la clim.
The remote needs new batteries. | La télécommande a besoin de piles neuves.
Do we have any AA batteries? | On a des piles AA ?
The extension cord is overloaded. | La rallonge est surchargée.
Don't plug too many things into one socket. | Ne branche pas trop d'appareils sur une seule prise.
The fuse blew again. | Le fusible a encore sauté.
The circuit breaker tripped. | Le disjoncteur a sauté.
I need an adapter for this plug. | J'ai besoin d'un adaptateur pour cette prise.
The water filter needs replacing. | Il faut changer le filtre à eau.
The faucet is dripping. | Le robinet goutte.
The toilet keeps running. | La chasse d'eau coule sans arrêt.
We need a plunger. | Il nous faut une ventouse.
The drain is blocked with hair. | La bonde est bouchée par des cheveux.
The shower head needs descaling. | Il faut détartrer le pommeau de douche.
Vinegar works well for removing limescale. | Le vinaigre est efficace contre le calcaire.
Baking soda is great for cleaning. | Le bicarbonate de soude est super pour le ménage.
Don't mix bleach with other cleaners. | Ne mélange pas l'eau de Javel avec d'autres produits ménagers.
Keep cleaning products out of reach of children. | Garde les produits ménagers hors de portée des enfants.
Wear gloves when you use this cleaner. | Mets des gants quand tu utilises ce produit.
I prefer eco-friendly detergents. | Je préfère les lessives écologiques.
How much detergent should I use? | Je dois mettre combien de lessive ?
Use the gentle cycle for delicates. | Utilise le programme délicat pour le linge fragile.
Separate the whites from the colors. | Sépare le blanc de la couleur.
The dryer shrank my sweater. | Le sèche-linge a fait rétrécir mon pull.
I'll hang the laundry up to dry. | Je vais étendre le linge.
The clothes rack is full. | L'étendoir est plein.
Can you fold the laundry? | Tu peux plier le linge ?
We need more hangers. | Il nous faut plus de cintres.
I bought some storage boxes to organize the closet. | J'ai acheté des boîtes de rangement pour organiser le placard.
Vacuum storage bags save a lot of space. | Les housses sous vide font gagner beaucoup de place.
Let's put the winter clothes away. | Rangeons les vêtements d'hiver.
The kitchen drawers are a mess. | Les tiroirs de la cuisine sont en désordre.
Where do we keep the spare light bulbs? | Où est-ce qu'on range les ampoules de rechange ?
The toolbox is in the storage room. | La boîte à outils est dans le débarras.
I need a screwdriver to fix this. | Il me faut un tournevis pour réparer ça.
Do we have a hammer and some nails? | On a un marteau et des clous ?
Measure it with the tape measure first. | Mesure-le d'abord avec le mètre ruban.
The chair is wobbly. | La chaise est bancale.
Tighten the screws on the table legs. | Resserre les vis des pieds de la table.
This furniture needs to be assembled. | Ce meuble est à monter.
The instructions are really confusing. | La notice est vraiment incompréhensible.
There's a part missing. | Il manque une pièce.
The mattress is too soft for me. | Le matelas est trop mou pour moi.
I bought a new pillow for my neck pain. | J'ai acheté un nouvel oreiller pour mes douleurs au cou.
Flip the mattress every few months. | Retourne le matelas tous les quelques mois.
Wash the bedding once a week. | Lave la literie une fois par semaine.
These blackout curtains help me sleep. | Ces rideaux occultants m'aident à dormir.
The non-stick pan is scratched. | La poêle antiadhésive est rayée.
Use a wooden spatula on non-stick pans. | Utilise une spatule en bois sur les poêles antiadhésives.
The kitchen knife is blunt. | Le couteau de cuisine ne coupe plus.
We need to sharpen the knives. | Il faut aiguiser les couteaux.
Store leftovers in airtight containers. | Conserve les restes dans des boîtes hermétiques.
Glass containers are better than plastic. | Les boîtes en verre sont meilleures que celles en plastique.
Label the containers with the date. | Note la date sur les boîtes.
The kitchen scale is great for baking. | La balance de cuisine est super pour la pâtisserie.
The air fryer is my favorite gadget. | La friteuse sans huile est mon appareil préféré.
The coffee machine needs descaling. | Il faut détartrer la machine à café.
I'd like to get a stand mixer. | J'aimerais acheter un robot pâtissier.
Small appliances take up a lot of counter space. | Les petits appareils prennent beaucoup de place sur le plan de travail.
We should get a smart plug for the lamp. | On devrait acheter une prise connectée pour la lampe.
The smoke detector needs testing. | Il faut tester le détecteur de fumée.
Keep a fire extinguisher in the kitchen. | Garde un extincteur dans la cuisine.
Check the gas valve before you go to bed. | Vérifie le robinet de gaz avant d'aller te coucher.
The first aid kit is in the bathroom cabinet. | La trousse de secours est dans l'armoire de la salle de bains.
We're out of plasters. | On n'a plus de pansements.
Let's make a shopping list of things we need. | Faisons une liste de courses de ce qu'il nous faut.
We always run out of dish soap. | On tombe toujours à court de liquide vaisselle.
Buying in bulk is cheaper. | Acheter en gros revient moins cher.
The warranty covers repairs for two years. | La garantie couvre les réparations pendant deux ans.
Keep the receipt in case it breaks. | Garde le ticket au cas où il tomberait en panne.
Is it worth fixing or should we buy a new one? | Ça vaut le coup de le réparer, ou on en achète un neuf ?
It's cheaper to replace it than to repair it. | Le remplacer coûte moins cher que le réparer.
How do I dispose of old batteries? | Comment est-ce qu'on jette les vieilles piles ?
Large items have to be booked for collection. | Pour les encombrants, il faut réserver un ramassage.
Let's donate the things we don't use. | Donnons les choses qu'on n'utilise pas.
This drawer is full of random cables. | Ce tiroir est plein de câbles en vrac.
I can never find the right charger. | Je ne trouve jamais le bon chargeur.
Let's get a cable organizer. | Achetons un range-câbles.
The rug collects a lot of dust. | Le tapis ramasse beaucoup de poussière.
The doormat keeps the floor clean. | Le paillasson garde le sol propre.
I put a hook behind the door for bags. | J'ai mis un crochet derrière la porte pour les sacs.
These shelves are perfect for small spaces. | Ces étagères sont parfaites pour les petits espaces.
Everything has its place in this house. | Dans cette maison, chaque chose a sa place.
Could you show me how to use the washing machine? | Tu pourrais me montrer comment utiliser la machine à laver ?
The rice cooker has a timer, so dinner will be ready when we get home. | Le cuiseur à riz a un minuteur, alors le dîner sera prêt quand on rentrera.
`
});

// ---------- 高級 Advanced ----------
addFrench("household", {
  words: `
air purifier | le purificateur d'air | Un purificateur d'air aide en cas d'allergies.
water filter | le filtre à eau | Change le filtre à eau tous les trois mois.
circuit breaker | le disjoncteur | Le disjoncteur a sauté quand on a allumé deux radiateurs.
surge protector | le parafoudre ; la multiprise parafoudre | Branche ton ordinateur sur une multiprise parafoudre.
warranty | la garantie | Le frigo est encore sous garantie.
ergonomic | ergonomique | J'ai acheté une chaise de bureau ergonomique.
induction cooktop | la plaque à induction | Une plaque à induction chauffe directement la poêle.
heat pump | la pompe à chaleur | Un chauffe-eau à pompe à chaleur économise de l'énergie.
water heater | le chauffe-eau | Le chauffe-eau au gaz a besoin d'une évacuation.
tankless | instantané ; sans réservoir | Un chauffe-eau instantané donne de l'eau chaude à l'infini.
smart plug | la prise connectée | Une prise connectée permet d'éteindre les appareils depuis ton téléphone.
robot vacuum | l'aspirateur robot | L'aspirateur robot nettoie pendant qu'on est au travail.
voice assistant | l'assistant vocal | Demande à l'assistant vocal d'éteindre les lumières.
standby power | la consommation en veille | La consommation en veille finit par compter sur une année.
energy label | l'étiquette énergie | Regarde l'étiquette énergie avant d'acheter.
wattage | la puissance | Quelle est la puissance de ce radiateur ?
voltage | la tension | Vérifie la tension avant de brancher un appareil étranger.
overload | surcharger ; la surcharge | Ne surcharge pas la multiprise.
short circuit | le court-circuit | L'eau a provoqué un court-circuit.
grounding | la mise à la terre | La machine à laver a besoin d'une bonne mise à la terre.
gas leak | la fuite de gaz | Si tu sens une fuite de gaz, ouvre les fenêtres.
carbon monoxide | le monoxyde de carbone | Installe un détecteur de monoxyde de carbone près du chauffe-eau.
ventilation fan | l'extracteur d'air ; la VMC | Fais tourner l'extracteur d'air après la douche.
caulk | le mastic ; mastiquer | Refais le joint en mastic autour de la baignoire pour éviter les fuites.
grout | le joint de carrelage | Les joints entre les carreaux sont moisis.
sealant | le produit d'étanchéité | Applique un produit d'étanchéité autour du cadre de la fenêtre.
upholstery | le revêtement ; la tapisserie | Le revêtement du canapé est taché.
stain-resistant | anti-taches | Choisis un tissu anti-taches si tu as des enfants.
hypoallergenic | hypoallergénique | Nous avons acheté des oreillers hypoallergéniques.
dust mite | l'acarien | Lave la literie à l'eau chaude pour tuer les acariens.
antibacterial | antibactérien | Cette planche à découper est antibactérienne.
non-stick | antiadhésif | N'utilise pas d'ustensiles en métal sur une poêle antiadhésive.
cast iron | la fonte | Une poêle en fonte dure toute une vie.
stainless steel | l'acier inoxydable ; l'inox | L'inox ne rouille pas.
BPA-free | sans BPA | Achète des gourdes sans BPA.
disposable | jetable | Évite les couverts jetables.
reusable | réutilisable | Apporte un sac réutilisable au magasin.
compost bin | le composteur | Nous mettons les épluchures de fruits dans le composteur.
declutter | désencombrer ; faire du tri | Nous désencombrons la maison chaque printemps.
minimalism | le minimalisme | Le minimalisme, c'est ne posséder que ce dont on a besoin.
storage solution | la solution de rangement | Les boîtes sous le lit sont une excellente solution de rangement.
space-saving | gain de place | Nous avons acheté une table pliante gain de place.
modular | modulable | Les étagères modulables se réorganisent facilement.
flat-pack | en kit | Les meubles en kit sont bon marché mais difficiles à monter.
assemble | monter ; assembler | Il a fallu trois heures pour monter l'armoire.
instruction manual | le mode d'emploi | Lis d'abord le mode d'emploi.
troubleshoot | diagnostiquer une panne | Essaie de diagnostiquer la panne de l'imprimante avant d'appeler le support.
malfunction | le dysfonctionnement ; la panne | Le lave-vaisselle présente un dysfonctionnement.
spare part | la pièce détachée | On ne fabrique plus de pièces détachées pour ce modèle.
planned obsolescence | l'obsolescence programmée | L'obsolescence programmée nous oblige à acheter de nouveaux téléphones.
right to repair | le droit à la réparation | Le mouvement pour le droit à la réparation prend de l'ampleur.
extended warranty | l'extension de garantie | L'extension de garantie, ça vaut le coup ?
trade-in | la reprise | Le magasin propose une reprise des vieux frigos.
e-waste | les déchets électroniques | Recycle correctement tes déchets électroniques.
household chemicals | les produits ménagers chimiques | Range les produits ménagers chimiques hors de portée des enfants.
childproof | sécurité enfant ; sécuriser | Nous avons sécurisé tous les placards pour les enfants.
non-slip | antidérapant | Mets un tapis antidérapant dans la douche.
grab bar | la barre d'appui | Installe une barre d'appui pour les parents âgés.
durability | la durabilité ; la solidité | Pour une machine à laver, la durabilité compte plus que le prix.
maintenance schedule | le calendrier d'entretien | Respecte le calendrier d'entretien de la clim.
descale | détartrer | Détartre la bouilloire une fois par mois.
limescale | le calcaire ; le tartre | L'eau dure laisse du calcaire sur le robinet.
aerator | le mousseur ; l'aérateur | Nettoie le mousseur du robinet pour améliorer le débit.
ambient lighting | l'éclairage d'ambiance | L'éclairage d'ambiance rend la pièce chaleureuse.
dimmer | le variateur | Installe un variateur dans la chambre.
blackout curtains | les rideaux occultants | Les rideaux occultants aident les travailleurs de nuit à dormir.
dehumidifier | le déshumidificateur | Le déshumidificateur remplit un réservoir d'eau chaque jour.
humidifier | l'humidificateur | Un humidificateur aide par temps sec.
HEPA filter | le filtre HEPA | Cet aspirateur a un filtre HEPA.
air quality monitor | le capteur de qualité de l'air | Le capteur de qualité de l'air affiche le taux de PM2,5.
programmable | programmable | Le radiateur a un minuteur programmable.
inverter | l'inverter ; la technologie inverter | Un climatiseur inverter consomme moins.
kilowatt-hour | le kilowattheure | La facture indique combien de kilowattheures nous avons consommés.
power outage | la coupure de courant | Garde une lampe de poche à portée de main en cas de coupure de courant.
backup generator | le groupe électrogène de secours | L'hôpital a un groupe électrogène de secours.
lithium battery | la batterie au lithium | Une batterie au lithium endommagée peut prendre feu.
fire blanket | la couverture anti-feu | Garde une couverture anti-feu dans la cuisine.
emergency kit | le kit d'urgence | Notre kit d'urgence contient de l'eau, de la nourriture et une radio.
go-bag | le sac d'évacuation | Garde un sac d'évacuation près de la porte pendant la saison des typhons.
shelf-stable | de longue conservation | Le lait de longue conservation n'a pas besoin de frigo.
vacuum sealer | la machine sous vide | Une machine sous vide garde les aliments frais plus longtemps.
pressure cooker | l'autocuiseur ; la cocotte-minute | Un autocuiseur fait un ragoût en deux fois moins de temps.
slow cooker | la mijoteuse | Je laisse la mijoteuse allumée pendant que je suis au travail.
food processor | le robot multifonction | Hache les légumes au robot multifonction.
stand mixer | le robot pâtissier | Un robot pâtissier facilite beaucoup la pâtisserie.
espresso machine | la machine à expresso | La machine à expresso doit être détartrée régulièrement.
milk frother | le mousseur à lait | Utilise le mousseur à lait pour un cappuccino.
water softener | l'adoucisseur d'eau | Un adoucisseur d'eau réduit le calcaire.
septic tank | la fosse septique | Il faut vidanger la fosse septique tous les quelques ans.
drain cleaner | le déboucheur | Le déboucheur peut abîmer les vieux tuyaux.
enzyme cleaner | le nettoyant enzymatique | Les nettoyants enzymatiques enlèvent les taches d'animaux.
fragrance-free | sans parfum | J'achète une lessive sans parfum pour ma peau sensible.
biodegradable | biodégradable | Ces sacs poubelle sont biodégradables.
refillable | rechargeable | Les flacons rechargeables réduisent les déchets plastiques.
zero-waste | zéro déchet | Elle essaie d'adopter un mode de vie zéro déchet.
subscription | l'abonnement | Nous recevons nos capsules de café par abonnement.
bulk buying | l'achat en gros | L'achat en gros fait économiser sur le papier toilette.
inventory | l'inventaire | Je tiens un inventaire de ce qu'il y a dans le congélateur.
home insurance | l'assurance habitation | L'assurance habitation couvre l'incendie et le vol.
smoke alarm | le détecteur de fumée | Teste le détecteur de fumée une fois par mois.
come out in the wash | tout finit par s'arranger | Ne t'inquiète pas, tout finira par s'arranger.
like a bull in a china shop | comme un éléphant dans un magasin de porcelaine | Dans la cuisine, il est comme un éléphant dans un magasin de porcelaine.
throw in the towel | jeter l'éponge | Je ne suis pas prêt à jeter l'éponge.
plug away | persévérer ; s'accrocher | Persévère et tu finiras.
not the sharpest knife in the drawer | pas une lumière | Ce n'est pas une lumière.
put a lid on it | la mettre en sourdine ; se taire | Mets-la en sourdine : le bébé dort.
recharge your batteries | recharger ses batteries | Prends une semaine pour recharger tes batteries.
in hot water | dans le pétrin | Il est dans le pétrin pour avoir cassé le vase.
wet blanket | le rabat-joie | Ne fais pas le rabat-joie.
dirty laundry | le linge sale | Chaque famille a son linge sale.
the last straw | la goutte d'eau qui fait déborder le vase | La machine à laver en panne, c'était la goutte d'eau qui fait déborder le vase.
needle in a haystack | une aiguille dans une botte de foin | Retrouver ma boucle d'oreille, c'est comme chercher une aiguille dans une botte de foin.
off the wall | farfelu ; loufoque | Ses idées sont un peu farfelues.
on pins and needles | sur des charbons ardents | Je suis sur des charbons ardents en attendant les résultats.
under the carpet | sous le tapis | Ils ont essayé de cacher le problème sous le tapis.
`,
  phrases: `
It's more cost-effective to repair it than to replace it. | Le réparer est plus rentable que le remplacer.
Look for appliances with a high energy-efficiency rating. | Choisis des appareils bien classés sur l'étiquette énergie.
Decluttering made our small apartment feel twice as big. | Le désencombrement a rendu notre petit appartement deux fois plus spacieux.
Smart appliances can be controlled remotely from your phone. | Les appareils connectés se pilotent à distance depuis le téléphone.
I'm not convinced we need a fridge that connects to the internet. | Je ne suis pas convaincu qu'on ait besoin d'un frigo connecté à Internet.
Every connected device is a potential security risk. | Chaque objet connecté est un risque potentiel pour la sécurité.
Voice assistants are always listening, which makes some people uneasy. | Les assistants vocaux écoutent en permanence, ce qui met certaines personnes mal à l'aise.
Energy-efficient appliances cost more upfront but save money long term. | Les appareils économes coûtent plus cher à l'achat, mais font économiser à long terme.
Check the energy label before buying a new appliance. | Regarde l'étiquette énergie avant d'acheter un nouvel appareil.
Standby power accounts for a surprising share of electricity use. | La veille représente une part étonnante de la consommation d'électricité.
Inverter air conditioners are far more efficient. | Les climatiseurs inverter sont bien plus efficaces.
Planned obsolescence means products are designed to fail. | L'obsolescence programmée signifie que les produits sont conçus pour tomber en panne.
Many appliances are deliberately hard to repair. | Beaucoup d'appareils sont volontairement difficiles à réparer.
The right-to-repair movement is gaining momentum. | Le mouvement pour le droit à la réparation prend de l'ampleur.
Spare parts are often unavailable after a few years. | Les pièces détachées sont souvent introuvables au bout de quelques années.
Manufacturers void the warranty if you open the device. | Les fabricants annulent la garantie si on ouvre l'appareil.
E-waste is one of the fastest-growing waste streams. | Les déchets électroniques font partie des déchets qui augmentent le plus vite.
Old electronics contain valuable and toxic materials. | Les vieux appareils électroniques contiennent des matériaux précieux et toxiques.
Single-use plastics are being phased out. | Les plastiques à usage unique sont progressivement supprimés.
I've switched to refillable cleaning products. | Je suis passé aux produits ménagers rechargeables.
Microfiber cloths shed tiny fibers in the wash. | Les chiffons en microfibre libèrent de minuscules fibres au lavage.
Many common cleaners contain harsh chemicals. | Beaucoup de produits ménagers courants contiennent des substances agressives.
Indoor air can be more polluted than outdoor air. | L'air intérieur peut être plus pollué que l'air extérieur.
Proper ventilation reduces mold and humidity. | Une bonne aération réduit les moisissures et l'humidité.
Mold spores can trigger allergies and asthma. | Les spores de moisissure peuvent déclencher des allergies et de l'asthme.
A HEPA filter captures very fine particles. | Un filtre HEPA capte les particules très fines.
Carbon monoxide detectors are essential if you use gas. | Les détecteurs de monoxyde de carbone sont indispensables si vous utilisez le gaz.
Gas water heaters must be installed outdoors or well ventilated. | Les chauffe-eau au gaz doivent être installés dehors ou dans un endroit bien aéré.
Old wiring can be a serious fire hazard. | Une vieille installation électrique peut présenter un grave risque d'incendie.
Overloaded power strips are a common cause of house fires. | Les multiprises surchargées sont une cause fréquente d'incendies domestiques.
Lithium batteries can overheat if damaged. | Les batteries au lithium peuvent surchauffer si elles sont endommagées.
Never leave devices charging overnight on the bed. | Ne laisse jamais un appareil charger toute la nuit sur le lit.
Childproofing involves covering sockets and securing furniture. | Sécuriser la maison pour les enfants, c'est cacher les prises et fixer les meubles.
Tall furniture should be anchored to the wall. | Les meubles hauts doivent être fixés au mur.
Non-slip mats reduce the risk of falls in the bathroom. | Les tapis antidérapants réduisent le risque de chute dans la salle de bains.
Grab bars make bathrooms safer for older people. | Les barres d'appui rendent la salle de bains plus sûre pour les personnes âgées.
Minimalism is about owning only what adds value to your life. | Le minimalisme, c'est ne posséder que ce qui apporte quelque chose à sa vie.
The KonMari method asks whether an item sparks joy. | La méthode KonMari demande si un objet vous procure de la joie.
Clutter can have a real effect on mental well-being. | Le désordre peut avoir un réel effet sur le bien-être mental.
We accumulate far more stuff than we realize. | Nous accumulons bien plus d'affaires que nous ne le pensons.
A one-in, one-out rule keeps clutter under control. | La règle « un objet qui entre, un objet qui sort » limite l'encombrement.
Good storage is about accessibility, not just capacity. | Un bon rangement, c'est l'accessibilité, pas seulement la capacité.
Built-in storage makes better use of awkward spaces. | Les rangements intégrés exploitent mieux les recoins difficiles.
Modular furniture adapts as your needs change. | Les meubles modulables s'adaptent à l'évolution de vos besoins.
Flat-pack furniture rarely survives a move. | Les meubles en kit survivent rarement à un déménagement.
Solid wood furniture can last for generations. | Les meubles en bois massif peuvent durer des générations.
Cheap furniture is often a false economy. | Les meubles bon marché sont souvent une fausse économie.
Ergonomic chairs are worth the investment if you work from home. | Une chaise ergonomique vaut l'investissement si vous travaillez à domicile.
The right lighting can transform a room. | Un bon éclairage peut transformer une pièce.
Warm light is more relaxing in the evening. | Le soir, une lumière chaude est plus relaxante.
Blue light at night can disrupt your sleep. | La lumière bleue le soir peut perturber le sommeil.
A good mattress is an investment in your health. | Un bon matelas est un investissement pour la santé.
Natural materials tend to age more gracefully. | Les matériaux naturels vieillissent généralement mieux.
Cast iron pans last a lifetime with proper care. | Bien entretenue, une poêle en fonte dure toute une vie.
Non-stick coatings have raised health concerns. | Les revêtements antiadhésifs ont soulevé des inquiétudes sanitaires.
Stainless steel is more durable than aluminum. | L'inox est plus résistant que l'aluminium.
Some plastics can leach chemicals when heated. | Certains plastiques peuvent libérer des substances chimiques quand on les chauffe.
Never microwave food in plastic containers. | Ne réchauffe jamais d'aliments au micro-ondes dans des boîtes en plastique.
Household chores are rarely divided equally. | Les tâches ménagères sont rarement partagées équitablement.
Invisible labor includes planning and remembering what needs doing. | La charge mentale, c'est planifier et se souvenir de tout ce qu'il faut faire.
We use a shared app to track household tasks. | Nous utilisons une appli partagée pour suivre les tâches ménagères.
Outsourcing chores frees up time but costs money. | Déléguer les corvées libère du temps, mais coûte de l'argent.
A cleaner comes in every other week. | Une femme de ménage vient toutes les deux semaines.
Appliances have dramatically reduced time spent on housework. | L'électroménager a considérablement réduit le temps passé aux tâches ménagères.
The washing machine arguably changed society more than the internet. | On peut dire que la machine à laver a davantage changé la société qu'Internet.
Subscription models are spreading to household goods. | Les abonnements s'étendent aux produits ménagers.
Automatic refills mean you never run out of essentials. | Avec le réapprovisionnement automatique, on ne manque jamais de l'essentiel.
Online reviews of appliances can be unreliable. | Les avis en ligne sur l'électroménager ne sont pas toujours fiables.
Extended warranties are rarely worth the money. | Les extensions de garantie valent rarement leur prix.
Second-hand appliances can be a bargain, but they're a gamble. | L'électroménager d'occasion peut être une bonne affaire, mais c'est un pari.
Repair cafés help people fix things instead of throwing them away. | Les repair cafés aident les gens à réparer leurs objets au lieu de les jeter.
I've learned to do basic repairs myself. | J'ai appris à faire moi-même les petites réparations.
Tutorial videos have made DIY repairs much easier. | Les tutoriels vidéo ont beaucoup facilité le bricolage.
Some jobs are best left to a professional. | Certains travaux sont à laisser aux professionnels.
Electrical work should only be done by a licensed electrician. | Les travaux électriques ne doivent être faits que par un électricien qualifié.
Hard water shortens the lifespan of appliances. | L'eau calcaire réduit la durée de vie des appareils.
Regular maintenance prevents costly breakdowns. | Un entretien régulier évite des pannes coûteuses.
The filter should be cleaned every couple of weeks. | Il faut nettoyer le filtre toutes les deux semaines environ.
Descaling regularly keeps the kettle working efficiently. | Détartrer régulièrement la bouilloire la garde efficace.
Mothballs are toxic, so I use cedar instead. | La naphtaline est toxique, alors j'utilise du cèdre à la place.
Silica gel packets help keep cupboards dry. | Les sachets de gel de silice aident à garder les placards secs.
The house smells musty after the rainy season. | La maison sent le renfermé après la saison des pluies.
Essential oil diffusers aren't safe around some pets. | Les diffuseurs d'huiles essentielles ne sont pas sans danger pour certains animaux.
Scented candles can affect indoor air quality. | Les bougies parfumées peuvent dégrader la qualité de l'air intérieur.
Houseplants won't purify the air as much as people claim. | Les plantes d'intérieur ne purifient pas l'air autant qu'on le dit.
Labeling everything makes life easier for the whole family. | Tout étiqueter facilite la vie de toute la famille.
A well-organized kitchen makes cooking far less stressful. | Une cuisine bien organisée rend la cuisine beaucoup moins stressante.
I keep an inventory of what's in the freezer. | Je tiens un inventaire de ce qu'il y a dans le congélateur.
The pantry is stocked for emergencies. | Le garde-manger est approvisionné en cas d'urgence.
Every household should have an emergency kit. | Chaque foyer devrait avoir un kit d'urgence.
Keep a supply of water and batteries in case of a typhoon. | Garde une réserve d'eau et de piles en cas de typhon.
We stocked up on essentials before the storm. | Nous avons fait des réserves de produits essentiels avant la tempête.
Panic buying leads to shortages of household goods. | Les achats de panique provoquent des pénuries de produits ménagers.
The price of household essentials has gone up a lot. | Le prix des produits de première nécessité a beaucoup augmenté.
Store brands are often just as good as name brands. | Les marques de distributeur sont souvent aussi bonnes que les grandes marques.
Packaging accounts for a large part of household waste. | Les emballages représentent une grande partie des déchets ménagers.
Refill stations let you bring your own containers. | Les stations de recharge permettent d'apporter ses propres contenants.
A well-designed object makes everyday life a little easier. | Un objet bien conçu rend la vie quotidienne un peu plus facile.
Good design is often invisible until it's missing. | Le bon design est souvent invisible, jusqu'à ce qu'il manque.
Robot vacuums map your home, which raises questions about data. | Les aspirateurs robots cartographient votre logement, ce qui pose des questions sur les données.
`
});
