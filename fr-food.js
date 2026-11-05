// 法文對照（Français）：食・飲食
// words: "English word | mot français | exemple en français"
// phrases: "English phrase | phrase en français"
// 由 Claude 翻譯，未經法語母語者校對。
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
addFrench("food", {
  words: `
breakfast | le petit-déjeuner | Je prends le petit-déjeuner à sept heures.
hungry | affamé ; avoir faim | J'ai faim. Allons manger.
menu | le menu ; la carte | Je peux voir la carte, s'il vous plaît ?
delicious | délicieux | Cette soupe est délicieuse.
order | commander | Vous êtes prêts à commander ?
bill | l'addition | L'addition, s'il vous plaît.
lunch | le déjeuner | Déjeunons ensemble.
dinner | le dîner | Le dîner est prêt !
rice | le riz | Je voudrais un bol de riz.
noodles | les nouilles | Ces nouilles sont très bonnes.
soup | la soupe | La soupe est chaude.
bread | le pain | Je mange du pain au petit-déjeuner.
egg | l'œuf | Je peux avoir un œuf au plat ?
milk | le lait | Je bois du lait tous les matins.
juice | le jus | Un jus d'orange, s'il vous plaît.
tea | le thé | Tu veux du thé ?
water | l'eau | Je peux avoir un verre d'eau ?
fruit | le fruit | Mange plus de fruits chaque jour.
vegetable | le légume | Les légumes sont bons pour la santé.
meat | la viande | Je ne mange pas beaucoup de viande.
chicken | le poulet | Je vais prendre le poulet, s'il vous plaît.
fish | le poisson | Nous mangeons du poisson le vendredi.
sweet | sucré | Ce gâteau est trop sucré.
salty | salé | Les frites sont un peu salées.
sour | acide | Les citrons sont acides.
full | rassasié ; avoir assez mangé | Non merci, j'ai assez mangé.
thirsty | assoiffé ; avoir soif | J'ai soif. Achetons une boisson.
snack | le goûter ; l'en-cas | Je prends toujours un goûter à quatre heures.
dessert | le dessert | Qu'est-ce qu'il y a comme dessert ?
cup | la tasse | J'ai besoin d'une tasse de café.
bowl | le bol | Elle a mangé un grand bol de nouilles.
chopsticks | les baguettes | Tu sais utiliser des baguettes ?
spoon | la cuillère | Mange la soupe avec une cuillère.
fork | la fourchette | Je pourrais avoir une fourchette, s'il vous plaît ?
apple | la pomme | Je mange une pomme tous les jours.
banana | la banane | Les singes adorent les bananes.
orange | l'orange | Cette orange est très sucrée.
grape | le raisin | Ces raisins sont acides.
watermelon | la pastèque | La pastèque est parfaite pour l'été.
strawberry | la fraise | J'adore la glace à la fraise.
tomato | la tomate | Mets un peu de tomate dans la salade.
potato | la pomme de terre | Les frites sont faites avec des pommes de terre.
carrot | la carotte | Les lapins mangent des carottes.
corn | le maïs | Nous avons mangé du maïs grillé au marché de nuit.
pork | le porc | Le riz au porc braisé est mon plat préféré.
beef | le bœuf | Je ne mange pas de bœuf.
shrimp | la crevette | Il y a des crevettes dans le riz frit.
cheese | le fromage | Je veux plus de fromage sur ma pizza.
pizza | la pizza | Commandons une pizza.
hamburger | le hamburger | Il a mangé deux hamburgers.
sandwich | le sandwich | J'ai préparé un sandwich pour le déjeuner.
cake | le gâteau | Joyeux anniversaire ! Voici ton gâteau.
ice cream | la glace | Tu veux de la glace ?
candy | le bonbon | Ne mange pas trop de bonbons.
coffee | le café | Je bois du café tous les matins.
cola | le cola | Je peux avoir un cola, s'il vous plaît ?
salt | le sel | Passe-moi le sel, s'il te plaît.
sugar | le sucre | Pas de sucre dans mon thé, s'il vous plaît.
oil | l'huile | Fais cuire les œufs dans un peu d'huile.
plate | l'assiette | Mets la nourriture dans une assiette.
knife | le couteau | Fais attention avec ce couteau.
glass | le verre | Je peux avoir un verre de lait ?
cook | cuisiner | J'aime cuisiner des pâtes.
eat | manger | À table !
drink | boire ; la boisson | Qu'est-ce que tu veux boire ?
taste | goûter ; le goût | Je peux goûter ?
hot | brûlant ; chaud | Attention, la poêle est brûlante !
cold | froid | Je voudrais une boisson froide.
lemon | le citron | J'aime le citron dans mon thé.
peach | la pêche | Cette pêche est tendre et sucrée.
pear | la poire | Elle m'a coupé une poire.
mango | la mangue | La glace à la mangue de Taïwan est célèbre.
pineapple | l'ananas | Nous avons acheté un ananas au marché.
cherry | la cerise | Il y a une cerise sur le gâteau.
onion | l'oignon | Couper un oignon me fait pleurer.
garlic | l'ail | Ajoute un peu d'ail dans la poêle.
mushroom | le champignon | J'ai mis un champignon dans la soupe.
cabbage | le chou | Ma mère a fait sauter du chou.
lettuce | la laitue | Lave la laitue avant de la manger.
cucumber | le concombre | Le concombre est frais et léger.
pepper | le poivre ; le poivron | Tu peux me passer le poivre ?
butter | le beurre | Je mets du beurre sur mon pain grillé.
jam | la confiture | La confiture de fraises est ma préférée.
honey | le miel | Les abeilles font du miel.
yogurt | le yaourt | Je mange un yaourt au petit-déjeuner.
cookie | le biscuit | Je peux avoir un biscuit ?
chocolate | le chocolat | Les enfants adorent le chocolat.
popcorn | le pop-corn | Achetons du pop-corn pour le film.
French fries | les frites | Je veux un burger et des frites.
hot dog | le hot-dog | Il a mangé un hot-dog au match.
steak | le steak | Papa fait cuire des steaks ce soir.
sausage | la saucisse | Les saucisses grillées sont populaires dans les marchés de nuit.
ham | le jambon | Je voudrais un sandwich au jambon.
beans | les haricots | Les haricots verts sont bons pour la santé.
peanut | la cacahuète | Mon frère ne peut pas manger de cacahuètes.
salad | la salade | Je vais prendre une salade pour le déjeuner.
pie | la tarte | Grand-mère a fait une tarte aux pommes.
pancake | la crêpe ; le pancake | J'ai mangé un pancake avec du miel.
lemonade | la citronnade | Une citronnade fraîche, c'est parfait quand il fait chaud.
kiwi | le kiwi | Le kiwi est vert à l'intérieur.
`,
  phrases: `
What would you like to eat? | Qu'est-ce que tu veux manger ?
I'd like a cup of coffee, please. | Je voudrais un café, s'il vous plaît.
For here or to go? | Sur place ou à emporter ?
What do you want for lunch? | Qu'est-ce que tu veux pour le déjeuner ?
I'm so hungry. | J'ai tellement faim.
I'm full, thank you. | J'ai assez mangé, merci.
Let's eat together. | Mangeons ensemble.
Dinner is ready. | Le dîner est prêt.
Can I have some water? | Je peux avoir de l'eau ?
This is very tasty. | C'est très bon.
I don't like onions. | Je n'aime pas les oignons.
Do you like spicy food? | Tu aimes la nourriture épicée ?
I'll have the chicken rice. | Je vais prendre le riz au poulet.
How much is this? | Combien ça coûte ?
Can I have a bag, please? | Je peux avoir un sac, s'il vous plaît ?
One more bowl of rice, please. | Encore un bol de riz, s'il vous plaît.
Is this seat free? | Cette place est libre ?
A table for two, please. | Une table pour deux, s'il vous plaît.
Can I have a menu in English? | Je peux avoir un menu en anglais ?
What's this dish? | C'est quoi, ce plat ?
It's too salty. | C'est trop salé.
It's a little sweet. | C'est un peu sucré.
The soup is hot. Be careful. | La soupe est brûlante. Attention.
Do you want some tea? | Tu veux du thé ?
No sugar, please. | Sans sucre, s'il vous plaît.
Less ice, please. | Moins de glaçons, s'il vous plaît.
I'd like a large one. | Je voudrais un grand.
Can I pay by card? | Je peux payer par carte ?
Let's go out for dinner tonight. | Allons dîner au restaurant ce soir.
I usually cook at home. | D'habitude, je cuisine à la maison.
My mom makes the best dumplings. | Ma mère fait les meilleurs raviolis.
I eat fruit every day. | Je mange des fruits tous les jours.
Do you want a snack? | Tu veux un petit en-cas ?
Breakfast is the most important meal. | Le petit-déjeuner est le repas le plus important.
I skipped lunch today. | Je n'ai pas déjeuné aujourd'hui.
Please pass the salt. | Passe-moi le sel, s'il te plaît.
Can I try a little? | Je peux goûter un peu ?
It smells good. | Ça sent bon.
Help yourself. | Sers-toi.
Enjoy your meal! | Bon appétit !
Thanks for the food. | Merci pour le repas.
Wash your hands before you eat. | Lave-toi les mains avant de manger.
Don't talk with your mouth full. | Ne parle pas la bouche pleine.
Do you want chopsticks or a fork? | Tu veux des baguettes ou une fourchette ?
Can I have a spoon? | Je peux avoir une cuillère ?
I need a napkin. | J'ai besoin d'une serviette.
I'm thirsty. | J'ai soif.
Let's get some bubble tea. | Allons prendre un bubble tea.
I want the same, please. | La même chose pour moi, s'il vous plaît.
Is it spicy? | C'est épicé ?
Not too spicy, please. | Pas trop épicé, s'il vous plaît.
Can you heat this up? | Vous pouvez réchauffer ça ?
Where is the night market? | Où est le marché de nuit ?
Let's share this plate. | Partageons cette assiette.
I don't eat pork. | Je ne mange pas de porc.
I can't eat beef. | Je ne peux pas manger de bœuf.
Do you have anything without meat? | Vous avez quelque chose sans viande ?
The noodles are cold. | Les nouilles sont froides.
I'd like my egg fried. | Je voudrais mon œuf au plat.
Can I have some more sauce? | Je peux avoir un peu plus de sauce ?
It's my treat today. | Aujourd'hui, c'est moi qui invite.
Let's go Dutch. | Chacun paie sa part.
How long is the wait? | Il faut attendre combien de temps ?
We're waiting for a friend. | Nous attendons un ami.
Can we sit outside? | On peut s'asseoir dehors ?
I'll have a coffee to go. | Un café à emporter, s'il vous plaît.
Hot or iced? | Chaud ou glacé ?
Iced, please. | Glacé, s'il vous plaît.
Can I get a receipt? | Je peux avoir un reçu ?
The food here is cheap and good. | Ici, c'est bon et pas cher.
This restaurant is always busy. | Ce restaurant est toujours plein.
I'm on a diet. | Je suis au régime.
I want something light. | Je veux quelque chose de léger.
I love noodles. | J'adore les nouilles.
What's your favorite food? | Quel est ton plat préféré ?
I can't cook very well. | Je ne cuisine pas très bien.
Let's order delivery. | Commandons à livrer.
The pizza is here! | La pizza est arrivée !
Who wants dessert? | Qui veut un dessert ?
I'll have ice cream. | Je vais prendre une glace.
I'm still eating. | Je n'ai pas encore fini.
Can you take this away? | Vous pouvez débarrasser ceci ?
Can I have a box for this? | Je peux avoir une boîte pour emporter ça ?
The bread is fresh. | Le pain est frais.
The milk is old. Throw it away. | Le lait est périmé. Jette-le.
Put the food in the fridge. | Mets la nourriture au frigo.
I'm making rice. | Je fais cuire du riz.
Can you help me cut the vegetables? | Tu peux m'aider à couper les légumes ?
Lunch is at twelve. | Le déjeuner est à midi.
Do you want a bite? | Tu veux goûter ?
This apple is sweet. | Cette pomme est sucrée.
I'd like a bowl of beef noodles. | Je voudrais un bol de nouilles au bœuf.
Two coffees, please. | Deux cafés, s'il vous plaît.
Small, medium or large? | Petit, moyen ou grand ?
Medium, please. | Moyen, s'il vous plaît.
Anything else? | Autre chose ?
That's all, thanks. | C'est tout, merci.
Here's your change. | Voici votre monnaie.
Have a nice day! | Bonne journée !
Come again! | Revenez nous voir !
Are you hungry? Let's go eat. | Tu as faim ? Allons manger.
I'll take you to my favorite place. | Je t'emmène à mon endroit préféré.
Have you eaten Taiwanese food before? | Tu as déjà mangé de la cuisine taïwanaise ?
Is there anything you don't eat? | Il y a quelque chose que tu ne manges pas ?
Are you allergic to anything? | Tu es allergique à quelque chose ?
Can you eat spicy food? | Tu peux manger épicé ?
Do you eat pork? | Tu manges du porc ?
This is a local favorite. | Les gens d'ici adorent ça.
This is beef noodle soup. | C'est une soupe de nouilles au bœuf.
This is braised pork rice. | C'est du riz au porc braisé.
These are soup dumplings. | Ce sont des raviolis à la soupe.
Be careful, the soup inside is hot. | Attention, la soupe à l'intérieur est brûlante.
It's sweet and a little salty. | C'est sucré et un peu salé.
Try a little first. | Goûte d'abord un petit peu.
Do you like it? | Tu aimes ?
It's okay if you don't like it. | Ce n'est pas grave si tu n'aimes pas.
Let me order for the table. | Laisse-moi commander pour tout le monde.
We share dishes here. | Ici, on partage les plats.
Here, use this spoon. | Tiens, prends cette cuillère.
Don't worry, it's my treat. | Ne t'inquiète pas, c'est moi qui invite.
`
});

