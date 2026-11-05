// 法文對照（Français）：衣・穿著
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
addFrench("clothing", {
  words: `
shirt | la chemise | Il porte une chemise bleue.
shoes | les chaussures | Ces chaussures sont trop petites.
size | la taille ; la pointure | Quelle taille fais-tu ?
try on | essayer | Je peux essayer cette veste ?
cheap | pas cher ; bon marché | Ce T-shirt n'est vraiment pas cher.
wear | porter | Je porte un manteau en hiver.
dress | la robe | Elle porte une robe rouge.
skirt | la jupe | Cette jupe est trop longue.
pants | le pantalon | J'ai besoin d'un nouveau pantalon pour le travail.
jeans | le jean | Je porte un jean presque tous les jours.
jacket | la veste ; le blouson | Prends une veste. Il fait froid dehors.
coat | le manteau | Mon manteau d'hiver est très chaud.
T-shirt | le T-shirt | J'ai acheté un T-shirt blanc.
sweater | le pull | Mamie m'a tricoté ce pull.
socks | les chaussettes | Je ne trouve pas mes chaussettes.
hat | le chapeau | Mets un chapeau au soleil.
shorts | le short | Il fait chaud. Je porte un short aujourd'hui.
uniform | l'uniforme | Dans mon école, les élèves portent un uniforme.
pocket | la poche | Mon téléphone est dans ma poche.
button | le bouton | Un bouton de ma chemise est tombé.
color | la couleur | Quelle couleur aimes-tu ?
black | noir | Je veux le noir.
white | blanc | Les chaussures blanches se salissent vite.
big | grand | Ce chapeau est trop grand pour moi.
small | petit | Vous avez une petite taille ?
long | long | Elle a les cheveux longs.
short | court | Ces manches sont trop courtes.
new | neuf ; nouveau | J'adore tes nouvelles chaussures !
old | vieux | Ce jean est vieux, mais il est confortable.
buy | acheter | Je veux acheter un nouveau sac.
pay | payer | Je peux payer par carte ?
bag | le sac | Son sac est très mignon.
umbrella | le parapluie | N'oublie pas ton parapluie.
glasses | les lunettes | Je porte des lunettes pour lire.
boots | les bottes | Je mets des bottes quand il pleut.
sandals | les sandales | Ces sandales sont parfaites pour la plage.
slippers | les chaussons | Mets des chaussons à l'intérieur, s'il te plaît.
scarf | l'écharpe | Il fait froid. Mets une écharpe.
gloves | les gants | Mes gants me gardent les mains au chaud.
cap | la casquette | Il porte toujours une casquette de baseball.
belt | la ceinture | Cette ceinture est trop longue.
tie | la cravate | Papa porte une cravate pour aller au travail.
pajamas | le pyjama | Je suis encore en pyjama.
swimsuit | le maillot de bain | N'oublie pas ton maillot de bain.
raincoat | l'imperméable ; le ciré | Mets un imperméable sur ton scooter.
watch | la montre | Quelle belle montre !
ring | la bague | Elle porte une bague en or.
earrings | les boucles d'oreilles | Tes boucles d'oreilles sont jolies.
wallet | le portefeuille | J'ai perdu mon portefeuille.
red | rouge | Le rouge lui va très bien.
blue | bleu | Ma couleur préférée est le bleu.
green | vert | Je veux la chemise verte.
yellow | jaune | L'imperméable jaune est très voyant.
pink | rose | Elle a des chaussures roses.
gray | gris | Il porte un costume gris.
brown | marron | J'aime les chaussures en cuir marron.
clothes | les vêtements | J'ai besoin de nouveaux vêtements.
put on | mettre | Mets ton manteau.
take off | enlever | Enlève tes chaussures, s'il te plaît.
pretty | joli | Quelle jolie robe !
cute | mignon | Ce chapeau est trop mignon !
warm | chaud | Cette veste est très chaude.
expensive | cher | Ce sac est trop cher.
shop | faire les magasins | Allons acheter des chaussures.
mirror | le miroir | Regarde-toi dans le miroir.
price tag | l'étiquette de prix | Où est l'étiquette de prix ?
fitting room | la cabine d'essayage | La cabine d'essayage est à gauche.
closet | le placard ; la penderie | Mon placard est plein de vêtements.
purple | violet | Elle a une robe violette.
orange | orange | Il porte un T-shirt orange.
bracelet | le bracelet | On m'a offert un bracelet pour mon anniversaire.
backpack | le sac à dos | Mets tes livres dans ton sac à dos.
handbag | le sac à main | Son sac à main est tout petit.
purse | le porte-monnaie ; le sac à main | J'ai oublié mon sac à main à la maison.
underwear | les sous-vêtements | Prends assez de sous-vêtements pour le voyage.
shoelace | le lacet | Ton lacet est défait.
mittens | les moufles | Le bébé porte des moufles.
earmuffs | le cache-oreilles | Le cache-oreilles me tient les oreilles au chaud.
sunglasses | les lunettes de soleil | N'oublie pas tes lunettes de soleil.
helmet | le casque | Porte toujours un casque en scooter.
dirty | sale | Ma chemise est sale.
clean | propre | Mets une chemise propre.
wash | laver | Je lave mes vêtements le dimanche.
dry | sec | Les vêtements sont déjà secs ?
wet | mouillé | Mes chaussettes sont mouillées.
soft | doux | Ce pull est très doux.
thin | fin | Cette veste est trop fine pour l'hiver.
thick | épais | J'ai besoin d'un manteau épais.
fashion | la mode | Elle adore la mode.
style | le style | J'aime ton style.
costume | le déguisement ; le costume | C'est quoi, ton déguisement pour Halloween ?
crown | la couronne | La princesse portait une couronne.
lipstick | le rouge à lèvres | Elle a mis du rouge à lèvres rouge.
makeup | le maquillage | Je ne me maquille pas tous les jours.
hair clip | la barrette ; la pince à cheveux | Elle a une barrette rose.
flip-flops | les tongs | Je porte des tongs à la plage.
tank top | le débardeur | Il fait chaud, alors je porte un débardeur.
leggings | le legging | Elle porte un legging au cours de yoga.
overalls | la salopette | Le fermier porte une salopette bleue.
mask | le masque | Merci de porter un masque dans le bus.
`,
  phrases: `
How much is this? | Combien ça coûte ?
Do you have this in a larger size? | Vous l'avez dans une taille au-dessus ?
Where is the fitting room? | Où est la cabine d'essayage ?
What are you wearing today? | Qu'est-ce que tu portes aujourd'hui ?
I like your shirt. | J'aime bien ta chemise.
That color looks good on you. | Cette couleur te va bien.
Can I try this on? | Je peux l'essayer ?
It's too big. | C'est trop grand.
It's too small. | C'est trop petit.
Do you have a smaller size? | Vous avez la taille en dessous ?
Do you have a bigger size? | Vous avez la taille au-dessus ?
Do you have this in black? | Vous l'avez en noir ?
How much is this jacket? | Combien coûte cette veste ?
It's on sale. | C'est en solde.
I'll take it. | Je le prends.
I'm just looking, thanks. | Je regarde seulement, merci.
Put on your coat. It's cold. | Mets ton manteau. Il fait froid.
Take off your shoes, please. | Enlève tes chaussures, s'il te plaît.
My shoes are wet. | Mes chaussures sont mouillées.
I need new socks. | J'ai besoin de nouvelles chaussettes.
These jeans are comfortable. | Ce jean est confortable.
I wear a uniform to school. | Je porte un uniforme à l'école.
Don't forget your hat. | N'oublie pas ton chapeau.
It's sunny. Wear your sunglasses. | Il y a du soleil. Mets tes lunettes de soleil.
It's raining. Take an umbrella. | Il pleut. Prends un parapluie.
I like this dress. | J'aime cette robe.
She looks beautiful. | Elle est très belle.
He looks cool in that jacket. | Il a la classe avec cette veste.
Is this cotton? | C'est en coton ?
Can I wash this in the machine? | Je peux le laver en machine ?
My shirt is dirty. | Ma chemise est sale.
I need to iron my shirt. | Je dois repasser ma chemise.
Fold your clothes, please. | Plie tes vêtements, s'il te plaît.
Hang your jacket here. | Accroche ta veste ici.
Where are my glasses? | Où sont mes lunettes ?
I can't find my other sock. | Je ne trouve pas mon autre chaussette.
Your shoelace is untied. | Ton lacet est défait.
Tie your shoes. | Fais tes lacets.
Zip up your jacket. | Ferme ta veste.
This button is loose. | Ce bouton se découd.
I have a hole in my sock. | J'ai un trou à ma chaussette.
These shoes hurt my feet. | Ces chaussures me font mal aux pieds.
I want to buy new shoes. | Je veux acheter de nouvelles chaussures.
What size are you? | Quelle taille fais-tu ?
I'm a medium. | Je fais du M.
I wear size nine shoes. | Je chausse du 42.
It fits well. | Ça me va bien.
It doesn't fit. | Ça ne me va pas.
Do you like it? | Ça te plaît ?
It's very cute. | C'est très mignon.
It's my favorite T-shirt. | C'est mon T-shirt préféré.
I wear jeans every day. | Je porte un jean tous les jours.
Wear something warm. | Mets quelque chose de chaud.
It's hot. Wear shorts. | Il fait chaud. Mets un short.
Change your clothes. | Change-toi.
Get dressed. We're late! | Habille-toi. On est en retard !
Your shirt is inside out. | Ta chemise est à l'envers.
Your shirt is on backwards. | Tu as mis ta chemise devant derrière.
That's a nice watch. | C'est une belle montre.
I lost my scarf. | J'ai perdu mon écharpe.
Gloves keep my hands warm. | Les gants me gardent les mains au chaud.
I need a new bag. | J'ai besoin d'un nouveau sac.
Where did you buy that? | Où est-ce que tu as acheté ça ?
I bought it online. | Je l'ai acheté en ligne.
It was a gift. | C'était un cadeau.
It's my sister's dress. | C'est la robe de ma sœur.
Can I borrow your jacket? | Je peux t'emprunter ta veste ?
Is this on sale? | C'est en solde ?
Can I pay by card? | Je peux payer par carte ?
Can I return this? | Je peux le rendre ?
Can I exchange it for a different size? | Je peux l'échanger contre une autre taille ?
Keep your receipt. | Garde ton ticket de caisse.
Do you have a bag? | Vous avez un sac ?
I don't need a bag. | Je n'ai pas besoin de sac.
These pants are too long. | Ce pantalon est trop long.
This shirt is too tight. | Cette chemise est trop serrée.
I like loose clothes. | J'aime les vêtements amples.
Black goes with everything. | Le noir va avec tout.
Red is my favorite color. | Le rouge est ma couleur préférée.
I like simple clothes. | J'aime les vêtements simples.
I wear a suit to work. | Je porte un costume au travail.
Wear your boots. It's muddy. | Mets tes bottes. Il y a de la boue.
Put on your raincoat. | Mets ton imperméable.
Where can I buy a swimsuit? | Où est-ce que je peux acheter un maillot de bain ?
I need a belt. | J'ai besoin d'une ceinture.
This is my school bag. | C'est mon cartable.
Take your jacket with you. | Prends ta veste avec toi.
It's windy. Wear a hat. | Il y a du vent. Mets un chapeau.
Your clothes are in the dryer. | Tes vêtements sont dans le sèche-linge.
The clothes are still wet. | Le linge est encore mouillé.
Hang the clothes out to dry. | Étends le linge pour qu'il sèche.
My closet is full. | Mon placard est plein.
I have nothing to wear! | Je n'ai rien à me mettre !
You look nice today. | Tu es bien habillé aujourd'hui.
Thank you! I got it last week. | Merci ! Je l'ai acheté la semaine dernière.
That's a nice color. | C'est une jolie couleur.
Let's go shopping. | Allons faire du shopping.
The store opens at ten. | Le magasin ouvre à dix heures.
Is there a shoe store near here? | Il y a un magasin de chaussures près d'ici ?
This bag is too heavy. | Ce sac est trop lourd.
`
});

