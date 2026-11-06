// 法文對照（Français）：統計與工程估算
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
addFrench("stats", {
  words: `
number | le nombre ; le chiffre | Écris le nombre ici.
about | environ | Ça fait environ dix mètres de long.
around | à peu près | Ça coûte à peu près 500 dollars.
roughly | grosso modo ; approximativement | Grosso modo, la moitié d'entre nous est d'accord.
almost | presque | Nous sommes presque à 100.
exactly | exactement | Ça fait exactement deux mètres.
total | le total | Quel est le total ?
average | la moyenne | La moyenne est de 75.
half | la moitié | La moitié des élèves ont réussi.
quarter | le quart | Un quart de l'argent a disparu.
percent | pour cent | Dix pour cent des gens ont dit non.
double | doubler | Les ventes ont doublé cette année.
triple | tripler | Le prix a triplé.
increase | augmenter | Les prix ont augmenté l'an dernier.
decrease | diminuer | Le nombre a diminué.
go up | monter | Les prix montent chaque année.
go down | baisser | La température va baisser ce soir.
more than | plus de | Plus de 100 personnes sont venues.
less than | moins de | Ça pèse moins de cinq kilos.
count | compter | Comptons les cartons.
measure | mesurer | Mesure la table.
weight | le poids | Quel est le poids du carton ?
length | la longueur | Vérifie la longueur.
width | la largeur | Quelle est la largeur de la porte ?
height | la hauteur | La hauteur est de trois mètres.
size | la taille ; la dimension | Quelle taille ça fait ?
meter | le mètre | La pièce fait quatre mètres de large.
centimeter | le centimètre | Ça fait 30 centimètres de long.
kilogram | le kilogramme | Ça pèse deux kilos.
liter | le litre | Le réservoir contient 50 litres.
chart | le graphique | Regarde ce graphique.
graph | la courbe ; le graphique | La courbe monte.
table | le tableau | Les données sont dans le tableau.
data | les données | Il nous faut plus de données.
result | le résultat | Voici les résultats.
survey | l'enquête ; le sondage | Nous avons fait une enquête.
guess | la supposition ; deviner | Ce n'est qu'une supposition.
estimate | estimer | Tu peux estimer le coût ?
rough | approximatif | C'est un chiffre approximatif.
close | proche | C'est assez proche.
add | additionner | Additionne ces nombres.
subtract | soustraire | Soustrais 20 de 100.
multiply | multiplier | Multiplie-le par trois.
divide | diviser | Divise-le par quatre.
plus | plus | Deux plus deux égale quatre.
minus | moins | Dix moins trois égale sept.
times | fois | Trois fois quatre égale douze.
equal | égaler | Cinq plus cinq égale dix.
calculator | la calculatrice | Utilise une calculatrice.
math | les maths | Je ne suis pas bon en maths.
cost | le coût | Quel est le coût ?
price | le prix | Le prix a augmenté.
budget | le budget | Nous avons un petit budget.
hour | l'heure | Ça prend environ deux heures.
week | la semaine | Il nous faut environ une semaine.
fast | rapide | Cette machine est rapide.
slow | lent | L'ordinateur est lent.
big | grand ; gros | C'est un gros chiffre.
small | petit | La différence est petite.
high | élevé | La température est élevée.
low | bas ; faible | Le score est faible.
top | le sommet ; la tête | Notre équipe est en tête.
most | la plupart | La plupart des gens ont dit oui.
least | le moins | Qui a dépensé le moins ?
same | le même ; identique | Les chiffres sont identiques.
different | différent | Les résultats sont différents.
change | le changement | Il y a un gros changement.
line | la ligne | Trace une ligne.
point | le point | Chaque point représente une personne.
bar | la barre | La barre bleue, c'est cette année.
pie chart | le diagramme circulaire ; le camembert | Regarde le camembert.
score | le score ; la note | Mon score était de 85.
test | tester | Testons-le.
check | vérifier | Vérifie encore les chiffres.
mistake | l'erreur | Il y a une erreur ici.
correct | correct | C'est correct ?
wrong | faux | Ce chiffre est faux.
machine | la machine | La machine est en panne.
engine | le moteur | Le moteur est trop chaud.
engineer | l'ingénieur | Ma sœur est ingénieure.
build | construire | Ils construisent des ponts.
bridge | le pont | Le pont fait 500 mètres de long.
design | la conception ; le design | J'aime cette conception.
drawing | le plan ; le dessin technique | Regarde le plan.
model | la maquette ; le modèle | Nous avons fait une petite maquette.
part | la pièce | Cette pièce est cassée.
tool | l'outil | Utilise le bon outil.
power | l'énergie ; la puissance | La machine consomme beaucoup d'énergie.
heat | la chaleur | Le moteur dégage beaucoup de chaleur.
speed | la vitesse | Quelle est la vitesse ?
strong | solide ; résistant | Cet acier est très résistant.
material | le matériau | C'est en quel matériau ?
steel | l'acier | Le châssis est en acier.
temperature | la température | Vérifie la température.
fix | réparer | Tu peux le réparer ?
record | noter ; enregistrer | Note les chiffres.
plan | le plan | Quel est le plan ?
safe | sûr | C'est sûr ?
minute | la minute | Ça prend dix minutes.
million | le million | Cinq millions de personnes vivent ici.
`,
  phrases: `
How much is it, roughly? | Ça coûte combien, à peu près ?
About how long will it take? | Ça va prendre combien de temps, environ ?
It's about two hours. | Environ deux heures.
It's around 500 dollars. | C'est autour de 500 dollars.
It's more or less the same. | C'est plus ou moins pareil.
That's close enough. | C'est suffisamment proche.
I'm not sure. It's just a guess. | Je ne suis pas sûr. C'est juste une supposition.
Can you guess the number? | Tu peux deviner le chiffre ?
What's the total? | Ça fait combien en tout ?
Let's add it up. | Faisons le total.
Can you check my math? | Tu peux vérifier mes calculs ?
I think there's a mistake. | Je crois qu'il y a une erreur.
Let me count again. | Laisse-moi recompter.
Is that number correct? | Ce chiffre est juste ?
The numbers are the same. | Les chiffres sont identiques.
The numbers are very different. | Les chiffres sont très différents.
What's the average? | Quelle est la moyenne ?
Half of the people said yes. | La moitié des gens ont dit oui.
Most people like it. | La plupart des gens aiment.
Only a few people said no. | Seules quelques personnes ont dit non.
Ten percent of the students are absent. | Dix pour cent des élèves sont absents.
Sales went up this month. | Les ventes ont augmenté ce mois-ci.
The price went down. | Le prix a baissé.
It doubled in one year. | Ça a doublé en un an.
It's twice as big. | C'est deux fois plus grand.
It's half the size. | C'est deux fois plus petit.
Look at this chart. | Regarde ce graphique.
The blue line is this year. | La ligne bleue, c'est cette année.
The red bar is the highest. | La barre rouge est la plus haute.
This number is too high. | Ce chiffre est trop élevé.
This number is too low. | Ce chiffre est trop bas.
Write it down in the table. | Note-le dans le tableau.
Let's do a short survey. | Faisons une petite enquête.
How many people answered? | Combien de personnes ont répondu ?
More than 200 people answered. | Plus de 200 personnes ont répondu.
Can you measure it? | Tu peux le mesurer ?
How long is it? | Ça mesure combien de long ?
How wide is the door? | Quelle est la largeur de la porte ?
How tall is the building? | Quelle est la hauteur de l'immeuble ?
How heavy is the box? | Combien pèse le carton ?
It's about ten kilos. | Environ dix kilos.
It's three meters long. | Ça fait trois mètres de long.
It's 30 centimeters wide. | Ça fait 30 centimètres de large.
Use a ruler. | Utilise une règle.
Use a tape measure. | Utilise un mètre ruban.
Use a calculator. | Utilise une calculatrice.
Two plus three is five. | Deux plus trois égale cinq.
Ten minus four is six. | Dix moins quatre égale six.
Three times five is fifteen. | Trois fois cinq égale quinze.
Twelve divided by four is three. | Douze divisé par quatre égale trois.
Round it to the nearest ten. | Arrondis à la dizaine la plus proche.
It's almost 100. | C'est presque 100.
It's exactly 50. | C'est exactement 50.
It's a little more than that. | C'est un peu plus que ça.
It's a little less than that. | C'est un peu moins que ça.
How much does it cost? | Combien ça coûte ?
Is it in our budget? | Ça rentre dans notre budget ?
It's too expensive. | C'est trop cher.
We need more data. | Il nous faut plus de données.
Here are the results. | Voici les résultats.
What does this number mean? | Que signifie ce chiffre ?
I'm an engineer. | Je suis ingénieur.
I work in a factory. | Je travaille dans une usine.
I design machines. | Je conçois des machines.
I build bridges. | Je construis des ponts.
Look at the drawing. | Regarde le plan.
This part is broken. | Cette pièce est cassée.
Can you fix the machine? | Tu peux réparer la machine ?
The machine is too hot. | La machine est trop chaude.
Turn off the power. | Coupe le courant.
Check the temperature. | Vérifie la température.
It's running too fast. | Elle tourne trop vite.
It's running too slow. | Elle tourne trop lentement.
Is it safe to use? | On peut l'utiliser sans danger ?
Let's test it first. | Testons-le d'abord.
It works! | Ça marche !
It doesn't work. | Ça ne marche pas.
Let's try again. | Réessayons.
What material is this? | C'est quel matériau ?
It's made of steel. | C'est en acier.
It's very strong. | C'est très résistant.
We made a small model. | Nous avons fait une petite maquette.
Use the right tool. | Utilise le bon outil.
Record the numbers every hour. | Note les chiffres toutes les heures.
Let's make a plan. | Faisons un plan.
How many do we need? | Il nous en faut combien ?
We need about fifty. | Il nous en faut une cinquantaine.
That's a big number! | C'est un gros chiffre !
That's not much. | Ce n'est pas beaucoup.
Give me a rough number. | Donne-moi un chiffre approximatif.
Just give me a ballpark. | Donne-moi juste un ordre de grandeur.
I don't need the exact number. | Je n'ai pas besoin du chiffre exact.
About how many people will come? | Environ combien de personnes vont venir ?
Maybe 30 or 40. | Peut-être 30 ou 40.
It's between 10 and 20. | C'est entre 10 et 20.
That sounds about right. | Ça me paraît à peu près juste.
That seems too high. | Ça semble trop élevé.
Let's check it again. | Vérifions encore une fois.
Numbers don't lie. | Les chiffres ne mentent pas.
Let's look at the data. | Regardons les données.
`,
});