// ---------- 中級 Intermediate ----------
addFrench("food", {
  words: `
appetizer | l'entrée | Nous avons partagé une entrée avant le plat principal.
reservation | la réservation | J'ai fait une réservation pour six personnes.
vegetarian | végétarien | Ma sœur est végétarienne, donc elle ne mange pas de viande.
spicy | épicé ; piquant | Ce plat est très épicé ?
leftovers | les restes | Je peux emporter les restes ?
recommend | recommander | Qu'est-ce que vous recommandez ?
ingredient | l'ingrédient | Des ingrédients frais font toute la différence.
recipe | la recette | Tu peux partager ta recette ?
portion | la portion | Les portions ici sont énormes.
flavor | le parfum ; la saveur | Quel parfum de glace veux-tu ?
takeout | les plats à emporter | Prenons simplement des plats à emporter ce soir.
buffet | le buffet | L'hôtel propose un buffet au petit-déjeuner.
beverage | la boisson | Les boissons ne sont pas comprises dans le prix.
grilled | grillé | Je vais prendre le saumon grillé.
fried | frit | Le poulet frit est mon petit plaisir coupable.
steamed | cuit à la vapeur | Les raviolis à la vapeur sont plus sains que les raviolis frits.
raw | cru | Les sushis contiennent souvent du poisson cru.
fresh | frais | Le marché vend des légumes frais.
frozen | surgelé | Les surgelés sont pratiques mais moins bons.
organic | bio | Ils n'achètent que des produits bio.
diet | le régime ; l'alimentation | Je suis au régime, donc pas de dessert pour moi.
calories | les calories | Cette boisson contient beaucoup de calories.
nutrition | la nutrition | Une bonne nutrition est importante pour les enfants.
seasoning | l'assaisonnement | Ajoute un peu d'assaisonnement à la soupe.
side dish | l'accompagnement | Le kimchi est un accompagnement très apprécié.
specialty | la spécialité | Les nouilles au bœuf sont la spécialité de la maison.
street food | la cuisine de rue | Taïwan est célèbre pour sa cuisine de rue.
night market | le marché de nuit | Allons au marché de nuit ce soir.
refill | le resservice ; resservir | Vous pouvez me resservir du café ?
tip | le pourboire | Aux États-Unis, on laisse en général quinze à vingt pour cent de pourboire.
waiter | le serveur | Le serveur nous a vite apporté les boissons.
crispy | croustillant | La peau est parfaitement croustillante.
bland | fade | La soupe est un peu fade. Il faut du sel.
dumpling | le ravioli | Nous avons fait des raviolis pour le Nouvel An.
sauce | la sauce | Cette sauce est un peu sucrée.
broth | le bouillon | Il faut six heures pour faire ce bouillon.
cafeteria | la cantine ; la cafétéria | La cantine ouvre à onze heures et demie.
bakery | la boulangerie | Il y a une très bonne boulangerie près de mon bureau.
grocery store | l'épicerie | Je dois passer à l'épicerie.
supermarket | le supermarché | Le supermarché est ouvert jusqu'à vingt-deux heures.
convenience store | la supérette | Il y a une supérette à chaque coin de rue.
lunchbox | la boîte à repas ; le bento | Ma mère me prépare une boîte à repas.
bubble tea | le bubble tea ; le thé aux perles | Le bubble tea a été inventé à Taïwan.
craving | l'envie | J'ai une envie de fondue chinoise.
hot pot | la fondue chinoise | Faisons une fondue chinoise ce soir.
barbecue | le barbecue | Nous faisons un barbecue à chaque fête de la Lune.
microwave | passer au micro-ondes | Passe simplement les restes au micro-ondes.
boil | faire bouillir | Fais bouillir l'eau avant d'ajouter les nouilles.
fry | faire frire ; faire cuire à la poêle | Fais cuire l'œuf deux minutes à la poêle.
chop | hacher ; émincer | Émince finement les oignons.
mix | mélanger | Mélange la farine et le sucre.
bake | faire cuire au four ; pâtisser | Je fais des biscuits le week-end.
oven | le four | Préchauffe le four à 180 degrés.
expired | périmé | Ce lait est périmé.
gluten-free | sans gluten | Vous avez des options sans gluten ?
allergy | l'allergie | J'ai une allergie aux fruits de mer.
dairy | les produits laitiers | Je ne peux pas manger de produits laitiers.
seafood | les fruits de mer | Keelung est célèbre pour ses fruits de mer.
tofu | le tofu | Le tofu mapo est épicé et délicieux.
brunch | le brunch | Retrouvons-nous pour un brunch dimanche.
set meal | la formule ; le menu | La formule comprend une soupe et une boisson.
to go | à emporter | Je peux prendre ça à emporter ?
self-service | en libre-service | C'est un restaurant en libre-service.
tasty | savoureux ; bon | Ces biscuits sont vraiment bons.
overcooked | trop cuit | Les pâtes sont trop cuites.
juicy | juteux | Cette mangue est si juteuse.
chef | le chef | Le chef est sorti saluer les clients.
delivery | la livraison | La livraison a pris presque une heure.
napkin | la serviette | Je pourrais avoir une autre serviette, s'il vous plaît ?
straw | la paille | Beaucoup de magasins ne donnent plus de paille en plastique.
cutlery | les couverts | Les couverts sont dans le tiroir du haut.
vinegar | le vinaigre | Trempe les raviolis dans le vinaigre.
soy sauce | la sauce soja | Ajoute un peu de sauce soja au riz.
ketchup | le ketchup | Tu veux du ketchup avec tes frites ?
mustard | la moutarde | J'aime la moutarde sur mon hot-dog.
mayonnaise | la mayonnaise | Cette salade a trop de mayonnaise.
flour | la farine | Il faut deux tasses de farine pour ce gâteau.
dough | la pâte | Pétris la pâte pendant dix minutes.
stew | le ragoût | Le ragoût de bœuf est parfait en hiver.
porridge | la bouillie ; le congee | J'ai mangé du congee quand j'étais malade.
sushi | les sushis | Nous avons mangé des sushis au dîner.
curry | le curry | Le curry japonais est un peu sucré.
pasta | les pâtes | Elle a fait des pâtes à la sauce tomate.
salmon | le saumon | Le saumon grillé est sain et savoureux.
lamb | l'agneau | Je n'ai jamais goûté l'agneau.
peel | éplucher | Épluche les pommes de terre, s'il te plaît.
slice | trancher ; la tranche | Coupe le pain en fines tranches.
stir | remuer | Remue la soupe pour qu'elle ne brûle pas.
roast | rôtir | Nous rôtissons un poulet à chaque Noël.
defrost | décongeler | Décongèle la viande au frigo pendant la nuit.
healthy | sain | J'essaie de manger sainement.
junk food | la malbouffe | Trop de malbouffe, c'est mauvais pour la santé.
vending machine | le distributeur automatique | J'ai pris une boisson au distributeur automatique.
food court | l'aire de restauration | Mangeons à l'aire de restauration du centre commercial.
queue | la file d'attente | Il y a une longue file d'attente devant le restaurant de nouilles.
decaf | le déca | Je bois du déca le soir.
skim milk | le lait écrémé | Un latte au lait écrémé, s'il vous plaît.
whole grain | complet | Le pain complet cale plus longtemps.
protein | les protéines | Les œufs sont une bonne source de protéines.
vitamin | la vitamine | Les oranges sont pleines de vitamine C.
piece of cake | du gâteau ; un jeu d'enfant | L'examen, c'était du gâteau.
spill the beans | vendre la mèche | Ne vends pas la mèche pour la fête.
in a nutshell | en bref | En bref, le restaurant était trop cher.
bring home the bacon | faire bouillir la marmite | Mes deux parents font bouillir la marmite.
couch potato | la larve ; le pantouflard | Ne fais pas la larve ; sortons.
cry over spilled milk | pleurer sur le lait renversé | C'est fait. Inutile de pleurer sur le lait renversé.
sell like hotcakes | se vendre comme des petits pains | Ces nouveaux téléphones se vendent comme des petits pains.
not my cup of tea | ce n'est pas ma tasse de thé | La nourriture épicée, ce n'est pas ma tasse de thé.
big cheese | le grand patron ; la grosse légume | C'est la grosse légume de cette entreprise.
go bananas | devenir fou | Les enfants vont devenir fous en voyant le gâteau.
the apple of my eye | la prunelle de mes yeux | Ma fille est la prunelle de mes yeux.
have a sweet tooth | être bec sucré ; aimer le sucré | J'aime le sucré, alors j'adore les desserts.
take it with a grain of salt | prendre avec des pincettes | Il exagère, alors prends ça avec des pincettes.
eat your words | ravaler ses paroles | Tu disais que j'allais échouer. Ravale tes paroles !
full of beans | plein d'énergie ; en pleine forme | Les enfants sont pleins d'énergie ce matin.
`,
  phrases: `
Could we get a table by the window? | Nous pourrions avoir une table près de la fenêtre ?
I'm allergic to peanuts. | Je suis allergique aux cacahuètes.
Let's split the bill. | Partageons l'addition.
Do you have any vegetarian options? | Vous avez des plats végétariens ?
What's the special of the day? | Quel est le plat du jour ?
I'll go with the set menu. | Je vais prendre le menu.
Could I get the dressing on the side? | Je pourrais avoir la sauce à part ?
How would you like your steak? | Quelle cuisson pour votre steak ?
Medium rare, please. | Saignant, s'il vous plaît.
Is service charge included? | Le service est compris ?
I think there's a mistake on the bill. | Je crois qu'il y a une erreur sur l'addition.
We didn't order this. | Nous n'avons pas commandé ça.
Excuse me, we've been waiting for a while. | Excusez-moi, nous attendons depuis un moment.
Could you make it less sweet? | Vous pourriez le faire moins sucré ?
Can I substitute fries for salad? | Je peux remplacer les frites par une salade ?
Does this contain nuts? | Est-ce qu'il y a des noix dedans ?
I'm lactose intolerant. | Je suis intolérant au lactose.
I'm trying to eat healthier. | J'essaie de manger plus sainement.
I've been cutting down on fried food. | Je mange moins de fritures ces temps-ci.
This place has great reviews online. | Cet endroit a d'excellents avis en ligne.
We should book a table in advance. | On devrait réserver une table à l'avance.
They don't take reservations on weekends. | Ils ne prennent pas de réservations le week-end.
There's usually a long line at lunchtime. | Il y a souvent une longue file à l'heure du déjeuner.
Let's grab a quick bite before the movie. | Mangeons un morceau avant le film.
I'm craving something sweet. | J'ai envie de quelque chose de sucré.
I could eat a horse. | J'ai une faim de loup.
I'm stuffed. I can't eat another bite. | Je n'en peux plus. Je ne peux plus avaler une bouchée.
This is way too greasy for me. | C'est beaucoup trop gras pour moi.
The portions here are huge. | Les portions ici sont énormes.
It's a bit pricey, but it's worth it. | C'est un peu cher, mais ça vaut le coup.
I'll pay for this round. | C'est ma tournée.
Let's split it three ways. | Partageons en trois.
Could we get separate checks? | On pourrait payer séparément ?
Do you deliver to this area? | Vous livrez dans ce quartier ?
The delivery is running late. | La livraison est en retard.
Shall I make dinner tonight? | Je prépare le dîner ce soir ?
What should I bring to the potluck? | Qu'est-ce que j'apporte pour le repas partagé ?
Can you show me how to make this? | Tu peux me montrer comment faire ça ?
You need to marinate the meat overnight. | Il faut faire mariner la viande toute la nuit.
Boil the water first, then add the noodles. | Fais d'abord bouillir l'eau, puis ajoute les nouilles.
Stir it gently so it doesn't burn. | Remue doucement pour que ça ne brûle pas.
Add a pinch of salt. | Ajoute une pincée de sel.
Let it simmer for twenty minutes. | Laisse mijoter vingt minutes.
Preheat the oven to 180 degrees. | Préchauffe le four à 180 degrés.
This recipe is easy to follow. | Cette recette est facile à suivre.
I ran out of soy sauce. | Je n'ai plus de sauce soja.
Can you pick up some eggs on your way home? | Tu peux acheter des œufs en rentrant ?
Check the expiration date before you buy it. | Vérifie la date de péremption avant de l'acheter.
This is my comfort food. | C'est mon plat réconfortant.
It reminds me of my grandmother's cooking. | Ça me rappelle la cuisine de ma grand-mère.
Have you tried the local street food? | Tu as goûté la cuisine de rue locale ?
You have to try the stinky tofu here. | Tu dois goûter le tofu puant ici.
It tastes better than it smells. | C'est meilleur au goût qu'à l'odeur.
I'm not a big fan of seafood. | Je ne suis pas fan des fruits de mer.
I'll eat almost anything. | Je mange presque de tout.
I'm a picky eater. | Je suis difficile.
Can I get a refill? | Vous pouvez me resservir ?
Refills are free here. | Ici, on vous ressert gratuitement.
Could you pack the rest for me? | Vous pourriez m'emballer le reste ?
I'd like to make a reservation for Friday night. | Je voudrais réserver pour vendredi soir.
Is there a dress code? | Y a-t-il un code vestimentaire ?
Could we move to a quieter table? | Nous pourrions changer pour une table plus calme ?
The food took ages to arrive. | Les plats ont mis une éternité à arriver.
My soup is lukewarm. Could you heat it up? | Ma soupe est tiède. Vous pourriez la réchauffer ?
Compliments to the chef. | Mes compliments au chef.
Everything was delicious. | Tout était délicieux.
Do you have a kids' menu? | Vous avez un menu enfant ?
Is this dish enough for two people? | Ce plat suffit pour deux personnes ?
What comes with the main course? | Qu'est-ce qui accompagne le plat principal ?
Does it come with rice? | C'est servi avec du riz ?
I'll have the soup instead of the salad. | Je vais prendre la soupe à la place de la salade.
Could I have the bill when you get a chance? | Je pourrais avoir l'addition quand vous aurez un moment ?
Do you accept mobile payment? | Vous acceptez le paiement mobile ?
We'd like to order some drinks first. | Nous voudrions d'abord commander des boissons.
I'll need a few more minutes to decide. | J'ai besoin de quelques minutes de plus pour choisir.
What's the most popular dish here? | Quel est le plat le plus populaire ici ?
I'd recommend the braised pork rice. | Je recommande le riz au porc braisé.
Let's try somewhere new this time. | Essayons un nouvel endroit cette fois.
I know a great little place around the corner. | Je connais un super petit endroit au coin de la rue.
They're famous for their soup dumplings. | Ils sont célèbres pour leurs raviolis à la soupe.
I usually pack my own lunch. | D'habitude, j'apporte mon propre déjeuner.
I eat out almost every day. | Je mange dehors presque tous les jours.
Eating out adds up quickly. | Manger dehors, ça finit par coûter cher.
I'm meal-prepping for the week. | Je prépare mes repas pour la semaine.
Let's have a barbecue this weekend. | Faisons un barbecue ce week-end.
Who's in charge of the drinks? | Qui s'occupe des boissons ?
I'll bring dessert. | J'apporte le dessert.
This cake is homemade. | Ce gâteau est fait maison.
Could you save me a slice? | Tu pourrais me garder une part ?
I've had too much coffee today. | J'ai bu trop de café aujourd'hui.
I'm cutting back on caffeine. | Je réduis la caféine.
Decaf, please. | Un déca, s'il vous plaît.
Oat milk instead of regular milk, please. | Du lait d'avoine à la place du lait normal, s'il vous plaît.
This tea has a strong aftertaste. | Ce thé a un arrière-goût prononcé.
The meat is a bit tough. | La viande est un peu dure.
The vegetables are perfectly crispy. | Les légumes sont parfaitement croquants.
Let's leave a tip. | Laissons un pourboire.
Tipping isn't common here. | Ici, on ne laisse pas souvent de pourboire.
Food is a big part of the culture here. | La nourriture tient une grande place dans la culture d'ici.
Could you recommend a good place for brunch? | Tu pourrais me recommander un bon endroit pour un brunch ?
I'd love to show you some real local food. | J'aimerais beaucoup te faire découvrir la vraie cuisine locale.
This place doesn't look fancy, but the food is amazing. | L'endroit ne paie pas de mine, mais la nourriture est incroyable.
The line is long, but it's worth the wait. | La file est longue, mais ça vaut la peine d'attendre.
Is there anything you can't eat for religious or health reasons? | Y a-t-il quelque chose que tu ne peux pas manger pour des raisons religieuses ou de santé ?
Let me know if you're vegetarian. | Dis-moi si tu es végétarien.
I'll ask them to make it less spicy for you. | Je vais leur demander de le faire moins épicé pour toi.
It's made with pork belly slowly braised in soy sauce. | C'est de la poitrine de porc braisée lentement dans la sauce soja.
It's kind of like a pancake, but with egg and green onions. | C'est un peu comme une crêpe, mais avec de l'œuf et de la ciboule.
It smells strong, but it tastes much better than it smells. | L'odeur est forte, mais le goût est bien meilleur que l'odeur.
Dip it in this sauce for more flavor. | Trempe-le dans cette sauce pour plus de goût.
You eat the dumpling in one bite, or bite a small hole to let the soup out. | On mange le ravioli en une bouchée, ou on fait un petit trou pour laisser sortir la soupe.
In Taiwan, it's normal to slurp your noodles. | À Taïwan, c'est normal d'aspirer bruyamment ses nouilles.
Don't stick your chopsticks straight up in your rice. | Ne plante pas tes baguettes à la verticale dans ton riz.
You don't have to finish everything. Just try what you like. | Tu n'es pas obligé de tout finir. Goûte juste ce qui te plaît.
This dish is usually eaten at breakfast. | Ce plat se mange généralement au petit-déjeuner.
We usually drink bubble tea after a meal like this. | Après un repas comme celui-ci, on boit souvent un bubble tea.
How does it compare to the food back home? | Comment ça se compare à la nourriture de chez toi ?
What's a typical dish from your country? | Quel est un plat typique de ton pays ?
You don't need to tip here. | Ici, pas besoin de laisser de pourboire.
Next time, you can show me your favorite food. | La prochaine fois, tu me feras découvrir ton plat préféré.
`
});

