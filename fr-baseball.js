// 法文對照（Français）：棒球
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


addFrench("baseball", {
  words: `
baseball | le baseball | J'adore le baseball.
ball | la balle | Lance-moi la balle.
bat | la batte | Il a balancé la batte.
glove | le gant | Mets ton gant.
helmet | le casque | Mets un casque quand tu frappes.
cap | la casquette | J'ai une casquette de l'équipe.
uniform | l'uniforme | Notre uniforme est blanc.
throw | lancer | Lance la balle au premier but.
catch | attraper | Attrape la balle !
hit | frapper | Frappe fort la balle !
run | courir | Cours au premier but !
slide | glisser | Glisse au deuxième but !
swing | élancer | Élance-toi !
miss | rater | J'ai raté la balle.
pitcher | le lanceur | Le lanceur lance la balle.
catcher | le receveur | Le receveur porte un masque.
batter | le frappeur | Le frappeur est prêt.
player | le joueur | C'est mon joueur préféré.
team | l'équipe | Quelle équipe tu aimes ?
coach | l'entraîneur | L'entraîneur nous a fait un signe.
umpire | l'arbitre | L'arbitre a dit « Prise ! ».
fan | le fan | Je suis un grand fan de baseball.
game | le match | Le match commence à 18 h 30.
inning | la manche | C'est la neuvième manche.
base | le but | Il est au deuxième but.
first base | le premier but | Cours au premier but.
second base | le deuxième but | La balle est allée au deuxième but.
third base | le troisième but | Il a volé le troisième but.
home plate | le marbre | Il a couru jusqu'au marbre.
out | retiré | Il est retiré !
safe | sauf | Il est sauf !
strike | la prise | Première prise !
ball four | la quatrième balle | Quatrième balle ! Va au premier but.
home run | le coup de circuit | Il a frappé un coup de circuit !
score | le score | Quel est le score ?
score a run | marquer un point | Marquons un point !
win | gagner | J'espère qu'on gagne ce soir.
lose | perdre | On risque de perdre ce match.
field | le terrain | Le terrain est très vert.
stadium | le stade | Le stade est plein.
ticket | le billet | J'ai acheté deux billets.
seat | la place | Nos places sont derrière le marbre.
cheer | encourager | Encourageons notre équipe !
drum | le tambour | Les supporters jouent du tambour dans les tribunes.
song | le chant | Chaque joueur a son chant.
cheerleader | la pom-pom girl | Les pom-pom girls dansent.
hot dog | le hot-dog | Prenons un hot-dog.
popcorn | le pop-corn | Je veux du pop-corn.
beer | la bière | Mon père a bu une bière au match.
TV | la télé | Je regarde le baseball à la télé.
radio | la radio | Grand-père écoute le match à la radio.
fast | rapide | Ce lancer était rapide !
slow | lent | Il a lancé une balle lente.
high | haut | La balle est montée très haut.
low | bas | Le lancer était bas.
far | loin | Il l'a frappée vraiment loin.
foul ball | la fausse balle | J'ai attrapé une fausse balle !
play catch | se faire des passes | Faisons-nous des passes au parc.
practice | l'entraînement | Nous avons entraînement tous les samedis.
little league | la petite ligue | Mon fils joue en petite ligue.
park | le parc | Jouons au parc.
dirt | la terre | Son uniforme est couvert de terre.
grass | l'herbe | L'herbe est mouillée.
bench | le banc | Il est assis sur le banc.
number | le numéro | Son numéro est le 52.
name | le nom | Son nom est sur son maillot.
star | la star | C'est une star du baseball.
favorite | préféré | Quelle est ton équipe préférée ?
night game | le match en nocturne | Nous sommes allés voir un match en nocturne.
day game | le match en journée | Les matchs en journée sont chauds en été.
rain delay | l'interruption pour pluie | Il y a une interruption pour pluie.
scoreboard | le tableau d'affichage | Regarde le tableau d'affichage.
win streak | la série de victoires | Ils sont sur une série de cinq victoires.
champion | le champion | Ce sont les champions !
trophy | le trophée | L'équipe a soulevé le trophée.
Taiwan | Taïwan | Taïwan a gagné le match !
national team | l'équipe nationale | L'équipe nationale a joué contre le Japon.
strong arm | un bras puissant | Il a un bras puissant.
good eye | un bon œil | Elle a un bon œil au marbre.
sign | le signe | Le receveur a fait un signe.
nice catch | bel attrapé | Bel attrapé !
nice hit | belle frappe | Belle frappe !
throw hard | lancer fort | Ne lance pas fort aux débutants.
hold the bat | tenir la batte | Tiens la batte à deux mains.
watch the ball | regarder la balle | Regarde la balle jusqu'au bout.
tired arm | le bras fatigué | J'ai le bras fatigué après l'entraînement.
wave | la ola | Les supporters ont fait la ola.
souvenir | le souvenir | J'ai acheté une balle souvenir.
autograph | l'autographe | J'ai eu son autographe !
mascot | la mascotte | La mascotte est un singe.
season | la saison | La saison commence en mars.
schedule | le calendrier | Consulte le calendrier en ligne.
weekend | le week-end | Nous allons aux matchs le week-end.
sunny | ensoleillé | C'est ensoleillé. Prends un chapeau.
team bus | le bus de l'équipe | Le bus de l'équipe est arrivé.
dugout | l'abri | Les joueurs sont dans l'abri.
batting cage | la cage de frappe | Allons à la cage de frappe.
glove oil | l'huile pour gant | Utilise de l'huile pour gant pour l'assouplir.
baseball card | la carte de baseball | Je collectionne les cartes de baseball.
cleats | les chaussures à crampons | Mets des chaussures à crampons sur le terrain.
`,
  phrases: `
Do you like baseball? | Tu aimes le baseball ?
Let's play catch. | Faisons-nous des passes.
Throw me the ball. | Lance-moi la balle.
Catch! | Attrape !
Nice catch! | Bel attrapé !
Nice throw! | Beau lancer !
Here comes the ball! | Voilà la balle !
Hold the bat like this. | Tiens la batte comme ça.
Keep your eye on the ball. | Garde les yeux sur la balle.
Swing! | Frappe !
You hit it! | Tu l'as touchée !
Run! Run to first base! | Cours ! Cours au premier but !
Keep running! | Continue de courir !
Slide! | Glisse !
He's safe! | Il est sauf !
He's out! | Il est retiré !
Strike one! | Première prise !
Strike three, you're out! | Troisième prise, tu es retiré !
Ball four! | Quatrième balle !
It's a home run! | C'est un coup de circuit !
What a hit! | Quelle frappe !
Who's pitching today? | Qui lance aujourd'hui ?
Who's your favorite player? | Qui est ton joueur préféré ?
Which team do you support? | Tu soutiens quelle équipe ?
I'm a big fan. | Je suis un grand fan.
Let's go to a baseball game. | Allons voir un match de baseball.
I bought two tickets. | J'ai acheté deux billets.
Where are our seats? | Où sont nos places ?
Our seats are behind home plate. | Nos places sont derrière le marbre.
The game starts at six thirty. | Le match commence à six heures et demie.
What's the score? | Quel est le score ?
We're winning three to one. | On mène trois à un.
We're losing. | On est menés.
It's a tie game. | C'est l'égalité.
What inning is it? | On est à quelle manche ?
It's the seventh inning. | C'est la septième manche.
Let's cheer! | Encourageons !
Go, go, let's go! | Allez, allez, allez !
The cheerleaders are great. | Les pom-pom girls sont géniales.
Everyone is singing. | Tout le monde chante.
Let's get some food. | Allons acheter à manger.
I want a hot dog. | Je veux un hot-dog.
Watch out! Foul ball! | Attention ! Fausse balle !
I caught a foul ball! | J'ai attrapé une fausse balle !
Can I have your autograph? | Je peux avoir votre autographe ?
Let's take a picture with the mascot. | Prenons une photo avec la mascotte.
It's raining. The game is delayed. | Il pleut. Le match est retardé.
The game was cancelled. | Le match a été annulé.
We won! | On a gagné !
We lost. Maybe next time. | On a perdu. Ce sera pour la prochaine fois.
What a great game! | Quel super match !
I watch baseball on TV. | Je regarde le baseball à la télé.
My dad loves baseball. | Mon père adore le baseball.
I play on a little league team. | Je joue dans une équipe de petite ligue.
I'm the pitcher. | Je suis le lanceur.
I'm the catcher. | Je suis le receveur.
I play first base. | Je joue au premier but.
I want to be a baseball player. | Je veux être joueur de baseball.
We have practice on Saturday. | Nous avons entraînement samedi.
Don't forget your glove. | N'oublie pas ton gant.
Wear your helmet. | Mets ton casque.
Put on your cap. | Mets ta casquette.
My glove is new. | Mon gant est neuf.
This bat is too heavy. | Cette batte est trop lourde.
The ball is hard. Be careful. | La balle est dure. Fais attention.
Throw it slowly, please. | Lance doucement, s'il te plaît.
Throw it to second base! | Lance au deuxième but !
Get the ball! | Va chercher la balle !
Good job, everyone! | Bravo, tout le monde !
High five! | Tope là !
The pitcher throws very fast. | Le lanceur lance très vite.
That was a strike. | C'était une prise.
That was a ball. | C'était une balle.
He hit it really far! | Il l'a frappée vraiment loin !
It's going, going, gone! | Elle part, elle part, elle est partie !
The bases are full. | Les buts sont remplis.
Two outs! | Deux retraits !
One more out! | Encore un retrait !
Last inning! | Dernière manche !
Taiwan is playing Japan tonight. | Taïwan joue contre le Japon ce soir.
Let's watch the game together. | Regardons le match ensemble.
I'm so excited! | Je suis tellement excité !
I'm so nervous! | Je suis tellement nerveux !
Come on, you can do it! | Allez, tu peux le faire !
That was close! | C'était serré !
The umpire made a bad call. | L'arbitre s'est trompé.
Baseball is Taiwan's favorite sport. | Le baseball est le sport préféré des Taïwanais.
Many fans come to every game. | Beaucoup de supporters viennent à chaque match.
The stadium is so loud. | Le stade est tellement bruyant.
Let's do the wave! | Faisons la ola !
I love the cheer songs. | J'adore les chants d'encouragement.
I collect baseball cards. | Je collectionne les cartes de baseball.
Let's go to the batting cage. | Allons à la cage de frappe.
I hit ten balls today. | J'ai frappé dix balles aujourd'hui.
My arm is tired. | J'ai le bras fatigué.
Let's play again tomorrow. | On rejoue demain.
Thanks for the game! | Merci pour la partie !
See you at the stadium! | Rendez-vous au stade !
Baseball season starts in March. | La saison de baseball commence en mars.
I can't wait for the next game. | J'ai hâte d'être au prochain match.
`,
});