// ---------- 中級 Intermediate ----------
addFrench("clothing", {
  words: `
outfit | la tenue | J'adore ta tenue aujourd'hui !
casual | décontracté | Le vendredi, la tenue est décontractée.
fit | aller ; être à la bonne taille | Ce jean me va bien.
refund | le remboursement | Je voudrais un remboursement pour ce pull.
on sale | en solde | Tout est en solde dans ce magasin.
match | aller avec ; assortir | Cette cravate va avec mon costume ?
accessories | les accessoires | Elle assortit toujours ses accessoires à sa tenue.
jewelry | les bijoux | Elle ne porte pas beaucoup de bijoux.
necklace | le collier | Ce collier est un cadeau de ma mère.
sleeve | la manche | J'ai renversé du café sur ma manche.
collar | le col | Ton col est de travers.
zipper | la fermeture éclair | La fermeture éclair de ma veste est cassée.
fabric | le tissu | Ce tissu est doux au toucher.
cotton | le coton | Les chemises en coton sont fraîches en été.
wool | la laine | La laine tient chaud en hiver.
leather | le cuir | Il a acheté un portefeuille en cuir.
stain | la tache | Comment enlever cette tache ?
laundry | la lessive ; le linge | Je fais la lessive tous les samedis.
iron | repasser ; le fer à repasser | Je dois repasser ma chemise pour demain.
fold | plier | Plie bien tes vêtements, s'il te plaît.
hanger | le cintre | Mets ton manteau sur un cintre.
loose | ample | J'aime les vêtements amples en été.
tight | serré | Ce jean est trop serré.
comfortable | confortable | Ces chaussures sont vraiment confortables.
formal | habillé ; formel | Il faut une tenue habillée pour le dîner ?
stylish | élégant ; stylé | Tu es très élégant aujourd'hui.
brand | la marque | C'est quelle marque, tes baskets ?
receipt | le ticket de caisse | Garde le ticket au cas où tu voudrais le rendre.
discount | la réduction | Les étudiants ont dix pour cent de réduction.
out of stock | en rupture de stock | Désolé, cette taille est en rupture de stock.
alter | retoucher | Vous pouvez retoucher ce pantalon ?
sneakers | les baskets | J'ai acheté de nouvelles baskets pour courir.
suit | le costume | Il portait un costume noir au mariage.
blouse | le chemisier | Elle portait un chemisier en soie.
vest | le gilet | Il portait un gilet sous sa veste.
hoodie | le sweat à capuche | Le week-end, je vis en sweat à capuche.
blazer | le blazer | Un blazer rend un jean plus chic.
cardigan | le cardigan ; le gilet | Prends un cardigan : il fait froid au bureau.
heels | les talons | J'ai mal aux pieds à force de porter des talons.
silk | la soie | Cette écharpe est en soie.
denim | le denim ; la toile de jean | Le denim ne se démode jamais.
polyester | le polyester | Le polyester sèche vite.
pattern | le motif | J'aime le motif fleuri.
striped | rayé | Il porte une chemise rayée.
plaid | écossais ; à carreaux | Les jupes écossaises sont à la mode cette année.
plain | uni | Je préfère les T-shirts unis.
hem | l'ourlet | Vous pouvez raccourcir l'ourlet ?
shrink | rétrécir | La laine peut rétrécir à l'eau chaude.
fade | se décolorer ; passer | Les jeans noirs se décolorent après de nombreux lavages.
wrinkle | se froisser ; le pli | Le lin se froisse facilement.
dry clean | nettoyer à sec | Ce manteau se nettoie uniquement à sec.
return | rendre ; retourner | Je voudrais rendre ces chaussures.
exchange | échanger | Je peux l'échanger contre une taille plus petite ?
fashionable | à la mode | Elle est toujours à la mode.
trendy | tendance | Ce café est plein de jeunes branchés.
outlet | le magasin d'usine ; l'outlet | Nous avons acheté des jeans au village de marques.
checkout | la caisse | Veuillez payer à la caisse.
cashier | le caissier ; la caissière | La caissière m'a donné un sac.
in stock | en stock | Cette taille est en stock ?
waterproof | imperméable | J'ai besoin d'une veste imperméable.
breathable | respirant | Ce tissu est léger et respirant.
lightweight | léger | Cette doudoune est légère.
dress code | le code vestimentaire | Le code vestimentaire est « business casual ».
custom-made | sur mesure | Son costume est fait sur mesure.
oversized | oversize ; ample | Les pulls oversize sont à la mode.
designer | le styliste ; de créateur | Elle est styliste de mode.
linen | le lin | Les chemises en lin sont fraîches en été.
velvet | le velours | Elle portait une robe en velours à la fête.
lace | la dentelle | La robe de mariée a des manches en dentelle.
satin | le satin | Un pyjama en satin, c'est doux au toucher.
nylon | le nylon | Ce sac est en nylon.
suede | le daim | Ne mets pas de chaussures en daim sous la pluie.
cashmere | le cachemire | Un pull en cachemire est doux et chaud.
polka dot | à pois | Elle a acheté une jupe à pois.
floral | fleuri | J'adore cette robe fleurie.
checkered | à carreaux | Il portait une chemise à carreaux.
V-neck | le col en V | Un pull col en V va bien avec une chemise.
turtleneck | le col roulé | Un col roulé noir, c'est un classique.
sleeveless | sans manches | Il fait trop froid pour un haut sans manches.
long-sleeved | à manches longues | Prends une chemise à manches longues pour le soir.
button-down | la chemise à col boutonné | Il portait une chemise blanche à col boutonné à l'entretien.
jumpsuit | la combinaison | Elle est superbe dans cette combinaison.
trench coat | le trench | Un trench beige ne se démode jamais.
down jacket | la doudoune | Il te faudra une doudoune au Japon en hiver.
windbreaker | le coupe-vent | Prends un coupe-vent pour la montagne.
loafers | les mocassins | Il porte des mocassins sans chaussettes.
brooch | la broche | Ma grand-mère m'a donné une vieille broche.
cufflinks | les boutons de manchette | Il portait des boutons de manchette en argent au mariage.
bow tie | le nœud papillon | Le marié portait un nœud papillon.
handkerchief | le mouchoir | Il garde un mouchoir dans sa poche.
tote bag | le tote bag ; le cabas | J'utilise un tote bag en toile pour faire les courses.
size chart | le guide des tailles | Regarde le guide des tailles avant de commander.
petite | petite taille | Cette marque a une gamme pour les femmes de petite taille.
plus-size | grande taille | Le magasin vend maintenant des vêtements grande taille.
alteration | la retouche | La retouche n'a pris qu'une journée.
seam | la couture | La couture de mon jean a craqué.
lining | la doublure | La veste a une doublure en soie.
bargain | la bonne affaire | Ce manteau, c'était une vraie bonne affaire.
mix and match | mixer ; associer | Ces pièces se mixent facilement entre elles.
drawstring | le cordon de serrage | Ce pantalon a un cordon de serrage à la taille.
dressed to kill | sur son trente-et-un | Elle était sur son trente-et-un au mariage.
dressed to the nines | tiré à quatre épingles | Tout le monde était tiré à quatre épingles.
put yourself in my shoes | mets-toi à ma place | Mets-toi à ma place, s'il te plaît.
fits like a glove | aller comme un gant | Cette veste me va comme un gant.
keep it under your hat | garder ça pour soi | Garde ça pour toi jusqu'à vendredi.
off the cuff | au pied levé ; à l'improviste | Il a fait un discours au pied levé.
wear many hats | avoir plusieurs casquettes | Dans une petite entreprise, on a plusieurs casquettes.
hand-me-down | le vêtement hérité | Ce pull, je l'ai hérité de mon frère.
on a shoestring | avec trois fois rien | Nous avons voyagé avec trois fois rien.
roll up your sleeves | retrousser ses manches | Retroussez vos manches : il y a du travail.
at the drop of a hat | sans hésiter ; au quart de tour | Elle t'aiderait sans hésiter.
if the shoe fits, wear it | qui se sent morveux se mouche | Qui se sent morveux se mouche.
dress down | s'habiller décontracté | Le vendredi, on s'habille décontracté.
dress up | s'habiller ; se mettre sur son trente-et-un | Il faut s'habiller pour la fête ?
in your birthday suit | en tenue d'Adam ; tout nu | N'ouvre pas la porte en tenue d'Adam !
`,
  phrases: `
It looks good on you. | Ça te va bien.
Can I exchange this for a different color? | Je peux l'échanger contre une autre couleur ?
What's the dress code for the party? | Quel est le code vestimentaire pour la fête ?
It doesn't really suit me. | Ça ne me va pas vraiment.
This style is a bit too young for me. | Ce style fait un peu trop jeune pour moi.
Do you think this goes with my shoes? | Tu crois que ça va avec mes chaussures ?
Those colors clash a bit. | Ces couleurs jurent un peu.
It's a little tight around the shoulders. | C'est un peu serré aux épaules.
Could you take it in at the waist? | Vous pourriez le reprendre à la taille ?
The sleeves need to be shortened. | Il faut raccourcir les manches.
How long will the alterations take? | Combien de temps prendront les retouches ?
Is this machine washable? | C'est lavable en machine ?
It says dry clean only. | C'est marqué « nettoyage à sec uniquement ».
It shrank in the wash. | Il a rétréci au lavage.
The color faded after a few washes. | La couleur a passé après quelques lavages.
Wash it inside out in cold water. | Lave-le à l'envers, à l'eau froide.
Don't put it in the dryer. | Ne le mets pas au sèche-linge.
I need to get my suit dry-cleaned. | Je dois faire nettoyer mon costume au pressing.
I'm looking for something for a wedding. | Je cherche quelque chose pour un mariage.
Is it formal or casual? | C'est habillé ou décontracté ?
Smart casual should be fine. | Une tenue chic décontractée devrait suffire.
I don't want to be overdressed. | Je ne veux pas être trop habillé.
I felt underdressed at the dinner. | Je me suis senti trop peu habillé au dîner.
These shoes are great for walking. | Ces chaussures sont super pour marcher.
I need to break in my new shoes. | Je dois faire mes nouvelles chaussures.
They gave me blisters. | Elles m'ont donné des ampoules.
Do these come in half sizes? | Elles existent en demi-pointures ?
Is there a discount if I buy two? | Il y a une réduction si j'en prends deux ?
Buy one, get one free. | Un acheté, un offert.
Everything in this section is 30 percent off. | Tout ce rayon est à moins 30 pour cent.
The sale ends this Sunday. | Les soldes se terminent ce dimanche.
I'll wait for the end-of-season sale. | J'attendrai les soldes de fin de saison.
I tend to buy too many clothes on impulse. | J'ai tendance à acheter trop de vêtements sur un coup de tête.
I'm trying to buy fewer but better clothes. | J'essaie d'acheter moins de vêtements, mais de meilleure qualité.
Fast fashion is cheap, but it doesn't last. | La fast fashion est bon marché, mais elle ne dure pas.
This jacket is great value for the price. | Cette veste a un excellent rapport qualité-prix.
The quality isn't as good as it used to be. | La qualité n'est plus aussi bonne qu'avant.
The stitching is coming loose. | Les coutures se défont.
Could you sew this button back on? | Tu pourrais recoudre ce bouton ?
I spilled coffee on my shirt. | J'ai renversé du café sur ma chemise.
Will this stain come out? | Cette tache va partir ?
Try soaking it before you wash it. | Essaie de le faire tremper avant de le laver.
Can I return it without the tags? | Je peux le rendre sans les étiquettes ?
You can return it within thirty days. | Vous pouvez le rendre sous trente jours.
I'd like a refund, please. | Je voudrais être remboursé, s'il vous plaît.
It looked different online. | En ligne, ça avait l'air différent.
The size chart was misleading. | Le guide des tailles était trompeur.
I usually size up in this brand. | Dans cette marque, je prends en général une taille au-dessus.
This brand runs small. | Cette marque taille petit.
I dress for comfort these days. | Ces temps-ci, je m'habille pour le confort.
I can never decide what to wear. | Je n'arrive jamais à décider quoi mettre.
I lay out my clothes the night before. | Je prépare mes vêtements la veille.
Layering is the key in this weather. | Par ce temps, la clé, c'est de superposer les couches.
Bring a light jacket in case it gets chilly. | Prends une veste légère au cas où il ferait frais.
It's too humid for jeans. | Il fait trop humide pour porter un jean.
Linen is perfect for summer. | Le lin est parfait pour l'été.
Wool keeps you warm even when it's damp. | La laine tient chaud même quand elle est humide.
That outfit is very flattering. | Cette tenue te met vraiment en valeur.
You have a great sense of style. | Tu as vraiment du style.
Where do you usually shop for clothes? | Où est-ce que tu achètes tes vêtements d'habitude ?
I mostly shop online nowadays. | Aujourd'hui, j'achète surtout en ligne.
I like to support local designers. | J'aime soutenir les créateurs locaux.
This is from a secondhand shop. | Ça vient d'une friperie.
Thrift shopping is so much fun. | Chiner en friperie, c'est trop amusant.
I'm decluttering my wardrobe. | Je fais le tri dans ma garde-robe.
I donated a bag of clothes to charity. | J'ai donné un sac de vêtements à une association.
I haven't worn this in years. | Je ne l'ai pas porté depuis des années.
It still has the price tag on it. | Il a encore l'étiquette.
This shirt needs ironing. | Cette chemise a besoin d'un coup de fer.
I hate ironing. | Je déteste repasser.
Wrinkle-free shirts are a lifesaver. | Les chemises sans repassage, ça me sauve la vie.
Can you help me zip this up? | Tu peux m'aider à fermer la fermeture éclair ?
The zipper is stuck. | La fermeture éclair est coincée.
My tie is crooked. | Ma cravate est de travers.
Could you show me how to tie a tie? | Tu peux me montrer comment faire un nœud de cravate ?
Roll up your sleeves. | Retrousse tes manches.
Tuck in your shirt. | Rentre ta chemise.
These pants need a belt. | Ce pantalon a besoin d'une ceinture.
I need to get these pants hemmed. | Je dois faire raccourcir ce pantalon.
I always get compliments on this dress. | On me fait toujours des compliments sur cette robe.
Is it too much for the office? | C'est trop pour le bureau ?
We have casual Fridays at work. | Au travail, le vendredi, on peut s'habiller décontracté.
Our company doesn't have a strict dress code. | Notre entreprise n'a pas de code vestimentaire strict.
You can't wear sneakers to that restaurant. | On ne peut pas aller dans ce restaurant en baskets.
I need something waterproof for hiking. | Il me faut quelque chose d'imperméable pour la randonnée.
These sandals aren't good for long walks. | Ces sandales ne sont pas faites pour les longues marches.
Pack clothes you can mix and match. | Prends des vêtements faciles à associer.
I always overpack when I travel. | En voyage, je prends toujours trop d'affaires.
I'm saving up for a good winter coat. | J'économise pour un bon manteau d'hiver.
It's worth spending more on shoes. | Ça vaut la peine de dépenser plus pour les chaussures.
Accessories can change the whole look. | Les accessoires peuvent changer tout le look.
I'm not really into jewelry. | Je ne suis pas trop bijoux.
That necklace is a family heirloom. | Ce collier est un bijou de famille.
I want something that will never go out of style. | Je veux quelque chose qui ne se démodera jamais.
That trend came back again. | Cette tendance est revenue.
Everything old becomes new again. | Tout ce qui est vieux redevient à la mode.
I'm not brave enough to wear that. | Je n'ose pas porter ça.
Wear what makes you feel confident. | Porte ce qui te donne confiance en toi.
Could you gift-wrap it for me? | Vous pourriez me faire un paquet cadeau ?
Do you have this in a different color? | Vous l'avez dans une autre couleur ?
`
});