// ---------- 中級 Intermediate ----------
addFrench("stats", {
  words: `
ballpark figure | l'ordre de grandeur ; le chiffre approximatif | Tu peux me donner un ordre de grandeur du coût total ?
in the ballpark | dans le bon ordre de grandeur | Ton estimation est dans le bon ordre de grandeur.
rough estimate | l'estimation approximative | Ce n'est qu'une estimation approximative.
back-of-the-envelope | à la louche ; sur un coin de table | Faisons un calcul sur un coin de table.
round up | arrondir au supérieur | Arrondis à la centaine supérieure.
round down | arrondir à l'inférieur | Arrondis à la dizaine inférieure.
approximately | approximativement | Ça fait approximativement 3,5 mètres.
give or take | à peu de chose près | Ça fait 50 kilos, à peu de chose près.
order of magnitude | l'ordre de grandeur | C'est un ordre de grandeur au-dessus.
range | la fourchette ; l'étendue | La fourchette va de 10 à 20.
mean | la moyenne | La moyenne est de 42.
median | la médiane | Le revenu médian est inférieur à la moyenne.
mode | le mode | Le mode est la valeur la plus fréquente.
percentage | le pourcentage | Quel pourcentage d'utilisateurs sont nouveaux ?
percentage point | le point de pourcentage | Ça a augmenté de deux points de pourcentage.
ratio | le ratio ; le rapport | Le rapport est de trois pour un.
proportion | la proportion | Une grande proportion du budget va au personnel.
rate | le taux | Le taux de défaillance est faible.
trend | la tendance | La tendance est à la hausse.
peak | le pic | Les ventes atteignent leur pic en décembre.
fluctuate | fluctuer | Les prix fluctuent beaucoup.
steady | régulier ; stable | La croissance a été régulière.
sharp | brutal ; net | Il y a eu une chute brutale.
gradual | progressif | Nous avons constaté une hausse progressive.
significant | significatif ; important | La différence est significative.
sample | l'échantillon | Il nous faut un échantillon plus grand.
sample size | la taille de l'échantillon | La taille de l'échantillon est trop petite.
population | la population | L'échantillon doit représenter la population.
random | aléatoire | Choisissez les gens au hasard.
respondent | le répondant ; la personne interrogée | La plupart des personnes interrogées étaient d'accord.
questionnaire | le questionnaire | Remplissez le questionnaire, s'il vous plaît.
dataset | le jeu de données | Le jeu de données compte 10 000 lignes.
spreadsheet | le tableur | Mets les données dans un tableur.
column | la colonne | Ajoute une nouvelle colonne.
row | la ligne | Chaque ligne correspond à un client.
outlier | la valeur aberrante | Ce point est une valeur aberrante.
accurate | exact ; juste | Les données sont-elles exactes ?
precise | précis | Il nous faut une mesure précise.
error | l'erreur ; l'écart | Il y a une petite erreur.
margin of error | la marge d'erreur | La marge d'erreur est de 3 %.
tolerance | la tolérance | La tolérance est de plus ou moins 0,1 millimètre.
specification | la spécification ; le cahier des charges | Vérifie la spécification.
spec | la spec | C'est conforme à la spec.
dimension | la dimension ; la cote | Indique les cotes sur le plan.
diameter | le diamètre | Le tuyau a un diamètre de 5 centimètres.
radius | le rayon | Le rayon est la moitié du diamètre.
volume | le volume | Quel est le volume du réservoir ?
area | la surface ; l'aire | La surface est de 30 mètres carrés.
square meter | le mètre carré | Le bureau fait 200 mètres carrés.
capacity | la capacité | L'usine tourne à pleine capacité.
load | la charge | Le pont peut supporter une lourde charge.
pressure | la pression | La pression est trop élevée.
voltage | la tension | Vérifie la tension.
current | le courant | Le courant est de 2 ampères.
resistance | la résistance | Mesure la résistance.
power consumption | la consommation d'énergie | La consommation d'énergie est trop élevée.
efficiency | le rendement ; l'efficacité | Nous avons amélioré le rendement.
output | la production | La production est de 500 unités par jour.
input | l'entrée ; la donnée d'entrée | Saisis les valeurs d'entrée.
prototype | le prototype | Nous avons construit un prototype.
test run | l'essai | Faisons un essai.
trial and error | la méthode essai-erreur | Nous l'avons trouvé par essai-erreur.
troubleshoot | dépanner ; diagnostiquer | Tu peux m'aider à dépanner ça ?
root cause | la cause profonde | Il faut trouver la cause profonde.
defect | le défaut | Le taux de défauts est trop élevé.
quality control | le contrôle qualité | Le contrôle qualité vérifie chaque pièce.
yield | le rendement de fabrication | Le rendement est de 95 %.
throughput | le débit | Il nous faut un débit plus élevé.
bottleneck | le goulet d'étranglement | Les tests sont le goulet d'étranglement.
lead time | le délai de livraison | Le délai de livraison est de six semaines.
milestone | le jalon | Nous avons atteint le premier jalon.
feasible | réalisable | Ce plan est-il réalisable ?
feasibility study | l'étude de faisabilité | Nous avons fait une étude de faisabilité.
assumption | l'hypothèse | Quelles sont tes hypothèses ?
parameter | le paramètre | Modifie ce paramètre.
variable | la variable | Il y a trop de variables.
constant | constant | Maintiens la température constante.
formula | la formule | Utilise cette formule.
calculate | calculer | Calcule la charge totale.
convert | convertir | Convertis les pouces en centimètres.
unit | l'unité | C'est en quelle unité ?
metric | métrique | Nous utilisons le système métrique.
imperial | impérial | Le plan est en unités impériales.
safety factor | le coefficient de sécurité | Utilise un coefficient de sécurité de deux.
overestimate | surestimer | Ne surestime pas la demande.
underestimate | sous-estimer | Nous avons sous-estimé le coût.
on average | en moyenne | En moyenne, ça prend trois jours.
per | par | Ça coûte 20 dollars par unité.
annual | annuel | La croissance annuelle a été de 5 %.
monthly | mensuel | Voici les chiffres mensuels.
figure | le chiffre | Les chiffres sont bons.
digit | le chiffre (d'un nombre) | C'est un nombre à six chiffres.
decimal point | la virgule décimale | Décale la virgule d'un rang.
fraction | la fraction | Écris-le sous forme de fraction.
axis | l'axe | Le temps est sur l'axe des x.
label | l'étiquette ; le libellé | Ajoute un libellé à chaque courbe.
legend | la légende | Regarde la légende.
scale | l'échelle | L'échelle commence à zéro.
breakdown | la ventilation ; le détail | Je peux voir le détail des coûts ?
estimation | l'estimation | Savoir estimer rapidement est une compétence utile pour les ingénieurs.
`,
  phrases: `
Can you give me a ballpark figure for the total cost? | Tu peux me donner un ordre de grandeur du coût total ?
I just need a ballpark for now. | Pour l'instant, il me faut juste un ordre de grandeur.
Your estimate is in the ballpark. | Ton estimation est dans le bon ordre de grandeur.
That's not even in the ballpark. | Ce n'est même pas dans le bon ordre de grandeur.
Off the top of my head, it's about 10,000. | Comme ça, de tête, environ 10 000.
It's just a rough estimate. | Ce n'est qu'une estimation approximative.
Let's do a back-of-the-envelope calculation. | Faisons un calcul à la louche.
It's 50 kilos, give or take. | Ça fait 50 kilos, à peu de chose près.
It's somewhere between 3 and 5 million. | C'est quelque part entre 3 et 5 millions.
Let's round it up to 100. | Arrondissons à 100.
I rounded it down to keep it simple. | J'ai arrondi à l'inférieur pour simplifier.
We're talking about an order of magnitude difference. | On parle d'un écart d'un ordre de grandeur.
The mean is higher than the median because of a few big values. | La moyenne est supérieure à la médiane à cause de quelques grandes valeurs.
The median is a better measure here. | Ici, la médiane est un meilleur indicateur.
What percentage of customers came back? | Quel pourcentage de clients est revenu ?
It went up by two percentage points, not two percent. | Ça a augmenté de deux points de pourcentage, pas de deux pour cent.
The ratio of men to women is about one to one. | Le rapport hommes-femmes est d'environ un pour un.
The failure rate is under one percent. | Le taux de défaillance est inférieur à un pour cent.
Sales peaked in December and dropped in January. | Les ventes ont culminé en décembre et chuté en janvier.
Prices have fluctuated a lot this year. | Les prix ont beaucoup fluctué cette année.
There was a sharp increase in March. | Il y a eu une forte hausse en mars.
We've seen steady growth for five years. | Nous connaissons une croissance régulière depuis cinq ans.
The overall trend is going down. | La tendance générale est à la baisse.
Is the difference significant? | La différence est-elle significative ?
The sample size is too small to say. | L'échantillon est trop petit pour conclure.
We surveyed 500 respondents. | Nous avons interrogé 500 personnes.
Choose the participants at random. | Choisissez les participants au hasard.
Put the raw data in a spreadsheet. | Mets les données brutes dans un tableur.
Each row is one customer, and each column is one question. | Chaque ligne est un client et chaque colonne une question.
That point looks like an outlier. | Ce point ressemble à une valeur aberrante.
Should we remove the outliers? | Faut-il retirer les valeurs aberrantes ?
The margin of error is plus or minus three percent. | La marge d'erreur est de plus ou moins trois pour cent.
How accurate is this measurement? | Quelle est la justesse de cette mesure ?
We need a more precise number. | Il nous faut un chiffre plus précis.
What's the tolerance on this part? | Quelle est la tolérance sur cette pièce ?
It's within tolerance. | C'est dans la tolérance.
It's out of spec. | C'est hors spécification.
Does it meet the specification? | Est-ce conforme à la spécification ?
Please check the dimensions on the drawing. | Vérifiez les cotes sur le plan, s'il vous plaît.
What's the diameter of the pipe? | Quel est le diamètre du tuyau ?
What's the volume of the tank? | Quel est le volume du réservoir ?
The factory is running at full capacity. | L'usine tourne à pleine capacité.
What's the maximum load? | Quelle est la charge maximale ?
The pressure is above the limit. | La pression dépasse la limite.
Check the voltage and the current. | Vérifie la tension et le courant.
Power consumption went down by 10%. | La consommation d'énergie a baissé de 10 %.
We improved the efficiency of the motor. | Nous avons amélioré le rendement du moteur.
The daily output is about 500 units. | La production quotidienne est d'environ 500 unités.
We're building a prototype. | Nous construisons un prototype.
Let's do a test run before launch. | Faisons un essai avant le lancement.
We solved it by trial and error. | Nous l'avons résolu par essai-erreur.
Can you help me troubleshoot this machine? | Tu peux m'aider à dépanner cette machine ?
We need to find the root cause, not just fix the symptoms. | Il faut trouver la cause profonde, pas seulement traiter les symptômes.
The defect rate is too high. | Le taux de défauts est trop élevé.
Quality control found three bad parts. | Le contrôle qualité a trouvé trois pièces défectueuses.
Our yield improved to 95%. | Notre rendement est passé à 95 %.
Testing is our bottleneck. | Les tests sont notre goulet d'étranglement.
The lead time is about six weeks. | Le délai de livraison est d'environ six semaines.
We hit our first milestone. | Nous avons atteint notre premier jalon.
Is this plan technically feasible? | Ce plan est-il techniquement réalisable ?
What assumptions did you make? | Quelles hypothèses as-tu faites ?
If we change this parameter, what happens? | Si on modifie ce paramètre, que se passe-t-il ?
There are too many variables. | Il y a trop de variables.
Keep the temperature constant during the test. | Maintiens la température constante pendant l'essai.
Which formula did you use? | Quelle formule as-tu utilisée ?
Can you convert this to metric? | Tu peux convertir ça en unités métriques ?
What units are these in? | C'est en quelles unités ?
Don't mix metric and imperial units. | Ne mélange pas unités métriques et impériales.
We added a safety factor of two. | Nous avons appliqué un coefficient de sécurité de deux.
We underestimated the cost. | Nous avons sous-estimé le coût.
Don't overestimate how fast we can finish. | Ne surestime pas notre rapidité à finir.
On average, each repair takes three hours. | En moyenne, chaque réparation prend trois heures.
It costs about 20 dollars per unit. | Ça coûte environ 20 dollars l'unité.
Annual growth was around 5%. | La croissance annuelle a été d'environ 5 %.
The monthly figures look good. | Les chiffres mensuels sont bons.
Watch the decimal point! | Attention à la virgule !
Time is on the x-axis, and sales are on the y-axis. | Le temps est en abscisse, et les ventes en ordonnée.
Add a label to each axis. | Ajoute un titre à chaque axe.
The scale doesn't start at zero, so it looks bigger than it is. | L'échelle ne commence pas à zéro, alors ça paraît plus grand que ça ne l'est.
Can I see the cost breakdown? | Je peux voir le détail des coûts ?
Let's look at the numbers before we decide. | Regardons les chiffres avant de décider.
Where did this number come from? | D'où vient ce chiffre ?
What's the source of this data? | Quelle est la source de ces données ?
I'll double-check the calculation. | Je vais revérifier le calcul.
Let's compare it with last year's numbers. | Comparons avec les chiffres de l'an dernier.
That's a big jump from last month. | C'est un grand bond par rapport au mois dernier.
It's roughly in line with what we expected. | C'est à peu près conforme à nos prévisions.
I'd say it's about 70% done. | Je dirais que c'est fait à environ 70 %.
That's a conservative estimate. | C'est une estimation prudente.
That's an optimistic estimate. | C'est une estimation optimiste.
Can we get a range instead of one number? | On peut avoir une fourchette plutôt qu'un seul chiffre ?
How confident are you in that number? | À quel point es-tu sûr de ce chiffre ?
Let's add some buffer to the schedule. | Ajoutons une marge au planning.
These two numbers don't match. | Ces deux chiffres ne concordent pas.
The units are wrong. | Les unités sont fausses.
Is that per day or per month? | C'est par jour ou par mois ?
Is that in millimeters or centimeters? | C'est en millimètres ou en centimètres ?
Let's measure it twice before we cut. | Mesurons deux fois avant de couper.
Engineers like to say, "Measure twice, cut once." | Les ingénieurs aiment dire : « Mesurer deux fois, couper une fois. »
Let's not guess. Let's test it. | Ne devinons pas. Testons.
`,
});