addFrench("baseball", {
  words: `
count | le compte | Quel est le compte ?
top of the inning | la première moitié de manche | Les visiteurs frappent en première moitié de manche.
bottom of the inning | la seconde moitié de manche | L'équipe à domicile frappe en seconde moitié de manche.
strikeout | le retrait sur trois prises | Il a réussi dix retraits sur trois prises.
walk | le but sur balles | Le lanceur a accordé un but sur balles.
single | le simple | Il a frappé un simple au champ centre.
double | le double | Elle a frappé un double le long de la ligne.
triple | le triple | Un triple est rare.
grand slam | le grand chelem | Il a frappé un grand chelem !
RBI | le point produit | Il a produit trois points.
batting average | la moyenne au bâton | Sa moyenne au bâton est de .320.
ERA | la moyenne de points mérités | Sa moyenne de points mérités est inférieure à 2,00.
starting pitcher | le lanceur partant | Qui est le lanceur partant ce soir ?
relief pitcher | le releveur | Un releveur est entré.
closer | le stoppeur | Le stoppeur a sauvé le match.
bullpen | l'enclos des releveurs | Les releveurs étaient fatigués.
shortstop | l'arrêt-court | L'arrêt-court a fait un superbe jeu.
infield | le champ intérieur | Le champ intérieur est rapproché.
outfield | le champ extérieur | Il joue au champ extérieur.
left field | le champ gauche | C'est une chandelle au champ gauche.
center field | le champ centre | Elle joue au champ centre.
right field | le champ droit | Il a un bras puissant au champ droit.
fly ball | la chandelle | Il a frappé une chandelle.
ground ball | la balle au sol | Une balle au sol vers le deuxième but.
line drive | la flèche | Une flèche au milieu !
pop-up | le ballon intérieur | Il a frappé un ballon vers le receveur.
bunt | l'amorti | Il a fait un amorti.
sacrifice fly | le ballon-sacrifice | Un ballon-sacrifice a fait marquer le coureur.
stolen base | le but volé | Elle est en tête de la ligue pour les buts volés.
double play | le double jeu | Ils ont réussi un double jeu.
error | l'erreur | Une erreur a permis au point de marquer.
fastball | la balle rapide | Sa balle rapide atteint 150 kilomètres à l'heure.
curveball | la balle courbe | Il l'a retiré avec une balle courbe.
slider | le slider | Son slider est redoutable.
changeup | le changement de vitesse | Un bon changement de vitesse trompe les frappeurs.
forkball | la balle fourchette | Les lanceurs japonais adorent la balle fourchette.
pitch count | le nombre de lancers | Il en est déjà à 100 lancers.
strike zone | la zone des prises | Ce lancer était hors de la zone des prises.
full count | le compte complet | C'est un compte complet : trois balles, deux prises.
hit by pitch | le frappeur atteint | Il a été atteint par un lancer.
wild pitch | le mauvais lancer | Un mauvais lancer a fait avancer le coureur.
balk | le balk | L'arbitre a appelé un balk.
foul line | la ligne des fausses balles | La balle est tombée pile sur la ligne.
warning track | la piste d'avertissement | Il l'a attrapée sur la piste d'avertissement.
on-deck circle | le cercle d'attente | Il attend dans le cercle d'attente.
lineup | l'alignement | Voici l'alignement de ce soir.
cleanup hitter | le quatrième frappeur | Le quatrième frappeur a de la puissance.
leadoff hitter | le premier frappeur | Le premier frappeur a atteint le but.
designated hitter | le frappeur désigné | Il est frappeur désigné aujourd'hui.
pinch hitter | le frappeur suppléant | Ils ont envoyé un frappeur suppléant.
pinch runner | le coureur suppléant | Un coureur suppléant l'a remplacé au premier but.
manager | le gérant | Le gérant s'est disputé avec l'arbitre.
extra innings | les manches supplémentaires | Le match est allé en manches supplémentaires.
walk-off | le coup de la victoire | Il a frappé un circuit de la victoire !
no-hitter | le match sans coup sûr | Elle a lancé un match sans coup sûr.
perfect game | le match parfait | Un match parfait est très rare.
shutout | le blanchissage | Il a réussi un blanchissage.
save | le sauvetage | Le stoppeur a obtenu un sauvetage.
CPBL | la CPBL | La saison de la CPBL commence en mars.
World Baseball Classic | la Classique mondiale de baseball | Taïwan a battu la Corée à la Classique mondiale de baseball.
Premier12 | le Premier12 | Taïwan a gagné le Premier12.
MLB | la MLB | Il a signé avec une équipe de la MLB.
NPB | la NPB | Elle suit les matchs de la NPB.
home team | l'équipe à domicile | L'équipe à domicile frappe en dernier.
visiting team | l'équipe visiteuse | L'équipe visiteuse a marqué en premier.
standings | le classement | Regarde le classement.
playoffs | les séries éliminatoires | Ils se sont qualifiés pour les séries éliminatoires.
Taiwan Series | la Taiwan Series | La Taiwan Series commence la semaine prochaine.
rookie | la recrue | La recrue a frappé un coup de circuit.
veteran | le vétéran | Le vétéran connaît le jeu.
ace | l'as | C'est l'as de l'équipe.
slugger | le cogneur | Le cogneur a frappé 40 circuits.
contact hitter | le frappeur de contact | Un frappeur de contact est rarement retiré sur prises.
cheering section | la tribune des supporters | Nous étions assis dans la tribune des supporters.
cheer song | le chant d'encouragement | Tout le monde connaît son chant d'encouragement.
signal | le signal | L'entraîneur a envoyé le signal de l'amorti.
tag | toucher | Le receveur l'a retiré en le touchant.
force out | le retrait forcé | C'est un retrait forcé au deuxième but.
steal | voler | Il a essayé de voler le deuxième but.
pickoff | le retrait sur feinte | Le lanceur a tenté un retrait sur feinte.
earned run | le point mérité | Il a accordé un point mérité.
base hit | le coup sûr | Il a frappé un coup sûr au champ droit.
foul tip | la fausse balle frappée du bout | Le receveur a capté la fausse balle.
check swing | l'élan retenu | C'était un élan retenu ?
called strike | la prise sans élan | C'était une troisième prise sans élan.
swinging strike | la prise sur élan | C'est une prise sur élan !
breaking ball | la balle cassante | Il n'arrive pas à frapper une balle cassante.
velocity | la vitesse | Sa vitesse est en baisse ce soir.
mound | le monticule | Le lanceur est retourné au monticule.
rubber | la plaque du lanceur | Garde le pied sur la plaque.
batter's box | la boîte du frappeur | Entre dans la boîte du frappeur.
seventh-inning stretch | la pause de la septième manche | Nous avons chanté pendant la pause de la septième manche.
box score | le sommaire | Regarde le sommaire du match.
bases loaded | les buts remplis | Avec les buts remplis, il a frappé un double.
relief | la relève | Il est entré en relève.
sinker | la balle plongeante | Sa balle plongeante provoque des balles au sol.
knuckleball | la balle papillon | La balle papillon tourne à peine.
two outs | deux retraits | Il y a deux retraits.
caught stealing | retiré en tentative de vol | Il a été retiré en tentative de vol.
infield fly | le ballon intérieur automatique | L'arbitre a appelé un ballon intérieur automatique.
hit a home run | faire un carton | Tu as fait un carton avec ce discours.
out of left field | inattendu | Cette question était totalement inattendue.
touch base | reprendre contact | Reprenons contact demain.
cover all the bases | parer à toute éventualité | Nous devons parer à toute éventualité.
step up to the plate | prendre ses responsabilités | Il est temps de prendre tes responsabilités.
a ballpark figure | un chiffre approximatif | Tu peux me donner un chiffre approximatif ?
in the ballpark | dans le bon ordre de grandeur | Ton estimation est dans le bon ordre de grandeur.
right off the bat | d'emblée | Je l'ai appréciée d'emblée.
three strikes and you're out | trois erreurs et c'est fini | Trois erreurs et c'est fini.
throw a curveball | prendre au dépourvu | Les recruteurs aiment prendre au dépourvu.
strike out | échouer | J'échoue toujours avec elle.
play hardball | jouer la carte de la fermeté | Ils sont prêts à jouer la carte de la fermeté.
off base | à côté de la plaque | Ta réponse est complètement à côté de la plaque.
a whole new ball game | une tout autre histoire | C'est une tout autre histoire maintenant.
rain out | annuler à cause de la pluie | Les orages peuvent faire annuler le match.
`,
});