// ---------- 高級 Advanced ----------
addFrench("clothing", {
  words: `
tailored | ajusté ; sur mesure | Il portait un costume ajusté à l'entretien.
fast fashion | la fast fashion ; la mode éphémère | La fast fashion a un énorme coût environnemental.
understated | sobre | Son style est élégant et sobre.
versatile | polyvalent | Un blazer bleu marine est une pièce polyvalente.
secondhand | d'occasion ; de seconde main | J'achète la plupart de mes vêtements d'occasion.
trendsetter | le faiseur de tendances | Elle est devenue une faiseuse de tendances sur les réseaux sociaux.
wardrobe | la garde-robe | Je renouvelle ma garde-robe pour l'automne.
silhouette | la silhouette ; la coupe | La robe a une coupe trapèze classique.
couture | la couture | Elle travaille pour une maison de couture parisienne.
minimalist | minimaliste | Son style minimaliste repose sur des couleurs neutres.
statement piece | la pièce forte | Un collier audacieux peut être une pièce forte.
eco-friendly | écologique ; écoresponsable | La marque utilise des teintures écologiques.
textile | le textile | Taïwan est connu pour ses textiles innovants.
garment | le vêtement | Chaque vêtement est fait à la main.
ethical | éthique | Les consommateurs exigent une production plus éthique.
sweatshop | l'atelier de misère | L'entreprise a été accusée d'exploiter des ateliers de misère.
vintage | vintage | Elle a trouvé une veste en cuir vintage au marché.
timeless | intemporel | Une chemise blanche est intemporelle.
accessorize | accessoiriser | Apprends à accessoiriser une tenue simple.
flattering | flatteur ; qui met en valeur | Cette coupe te met vraiment en valeur.
garish | criard | Le costume était un peu criard à mon goût.
frumpy | ringard ; fagoté | Je me sens fagotée dans ce vieux pull.
impeccable | impeccable | Il a un goût impeccable en matière de vêtements.
dapper | élégant ; chic | Tu es très élégant dans ce costume.
monochrome | monochrome | Une tenue monochrome fait chic et moderne.
embroidery | la broderie | La veste a une belle broderie dans le dos.
upcycle | upcycler ; surcycler | Elle aime transformer de vieux jeans en sacs.
streetwear | le streetwear | Les marques de streetwear collaborent maintenant avec les marques de luxe.
athleisure | l'athleisure ; le sportswear chic | L'athleisure est désormais accepté dans beaucoup de bureaux.
durable | résistant ; solide | Le denim est un tissu résistant.
counterfeit | contrefait ; la contrefaçon | N'achète jamais de sacs de créateur contrefaits.
fashion-forward | avant-gardiste ; à la pointe de la mode | Séoul est une ville à la pointe de la mode.
label | l'étiquette ; la marque | Lis toujours l'étiquette d'entretien avant de laver.
haute couture | la haute couture | La haute couture est entièrement faite à la main.
bespoke | sur mesure | Il a commandé un costume sur mesure à Londres.
drape | tomber ; le tombé | Ce tissu tombe magnifiquement.
tailoring | la coupe ; la confection | La coupe de cette veste est excellente.
sartorial | vestimentaire | Il est connu pour son élégance vestimentaire.
ensemble | l'ensemble | Elle portait un ensemble noir saisissant.
runway | le podium | La collection a été présentée sur le podium à Milan.
collection | la collection | La collection de printemps met en avant des couleurs vives.
muse | la muse | L'actrice est la muse du créateur.
heritage brand | la marque patrimoniale | Burberry est une marque patrimoniale britannique.
luxury | le luxe | Le marché du luxe est en plein essor en Asie.
knockoff | la copie ; l'imitation | Ce sac est clairement une copie.
microtrend | la micro-tendance | Sur TikTok, les micro-tendances changent chaque semaine.
overconsumption | la surconsommation | La fast fashion pousse à la surconsommation.
landfill | la décharge | Des tonnes de vêtements finissent à la décharge.
traceability | la traçabilité | Les marques améliorent la traçabilité de leur chaîne d'approvisionnement.
supply chain | la chaîne d'approvisionnement | La chaîne d'approvisionnement s'étend sur cinq pays.
synthetic | synthétique | Les fibres synthétiques libèrent des microplastiques.
biodegradable | biodégradable | Les chaussures sont faites de matériaux biodégradables.
dye | la teinture | Les teintures naturelles sont plus douces pour l'environnement.
artisan | l'artisan | Chaque sac est cousu par un artisan.
craftsmanship | le savoir-faire | On voit le savoir-faire dans chaque couture.
effortless | naturel ; sans effort | Son look est naturel et chic.
chic | chic | Elle est chic en noir.
eclectic | éclectique | Son style est éclectique et ludique.
androgynous | androgyne | La mode androgyne brouille les frontières entre les genres.
gender-neutral | non genré ; unisexe | La marque a lancé une ligne non genrée.
resale | la revente | Le marché de la revente de baskets est énorme.
rental | la location | Les services de location de vêtements se développent.
proportion | la proportion | Équilibre les proportions de ta tenue.
layering | la superposition | La superposition est essentielle en automne.
signature | emblématique ; signature | Le rouge à lèvres rouge est son look signature.
embellishment | l'ornement | La robe est couverte d'ornements.
avant-garde | avant-gardiste | Le créateur est connu pour ses collections avant-gardistes.
bohemian | bohème | Elle a un style décontracté et bohème.
preppy | BCBG ; preppy | Il s'habille dans un style preppy, avec des polos.
grunge | le grunge | La mode grunge était énorme dans les années quatre-vingt-dix.
retro | rétro | J'adore les lunettes de soleil rétro.
capsule wardrobe | la garde-robe capsule | Une garde-robe capsule ne compte que quelques pièces polyvalentes.
slow fashion | la slow fashion ; la mode lente | La slow fashion encourage à acheter moins, mais mieux.
greenwashing | l'écoblanchiment ; le greenwashing | La marque a été accusée d'écoblanchiment.
circular fashion | la mode circulaire | La mode circulaire vise à prolonger la vie des vêtements.
deadstock | les stocks dormants ; le tissu dormant | La robe a été faite avec du tissu dormant.
handcrafted | artisanal ; fait main | Chaque sac est fabriqué à la main par des artisans locaux.
hand-stitched | cousu main | Le col est cousu main.
selvedge | la lisière | Les collectionneurs de jeans adorent le denim à lisière.
tweed | le tweed | Il portait une veste en tweed pour la conférence.
houndstooth | le pied-de-poule | Un manteau pied-de-poule est très élégant.
pinstripe | la fine rayure | Autrefois, les banquiers portaient des costumes à fines rayures.
pleated | plissé | Elle portait une jupe plissée à l'école.
ruffled | à volants | Le chemisier a un col à volants.
asymmetrical | asymétrique | La robe a un ourlet asymétrique.
tapered | fuselé | Un pantalon fuselé fait net avec des baskets.
cropped | court ; cropped | Une veste courte va bien avec un pantalon taille haute.
high-waisted | taille haute | Les jeans taille haute sont revenus à la mode.
form-fitting | près du corps ; moulant | La robe est assez près du corps.
boxy | carré ; à coupe droite et ample | J'aime la coupe carrée de cette veste.
garment worker | l'ouvrier du textile | Les ouvriers du textile méritent un salaire juste.
fashion week | la fashion week ; la semaine de la mode | La Fashion Week de Paris attire des acheteurs du monde entier.
lookbook | le lookbook | La marque a publié son lookbook de printemps en ligne.
influencer | l'influenceur ; l'influenceuse | L'influenceuse publiait sa tenue tous les jours.
collaboration | la collaboration | La collaboration de baskets a été épuisée en quelques minutes.
limited edition | l'édition limitée | Seulement 500 paires de l'édition limitée ont été fabriquées.
hype | le buzz ; l'engouement | L'engouement autour du sac était énorme.
logomania | la logomania | La logomania a laissé place à des styles plus discrets.
quiet luxury | le luxe discret | Le luxe discret évite les logos visibles.
personal stylist | le styliste personnel | Elle a engagé une styliste personnelle pour son nouveau poste.
hot under the collar | énervé ; en colère | Il s'est énervé à cause du retard.
tighten your belt | se serrer la ceinture | Si les prix augmentent, serre-toi la ceinture.
hat in hand | humblement ; chapeau bas | Il est allé à la banque, humblement, demander un prêt.
wear your heart on your sleeve | ne pas cacher ses sentiments ; être à fleur de peau | Tu ne caches jamais tes sentiments.
have something up your sleeve | avoir plus d'un tour dans son sac | Je crois que tu as plus d'un tour dans ton sac.
fill someone's shoes | prendre la relève de quelqu'un | C'est difficile de prendre la relève de quelqu'un après vingt ans.
bursting at the seams | plein à craquer | Le placard est plein à craquer.
cut from the same cloth | du même bois ; de la même étoffe | Ces frères sont du même bois.
the emperor's new clothes | les habits neufs de l'empereur | Ce projet, ce sont les habits neufs de l'empereur.
below the belt | un coup bas | Ce commentaire, c'était un coup bas.
buttoned-up | coincé ; guindé | Il est très guindé au travail.
fashion victim | la fashion victim ; la victime de la mode | Ne sois pas une victime de la mode.
on a thread | ne tenir qu'à un fil | Son emploi ne tient qu'à un fil.
knock your socks off | en mettre plein la vue | Cette robe va t'en mettre plein la vue.
smarty-pants | le petit malin ; Monsieur Je-sais-tout | D'accord, petit malin, réponds, toi.
`,
  phrases: `
That color really brings out your eyes. | Cette couleur fait vraiment ressortir tes yeux.
I'd rather invest in a few quality pieces than follow every trend. | Je préfère investir dans quelques belles pièces que suivre toutes les tendances.
It's a bit too flashy for a business setting. | C'est un peu trop voyant pour un cadre professionnel.
The fashion industry is one of the world's biggest polluters. | L'industrie de la mode est l'une des plus polluantes au monde.
Fast fashion thrives on overconsumption. | La fast fashion prospère grâce à la surconsommation.
Many brands are accused of greenwashing. | Beaucoup de marques sont accusées d'écoblanchiment.
It's hard to know whether a label is genuinely ethical. | Il est difficile de savoir si une marque est vraiment éthique.
Garment workers are often paid a pittance. | Les ouvriers du textile sont souvent payés une misère.
Supply chain transparency has become a selling point. | La transparence de la chaîne d'approvisionnement est devenue un argument de vente.
Capsule wardrobes are about owning fewer, more versatile pieces. | La garde-robe capsule, c'est posséder moins de pièces, mais plus polyvalentes.
I've adopted a buy-less, buy-better approach. | J'ai adopté une approche « acheter moins, acheter mieux ».
Rental services let you wear designer pieces without owning them. | Les services de location permettent de porter des pièces de créateur sans les posséder.
The resale market for luxury goods is booming. | Le marché de la revente de produits de luxe est en plein essor.
Vintage pieces have a character that new clothes lack. | Les pièces vintage ont un caractère qui manque aux vêtements neufs.
The cut is impeccable. | La coupe est impeccable.
It's beautifully tailored. | C'est magnifiquement coupé.
The fabric drapes really well. | Le tissu a un très beau tombé.
The material feels a bit synthetic. | La matière fait un peu synthétique au toucher.
The craftsmanship justifies the price tag. | Le savoir-faire justifie le prix.
It's understated but elegant. | C'est sobre mais élégant.
That look is a bit too flashy for my taste. | Ce look est un peu trop tape-à-l'œil à mon goût.
She has an effortless sense of style. | Elle a un style naturel, sans effort.
He always looks put-together. | Il est toujours bien mis.
Personal style is a form of self-expression. | Le style personnel est une forme d'expression de soi.
Clothing can be a statement of identity. | Les vêtements peuvent affirmer une identité.
Uniforms foster a sense of belonging. | L'uniforme favorise le sentiment d'appartenance.
Some argue that school uniforms stifle individuality. | Certains estiment que l'uniforme scolaire étouffe l'individualité.
Dress codes are becoming increasingly relaxed in the workplace. | Les codes vestimentaires au travail sont de plus en plus souples.
Gender norms in fashion are being challenged. | Les normes de genre dans la mode sont remises en question.
Gender-neutral clothing lines are gaining traction. | Les lignes de vêtements non genrées gagnent du terrain.
Cultural appropriation in fashion is a sensitive issue. | L'appropriation culturelle dans la mode est un sujet sensible.
Traditional dress is enjoying a revival among young people. | Les tenues traditionnelles connaissent un renouveau chez les jeunes.
Trends now come and go at dizzying speed. | Aujourd'hui, les tendances vont et viennent à une vitesse vertigineuse.
Social media has accelerated the trend cycle. | Les réseaux sociaux ont accéléré le cycle des tendances.
Influencers have enormous sway over what people buy. | Les influenceurs ont une énorme influence sur ce que les gens achètent.
Logos are less fashionable than they used to be. | Les logos sont moins à la mode qu'avant.
Quiet luxury is all about subtle quality. | Le luxe discret, c'est avant tout une qualité subtile.
I'm wary of anything that's too trendy. | Je me méfie de tout ce qui est trop tendance.
Classic pieces tend to stand the test of time. | Les pièces classiques résistent généralement à l'épreuve du temps.
I prefer natural fibers over synthetics. | Je préfère les fibres naturelles aux synthétiques.
Microplastics shed from synthetic fabrics in the wash. | Les tissus synthétiques libèrent des microplastiques au lavage.
Recycled fabrics still have a long way to go. | Les tissus recyclés ont encore beaucoup de chemin à faire.
Upcycling turns old garments into something new. | L'upcycling transforme de vieux vêtements en quelque chose de neuf.
Mending clothes is making a comeback. | Raccommoder ses vêtements revient à la mode.
Good tailoring can make inexpensive clothes look expensive. | De bonnes retouches peuvent donner un air chic à des vêtements bon marché.
Fit matters far more than brand. | La coupe compte bien plus que la marque.
The silhouette is very flattering. | La silhouette est très flatteuse.
Oversized cuts are still in vogue. | Les coupes oversize sont toujours en vogue.
That color washes me out. | Cette couleur me donne mauvaise mine.
I tend to gravitate toward neutral tones. | J'ai tendance à aller vers les tons neutres.
A pop of color can lift a whole outfit. | Une touche de couleur peut réveiller toute une tenue.
Accessories are an easy way to update a look. | Les accessoires sont un moyen simple de moderniser un look.
First impressions are shaped partly by what you wear. | La première impression dépend en partie de ce que l'on porte.
Dressing well can boost your confidence. | Bien s'habiller peut donner confiance en soi.
Dress for the job you want, not the job you have. | Habille-toi pour le poste que tu veux, pas pour celui que tu as.
It's a fine line between casual and sloppy. | Entre décontracté et négligé, la frontière est mince.
Business casual is open to interpretation. | Le « business casual » laisse place à l'interprétation.
I'd err on the side of being overdressed. | Dans le doute, je préfère être trop habillé.
Black tie events require a tuxedo. | Les soirées black tie exigent un smoking.
The invitation specified cocktail attire. | L'invitation précisait « tenue de cocktail ».
Counterfeit goods undermine genuine brands. | Les contrefaçons nuisent aux vraies marques.
Buying fakes can fund organized crime. | Acheter des contrefaçons peut financer le crime organisé.
Luxury brands sometimes destroy unsold stock to protect exclusivity. | Les marques de luxe détruisent parfois leurs invendus pour préserver leur exclusivité.
Online returns create a mountain of waste. | Les retours en ligne créent une montagne de déchets.
Free returns encourage people to order more than they need. | Les retours gratuits incitent les gens à commander plus que nécessaire.
Virtual try-on technology could cut down on returns. | L'essayage virtuel pourrait réduire les retours.
Sizing is notoriously inconsistent across brands. | Les tailles varient notoirement d'une marque à l'autre.
Vanity sizing makes clothes seem smaller than they are. | Les tailles flatteuses font paraître les vêtements plus petits qu'ils ne sont.
Inclusive sizing is long overdue. | Des tailles inclusives, il était grand temps.
Adaptive clothing makes dressing easier for people with disabilities. | Les vêtements adaptés facilitent l'habillage des personnes handicapées.
Performance fabrics wick away sweat. | Les tissus techniques évacuent la transpiration.
Outdoor gear has crossed over into everyday fashion. | L'équipement outdoor s'est invité dans la mode de tous les jours.
Athleisure has blurred the line between gym and street wear. | L'athleisure a brouillé la frontière entre tenue de sport et tenue de ville.
Sneaker culture has turned shoes into collectibles. | La culture sneakers a transformé les chaussures en objets de collection.
Limited releases create artificial scarcity. | Les sorties limitées créent une rareté artificielle.
Resellers snap up limited editions within seconds. | Les revendeurs raflent les éditions limitées en quelques secondes.
Fashion weeks set the tone for the coming season. | Les fashion weeks donnent le ton pour la saison à venir.
Runway looks are rarely meant to be worn as is. | Les looks de défilé sont rarement faits pour être portés tels quels.
High street brands quickly copy designer collections. | Les enseignes grand public copient vite les collections de créateurs.
Designers struggle to protect their work from knockoffs. | Les créateurs ont du mal à protéger leur travail contre les copies.
Heritage brands trade on their long history. | Les marques patrimoniales misent sur leur longue histoire.
The brand has lost its edge in recent years. | La marque a perdu de son mordant ces dernières années.
The collaboration sold out instantly. | La collaboration a été épuisée immédiatement.
It's a timeless piece I'll wear for years. | C'est une pièce intemporelle que je porterai pendant des années.
I'm drawn to clothes with a story behind them. | Je suis attiré par les vêtements qui ont une histoire.
I'd rather invest in one quality coat than buy three cheap ones. | Je préfère investir dans un bon manteau plutôt qu'en acheter trois bon marché.
Cost per wear is a useful way to think about value. | Le coût par port est une façon utile de penser la valeur.
It's important to care for clothes so they last. | Il est important d'entretenir ses vêtements pour qu'ils durent.
Wash less, and your clothes will last longer. | Lave moins, et tes vêtements dureront plus longtemps.
Air-drying is gentler on fabrics. | Le séchage à l'air libre est plus doux pour les tissus.
Cedar blocks keep moths away from wool. | Les cubes de cèdre éloignent les mites de la laine.
Proper storage prevents clothes from losing their shape. | Un bon rangement évite que les vêtements se déforment.
The garment comes with a lifetime repair guarantee. | Le vêtement est garanti réparable à vie.
Fashion is cyclical, so I rarely throw things away. | La mode est cyclique, alors je jette rarement quelque chose.
Comfort shouldn't come at the expense of style. | Le confort ne devrait pas se faire au détriment du style.
Style is about knowing who you are. | Le style, c'est savoir qui l'on est.
Some people see fashion as frivolous, but it's a huge industry. | Certains trouvent la mode futile, mais c'est une industrie énorme.
The way we dress reflects broader social changes. | Notre façon de nous habiller reflète des changements sociaux plus larges.
Clothing tells you a lot about a period in history. | Les vêtements en disent long sur une époque.
There's no right or wrong in fashion, only what works for you. | En mode, il n'y a ni bien ni mal, seulement ce qui te va.
`
});