// ---------- 高級 Advanced ----------
addFrench("stats", {
  words: `
standard deviation | l'écart type | L'écart type est faible.
variance | la variance | Une forte variance signifie des résultats moins constants.
distribution | la distribution | Regarde la distribution des données.
normal distribution | la loi normale | La taille suit à peu près une loi normale.
skewed | asymétrique | Les données de revenus sont asymétriques à droite.
correlation | la corrélation | Il y a une forte corrélation.
causation | la causalité | Corrélation n'est pas causalité.
regression | la régression | Nous avons fait une analyse de régression.
confidence interval | l'intervalle de confiance | L'intervalle de confiance à 95 % va de 10 à 14.
statistically significant | statistiquement significatif | Le résultat est statistiquement significatif.
p-value | la valeur p | La valeur p est inférieure à 0,05.
null hypothesis | l'hypothèse nulle | Nous avons rejeté l'hypothèse nulle.
hypothesis | l'hypothèse | Testons l'hypothèse.
sampling bias | le biais d'échantillonnage | Les sondages en ligne peuvent avoir un biais d'échantillonnage.
selection bias | le biais de sélection | Un biais de sélection peut ruiner une étude.
confounding variable | la variable confondante | L'âge est ici une variable confondante.
control group | le groupe témoin | Comparez les résultats avec le groupe témoin.
A/B test | le test A/B | Nous avons fait un test A/B sur la nouvelle page.
statistical power | la puissance statistique | L'étude manque de puissance statistique.
percentile | le percentile | Il est dans le 90e percentile.
quartile | le quartile | Le quartile supérieur gagne le plus.
interquartile range | l'écart interquartile | L'écart interquartile ignore les valeurs aberrantes.
extrapolate | extrapoler | N'extrapolez pas trop loin au-delà des données.
interpolate | interpoler | On peut interpoler entre les deux points.
forecast | la prévision | La prévision montre une croissance régulière.
projection | la projection | Cette projection suppose une demande inchangée.
compound annual growth rate | le taux de croissance annuel composé | Le taux de croissance annuel composé est de 8 %.
CAGR | le TCAC | Quel est le TCAC sur cinq ans ?
year-over-year | en glissement annuel | Le chiffre d'affaires a progressé de 12 % en glissement annuel.
moving average | la moyenne mobile | Utilise une moyenne mobile sur sept jours.
seasonally adjusted | corrigé des variations saisonnières | Ces chiffres sont corrigés des variations saisonnières.
weighted average | la moyenne pondérée | Calcule la moyenne pondérée.
Fermi estimate | l'estimation de Fermi | Une estimation de Fermi donne le bon ordre de grandeur.
sanity check | la vérification de vraisemblance | Fais une rapide vérification de vraisemblance des chiffres.
rule of thumb | la règle empirique | En règle générale, ajoute 20 % pour les imprévus.
sensitivity analysis | l'analyse de sensibilité | Fais une analyse de sensibilité sur les entrées clés.
Monte Carlo simulation | la simulation de Monte-Carlo | Une simulation de Monte-Carlo modélise l'incertitude.
uncertainty | l'incertitude | Cette estimation comporte beaucoup d'incertitude.
significant figures | les chiffres significatifs | Donne le résultat avec trois chiffres significatifs.
precision | la fidélité ; la précision | Une grande précision ne signifie pas toujours une grande justesse.
accuracy | la justesse ; l'exactitude | L'étalonnage améliore la justesse.
calibrate | étalonner | Étalonne le capteur chaque mois.
measurement uncertainty | l'incertitude de mesure | Indique toujours l'incertitude de mesure.
repeatability | la répétabilité | L'essai a une bonne répétabilité.
reproducibility | la reproductibilité | La reproductibilité entre laboratoires est essentielle.
statistical process control | la maîtrise statistique des procédés (MSP) | Nous appliquons la MSP sur la ligne de production.
control chart | la carte de contrôle | La carte de contrôle montre une dérive du procédé.
upper control limit | la limite de contrôle supérieure | Ce point dépasse la limite de contrôle supérieure.
process capability | la capabilité du procédé | La capabilité du procédé indique s'il peut respecter la spécification.
Cpk | le Cpk (indice de capabilité) | Notre Cpk est de 1,33.
Six Sigma | Six Sigma | L'usine applique les méthodes Six Sigma.
defects per million | les défauts par million | Nous sommes descendus à 50 défauts par million.
mean time between failures | le temps moyen entre pannes | Le temps moyen entre pannes est de 10 000 heures.
MTBF | le MTBF | Quel est le MTBF de cette pompe ?
reliability | la fiabilité | Les essais de fiabilité prennent des mois.
failure mode | le mode de défaillance | Nous avons listé tous les modes de défaillance possibles.
FMEA | l'AMDEC | Nous avons fait une AMDEC avant le lancement.
design of experiments | les plans d'expériences | Les plans d'expériences font gagner du temps d'essai.
iteration | l'itération ; la version | C'est la troisième itération de la conception.
trade-off | le compromis | Il y a un compromis entre coût et poids.
optimization | l'optimisation | L'optimisation a réduit la consommation d'énergie de 15 %.
constraint | la contrainte | L'espace est notre principale contrainte.
first principles | les premiers principes | Raisonnons à partir des premiers principes.
scalability | l'évolutivité ; la scalabilité | L'évolutivité est une grosse préoccupation.
redundancy | la redondance | La redondance améliore la fiabilité.
fail-safe | à sécurité intégrée | La vanne est à sécurité intégrée.
stress | la contrainte (mécanique) | La contrainte est maximale au niveau de l'assemblage.
strain | la déformation | Mesure la déformation de la poutre.
fatigue | la fatigue | La fatigue du métal a causé la fissure.
yield strength | la limite d'élasticité | Cet acier a une limite d'élasticité élevée.
load-bearing | porteur | Ne retire pas un mur porteur.
thermal expansion | la dilatation thermique | La dilatation thermique peut déformer les rails.
heat dissipation | la dissipation thermique | La dissipation thermique limite la puissance de la puce.
signal-to-noise ratio | le rapport signal sur bruit | Il nous faut un meilleur rapport signal sur bruit.
bandwidth | la bande passante | La bande passante est de 100 MHz.
latency | la latence | La latence est inférieure à 10 millisecondes.
nominal | nominal | La tension nominale est de 12 volts.
rated | nominal ; assigné | Le moteur a une puissance nominale de 2 kilowatts.
peak load | la charge de pointe | Le système doit supporter la charge de pointe.
worst-case scenario | le pire scénario | Concevez pour le pire scénario.
best-case scenario | le meilleur scénario | Dans le meilleur scénario, nous finissons en mai.
contingency | la provision pour imprévus | Ajoutez une provision pour imprévus de 10 % au budget.
cost overrun | le dépassement de coûts | Le projet a connu un gros dépassement de coûts.
bill of materials | la nomenclature | Vérifie la nomenclature.
unit cost | le coût unitaire | Le coût unitaire baisse avec le volume.
economies of scale | les économies d'échelle | Les économies d'échelle font baisser le prix.
break-even point | le seuil de rentabilité | Nous atteindrons le seuil de rentabilité l'an prochain.
quantify | quantifier | Tu peux quantifier le risque ?
benchmark | la référence ; le point de comparaison | Nous avons pris les résultats de l'an dernier comme référence.
baseline | la référence de départ | Mesure d'abord la référence de départ.
granularity | la granularité | Il nous faut plus de granularité dans les données.
cherry-pick | sélectionner ce qui arrange | Ne sélectionne pas seulement les données qui t'arrangent.
lies, damned lies and statistics | il y a les mensonges, les sacrés mensonges et les statistiques | Comme on dit, il y a les mensonges, les sacrés mensonges et les statistiques.
the numbers don't add up | les chiffres ne collent pas | Il y a un problème. Les chiffres ne collent pas.
crunch the numbers | faire les calculs | Laisse-moi faire les calculs et je reviens vers toi.
garbage in, garbage out | à données fausses, résultats faux | À données fausses, résultats faux.
ballpark it | donner un ordre de grandeur | Tu peux juste donner un ordre de grandeur pour l'instant ?
napkin math | le calcul sur un coin de nappe | Un petit calcul sur un coin de nappe montre que c'est possible.
Pareto principle | le principe de Pareto (règle des 80/20) | Le principe de Pareto dit que la plupart des problèmes viennent de quelques causes.
survivorship bias | le biais du survivant | Le biais du survivant cache tous les échecs.
`,
  phrases: `
Ballpark it for me. I don't need the exact figure yet. | Donne-moi un ordre de grandeur. Je n'ai pas encore besoin du chiffre exact.
A Fermi estimate will tell us if this is even worth pursuing. | Une estimation de Fermi nous dira si ça vaut la peine de continuer.
Let's do some napkin math before we build a model. | Faisons un calcul sur un coin de nappe avant de construire un modèle.
Let's sanity-check that number. It seems way too high. | Vérifions la vraisemblance de ce chiffre. Il paraît beaucoup trop élevé.
Get the order of magnitude right first, then refine it. | Trouve d'abord le bon ordre de grandeur, puis affine.
As a rule of thumb, add 20% to any software estimate. | En règle générale, ajoute 20 % à toute estimation logicielle.
I'd rather be roughly right than precisely wrong. | Je préfère avoir à peu près raison que tort avec précision.
Give me a range with a confidence level, not a single number. | Donne-moi une fourchette avec un niveau de confiance, pas un seul chiffre.
The 95% confidence interval is quite wide. | L'intervalle de confiance à 95 % est assez large.
The result is statistically significant, but is it practically significant? | Le résultat est statistiquement significatif, mais a-t-il une portée pratique ?
A p-value below 0.05 doesn't prove the hypothesis is true. | Une valeur p inférieure à 0,05 ne prouve pas que l'hypothèse est vraie.
We failed to reject the null hypothesis. | Nous n'avons pas pu rejeter l'hypothèse nulle.
Correlation does not imply causation. | Corrélation n'implique pas causalité.
There may be a confounding variable we haven't considered. | Il y a peut-être une variable confondante que nous n'avons pas prise en compte.
Ice cream sales and drownings both rise in summer, but one doesn't cause the other. | Les ventes de glaces et les noyades augmentent toutes deux en été, mais l'une ne cause pas l'autre.
Online polls suffer from selection bias. | Les sondages en ligne souffrent d'un biais de sélection.
Without a control group, we can't draw any conclusions. | Sans groupe témoin, on ne peut tirer aucune conclusion.
The study doesn't have enough statistical power to detect a small effect. | L'étude n'a pas assez de puissance statistique pour détecter un petit effet.
Income is skewed, so the mean is misleading. | Les revenus sont asymétriques, donc la moyenne est trompeuse.
Report the median and the interquartile range instead. | Donne plutôt la médiane et l'écart interquartile.
A small standard deviation means the results are consistent. | Un faible écart type signifie que les résultats sont constants.
Be careful when you extrapolate beyond your data. | Prudence quand tu extrapoles au-delà de tes données.
This forecast assumes current trends will continue. | Cette prévision suppose que les tendances actuelles se poursuivront.
Revenue grew 12% year-over-year. | Le chiffre d'affaires a progressé de 12 % sur un an.
The compound annual growth rate over five years was 8%. | Le taux de croissance annuel composé sur cinq ans a été de 8 %.
A seven-day moving average smooths out the noise. | Une moyenne mobile sur sept jours lisse le bruit.
Are these figures seasonally adjusted? | Ces chiffres sont-ils corrigés des variations saisonnières ?
We used a weighted average because the groups are different sizes. | Nous avons utilisé une moyenne pondérée parce que les groupes ont des tailles différentes.
A sensitivity analysis shows which assumptions matter most. | Une analyse de sensibilité montre quelles hypothèses comptent le plus.
We ran a Monte Carlo simulation with 10,000 scenarios. | Nous avons lancé une simulation de Monte-Carlo avec 10 000 scénarios.
Don't report more significant figures than your instrument can measure. | Ne donne pas plus de chiffres significatifs que ton instrument ne peut en mesurer.
Precision and accuracy are not the same thing. | Fidélité et justesse, ce n'est pas la même chose.
The gauge needs to be calibrated. | La jauge doit être étalonnée.
What's the measurement uncertainty of this instrument? | Quelle est l'incertitude de mesure de cet instrument ?
The control chart shows the process has drifted. | La carte de contrôle montre que le procédé a dérivé.
Two points are outside the upper control limit. | Deux points dépassent la limite de contrôle supérieure.
A Cpk of 1.33 or higher is a common target. | Un Cpk de 1,33 ou plus est un objectif courant.
Six Sigma aims for about 3.4 defects per million opportunities. | Six Sigma vise environ 3,4 défauts par million d'opportunités.
The MTBF tells us how often to schedule maintenance. | Le MTBF nous indique à quelle fréquence planifier la maintenance.
We did an FMEA to rank the failure modes by risk. | Nous avons fait une AMDEC pour classer les modes de défaillance par risque.
Design of experiments lets us test several factors at once. | Les plans d'expériences permettent de tester plusieurs facteurs à la fois.
Every design is a trade-off between cost, weight and performance. | Toute conception est un compromis entre coût, poids et performance.
Let's go back to first principles. | Revenons aux premiers principes.
What's the binding constraint here? | Quelle est la contrainte déterminante ici ?
We optimized the layout and cut energy use by 15%. | Nous avons optimisé l'agencement et réduit la consommation d'énergie de 15 %.
Build in redundancy for anything safety-critical. | Prévois de la redondance pour tout ce qui touche à la sécurité.
The system must fail safe if power is lost. | Le système doit se mettre en sécurité en cas de coupure de courant.
Stress concentrates at sharp corners. | Les contraintes se concentrent dans les angles vifs.
Metal fatigue can cause failure well below the yield strength. | La fatigue du métal peut provoquer une rupture bien en dessous de la limite d'élasticité.
Allow for thermal expansion in long steel structures. | Prévois la dilatation thermique dans les longues structures en acier.
Heat dissipation is the main limit on performance. | La dissipation thermique est la principale limite de performance.
We need to improve the signal-to-noise ratio. | Il faut améliorer le rapport signal sur bruit.
The motor is rated at 2 kilowatts, but it peaks higher at startup. | Le moteur a une puissance nominale de 2 kilowatts, mais il monte plus haut au démarrage.
Design for peak load, not average load. | Dimensionne pour la charge de pointe, pas pour la charge moyenne.
What does the worst-case scenario look like? | À quoi ressemble le pire scénario ?
In the best-case scenario, we break even next year. | Dans le meilleur scénario, nous atteignons l'équilibre l'an prochain.
Include a contingency of at least 10%. | Prévois une provision pour imprévus d'au moins 10 %.
Large projects almost always have cost overruns. | Les grands projets dépassent presque toujours leurs coûts.
Check the bill of materials against the drawing. | Compare la nomenclature avec le plan.
Economies of scale bring the unit cost down. | Les économies d'échelle font baisser le coût unitaire.
Can we quantify that risk? | Peut-on quantifier ce risque ?
Let's establish a baseline before we change anything. | Établissons une référence de départ avant de changer quoi que ce soit.
We benchmarked our product against three competitors. | Nous avons comparé notre produit à trois concurrents.
We need data at a finer granularity. | Il nous faut des données plus fines.
Don't cherry-pick the data that supports your view. | Ne sélectionne pas seulement les données qui confortent ton point de vue.
The numbers don't add up. Something is missing. | Les chiffres ne collent pas. Il manque quelque chose.
Let me crunch the numbers and get back to you this afternoon. | Je fais les calculs et je reviens vers toi cet après-midi.
Garbage in, garbage out: the model is only as good as the data. | À données fausses, résultats faux : le modèle ne vaut que ce que valent les données.
All models are wrong, but some are useful. | Tous les modèles sont faux, mais certains sont utiles.
There are lies, damned lies and statistics. | Il y a les mensonges, les sacrés mensonges et les statistiques.
A chart with a truncated axis can be very misleading. | Un graphique à axe tronqué peut être très trompeur.
Always ask what the denominator is. | Demande toujours quel est le dénominateur.
A 50% increase from a tiny base is still tiny. | Une hausse de 50 % sur une base minuscule reste minuscule.
Relative risk sounds scarier than absolute risk. | Le risque relatif paraît plus effrayant que le risque absolu.
Survivorship bias makes success look easier than it is. | Le biais du survivant fait paraître la réussite plus facile qu'elle ne l'est.
We only see the planes that made it back. | On ne voit que les avions qui sont rentrés.
Averages can hide huge differences between groups. | Les moyennes peuvent masquer d'énormes écarts entre groupes.
Show the distribution, not just the average. | Montre la distribution, pas seulement la moyenne.
What's the uncertainty on that estimate? | Quelle est l'incertitude de cette estimation ?
I'm about 80% confident in that figure. | Je suis sûr de ce chiffre à environ 80 %.
These are preliminary numbers and may change. | Ce sont des chiffres provisoires susceptibles de changer.
Let's validate the model against real data. | Validons le modèle avec des données réelles.
The simulation matches the test results within 5%. | La simulation concorde avec les résultats d'essai à 5 % près.
We need to iterate on the design a few more times. | Il faut encore quelques itérations sur la conception.
Scalability will become an issue at ten times the volume. | L'évolutivité deviendra un problème à dix fois le volume.
Latency spikes when the load exceeds 80%. | La latence s'envole quand la charge dépasse 80 %.
The nominal value is 12 volts, but the actual reading is 11.6. | La valeur nominale est de 12 volts, mais la mesure réelle est de 11,6.
Engineering is the art of making good decisions with incomplete data. | L'ingénierie, c'est l'art de bien décider avec des données incomplètes.
An approximate answer to the right question beats an exact answer to the wrong one. | Une réponse approximative à la bonne question vaut mieux qu'une réponse exacte à la mauvaise.
Start with a ballpark, then narrow it down as you learn more. | Commence par un ordre de grandeur, puis affine à mesure que tu en apprends plus.
If you can't measure it, you can't improve it. | Ce qu'on ne peut pas mesurer, on ne peut pas l'améliorer.
In God we trust; all others must bring data. | En Dieu nous croyons ; tous les autres doivent apporter des données.
Let the data speak for itself. | Laisse parler les données.
Numbers tell you what happened, not always why. | Les chiffres disent ce qui s'est passé, pas toujours pourquoi.
Good engineers question their own assumptions. | Les bons ingénieurs remettent en question leurs propres hypothèses.
Document your assumptions so others can check them. | Documente tes hypothèses pour que d'autres puissent les vérifier.
The devil is in the details, and so are the errors. | Le diable se cache dans les détails, et les erreurs aussi.
A second pair of eyes catches most calculation errors. | Un deuxième regard repère la plupart des erreurs de calcul.
Peer review is part of good engineering. | La relecture par les pairs fait partie d'une bonne ingénierie.
Better a rough answer today than a perfect one next month. | Mieux vaut une réponse approximative aujourd'hui qu'une réponse parfaite le mois prochain.
`,
});