addFrench("baseball", {
  phrases: `
Who's the starting pitcher tonight? | Qui est le lanceur partant ce soir ?
He's been pitching really well lately. | Il lance vraiment bien ces derniers temps.
His fastball reaches 150 kilometers an hour. | Sa balle rapide atteint 150 kilomètres à l'heure.
He struck out the side. | Il a retiré les trois frappeurs sur des prises.
He's got ten strikeouts already. | Il a déjà dix retraits sur des prises.
His pitch count is getting high. | Son nombre de lancers devient élevé.
They're warming up a reliever in the bullpen. | Un releveur s'échauffe dans l'enclos.
The manager is going to the mound. | Le gérant se rend au monticule.
Here comes the closer. | Voici le stoppeur.
He picked up the save. | Il a obtenu le sauvetage.
It's a full count. | Le compte est complet.
He took a called third strike. | Il a été retiré sur une troisième prise sans s'élancer.
He swung at a ball in the dirt. | Il s'est élancé sur une balle dans la terre.
That pitch was outside the strike zone. | Ce lancer était hors de la zone des prises.
He drew a walk. | Il a obtenu un but sur balles.
He was hit by a pitch. | Il a été atteint par un lancer.
Line drive to center field! | Flèche au champ centre !
It's a ground ball to the shortstop. | C'est une balle au sol vers l'arrêt-court.
It's a routine fly ball. | C'est une chandelle facile.
He hit a double down the left-field line. | Il a frappé un double le long de la ligne du champ gauche.
That's a stand-up triple! | C'est un triple sans même glisser !
He hit a grand slam! | Il a frappé un grand chelem !
It's a walk-off home run! | C'est un circuit de la victoire !
They turned a double play. | Ils ont réussi un double jeu.
What a diving catch! | Quel attrapé en plongeon !
The shortstop made a great play. | L'arrêt-court a fait un superbe jeu.
The runner is stealing second! | Le coureur vole le deuxième but !
He was caught stealing. | Il a été retiré en tentative de vol.
The runner tagged up and scored. | Le coureur a retouché son but et a marqué.
He laid down a perfect bunt. | Il a réussi un amorti parfait.
That's a sacrifice fly. | C'est un ballon-sacrifice.
He drove in two runs. | Il a produit deux points.
The error let two runs score. | L'erreur a permis à deux points de marquer.
Runners on first and third. | Des coureurs au premier et au troisième but.
There's one out in the top of the eighth. | Un retrait en début de huitième manche.
We need a hit with runners in scoring position. | Il nous faut un coup sûr avec des coureurs en position de marquer.
The game is going to extra innings. | Le match va en manches supplémentaires.
He's batting .320 this season. | Il frappe pour .320 cette saison.
His ERA is under two. | Sa moyenne de points mérités est sous deux.
He leads the league in home runs. | Il est en tête de la ligue pour les circuits.
He's our cleanup hitter. | C'est notre quatrième frappeur.
They sent in a pinch hitter. | Ils ont envoyé un frappeur suppléant.
The manager argued with the umpire. | Le gérant s'est disputé avec l'arbitre.
They challenged the call. | Ils ont contesté la décision.
The call was overturned. | La décision a été renversée.
He pitched a complete game shutout. | Il a lancé un match complet avec blanchissage.
She threw a no-hitter! | Elle a lancé un match sans coup sûr !
This is the Taiwan Series. | C'est la Taiwan Series.
They clinched a playoff spot. | Ils ont assuré leur place en séries éliminatoires.
They're on a five-game winning streak. | Ils sont sur une série de cinq victoires.
They've lost four in a row. | Ils ont perdu quatre matchs d'affilée.
Our team is in first place. | Notre équipe est en première place.
The standings are very close this year. | Le classement est très serré cette année.
Who do you think will win the championship? | À ton avis, qui va gagner le championnat ?
Taiwan beat Japan in the World Baseball Classic. | Taïwan a battu le Japon à la Classique mondiale de baseball.
The whole country was watching. | Tout le pays regardait.
The atmosphere in the dome was electric. | L'ambiance sous le dôme était électrique.
Taiwanese fans are famous for their cheering. | Les supporters taïwanais sont célèbres pour leurs encouragements.
The cheer squad led the whole stadium. | Les pom-pom girls ont entraîné tout le stade.
Every player has his own cheer song. | Chaque joueur a son propre chant.
We sat in the home team's cheering section. | Nous étions assis dans la tribune des supporters de l'équipe à domicile.
I'm going to the CPBL opening game. | Je vais au match d'ouverture de la CPBL.
He signed with an MLB team. | Il a signé avec une équipe de la MLB.
He's playing in Japan now. | Il joue au Japon maintenant.
He's the team's ace. | C'est l'as de l'équipe.
He's a rookie, but he's very calm on the mound. | C'est une recrue, mais il est très calme sur le monticule.
He's coming back from an injury. | Il revient de blessure.
He's on the injured list. | Il est sur la liste des blessés.
His curveball is unhittable tonight. | Sa balle courbe est imprenable ce soir.
He's mixing his pitches well. | Il varie bien ses lancers.
The batter fouled off five pitches. | Le frappeur a fait cinq fausses balles.
He worked a long at-bat. | Il a livré une longue présence au bâton.
He's a contact hitter, not a power hitter. | C'est un frappeur de contact, pas un frappeur de puissance.
He hit it right on the sweet spot. | Il l'a frappée pile au bon endroit.
That ball is out of here! | Cette balle est partie !
It's off the wall! | Elle frappe le mur !
He made the catch at the warning track. | Il a fait l'attrapé sur la piste d'avertissement.
The infield is playing in. | Le champ intérieur est rapproché.
They intentionally walked him. | Ils lui ont accordé un but sur balles intentionnel.
It's the seventh-inning stretch. | C'est la pause de la septième manche.
The crowd sang along. | Le public a chanté en chœur.
That was a great comeback. | C'était une superbe remontée.
They blew a five-run lead. | Ils ont gâché une avance de cinq points.
That's baseball. Anything can happen. | C'est ça, le baseball. Tout peut arriver.
It's not over till it's over. | Ce n'est pas fini tant que ce n'est pas fini.
I'm going to the batting cage to practice. | Je vais à la cage de frappe pour m'entraîner.
Choke up on the bat. | Tiens la batte plus haut.
Keep your weight back. | Garde ton poids en arrière.
Step into the pitch. | Avance vers le lancer.
Follow through on your throw. | Accompagne ton lancer.
Get in front of the ground ball. | Mets-toi devant la balle au sol.
Call for the fly ball! | Annonce la chandelle !
I got it! | Je l'ai !
Back up the throw! | Couvre le relais !
Cover second base! | Couvre le deuxième but !
Watch the runner at first. | Surveille le coureur au premier but.
Good eye! | Bon œil !
Way to battle! | Bien battu !
Let's get some insurance runs. | Marquons quelques points de sécurité.
Great game, team. Let's bring it in. | Super match, l'équipe. Tout le monde au centre.
`,
});