// ---------- 高級 Advanced ----------
addFrench("food", {
  words: `
palate | le palais | Ce vin a une saveur complexe qui plaît aux palais raffinés.
savory | salé ; savoureux | Je préfère les en-cas salés aux sucrés.
culinary | culinaire | Taipei a une scène culinaire très vivante.
indulge | se faire plaisir | Nous avons décidé de nous faire plaisir avec un menu dégustation en sept plats.
sustainable | durable | Le restaurant ne sert que des produits de la mer durables.
acquired taste | un goût qui s'acquiert | Pour beaucoup de visiteurs, le tofu puant est un goût qui s'acquiert.
gourmet | gastronomique ; gourmet | Ils ont ouvert un restaurant de burgers gourmets.
cuisine | la cuisine | La cuisine taïwanaise mêle de nombreuses influences.
connoisseur | le connaisseur | C'est un connaisseur en thé.
aroma | l'arôme | L'arôme du pain frais remplissait la pièce.
texture | la texture | J'adore la texture moelleuse des perles de tapioca.
umami | l'umami | Les champignons apportent une riche saveur umami.
garnish | garnir ; décorer | Décore le plat avec des herbes fraîches.
marinate | faire mariner | Fais mariner le porc toute la nuit.
ferment | faire fermenter | Les Coréens font fermenter le chou pour faire le kimchi.
simmer | mijoter | Laisse mijoter la sauce vingt minutes.
artisanal | artisanal | La boulangerie vend du pain au levain artisanal.
farm-to-table | de la ferme à la table | Les restaurants « de la ferme à la table » utilisent des produits locaux.
food security | la sécurité alimentaire | Le changement climatique menace la sécurité alimentaire mondiale.
food waste | le gaspillage alimentaire | Les supermarchés essaient de réduire le gaspillage alimentaire.
processed food | les aliments transformés | Trop d'aliments transformés, c'est mauvais pour la santé.
additive | l'additif | Cet en-cas ne contient pas d'additifs artificiels.
moderation | la modération | Mange des sucreries avec modération.
palatable | agréable au goût ; acceptable | Le miel rendait le médicament plus agréable au goût.
succulent | succulent | Le steak était tendre et succulent.
decadent | décadent ; gourmand | Ce gâteau au chocolat est vraiment décadent.
delicacy | le mets raffiné | La soupe de nids d'hirondelle est considérée comme un mets raffiné.
fusion | la cuisine fusion | Le restaurant sert une cuisine fusion italo-japonaise.
Michelin-starred | étoilé au Michelin | Nous avons enfin mangé dans un restaurant étoilé au Michelin.
appetite | l'appétit | Le stress peut affecter l'appétit.
wholesome | sain ; nourrissant | Elle cuisine des repas simples et sains.
sommelier | le sommelier | Le sommelier a suggéré un vin blanc sec.
gluttony | la gourmandise ; la gloutonnerie | Les festins des fêtes mènent souvent à la gloutonnerie.
caramelize | caraméliser | Fais caraméliser les oignons doucement.
emulsify | émulsionner | Fouette pour émulsionner la vinaigrette.
braise | braiser | Braise le porc dans la sauce soja.
infuse | infuser ; parfumer | Parfume l'huile à l'ail.
zest | le zeste | Ajoute un peu de zeste de citron.
tangy | acidulé | La sauce est sucrée et acidulée.
pungent | âcre ; fort | Le durian a une odeur très forte.
velvety | velouté | La soupe a une texture veloutée.
charred | grillé ; noirci | J'aime les bords grillés de la pizza.
bittersweet | doux-amer | Le chocolat noir a un goût doux-amer.
tasting menu | le menu dégustation | Le menu dégustation comprend neuf plats.
pairing | l'accord mets-vins | L'accord mets-vins était parfait.
provenance | la provenance | Les clients se soucient de la provenance de leurs aliments.
foraging | la cueillette sauvage | La cueillette d'herbes sauvages est à la mode chez les chefs.
plant-based | végétal ; à base de plantes | La viande végétale devient populaire.
lab-grown | cultivé en laboratoire | La viande cultivée en laboratoire pourrait changer le secteur.
malnutrition | la malnutrition | La malnutrition reste un problème dans les régions pauvres.
obesity | l'obésité | L'obésité infantile augmente.
fermentation | la fermentation | La fermentation donne son goût à la sauce soja.
gastronomy | la gastronomie | Lyon est une capitale de la gastronomie.
epicurean | épicurien | Il mène une vie d'épicurien.
famished | affamé | Après la randonnée, nous étions affamés.
scrumptious | délicieux ; succulent | La tarte était délicieuse.
overrated | surfait | Ce restaurant est surfait.
mouthwatering | appétissant | Le menu est plein de plats appétissants.
condiment | le condiment | La sauce soja est le condiment le plus courant ici.
staple | l'aliment de base | Le riz est un aliment de base en Asie.
perishable | périssable | Garde les denrées périssables au frigo.
shelf life | la durée de conservation | Les conserves ont une longue durée de conservation.
food chain | la chaîne alimentaire | Chaque maillon de la chaîne alimentaire compte.
agribusiness | l'agro-industrie | L'agro-industrie domine la production alimentaire mondiale.
fine dining | la grande cuisine ; la haute gastronomie | La haute gastronomie n'est pas qu'une question de prix.
comfort food | le plat réconfortant | Les nouilles instantanées sont mon plat réconfortant.
al dente | al dente | Fais cuire les pâtes jusqu'à ce qu'elles soient al dente.
charcuterie | la charcuterie | Nous avons commandé une planche de charcuterie à partager.
sous vide | sous vide | Le steak a été cuit sous vide pendant des heures.
smoky | fumé | La sauce a une riche saveur fumée.
piquant | piquant ; relevé | La vinaigrette est agréablement relevée.
aftertaste | l'arrière-goût | Ce thé laisse un arrière-goût sucré.
mouthfeel | la sensation en bouche | Cette glace a une sensation en bouche douce et crémeuse.
seasonal | de saison | Le chef n'utilise que des légumes de saison.
locally sourced | d'origine locale | Tous nos ingrédients sont d'origine locale.
food miles | les kilomètres alimentaires | Acheter local réduit les kilomètres alimentaires.
carbon footprint | l'empreinte carbone | Le bœuf a une empreinte carbone bien plus grande que les haricots.
vegan | végane ; vegan | La boulangerie propose plusieurs desserts véganes.
pescatarian | pesco-végétarien | Pesco-végétarienne, elle mange du poisson mais pas de viande.
intermittent fasting | le jeûne intermittent | Il pratique le jeûne intermittent depuis un an.
superfood | le superaliment | On dit souvent que les myrtilles sont un superaliment.
probiotic | probiotique | Le yaourt contient des bactéries probiotiques.
antioxidant | l'antioxydant | Le thé vert est riche en antioxydants.
cholesterol | le cholestérol | Les fritures peuvent augmenter le cholestérol.
sodium | le sodium | Les nouilles instantanées sont très riches en sodium.
saturated fat | les graisses saturées | Le beurre est riche en graisses saturées.
food poisoning | l'intoxication alimentaire | Du poulet pas assez cuit peut provoquer une intoxication alimentaire.
contamination | la contamination | Utilise des planches différentes pour éviter la contamination.
hygiene | l'hygiène | L'hygiène des cuisines est contrôlée par des inspecteurs.
food safety | la sécurité sanitaire des aliments | Les scandales de sécurité alimentaire nuisent à la confiance du public.
hospitality | l'hôtellerie-restauration ; l'hospitalité | La pandémie a durement touché l'hôtellerie-restauration.
ambience | l'ambiance | Le restaurant a une ambiance chaleureuse et détendue.
omakase | l'omakase | Le menu omakase change tous les jours.
street vendor | le vendeur ambulant | Ce vendeur ambulant fait les meilleures galettes à la ciboule.
potluck | le repas partagé | Chacun a apporté un plat au repas partagé.
banquet | le banquet | Le banquet de mariage comptait douze plats.
feast | le festin | Le dîner du Nouvel An lunaire est un vrai festin.
nibble | grignoter | Elle a grignoté quelques crackers avant le dîner.
devour | dévorer | Les enfants ont dévoré la pizza en quelques minutes.
crave | avoir envie de | J'ai toujours envie de plats épicés quand il fait froid.
bite off more than you can chew | avoir les yeux plus gros que le ventre | Trois emplois ? Tu as les yeux plus gros que le ventre.
have your cake and eat it too | vouloir le beurre et l'argent du beurre | Tu ne peux pas avoir le beurre et l'argent du beurre.
butter someone up | passer de la pommade à quelqu'un | N'essaie pas de passer de la pommade à quelqu'un pour une augmentation.
food for thought | matière à réflexion | Ton discours m'a donné matière à réflexion.
half-baked | mal ficelé ; à moitié réfléchi | C'est une idée mal ficelée.
the proof of the pudding is in the eating | c'est à l'usage qu'on juge | C'est à l'usage qu'on juge, alors essayons.
a bad apple | une brebis galeuse | C'est une brebis galeuse ; ne lui fais pas confiance.
walk on eggshells | marcher sur des œufs | Je marche sur des œufs avec mon patron en colère.
egg on your face | avoir l'air bête ; se ridiculiser | Vérifie tes faits, sinon tu vas te ridiculiser.
bread and butter | le gagne-pain | Les photos de mariage sont notre gagne-pain.
cool as a cucumber | calme et imperturbable | Elle est restée calme et imperturbable pendant l'entretien.
too many cooks spoil the broth | trop de cuisiniers gâtent la sauce | Trop de cuisiniers gâtent la sauce, alors laissons une seule personne décider.
cream of the crop | la crème de la crème | Ces élèves sont la crème de la crème.
souped-up | gonflé ; trafiqué | Il conduit une vieille voiture gonflée.
the icing on the cake | la cerise sur le gâteau | Le dessert offert, c'était la cerise sur le gâteau.
`,
  phrases: `
This dish really hits the spot. | Ce plat tombe vraiment à pic.
I'm trying to cut back on sugar. | J'essaie de manger moins de sucre.
The flavors are well balanced, though the sauce is a bit overpowering. | Les saveurs sont bien équilibrées, même si la sauce est un peu trop présente.
The menu leans heavily on seasonal, locally sourced ingredients. | La carte fait la part belle aux produits de saison et locaux.
The chef strikes a fine balance between tradition and innovation. | Le chef trouve un bel équilibre entre tradition et innovation.
It's a bit overrated, if you ask me. | Si tu veux mon avis, c'est un peu surfait.
The flavors didn't quite come together. | Les saveurs ne s'accordaient pas vraiment.
The broth is rich without being heavy. | Le bouillon est riche sans être lourd.
There's a subtle hint of citrus in the sauce. | Il y a une subtile note d'agrumes dans la sauce.
The texture is what really makes this dish. | C'est la texture qui fait vraiment ce plat.
It's an acquired taste, but once you're hooked, there's no going back. | C'est un goût qui s'acquiert, mais une fois accro, impossible de s'en passer.
I'm not much of a foodie, but this was outstanding. | Je ne suis pas vraiment gourmet, mais c'était exceptionnel.
The wine pairing really elevated the meal. | L'accord mets-vins a vraiment sublimé le repas.
I'd steer clear of the dessert menu. | J'éviterais la carte des desserts.
The service was attentive without being intrusive. | Le service était attentionné sans être envahissant.
The restaurant has been riding on its reputation for years. | Ce restaurant vit sur sa réputation depuis des années.
Prices have crept up since it got a Michelin star. | Les prix ont grimpé petit à petit depuis son étoile Michelin.
It's more about the experience than the food itself. | C'est plus une question d'expérience que de nourriture.
I'm trying to be more mindful of what I eat. | J'essaie de faire plus attention à ce que je mange.
I've cut out processed food almost entirely. | J'ai presque complètement arrêté les aliments transformés.
Everything in moderation is my rule of thumb. | Tout avec modération, c'est ma règle d'or.
I'm intermittent fasting, so I skip breakfast. | Je fais du jeûne intermittent, alors je saute le petit-déjeuner.
Plant-based diets have really gone mainstream. | Les régimes végétaux sont vraiment devenus courants.
Food waste is a huge problem in the restaurant industry. | Le gaspillage alimentaire est un énorme problème dans la restauration.
Many restaurants now donate their surplus food. | Beaucoup de restaurants donnent maintenant leurs invendus.
Rising food prices are squeezing household budgets. | La hausse des prix alimentaires pèse sur le budget des ménages.
Food safety scandals have shaken consumer confidence. | Les scandales alimentaires ont ébranlé la confiance des consommateurs.
The label is misleading about the sugar content. | L'étiquette est trompeuse sur la teneur en sucre.
Street food is the soul of this city. | La cuisine de rue est l'âme de cette ville.
Night markets offer a window into local life. | Les marchés de nuit offrent un aperçu de la vie locale.
This dish has its roots in Hakka cuisine. | Ce plat a ses racines dans la cuisine hakka.
Fusion cuisine can be hit or miss. | La cuisine fusion, ça passe ou ça casse.
The dish was let down by an overly sweet sauce. | Le plat était gâché par une sauce trop sucrée.
The seasoning was spot on. | L'assaisonnement était parfait.
It was a bit underwhelming, considering the hype. | C'était un peu décevant, vu tout le battage.
I'll give it another shot when the menu changes. | Je retenterai quand la carte changera.
The kitchen is clearly understaffed tonight. | La cuisine manque clairement de personnel ce soir.
We had to send the dish back because it was undercooked. | Nous avons dû renvoyer le plat parce qu'il n'était pas assez cuit.
The manager comped our drinks to apologize. | Le gérant nous a offert les boissons pour s'excuser.
We'd like to speak to the manager about our experience. | Nous aimerions parler au responsable de notre expérience.
I have a severe allergy, so cross-contamination is a real concern. | J'ai une allergie sévère, donc la contamination croisée me préoccupe vraiment.
Could you check with the kitchen whether it's cooked in the same oil? | Vous pourriez demander en cuisine si c'est cuit dans la même huile ?
I'd rather splurge on one great meal than eat out every day. | Je préfère faire une folie pour un excellent repas que manger dehors tous les jours.
Home cooking gives you full control over what goes into your food. | Cuisiner chez soi permet de contrôler entièrement ce qu'on met dans son assiette.
Batch cooking on Sundays saves me a lot of time. | Cuisiner en grande quantité le dimanche me fait gagner beaucoup de temps.
The secret is to let the flavors develop overnight. | Le secret, c'est de laisser les saveurs se développer pendant la nuit.
You can't rush a good stew. | On ne peut pas presser un bon ragoût.
I always eyeball the measurements. | Je mesure toujours à l'œil.
Baking is more of a science than cooking. | La pâtisserie est plus une science que la cuisine.
This recipe has been handed down for generations. | Cette recette se transmet depuis des générations.
Food brings people together in a way nothing else does. | La nourriture rassemble les gens comme rien d'autre.
Sharing dishes is central to dining culture here. | Partager les plats est au cœur de la culture culinaire d'ici.
In some cultures, finishing your plate signals you're still hungry. | Dans certaines cultures, finir son assiette signifie qu'on a encore faim.
Table manners vary widely from country to country. | Les bonnes manières à table varient beaucoup d'un pays à l'autre.
It's considered rude to stick your chopsticks upright in rice. | Planter ses baguettes à la verticale dans le riz est considéré comme impoli.
The farm-to-table movement has changed how chefs think about sourcing. | Le mouvement « de la ferme à la table » a changé la façon dont les chefs choisissent leurs produits.
Lab-grown meat could transform the food industry. | La viande cultivée en laboratoire pourrait transformer l'industrie alimentaire.
I'm skeptical about the health claims on superfoods. | Je suis sceptique quant aux vertus attribuées aux superaliments.
Nutrition advice seems to change every few years. | Les conseils nutritionnels semblent changer tous les quelques ans.
Portion control matters more than any particular diet. | Contrôler les portions compte plus que n'importe quel régime.
I've developed a real appreciation for bitter flavors. | J'ai appris à vraiment apprécier les saveurs amères.
This coffee has notes of dark chocolate and cherry. | Ce café a des notes de chocolat noir et de cerise.
The tea ceremony is as much about patience as it is about taste. | La cérémonie du thé est autant une affaire de patience que de goût.
I'm a creature of habit when it comes to breakfast. | Pour le petit-déjeuner, je suis très routinier.
Let's not go overboard with the ordering this time. | Cette fois, ne commandons pas trop.
We ordered way more than we could possibly eat. | Nous avons commandé bien plus que ce que nous pouvions manger.
I'll have whatever you're having. | Je prendrai la même chose que toi.
Shall we order a few dishes to share? | On commande quelques plats à partager ?
I'm happy to go along with whatever the group decides. | Je suis d'accord avec ce que le groupe décidera.
Let's not make a big fuss about the bill. | Ne faisons pas toute une histoire pour l'addition.
Dinner's on the company tonight. | Ce soir, le dîner est aux frais de l'entreprise.
I'll get this one, and you can get the next. | Je paie cette fois, et tu paieras la prochaine.
The atmosphere more than made up for the slow service. | L'ambiance a largement compensé la lenteur du service.
It's a hidden gem that only locals know about. | C'est une perle cachée que seuls les gens du coin connaissent.
The place has lost its charm since it expanded. | L'endroit a perdu son charme depuis qu'il s'est agrandi.
Chain restaurants have pushed out many family-run diners. | Les chaînes de restaurants ont fait disparaître beaucoup de petits restaurants familiaux.
Delivery apps take a hefty cut from every order. | Les applis de livraison prennent une grosse commission sur chaque commande.
Ghost kitchens only exist for delivery orders. | Les cuisines fantômes n'existent que pour les commandes en livraison.
Rising rents are forcing small eateries to close. | La hausse des loyers oblige les petits restaurants à fermer.
The dish is a bit of a guilty pleasure for me. | Ce plat est un peu mon plaisir coupable.
I can't resist anything with truffle in it. | Je ne peux pas résister à tout ce qui contient de la truffe.
I find this kind of food incredibly comforting. | Je trouve ce genre de plat incroyablement réconfortant.
The spice level here is not for the faint-hearted. | Le niveau d'épices ici n'est pas pour les âmes sensibles.
My taste buds are still recovering. | Mes papilles s'en remettent encore.
It's an interesting take on a classic dish. | C'est une version intéressante d'un plat classique.
The presentation was stunning, almost too pretty to eat. | La présentation était magnifique, presque trop belle pour être mangée.
I value good ingredients over fancy techniques. | Je préfère de bons ingrédients aux techniques sophistiquées.
Simple food done well is hard to beat. | Une cuisine simple bien faite, c'est difficile à battre.
The smell alone brings back childhood memories. | Rien que l'odeur me rappelle des souvenirs d'enfance.
Every region has its own take on this soup. | Chaque région a sa propre version de cette soupe.
Hospitality is part of what makes a restaurant memorable. | L'accueil fait partie de ce qui rend un restaurant mémorable.
I'd happily wait an hour in line for this. | J'attendrais volontiers une heure dans la file pour ça.
I'm not sure it lives up to the hype. | Je ne suis pas sûr que ce soit à la hauteur de sa réputation.
It's a classic case of style over substance. | C'est un cas typique de forme qui l'emporte sur le fond.
Reviews can be gamed, so I take them with a grain of salt. | Les avis peuvent être truqués, alors je les prends avec des pincettes.
It's worth going out of your way for. | Ça vaut le détour.
The menu caters to a wide range of dietary needs. | La carte répond à une grande variété de besoins alimentaires.
I appreciate that they're transparent about where their meat comes from. | J'apprécie qu'ils soient transparents sur l'origine de leur viande.
Cooking for others is one of the ways I show I care. | Cuisiner pour les autres est une de mes façons de montrer que je tiens à eux.
A good meal can turn a bad day around. | Un bon repas peut sauver une mauvaise journée.
If you want to understand a place, start with its food. | Si tu veux comprendre un endroit, commence par sa cuisine.
This dish has a story behind it, and it goes back generations. | Ce plat a une histoire qui remonte à plusieurs générations.
The flavor is hard to describe; it's savory, a bit sweet, and very comforting. | Le goût est difficile à décrire ; c'est salé, un peu sucré et très réconfortant.
It's an acquired taste, so no pressure if it's not for you. | C'est un goût qui s'acquiert, alors aucune pression si ce n'est pas pour toi.
Night markets are where you'll find the most authentic street food. | C'est dans les marchés de nuit qu'on trouve la cuisine de rue la plus authentique.
Every family has its own version of this recipe. | Chaque famille a sa propre version de cette recette.
In our culture, sharing food is a way of showing hospitality. | Dans notre culture, partager la nourriture est une façon de montrer son hospitalité.
Locals tend to judge a restaurant by how crowded it is. | Les gens d'ici jugent souvent un restaurant à son affluence.
I chose dishes that are mild, so you can ease into the local flavors. | J'ai choisi des plats doux pour que tu t'habitues petit à petit aux saveurs locales.
Feel free to be honest; I won't be offended if you don't like it. | Sois honnête ; je ne serai pas vexé si tu n'aimes pas.
`
});