addFrench("baseball", {
  words: `
sabermetrics | la sabermétrie | La sabermétrie a changé la façon dont les équipes évaluent les joueurs.
on-base percentage | la moyenne de présence sur les buts | La moyenne de présence sur les buts compte plus que la moyenne au bâton.
slugging percentage | la moyenne de puissance | Sa moyenne de puissance dépasse .600.
OPS | l'OPS | Un OPS supérieur à .900 est d'élite.
WAR | le WAR | Il était en tête de la ligue pour le WAR.
WHIP | le WHIP | Un WHIP bas montre un bon contrôle.
FIP | le FIP | Le FIP élimine l'effet de la défense.
spin rate | le taux de rotation | Un taux de rotation élevé fait monter les balles rapides.
exit velocity | la vitesse de sortie | Sa vitesse de sortie était de 180 kilomètres à l'heure.
launch angle | l'angle de sortie | La révolution de l'angle de sortie a augmenté le nombre de circuits.
barrel | la frappe parfaite | Il a frappé une balle rapide parfaitement.
pitch tunneling | l'effet tunnel | L'effet tunnel fait que des lancers différents se ressemblent.
pitch design | la conception de lancers | Les laboratoires de conception de lancers remodèlent les répertoires des lanceurs.
arsenal | le répertoire | Il a un répertoire de cinq lancers.
command | la précision | Il a une précision d'élite avec sa balle rapide.
control | le contrôle | Son contrôle s'est amélioré cette année.
times through the order | les passages dans l'alignement | Les frappeurs s'améliorent après deux passages dans l'alignement.
opener | le lanceur d'ouverture | L'équipe a utilisé un lanceur d'ouverture pour une manche.
bullpen game | le match de releveurs | Ce soir, c'est un match de releveurs.
high-leverage | à haute pression | C'est leur meilleur releveur dans les situations à haute pression.
pitch clock | le chronomètre des lancers | Le chronomètre des lancers a raccourci les matchs.
shift ban | l'interdiction du décalage | L'interdiction du décalage a aidé les frappeurs gauchers.
defensive shift | le décalage défensif | Le décalage défensif a enlevé des coups sûrs.
platoon | le pelotonnage | Ils l'utilisent en pelotonnage contre les gauchers.
matchup | le duel | Le gérant a joué le duel.
small ball | la stratégie de petites balles | Le baseball asiatique compte davantage sur la stratégie de petites balles.
moneyball | le Moneyball | Le Moneyball a montré que les données pouvaient battre de plus gros budgets.
front office | la direction | La direction a investi dans l'analyse de données.
farm system | le système de clubs-écoles | Ils ont le meilleur système de clubs-écoles du baseball.
minor leagues | les ligues mineures | Il a passé cinq ans dans les ligues mineures.
prospect | l'espoir | C'est le meilleur espoir de l'organisation.
call-up | le rappel | Le joueur rappelé a fait ses débuts ce soir.
posting system | le système d'affichage | Il est passé en MLB grâce au système d'affichage.
free agent | l'agent libre | Il est devenu agent libre.
arbitration | l'arbitrage salarial | Il a gagné son arbitrage salarial.
no-trade clause | la clause de non-échange | Son contrat a une clause de non-échange.
Tommy John surgery | l'opération Tommy John | Il se remet d'une opération Tommy John.
UCL | le ligament collatéral ulnaire | Il s'est déchiré le ligament collatéral ulnaire.
innings limit | la limite de manches | Les jeunes lanceurs ont une limite de manches.
pitch smart | les consignes Pitch Smart | Les ligues de jeunes suivent les consignes Pitch Smart.
overuse | la surutilisation | Les blessures de surutilisation touchent les jeunes lanceurs.
velocity drop | la baisse de vitesse | Une baisse de vitesse peut signaler une blessure.
mechanics | la mécanique | Sa mécanique met son coude sous tension.
release point | le point de relâchement | Un point de relâchement constant améliore la précision.
extension | l'extension | Une grande extension rend sa balle rapide encore plus rapide en apparence.
induced vertical break | le mouvement vertical induit | Sa balle rapide a un mouvement vertical induit d'élite.
sweeper | le sweeper | Le sweeper est le lancer à la mode.
splitter | la balle fendue | Sa balle fendue plonge au dernier moment.
two-seam fastball | la balle rapide à deux coutures | Une balle rapide à deux coutures entre sur les droitiers.
cutter | la balle coupée | Sa balle coupée casse les battes.
framing | le cadrage | Le cadrage du receveur vole des prises.
automated strike zone | la zone des prises automatisée | Une zone des prises automatisée est à l'essai.
challenge system | le système de contestation | Le système de contestation a renversé la décision.
replay review | la reprise vidéo | Le jeu est en cours de reprise vidéo.
sign stealing | le vol de signaux | Le scandale du vol de signaux a choqué les fans.
foreign substance | la substance étrangère | Les lanceurs sont contrôlés pour l'usage de substances étrangères.
PED | la substance dopante | Il a été suspendu pour usage de substance dopante.
match-fixing | les matchs truqués | Les scandales de matchs truqués ont failli détruire la CPBL.
reserve clause | la clause de réserve | La clause de réserve liait les joueurs à une seule équipe.
luxury tax | la taxe de luxe | Ils ont dépassé le seuil de la taxe de luxe.
revenue sharing | le partage des revenus | Le partage des revenus aide les équipes des petits marchés.
small-market team | l'équipe de petit marché | Les équipes de petit marché comptent sur les jeunes talents.
expansion team | l'équipe d'expansion | La ligue a ajouté une équipe d'expansion.
attendance | l'affluence | L'affluence a atteint un record cette année.
broadcasting deal | le contrat de diffusion | Le nouveau contrat de diffusion vaut des milliards.
naming rights | les droits de dénomination | Une banque a acheté les droits de dénomination du stade.
dome | le dôme | Le dôme de Taipei accueille des matchs internationaux.
retractable roof | le toit rétractable | Le stade a un toit rétractable.
fan culture | la culture des supporters | La culture des supporters à Taïwan est bruyante et joyeuse.
cheer squad | les pom-pom girls | Les pom-pom girls sont célèbres dans toute l'Asie.
national pride | la fierté nationale | La victoire a suscité une grande fierté nationale.
Little League World Series | les Séries mondiales des petites ligues | Taïwan a longtemps dominé les Séries mondiales des petites ligues.
golden age | l'âge d'or | Les années 70 ont été l'âge d'or du baseball taïwanais.
legacy | l'héritage | Le baseball a un héritage profond à Taïwan.
two-way player | le joueur à deux voies | C'est un rare joueur à deux voies.
Hall of Fame | le Temple de la renommée | Il a été élu au Temple de la renommée.
milestone | le cap | Il a atteint le cap des 300 victoires.
career high | le record personnel | Elle a établi un record personnel avec 15 retraits sur des prises.
slump | la léthargie | Il est en pleine léthargie.
hot streak | la séquence chaude | Il connaît une séquence chaude.
clubhouse | le vestiaire | L'ambiance dans le vestiaire est excellente.
chemistry | la cohésion | La cohésion de l'équipe leur a fait gagner le titre.
rebuild | la reconstruction | L'équipe est en reconstruction.
contender | le prétendant | Ils sont prétendants au titre cette année.
dynasty | la dynastie | Cette équipe était une dynastie.
pennant | le fanion | Ils ont gagné le fanion.
wild card | la place de meilleur deuxième | Ils se sont qualifiés comme meilleurs deuxièmes.
magic number | le nombre magique | Leur nombre magique est de trois.
tiebreaker | le critère de départage | Ils ont perdu au critère de départage.
rotation | la rotation | Il est le cinquième partant de la rotation.
depth chart | la hiérarchie | Il a grimpé dans la hiérarchie.
utility player | le joueur polyvalent | Un joueur polyvalent peut jouer partout.
five-tool player | le joueur complet | C'est un vrai joueur complet.
scouting report | le rapport de recrutement | Le rapport de recrutement dit qu'il ne frappe pas les sliders.
spring training | l'entraînement de printemps | L'entraînement de printemps commence en février.
winter league | la ligue d'hiver | Les jeunes joueurs progressent en ligue d'hiver.
hard-hit rate | le taux de frappes solides | Son taux de frappes solides est le meilleur de la ligue.
expected batting average | la moyenne au bâton attendue | Sa moyenne au bâton attendue suggère de la malchance.
BABIP | le BABIP | Un BABIP élevé redescend souvent à la normale.
strikeout rate | le taux de retraits sur des prises | Son taux de retraits sur des prises ne cesse d'augmenter.
knock it out of the park | faire un carton | Tu vas faire un carton.
get to first base | franchir la première étape | Nous n'avons même pas franchi la première étape.
a big hitter | un poids lourd | C'est un poids lourd de la tech.
pinch-hit | remplacer au pied levé | Tu peux me remplacer au pied levé à la réunion ?
batting a thousand | un sans-faute | Pour l'instant, tu fais un sans-faute.
the bottom of the ninth | la dernière chance | C'est la dernière chance pour ce projet.
a swing and a miss | un coup dans l'eau | Cette idée était un coup dans l'eau.
lead off | ouvrir le bal | Qui veut ouvrir le bal ?
throw someone a curve | prendre quelqu'un au dépourvu | Les examens peuvent prendre quelqu'un au dépourvu.
play ball | coopérer | Si tu coopères, nous t'aiderons.
major league | de taille | C'est une erreur de taille.
bush league | amateur | C'était un geste d'amateur.
a grand slam | un triomphe | Le nouveau produit a été un triomphe.
go to bat for | prendre la défense de | Mon patron prendra ma défense.
rookie mistake | l'erreur de débutant | C'était une erreur de débutant.
`,
  phrases: `
Analytics have transformed how teams evaluate players. | L'analyse de données a transformé la façon dont les équipes évaluent les joueurs.
On-base percentage is a better measure than batting average. | La moyenne de présence sur les buts est une meilleure mesure que la moyenne au bâton.
His OPS is among the best in the league. | Son OPS est parmi les meilleurs de la ligue.
WAR tries to capture a player's total value. | Le WAR tente de mesurer la valeur totale d'un joueur.
His FIP suggests he's been unlucky. | Son FIP suggère qu'il a été malchanceux.
A high BABIP usually comes back down to earth. | Un BABIP élevé finit généralement par redescendre.
His exit velocity is elite, even when the results aren't. | Sa vitesse de sortie est d'élite, même quand les résultats ne le sont pas.
The launch angle revolution led to more home runs and more strikeouts. | La révolution de l'angle de sortie a entraîné plus de circuits et plus de retraits sur des prises.
Teams now chase spin rate as much as velocity. | Les équipes recherchent désormais le taux de rotation autant que la vitesse.
His fastball plays up because of its induced vertical break. | Sa balle rapide est plus efficace grâce à son mouvement vertical induit.
Pitch tunneling makes his slider look like a fastball. | L'effet tunnel fait ressembler son slider à une balle rapide.
He added a sweeper in the off-season. | Il a ajouté un sweeper pendant l'intersaison.
Pitch design labs have changed player development. | Les laboratoires de conception de lancers ont changé le développement des joueurs.
Hitters do better the third time through the order. | Les frappeurs réussissent mieux au troisième passage dans l'alignement.
That's why managers pull starters earlier than ever. | C'est pourquoi les gérants retirent les partants plus tôt que jamais.
The bullpen has become more important than ever. | L'enclos des releveurs est devenu plus important que jamais.
They used an opener and then a bulk reliever. | Ils ont utilisé un lanceur d'ouverture, puis un releveur de longue durée.
Their best reliever is used in the highest-leverage spot, not just the ninth. | Leur meilleur releveur est utilisé dans les moments les plus décisifs, pas seulement en neuvième manche.
Old-school fans miss the complete game. | Les fans de la vieille école regrettent les matchs complets.
The pitch clock has made games much shorter. | Le chronomètre des lancers a beaucoup raccourci les matchs.
The shift ban was meant to bring back more balls in play. | L'interdiction du décalage visait à remettre plus de balles en jeu.
An automated strike zone could end arguments over calls. | Une zone des prises automatisée pourrait mettre fin aux disputes sur les décisions.
Pitch framing used to be a hidden skill for catchers. | Le cadrage était autrefois un talent caché des receveurs.
Tommy John surgery has become almost routine. | L'opération Tommy John est devenue presque banale.
Youth pitchers are throwing too hard, too young. | Les jeunes lanceurs lancent trop fort, trop jeunes.
Pitch counts protect young arms from overuse. | Les limites de lancers protègent les jeunes bras de la surutilisation.
Velocity gains often come at the cost of injury risk. | Les gains de vitesse se paient souvent par un risque de blessure.
His mechanics put a lot of stress on his elbow. | Sa mécanique met beaucoup de pression sur son coude.
A two-way player like him is incredibly rare. | Un joueur à deux voies comme lui est extrêmement rare.
The posting system allows NPB players to move to MLB. | Le système d'affichage permet aux joueurs de la NPB de passer en MLB.
Many Taiwanese players dream of playing in MLB. | Beaucoup de joueurs taïwanais rêvent de jouer en MLB.
The farm system is the lifeblood of a small-market team. | Le système de clubs-écoles est vital pour une équipe de petit marché.
He spent years in the minor leagues before his call-up. | Il a passé des années dans les ligues mineures avant d'être rappelé.
Arbitration hearings can strain relationships with the front office. | Les audiences d'arbitrage peuvent tendre les relations avec la direction.
The luxury tax limits how much big-market teams spend. | La taxe de luxe limite les dépenses des équipes des grands marchés.
Revenue sharing keeps smaller clubs competitive. | Le partage des revenus garde les petits clubs compétitifs.
Moneyball showed how data could compete with big budgets. | Le Moneyball a montré que les données pouvaient rivaliser avec les gros budgets.
Every team now has an analytics department. | Chaque équipe a désormais un département d'analyse.
The sign-stealing scandal damaged the sport's credibility. | Le scandale du vol de signaux a nui à la crédibilité du sport.
Pitchers are checked for foreign substances between innings. | Les lanceurs sont contrôlés pour les substances étrangères entre les manches.
Match-fixing scandals nearly destroyed professional baseball in Taiwan. | Les scandales de matchs truqués ont failli détruire le baseball professionnel à Taïwan.
Fans gradually returned after the league cleaned up. | Les supporters sont revenus peu à peu après le grand ménage de la ligue.
The new dome has made Taipei a hub for international baseball. | Le nouveau dôme a fait de Taipei une plaque tournante du baseball international.
Baseball is deeply tied to Taiwan's national identity. | Le baseball est profondément lié à l'identité nationale de Taïwan.
The Little League triumphs of the seventies united the nation. | Les triomphes en petite ligue des années 70 ont uni la nation.
The Premier12 title sparked celebrations across Taiwan. | Le titre au Premier12 a déclenché des célébrations dans tout Taïwan.
Baseball has its roots in Taiwan's colonial history. | Le baseball a ses racines dans l'histoire coloniale de Taïwan.
Indigenous players have played a huge role in Taiwanese baseball. | Les joueurs autochtones ont joué un rôle énorme dans le baseball taïwanais.
Cheerleading culture in Taiwan has become an attraction in itself. | La culture des pom-pom girls à Taïwan est devenue une attraction en soi.
Some cheerleaders have more followers than the players. | Certaines pom-pom girls ont plus d'abonnés que les joueurs.
Attendance has hit record highs in recent seasons. | L'affluence a atteint des records ces dernières saisons.
Broadcasting deals now drive the league's finances. | Les contrats de diffusion font désormais vivre les finances de la ligue.
Expansion teams have made the league more competitive. | Les équipes d'expansion ont rendu la ligue plus compétitive.
Small ball is still central to Asian baseball strategy. | La stratégie de petites balles reste centrale dans le baseball asiatique.
MLB has moved away from the sacrifice bunt. | La MLB a abandonné l'amorti-sacrifice.
The data says bunting usually lowers your chances of scoring. | Les données montrent que l'amorti réduit généralement les chances de marquer.
Context still matters: late and close games are different. | Le contexte compte toujours : les fins de match serrées sont différentes.
Platoon advantages explain many lineup decisions. | L'avantage gaucher-droitier explique beaucoup de choix d'alignement.
The manager played the matchup and brought in a lefty. | Le gérant a joué le duel et a fait entrer un gaucher.
Clubhouse chemistry is hard to measure but easy to feel. | La cohésion du vestiaire est difficile à mesurer, mais facile à ressentir.
Veterans help young players handle pressure. | Les vétérans aident les jeunes à gérer la pression.
A slump is as much mental as physical. | Une léthargie est autant mentale que physique.
Baseball is a game of failure: the best hitters fail seven times out of ten. | Le baseball est un sport d'échec : les meilleurs frappeurs échouent sept fois sur dix.
The season is a marathon, not a sprint. | La saison est un marathon, pas un sprint.
One bad inning can undo eight good ones. | Une mauvaise manche peut ruiner huit bonnes.
Defense up the middle wins championships. | La défense au centre du terrain fait gagner les titres.
Their magic number is down to two. | Leur nombre magique n'est plus que de deux.
They backed into the playoffs as a wild card. | Ils se sont qualifiés de justesse comme meilleurs deuxièmes.
October baseball is a different game. | Le baseball d'octobre est un autre sport.
Short series reward hot pitching more than depth. | Les séries courtes récompensent les lanceurs en forme plus que la profondeur.
The rebuild is finally paying off. | La reconstruction porte enfin ses fruits.
They traded their best prospect for a pennant run. | Ils ont échangé leur meilleur espoir pour courir après le fanion.
Trading the future for the present is always a gamble. | Sacrifier l'avenir pour le présent est toujours un pari.
A five-tool player can change a franchise. | Un joueur complet peut changer une franchise.
Utility players are the unsung heroes of a long season. | Les joueurs polyvalents sont les héros méconnus d'une longue saison.
His Hall of Fame case is built on longevity. | Sa candidature au Temple de la renommée repose sur sa longévité.
Steroid-era records remain controversial. | Les records de l'ère des stéroïdes restent controversés.
Baseball fans love arguing about statistics. | Les fans de baseball adorent se disputer sur les statistiques.
The best part of baseball is that every game tells a story. | Le meilleur du baseball, c'est que chaque match raconte une histoire.
Scouts still matter, even in the age of data. | Les recruteurs comptent toujours, même à l'ère des données.
The eye test and the data don't always agree. | L'œil et les données ne sont pas toujours d'accord.
Front offices now blend scouting with analytics. | Les directions mêlent désormais recrutement et analyse de données.
Young fans follow highlights more than full games. | Les jeunes fans suivent les résumés plus que les matchs complets.
Shorter games are helping baseball win back younger audiences. | Des matchs plus courts aident le baseball à reconquérir un public plus jeune.
The international game is growing thanks to the WBC. | Le baseball international se développe grâce à la Classique mondiale.
Asian baseball has caught up with the American game. | Le baseball asiatique a rattrapé le baseball américain.
Japan's development system is the envy of the world. | Le système de formation japonais fait des envieux dans le monde entier.
High school baseball in Japan is a national obsession. | Le baseball lycéen au Japon est une obsession nationale.
Taiwan's youth baseball has a proud tradition. | Le baseball des jeunes à Taïwan a une fière tradition.
Overtraining young players is a long-standing concern. | Le surentraînement des jeunes joueurs est une préoccupation ancienne.
Coaches are rethinking how much young pitchers throw. | Les entraîneurs repensent le volume de lancers des jeunes lanceurs.
A strong farm system means you don't have to buy stars. | Un bon système de clubs-écoles évite d'acheter des stars.
The draft is more of an art than a science. | La draft est plus un art qu'une science.
Spring training is where position battles are decided. | C'est à l'entraînement de printemps que se décident les batailles de postes.
Winter leagues give young players valuable at-bats. | Les ligues d'hiver donnent aux jeunes de précieuses présences au bâton.
A pennant race in September is pure drama. | Une course au fanion en septembre, c'est du pur suspense.
Baseball rewards patience, both on the field and in the stands. | Le baseball récompense la patience, sur le terrain comme dans les tribunes.
Every pitch is a small chess match. | Chaque lancer est une petite partie d'échecs.
The game keeps evolving, but the joy of a home run never changes. | Le jeu ne cesse d'évoluer, mais la joie d'un coup de circuit ne change jamais.
Win or lose, the fans will be back tomorrow. | Victoire ou défaite, les supporters reviendront demain.
`,
});
